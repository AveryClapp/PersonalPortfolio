import NoteWrapper from "@/Components/NoteSystem/NoteWrapper";

const Projects = () => {
  const projectsContent = `
    <section id="projects" class="max-w-3xl px-4 py-2">
      <h2 class="mb-2 text-2xl font-semibold text-neutral-900">Projects</h2>

      <div class="mb-4">
        <h3 class="text-lg font-semibold text-neutral-900">
          Network Analyzer
        </h3>
        <p class="text-sm text-neutral-700 leading-relaxed">
          A sophisticated network analysis tool that captures, sniffs, and parses network traffic flowing through your device in real-time.
        </p>
        <a
          href="https://github.com/AveryClapp/NetworkAnalyzer"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-block text-sm font-medium text-black hover:text-blue-500"
        >
          View Project →
        </a>
      </div>

      <div class="mb-4">
        <h3 class="text-lg font-semibold text-neutral-900">
          Daily News Report
        </h3>
        <p class="text-sm text-neutral-700 leading-relaxed">
          A daily news aggregation system that curates top trending headlines from multiple sources. Designed to cut personal browsing time and keep you updated effortlessly.^1[This was my first coding project outside of the classroom]
        </p>
        <a
          href="https://github.com/AveryClapp/DailyNewsReport"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-block text-sm font-medium text-black hover:text-blue-500"
        >
          View Project →
        </a>
      </div>

      <div class="mb-4">
        <h3 class="text-lg font-semibold text-neutral-900">
          Instagram Botting Suite
        </h3>
        <p class="text-sm text-neutral-700 leading-relaxed">
          An analytics tool that tracks over 1,000 Instagram accounts, offering insights into engagement, 'ghost' followers, and growth metrics.
        </p>
        <a
          href="https://github.com/AveryClapp/InstagramAnalyzer"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-block text-sm font-medium text-black hover:text-blue-500"
        >
          View Project →
        </a>
      </div>

      <div class="mb-4">
        <h3 class="text-lg font-semibold text-neutral-900">
          Crypto Trading Platform
        </h3>
        <p class="text-sm text-neutral-700 leading-relaxed">
          A robust trading platform that crunches real-time data and machine learning models to forecast crypto market trends.
        </p>
        <a
          href="https://github.com/AveryClapp/AICryptoPlatform"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-block text-sm font-medium text-black hover:text-blue-500"
        >
          View Project →
        </a>
      </div>
    </section>
  `;

  return <NoteWrapper content={projectsContent} />;
};

export default Projects;
