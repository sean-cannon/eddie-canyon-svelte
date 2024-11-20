<script>
  export const prerender = true;    
  const currentYear = new Date().getFullYear();
  export const appVersion = __APP_VERSION__;
</script>

<div class="container mx-auto px-4 py-6 space-y-8">
    <!-- Page Header -->
    <header class="text-center">
      <h1 class="text-4xl font-bold text-primary-900">Watch</h1>
      <p class="text-lg text-primary-700">Music videos, live performances, and more.</p>
    </header>
  
    <!-- Small Town II -->
    <div class="card p-6 bg-primary-50 rounded-lg shadow-md">
      <h2 class="text-2xl font-semibold text-primary-900 mb-4">Small Town II (Official Music Video)</h2>
      <iframe
        class="rounded-lg border border-primary-300 w-full"
        style="height: 360px;"
        src="https://www.youtube.com/embed/wRlo8s12v7o"
        frameborder="0"
        allowfullscreen
      ></iframe>
    </div>
  
    <!-- Shrewd as a Serpent -->
    <div class="card p-6 bg-primary-50 rounded-lg shadow-md">
      <h2 class="text-2xl font-semibold text-primary-900 mb-4">Shrewd as a Serpent - LIVE (Tiny Desk Contest 2023)</h2>
      <iframe
        class="rounded-lg border border-primary-300 w-full"
        style="height: 360px;"
        src="https://www.youtube.com/embed/kuzIMtQo6LI"
        frameborder="0"
        allowfullscreen
      ></iframe>
    </div>
  
    <!-- Dying In The Dark -->
    <div class="card p-6 bg-primary-50 rounded-lg shadow-md">
      <h2 class="text-2xl font-semibold text-primary-900 mb-4">Dying In The Dark (Ac808stic Version) (Lyric Video)</h2>
      <iframe
        class="rounded-lg border border-primary-300 w-full"
        style="height: 360px;"
        src="https://www.youtube.com/embed/ozxSg5i6p2E"
        frameborder="0"
        allowfullscreen
      ></iframe>
    </div>
  </div>

  <footer class="bg-primary-900 text-center text-white py-4">
    © {currentYear} Eddie Canyon. Built with passion. Follow me on <a href="/socials" class="text-primary-200 hover:underline">Socials</a>.
    <p>Version: {appVersion}</p>
</footer>
  