import gsap from "gsap";

export default function scrollToHash(event, targetId) {
    event.preventDefault();
    console.log("otiwi");

    gsap.to(window, {
        duration: 1,
        scrollTo: {
            y: targetId,
            offsetY: 80,
        },
        ease: "power2.inOut",
    });

    //history.pushState(null, "", targetId);
}