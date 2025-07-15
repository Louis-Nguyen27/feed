import { Post } from "~/types/post";

let localFeeds: Post[] = [
    {
        id: 123,
        name: "Tung",
        content: "In today’s fast-paced digital world, the ability to stay focused has become increasingly valuable. With countless notifications, multitasking demands, and endless streams of information, maintaining concentration can feel like a challenge. However, by setting clear goals, minimizing distractions, and practicing mindfulness, individuals can improve their productivity and overall well-being. As attention becomes a more scarce and powerful resource, those who can master it stand to gain a significant advantage in both personal and professional life."
    },
    {
        id: 455,
        name: "Tung",
        content: `In the last few decades, technology has transformed nearly every aspect of human life—from how we work and learn to how we socialize and build relationships. Digital communication tools have allowed us to connect across continents in seconds, yet paradoxically, many people report feeling more isolated and disconnected than ever. As smartphones, social media, artificial intelligence, and automation reshape the fabric of society, we are left to ask: is technology enriching our human connections, or is it eroding them?

At first glance, the answer might seem obvious. Technology has enabled unprecedented communication. A person in New York can video chat with a relative in Tokyo, collaborate on a project with someone in Cape Town, or fall in love with someone they’ve never physically met. Apps and platforms have given rise to entire communities of people who may never have found each other otherwise—those with rare illnesses, niche interests, or shared goals. There is undeniable beauty in the way technology has flattened the globe and expanded our social horizons.

Social media, in particular, has revolutionized the way we present ourselves and maintain relationships. Platforms like Facebook, Instagram, X (formerly Twitter), and TikTok have become extensions of our social identity. They help us share important life events, stay in touch with friends, and follow the lives of people we care about. For some, especially those with disabilities or social anxiety, online spaces provide a safer, more comfortable place to interact.

However, beneath these surface-level conveniences lies a more complicated truth. Many people have begun to notice that while we are “connected” more than ever before, we are also lonelier. A growing body of research suggests that excessive use of social media can lead to increased feelings of isolation, anxiety, and depression. The curated nature of online personas creates unrealistic comparisons and often leaves people feeling inadequate. We scroll through others’ highlight reels while grappling with our behind-the-scenes struggles, leading to a distorted sense of reality and social disconnection.

Moreover, the rise of digital communication has altered the depth and quality of our interactions. Face-to-face communication, with its rich array of non-verbal cues, has been increasingly replaced by text messages, emojis, and short-form video. While convenient, these tools lack the nuance of in-person dialogue. A typed message cannot convey a comforting tone, a hesitant pause, or the subtle expression of empathy the same way a real-life conversation can. This shift has affected not just personal relationships but professional and civic discourse as well, often reducing complex ideas to slogans or oversimplified soundbites.

Another issue is the addictive nature of technology. Social media platforms and apps are designed to keep users engaged through algorithms that exploit psychological triggers—dopamine loops, likes, shares, and infinite scrolls. As a result, people often find themselves checking their phones compulsively, even in the middle of real-life conversations. This phenomenon, sometimes called “phubbing” (phone snubbing), undermines the quality of interpersonal interaction and sends a silent message: “What’s on my screen is more important than you.”

In younger generations, particularly Gen Z, technology plays a central role in identity formation and social belonging. While many teens build strong digital friendships, there is concern that some may struggle to develop real-world social skills. The transition from online to offline interactions is not always smooth, and social media’s emphasis on likes and validation can foster anxiety and self-esteem issues. In extreme cases, it may even contribute to the rise of mental health disorders.

That said, it’s not all gloom. Technology also offers profound opportunities to strengthen human connection—when used mindfully. Video calls allow grandparents to read bedtime stories to grandchildren who live far away. Messaging apps let families and friends remain close despite busy schedules and long distances. Online support groups can provide a lifeline to people experiencing loss, trauma, or mental health struggles. In education, remote learning tools help students collaborate across cultures, promoting empathy and global citizenship.

Furthermore, technology has played a vital role in social movements and civic engagement. Hashtags have mobilized millions, livestreams have documented injustice, and online petitions have given everyday people a voice in shaping policy. When harnessed responsibly, digital tools can foster collective action and meaningful dialogue.

The COVID-19 pandemic served as a powerful test of both the strengths and weaknesses of technology in human connection. As lockdowns isolated people physically, the internet became our primary means of interaction. We celebrated birthdays on Zoom, attended virtual weddings, and streamed concerts from our living rooms. While this digital substitution couldn’t fully replicate the richness of in-person gatherings, it also reminded us that human connection can adapt and survive—even thrive—when supported by technology.

So, where does this leave us? The impact of technology on human connection is not inherently good or bad—it is deeply contextual. The same tool that enables community can also foster division; the same device that bridges distance can also distract from presence. Like any powerful invention, the value of technology depends largely on how we use it.

Moving forward, the challenge is to reclaim intentionality in our relationship with technology. This may involve setting boundaries, practicing digital detoxes, or rethinking how we engage on social media. It may mean teaching children not just how to use technology, but how to use it ethically and empathetically. It may require that companies design platforms that prioritize well-being over engagement metrics.

Perhaps most importantly, we must not lose sight of the irreplaceable value of real, unmediated human interaction. A shared meal, a spontaneous conversation, a long walk with a friend—these moments build the emotional fabric of our lives in ways that no app or screen ever could. Technology can support those bonds, but it cannot replace them.

In conclusion, technology is a double-edged sword in the realm of human connection. It offers incredible tools for communication, empathy, and expression—but also poses risks of isolation, distraction, and superficiality. The key is to strike a balance that allows us to enjoy the benefits of digital connection without sacrificing the depth and authenticity of real human relationships. In an increasingly digital age, the most revolutionary act may simply be to show up—fully present, fully human.`
    }
]

const delay = (ms: number) => {
    return new Promise(resolve => setTimeout(resolve, ms))
}

export default defineEventHandler(async (event) => {
    const { method } = event.node.req;

    await delay(3000)
    if(method == 'GET') {
        console.log("hoho")
        return localFeeds;
    }
    else if(method == 'POST'){

    }
    return {
        statusCode: 400
    }
})