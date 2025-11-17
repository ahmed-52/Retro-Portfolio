<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'
import FileWindow from './templates/FileWindow.vue'
import Window from './templates/Window.vue'
import Mail from './templates/Mail.vue'
import Navbar from './templates/Navbar.vue'
import AppGrid from './templates/AppGrid.vue'
import Bio from './views/Bio.vue'
import Resume from './views/Resume.vue'
import WorkExperience from './views/WorkExperience.vue'
import ImagePreviewWindow from './templates/ImagePreviewWindow.vue'
import StartMenu from './templates/StartMenu.vue'
import Projects from './views/Projects.vue'
import Hackathon from './views/Hackathon.vue'
import Publications from './views/Publications.vue'
import {
    useWindowsStore
} from './stores/windows'
const windowsStore = useWindowsStore()
const showLoader = ref(true)
const showIntroWindow = ref(false)
const windows = windowsStore.windows

const windowComponents = [
  { name: 'window', comp: Window },
  { name: 'ImagePreviewWindow', comp: ImagePreviewWindow },
  { name: 'mail', comp: Mail },
  { name: 'FilesWindow', comp: FileWindow }
]

const slotViews = [
  { name: 'bio', comp: Bio },
  { name: 'resume', comp: Resume },
  { name: 'workexperience', comp: WorkExperience },
  { name: 'projects', comp: Projects }
  ,
  { name: 'publications', comp: Publications }
  ,
  { name: 'hackathon', comp: Hackathon }
]

const windowCheck = (windowId) => {
    if (windowsStore.getWindowById(windowId).windowState == "open") {
        return true
    } 
}

const deinitWindows = () => {
  if (windowsStore.activeWindow == "Menu") {
    windowsStore.setActiveWindow("")
    windowsStore.zIndexIncrement("")
  }
}

const openWindow = (windowId) => {
  const payload = {
    windowState: "open",
    windowId: windowId
  }
  windowsStore.setWindowState(payload)
}

onMounted(() => {
  // Show Win95 loader briefly on page load
  setTimeout(() => {
    showLoader.value = false
    showIntroWindow.value = true
  }, 2000)

  let navbar = document.getElementById("navbar");
  let navbarHeight = navbar.clientHeight;

  document.getElementById("screen").style.height =
  window.innerHeight - navbarHeight + "px";

  window.addEventListener("resize", () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  });
  window.addEventListener("keydown", handleKeydown);
  openWindow('BiographyWindow')
})

const enterSite = () => {
  showIntroWindow.value = false
}

const handleKeydown = (event) => {
  if (showIntroWindow.value && event.key === 'Enter') {
    enterSite()
  }
}

onBeforeUnmount(() => {
  window.removeEventListener("keydown", handleKeydown);
})

</script>

<template>
  <div id="app">
    <transition name="loader-fade">
      <div v-if="showLoader || showIntroWindow" class="loader-overlay">
        <img
          v-if="showLoader"
          class="loader-image"
          src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExNTRidHB5azJwaWQ1dWd5cGY0a3lxZzlkMHczZjdrcGFldHBwajFwNCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/1HQ0xMcxsSECY/giphy.gif"
          alt="Windows 95 loading"
        />
        <div v-else class="intro-window">
          <div class="intro-titlebar">
            <span class="intro-title">Microsoft Windows</span>
            <div class="intro-controls">
              <span class="control-btn">_</span>
              <span class="control-btn">□</span>
              <span class="control-btn">X</span>
            </div>
          </div>
          <div class="intro-body">
            <div class="intro-icon">!</div>
            <div class="intro-text">
              <p class="intro-heading">Welcome</p>
              <p class="intro-sub">Click Enter to continue.</p>
            </div>
          </div>
          <div class="intro-footer">
            <button class="intro-btn" @click="enterSite">Enter</button>
          </div>
        </div>
      </div>
    </transition>
    <div class="screen" id="screen" @click="deinitWindows">
      <div 
        v-for="window in windows" 
        :key="window.key" 
        :aria-label="window.displayName"
      >
          <component 
            :is="windowComponents.find(comp => comp.name === window.windowComponent).comp"
            :nameOfWindow="window.windowId" 
            :content_padding_bottom="window.windowContentPadding['bottom']" 
            :content_padding_left="window.windowContentPadding['left']" 
            :content_padding_right="window.windowContentPadding['right']" 
            :content_padding_top="window.windowContentPadding['top']" 
            :id="window.windowId" 
            :style="{
                    position: window.position,
                    left: window.positionX,
                    top: window.positionY,
                  }" 
            :folderContent="window.folderContent" 
            :folderSize="window.folderSize" 
            v-if="windowCheck(window.windowId)" 
          >
          <template v-slot:content>
            <component :is="slotViews.find(comp => comp.name === window.windowContent).comp"></component>
          </template>
          </component>
        </div>
        <AppGrid />
    </div>
    <StartMenu
      v-if="windowsStore.activeWindow == 'Menu'"
      style="position: absolute; z-index: 9999; left: 0; bottom: 36px"
    ></StartMenu>
    <navbar style="position: absolute; bottom: 0; z-index: 9999" id="navbar" />
  </div>
</template>

<style>

@import "./assets/css/utils/normalize.css";
@import "./assets/css/windows/app.css";
@import "./assets/css/windows/window.css";
@import "./assets/css/windows/appgrid.css";

