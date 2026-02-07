<template>
  <div class="projects-flow">
    
    <!-- JobLink -->
    <section class="project-section featured">
      <div class="project-header">
        <div class="flex items-center gap-4 mb-3">
          <div class="project-icon">💼</div>
          <div>
            <h2 class="project-title">JobLink</h2>
            <p class="project-subtitle">AI Job Tracker Startup</p>
          </div>
        </div>
        <div class="project-links">
          <a href="https://joblink.one" target="_blank" class="link-btn">🌐 Website</a>
          <a href="https://www.linkedin.com/posts/ahmedabdulla1_you-shouldnt-have-to-be-both-an-applicant-ugcPost-7322841077600677889-C14m?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD6a0xIBts92yImE5kpE-rFQxTTdA83dp2w" target="_blank" class="link-btn">📹 Demo</a>
        </div>
      </div>

      <div class="project-content">
        <!-- Photo Gallery -->
        <div class="photo-gallery mb-3">
          <div 
            v-for="(photo, idx) in joblinkPhotos" 
            :key="idx"
            class="gallery-photo"
            @click="openModal(photo)"
          >
            <img :src="photo" :alt="`JobLink ${idx + 1}`" />
          </div>
        </div>
        <p class="project-text">
         Ever felt like you're drowning in job application emails? That was me. Rejection emails mixed with interview invites, coding challenges buried under recruiter spam it was chaos.

So I built JobLink to fix it. The app connects to your Gmail via OAuth and automatically parses every single job-related email. Using a custom NLP pipeline (LLMs + spaCy + some clever regex), we extract company names, job titles, application status, deadlines, basically everything you need to stay sane during the job hunt.

The coolest part? It achieves 95%+ precision. That means it actually works. No more manually tracking applications in spreadsheets at 2 AM.

I led the entire development, from whiteboard sketches to production deployment. Built the React/TypeScript frontend, Flask backend, PostgreSQL database, and all the smart reminder features. Beta users saw 40% better engagement because they finally had one place to see everything.

