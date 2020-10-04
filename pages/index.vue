<template>
  <main
    class="flex flex-col max-w-screen-lg min-h-screen px-8 text-center lg:mx-auto"
  >
    <!-- <Disclaimer
      v-show="isModalVisible === true"
      @close="isModalVisible = false"
    /> -->

    <h1 class="pt-10 pb-3 text-3xl font-extrabold lg:text-5xl">
      Find out if your college degree has
      <br aria-hidden="true" />
      <RoughNotation :is-show="true" type="highlight" color="#fff176">
        enough jobs
      </RoughNotation>
      <br aria-hidden="true" />
      waiting for you!
    </h1>
    <!-- <p class="pb-10 text-red-800">
      *Please read the disclaimer before proceeding!
      <button
        class="underline hover:text-blue-700"
        @click="isModalVisible = true"
      >
        Click here
      </button>
    </p> -->

    <p class="pb-10 text-sm text-gray-600">
      *based on 2020 data scraped from JobStreet from January to June 2020 &
      <a
        href="http://www.data.gov.my/"
        target="_blank"
        rel="noopener noreferrer"
        class="text-gray-600 underline hover:text-blue-600"
      >
        MAMPU's Public Sector Open Data Portal</a
      >
      data on student enrollment in Malaysia's public universities in 2018.
    </p>
    <div class="mb-4">
      <button
        type="button"
        class="inline-block px-3 py-2 text-sm leading-none text-gray-500 transition duration-300 ease-in-out transform rounded-lg hover:bg-indigo-100 hover:text-indigo-600 focus:outline-none hover:scale-105"
        @click="isPersonalityTypeIncluded = !isPersonalityTypeIncluded"
      >
        {{
          isPersonalityTypeIncluded === false
            ? 'Try using our Personality Type filter!'
            : 'Go to default filtering'
        }}
      </button>
    </div>

    <div v-if="isPersonalityTypeIncluded === false">
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
          :options="eduLevelIndustries"
          :disabled="isEduLevelSelected === false"
          placeholder="Select an industry."
          class="text-gray-600"
        >
          <div slot="no-options">
            No job industry is found for your selected education level.
          </div>
        </v-select>
      </section>
    </div>

    <div v-else>
      <!-- Education level -->
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

      <!-- Personality type -->
      <section class="pb-20 md:px-32">
        <div class="flex flex-row items-center justify-center pb-4">
          <RoughNotation :is-show="true" type="highlight" color="#FFFEE2">
            <p class="font-bold">Step 2:</p>
          </RoughNotation>

          <label for="job" class="pl-2 text-2xl text-center">
            My personality type is...<br />
            <p class="text-sm text-gray-600">
              *based on the
              <a
                href="https://www.16personalities.com/free-personality-test"
                target="_blank"
                rel="noopener noreferrer"
                class="text-indigo-700 underline hover:text-green-700"
              >
                Myers-Briggs Type Indicator</a
              >
            </p>
          </label>
        </div>
        <v-select
          id="job"
          v-model="selectedPersonalityType"
          :options="personalityTypes"
          :disabled="isEduLevelSelected === false"
          placeholder="Select a personality type."
          class="text-gray-600"
        >
          <div slot="no-options">
            No matching personality type found.
          </div>
        </v-select>
      </section>

      <!-- Industry -->
      <section class="pb-20 md:px-32">
        <div class="flex flex-row items-center justify-center pb-4">
          <RoughNotation :is-show="true" type="highlight" color="#FFFEE2">
            <p class="font-bold">Step 3:</p>
          </RoughNotation>

          <label for="job" class="pl-2 text-2xl text-center">
            You are compatible to work in...
          </label>
        </div>
        <v-select
          id="job"
          v-model="selectedIndustry"
          :options="personalityIndustries"
          :disabled="
            isEduLevelSelected === false && isPersonalityTypeSelected === false
          "
          placeholder="Select an industry."
          class="text-gray-600"
        >
          <div slot="no-options">
            No job industry is found for your selected education level.
          </div>
        </v-select>
      </section>
    </div>

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
import { personalityToIndustry } from '@/data/personalityToIndustry.ts'

export default Vue.extend({
  data() {
    return {
      isPersonalityTypeIncluded: false,
      eduLevels: [
        'No Tertiary Education',
        'Professional Certificate',
        'Pre-University',
        'Diploma/Advanced/Higher/Graduate Diploma',
        'Bachelor/Postgraduate Diploma/Professional Degree',
        'Master',
        'PhD/Doctorate',
      ],
      personalityTypes: [
        'ISTJ',
        'ESTJ',
        'INTJ',
        'ISTP',
        'INTP',
        'INFJ',
        'ISFP',
        'ESTP',
        'ENFP',
        'ENTP',
        'ENFJ',
        'ESFP',
        'ENTJ',
        'ISFJ',
        'INFP',
        'ESFJ',
      ],
      selectedEduLevel: '' as string,
      selectedPersonalityType: '' as string,
      selectedIndustry: '' as string,
      isModalVisible: true,
    }
  },
  computed: {
    isEduLevelSelected(): Boolean {
      return this.selectedEduLevel !== '' && this.selectedEduLevel !== null
    },
    isPersonalityTypeSelected(): Boolean {
      return (
        this.selectedPersonalityType !== '' &&
        this.selectedPersonalityType !== null
      )
    },
    personalityIndustries(): string[] {
      return personalityToIndustry[this.selectedPersonalityType]
    },
    eduLevelIndustries(): string[] {
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
    // isModalVisible(newName) {
    //   localStorage.isModalVisible = newName
    // },
    selectedEduLevel() {
      // clear previously selected job whenever a new course is selected
      this.selectedIndustry = ''
    },
  },
  // mounted() {
  //   if (localStorage.isModalVisible) {
  //     // localStorage.isModalVisible = true
  //     this.isModalVisible = localStorage.isModalVisible
  //     // eslint-disable-next-line no-console
  //     console.log(
  //       'in mounted localstorage homepage: ' + localStorage.isModalVisible
  //     )
  //     // eslint-disable-next-line no-console
  //     console.log('value of isModalVisible: ' + this.isModalVisible)
  //   }
  // },
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
