<template>
  <main
    class="flex flex-col max-w-screen-lg min-h-screen px-8 text-center lg:mx-auto"
  >
    <section class="pb-4 border-0 border-b-2">
      <p class="pt-10 text-lg">You selected:</p>
      <h1 class="pb-4 text-3xl font-extrabold lg:text-5xl">
        <RoughNotation
          :is-show="true"
          type="underline"
          :multiline="true"
          :iterations="3"
          color="purple"
        >
          {{ industry }}
        </RoughNotation>
      </h1>
      <p class="text-lg">with education level</p>
      <h1 class="pb-8 text-3xl font-extrabold lg:text-5xl">
        <RoughNotation
          :is-show="true"
          type="underline"
          :multiline="true"
          :iterations="3"
          color="blue"
        >
          {{ eduLevel }}
        </RoughNotation>
      </h1>
    </section>

    <section class="pt-4 pb-8 mb-8">
      <button
        type="button"
        :class="{
          'bg-indigo-100 text-indigo-700': year === '2018',
          'text-gray-500 hover:text-indigo-600 focus:text-indigo-600':
            year !== '2018',
        }"
        class="inline-block px-3 py-2 font-medium leading-none text-indigo-700 rounded-lg focus:outline-none bg-indigo-50"
        @click="year = '2018'"
      >
        2018
      </button>
      <button
        type="button"
        :class="{
          'bg-indigo-100 text-indigo-700': year === '2017',
          'text-gray-500 hover:text-indigo-600 focus:text-indigo-600':
            year !== '2017',
        }"
        class="inline-block px-3 py-2 ml-2 font-medium leading-none text-gray-500 rounded-lg focus:outline-none hover:text-indigo-600 focus:text-indigo-600"
        @click="year = '2017'"
      >
        2017
      </button>
      <h2
        class="pt-4 pb-3 text-2xl font-semibold text-left text-gray-900 md:text-center"
      >
        General info:
      </h2>

      <div class="md:max-w-md md:mx-auto">
        <h2 class="pb-3 text-left text-gray-700 md:text-center">
          Student to job availability ratio in {{ year }}:
        </h2>
        <RoughNotation :is-show="true" type="box" :iterations="3" color="green">
          <div class="p-4">
            <p class="text-3xl">1 graduate : {{ studentJobRatio }} jobs</p>
          </div>
        </RoughNotation>
      </div>

      <div class="md:flex md:justify-around">
        <div>
          <h2 class="pt-8 pb-3 text-left text-gray-700 md:text-center">
            Male to female ratio in {{ year }}:
          </h2>
          <RoughNotation :is-show="true" type="box" :iterations="3" color="red">
            <div class="p-4">
              <p class="text-3xl">1 male : {{ maleFemaleRatio }} females</p>
            </div>
          </RoughNotation>
        </div>

        <div>
          <h2 class="pt-8 pb-3 text-left text-gray-700 md:text-center">
            Average wage in {{ year }}:
          </h2>
          <RoughNotation
            :is-show="true"
            type="box"
            :iterations="3"
            color="orange"
          >
            <div class="p-4">
              <p class="text-3xl">RM{{ minWage }} - RM{{ maxWage }}</p>
            </div>
          </RoughNotation>
        </div>
      </div>
    </section>

    <section class="pt-4 pb-10 border-0 border-t-2 border-b-2">
      <button
        type="button"
        :class="{
          'bg-indigo-100 text-indigo-700': year === '2018',
          'text-gray-500 hover:text-indigo-600 focus:text-indigo-600':
            year !== '2018',
        }"
        class="inline-block px-3 py-2 font-medium leading-none text-indigo-700 rounded-lg focus:outline-none bg-indigo-50"
        @click="year = '2018'"
      >
        2018
      </button>
      <button
        type="button"
        :class="{
          'bg-indigo-100 text-indigo-700': year === '2017',
          'text-gray-500 hover:text-indigo-600 focus:text-indigo-600':
            year !== '2017',
        }"
        class="inline-block px-3 py-2 ml-2 font-medium leading-none text-gray-500 rounded-lg focus:outline-none hover:text-indigo-600 focus:text-indigo-600"
        @click="year = '2017'"
      >
        2017
      </button>
      <h2
        class="pt-4 text-2xl font-semibold text-left text-gray-900 md:text-center"
      >
        Location:
      </h2>
      <h3 class="pb-3 text-left text-gray-600 md:text-center">
        Number of job openings in each state, ordered from highest to lowest.
      </h3>
      <bar-chart :chart-data="chartData" :options="chartOptions"></bar-chart>
    </section>

    <section class="flex flex-col items-start pb-10 border-0 border-b-2">
      <h2 class="pt-8 pb-3 text-2xl font-semibold text-gray-900">
        Important links:
      </h2>
      <div class="">
        <ul class="pl-4 text-left list-disc list-inside">
          <li class="">
            <a
              :href="jobstreetLink"
              target="_blank"
              rel="noopener noreferrer"
              class="text-indigo-700 underline hover:text-green-700"
            >
              Available jobs on JobStreet
            </a>
          </li>
          <li>
            <a
              :href="linkedinLink"
              target="_blank"
              rel="noopener noreferrer"
              class="text-indigo-700 underline hover:text-green-700"
            >
              Industry connections on LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </section>

    <button
      class="py-2 my-10 font-bold text-white transition duration-300 ease-in-out transform bg-indigo-400 rounded sm:self-center sm:w-56 focus:outline-none hover:bg-teal-600 hover:scale-105"
      @click.prevent="$router.push('/')"
    >
      <RoughNotation :is-show="true" type="underline" color="white">
        Search again!
      </RoughNotation>
    </button>
  </main>
