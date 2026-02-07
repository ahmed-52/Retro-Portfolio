<template>
  <div class="hackathon-page">
    
    <!-- Header -->
    <div class="hero-banner">
      <div class="award-badge">🏆 1st Place Winner</div>
      <h1 class="main-title">Poultry Disease Detection</h1>
      <p class="subtitle">Cornell Hackathon 2025</p>
    </div>

    <!-- Story -->
    <div class="story-section">
      <p class="story-text">
        Picture this: a small poultry farm losing hundreds of birds to disease outbreaks that could've been prevented if caught just a few days earlier. That's the problem we set out to solve at the Cornell Hackathon.
      </p>
      
      <p class="story-text">
        We built an AI system that listens to chickens. Sounds crazy, right? But it works. By analyzing 12,000 audio spectrograms, our model detects respiratory infections <strong>3 days before visible symptoms appear</strong> — giving farmers enough time to isolate sick birds and prevent mass outbreaks.
      </p>

      <!-- Photo Gallery -->
      <div class="photo-grid">
        <div
          v-for="(img, idx) in images"
          :key="img"
          class="photo-frame"
          role="button"
          tabindex="0"
          @click="openModal(img)"
          @keydown.enter="openModal(img)"
        >
          <img :src="img" :alt="`Hackathon image ${idx + 1}`" loading="lazy" />
        </div>
      </div>

      <p class="story-text">
        The technical challenge was wild: chickens make sounds between 20–22 kHz (way higher than human speech), so we designed a custom 5-layer CNN specifically targeting those frequency bands. We optimized it to run on a <strong>Raspberry Pi 4</strong> with inference times under 25ms. Real-time detection on $50 hardware.
      </p>

      <p class="story-text">
        After training on thousands of sick vs. healthy bird recordings, we hit <strong>94% accuracy</strong>. The judges loved it. Farmers at the demo were genuinely excited. And we took home first place.
      </p>

      <p class="story-text">
        Best part? This isn't just a hackathon project sitting on GitHub. We're actually working with local farms to deploy it. Technology that saves lives (even if they're chicken lives) hits different.
      </p>
    </div>

    <!-- Tech Stack -->
    <div class="tech-section">
      <h2 class="section-title">Tech Stack</h2>
      <div class="tech-grid">
        <span class="tech-tag">TensorFlow</span>
        <span class="tech-tag">PyTorch</span>
        <span class="tech-tag">CNN</span>
        <span class="tech-tag">MobileNetV3</span>
        <span class="tech-tag">Raspberry Pi</span>
        <span class="tech-tag">Audio Processing</span>
        <span class="tech-tag">Spectrogram Analysis</span>
        <span class="tech-tag">Edge Computing</span>
      </div>
    </div>

    <!-- Links -->
    <div class="links-section">
      <a href="https://www.linkedin.com/posts/ahmedabdulla1_im-happy-to-share-that-me-and-my-team-just-ugcPost-7302086456745865218-D5BQ" target="_blank" class="project-link">
        📝 Read the LinkedIn Post
      </a>
      <a href="https://github.com/farhan-439/avian_alert" target="_blank" class="project-link">
        💻 View Code
      </a>
      <a href="https://www.linkedin.com/posts/ahmedabdulla1_im-happy-to-share-that-me-and-my-team-just-ugcPost-7302086456745865218-D5BQ" target="_blank" class="project-link">
        📹 Watch Demo
      </a>
    </div>

    <!-- Image Modal -->
    <transition name="modal">
      <div v-if="modalImage" class="modal-overlay" @click="closeModal">
        <div class="modal-window" @click.stop>
          <div class="modal-title-bar">
            <span class="modal-title">📸 Project Image</span>
            <button class="modal-close-btn" @click="closeModal">×</button>
          </div>
          <div class="modal-content">
            <img :src="modalImage" alt="Full size" class="modal-image" />
          </div>
        </div>
      </div>
    </transition>

  </div>
</template>

<script setup>
import { ref } from 'vue';

// Explicit list of images found in `public/hk`
const images = [
'/hk/hk8.PNG',
  '/hk/hk2.JPG',
  '/hk/hk6.PNG',
  '/hk/hk5.JPG',
   '/hk/hk1.JPG',
  '/hk/hk10.jpeg'
];

const modalImage = ref(null);

const openModal = (imageSrc) => {
  modalImage.value = imageSrc;
};

const closeModal = () => {
  modalImage.value = null;
};
</script>

<style scoped>
.hackathon-page {
  font-family: Arial, Helvetica, sans-serif;
  max-width: 900px;
  margin: 0 auto;
}

/* Hero Banner */
.hero-banner {
  background: linear-gradient(135deg, #ffd700 0%, #ffed4e 100%);
  padding: 32px;
  text-align: center;
  border-top: 3px solid #000;
  border-left: 3px solid #000;
  border-right: 3px solid #666;
  border-bottom: 3px solid #666;
  margin-bottom: 24px;
}

.award-badge {
  background: #000;
  color: #ffd700;
  display: inline-block;
  padding: 8px 24px;
  font-weight: bold;
  font-size: 18px;
  margin-bottom: 16px;
  border: 2px solid #ffd700;
}

.main-title {
  font-family: 'MS Sans Serif', Arial, sans-serif;
  font-size: 36px;
  font-weight: bold;
  margin: 0 0 8px 0;
  color: #000;
}

.subtitle {
  font-size: 18px;
  margin: 0;
  color: #333;
}

/* Story Section */
.story-section {
  background: white;
  border-top: 2px solid #808080;
  border-left: 2px solid #808080;
  border-right: 2px solid #dfdfdf;
  border-bottom: 2px solid #dfdfdf;
  padding: 24px;
  margin-bottom: 24px;
}

.story-text {
  font-size: 15px;
  line-height: 1.8;
  margin-bottom: 20px;
  color: #333;
}

.story-text:last-child {
  margin-bottom: 0;
}

/* Photo Grid */
.photo-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  margin: 24px 0;
}

.photo-frame {
  background: white;
  border-top: 3px solid #808080;
  border-left: 3px solid #808080;
  border-right: 3px solid #dfdfdf;
  border-bottom: 3px solid #dfdfdf;
  padding: 6px;
  cursor: pointer;
}

.photo-frame img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  display: block;
  transition: transform 0.2s;
}