Job hunting still sucks, but at least now you can stay organized while doing it.
        </p>

        <div class="tech-stack">
          <span class="tech-tag">React</span>
          <span class="tech-tag">TypeScript</span>
          <span class="tech-tag">Flask</span>
          <span class="tech-tag">PostgreSQL</span>
          <span class="tech-tag">NLP</span>
          <span class="tech-tag">OAuth</span>
          <span class="tech-tag">spaCy</span>
          <span class="tech-tag">LLM</span>
          <span class="tech-tag">REST APIs</span>
          <span class="tech-tag">Gmail API</span>
        </div>
      </div>
    </section>

    <div class="section-divider"></div>

    <!-- Poultry Disease Detection -->
    <section class="project-section highlight">
      <div class="award-banner">🏆 1st Place - Cornell Hackathon</div>
      
      <div class="project-header">
        <div class="flex items-center gap-4 mb-3">
          <div class="project-icon">🐔</div>
          <div>
            <h2 class="project-title">Poultry Disease Detection</h2>
            <p class="project-subtitle">Award-Winning AI Health Monitor</p>
          </div>
        </div>
        <div class="project-links">
          <a href="https://www.linkedin.com/posts/ahmedabdulla1_im-happy-to-share-that-me-and-my-team-just-ugcPost-7302086456745865218-D5BQ" target="_blank" class="link-btn">📝 Post</a>
          <a href="https://github.com/farhan-439/avian_alert" target="_blank" class="link-btn">💻 Code</a>
          <a href="https://www.linkedin.com/posts/ahmedabdulla1_im-happy-to-share-that-me-and-my-team-just-ugcPost-7302086456745865218-D5BQ" target="_blank" class="link-btn">📹 Demo</a>
        </div>
      </div>

      <div class="project-content">
        <!-- Photo Banner -->
        <div class="photo-banner mb-3">
          <div 
            v-for="(photo, idx) in poultryPhotos" 
            :key="idx"
            class="banner-photo"
            @click="openModal(photo)"
          >
            <img :src="photo" :alt="`Poultry ${idx + 1}`" />
          </div>
        </div>

        <p class="project-text mb-3">
          Built AI that flags infections <strong>3 days pre-onset</strong> from 12,000 spectrograms; reached <strong>94% accuracy</strong>. Designed 5-layer CNN targeting 20–22 kHz vocal bands; inference in <strong>25 ms on Raspberry Pi 4</strong>.
        </p>

        <div class="tech-stack">
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
    </section>

    <div class="section-divider"></div>

    <!-- Two Column Section -->
    <div class="two-col-grid">
      
      <!-- TableTalk -->
      <section class="project-section compact">
        <div class="project-header">
          <div class="flex items-center gap-3 mb-2">
            <div class="project-icon small">💬</div>
            <div>
              <h2 class="project-title small">TableTalk</h2>
              <p class="project-subtitle small">Review Analysis Platform</p>
            </div>
          </div>
          <div class="project-links">
            <a href="https://github.com/Cornell-Data-Strategy/Project-Rest" target="_blank" class="link-btn small">💻 Code</a>
          </div>
        </div>

        <!-- Mini Photos -->
        <div class="mini-photos mb-3">
          <div 
            v-for="(photo, idx) in tabletalkPhotos" 
            :key="idx"
            class="mini-photo"
            @click="openModal(photo)"
          >
            <img :src="photo" :alt="`TableTalk ${idx + 1}`" />
          </div>
        </div>

        <p class="project-text compact">
          Co-led team of 7 building full-stack app scraping 1K+ Google Maps reviews via Selenium. Applied Gaussian Mixture Models with PCA on Flask/SQL backend. Built OpenAI-based sentiment pipeline analyzing 50K+ reviews with <strong>92% F1 score</strong>.
        </p>

        <div class="tech-stack compact">
          <span class="tech-tag">Flask</span>
          <span class="tech-tag">Selenium</span>
          <span class="tech-tag">OpenAI</span>
          <span class="tech-tag">GMM</span>
          <span class="tech-tag">PCA</span>
          <span class="tech-tag">SQL</span>
        </div>
      </section>

      <!-- OCaml Trader -->
      <section class="project-section compact">
        <div class="project-header">
          <div class="flex items-center gap-3 mb-2">
            <div class="project-icon small">📈</div>
            <div>
              <h2 class="project-title small">OCaml Trader</h2>
              <p class="project-subtitle small">Functional Trading Simulator</p>
            </div>
          </div>
          <div class="project-links">
            <a href="#" target="_blank" class="link-btn small">💻 Code</a>
            <a href="#" target="_blank" class="link-btn small">📹 Demo</a>
          </div>
        </div>

        <!-- Mini Photos -->
        <div class="mini-photos mb-3">
          <div 
            v-for="(photo, idx) in ocamlPhotos" 
            :key="idx"
            class="mini-photo"
            @click="openModal(photo)"
          >
            <img :src="photo" :alt="`OCaml ${idx + 1}`" />
          </div>
        </div>

        <p class="project-text compact">
          Built trading simulator with real-time stock data via API for 500 equities. Developed custom ML model to forecast prices. Supported <strong>500+ simulated trades</strong> and 12 portfolio metrics for performance analysis.
        </p>

        <div class="tech-stack compact">
          <span class="tech-tag">OCaml</span>
          <span class="tech-tag">Lwt</span>
          <span class="tech-tag">Async IO</span>
          <span class="tech-tag">ML Model</span>
          <span class="tech-tag">Financial APIs</span>
        </div>
      </section>

    </div>

    <div class="section-divider"></div>

    <!-- Rimal -->
    <section class="project-section">
      <div class="project-header">
        <div class="flex items-center gap-4 mb-3">
          <div class="project-icon">🔍</div>
          <div>
            <h2 class="project-title">Rimal</h2>
            <p class="project-subtitle">Retrieval-Augmented Generation Software</p>
          </div>
        </div>
      </div>

      <div class="project-content">
        <!-- Photo Banner -->
        <div class="photo-banner mb-3">
          <div 
            v-for="(photo, idx) in rimalPhotos" 
            :key="idx"
            class="banner-photo"
            @click="openModal(photo)"
          >
            <img :src="photo" :alt="`Rimal ${idx + 1}`" />
          </div>
        </div>

        <p class="project-text mb-3">
          Built enterprise data-readiness pipelines and modular AI solutions tailored for <strong>Arabic-first organizations</strong>. Developed <strong>Bayan</strong>, a Retrieval-Augmented Generation tool integrating Cognitive Search, LLMs, and custom ingestion workflows.
        </p>
        <p class="project-text">
          Designed architecture for text tokenization, context enrichment, and embedding into vector indexes, enabling chat history and context-aware retrieval. Containerized services with Docker and deployed an Azure-hosted React/TS frontend for enterprise integration.
        </p>

        <div class="tech-stack">
          <span class="tech-tag">Azure OpenAI</span>
          <span class="tech-tag">Cognitive Search</span>
          <span class="tech-tag">FastAPI</span>
          <span class="tech-tag">React</span>
          <span class="tech-tag">Docker</span>
          <span class="tech-tag">RAG</span>
          <span class="tech-tag">Vector DB</span>
          <span class="tech-tag">TypeScript</span>
        </div>
      </div>
    </section>

    <div class="section-divider"></div>

    <!-- Real Estate Agent Ranking -->
    <section class="project-section">
      <div class="project-header">
        <div class="flex items-center gap-4 mb-3">
          <div class="project-icon">🏠</div>
          <div>
            <h2 class="project-title">Real Estate Agent Ranking</h2>
            <p class="project-subtitle">Data Analytics for $650M+ Firm</p>
          </div>
        </div>
      </div>

      <div class="project-content">
        <!-- Photo Banner -->
        <div class="photo-banner mb-3">
          <div 
            v-for="(photo, idx) in realestatePhotos" 
            :key="idx"
            class="banner-photo"
            @click="openModal(photo)"
          >
            <img :src="photo" :alt="`Real Estate ${idx + 1}`" />
          </div>
        </div>

        <p class="project-text">
          Built supervised model to rank high-potential agents for a <strong>$650M+ firm</strong> (175+ agents). Engineered MLS-based features (volume, growth, efficiency) for multi-factor scoring. Improved recruitment by targeting <strong>$3M–$5M agents</strong> with strong performance.
        </p>

        <div class="tech-stack">
          <span class="tech-tag">Python</span>
          <span class="tech-tag">Machine Learning</span>
          <span class="tech-tag">MLS Data</span>
          <span class="tech-tag">Feature Engineering</span>
          <span class="tech-tag">Scikit-learn</span>
          <span class="tech-tag">Pandas</span>
          <span class="tech-tag">Data Modeling</span>
          <span class="tech-tag">Business Intelligence</span>
        </div>
      </div>
    </section>

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

