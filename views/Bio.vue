<template>
  <div class="bio-container">
    <!-- Hero Section -->
    <section class="hero-section">
      <img
        class="profile-photo"
        src="@/assets/Biography/ahmed24.jpg"
        alt="Ahmed Abdulla"
      />
      <h1 class="name">Ahmed Abdulla</h1>
      <p class="title">Software Engineer & Research</p>
      <p class="subtitle">Info Sci @ Cornell University '27 · New York 📍</p>
    </section>

    <!-- Quick Navigation -->
    <nav class="nav-section">
      <button @click="openWindow('WorkExperienceWindow')" class="nav-btn">
        Work
      </button>
      <button @click="openWindow('ProjectsWindow')" class="nav-btn">
        Projects
      </button>
      <button @click="openWindow('HackathonWindow')" class="nav-btn">
        Hackathons
      </button>
      <button @click="openWindow('PublicationsWindow')" class="nav-btn">
        Publications
      </button>
    </nav>

    <!-- About Section -->
    <section class="content-section">
      <h2 class="section-title">About Me</h2>
      <p class="bio-text">
Software Engineer and researcher at Cornell working on time-series models and computer vision. I build things, publish papers, and ship code.
      </p>
      <p class="bio-text">
        Incoming @ Datadog ·
        Machine Learning Research @ Cornell Lab of Ornithology · 
        President @ Cornell Data Strategy
      </p>
    </section>

    <!-- Contact Section -->
    <section class="content-section">
      <h2 class="section-title">Contact</h2>
      <a href="mailto:aaa384@cornell.edu" class="email-link">
        aaa384@cornell.edu
      </a>

      <div class="socials-container">
        <h3 class="subsection-title">Socials</h3>
        <div class="social-links">
          <a
            href="https://www.linkedin.com/in/ahmedabdulla1/"
            target="_blank"
            class="social-icon"
            aria-label="LinkedIn"
          >
            <img src="@/assets/Biography/linkedin.png" alt="LinkedIn" />
          </a>
          <a
            href="https://github.com/ahmed-52"
            target="_blank"
            class="social-icon"
            aria-label="GitHub"
          >
            <img src="@/assets/Biography/github.png" alt="GitHub" />
          </a>
        </div>
      </div>
    </section>

    <!-- Tech Stack Section -->
    <section class="content-section">
      <h2 class="section-title">Tech Stack</h2>
      <div class="tech-grid">
        <span class="tech-badge python">Python</span>
        <span class="tech-badge javascript">JavaScript</span>
        <span class="tech-badge typescript">TypeScript</span>
        <span class="tech-badge java">Java</span>
        <span class="tech-badge cpp">C/C++</span>
        <span class="tech-badge sql">SQL</span>
        <span class="tech-badge react">React</span>
        <span class="tech-badge fastapi">FastAPI</span>
        <span class="tech-badge flask">Flask</span>
        <span class="tech-badge postgres">PostgreSQL</span>
        <span class="tech-badge docker">Docker</span>
        <span class="tech-badge pytorch">PyTorch</span>
        <span class="tech-badge tensorflow">TensorFlow</span>
        <span class="tech-badge aws">AWS</span>
      </div>
    </section>
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
/* ===================================
   Container & Layout
   =================================== */
.bio-container {
  max-width: 460px;
  margin: 0 auto;
  height: 100%;
  background: white;
  border-top: 1px solid #a0a0a0;
  border-left: 1px solid #a0a0a0;
  font-family: system-ui, -apple-system, 'Segoe UI', sans-serif;
  font-size: 13px;
  line-height: 1.6;
}

/* ===================================
   Hero Section
   =================================== */
