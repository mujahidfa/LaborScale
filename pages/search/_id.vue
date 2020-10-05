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

    <section class="pt-4 pb-2 mb-2">
      <!-- <button
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
      </button> -->
      <h2
        class="pt-4 pb-3 text-2xl font-semibold text-left text-gray-900 md:text-center"
      >
        General info:
      </h2>

      <div class="md:grid md:grid-cols-2">
        <!-- md:max-w-md md:mx-auto  -->
        <div class="md:col-span-1">
          <h2 class="pb-3 text-left text-gray-700 md:text-center">
            Expected students from {{ year }} to current job availability in
            2020:
          </h2>
          <RoughNotation
            :is-show="true"
            type="box"
            :iterations="3"
            color="green"
          >
            <div v-if="studentCount === 0 && jobCount === 0" class="p-4">
              <p class="text-3xl">No jobs found</p>
            </div>
            <div v-else class="p-4">
              <p class="text-3xl">1 graduate : {{ studentJobRatio }} jobs</p>
            </div>
          </RoughNotation>
        </div>

        <!-- <div class="md:flex md:justify-around"> -->
        <div class="md:col-span-1">
          <h2 class="pt-8 pb-3 text-left text-gray-700 md:text-center">
            Male to female students ratio in {{ year }}:
          </h2>
          <RoughNotation :is-show="true" type="box" :iterations="3" color="red">
            <div class="p-4">
              <p
                v-if="maleRatio === 0 && maleFemaleRatio === 0"
                class="text-3xl"
              >
                No students found
              </p>
              <p v-else class="text-3xl">
                {{ maleRatio }} male : {{ maleFemaleRatio }} females
              </p>
            </div>
          </RoughNotation>
        </div>

        <div class="md:col-span-2">
          <h2 class="pt-8 pb-3 text-left text-gray-700 md:text-center">
            Average wage in current job market in 2020:
          </h2>
          <RoughNotation
            :is-show="true"
            type="box"
            :iterations="3"
            color="orange"
          >
            <div v-for="level in salaryByLevel" :key="level.name" class="p-4">
              <p class="text-gray-700">
                {{ level.name }}
              </p>
              <p
                v-if="level.min_salary === 0 && level.max_salary === 0"
                class="text-xl text-gray-600"
              >
                No salaries found
              </p>
              <p v-else class="text-2xl">
                RM{{ level.min_salary }} - RM{{ level.max_salary }}
              </p>
            </div>
          </RoughNotation>
        </div>
        <!-- </div> -->
      </div>
      <h2 class="pt-8 text-sm text-left text-gray-700 md:text-center">
        *The current job market is represented by data scraped from JobStreet
        from January to July 2020.
      </h2>

      <RoughNotation :is-show="none" type="highlight" color="#f7fafc">
        <button
          v-if="isAllDataNotAvailable"
          class="px-12 py-3 pb-3 mt-12 text-indigo-700 transition duration-300 ease-in-out transform bg-indigo-100 rounded-lg shadow-sm sm:px-20 sm:self-center focus:outline-none hover:underline hover:scale-105"
          @click.prevent="$router.push('/')"
        >
          Click here to search again!
        </button>
      </RoughNotation>
    </section>

    <section class="pt-4 pb-10 border-0 border-t-2">
      <h2
        class="pt-4 text-2xl font-semibold text-left text-gray-900 md:text-center"
      >
        Job data:
      </h2>
      <div class="">
        <h2 class="pb-3 text-left text-gray-700 md:text-center">
          Job titles:
        </h2>
        <RoughNotation :is-show="true" type="box" :iterations="3" color="green">
          <div v-if="jobTitles.length === 0" class="p-4">
            <p class="text-2xl text-gray-600">No job titles found</p>
          </div>
          <div v-else class="flex flex-wrap p-4">
            <p
              v-for="(title, index) in jobTitles"
              :key="index"
              class="px-3 mb-2 mr-2 text-gray-800"
            >
              <RoughNotation
                :is-show="true"
                type="highlight"
                :color="getRandomColor()"
              >
                {{ title }}
              </RoughNotation>
            </p>
          </div>
        </RoughNotation>
      </div>
      <div class="mt-4">
        <h2 class="pb-3 text-left text-gray-700 md:text-center">
          Skills needed:
        </h2>
        <RoughNotation
          :is-show="true"
          type="box"
          :iterations="3"
          color="orange"
        >
          <div v-if="skills.length === 0" class="p-4">
            <p class="text-2xl text-gray-600">No skills found</p>
          </div>
          <div v-else class="p-4">
            <p class="mb-2 font-semibold">Soft skills:</p>
            <div v-if="softSkills.length <= 15" class="flex flex-wrap mb-4">
              <p
                v-for="(skill, index) in softSkills"
                :key="index"
                class="px-3 mb-2 mr-2 text-gray-800"
              >
                <RoughNotation
                  :is-show="true"
                  type="highlight"
                  :color="getRandomColor()"
                >
                  {{ skill.name }}
                </RoughNotation>
              </p>
            </div>
            <div v-else>
              <div class="flex flex-wrap mb-4">
                <p
                  v-for="(skill, index) in shortenedSoftSkills"
                  :key="index"
                  class="px-3 mb-2 mr-2 text-gray-800"
                >
                  <RoughNotation
                    :is-show="true"
                    type="highlight"
                    :color="getRandomColor()"
                  >
                    {{ skill.name }}
                  </RoughNotation>
                </p>
              </div>
              <button
                class="inline-block px-3 py-2 font-medium leading-none text-gray-500 bg-indigo-100 rounded-lg hover:text-indigo-600 focus:text-indigo-600 focus:outline-none bg-indigo-50"
                @click="isSeeMoreSoftSkill = !isSeeMoreSoftSkill"
              >
                {{ isSeeMoreSoftSkill === false ? 'See more' : 'See less' }}
              </button>
            </div>

            <p class="mb-2 font-semibold">Hard skills:</p>
            <div v-if="hardSkills.length <= 15" class="flex flex-wrap">
              <p
                v-for="(skill, index) in hardSkills"
                :key="index"
                class="px-3 mb-2 mr-2 text-gray-800"
              >
                <RoughNotation
                  :is-show="true"
                  type="highlight"
                  :color="getRandomColor()"
                >
                  {{ skill.name }}
                </RoughNotation>
              </p>
            </div>
            <div v-else>
              <div class="flex flex-wrap mb-4">
                <p
                  v-for="(skill, index) in shortenedHardSkills"
                  :key="index"
                  class="px-3 mb-2 mr-2 text-gray-800"
                >
                  <RoughNotation
                    :is-show="true"
                    type="highlight"
                    :color="getRandomColor()"
                  >
                    {{ skill.name }}
                  </RoughNotation>
                </p>
              </div>
              <button
                class="inline-block px-3 py-2 font-medium leading-none text-gray-500 bg-indigo-100 rounded-lg hover:text-indigo-600 focus:text-indigo-600 focus:outline-none bg-indigo-50"
                @click="isSeeMoreHardSkill = !isSeeMoreHardSkill"
              >
                {{ isSeeMoreHardSkill === false ? 'See more' : 'See less' }}
              </button>
            </div>
          </div>
        </RoughNotation>
      </div>
    </section>

    <section class="pt-4 pb-10 border-0 border-t-2 border-b-2">
      <!-- <button
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
      </button> -->
      <h2
        class="pt-4 text-2xl font-semibold text-left text-gray-900 md:text-center"
      >
        Location:
      </h2>
      <h3 class="pb-3 text-left text-gray-600 md:text-center">
        Number of job openings in each state in 2020, ordered from highest to
        lowest.
      </h3>
      <bar-chart :chart-data="chartData" :options="chartOptions"></bar-chart>
    </section>

    <section class="flex flex-col pb-10 border-0 border-b-2">
      <h2
        class="flex items-start pt-8 pb-4 text-2xl font-semibold text-gray-900"
      >
        Important links:
      </h2>

      <div
        class="flex flex-col items-center space-y-4 md:flex-row md:space-y-0"
      >
        <a
          :href="jobstreetLink"
          target="_blank"
          rel="noopener noreferrer"
          class="flex flex-col self-center text-indigo-700 underline hover:text-green-700 md:w-1/2"
        >
          Available {{ industry }} jobs on JobStreet:
          <img
            src="@/assets/logos/jobstreet.png"
            alt="JobStreet logo"
            class=""
          />
        </a>
        <a
          :href="linkedinLink"
          target="_blank"
          rel="noopener noreferrer"
          class="flex flex-col items-center self-center text-indigo-700 underline hover:text-green-700 md:w-1/2"
        >
          People in {{ industry }} you can connect with on LinkedIn:
          <img
            src="@/assets/logos/linkedin.png"
            alt="LinkedIn logo"
            class="mt-6"
            width="300"
          />
        </a>
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

