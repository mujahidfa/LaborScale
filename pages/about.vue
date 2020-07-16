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
      This project is conducted for the
      <a
        href="https://www.ilmia.gov.my/lmiopendatachallenge/"
        target="_blank"
        rel="noopener noreferrer"
        class="text-indigo-700 underline hover:text-green-700"
      >
        Labour Market Information (LMI) Open Data Challenge</a
      >
      by <span class="font-semibold">Groupaq Weebs</span>. Groupaq Weebs team
      members are Ikmal Syafiq Bin Mahadi, Khairina Binti Ibrahim and Mujahid
      bin Fakhrul Anuar.
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
      This application is build based on the data provided by ILMIA for the
      <a
        href="https://www.ilmia.gov.my/lmiopendatachallenge/"
        target="_blank"
        rel="noopener noreferrer"
        class="text-indigo-700 underline hover:text-green-700"
      >
        Labour Market Information (LMI) Open Data Challenge</a
      >
      specifically on the job vacancy and student university output. This
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
      the job market and offer the highest salary?
    </p>

    <h2 class="pb-4 text-xl font-semibold text-gray-800 md:text-2xl">
      <RoughNotation :is-show="true" type="underline" color="red">
        Objectives
      </RoughNotation>
    </h2>
    <ol class="pb-8 text-gray-700 list-decimal list-inside md:text-md">
      <li>
        To find the student output to job ratio on the user selected course
      </li>
      <li>To find the average wage on the user selected course</li>
      <li>To find male to female ratio on the field in the selected course</li>
      <li>
        To connect the students with resources through Linked In in the selected
        course
      </li>
      <li>
        To identify the top five student to job ration across the industry
      </li>
      <li>To identify the top five industry with the most job opening</li>
      <li>To identify the top five students output for the workforce</li>
    </ol>
  </main>
</template>

<style scoped></style>
