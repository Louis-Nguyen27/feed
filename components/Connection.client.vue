<script setup>
import { socket } from "./socket";

const isConnected = ref(false);
const transport = ref("N/A");

const onConnect = () => {
    isConnected.value = true;
    transport.value = socket.io.engine.transport.name;
    console.log("Connected to socket server");

    socket.io.engine.on("upgrade", (newTransport) => {
        transport.value = newTransport.name;
    });
}

const onDisconnect = () => {
    isConnected.value = false;
    transport.value = "N/A";
    console.log("Disconnected from socket server");
}


if(socket.connected) {
    onConnect();
}

socket.on("connect", onConnect);
socket.on("disconnect", onDisconnect);

socket.on("message", (message) => {
    console.log("Received message:", message);
});

const findAllDog = () => {
    socket.emit("findAllDog", "goodmorning", (response) => {
        console.log("Response from findAllDog:", response);
    });
}

onBeforeUnmount(() => {
    socket.off("connect", onConnect);
    socket.off("disconnect", onDisconnect);
});
</script>
<template>
    <div>
        <h2>Socket Connection Status</h2>
        <p>Status: {{ isConnected ? "Connected" : "Disconnected" }}</p>
        <p>Transport: {{ transport }}</p>
        <button @click="findAllDog">Find All Dogs</button>
    </div>
</template>