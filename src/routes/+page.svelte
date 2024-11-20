<script>
    // Get the current year dynamically
    const currentYear = new Date().getFullYear();

    export const appVersion = __APP_VERSION__;
</script>

<div class="relative h-screen bg-black">
    <!-- Background Header Image -->
    <img
        src="/path-to-your-header-image.jpg" 
        alt="Eddie Canyon Header" 
        class="absolute inset-0 object-cover w-full h-full"
    />

    <!-- Overlay -->
    <div class="absolute inset-0 bg-black bg-opacity-40"></div>

    <!-- Hero Content -->
    <div class="relative z-10 flex flex-col justify-center items-center h-full text-center text-white space-y-6 px-4">
        <h1 class="text-5xl font-bold text-primary-100">Eddie Canyon</h1>
        <h2 class="text-xl font-light">
            <span class="text-primary-200 font-semibold">Not</span> for the surface dwellers.
        </h2>
        <div class="flex space-x-4 mt-6">
            <a
                href="/listen"
                class="px-6 py-3 bg-primary-700 text-white font-medium text-lg rounded-full shadow-md transition transform hover:bg-primary-600 hover:scale-105"
            >
                Listen
            </a>
            <a
                href="/watch"
                class="px-6 py-3 bg-primary-700 text-white font-medium text-lg rounded-full shadow-md transition transform hover:bg-primary-600 hover:scale-105"
            >
                Watch
            </a>
            <a
                href="/think"
                class="px-6 py-3 bg-primary-700 text-white font-medium text-lg rounded-full shadow-md transition transform hover:bg-primary-600 hover:scale-105"
            >
                Think...
            </a>
        </div>
    </div>
</div>

<footer class="bg-primary-900 text-center text-white py-4">
    © {currentYear} Eddie Canyon. Built with passion. Follow me on <a href="/socials" class="text-primary-200 hover:underline">Socials</a>.
    <p>Version: {appVersion}</p>
</footer>
