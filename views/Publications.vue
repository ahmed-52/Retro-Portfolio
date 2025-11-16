<template>
  <div class="min-h-screen bg-white py-12">
    <div class="container mx-auto px-8 max-w-6xl">
      <!-- Header -->
      <div class="mb-10 pb-4 border-b-2 border-black">
        <h1 class="text-3xl font-serif mb-2 text-black">
          Publications
        </h1>
        <p class="text-sm font-serif text-black">
          Peer-reviewed research in time-series forecasting, machine learning, and foundation models
        </p>
        <div class="mt-3">
          <a class="font-serif text-blue-600 underline" href="https://openreview.net/forum?id=3fMa060Ag5">Link</a>
        </div>
      </div>

      <!-- Main Publications -->
      <div class="space-y-12 mb-16">
        <article
          v-for="(pub, index) in publications"
          :key="pub.id"
          class="pb-1 border-b border-gray-400"
        >
          <!-- Citation Number and Title -->
          <div class="mb-4">
            <p class="text-xs font-mono text-gray-700 mb-2">[{{ index + 1 }}]</p>
            <h2 class="text-xl font-serif font-bold text-black mb-2 leading-tight">
              {{ pub.title }}
            </h2>
            <p class="text-sm font-serif text-black mb-1">
              {{ pub.authors.join(', ') }}
            </p>
            <p class="text-sm font-serif italic text-black mb-1">
              {{ pub.venue }}, {{ pub.date }}
            </p>
            <p class="text-xs font-mono text-gray-600">{{ pub.status }}</p>
          </div>

          <!-- Abstract -->
          <section class="mb-5">
            <h3 class="text-sm font-serif font-bold text-black mb-2">
              Abstract.
            </h3>
            <p class="text-sm font-serif text-black leading-relaxed text-justify">
              {{ pub.abstract }}
            </p>
          </section>

          <!-- Key Contributions -->
          <section class="mb-5">
            <h3 class="text-sm font-serif font-bold text-black mb-2">
              Key Contributions.
            </h3>
            <ul class="list-none space-y-2">
              <li
                v-for="(contribution, idx) in pub.keyContributions"
                :key="idx"
                class="text-sm font-serif text-black leading-relaxed"
              >
                <span class="font-bold">({{ idx + 1 }})</span> {{ contribution }}
              </li>
            </ul>
          </section>

          <!-- Technical Framework -->
          <section class="mb-5">
            <h3 class="text-sm font-serif font-bold text-black mb-2">
              Technical Framework.
            </h3>
            
            <div class="space-y-5">
              <div
                v-for="(highlight, idx) in pub.technicalHighlights"
                :key="idx"
                class="pl-4 border-l-2 border-gray-400"
              >
                <h4 class="text-sm font-serif font-bold text-black mb-2">
                  {{ highlight.title }}.
                </h4>

                <p class="text-sm font-serif text-black leading-relaxed mb-3 text-justify">
                  {{ highlight.description }}
                </p>

                <pre class="bg-gray-50 text-black p-3 text-xs font-mono border border-gray-400 overflow-x-auto mb-3 leading-relaxed">{{ highlight.math }}</pre>

                <p class="text-xs font-serif text-black leading-relaxed mb-3 text-justify">
                  {{ highlight.theory }}
                </p>

                <div v-if="highlight.parameters" class="mb-3">
                  <p class="text-xs font-serif font-bold text-black mb-1">Parameters:</p>
                  <ul class="list-none ml-4 space-y-1">
                    <li 
                      v-for="(param, pIdx) in highlight.parameters"
                      :key="pIdx"
                      class="text-xs font-mono text-black leading-relaxed"
                    >
                      • {{ param }}
                    </li>
                  </ul>
                </div>

                <div v-if="highlight.properties">
                  <p class="text-xs font-serif font-bold text-black mb-1">Properties:</p>
                  <ul class="list-none ml-4 space-y-1">
                    <li 
                      v-for="(prop, propIdx) in highlight.properties"
                      :key="propIdx"
                      class="text-xs font-serif text-black leading-relaxed"
                    >
                      • {{ prop }}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <!-- Algorithmic Complexity -->
          <section v-if="pub.complexityAnalysis" class="mb-5">
            <h3 class="text-sm font-serif font-bold text-black mb-2">
              Computational Complexity.
            </h3>
            <div class="space-y-2">
              <div
                v-for="(complexity, idx) in pub.complexityAnalysis"
                :key="idx"
                class="border-l-2 border-gray-400 pl-3"
              >
                <div class="flex items-baseline gap-2 mb-1">
                  <span class="font-serif text-xs font-bold text-black">{{ complexity.operation }}:</span>
                  <span class="font-mono text-xs text-black">{{ complexity.complexity }}</span>
                </div>
                <p class="text-xs font-serif text-black leading-relaxed">{{ complexity.explanation }}</p>
              </div>
            </div>
          </section>

          <!-- Results Summary -->
          <section class="mb-5">
            <h3 class="text-sm font-serif font-bold text-black mb-2">
              Empirical Results.
            </h3>
            
            <p class="text-sm font-serif text-black mb-3">
              Evaluated on {{ pub.results.datasets }} datasets across {{ pub.results.benchmarks }} benchmark tasks, 
              comparing {{ pub.results.models }} model families.
            </p>

            <div v-if="pub.results.topPerformers">
              <p class="text-xs font-serif font-bold text-black mb-1">Top performers by metric:</p>
              <ul class="list-none ml-4 space-y-1">
                <li
                  v-for="(performer, idx) in pub.results.topPerformers"
                  :key="idx"
                  class="text-xs font-mono text-black"
                >
                  • {{ performer.model }} ({{ performer.metric }}): {{ (performer.winRate * 100).toFixed(1) }}% win rate
                </li>
              </ul>
            </div>
          </section>

          <!-- Statistical Significance -->
          <section class="mb-5">
            <h3 class="text-sm font-serif font-bold text-black mb-2">
              Statistical Validation.
            </h3>
            <p class="text-xs font-serif text-black leading-relaxed text-justify mb-2">
              Employed paired t-tests with Bonferroni correction (α = 0.05/n) to validate performance differences. 
              All reported improvements demonstrate statistical significance at p < 0.001 level.
            </p>
            <p class="text-xs font-serif text-black leading-relaxed text-justify">
              Implemented rolling-window cross-validation with temporal ordering preservation to prevent look-ahead bias. 
              Window sizes calibrated to maintain statistical power while respecting domain-specific temporal dependencies.
            </p>
          </section>

          <!-- Keywords -->
          <section class="mb-4">
            <p class="text-xs font-serif text-black">
              <span class="font-bold">Keywords:</span> {{ pub.tags.join(', ') }}
            </p>
          </section>

          <!-- Links -->
          <section class="flex gap-4 pt-2">
            <a
              v-if="pub.links?.paper"
              :href="pub.links.paper"
              target="_blank"
              rel="noopener noreferrer"
              class="text-sm font-serif text-black underline hover:no-underline"
            >
              [Paper]
            </a>
            
            <a
              v-if="pub.links?.code"
              :href="pub.links.code"
              target="_blank"
              rel="noopener noreferrer"
              class="text-sm font-serif text-black underline hover:no-underline"
            >
              [Code]
            </a>

            <button
              @click="copyCitation(pub.citation)"
              class="text-sm font-serif text-black underline hover:no-underline"
            >
              [BibTeX]
            </button>
          </section>
        </article>
      </div>

      <!-- Ongoing Research -->
      <div class="pt-8 border-t-2 border-black">
        <h2 class="text-xl font-serif font-bold text-black mb-4">
          Ongoing Research
        </h2>

        <ul class="space-y-2 text-sm font-serif text-black">
          <li v-for="(paper, idx) in comingSoon" :key="idx" class="leading-relaxed">
            <span class="font-bold">{{ paper.status }}:</span> {{ paper.description }}
          </li>
        </ul>
      </div>

      <!-- Footer -->
      <div class="mt-10 pt-4 border-t border-gray-400 text-center">
        <p class="text-xs font-mono text-gray-600">
          Last updated: {{ new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long' }) }}
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
    abstract: "Foundation models have transformed natural language processing and computer vision, and a rapidly growing literature on time-series foundation models (TSFMs) seeks to replicate this success in forecasting. We address critical gaps in evaluation methodology by introducing TempusBench, a comprehensive framework featuring novel uncontaminated datasets, rigorous statistical benchmarks, standardized hyperparameter optimization protocols, and interpretable visualization tools for systematic TSFM assessment.",
    keyContributions: [
      "Novel datasets explicitly excluded from all known TSFM pretraining corpora, ensuring valid zero-shot generalization assessment and eliminating systematic data leakage that inflates performance estimates",
      "Comprehensive benchmark taxonomy encompassing statistical properties (stationarity via ADF tests, seasonality decomposition, regime detection) beyond traditional categorical divisions (horizon/domain)",
      "Automated hyperparameter tuning framework implementing rolling-window cross-validation with temporal ordering preservation, ensuring fair comparison across statistical, machine learning, and foundation model families",
      "Interactive TensorBoard visualization interface enabling multi-dimensional performance analysis across 60+ benchmark tasks, 20 model families, and multiple probabilistic/deterministic metrics"
    ],
    technicalHighlights: [
      {
        title: "Rolling Window Hyperparameter Optimization Protocol",
        description: "Temporal cross-validation framework preventing look-ahead bias through strict temporal ordering and automated grid search over model-specific parameter spaces.",
        math: "𝓔ᵀᴮ: (𝓣ⱼ, Θᵢ, 𝓕_Θᵢ) → θ*ᵢ,ⱼ where W_t = [context_t, train_t, val_t], stride = |val_t|",
        theory: "The hyperparameter tuner operates via a three-phase procedure: (1) Generate rolling windows {W₁, ..., W_T} by sliding fixed-size partitions along the target series with stride equal to validation length, maintaining temporal ordering; (2) For each window W_t and parameter configuration θ ∈ Θᵢ, compute validation loss ℓ(𝓕_θ(context_t, train_t), val_t); (3) Select θ*_t = argmin_θ ℓ and evaluate test performance on W_{t+1} using selected parameters. This approach respects temporal dependencies while preventing information leakage from future observations.",
        parameters: [
          "𝓣ⱼ: forecasting task specification with context length l, horizon h, variates m,n",
          "Θᵢ: hyperparameter space for model family i (e.g., ARIMA orders, LSTM hidden dims)",
          "𝓕_Θᵢ: parametric forecaster family (statistical, ML, or foundation model)",
          "W_t = [context_t, train_t, val_t]: temporal window partition at timestep t"
        ],
        properties: [
          "Temporal ordering preservation: ensures W_t strictly precedes W_{t+1}",
          "Look-ahead bias elimination: validation/test sets never inform parameter selection",
          "Reproducibility: deterministic procedure enables exact replication across studies"
        ]
      },
      {
        title: "Universal Forecasting Task Specification Framework",
        description: "Formal mathematical representation encompassing all forecasting scenarios: univariate/multivariate, conditional/unconditional, continuous/discrete, with arbitrary horizon and context lengths.",
        math: "𝓣 ≐ (l, h, n, m, 𝓧, 𝓨, X, Y) with 𝓕: 𝓧^(l+h) × 𝓨^l → 𝓨^h, where 𝓨 = ×ᵢ∈[m] 𝓨ᵢ, 𝓧 = ×ⱼ∈[n] 𝓧ⱼ",
        theory: "A forecasting task is completely characterized by the tuple 𝓣 specifying: context length l (historical observations), forecast horizon h (prediction steps), covariate dimensionality n, target variate dimensionality m, and value spaces 𝓧,𝓨. A forecaster 𝓕 maps from joint covariate-history space 𝓧^(l+h) × 𝓨^l to future target space 𝓨^h. This formulation unifies point forecasters (𝓕→𝓨^h) and probabilistic forecasters (𝓕→Δ(𝓨^h)) under a single abstraction, enabling systematic comparison across model families.",
        parameters: [
          "l ∈ ℕ: context length (number of historical timesteps)",
          "h ∈ ℕ: forecast horizon (number of future predictions)",
          "m ∈ ℕ: number of target variates (univariate: m=1, multivariate: m>1)",
          "n ∈ ℕ: number of covariate series (unconditional: n=0, conditional: n>0)",
          "𝓨ᵢ ⊆ ℝ: value space for target variate i (continuous, count, binary, or categorical)",
          "𝓧ⱼ ⊆ ℝ: value space for covariate j (known future values or static features)"
        ],
        properties: [
          "Generality: subsumes classical (ARIMA, ETS) and modern (LSTM, Transformers) forecasters",
          "Composability: tasks can be combined via Cartesian products for multi-task evaluation",
          "Type safety: value space constraints ensure forecasters respect data semantics (e.g., positive counts)"
        ]
      },
      {
        title: "Mean Absolute Scaled Error (MASE) with Theoretical Guarantees",
        description: "Scale-invariant error metric normalizing forecast errors by naive baseline performance, enabling fair comparison across heterogeneous time series with different magnitudes and units.",
        math: "ℓᴹᴬˢᴱ(Ŷ,Y*) = (1/mh)Σᵢ∈[m] Σₜ₌₁ʰ |ŷᵢₜ - y*ᵢₜ| / MAE_baseline where MAE_baseline = (1/(l-1))Σₜ₌₁^(l-1) |yᵢ,ₜ₊₁ - yᵢₜ|",
        theory: "MASE addresses fundamental limitations of scale-dependent metrics (MAE, RMSE) by normalizing forecast errors relative to the one-step-ahead naive forecast error computed over the training period. Values < 1 indicate superior performance vs. naive baseline; > 1 indicates underperformance. Unlike MAPE, MASE is robust to zero values and avoids division instabilities. The denominator MAE_baseline = (1/(l-1))Σ|Δyᵢₜ| represents average one-step absolute change in the training context, capturing inherent series difficulty. This normalization enables meaningful aggregation across series with different scales (e.g., comparing % metrics with absolute sales).",
        parameters: [
          "Ŷ = (ŷ₁,...,ŷₘ)ᵀ ∈ 𝓨^(h×m): forecasted values for m variates over h steps",
          "Y* = (y*₁,...,y*ₘ)ᵀ ∈ 𝓨^(h×m): realized ground truth values",
          "yᵢₜ: historical value of variate i at time t in training context [1,l]",
          "MAE_baseline: naive forecast error baseline computed from first differences"
        ],
        properties: [
          "Scale invariance: MASE(aŶ, aY*) = MASE(Ŷ, Y*) for a > 0",
          "Interpretability: MASE = 0.8 means 20% better than naive baseline",
          "Robustness: defined for all Y* including zeros (unlike MAPE)",
          "Cross-series comparability: enables aggregation across heterogeneous datasets"
        ]
      },
      {
        title: "Continuous Ranked Probability Score (CRPS) for Probabilistic Forecasts",
        description: "Proper scoring rule for probabilistic forecasts measuring integrated squared difference between predicted CDF and empirical CDF of realized outcome, incentivizing honest probability assessments.",
        math: "CRPS(F̂, y*) = ∫_{-∞}^{∞} [F̂(x) - 𝟙{y* ≤ x}]² dx = 𝔼_F̂|Y - y*| - (1/2)𝔼_F̂|Y - Y'| for Y,Y'~F̂",
        theory: "CRPS extends MAE to probabilistic forecasts, reducing to MAE when F̂ is degenerate (point forecast). The score is proper (minimized when F̂ equals true conditional distribution) and local (depends only on outcome y*, not full distribution). The dual representation CRPS = 𝔼|Y-y*| - (1/2)𝔼|Y-Y'| enables efficient Monte Carlo estimation: sample {y₁,...,y_N} from forecast distribution, compute CRPS ≈ (1/N)Σᵢ|yᵢ-y*| - (1/2N²)Σᵢ,ⱼ|yᵢ-yⱼ|. Lower scores indicate sharper, better-calibrated probabilistic forecasts. Unlike log-likelihood, CRPS is robust to misspecified distributional families.",
        parameters: [
          "F̂: predicted cumulative distribution function over forecast horizon",
          "y* ∈ 𝓨: realized outcome (scalar for univariate, vector for multivariate)",
          "𝟙{·}: indicator function (= 1 if condition true, 0 otherwise)",
          "Y, Y' ~ F̂: independent samples from predictive distribution"
        ],
        properties: [
          "Propriety: argmin_F̂ 𝔼_F*[CRPS(F̂,Y)] = F* (true conditional distribution)",
          "Consistency: CRPS(δ_ŷ, y*) = |ŷ - y*| for point forecast ŷ (reduces to MAE)",
          "Locality: depends only on realized outcome y*, not full support of F*",
          "Robustness: finite even under distribution misspecification (unlike KL divergence)"
        ]
      },
      {
        title: "Pairwise Win Rate Aggregation with Robustness Guarantees",
        description: "Rank-based aggregation metric computing probability that model i achieves lower error than randomly selected competitor on random task, robust to outliers and scale heterogeneity across benchmarks.",
        math: "Wᵢ = (1/|𝓒ᵢ|) Σⱼ∈[q] Σᵢ'∈[p]\\{i} wᵢ,ᵢ',ⱼ where wᵢ,ᵢ',ⱼ = 𝟙{ℓᵢ,ⱼ < ℓᵢ',ⱼ} + 0.5·𝟙{ℓᵢ,ⱼ = ℓᵢ',ⱼ}, |𝓒ᵢ| = Σⱼ Σᵢ' 𝟙{both valid}",
        theory: "Win rate provides a distribution-free alternative to mean aggregation, estimating P(model i beats random alternative on random task) via pairwise comparisons. For each task j and model pair (i,i'), the indicator wᵢ,ᵢ',ⱼ = 1 if model i wins, 0.5 for ties, 0 if loses. Aggregating across all valid comparisons |𝓒ᵢ| yields empirical win probability. This approach is robust to: (1) scale differences across tasks (ranking-based), (2) outliers (bounded contribution per comparison), (3) missing data (counts only valid comparisons). Win rate ≈ 0.5 indicates parity with average competitor; > 0.6 suggests consistent superiority across diverse tasks. Unlike mean error aggregation, win rate emphasizes consistency over raw magnitude.",
        parameters: [
          "p: number of models in evaluation (baseline + foundation + ML)",
          "q: number of benchmark tasks spanning statistical properties",
          "ℓᵢ,ⱼ ∈ ℝ₊: error of model i on task j (MAE, RMSE, MASE, CRPS, etc.)",
          "𝓒ᵢ ⊆ [q]×[p]\\{i}: set of valid pairwise comparisons for model i",
          "wᵢ,ᵢ',ⱼ ∈ {0, 0.5, 1}: win indicator (ties contribute 0.5 to maintain symmetry)"
        ],
        properties: [
          "Invariance: unaffected by monotonic transformations of error metrics",
          "Symmetry: Σᵢ Wᵢ = p/2 (average win rate is exactly 0.5)",
          "Interpretability: Wᵢ = 0.7 means model i beats 70% of competitors on average",
          "Robustness: bounded influence of outliers (each comparison contributes ≤ 1/|𝓒ᵢ|)"
        ]
      },
      {
        title: "Geometric Mean Skill Score with Multiplicative Aggregation",
        description: "Log-space error aggregation measuring proportional improvement over baseline via geometric mean of clipped relative errors, ensuring scale invariance and symmetric treatment of improvements/degradations.",
        math: "Sᵢ = 1 - [∏ⱼ∈ℛᵢ clip(ℓᵢ,ⱼ/ℓ_β,ⱼ; 10⁻², 10²)]^(1/|ℛᵢ|) where ℛᵢ = {j: both ℓᵢ,ⱼ, ℓ_β,ⱼ valid}",
        theory: "Skill score quantifies multiplicative performance relative to baseline β (typically seasonal naive). Taking geometric mean exp[(1/|ℛᵢ|)Σⱼ log(ℓᵢ,ⱼ/ℓ_β,ⱼ)] ensures that 2× improvement and 2× degradation cancel exactly, unlike arithmetic mean where large errors dominate. Clipping to [0.01, 100] bounds extreme ratios (e.g., division by near-zero baseline errors), preventing single tasks from overwhelming aggregate. Score interpretation: Sᵢ > 0 indicates superior performance vs. baseline (positive skill), Sᵢ = 0 indicates parity, Sᵢ < 0 indicates underperformance. The geometric structure naturally handles multiplicative scaling across heterogeneous tasks, providing theoretically principled aggregation for ratio-based metrics.",
        parameters: [
          "β: baseline model (seasonal naive, last-value, or domain-specific benchmark)",
          "ℛᵢ ⊆ [q]: task subset where both model i and baseline produce valid forecasts",
          "ℓᵢ,ⱼ/ℓ_β,ⱼ: relative error ratio on task j (< 1 improvement, > 1 degradation)",
          "clip(·; a,b): element-wise clipping to interval [a,b] preventing extreme ratios",
          "|ℛᵢ|: cardinality of valid comparison set (normalization factor)"
        ],
        properties: [
          "Symmetry: log(ℓᵢ/ℓ_β) and log(ℓ_β/ℓᵢ) contribute equally to average (balanced)",
          "Scale invariance: geometric mean unaffected by multiplicative rescaling of tasks",
          "Interpretability: Sᵢ = 0.3 means 30% average improvement over baseline",
          "Robustness: clipping prevents single outlier tasks from dominating aggregate"
        ]
      }
    ],
    complexityAnalysis: [
      {
        operation: "Hyperparameter Grid Search",
        complexity: "O(|Θ| · T · n · (l + h))",
        explanation: "Linear in hyperparameter space size |Θ|, number of rolling windows T, series length n, and context+horizon (l+h). Parallelizable across Θ dimensions."
      },
      {
        operation: "MASE Computation (per window)",
        complexity: "O(m · h · l)",
        explanation: "Requires m·h error calculations plus m·(l-1) baseline computations. Dominates evaluation runtime for large multivariate series (m >> 1)."
      },
      {
        operation: "CRPS Monte Carlo Estimation",
        complexity: "O(N² · h) + O(N · h) ≈ O(N²h)",
        explanation: "Requires N² pairwise differences for expected energy term ½𝔼|Y-Y'|, plus N absolute differences for 𝔼|Y-y*| term. Typically N=100-1000 samples."
      },
      {
        operation: "Win Rate Aggregation",
        complexity: "O(p² · q)",
        explanation: "Computes p(p-1) pairwise comparisons across q tasks. Embarrassingly parallel across task dimension. Scales quadratically in model count p."
      },
      {
        operation: "Full Benchmark Suite",
        complexity: "O(p · q · T · max_i|Θᵢ| · n · (l+h))",
        explanation: "Worst-case: p=20 models, q=60 tasks, T≈50 windows, |Θ|≈100 configs, n≈10K points, (l+h)≈600. Total ≈3.6×10¹⁰ operations, parallelized across GPUs/CPUs."
      }
    ],
    results: {
      models: 20,
      benchmarks: 60,
      datasets: "20+",
      topPerformers: [
        { model: "LAFN", winRate: 0.7931, metric: "MAPE" },
        { model: "TimesFM", winRate: 0.9057, metric: "MAE" },
        { model: "Toto", winRate: 1.0000, metric: "CRPS" }
      ]
    },
    links: {
      paper: "https://openreview.net/forum?id=3fMa060Ag5",
      code: "https://github.com/Smlcrm/TempusBench"
    },
    tags: ["Time-Series", "Foundation-Models", "Benchmarking", "Statistical-Learning", "Probabilistic-Forecasting"],
    citation: `@inproceedings{goktas2025tempusbench,
  title={TempusBench: An Evaluation Framework for Time-Series Forecasting},
  author={Goktas, Denizalp and Riaño-Briceño, Gerardo and Abdullah, Alif and 
          Nair, Aryan and Shen, Chenkai and de Lucio, Beatriz and 
          Magnusson, Alexandra and Mashrur, Farhan and Abdulla, Ahmed and 
          Sen, Shawrna and Thippireddy, Mahitha and Schwartz, Gregory and 
          Greenwald, Amy},
  booktitle={NeurIPS 2025 Workshop on Recent Advances in Time Series Foundation Models},
  year={2025},
  url={https://openreview.net/forum?id=3fMa060Ag5}
}`
  }
]);

