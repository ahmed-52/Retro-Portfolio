<template>
  <div class="work-experience-flow">
    
    <!-- Featured Hero - Datadog -->
    <div class="hero-section">
      <div class="hero-content">
        <div class="flex items-center gap-4 mb-4">
          <div class="hero-logo">
            <img src="/logos/datadog.png" alt="Datadog" />
          </div>
          <div>
            <h1 class="hero-title">Next Stop: Datadog</h1>
            <p class="hero-subtitle">Software Engineering Intern • Summer 2026 • New York, NY</p>
          </div>
        </div>
        <p class="hero-text !text-white">
          Next summer, I'll be joining <a href="https://www.datadoghq.com/" target="_blank" class="hero-link">Datadog</a>. Super excited to work on infrastructure that monitors millions of services at massive scale! 🐶
        </p>
      </div>
    </div>

    <!-- Main Timeline Flow -->
    <div class="timeline-flow bg-white">
      
      <!-- Cornell Lab -->
      <section class="experience-section p-4">
        <div class="section-header">
          <div class="flex items-start gap-4">
            <div class="company-logo">
              <img src="/logos/birdlab.png" alt="Cornell Lab" />
            </div>
            <div class="flex-1">
              <h2 class="section-title">Cornell Lab of Ornithology</h2>
              <p class="section-meta">Research Software Engineer • Sep 2025 – Present • Ithaca, NY</p>
            </div>
          </div>
        </div>

        <div class="section-content">
          <p class="flow-text">
            Right now, I'm working under <a href="https://www.birds.cornell.edu/ccb/dena-j-clink-ph-d/" target="_blank" class="text-link">Dr. Anna Clink</a> and <a href="https://cambodia.wcs.org/" target="_blank" class="text-link">WCS Cambodia</a> on this incredible project at <strong>Boeung Sne</strong>, a critical bird colony site. The work is all about using technology for conservation — building data pipelines that process <strong>bioacoustics recordings</strong> and <strong>drone imagery</strong> to monitor wildlife at scale.
          </p>

          <div class="photo-mosaic">
            <div 
              v-for="(photo, idx) in cornellPhotos" 
              :key="idx"
              class="mosaic-photo"
              :class="`photo-${idx + 1}`"
              @click="openModal(photo)"
            >
              <img :src="photo" :alt="`Cornell ${idx + 1}`" />
            </div>
          </div>

          <p class="flow-text">
            We're integrating <strong>ARU (Acoustic Recording Unit)</strong> data with aerial surveys to get a complete picture of species distribution, colony sizes, and migration patterns. I'm designing AI models for species detection and working with researchers and NGOs to create reproducible workflows that actually make a difference in the field. It's amazing to see how software can directly support ecological research and conservation efforts.
          </p>
        </div>
      </section>

      <div class="flow-divider"></div>

      <!-- Simulacrum -->
      <section class="experience-section  p-4">
        <div class="section-header">
          <div class="flex items-start gap-4">
            <div class="company-logo">
              <img src="/logos/simulacrum.png" alt="Simulacrum" />
            </div>
            <div class="flex-1">
              <h2 class="section-title">Simulacrum Inc.</h2>
              <p class="section-meta">Software Engineering Intern • May 2025 – Aug 2025 • New York, NY</p>
            </div>
          </div>
        </div>

        <div class="section-content">
          <p class="flow-text">
            This summer was intense. I worked on deploying and hosting <strong>foundational time-series models</strong> on <a href="https://cloud.google.com/vertex-ai" target="_blank" class="text-link">Google Cloud Vertex AI</a>, building the entire infrastructure from scratch. We were benchmarking different time-series forecasting models and running massive evaluation pipelines.
          </p>

          <div class="photo-strip">
            <div 
              v-for="(photo, idx) in simulacrumPhotos" 
              :key="idx"
              class="strip-photo"
              @click="openModal(photo)"
            >
              <img :src="photo" :alt="`Simulacrum ${idx + 1}`" />
            </div>
          </div>

          <p class="flow-text">
            The best part? Our paper got accepted to <a href="https://openreview.net/forum?id=3fMa060Ag5/" target="_blank" class="text-link">NeurIPS 2025</a>! 🎉 Working with <strong>Denizlap Goktas</strong> and <strong>Gerardo Riaño</strong> taught me so much about production ML systems. I designed and built the <strong>API server</strong> that gives clients secure access to our foundational models — processing 500k+ requests per month with sub-200ms latency. Learned tons about Google Cloud deployments, containerization with Docker, and building resilient systems that actually scale.
          </p>
        </div>
      </section>

      <div class="flow-divider"></div>

      <!-- Two Column Section -->
      <div class="two-col-section">
        
        <!-- Iconectiv -->
        <section class="experience-section compact  p-4">
          <div class="section-header">
            <div class="flex items-start gap-3">
              <div class="company-logo small">
                <img src="/logos/iconectiv.png" alt="Iconectiv" />
              </div>
              <div class="flex-1">
                <h2 class="section-title small">Iconectiv LLC</h2>
                <p class="section-meta">SWE Intern • Summer 2024</p>
              </div>
            </div>
          </div>

          <div class="mini-gallery">
            <div 
              v-for="(photo, idx) in iconectivPhotos.slice(0, 3)" 
              :key="idx"
              class="mini-photo"
              @click="openModal(photo)"
            >
              <img :src="photo" :alt="`Iconectiv ${idx + 1}`" />
            </div>
          </div>

          <p class="flow-text compact">
            Built ETL pipeline for 14M+ GNS records at <a href="https://iconectiv.com/" target="_blank" class="text-link">Iconectiv</a>. Created Angular frontend and automated quarterly refresh. Essential infrastructure work.
          </p>
        </section>

        <!-- DaliaHealth -->
        <section class="experience-section compact  p-4">
          <div class="section-header">
            <div class="flex items-start gap-3">
              <div class="company-logo small">
                <img src="/logos/dalia.png" alt="DaliaHealth" />
              </div>
              <div class="flex-1">
                <h2 class="section-title small">DaliaHealth</h2>
                <p class="section-meta">Frontend Lead • 2023-2024</p>
              </div>
            </div>
          </div>

          <div class="mini-gallery">
            <div 
              v-for="(photo, idx) in daliaPhotos.slice(0, 3)" 
              :key="idx"
              class="mini-photo"
              @click="openModal(photo)"
            >
              <img :src="photo" :alt="`Dalia ${idx + 1}`" />
            </div>
          </div>

          <p class="flow-text compact">
            Cornell student startup. Led React web app for 1,000+ users. Integrated 100+ APIs, hit 99.9% sync reliability. Increased retention 45%. Fast-paced and rewarding.
          </p>
        </section>

      </div>

      <div class="flow-divider"></div>

      <!-- Cornell Data Strategy - Full Width -->
      <section class="experience-section  p-4">
        <div class="section-header">
          <div class="flex items-start gap-4">
            <div class="company-logo">
              <img src="/logos/cornelldata.png" alt="Cornell Data Strategy" />
            </div>
            <div class="flex-1">
              <h2 class="section-title">Cornell Data & Strategy Club</h2>
              <p class="section-meta">Founder, Vice President of Tech • Nov 2024 – Present • Ithaca, NY</p>
            </div>
          </div>
        </div>

        <div class="section-content">
          <div class="photo-banner">
            <div 
              v-for="(photo, idx) in dsaPhotos" 
              :key="idx"
              class="banner-photo"
              @click="openModal(photo)"
            >
              <img :src="photo" :alt="`DSA ${idx + 1}`" />
            </div>
          </div>

          <p class="flow-text">
            Leading 40+ developers across multiple project teams at <a href="https://www.cornelldatastrategy.com/" target="_blank" class="text-link">Cornell Data & Strategy</a>. We're building real solutions for enterprise clients — sentiment analysis tools, route optimization algorithms, supervised learning models, predictive analytics platforms. Built the technical training program from scratch and we've delivered $1.6M in client value across 8 industries.
          </p>
        </div>
      </section>

    </div>

    <!-- Image Modal -->
    <transition name="modal">
      <div v-if="modalImage" class="modal-overlay" @click="closeModal">
        <div class="modal-window" @click.stop>
          <div class="modal-title-bar">
            <span class="modal-title">📸 Image Viewer</span>
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

