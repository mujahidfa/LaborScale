<template>
  <div
    class="flex flex-col max-w-screen-lg min-h-screen px-32 text-center lg:mx-auto"
  >
    <h1
      v-if="error.statusCode === 404"
      class="pt-10 pb-12 text-3xl font-extrabold lg:text-5xl"
    >
      Page not found.
    </h1>
    <h1 v-else class="pt-10 pb-12 text-3xl font-extrabold lg:text-5xl">
      An error occurred.
    </h1>
    <nuxt-link
      to="/"
      class="py-4 bg-green-200 rounded-lg lg:text-3xl hover:bg-green-600 hover:text-white"
    >
      Go back to home page
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: ['error'],
}
</script>