const modalImage = ref(null);

const openModal = (imageSrc) => {
  modalImage.value = imageSrc;
};

const closeModal = () => {
  modalImage.value = null;
};

// Photo arrays
const joblinkPhotos = [
  '/joblink/j3.JPG',
  '/joblink/joblink5.JPG',
  '/joblink/joblink8.JPG',

];

const poultryPhotos = [
  '/hk/hk8.png',
  '/hk/hk10.jpeg'
];

const tabletalkPhotos = [
  '/projects/rest.png',
];

const ocamlPhotos = [
  '/projects/ocaml.png',
];

const rimalPhotos = [
  '/projects/rimal.jpg',
];

const realestatePhotos = [
  '/projects/realestate.png'
];
</script>

<style scoped>
.projects-flow {
  font-family: Arial, Helvetica, sans-serif;
  padding: 0;
}

/* Project Sections */
.project-section {
  margin-bottom: 24px;
  background: white;
  border-top: 2px solid #808080;
  border-left: 2px solid #808080;
  border-right: 2px solid #dfdfdf;
  border-bottom: 2px solid #dfdfdf;
  padding: 20px;
}

.project-section.featured {
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  color: white;
}

.project-section.featured .project-text,
.project-section.featured .project-title,
.project-section.featured .project-subtitle {
  color: white;
}

.project-section.highlight {
  border: 3px solid #ffd700;
  position: relative;
}

.project-section.compact {
  padding: 16px;
  margin-bottom: 0;
}

/* Award Banner */
.award-banner {
  background: #ffd700;
  color: #000;
  padding: 8px 16px;
  font-weight: bold;
  text-align: center;
  margin: -20px -20px 16px -20px;
  border-bottom: 2px solid #000;
  font-size: 14px;
}