const modalImage = ref(null);

const openModal = (imageSrc) => {
  modalImage.value = imageSrc;
};

const closeModal = () => {
  modalImage.value = null;
};

const cornellPhotos = [
  '/birdlab/birds.png',
  '/birdlab/birds2.png',
  '/birdlab/birds3.png',
  '/birdlab/swift.jpg'
];

const simulacrumPhotos = [
  '/simulacrum/eval.png',
  '/simulacrum/timeseries2.png',
  '/simulacrum/sim.jpg',
  '/simulacrum/evaluation.png',
  '/simulacrum/vertexai.jpg'
];

const iconectivPhotos = [
  '/iconectiv/iconectiv.jpg',
  '/iconectiv/gns.png',
  '/iconectiv/gns2.png',
  '/iconectiv/iconetiv.JPG'
];

const daliaPhotos = [
  '/dalia/dalia.JPG',
  '/dalia/dalia2.JPG',
  '/dalia/dalia2.png',
  '/dalia/dalia4.JPG',
];

const dsaPhotos = [
  '/dsa/dsa.JPG',
  '/dsa/dsa2.JPG',
  '/dsa/dsa6.png'
];
</script>

<style scoped>
.work-experience-flow {
  font-family: Arial, Helvetica, sans-serif;
}

/* Hero Section - Datadog */
.hero-section {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 32px;
  margin-bottom: 24px;
  border-top: 2px solid rgba(255, 255, 255, 0.3);
  border-left: 2px solid rgba(255, 255, 255, 0.3);
  border-right: 2px solid rgba(0, 0, 0, 0.3);
  border-bottom: 2px solid rgba(0, 0, 0, 0.3);
}