</template>

<script lang="ts">
import Vue from 'vue'
import { industries } from '@/data/industries.ts'
import * as laborData from '@/data/data.json'

export default Vue.extend({
  data() {
    return {
      elementId: '',
      url: this.$route.params.id.split(' x '),
      is2018: true,
      year: '2018',
      chartOptions: {
        maintainAspectRatio: false,
        responsive: true,
        scales: {
          xAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
              gridLines: {
                offsetGridLines: true,
              },
            },
          ],
        },
      },
    }
  },
  computed: {
    eduLevel(): string {
      return this.url[1].split(' or ').join('/')
    },
    industry(): string {
      return this.url[0]
    },
    selectedIndustry(): object {
      return laborData.find((industry: any) => industry.name === this.industry)
    },
    selectedEducation(): object {
      // return this.selectedIndustry.courses
      return this.selectedIndustry.courses.find(
        (education) => education.name === this.eduLevel
      )
    },
    studentJobRatio(): number {
      const numOfStudents: number = this.selectedEducation[this.year]
        .numOfStudents
      const numOfJobs: number = this.selectedEducation[this.year].numOfJobs
      return this.getRatio(numOfStudents, numOfJobs)
    },
    maleFemaleRatio(): number {
      const numOfMales: number = this.selectedEducation[this.year].maleCount
      const numOfFemales: number = this.selectedEducation[this.year].femaleCount
      return this.getRatio(numOfMales, numOfFemales)
    },
    minWage(): number {
      return this.selectedEducation[this.year].aveMinSalary
    },
    maxWage(): number {
      return this.selectedEducation[this.year].aveMaxSalary
    },
    selectedLocation() {
      const location = this.selectedIndustry.states[this.year]

      const sortable = []
      for (const elem in location) {
        sortable.push([elem, location[elem]])
      }

      return sortable.sort(function (a, b) {
        return b[1] - a[1]
      })
    },
    states(): string[] {
      return this.selectedLocation.map((elem: any) => elem[0])
    },
    statesCount(): string[] {
      return this.selectedLocation.map((elem: any) => elem[1])
    },
    jobstreetLink(): string {
      return this.selectedIndustry.jobstreet
    },
    linkedinLink(): string {
      return this.selectedIndustry.linkedin
    },
    location(): string[] {
      return []
    },
    locationColor(): string[] {
      return []
    },
    chartData(): object {
      return {
        labels: this.states,
        datasets: [
          {
            label: 'number of job openings',
            data: this.statesCount,
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
          },
        ],
      }
    },
  },
  methods: {
    getRatio(studentCount: number, jobCount: number): number {
      if (studentCount !== 0) {
        const num = jobCount / studentCount // ratio calculation
        return +(Math.round(num * 100) / 100) // rounding off to 2 decimal places
      } else {
        return 0
      }
    },
  },
  // validate route name by matching it to valid industry and education level names
  validate({ params }) {
    const url = params.id.split(' x ')
    const industry = url[0]
    const eduLevel = url[1].split(' or ').join('/')
    const education = [
      'No Tertiary Education',
      'Certificate',
      'Pre-University',
      'Diploma/Advanced Diploma',
      'Bachelor/Postgraduate Diploma/Professional',
      'Master',
      'PhD/Doctorate',
    ]
    return industries.includes(industry) && education.includes(eduLevel)
  },
})
</script>

<style scoped></style>
