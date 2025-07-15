// composables/useInViewport.ts
import { ref, onMounted, onBeforeUnmount } from 'vue'

export function useInViewport(targetRef: any) {
  const isIntersecting = ref(false)
  let observer: IntersectionObserver;

  onMounted(() => {
    observer = new IntersectionObserver(([entry]) => {
      isIntersecting.value = entry.isIntersecting
    })

    if (targetRef.value) observer.observe(targetRef.value)
  })

  onBeforeUnmount(() => {
    if (observer && targetRef.value) observer.unobserve(targetRef.value)
  })

  return { isIntersecting }
}
