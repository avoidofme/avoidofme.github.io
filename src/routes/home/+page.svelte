<script>
  import gsap from "gsap";
  import { cubicOut } from "svelte/easing";
  import { fade } from "svelte/transition";

  $effect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray(".project-animate").forEach((element) => {
        gsap.from(element, {
          y: 30,
          opacity: 0,
          duration: 0.6,
          scrollTrigger: {
            trigger: element,
            start: "top 85%",
            once: true,
          },
        });
      });
    });

    return () => {
      ctx.revert();
    };
  });
</script>

<div
  in:fade={{
    duration: 600,
    easing: cubicOut,
  }}
  class="flex-1 flex-col-reverse mx-1 lg:mx-0 rounded-md"
>
  <div id="hero" class="h-[calc(100svh-3rem)] bg-red-500 rounded-t-md">
    <h1 class="text-7xl font-bold tracking-tight">
      WHY IS THERE ANOTHER HERO HERE?!
    </h1>
  </div>
  <div id="project" class="h-svh bg-blue-500">
    <div class="grid grid-cols-3">
      <div class="project-animate">project 1</div>
      <div class="project-animate">project 2</div>
      <div class="project-animate">project 3</div>
    </div>
  </div>
  <div id="skill" class="h-svh bg-green-500">skills</div>
  <div id="contact" class="h-[calc(100svh-3rem)] bg-yellow-500 rounded-b-md">
    contact
    <div>
      <p class="inline">email me</p>
      <a href="mailto:avom.valtz@gmail.com">here</a>
    </div>
  </div>
</div>
