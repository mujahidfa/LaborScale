<template>
  <main
    class="flex flex-col max-w-screen-lg min-h-screen px-8 text-center lg:mx-auto"
  >
    <h1 class="pt-10 pb-3 text-3xl font-extrabold lg:text-5xl">
      Find out if your college degree has
      <br aria-hidden="true" />
      <RoughNotation :is-show="true" type="highlight" color="#fff176">
        enough jobs
      </RoughNotation>
      <br aria-hidden="true" />
      waiting for you!
    </h1>
    <p class="pb-10 text-sm text-gray-600">
      *based on 2017-2018 data obtained from the
      <a
        href="https://www.ilmia.gov.my/"
        target="_blank"
        rel="noopener noreferrer"
        class="text-gray-600 underline hover:text-blue-600"
      >
        Institute of Labour Market Information and Analysis (ILMIA)
      </a>
    </p>
    <section class="pb-20 md:px-32">
      <div class="flex flex-row items-center justify-center pb-4">
        <RoughNotation :is-show="true" type="highlight" color="#FFFEE2">
          <p class="font-bold">Step 1:</p>
        </RoughNotation>

        <label for="course" class="pl-2 text-2xl text-center">
          I'm studying...
        </label>
      </div>

      <v-select
        id="course"
        v-model="selectedEduLevel"
        :options="eduLevels"
        placeholder="Select an education level."
        class="text-gray-600"
      >
        <p slot="no-options">
          Sorry, we couldn't find your education level.
        </p>
      </v-select>
    </section>

    <section class="pb-20 md:px-32">
      <div class="flex flex-row items-center justify-center pb-4">
        <RoughNotation :is-show="true" type="highlight" color="#FFFEE2">
          <p class="font-bold">Step 2:</p>
        </RoughNotation>

        <label for="job" class="pl-2 text-2xl text-center">
          I want to work in...
        </label>
      </div>
      <v-select
        id="job"
        v-model="selectedIndustry"
        :options="industries"
        :disabled="isEduLevelSelected === false"
        placeholder="Select an industry."
        class="text-gray-600"
      >
        <div slot="no-options">
          No job industry is found for your selected education level.
        </div>
      </v-select>
    </section>
    <button
      class="py-2 mb-12 font-bold text-white bg-blue-400 rounded sm:self-center sm:w-56 focus:outline-none"
      :class="{
        'transition duration-300 ease-in-out transform hover:bg-green-600 hover:scale-105': isOptionsFilledIn,
        'cursor-not-allowed opacity-50': isOptionsFilledIn === false,
      }"
      :disabled="isOptionsFilledIn === false"
      @click.prevent="$router.push(link)"
    >
      <RoughNotation
        :is-show="isOptionsFilledIn"
        type="underline"
        color="white"
      >
        Submit!
      </RoughNotation>
    </button>
  </main>
</template>

<script lang="ts">
import Vue from 'vue'
import 'vue-select/dist/vue-select.css'
import { eduLevelToIndustry } from '@/data/eduLevelToIndustry.ts'

export default Vue.extend({
  data() {
    return {
      eduLevels: [
        'No Tertiary Education',
        'Certificate',
        'Pre-University',
        'Diploma/Advanced Diploma',
        'Bachelor/Postgraduate Diploma/Professional',
        'Master',
        'PhD/Doctorate',
      ],
      selectedEduLevel: '' as string,
      selectedIndustry: '' as string,
    }
  },
  computed: {
    isEduLevelSelected(): Boolean {
      return this.selectedEduLevel !== '' && this.selectedEduLevel !== null
    },
    industries(): string[] {
      return eduLevelToIndustry[this.selectedEduLevel]
    },
    isOptionsFilledIn(): Boolean {
      return (
        this.selectedEduLevel !== '' &&
        this.selectedEduLevel !== null &&
        this.selectedIndustry !== '' &&
        this.selectedIndustry !== null
      )
    },
    selectedEduLevelFormatted(): string {
      // replace slashes with spaces
      return this.selectedEduLevel.split('/').join(' or ')
      // .split(',')
      // .join('-')
      // .split('(')
      // .join('')
      // .split(')')
      // .join('')
    },
    link(): string {
      return (
        '/search/' +
        this.selectedIndustry +
        ' x ' +
        this.selectedEduLevelFormatted
      )
    },
  },
  watch: {
    selectedEduLevel() {
      // clear previously selected job whenever a new course is selected
      this.selectedIndustry = ''
    },
  },
})
</script>

<style scoped>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.style-chooser .vs__search::placeholder,
.style-chooser .vs__dropdown-toggle,
.style-chooser .vs__dropdown-menu {
  background: blue;
  border: none;
  color: pink;
  text-transform: lowercase;
  font-variant: small-caps;
}
</style>
