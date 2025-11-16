<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-20">
    <div class="container mx-auto px-6 max-w-7xl">
      <!-- Header -->
      <div class="text-center mb-16 animate-fade-in">
        <h1 class="text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4">
          Research Publications
        </h1>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          Advancing the frontiers of time-series forecasting and foundation models
        </p>
      </div>

      <!-- Main Publications -->
      <div class="space-y-8 mb-16">
        <div
          v-for="(pub, index) in publications"
          :key="pub.id"
          class="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 animate-slide-up"
          :style="{ animationDelay: `${index * 100}ms` }"
        >
          <!-- Paper Header -->
          <div class="bg-gradient-to-r from-blue-600 to-indigo-600 p-6 text-white">
            <div class="flex items-start justify-between mb-4">
              <div class="flex-1">
                <h2 class="text-2xl font-bold mb-2">{{ pub.title }}</h2>
                <p class="text-blue-100 mb-2">{{ pub.venue }}</p>
                <div class="flex items-center gap-2 text-sm">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                  <span class="bg-white/20 px-3 py-1 rounded-full">{{ pub.status }}</span>
                  <span class="text-blue-100">• {{ pub.date }}</span>
                </div>
              </div>
            </div>
            
            <!-- Authors -->
            <div class="text-sm text-blue-100">
              {{ pub.authors.join(' • ') }}
              <p class="text-xs mt-1 text-blue-200">* Equal contribution</p>
            </div>
          </div>

          <!-- Paper Content -->
          <div class="p-6">
            <!-- Abstract -->
            <div class="mb-6">
              <h3 class="text-lg font-semibold text-gray-900 mb-2 flex items-center gap-2">
                <svg class="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                Abstract
              </h3>
              <p class="text-gray-700 leading-relaxed">{{ pub.abstract }}</p>
            </div>

            <!-- Key Contributions -->
            <div class="mb-6">
              <h3 class="text-lg font-semibold text-gray-900 mb-3">Key Contributions</h3>
              <div class="grid md:grid-cols-2 gap-3">
                <div
                  v-for="(contribution, idx) in pub.keyContributions"
                  :key="idx"
                  class="flex items-start gap-2 bg-blue-50 p-3 rounded-lg"
                >
                  <div class="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center flex-shrink-0 text-sm font-bold">
                    {{ idx + 1 }}
                  </div>
                  <p class="text-sm text-gray-700">{{ contribution }}</p>
                </div>
              </div>
            </div>

            <!-- Technical Highlights -->
            <div class="mb-6">
              <h3 class="text-lg font-semibold text-gray-900 mb-3">Technical Highlights</h3>
              <div class="space-y-4">
                <div
                  v-for="(highlight, idx) in pub.technicalHighlights"
                  :key="idx"
                  class="border-l-4 border-blue-600 pl-4 py-2 bg-gray-50 rounded-r"
                >
                  <h4 class="font-semibold text-gray-900 mb-1">{{ highlight.title }}</h4>
                  <p class="text-sm text-gray-600 mb-2">{{ highlight.description }}</p>
                  <code class="text-xs bg-white px-3 py-1 rounded border border-gray-200 font-mono block overflow-x-auto">
                    {{ highlight.math }}
                  </code>
                </div>
              </div>
            </div>

            <!-- Results Summary -->
            <div class="mb-6 bg-gradient-to-r from-green-50 to-emerald-50 p-4 rounded-lg border border-green-200">
              <h3 class="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <svg class="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                </svg>
                Key Results
              </h3>
              <div class="grid md:grid-cols-3 gap-4 mb-4">
                <div class="text-center">
                  <div class="text-3xl font-bold text-blue-600">{{ pub.results.models }}</div>
                  <div class="text-sm text-gray-600">Models Evaluated</div>
                </div>
                <div class="text-center">
                  <div class="text-3xl font-bold text-indigo-600">{{ pub.results.benchmarks }}</div>
                  <div class="text-sm text-gray-600">Benchmark Tasks</div>
                </div>
                <div class="text-center">
                  <div class="text-3xl font-bold text-purple-600">{{ pub.results.datasets }}</div>
                  <div class="text-sm text-gray-600">Novel Datasets</div>
                </div>
              </div>
              
              <!-- Top Performers -->
              <div class="bg-white rounded-lg p-3">
                <h4 class="font-semibold text-sm text-gray-700 mb-2">Top Performers by Metric:</h4>
                <div class="space-y-2">
                  <div
                    v-for="(performer, idx) in pub.results.topPerformers"
                    :key="idx"
                    class="flex items-center justify-between text-sm"
                  >
                    <span class="font-mono font-semibold">{{ performer.model }}</span>
                    <span class="text-gray-600">{{ performer.metric }}</span>
                    <span class="bg-green-100 text-green-700 px-2 py-1 rounded font-semibold">
                      {{ (performer.winRate * 100).toFixed(1) }}% win rate
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Tags -->
            <div class="mb-6">
              <div class="flex flex-wrap gap-2">
                <span
                  v-for="(tag, idx) in pub.tags"
                  :key="idx"
                  class="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium"
                >
                  #{{ tag }}
                </span>
              </div>
            </div>

            <!-- Links -->
            <div class="flex flex-wrap gap-3">
              
                <a
                :href="pub.links.paper"
                target="_blank"
                rel="noopener noreferrer"
                class="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                OpenReview
                <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>

              <a
              
                :href="pub.links.code"
                target="_blank"
                rel="noopener noreferrer"
                class="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors"
              >
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
                GitHub
                <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
              <button
                @click="copyCitation(pub.citation)"
                class="flex items-center gap-2 px-4 py-2 border-2 border-gray-300 text-gray-700 rounded-lg hover:border-blue-600 hover:text-blue-600 transition-colors"
              >
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                Copy Citation
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Coming Soon -->
      <div class="bg-white rounded-2xl shadow-xl p-8 animate-fade-in" style="animation-delay: 300ms">
        <h2 class="text-2xl font-bold text-gray-900 mb-6">More Coming Soon...</h2>
        <div class="space-y-4">
          <div
            v-for="(paper, idx) in comingSoon"
            :key="idx"
            class="flex items-center justify-between p-4 bg-gray-50 rounded-lg border-2 border-dashed border-gray-300"
          >
            <div>
              <h3 class="font-semibold text-gray-900">{{ paper.title }}</h3>
              <p class="text-sm text-gray-600">{{ paper.status }} • Expected {{ paper.expectedDate }}</p>
            </div>
            <div class="text-2xl">🚀</div>
          </div>
        </div>
        <p class="text-center text-gray-500 mt-6 italic">
          Stay tuned for more groundbreaking research!
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const publications = ref([
  {
    id: 1,
    title: "TempusBench: An Evaluation Framework for Time-Series Forecasting",
    authors: [
      "Denizalp Goktas*",
      "Gerardo Riaño-Briceño*",
      "Alif Abdullah",
      "Aryan Nair",
      "Chenkai Shen",
      "Beatriz de Lucio",
      "Alexandra Magnusson",
      "Farhan Mashrur",
      "Ahmed Abdulla",
      "Shawrna Sen",
      "Mahitha Thippireddy",
      "Gregory Schwartz",
      "Amy Greenwald"
    ],
    venue: "NeurIPS 2025 Workshop on Recent Advances in Time Series Foundation Models (BERT²S)",
    status: "Accepted (Poster)",
    date: "September 2025",
    abstract: "Foundation models have transformed natural language processing and computer vision, and a rapidly growing literature on time-series foundation models (TSFMs) seeks to replicate this success in forecasting. While recent open-source models demonstrate the promise of TSFMs, the field lacks a comprehensive and community-accepted model evaluation framework. We address this by introducing TempusBench, featuring novel datasets, comprehensive benchmarks, standardized evaluation protocols, and interactive visualizations.",
    keyContributions: [
      "Novel datasets not included in existing TSFM pretraining corpora, eliminating data contamination and ensuring valid zero-shot evaluation",
      "Comprehensive benchmark tasks evaluating statistical properties (stationarity, seasonality, decomposition) beyond traditional horizon/domain categorization",
      "Standardized hyperparameter tuning protocol with automated grid search, ensuring fair comparison across statistical, ML, and foundation models",
      "TensorBoard-based visualization interface enabling interpretable performance analysis across 60+ benchmark tasks and 20 models"
    ],
    technicalHighlights: [
      {
        title: "Rolling Window Hyperparameter Optimization",
        description: "Three-step procedure with temporal ordering preservation and look-ahead bias prevention",
        math: "𝓔ᵀᴮ: (𝓣, Θ, 𝓕_Θ) → θ* where windows slide with stride = |validation|"
      },
      {
        title: "Universal Forecasting Task Specification",
        description: "Formal framework encompassing context length (l), horizon (h), variates (m,n), and value spaces",
        math: "𝓣 ≐ (l, h, n, m, 𝓧, 𝓨, X, Y) with F: 𝓧^(l+h) × 𝓨^l → 𝓨^h"
      },
      {
        title: "Multi-Metric Probabilistic Evaluation",
        description: "Comprehensive assessment via MASE, CRPS, quantile scores, and skill scores relative to baselines",
        math: "ℓᴹᴬˢᴱ(Ŷ,Y*) = (1/mh)Σᵢ Σₜ |ŷᵢₜ - y*ᵢₜ| / [(1/(h-1))Σₜ |yᵢ,ₜ₊₁ - yᵢₜ|]"
      },
      {
        title: "Win Rate Aggregation Framework",
        description: "Pairwise comparison metric robust to scale variations across heterogeneous benchmarks",
        math: "Wᵢ = (1/|𝓒ᵢ|) Σⱼ Σᵢ'≠ᵢ wᵢ,ᵢ',ⱼ where wᵢ,ᵢ',ⱼ ∈ {0, 0.5, 1}"
      },
      {
        title: "Geometric Mean Skill Score",
        description: "Scale-invariant performance metric via multiplicative aggregation with clipping bounds",
        math: "Sᵢ = 1 - [∏ⱼ∈ℛᵢ clip(ℓᵢ,ⱼ/ℓᵦ,ⱼ; 10⁻², 10²)]^(1/|ℛᵢ|)"
      }
    ],
    results: {
      models: 20,
      benchmarks: 60,
      datasets: "20+ novel datasets",
      topPerformers: [
        { model: "LAFN", winRate: 0.7931, metric: "MAPE" },
        { model: "TimesFM", winRate: 0.9057, metric: "MAE" },
        { model: "Toto", winRate: 1.0000, metric: "CRPS" }
      ]
    },
    links: {
      paper: "https://openreview.net/forum?id=3fMa060Ag5",
      code: "https://github.com/Smlcrm/TempusBench",
      pdf: "/tempusbench.pdf"
    },
    tags: ["Time Series", "Foundation Models", "Benchmarking", "Machine Learning", "Evaluation Framework"],
    citation: `@inproceedings{goktas2025tempusbench,
  title={TempusBench: An Evaluation Framework for Time-Series Forecasting},
  author={Goktas, Denizalp and Riaño-Briceño, Gerardo and Abdullah, Alif and 
          Nair, Aryan and Shen, Chenkai and de Lucio, Beatriz and 
          Magnusson, Alexandra and Mashrur, Farhan and Abdulla, Ahmed and 
          Sen, Shawrna and Thippireddy, Mahitha and Schwartz, Gregory and 
          Greenwald, Amy},
  booktitle={NeurIPS 2025 Workshop on Recent Advances in Time Series Foundation Models},
  year={2025}
}`
  }
]);

const comingSoon = ref([
  {
    title: "Advanced Neural Architecture Search for Time Series Foundation Models",
    status: "In Preparation",
    expectedDate: "2026"
  },
  {
    title: "Probabilistic Forecasting with Conditional Diffusion Models",
    status: "Under Review",
    expectedDate: "2026"
  },
  {
    title: "Multi-Modal Time Series Analysis: Bridging Observability and NLP",
    status: "Early Research",
    expectedDate: "2026"
  }
]);

const copyCitation = (citation) => {
  navigator.clipboard.writeText(citation);
  alert('Citation copied to clipboard! 📋');
};
</script>

<style scoped>
@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slide-up {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fade-in 0.6s ease-out forwards;
}

.animate-slide-up {
  animation: slide-up 0.6s ease-out forwards;
  opacity: 0;
}
</style>