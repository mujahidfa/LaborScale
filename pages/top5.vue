<template>
  <main
    class="flex flex-col max-w-screen-lg min-h-screen px-8 text-center lg:mx-auto"
  >
    <!-- <Disclaimer
      v-show="isModalVisible === true"
      @close="isModalVisible = false"
    /> -->
    <h1 class="pt-10 pb-3 text-3xl font-extrabold lg:text-5xl">
      The Top 5's
    </h1>
    <p class="text-gray-800 md:text-xl">
      <RoughNotation :is-show="true" type="highlight" color="#fff176">
        We list the Top 5's interesting findings from the current 2020 job
        market in Malaysia.
      </RoughNotation>
    </p>
    <!-- <p class="text-red-800">
      *Please read the disclaimer before proceeding!
      <button
        class="underline hover:text-blue-700"
        @click="isModalVisible = true"
      >
        Click here
      </button>
    </p> -->
    <!-- <p class="text-xs text-gray-600">
      *based on 2017-2018 data obtained from the
      <a
        href="https://www.ilmia.gov.my/"
        target="_blank"
        rel="noopener noreferrer"
        class="text-gray-600 underline hover:text-blue-600"
      >
        Institute of Labour Market Information and Analysis (ILMIA)
      </a>
    </p> -->

    <section class="py-12 space-y-12 md:px-32">
      <top-5-card :industry="jobToStudent">
        <template v-slot:title>
          <RoughNotation :is-show="true" type="highlight" color="#fdf1d9">
            Top 5 highest student-to-job ratio
          </RoughNotation>
        </template>
        <template v-slot:heading>
          Higher on the list means there's more job openings relative to the
          number of students enrolled in university in 2018
        </template>
      </top-5-card>

      <top-5-card :salaries="salary" :is-object="true">
        <template v-slot:title>
          <RoughNotation :is-show="true" type="highlight" color="#e9d8fd">
            Top 5 industry with highest potential income
          </RoughNotation>
        </template>
        <template v-slot:heading>
          Higher on the list means the industry pays higher wages on average
        </template>
      </top-5-card>

      <top-5-card :industry="laborDemand">
        <template v-slot:title>
          <RoughNotation :is-show="true" type="highlight" color="#fed7d7">
            Top 5 industry with the most job openings
          </RoughNotation>
        </template>
        <template v-slot:heading>
          Higher on the list means there's more job openings in the industry in
          general
        </template>
      </top-5-card>

      <top-5-card :industry="laborSupply">
        <template v-slot:title>
          <RoughNotation :is-show="true" type="highlight" color="#c3dafe">
            Top 5 highest student output for an industry
          </RoughNotation>
        </template>
        <template v-slot:heading>
          Higher on the list means there's more students graduating in the
          industry in general
        </template>
      </top-5-card>
    </section>
  </main>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      // isModalVisible: true,
      jobToStudent: [
        'Social and behavioural science',
        'Environmental science',
        'Dental studies',
        'Material engineering',
        'Health',
      ],
      laborDemand: [
        'Business and administration',
        'Social and behavioural science',
        'Computer science',
        'Building',
        'Finance, banking, insurance',
      ],
      laborSupply: [
        'Computer science',
        'Accounting and taxation',
        'Finance, banking, insurance',
        'Business and administration',
        'Mechanics and metal work',
      ],
      salary: {
        'Dental studies': 6686,
        Law: 3900,
        'Food processing': 3733,
        Building: 3631,
        'Social work and counseling': 3616,
      },
    }
  },
  // watch: {
  //   isModalVisible(newName) {
  //     localStorage.isModalVisible = newName
  //   },
  // },
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

<style scoped></style>
