import { defineStore } from "pinia";

export const useWindowsStore = defineStore("windows", {
  state: () => ({
    activeWindow: "",
    activeWindows: [],
    zIndex: 2,

    windows: [
      {
        windowId: "BiographyWindow",
        windowState: "close",
        displayName: "Biography",
        windowComponent: "window",
        windowContent: "bio",
        windowContentPadding: {
          top: null,
          right: null,
          bottom: null,
          left: null,
        },
        position: "absolute",
        positionX: "5vw",
        positionY: "5vh",
        iconImage: "bio.png",
        altText: "Biography",
        fullscreen: false,
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
        positionX: "10vw",
        positionY: "20vh",
        iconImage: "publications.png",
        altText: "Publications",
        fullscreen: false,
        showInAppGrid: true,
        showInNavbar: true,
      },
      {
        windowId: "ResumeWindow",
        windowState: "close",
        displayName: "Résumé",
        windowComponent: "window",
        windowContent: "resume",
        windowContentPadding: {
          top: "0",
          right: "0",
          bottom: "0",
          left: "0",
        },
        position: "absolute",
        positionX: "8vw",
        positionY: "15vh",
        iconImage: "resume.png",
        altText: "Résumé",
        fullscreen: false,
        showInAppGrid: true,
        showInNavbar: true,
      },
      {
        windowId: 'ProjectsWindow',
        windowState: 'close',
        displayName: 'Projects',
        windowComponent: 'window',
        windowContent: 'projects',
        windowContentPadding: {
          top: '0px',
          right: '0px',
          bottom: '0px',
          left: '0px'
        },
        position: "absolute",
        positionX: "8vw",
        positionY: "12vh",
        iconImage: 'projects.png',
        altText: 'My Projects',
        fullscreen: false,
        showInAppGrid: true,
        showInNavbar: true,
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
        positionX: "10vw",
        positionY: "18vh",
        iconImage: 'hackathon.png',
        altText: 'Cornell Hackathon',
        fullscreen: false,
        showInAppGrid: true,
        showInNavbar: true,
      },
      {
        windowId: "WorkExperienceWindow",
        windowState: "close",
        displayName: "Work Experience",
        windowComponent: "window",
        windowContent: "workexperience",
        windowContentPadding: {
          top: null,
          right: null,
          bottom: null,
          left: null,
        },
        position: "absolute",
        positionX: "10vw",
        positionY: "10vh",
        iconImage: "work.png",
        altText: "Work Experience",
        fullscreen: false,
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
        positionX: "4vw",
        positionY: "12vh",
        iconImage: "file.png",
        altText: "Photos",
        fullscreen: false,
        showInAppGrid: false,
        showInNavbar: false,
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
        positionX: "4vw",
        positionY: "12vh",
        iconImage: "mail.png",
        altText: "Mail",
        fullscreen: false,
        showInAppGrid: true,
        showInNavbar: true,
      },
      {
        windowId: "PhotosWindow",
        windowState: "close",
        displayName: "Photos",
        windowComponent: 'FilesWindow',
        windowContent: '',
        windowContentPadding: {
          top: '0px',
          right: '0px',
          bottom: '0px',
          left: '0px'
        },
        position: "absolute",
        positionX: "3vw",
        positionY: "10vh",
        positionXLarge: "15vw",
        positionYLarge: "7vh",
        iconImage: "photos.png",
        altText: "Photos",
        fullscreen: false,
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
        positionX: "12vw",
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

    // Get responsive position based on window ID
    getResponsivePosition() {
      return (windowId) => {
        if (typeof window === "undefined") {
          return { x: "10vw", y: "10vh" };
        }

        const windowObj = this.windows.find(w => w.windowId === windowId);
        if (!windowObj) {
          return { x: "10vw", y: "10vh" };
        }

        const screenWidth = window.innerWidth;
        const isMobile = screenWidth < 768;
        const isTablet = screenWidth >= 768 && screenWidth < 1024;
        
        let x, y;

        if (isMobile) {
          // Mobile: position near left edge with minimal offset
          x = "2vw";
          // Stagger Y positions based on window index to avoid overlap
          const index = this.windows.findIndex(w => w.windowId === windowId);
          y = `${Math.min(5 + (index * 4), 80)}vh`; // Cap at 80vh
        } else if (isTablet) {
          // Tablet: moderate offset
          const originalX = parseFloat(windowObj.positionX);
          x = `${Math.min(originalX * 0.6, 15)}vw`; // Scale down but cap at 15vw
          y = windowObj.positionY;
        } else {
          // Desktop: use original positions
          x = windowObj.positionX;
          y = windowObj.positionY;
        }

        return { x, y };
      };
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

    pushActiveWindow(window) {
      this.activeWindows.push(window)
    },

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