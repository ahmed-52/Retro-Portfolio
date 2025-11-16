<script setup>
import interact from 'interactjs';
import {
    onMounted,
    onUnmounted,
    ref,
    defineProps,
    computed
} from 'vue';
import {
    useWindowsStore
} from '@/stores/windows'

const props = defineProps({
    windowId: String,
    nameOfWindow: String,
    content_padding_left: {
        required: false,
        type: String,
        default: "15%",
    },
    content_padding_right: {
        required: false,
        type: String,
        default: "15%",
    },
    content_padding_top: {
        required: false,
        type: String,
        default: "5%",
    },
    content_padding_bottom: {
        required: false,
        type: String,
        default: "5%",
    },
})

const position = ref({
    x: 0,
    y: 0
})
const tempPosition = ref({
    x: 0,
    y: 0
})

const screenWidth = ref(typeof window !== 'undefined' ? window.innerWidth : 1024);

const updateScreenWidth = () => {
    if (typeof window !== 'undefined') {
        screenWidth.value = window.innerWidth;
    }
};

const isMobile = computed(() => screenWidth.value < 768);

const windowsStore = useWindowsStore()
const windowData = ref({})
const ComponentName = props.nameOfWindow
const w = ref(400)
const h = ref(400)

// Separate computed for left position
const leftPosition = computed(() => {
    if (!windowData.value || !windowData.value.positionX) return '0';
    return isMobile.value ? '0' : windowData.value.positionX;
});

const style = computed(() => ({
    // MOBILE = full height + full width
    height: isMobile.value ? '100%' : `${h.value}px`,   // h-full-ish
    width:  isMobile.value ? '100%' : `${w.value}px`,
    transform: `translate(${position.value.x}px, ${position.value.y}px)`,
    position: 'absolute',
    left: leftPosition.value,
    top: windowData.value?.positionY || '0',
    "--content-padding-left": props.content_padding_left || "5%",
    "--content-padding-right": props.content_padding_right || "5%",
    "--content-padding-top": props.content_padding_top || "5%",
    "--content-padding-bottom": props.content_padding_bottom || "5%",
    "--fullscreen": windowsStore.getFullscreenWindowHeight,
}));


const setActiveWindow = () => {
    windowsStore.setActiveWindow(windowData.value.windowId)
    windowsStore.zIndexIncrement(windowData.value.windowId)
}

const toggleWindowSize = () => {
    if (windowsStore.getWindowFullscreen(windowData.value.windowId) == true) {
        const payload = {
            fullscreen: false,
            windowId: windowData.value.windowId,
        };
        windowsStore.setFullscreen(payload)
        position.value.x = tempPosition.value.x
        position.value.y = tempPosition.value.y
    } else if (
        windowsStore.getWindowFullscreen(windowData.value.windowId) == false
    ) {
        const payload = {
            fullscreen: true,
            windowId: windowData.value.windowId,
        };
        windowsStore.setFullscreen(payload)
        const tempX = position.value.x
        const tempY = position.value.y
        tempPosition.value.x = tempX
        tempPosition.value.y = tempY
        position.value.x = 0
        position.value.y = 0
    }
}

const minimizeWindow = () => {
    const payload = {
        windowState: "minimize",
        windowId: windowData.value.windowId,
    };
    windowsStore.setActiveWindow("")
    windowsStore.setWindowState(payload)
}

const closeWindow = () => {
    const payload = {
        windowState: "close",
        windowId: windowData.value.windowId,
    };
    windowsStore.setWindowState(payload)
}

const getImagePath = (iconImage) => {
    const path = `../assets/win95Icons/${iconImage}`;
    const modules = import.meta.glob("../assets/win95Icons/*", { eager: true });
    const mod = modules[path]
    if (mod == undefined) {
        return ""
    } else {
        return mod.default;
    }
};

let isDragging = false;

