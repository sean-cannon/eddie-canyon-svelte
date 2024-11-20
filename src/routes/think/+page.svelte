<script>
  export const prerender = true;
  const currentYear = new Date().getFullYear();
  export const appVersion = __APP_VERSION__;
</script>

<h1>Think</h1>
<p>Coming soon: A collection of blog posts.</p>

<footer class="bg-primary-900 text-center text-white py-4">
    © {currentYear} Eddie Canyon. Built with passion. Follow me on <a href="/socials" class="text-primary-200 hover:underline">Socials</a>.
    <p>Version: {appVersion}</p>
</footer>