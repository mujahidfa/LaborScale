<template>
  <footer
    id="footer"
    class="flex justify-center py-6 text-sm text-gray-800 bg-gray-200 border-t border-gray-300"
  >
    <p>
      © 2020 by
      <a
        href="https://github.com/mujahidfa"
        target="_blank"
        rel="noopener noreferrer"
        class="hover:text-blue-600"
      >
        Mujahid,
      </a>
      <a
        href="https://www.instagram.com/rinaibrhm/"
        target="_blank"
        rel="noopener noreferrer"
        class="hover:text-blue-600"
      >
        Rina
      </a>
      &
      <a
        href="https://www.instagram.com/ikmlsyfq/"
        target="_blank"
        rel="noopener noreferrer"
        class="hover:text-blue-600"
      >
        Ikmal </a
      >.
    </p>
  </footer>
</template>

<style lang="scss" scoped>
footer {
  padding-bottom: env(safe-area-inset-bottom);
}
#footer * {
  @apply mb-6;
}
</style>
