<template>
  <main
    class="flex flex-col max-w-screen-md min-h-screen px-8 text-left md:mx-auto"
  >
    <h1 class="pt-10 pb-3 text-3xl font-extrabold text-center md:text-5xl">
      About
    </h1>

    <h2 class="pb-4 text-xl font-semibold text-gray-800 md:text-2xl">
      <RoughNotation :is-show="true" type="underline" color="blue">
        Introduction
      </RoughNotation>
    </h2>
    <p class="pb-8 text-gray-700 md:text-md">
      <a
        href="https://twitter.com/LaborScale"
        target="_blank"
        rel="noopener noreferrer"
        class="text-indigo-700 underline hover:text-green-700"
      >
        LaborScale</a
      >
      is a web-based application that aims to be a one stop center that provides
      information on the job market based on the user’s qualification from
      universities in Malaysia. This application is targeted to help students
      who just finished their education to choose courses to pursue in tertiary
      education by informing them about the prospective job market for their
      respective education level.
    </p>

    <h2 class="pb-4 text-xl font-semibold text-gray-800 md:text-2xl">
      <RoughNotation :is-show="true" type="underline" color="green">
        Background
      </RoughNotation>
    </h2>
    <p class="pb-8 text-gray-700 md:text-md">
      This project was made by Ikmal Syafiq Bin Mahadi, Khairina Binti Ibrahim
      and Mujahid bin Fakhrul Anuar. The data for the labor demand and student
      supply is based on 2020 data scraped from
      <a
        href="https://www.jobstreet.com.my/"
        target="_blank"
        rel="noopener noreferrer"
        class="text-indigo-700 underline hover:text-green-700"
      >
        JobStreet</a
      >
      from January 2020 to June 2020 & data from
      <a
        href="http://www.data.gov.my/"
        target="_blank"
        rel="noopener noreferrer"
        class="text-indigo-700 underline hover:text-green-700"
      >
        MAMPU's Public Sector Open Data Portal</a
      >
      on student enrollment in Malaysia's public universities in 2018. This
      application is built using Python,
      <a
        href="https://vuejs.org/"
        target="_blank"
        rel="noopener noreferrer"
        class="text-indigo-700 underline hover:text-green-700"
      >
        Vue</a
      >
      and
      <a
        href="https://nuxtjs.org/"
        target="_blank"
        rel="noopener noreferrer"
        class="text-indigo-700 underline hover:text-green-700"
      >
        NuxtJs</a
      >.
    </p>

    <h2 class="pb-4 text-xl font-semibold text-gray-800 md:text-2xl">
      <RoughNotation :is-show="true" type="underline" color="purple">
        Problem Statement
      </RoughNotation>
    </h2>
    <p class="pb-8 text-gray-700 md:text-md">
      What are the courses that the students should take that are in demand in
      the job market and offer the highest salary? What courses are suitable for
      students based on their personality type?
    </p>

    <h2 class="pb-4 text-xl font-semibold text-gray-800 md:text-2xl">
      <RoughNotation :is-show="true" type="underline" color="red">
        Objectives
      </RoughNotation>
    </h2>
    <ol class="pb-8 text-gray-700 list-decimal list-inside md:text-md">
      <li>
        To match students with suitable courses based on personality type
      </li>
      <li>
        To find the student output to job ratio on the user selected course
      </li>
      <li>To find the average wage on the user selected course</li>
      <li>To find male to female ratio on the field in the selected course</li>
      <li>
        To connect the students with resources through LinkedIn in the selected
        course
      </li>
      <li>
        To identify the top five student to job ratio across the industry
      </li>
      <li>To identify the top five industry with the most job opening</li>
      <li>To identify the top five students output for the workforce</li>
    </ol>
  </main>
</template>

<style scoped></style>
