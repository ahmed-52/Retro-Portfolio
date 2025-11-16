<template>
  <div class="bio-container px-4 sm:px-0">
    <div class="flex flex-col md:flex-row gap-4 md:gap-8 mb-8">
      <!-- Left Column: Profile -->
      <div class="flex flex-col flex-shrink-0 md:w-64">
        <div class="mb-4">
          <img 
            class="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 object-cover rounded-none mb-4" 
            src="@/assets/Biography/ahmed24.jpg" 
            alt="Ahmed Abdulla"
          />
          <h2 class="font-bold text-xl sm:text-2xl text-start mb-2">Ahmed Abdulla</h2>
        </div>
        <div class="text-xs sm:text-sm mb-4">
          <p class="text-blue-600 mb-1">Available for opportunities</p>
          <p class="text-blue-600 mb-4">
            <a href="mailto:aaa384@cornell.edu" class="hover:underline">aaa384@cornell.edu</a>
          </p>
          <div class="mb-2">
            <p class="font-semibold mb-2">Socials</p>
            <div class="flex gap-3 items-center">
              <a href="https://www.linkedin.com/in/ahmedabdulla1/" target="_blank" class="hover:opacity-80">
                <img src="@/assets/Biography/linkedin.png" alt="LinkedIn" class="w-5 sm:w-6 h-5 sm:h-6" />
              </a>
              <a href="https://github.com/ahmed-52" target="_blank" class="hover:opacity-80">
                <img src="@/assets/Biography/github.png" alt="GitHub" class="w-5 sm:w-6 h-5 sm:h-6" />
              </a>
            </div>
          </div>
        </div>
        </div>

      <!-- Right Column: Bio Content -->
      <div class="flex flex-col flex-grow">
        <div class="mb-6">
          <h3 class="text-base sm:text-lg font-semibold mb-2">Software Engineer & AI Builder</h3>
          <h2 class="text-2xl sm:text-3xl font-bold mb-4">Ahmed Abdulla</h2>
          <p class="text-xs sm:text-sm mb-2">
            Software Engineer & AI Builder • IS @ Cornell University '27
          </p>
          <p class="text-xs sm:text-sm mb-4">New York 📍</p>
        </div>

        <div class="mb-6">
          <h3 class="font-bold text-sm sm:text-md mb-3">About Me</h3>
          <p class="text-xs sm:text-sm mb-3">
            Software engineer and AI builder at Cornell University (IS '27). Building scalable systems and intelligent solutions that drive real impact.
          </p>
          <p class="text-xs sm:text-sm mb-3">
            Currently Research Software Engineer at Cornell Lab of Ornithology, and VP/Director of Tech at Cornell Data Strategy. Previously interned at Simulacrum Inc. and Iconectiv. Incoming intern at Datadog.
          </p>
          <p class="text-xs sm:text-sm">
            Always interested in discussing new opportunities and innovative projects. Based in New York.
          </p>
        </div>
<!--         
        <div class="mb-6 p-4 bg-blue-50 border-l-4 border-blue-400">
          <p class="text-sm font-semibold mb-2">💼 Explore My Work</p>
          <p class="text-sm">
            Check out my other files and projects on this desktop! Open the <strong>Résumé</strong> window for my full experience, or explore other windows to see my projects and work.
          </p>
        </div> -->
        </div>
    </div>

    <div class="flex flex-wrap mt-5 gap-2 items-center mb-6 justify-center md:justify-start">
      <img
        class="w-auto h-5 rounded-none text-xs"
        alt="Python"
        src="https://img.shields.io/badge/-Python-blue"
      />
      <img
        class="w-auto h-5 rounded-none text-xs"
        alt="JavaScript"
        src="https://img.shields.io/badge/-Javascript-yellow"
      />
      <img
        class="w-auto h-5 rounded-none text-xs"
        alt="TypeScript"
        src="https://img.shields.io/badge/-TypeScript-3178c6"
      />
      <img
        class="w-auto h-5 rounded-none text-xs"
        alt="Java"
        src="https://img.shields.io/badge/-Java-orange"
      />
      <img
        class="w-auto h-5 rounded-none text-xs"
        alt="C/C++"
        src="https://img.shields.io/badge/-C%2FC%2B%2B-00599c"
      />
      <img
        class="w-auto h-5 rounded-none text-xs"
        alt="SQL"
        src="https://img.shields.io/badge/-SQL-lightgrey"
      />
      <img
        class="w-auto h-5 rounded-none text-xs"
        alt="React"
        src="https://img.shields.io/badge/-React-61dafb"
      />
      <img
        class="w-auto h-5 rounded-none text-xs"
        alt="FastAPI"
        src="https://img.shields.io/badge/-FastAPI-009688"
      />
      <img
        class="w-auto h-5 rounded-none text-xs"
        alt="Flask"
        src="https://img.shields.io/badge/-Flask-406893"
      />
      <img
        class="w-auto h-5 rounded-none text-xs"
        alt="PostgreSQL"
        src="https://img.shields.io/badge/-PostgreSQL-336791"
      />
      <img
        class="w-auto h-5 rounded-none text-xs"
        alt="Docker"
        src="https://img.shields.io/badge/-Docker-2496ed"
      />
      <img
        class="w-auto h-5 rounded-none text-xs"
        alt="PyTorch"
        src="https://img.shields.io/badge/-PyTorch-ee4c2c"
      />
      <img
        class="w-auto h-5 rounded-none text-xs"
        alt="TensorFlow"
        src="https://img.shields.io/badge/-TensorFlow-ff6f00"
      />
      <img
        class="w-auto h-5 rounded-none text-xs"
        alt="AWS"
        src="https://img.shields.io/badge/-AWS-232f3e"
      />
    </div>
</div>
</template>