.hero-logo {
  background: white;
  padding: 12px;
  border-radius: 8px;
  width: 72px;
  height: 72px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero-logo img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.hero-title {
  font-family: 'MS Sans Serif', Arial, sans-serif;
  font-size: 28px;
  font-weight: bold;
  color: white;
  margin: 0;
}

.hero-subtitle {
  color: rgba(255, 255, 255, 0.9);
  font-size: 14px;
  margin: 4px 0 0 0;
}

.hero-text {
  color: white;
  font-size: 16px;
  line-height: 1.7;
  margin: 0;
}

.hero-link {
  color: #ffd700;
  text-decoration: underline;
}

.hero-link:hover {
  color: #ffed4e;
}

/* Timeline Flow */
.timeline-flow {
  padding: 0;
}

.experience-section {
  margin-bottom: 32px;
}

.section-header {
  margin-bottom: 16px;
}

.company-logo {
  background: white;
  border-top: 2px solid #808080;
  border-left: 2px solid #808080;
  border-right: 2px solid #dfdfdf;
  border-bottom: 2px solid #dfdfdf;
  padding: 10px;
  width: 64px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.company-logo.small {
  width: 48px;
  height: 48px;
  padding: 6px;
}

.company-logo img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.section-title {
  font-family: 'MS Sans Serif', Arial, sans-serif;
  font-size: 22px;
  font-weight: bold;
  margin: 0 0 4px 0;
}

.section-title.small {
  font-size: 18px;
}

.section-meta {
  font-size: 12px;
  color: #666;
  margin: 0;
}

.section-content {
  margin-top: 16px;
}

.flow-text {
  font-size: 14px;
  line-height: 1.7;
  margin: 0 0 16px 0;
}

.flow-text.compact {
  font-size: 13px;
  margin: 0;
}

.text-link {
  color: #0000ee;
  text-decoration: underline;
}

.text-link:hover {
  color: #551a8b;
}

/* Photo Layouts */
.photo-mosaic {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 8px;
  margin: 16px 0;
}

.mosaic-photo {
  background: white;
  border-top: 2px solid #808080;
  border-left: 2px solid #808080;
  border-right: 2px solid #dfdfdf;
  border-bottom: 2px solid #dfdfdf;
  padding: 4px;
  cursor: pointer;
  overflow: hidden;
}

.mosaic-photo img {
  width: 100%;
  height: 140px;
  object-fit: cover;
  display: block;
  transition: transform 0.2s;
}

.mosaic-photo:hover img {
  transform: scale(1.05);
}

.photo-strip {
  display: flex;
  gap: 8px;
  overflow-x: auto;
  margin: 16px 0;
  padding: 4px 0;
}

.strip-photo {
  background: white;
  border-top: 2px solid #808080;
  border-left: 2px solid #808080;
  border-right: 2px solid #dfdfdf;
  border-bottom: 2px solid #dfdfdf;
  padding: 4px;
  flex-shrink: 0;
  cursor: pointer;
}

.strip-photo img {
  height: 160px;
  width: auto;
  display: block;
  transition: transform 0.2s;
}

.strip-photo:hover img {
  transform: scale(1.05);
}

.mini-gallery {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 6px;
  margin: 12px 0;
}

.mini-photo {
  background: white;
  border-top: 2px solid #808080;
  border-left: 2px solid #808080;
  border-right: 2px solid #dfdfdf;
  border-bottom: 2px solid #dfdfdf;
  padding: 3px;
  cursor: pointer;
  overflow: hidden;
}

.mini-photo img {
  width: 100%;
  height: 80px;
  object-fit: cover;
  display: block;
  transition: transform 0.2s;
}

.mini-photo:hover img {
  transform: scale(1.05);
}

.photo-banner {
  display: flex;
  gap: 6px;
  margin: 16px 0;
}

.banner-photo {
  background: white;
  border-top: 2px solid #808080;
  border-left: 2px solid #808080;
  border-right: 2px solid #dfdfdf;
  border-bottom: 2px solid #dfdfdf;
  padding: 4px;
  flex: 1;
  cursor: pointer;
  overflow: hidden;
}

.banner-photo img {
  width: 100%;
  height: 120px;
  object-fit: cover;
  display: block;
  transition: transform 0.2s;
}

.banner-photo:hover img {
  transform: scale(1.05);
}

/* Two Column Layout */
.two-col-section {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  margin-bottom: 32px;
}

.experience-section.compact {
  margin-bottom: 0;
}

/* Flow Divider */
.flow-divider {
  height: 2px;
  background: repeating-linear-gradient(
    90deg,
    #c0c0c0 0px,
    #c0c0c0 4px,
    transparent 4px,
    transparent 8px
  );
  margin: 32px 0;
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
  border-top: 2px solid #808080;
  border-left: 2px solid #808080;
  border-right: 2px solid #dfdfdf;
  border-bottom: 2px solid #dfdfdf;
}

.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.2s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

/* Responsive */
@media (max-width: 768px) {
  .two-col-section {
    grid-template-columns: 1fr;
    gap: 32px;
  }
  
  .photo-mosaic {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>