const comingSoon = ref([
  {
    status: "IN PREPARATION",
    description: "Extending theoretical foundations of time-series foundation models with novel architectural innovations and convergence guarantees."
  },
  {
    status: "UNDER REVIEW",
    description: "Investigating probabilistic forecasting paradigms with applications to high-frequency financial data and uncertainty quantification."
  },
  {
    status: "EARLY RESEARCH",
    description: "Exploring multi-modal integration strategies for time-series analysis combining temporal, textual, and structural information sources."
  }
]);

const copyCitation = (citation) => {
  navigator.clipboard.writeText(citation);
};
</script>

<style scoped>
/* Computer Modern font stack */
.font-serif {
  font-family: "Computer Modern Serif", "Latin Modern Roman", "Nimbus Roman No9 L", "Times New Roman", Times, serif;
}

.font-mono {
  font-family: "Computer Modern Typewriter", "Latin Modern Mono", "Courier New", Courier, monospace;
}

/* Import Computer Modern fonts */
@font-face {
  font-family: "Computer Modern Serif";
  src: url('https://cdn.jsdelivr.net/gh/aaaakshat/cm-web-fonts@latest/fonts/cmunrm.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: "Computer Modern Serif";
  src: url('https://cdn.jsdelivr.net/gh/aaaakshat/cm-web-fonts@latest/fonts/cmunbx.woff') format('woff');
  font-weight: bold;
  font-style: normal;
}

@font-face {
  font-family: "Computer Modern Serif";
  src: url('https://cdn.jsdelivr.net/gh/aaaakshat/cm-web-fonts@latest/fonts/cmunti.woff') format('woff');
  font-weight: normal;
  font-style: italic;
}

@font-face {
  font-family: "Computer Modern Typewriter";
  src: url('https://cdn.jsdelivr.net/gh/aaaakshat/cm-web-fonts@latest/fonts/cmuntt.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}

/* LaTeX-style justification */
p {
  hyphens: auto;
}

/* Remove default link styling */
a {
  color: inherit;
}
</style>