.photo-frame:hover img {
  transform: scale(1.02);
}

/* Tech Section */
.tech-section {
  background: white;
  border-top: 2px solid #808080;
  border-left: 2px solid #808080;
  border-right: 2px solid #dfdfdf;
  border-bottom: 2px solid #dfdfdf;
  padding: 24px;
  margin-bottom: 24px;
}

.section-title {
  font-family: 'MS Sans Serif', Arial, sans-serif;
  font-size: 20px;
  font-weight: bold;
  margin: 0 0 16px 0;
  padding-bottom: 8px;
  border-bottom: 2px solid #000080;
}

.tech-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.tech-tag {
  background: #000080;
  color: white;
  padding: 6px 12px;
  font-size: 12px;
  font-weight: 600;
  border-top: 1px solid rgba(255, 255, 255, 0.3);
  border-left: 1px solid rgba(255, 255, 255, 0.3);
  border-right: 1px solid rgba(0, 0, 0, 0.3);
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
}

/* Links Section */
.links-section {
  display: flex;
  gap: 12px;
  justify-content: center;
  flex-wrap: wrap;
}

.project-link {
  background: #c0c0c0;
  border-top: 2px solid #ffffff;
  border-left: 2px solid #ffffff;
  border-right: 2px solid #000000;
  border-bottom: 2px solid #000000;
  padding: 12px 24px;
  text-decoration: none;
  color: #000;
  font-size: 14px;
  font-weight: 600;
  transition: transform 0.1s;
}

.project-link:hover {
  transform: translateY(-2px);
}

.project-link:active {
  border-top: 2px solid #000000;
  border-left: 2px solid #000000;
  border-right: 2px solid #ffffff;
  border-bottom: 2px solid #ffffff;
}

/* Modal */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.85);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10000;
  padding: 20px;
}

.modal-window {
  background: #c0c0c0;
  border-top: 2px solid #ffffff;
  border-left: 2px solid #ffffff;
  border-right: 2px solid #000000;
  border-bottom: 2px solid #000000;
  box-shadow: inset 1px 1px 0px #dfdfdf, inset -1px -1px 0px #808080;
  max-width: 90vw;
  max-height: 90vh;
  display: flex;
  flex-direction: column;
}

.modal-title-bar {
  background: linear-gradient(90deg, #000080, #1084d0);
  padding: 4px 6px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.modal-title {
  color: white;
  font-family: 'MS Sans Serif', Arial, sans-serif;
  font-weight: bold;
  font-size: 14px;
}

.modal-close-btn {
  background: #c0c0c0;
  border-top: 2px solid #ffffff;
  border-left: 2px solid #ffffff;
  border-right: 2px solid #000000;
  border-bottom: 2px solid #000000;
  width: 24px;
  height: 20px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-close-btn:active {
  border-top: 2px solid #000000;
  border-left: 2px solid #000000;
  border-right: 2px solid #ffffff;
  border-bottom: 2px solid #ffffff;
}

.modal-content {
  padding: 8px;
  background: #c0c0c0;
  overflow: auto;
}

.modal-image {
  max-width: 100%;
  max-height: 80vh;
  display: block;
  margin: 0 auto;
}

.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.2s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}
</style>