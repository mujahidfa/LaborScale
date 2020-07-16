<template>
  <main
    class="flex flex-col max-w-screen-md min-h-screen px-8 text-left md:mx-auto"
  >
    <h1 class="pt-10 pb-3 text-3xl font-extrabold text-center md:text-5xl">
      Disclaimer
    </h1>
    <p class="p-4 text-xl text-gray-800 bg-gray-200 rounded-lg">
      This website is for a competition and is
      <span class="font-bold text-red-600"> not ready for real world use</span>.
      The data we used is
      <span class="font-bold text-red-600">
        less accurate and not reflective
      </span>
      of the current job market in Malaysia. We are actively working on getting
      access to more accurate data. We appreciate your support!
    </p>
    <button
      class="py-2 my-10 font-bold text-white transition duration-300 ease-in-out transform bg-indigo-400 rounded sm:self-center sm:w-56 focus:outline-none hover:bg-teal-600 hover:scale-105"
      @click.prevent="$router.push('/')"
    >
      <RoughNotation :is-show="true" type="underline" color="white">
        Go back to home page
      </RoughNotation>
    </button>
  </main>
</template>

<script>
export default {
  data() {
    return {
      isModalVisible: true,
    }
  },
}
</script>

<style scoped></style>