onMounted(() => {
    windowData.value = windowsStore.getWindowById(ComponentName)
    
    if (typeof window !== 'undefined') {
        window.addEventListener('resize', updateScreenWidth);
    }
    
    const draggableWindow = interact("#" + windowData.value.windowId)
    draggableWindow
        .draggable({
            listeners: {
                move(event) {
                    position.value.x += event.dx
                    position.value.y += event.dy
                }
            },
            modifiers: [
                interact.modifiers.restrictRect({
                    restriction: '#screen',
                    endOnly: true
                }),
            ],
            allowFrom: '#top-bar'
        })
        .on('dragstart', () => {
            isDragging = true;
        })
        .on('dragmove', () => {
            if (isDragging) {
                setActiveWindow();
                isDragging = false;
            }
        })
        .on('dragend', () => {
        isDragging = false;
        })
        .resizable({
            edges: {
                left: true,
                right: true,
                bottom: true,
                top: false
            },
            listeners: {
                move(event) {
                    const target = event.target
                    w.value = event.rect.width
                    h.value = event.rect.height
                    target.style.width = `${w.value}px`
                    target.style.height = `${h.value}px`
                    position.value.x += event.deltaRect.left
                    position.value.y += event.deltaRect.top
                }
            },
            modifiers: [
                interact.modifiers.restrictSize({
                    min: {
                        width: 400,
                        height: 400
                    },
                    max: {
                        width: document.getElementById('screen').clientWidth - position.value.x,
                        height: document.getElementById('screen').clientHeight - position.value.y 
                    }
                }),
            ],
        })
})

onUnmounted(() => {
    if (typeof window !== 'undefined') {
        window.removeEventListener('resize', updateScreenWidth);
    }
})
</script>

<template>
<div 
    :id="windowData.windowId" 
    :style="style" 
    class="window window-style" 
    :class="{
        'fullscreen': windowData.fullscreen == true,
        'minimize': windowData.fullscreen == 'minimize',
        'mobile': isMobile
    }"
    @click="setActiveWindow" 
    @dragstart="setActiveWindow" 
    @click.native="setActiveWindow">
    <div id="top-bar" class="top-bar-window" :class="
        windowsStore.activeWindow == windowData.windowId
            ? 'top-bar'
            : 'top-bar-deactivated'
        " @dblclick="toggleWindowSize">
        <div class="window-name">
            <img class="icon-image" :src="getImagePath(windowData.iconImage)" :alt="windowData.altText" />{{ windowData.displayName }}
        </div>
        <div class="triple-button">
            <button class="minimize-button button" @click="minimizeWindow">
                <span style="
                height: 2px;
                width: 6px;
                background: black;
                margin-top: 8px;
                margin-right: 2px;
            ">
                </span>
            </button>
            <button class="expand-button button" @click="toggleWindowSize">
                <span style="
                height: 8px;
                width: 9px;
                border-left: black 1px solid;
                border-right: black 1px solid;
                border-left: black 1px solid;
                border-bottom: black 1px solid;
                border-top: black 2px solid;
            ">
                </span>
            </button>
            <button class="close-button button" style="margin-right: 3px; padding-left: 1px" @click="closeWindow">
                ×
            </button>
        </div>
    </div>
    <div class="content">
        <slot class="window-content" name="content"> </slot>
    </div>
</div>
</template>

<style scoped>
/*-------------------------------------------*\
    Windows/Display
\*-------------------------------------------*/

.minimize {
    display: none;
}

.window {
    box-sizing: border-box;
    padding: 0px;
    margin: 0px;
    user-select: none;
    -ms-touch-action: none;
    touch-action: none;
    flex-flow: column;
    display: flex;
}

/* FORCE mobile positioning with !important */
.window.mobile {
    left: 0 !important;
}

.fullscreen {
    width: 100% !important;
    height: var(--fullscreen) !important;
    margin: 0;
    transition: all 0.5s ease;
    padding: 0;
    left: 0 !important;
    top: 0 !important;
}

.content {
    flex-grow: 1;
    overflow-x: hidden;
    padding-right: var(--content-padding-right);
    padding-left: var(--content-padding-left);
    padding-top: var(--content-padding-top);
    padding-bottom: var(--content-padding-bottom);
}

/*-------------------------------------------*\
    Top Bar
\*-------------------------------------------*/

.top-bar {
    background: rgb(0, 0, 124);
}

.icon-image {
    width: 15px;
    height: 15px;
    margin-right: 5px;
}

.top-bar-window {
    display: flex;
    width: auto;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    z-index: 10;
    margin: 2px;
    padding: 2px 2px 2px 2px;
}

.top-bar-deactivated {
    background: rgb(123, 125, 123);
}

.top-bar:hover {
    cursor: default;
}

.window-name {
    color: white;
    display: flex;
    align-items: center;
    font-weight: 500;
    padding: 0;
    font-size: 16px;
    margin: 0 0 0 3px;
}

.icon-image {
    width: 15px;
    height: 15px;
    margin-right: 5px;
    margin-top: 0;
    margin-bottom: 0;
}

.window.mobile {
  left: 0 !important;
  top: 0 !important;
}


</style>