@font-face {
  font-family: "MS Sans Serif";
  src: url("@/assets/fonts/MS-Sans-Serif.ttf");
}

/* Windows 95 SVG Cursors (temporary strong rules for debugging) */
*,
*::before,
*::after {
  cursor: url('/cursors/arrow.svg') 0 0, url('/cursors/arrow.png') 0 0, default !important;
}

a,
*
button,
.link,
.link-btn,
.hero-link,
.text-link,
.project-link,
.modal-close-btn,
.photo-frame,
.photo-item,
.mosaic-photo,
.strip-photo,
.banner-photo,
.mini-photo,
.gallery-photo,
.photo-item-small,
.win95-button,
input[type="submit"],
input[type="button"],
[role="button"] {
  cursor: url('/cursors/pointer.svg') 5 0, url('/cursors/pointer.png') 5 0, pointer !important;
}

/* Everything else uses default arrow */
.top-bar-window,
#top-bar,
.draggable,
input[type="text"],
input[type="email"],
input[type="password"],
textarea {
  cursor: url('/cursors/arrow.svg') 0 0, url('/cursors/arrow.png') 0 0, default !important;
}
/*-------------------------------------------*\
    Utilities
\*-------------------------------------------*/

html {
  overflow: hidden;
}

h6 {
    margin-top: 5px !important;
}

#app {
  font-family: "MS Sans Serif";
  font-weight: 400;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  width: 100%;
  height: calc(var(--vh, 1vh) * 100);
  flex-direction: column;
}

.screen {
  width: 100%;
  position: relative;
  z-index: 999;
  background-image: 
    linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.15)),
    url('./assets/windows95.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

::-webkit-scrollbar {
  width: 15px;
  background: repeating-conic-gradient(
      rgb(189, 190, 189) 0% 25%,
      rgb(255, 255, 255) 0% 50%
    )
    50% / 2px 2px;
}
::-webkit-scrollbar-thumb {
  background: rgb(189, 190, 189);
  /* box-shadow: 1.5px 1.5px black; */
  border-top: solid rgb(250, 250, 250) 1.5px;
  border-left: solid rgb(250, 250, 250) 1.5px;
  border-bottom: solid rgb(90, 90, 90) 1.5px;
  border-right: solid rgb(90, 90, 90) 1.5px;
  outline: rgb(219, 219, 219);
}

/*-------------------------------------------*\
    Fullscreen
\*-------------------------------------------*/

.fullscreen {
  left: 0 !important;
  position: relative;
  display: block;
  top: 0 !important;
  right: 0 !important;
}

.loader-overlay {
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #000;
  z-index: 10000;
}

.loader-image {
  width: 720px;
  height: 720px;
  object-fit: contain;
  image-rendering: pixelated;
  max-width: 90vw;
  max-height: 90vh;
}

.intro-window {
  width: 420px;
  background: #c0c0c0;
  border: 2px solid #808080;
  box-shadow: 3px 3px 0 #000;
  font-family: "MS Sans Serif";
}

.intro-titlebar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: linear-gradient(90deg, #00007b, #0000aa);
  color: #ffffff;
  padding: 4px 6px;
  font-weight: 700;
  font-size: 13px;
}

.intro-title {
  letter-spacing: 0.2px;
}

.intro-controls {
  display: flex;
  gap: 4px;
}

.control-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 18px;
  height: 18px;
  border: 1px solid #c0c0c0;
  background: #f0f0f0;
  color: #000;
  font-size: 10px;
  box-shadow: inset -1px -1px 0 #808080, inset 1px 1px 0 #fff;
}

.intro-body {
  display: flex;
  gap: 12px;
  padding: 16px;
  align-items: center;
  border-bottom: 1px solid #808080;
}

.intro-icon {
  width: 40px;
  height: 40px;
  border: 2px solid #000;
  background: repeating-linear-gradient(
    45deg,
    #ffff00,
    #ffff00 6px,
    #cccc00 6px,
    #cccc00 12px
  );
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 800;
  font-size: 20px;
}

.intro-text p {
  margin: 0;
  color: #000;
  font-size: 13px;
}

.intro-heading {
  font-weight: 700;
  margin-bottom: 4px;
}

.intro-sub {
  font-weight: 400;
}

.intro-footer {
  display: flex;
  justify-content: flex-end;
  padding: 10px 12px;
}

.intro-btn {
  min-width: 80px;
  padding: 4px 12px;
  background: #c0c0c0;
  border-top: 2px solid #ffffff;
  border-left: 2px solid #ffffff;
  border-right: 2px solid #808080;
  border-bottom: 2px solid #808080;
  box-shadow: inset -1px -1px 0 #000000;
  font-weight: 700;
  font-size: 13px;
  cursor: pointer;
}

.intro-btn:active {
  border-top: 2px solid #808080;
  border-left: 2px solid #808080;
  border-right: 2px solid #ffffff;
  border-bottom: 2px solid #ffffff;
  box-shadow: inset 1px 1px 0 #000000;
  transform: translate(1px, 1px);
}

.loader-fade-enter-active,
.loader-fade-leave-active {
  transition: opacity 0.4s ease;
}

.loader-fade-enter-from,
.loader-fade-leave-to {
  opacity: 0;
}
</style>
