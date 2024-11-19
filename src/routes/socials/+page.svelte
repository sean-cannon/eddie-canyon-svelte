<script>
    // Define social media platforms with their respective details
    const socials = [
      {
        name: 'Instagram',
        description: 'Follow me on Instagram for behind-the-scenes content and updates.',
        url: 'https://www.instagram.com/eddie.canyon',
        icon: '/icons/instagram logo.jpeg', // Ensure you have the appropriate icon in your static folder
      },
      {
        name: 'YouTube',
        description: 'Subscribe to my YouTube channel for music videos and live performances.',
        url: 'https://www.youtube.com/channel/UCXJaUwYuKMsywson0nXnzDA',
        icon: '/icons/youtube logo.jpeg',
      }
    ];
  </script>
  
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-4xl font-bold text-center mb-8">Follow Me</h1>
    <p class="text-lg text-center mb-12">Connect with me on these platforms:</p>
  
    <!-- Social Media Cards -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        {#each socials as { name, description, url, icon }}
        <div class="bg-white shadow-lg rounded-lg overflow-hidden transform transition hover:scale-105">
          <a href={url} target="_blank" class="block p-6 text-center">
            <img src={icon} alt="{name} icon" class="w-16 h-16 mx-auto mb-4" />
            <h2 class="text-2xl font-semibold mb-2">{name}</h2>
            <p class="text-gray-600">{description}</p>
          </a>
        </div>
      {/each}
    </div>
  
    <!-- Instagram Embed -->
    <div class="mt-12">
      <h2 class="text-3xl font-semibold text-center mb-6">Instagram Feed</h2>
      <div class="flex justify-center">
        <iframe
          src="https://www.instagram.com/eddie.canyon/embed"
          width="400"
          height="480"
          frameborder="0"
          scrolling="no"
          class="border border-gray-300 rounded-lg"
        ></iframe>
      </div>
    </div>
  </div>
  