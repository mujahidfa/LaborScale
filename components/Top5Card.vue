<template>
  <div class="overflow-hidden bg-white rounded-lg shadow-md">
    <div class="px-4 py-5 border-b border-gray-200 sm:px-6">
      <h3 class="text-lg font-semibold leading-6 text-gray-900 md:text-xl">
        <slot name="title"></slot>
      </h3>
      <p class="max-w-2xl mt-1 text-sm leading-5 text-gray-600">
        <slot name="heading"></slot>
      </p>
    </div>
    <div>
      <dl>
        <div class="px-4 py-5 bg-white">
          <dd class="mt-1 text-sm leading-5 text-gray-900">
            <!-- if salary data is passed -->
            <ul v-if="isObject === true">
              <li
                v-for="(item, key, index) in salaries"
                :key="index"
                class="flex items-center justify-between py-3 pl-3 pr-4 text-sm leading-5"
                :class="{
                  'border-t border-gray-300': index !== 0,
                }"
              >
                <div class="flex items-center flex-1 w-0">
                  <p>{{ index + 1 }}.</p>
                  <span
                    class="flex-1 w-0 ml-2"
                    :class="{
                      'font-bold': index === 0,
                    }"
                  >
                    <RoughNotation
                      :is-show="index === 0"
                      type="highlight"
                      color="#fff176"
                    >
                      {{ key }}
                    </RoughNotation>
                  </span>
                </div>
                <div class="flex-shrink-0 ml-4">
                  <p
                    class="font-medium text-indigo-600 transition duration-150 ease-in-out hover:text-indigo-500"
                  >
                    ±RM{{ item }}
                  </p>
                </div>
              </li>
            </ul>
            <!-- if other data is passed -->
            <ul v-else>
              <li
                v-for="(item, index) in industry"
                :key="index"
                class="flex items-center justify-between py-3 pl-3 pr-4 text-sm leading-5"
                :class="{
                  'border-t border-gray-300': index !== 0,
                }"
              >
                <div class="flex items-center flex-1 w-0">
                  <p>{{ index + 1 }}.</p>
                  <span
                    class="flex-1 w-0 ml-2 truncate"
                    :class="{
                      'font-bold': index === 0,
                    }"
                  >
                    <RoughNotation
                      :is-show="index === 0"
                      type="highlight"
                      color="#fff176"
                    >
                      {{ item }}
                    </RoughNotation>
                  </span>
                </div>
              </li>
            </ul>
          </dd>
        </div>
      </dl>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    industry: {
      type: Array,
      required: false,
      default() {
        return []
      },
    },
    isObject: {
      type: Boolean,
      required: false,
      default: false,
    },
    salaries: {
      type: Object,
      required: false,
      default() {
        return {}
      },
    },
  },
})
</script>

<style scoped></style>
