import gsap from "gsap";

export default function scrollToHash(event: MouseEvent , targetId: string) {
    event.preventDefault();

    gsap.to(window, {
        duration: 1,
        scrollTo: {
            y: targetId,
            offsetY: 80,
        },
        ease: "power2.inOut",
    });
}