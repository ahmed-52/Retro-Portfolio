<template>
  <div
    class="bio-container h-full bg-white border-t border-l border-gray-400"
  >
    <!-- Hero Section with Photo -->
    <div class="bg-white text-center px-4 py-3 border-b-2 border-gray-400">
      <img
        class="w-28 h-28 mx-auto mb-3 object-cover border border-black"
        src="@/assets/Biography/ahmed24.jpg"
        alt="Ahmed Abdulla"
      />
      <h1 class="text-base font-bold mb-0.5">Ahmed Abdulla</h1>
      <p class="text-[11px] text-gray-800 leading-tight">
        Software Engineer &amp; AI Builder
      </p>
      <p class="text-[10px] text-gray-700 leading-tight">
        Info Sci @ Cornell University '27 · New York 📍
      </p>
    </div>

    <!-- Quick Links Navigation -->
    <div
      class="bg-[#c0d9ff] px-2 py-2 border-b-2 border-gray-400 flex flex-wrap justify-center gap-2"
    >
      <button
        @click="openWindow('WorkExperienceWindow')"
        class="win95-btn text-[11px] font-bold"
      >
        Work
      </button>
      <button
        @click="openWindow('ProjectsWindow')"
        class="win95-btn text-[11px] font-bold"
      >
        Projects
      </button>
      <button
        @click="openWindow('HackathonWindow')"
        class="win95-btn text-[11px] font-bold"
      >
        Hackathons
      </button>
      <button
        @click="openWindow('PublicationsWindow')"
        class="win95-btn text-[11px] font-bold"
      >
        Publications
      </button>
    </div>

        <div class="bg-white px-4 py-3 border-b-2 border-gray-400 text-[11px]">
      <p class="font-bold mb-1">About Me</p>
      <p class="mb-1 leading-snug">
        Software engineer and AI builder at Cornell University. Building
        scalable systems and intelligent tools that actually ship.
      </p>
      <p class="leading-snug">
        Research Software Engineer @ Cornell Lab of Ornithology · VP / Director
        of Tech @ Cornell Data Strategy · ex-Simulacrum, Iconectiv · Incoming
        SWE intern @ Datadog.
      </p>
    </div>

    <!-- Contact Info -->
    <div class="bg-white px-4 py-3 border-b-2 border-gray-400 text-[11px]">
      <p class="font-bold mb-1">Contact</p>
      <a
        href="mailto:aaa384@cornell.edu"
        class="text-blue-700 underline mb-2 inline-block"
      >
        aaa384@cornell.edu
      </a>

      <div class="mt-2">
        <p class="font-bold mb-1">Socials</p>
        <div class="flex gap-2">
          <a
            href="https://www.linkedin.com/in/ahmedabdulla1/"
            target="_blank"
            class="hover:opacity-70"
          >
            <img
              src="@/assets/Biography/linkedin.png"
              alt="LinkedIn"
              class="w-5 h-5"
            />
          </a>
          <a
            href="https://github.com/ahmed-52"
            target="_blank"
            class="hover:opacity-70"
          >
            <img
              src="@/assets/Biography/github.png"
              alt="GitHub"
              class="w-5 h-5"
            />
          </a>
        </div>
      </div>
    </div>

    <!-- About -->

    <!-- Tech Stack -->
    <div class="bg-white px-4 py-3 text-[11px]">
      <p class="font-bold mb-2">Tech Stack</p>
      <div class="flex flex-wrap gap-1">
<span class="px-2 py-1 bg-blue-500 text-white text-xs">Python</span>
        <span class="px-2 py-1 bg-yellow-400 text-black text-xs">JavaScript</span>
        <span class="px-2 py-1 bg-blue-600 text-white text-xs">TypeScript</span>
        <span class="px-2 py-1 bg-orange-500 text-white text-xs">Java</span>
        <span class="px-2 py-1 bg-blue-700 text-white text-xs">C/C++</span>
        <span class="px-2 py-1 bg-gray-600 text-white text-xs">SQL</span>
        <span class="px-2 py-1 bg-cyan-400 text-black text-xs">React</span>
        <span class="px-2 py-1 bg-teal-600 text-white text-xs">FastAPI</span>
        <span class="px-2 py-1 bg-gray-700 text-white text-xs">Flask</span>
        <span class="px-2 py-1 bg-blue-800 text-white text-xs">PostgreSQL</span>
        <span class="px-2 py-1 bg-blue-500 text-white text-xs">Docker</span>
        <span class="px-2 py-1 bg-orange-600 text-white text-xs">PyTorch</span>
        <span class="px-2 py-1 bg-orange-500 text-white text-xs">TensorFlow</span>
        <span class="px-2 py-1 bg-gray-800 text-white text-xs">AWS</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useWindowsStore } from '@/stores/windows';

const windowsStore = useWindowsStore();

const openWindow = (windowId) => {
  windowsStore.setWindowState({
    windowState: 'open',
    windowId,
  });
};
</script>

<style scoped>
.bio-container {
  max-width: 430px; /* keeps it compact on desktop */
  margin: 0 auto;
  font-family: 'MS Sans Serif', system-ui, -apple-system, BlinkMacSystemFont,
    'Segoe UI', sans-serif;
}

/* Win95 3D button */
.win95-btn {
  min-width: 88px;
  padding: 4px 10px;
  background: #c0c0c0;
  border-top: 2px solid #ffffff;
  border-left: 2px solid #ffffff;
  border-right: 2px solid #808080;
  border-bottom: 2px solid #808080;
  box-shadow: inset -1px -1px 0 #000000;
  line-height: 1;
}

.win95-btn:active {
  border-top: 2px solid #808080;
  border-left: 2px solid #808080;
  border-right: 2px solid #ffffff;
  border-bottom: 2px solid #ffffff;
  box-shadow: inset 1px 1px 0 #000000;
  transform: translate(1px, 1px);
}

/* small gray pills for tech stack */
.pill {
  padding: 2px 6px;
  border: 1px solid #808080;
  background: #e0e0e0;
}
</style>