<script>
import { industries } from '@/data/industries.ts'
import { laborData } from '@/data/data.js'
// import * as laborData from '@/data/data.json'

export default {
  data() {
    return {
      url: this.$route.params.id.split(' x '),
      is2018: true,
      year: '2018',
      isSeeMoreHardSkill: false,
      isSeeMoreSoftSkill: false,
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
    eduLevel() {
      return this.url[1].split(' or ').join('/')
    },
    industry() {
      return this.url[0]
    },
    selectedIndustry() {
      return laborData.find((industry) => industry.name === this.industry)
    },
    selectedEducation() {
      return this.selectedIndustry.courses.find(
        (education) => education.name === this.eduLevel
      )
    },
    studentCount() {
      return this.selectedEducation[this.year].numOfStudents
    },
    jobCount() {
      return this.selectedEducation[this.year].numOfJobs
    },
    studentJobRatio() {
      return this.getRatio(this.studentCount, this.jobCount)
    },
    maleRatio() {
      const numOfMales = this.selectedEducation[this.year].maleCount
      const numOfFemales = this.selectedEducation[this.year].femaleCount

      if (numOfMales === 0 && numOfFemales === 0) {
        return 0
      } else {
        return 1
      }
    },
    maleFemaleRatio() {
      const numOfMales = this.selectedEducation[this.year].maleCount
      const numOfFemales = this.selectedEducation[this.year].femaleCount
      return this.getRatio(numOfMales, numOfFemales)
    },
    salaryByLevel() {
      return this.selectedEducation[this.year].salaryByLevel
    },
    minWage() {
      return this.selectedEducation[this.year].aveMinSalary
    },
    maxWage() {
      return this.selectedEducation[this.year].aveMaxSalary
    },
    jobTitles() {
      return this.selectedIndustry.titles
    },
    skills() {
      return this.selectedIndustry.skills
    },
    hardSkills() {
      return this.selectedIndustry.skills.filter(
        (skill) => skill.type === 'Hard Skill'
      )
    },
    softSkills() {
      return this.selectedIndustry.skills.filter(
        (skill) => skill.type === 'Soft Skill'
      )
    },
    shortenedHardSkills() {
      if (this.isSeeMoreHardSkill === false) {
        return this.hardSkills.slice(0, 15)
      } else {
        return this.hardSkills
      }
    },
    shortenedSoftSkills() {
      if (this.isSeeMoreSoftSkill === false) {
        return this.softSkills.slice(0, 15)
      } else {
        return this.softSkills
      }
    },
    selectedLocation() {
      const location = this.selectedEducation[this.year].states // this.selectedIndustry.states[this.year]

      const sortable = []
      for (const elem in location) {
        sortable.push([elem, location[elem]])
      }

      return sortable.sort(function (a, b) {
        return b[1] - a[1]
      })
    },
    states() {
      return this.selectedLocation.map((elem) => elem[0])
    },
    statesCount() {
      return this.selectedLocation.map((elem) => elem[1])
    },
    jobstreetLink() {
      return this.selectedIndustry.jobstreet
    },
    linkedinLink() {
      return this.selectedIndustry.linkedin
    },
    isAllDataNotAvailable() {
      return (
        this.studentCount === 0 &&
        this.jobCount === 0 &&
        this.maleRatio === 0 &&
        this.maleFemaleRatio === 0 &&
        this.minWage === 0 &&
        this.maxWage === 0
      )
    },
    location() {
      return []
    },
    locationColor() {
      return []
    },
    chartData() {
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
    getRatio(studentCount, jobCount) {
      if (studentCount !== 0) {
        const num = jobCount / studentCount // ratio calculation
        return +(Math.round(num * 100) / 100) // rounding off to 2 decimal places
      } else {
        return jobCount
      }
    },
    getRandomColor() {
      // const colors = [
      //   '#e6fffa',
      //   '#f0fff4',
      //   '#fffff0',
      //   '#fff5f5',
      //   '#fffaf0',
      //   '#ebf8ff',
      //   '#ebf4ff',
      //   '#faf5ff',
      //   '#fff5f7',
      // ]
      const colors = [
        '#fed7d7',
        '#feebc8',
        '#fefcbf',
        '#c6f6d5',
        '#b2f5ea',
        '#bee3f8',
        '#c3dafe',
        '#e9d8fd',
        '#fed7e2',
      ]
      return colors[Math.floor(Math.random() * colors.length)]
    },
  },
  // validate route name by matching it to valid industry and education level names
  validate({ params }) {
    const url = params.id.split(' x ')
    const industry = url[0]
    const eduLevel = url[1].split(' or ').join('/')
    const education = [
      'No Tertiary Education',
      'Professional Certificate',
      'Pre-University',
      'Diploma/Advanced/Higher/Graduate Diploma',
      'Bachelor/Postgraduate Diploma/Professional Degree',
      'Master',
      'PhD/Doctorate',
    ]
    return industries.includes(industry) && education.includes(eduLevel)
  },
}
</script>

<style scoped></style>
