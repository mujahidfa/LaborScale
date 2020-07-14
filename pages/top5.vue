<template>
  <main
    class="flex flex-col max-w-screen-lg min-h-screen px-8 text-center lg:mx-auto"
  >
    <h1 class="pt-10 pb-3 text-3xl font-extrabold lg:text-5xl">
      The Top 5's
    </h1>
    <p class="text-gray-800 md:text-xl">
      <RoughNotation :is-show="true" type="highlight" color="#fff176">
        We list the Top 5's interesting findings from the labor market in
        Malaysia.
      </RoughNotation>
    </p>
    <p class="text-xs text-gray-600">
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

    <section class="py-12 space-y-12 md:px-32">
      <top-5-card :industry="jobToStudent">
        <template v-slot:title>
          <RoughNotation :is-show="true" type="highlight" color="#fdf1d9">
            Top 5 highest student-to-job ratio
          </RoughNotation>
        </template>
        <template v-slot:heading>
          Higher on the list means there's more job openings relative to the
          number of students graduating in that industry
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
            Top 5 industry with the most jobs openings
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
      jobToStudent: [
        'Protection of persons and property',
        'Marketing and advertising',
        'Languages',
        'Transport services',
        'Journalism and reporting',
      ],
      laborDemand: [
        'Management and administration',
        'Marketing and advertising',
        'Accounting and taxation',
        'Computer science',
        'Finance, banking and insurance',
      ],
      laborSupply: [
        'Management and administration',
        'Computer science',
        'Mechanics and metal work',
        'Civil engineering',
        'Electronics and automation',
      ],
      salary: {
        Statistics: 6633,
        Physics: 6509,
        Economics: 6315,
        'Computer science': 6144,
        Law: 6029,
      },
    }
  },
})
</script>

<style scoped></style>
