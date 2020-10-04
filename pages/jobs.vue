<template>
  <main
    class="flex flex-col max-w-screen-lg min-h-screen px-8 text-center lg:mx-auto"
  >
    <h1 class="pt-10 pb-3 text-3xl font-extrabold lg:text-5xl">
      <RoughNotation :is-show="true" type="highlight" color="#fff176">
        Post jobs here!
      </RoughNotation>
    </h1>

    <Disqus />
  </main>
</template>

<script>
export default {}
</script>

<style scoped></style>
