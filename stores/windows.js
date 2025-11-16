import { defineStore } from "pinia";

export const useWindowsStore = defineStore("windows", {
  state: () => ({
    // Height of Fullscreen Window
    // fullscreenWindowHeight: window.innerHeight + "px",

    activeWindow: "",

    // Active Windows Array State
    activeWindows: [],

    // Z-index State
    zIndex: 2,

    windows: [
      {
        windowId: "BiographyWindow", // Unique ID
        windowState: "close", // Window State [open, close, minimize]
        displayName: "Biography", // Display Name (title under icon)
        windowComponent: "window", // Window Component (can be changed to use modified windows)
        windowContent: "bio", // Window Content (used under slots)
        windowContentPadding: {
          top: null,
          right: null,
          bottom: null,
          left: null,
        }, // Window Content Padding
        position: "absolute", // Window Position
        positionX: "5vw", // Window Position X (when first opened)
        positionY: "5%", // Window Position Y (when first opened)
        iconImage: "bio.png", // Window Icon Image
        altText: "Biography", // Window Icon Alt Text
        fullscreen: false, // Window Fullscreen State [true, false]
        showInAppGrid: true,
        showInNavbar: true,
      },
      {
        windowId: "PublicationsWindow",
        windowState: "close",
        displayName: "Publications",
        windowComponent: "window",
        windowContent: "publications",
        windowContentPadding: {
          top: null,
          right: null,
          bottom: null,
          left: null,
        },
        position: "absolute",
        positionX: "20vw",
        positionY: "20vh",
        iconImage: "publications.png",
        altText: "Publications",
        fullscreen: false,
        showInAppGrid: true,
        showInNavbar: true,
      },

      {
        windowId: "ResumeWindow", // Unique ID
        windowState: "close", // Window State [open, close, minimize]
        displayName: "Résumé", // Display Name (title under icon)
        windowComponent: "window", // Window Component (can be changed to use modified windows)
        windowContent: "resume", // Window Content (used under slots)
        windowContentPadding: {
          top: "0",
          right: "0",
          bottom: "0",
          left: "0",
        }, // Window Content Padding
        position: "absolute", // Window Position
        positionX: "10vw", // Window Position X (when first opened)
        positionY: "15vh", // Window Position Y (when first opened)
        iconImage: "resume.png", // Window Icon Image
        altText: "Résumé", // Window Icon Alt Text
        fullscreen: false, // Window Fullscreen State [true, false]
        showInAppGrid: true,
        showInNavbar: true,
      },
      {
        windowId: 'ProjectsWindow',
        windowState: 'close',
        displayName: 'Projects',
        windowComponent: 'window',
        windowContent: 'projects',  // matches the name in slotViews
        windowContentPadding: {
          top: '0px',
          right: '0px',
          bottom: '0px',
          left: '0px'
        },
        position: "absolute",
        positionX: "10%",
        positionY: "12%",
        iconImage: 'projects.png',
        altText: 'My Projects',
        fullscreen: false
      },
      {
        windowId: 'HackathonWindow',
        windowState: 'close',
        displayName: 'Hackathon',
        windowComponent: 'window',
        windowContent: 'hackathon',
        windowContentPadding: {
          top: '0px',
          right: '0px',
          bottom: '0px',
          left: '0px'
        },
        position: "absolute",
        positionX: "20vw",
        positionY: "18vh",
        iconImage: 'hackathon.png',
        altText: 'Cornell Hackathon',
        fullscreen: false,
        showInAppGrid: true,
        showInNavbar: true,
      },
      {
        windowId: "WorkExperienceWindow", // Unique ID
        windowState: "close", // Window State [open, close, minimize]
        displayName: "Work Experience", // Display Name (title under icon)
        windowComponent: "window", // Window Component (can be changed to use modified windows)
        windowContent: "workexperience", // Window Content (used under slots)
        windowContentPadding: {
          top: null,
          right: null,
          bottom: null,
          left: null,
        }, // Window Content Padding
        position: "absolute", // Window Position
        positionX: "15vw", // Window Position X (when first opened)
        positionY: "10vh", // Window Position Y (when first opened)
        iconImage: "work.png", // Window Icon Image
        altText: "Work Experience", // Window Icon Alt Text
        fullscreen: false, // Window Fullscreen State [true, false]
        showInAppGrid: true,
        showInNavbar: true,
      },
      {
        windowId: "ImagePreviewWindow",
        windowState: "close",
        displayName: "Media Viewer",
        windowComponent: "ImagePreviewWindow",
        windowContent: "",
        windowContentPadding: {
          top: "1px",
          right: "10px",
          bottom: "10px",
          left: "10px",
        },
        position: "absolute",
        positionX: "6vw",
        positionY: "12vh",
        iconImage: "file.png",
        altText: "Photos",
        fullscreen: false,
        showInAppGrid: false,
        showInNavbar: false,
        // imagePreview: file.src
      },
      {
        windowId: "MailWindow",
        windowState: "close",
        displayName: "Mail",
        windowComponent: "mail",
        windowContent: "",
        windowContentPadding: {
          top: "0",
          right: "0",
          bottom: "0",
          left: "0",
        },
        position: "absolute",
        positionX: "6vw",
        positionY: "12vh",
        iconImage: "mail.png",
        altText: "Mail",
        fullscreen: false,
        showInAppGrid: true,
        showInNavbar: true,
      },
      {
        windowId: "PhotosWindow", // Unique ID
        windowState: "close", // Window State [open, close, minimize]
        displayName: "Photos", // Display Name (title under icon)
        windowComponent: 'FilesWindow', // Window Component (can be changed to use modified windows)
        windowContent: '', // Window Content (used under slots)
        windowContentPadding: {
          top: '0px',
          right: '0px',
          bottom: '0px',
          left: '0px'
        }, // Window Content Padding
        position: "absolute", // Window Position
        positionX: "5vw", // Window Position X (when first opened)
        positionY: "10vh", // Window Position Y (when first opened)
        positionXLarge: "23vw",
        positionYLarge: "7%",
        iconImage: "photos.png", // Window Icon Image
        altText: "Photos", // Window Icon Alt Text
        fullscreen: false, // Window Fullscreen State [true, false]
        showInNavbar: true,
        folderContent: [
          {
            id: 0,
            title: "Cornell + Life",
            type: "folder",
            altText: "Photos",
            content: [
              {
                id: 1,
                title: "IMG_4506.jpg",
                type: "photo",
                src: "/images/IMG_4506.jpg",
                altText: "IMG_4506.jpg",
                size: 0,
              },
              {
                id: 2,
                title: "IMG_5237.jpg",
                type: "photo",
                src: "/images/IMG_5237.jpg",
                altText: "IMG_5237.jpg",
                size: 0,
              },
              {
                id: 3,
                title: "IMG_8560.jpg",
                type: "photo",
                src: "/images/IMG_8560.jpg",
                altText: "IMG_8560.jpg",
                size: 0,
              },
              {
                id: 4,
                title: "IMG_8567.jpg",
                type: "photo",
                src: "/images/IMG_8567.jpg",
                altText: "IMG_8567.jpg",
                size: 0,
              },
              {
                id: 5,
                title: "IMG_8595.jpg",
                type: "photo",
                src: "/images/IMG_8595.jpg",
                altText: "IMG_8595.jpg",
                size: 0,
              },
              {
                id: 6,
                title: "IMG_8599.jpg",
                type: "photo",
                src: "/images/IMG_8599.jpg",
                altText: "IMG_8599.jpg",
                size: 0,
              },
              {
                id: 8,
                title: "IMG_8747.jpg",
                type: "photo",
                src: "/images/IMG_8747.jpg",
                altText: "IMG_8747.jpg",
                size: 0,
              },
              {
                id: 9,
                title: "R.jpg",
                type: "photo",
                src: "/images/R.jpg",
                altText: "R.jpg",
                size: 0,
              },
            ],
            size: 0,
          },
        ],
        folderSize: 300000
      },
      {
        windowId: "TrashWindow",
        windowState: "close",
        displayName: "Trash",
        windowComponent: 'FilesWindow',
        windowContent: '',
        windowContentPadding: {
          top: '0px',
          right: '0px',
          bottom: '0px',
          left: '0px'
        },
        position: "absolute",
        positionX: "25vw",
        positionY: "20vh",
        iconImage: "trash.png",
        altText: "Trash",
        fullscreen: false,
        showInNavbar: true,
        folderContent: [
          {
            id: 0,
            title: "meme.mp4",
            type: "video",
            src: "/videos/meme.MP4",
            altText: "meme.mp4",
            size: 0,
          },
        ],
        folderSize: 300000
      },
    ],
  }),

  getters: {
    getFullscreenWindowHeight() {
      let height = "0px";
      if (typeof window !== "undefined") {
        height = window.innerHeight + "px";
      }
      return height;
    },
  },

  actions: {
    getWindowById(windowId) {
      return this.windows.find((window) => window.windowId === windowId)
    },

    getWindowFullscreen(windowId) {
      return this.windows.find((window) => window.windowId === windowId).fullscreen
    },

    getActiveWindow() {
      return this.activeWindow
    },

    setActiveWindow(windowId) {
      this.activeWindow = windowId
    },

    setFullscreen(payload) {
      const getArrItem = () => {
        return this.windows.find(
          (windows) => windows.windowId === payload.windowId
        );
      }
      const window = getArrItem();
      window.fullscreen = payload.fullscreen;
    },

    zIndexIncrement(windowId) {
      this.zIndex++
      if (document.getElementById(windowId)) {
        document.getElementById(windowId).style.zIndex = this.zIndex
      }
    },

    // Push Active Window
    pushActiveWindow(window) {
      this.activeWindows.push(window)
    },

    // Pop Active Window
    popActiveWindow(window) {
      const windowIndex = this.activeWindows.indexOf(window)
      if (windowIndex !== -1) {
        this.activeWindows.splice(windowIndex, 1)
      }
    },

    pushNewWindow(window) {
      this.windows.push(window)
    },

    setPhotoFolderContent(payload) {
      this.photoFolderContent = payload
    },

    setWindowState(payload) {
      // payload = {'windowState': 'open', 'windowId': 'WindowOne'}

      const getArrItem = () => {
        return this.windows.find(
          (windows) => windows.windowId === payload.windowId
        );
      }

      const window = getArrItem();

      let preventAppendingOpenWindow = false;
      if (window.windowState == "open" || window.windowState == "minimize") {
        preventAppendingOpenWindow = true;
      }

      if (payload.windowState == "open") {
        window.windowState = payload.windowState;
        setTimeout(() => {
          this.zIndexIncrement(payload.windowId);
        }, 0);
        setTimeout(() => {
          this.setActiveWindow(payload.windowId);
        }, 0);
        if (preventAppendingOpenWindow == false) {
          this.pushActiveWindow(window);
        }
      } else if (payload.windowState == "close") {
        setTimeout(() => {
          window.windowState = payload.windowState;
        }, 0);
        setTimeout(() => {
          this.popActiveWindow(window);
        }, 0)
        setTimeout(() => {
          this.setActiveWindow("nil");
        }, 0)
      } else if (payload.windowState == "minimize") {
        setTimeout(() => {
          window.windowState = payload.windowState;
        }, 0)
        setTimeout(() => {
          this.setActiveWindow("nil");
        }, 0)

      } else {
        console.log("Error: windowState not found or invalid");
      }
    },
  }
});