/* Project Header */
.project-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 12px;
}

.project-icon {
  font-size: 48px;
  width: 64px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 8px;
}

.project-icon.small {
  font-size: 32px;
  width: 48px;
  height: 48px;
}

.project-title {
  font-family: 'MS Sans Serif', Arial, sans-serif;
  font-size: 24px;
  font-weight: bold;
  margin: 0;
}

.project-title.small {
  font-size: 18px;
}

.project-subtitle {
  font-size: 14px;
  margin: 2px 0 0 0;
  opacity: 0.9;
}

.project-subtitle.small {
  font-size: 12px;
}

/* Links */
.project-links {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

.link-btn {
  background: #c0c0c0;
  border-top: 2px solid #ffffff;
  border-left: 2px solid #ffffff;
  border-right: 2px solid #000000;
  border-bottom: 2px solid #000000;
  padding: 6px 12px;
  text-decoration: none;
  color: #000;
  font-size: 12px;
  font-weight: 600;
  display: inline-block;
  transition: transform 0.1s;
}

.link-btn:hover {
  transform: translateY(-1px);
}

.link-btn:active {
  border-top: 2px solid #000000;
  border-left: 2px solid #000000;
  border-right: 2px solid #ffffff;
  border-bottom: 2px solid #ffffff;
}

.link-btn.small {
  padding: 4px 8px;
  font-size: 11px;
}

/* Photo Galleries */
.photo-gallery {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
}

.gallery-photo {
  background: white;
  border-top: 2px solid #808080;
  border-left: 2px solid #808080;
  border-right: 2px solid #dfdfdf;
  border-bottom: 2px solid #dfdfdf;
  padding: 4px;
  cursor: pointer;
  overflow: hidden;
}

.gallery-photo img {
  width: 100%;
  height: 140px;
  object-fit: cover;
  display: block;
  transition: transform 0.2s;
}

.gallery-photo:hover img {
  transform: scale(1.05);
}

.photo-banner {
  display: flex;
  gap: 8px;
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
  height: 140px;
  object-fit: cover;
  display: block;
  transition: transform 0.2s;
}

.banner-photo:hover img {
  transform: scale(1.05);
}

.mini-photos {
  display: flex;
  gap: 6px;
}

.mini-photo {
  background: white;
  border-top: 2px solid #808080;
  border-left: 2px solid #808080;
  border-right: 2px solid #dfdfdf;
  border-bottom: 2px solid #dfdfdf;
  padding: 3px;
  flex: 1;
  cursor: pointer;
  overflow: hidden;
}

.mini-photo img {
  width: 100%;
  height: 100px;
  object-fit: cover;
  display: block;
  transition: transform 0.2s;
}

.mini-photo:hover img {
  transform: scale(1.05);
}

/* Content */
.project-content {
  margin-top: 16px;
}

.project-text {
  font-size: 14px;
  line-height: 1.7;
  margin: 0;
}

.project-text.compact {
  font-size: 13px;
  line-height: 1.6;
  margin-bottom: 12px;
}

/* Tech Stack */
.tech-stack {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 16px;
}

.tech-stack.compact {
  margin-top: 12px;
}

.tech-tag {
  background: #000080;
  color: white;
  border-top: 1px solid rgba(255, 255, 255, 0.3);
  border-left: 1px solid rgba(255, 255, 255, 0.3);
  border-right: 1px solid rgba(0, 0, 0, 0.3);
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
  padding: 4px 8px;
  font-size: 11px;
  font-weight: 600;
}

.project-section.featured .tech-tag {
  background: rgba(255, 255, 255, 0.3);
  color: white;
}

/* Two Column Grid */
.two-col-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  margin-bottom: 24px;
}

/* Divider */
.section-divider {
  height: 2px;
  background: repeating-linear-gradient(
    90deg,
    #c0c0c0 0px,
    #c0c0c0 4px,
    transparent 4px,
    transparent 8px
  );
  margin: 24px 0;
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
  .two-col-grid {
    grid-template-columns: 1fr;
    gap: 24px;
  }
  
  .photo-gallery {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .project-section.compact {
    margin-bottom: 0;
  }
}
</style>