.hero-section {
  background: linear-gradient(to bottom, #ffffff 0%, #f8f8f8 100%);
  text-align: center;
  padding: 24px 16px;
  border-bottom: 2px solid #a0a0a0;
}

.profile-photo {
  width: 120px;
  height: 120px;
  margin: 0 auto 16px;
  object-fit: cover;
  border: 2px solid #333;
  box-shadow: 2px 2px 4px rgba(0,0,0,0.1);
}

.name {
  font-size: 18px;
  font-weight: bold;
  margin: 0 0 6px 0;
  color: #1a1a1a;
}

.title {
  font-size: 13px;
  color: #444;
  margin: 0 0 4px 0;
  font-weight: 500;
}

.subtitle {
  font-size: 12px;
  color: #666;
  margin: 0;
}

/* ===================================
   Navigation Section
   =================================== */
.nav-section {
  background: #c0d9ff;
  padding: 8px;
  border-bottom: 2px solid #a0a0a0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 8px;
}

.nav-btn {
  min-width: 88px;
  padding: 4px 12px;
  font-size: 12px;
  font-weight: bold;
  background: #c0c0c0;
  border: none;
  border-top: 2px solid #ffffff;
  border-left: 2px solid #ffffff;
  border-right: 2px solid #808080;
  border-bottom: 2px solid #808080;
  box-shadow: inset -1px -1px 0 #000000;
  cursor: pointer;
  font-family: 'Trebuchet MS', Arial, sans-serif;
}

.nav-btn:active {
  border-top: 2px solid #808080;
  border-left: 2px solid #808080;
  border-right: 2px solid #ffffff;
  border-bottom: 2px solid #ffffff;
  box-shadow: inset 1px 1px 0 #000000;
  transform: translate(1px, 1px);
}

/* ===================================
   Content Sections
   =================================== */
.content-section {
  background: white;
  padding: 20px 18px;
  border-bottom: 1px solid #d0d0d0;
}

.content-section:last-child {
  border-bottom: 2px solid #a0a0a0;
}

.section-title {
  font-size: 14px;
  font-weight: bold;
  margin: 0 0 12px 0;
  color: #1a1a1a;
  letter-spacing: 0.3px;
}

.subsection-title {
  font-size: 12px;
  font-weight: bold;
  margin: 16px 0 8px 0;
  color: #333;
}

.bio-text {
  margin: 0 0 12px 0;
  line-height: 1.65;
  color: #2c2c2c;
}

.bio-text:last-child {
  margin-bottom: 0;
}

/* ===================================
   Contact & Social Links
   =================================== */
.email-link {
  color: #0000ee;
  text-decoration: underline;
  display: inline-block;
  margin-bottom: 8px;
}

.email-link:hover {
  color: #551a8b;
}

.socials-container {
  margin-top: 12px;
}

.social-links {
  display: flex;
  gap: 8px;
}

.social-icon {
  display: block;
  transition: opacity 0.2s;
}

.social-icon:hover {
  opacity: 0.7;
}

.social-icon img {
  width: 20px;
  height: 20px;
  display: block;
}

/* ===================================
   Tech Stack Grid
   =================================== */
.tech-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.tech-badge {
  padding: 6px 12px;
  font-size: 11px;
  font-weight: 600;
  border-radius: 3px;
  letter-spacing: 0.3px;
  transition: transform 0.1s ease;
}

.tech-badge:hover {
  transform: translateY(-1px);
}

/* Tech Stack Colors */
.python { background: #3776ab; color: white; }
.javascript { background: #f7df1e; color: black; }
.typescript { background: #3178c6; color: white; }
.java { background: #f89820; color: white; }
.cpp { background: #00599c; color: white; }
.sql { background: #6c757d; color: white; }
.react { background: #61dafb; color: black; }
.fastapi { background: #009688; color: white; }
.flask { background: #4b4b4b; color: white; }
.postgres { background: #336791; color: white; }
.docker { background: #2496ed; color: white; }
.pytorch { background: #ee4c2c; color: white; }
.tensorflow { background: #ff6f00; color: white; }
.aws { background: #232f3e; color: white; }
</style>