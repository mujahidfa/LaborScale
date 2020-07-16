<template>
  <transition name="modal">
    <div
      class="fixed top-0 left-0 z-50 table w-full h-full transition-opacity duration-700 ease-in-out modal-mask"
    >
      <div class="table-cell align-middle">
        <div
          class="w-10/12 h-auto max-w-screen-lg p-3 mx-auto overflow-y-scroll transition-all duration-300 ease-in-out bg-white rounded-lg sm:w-3/5 sm:p-3 lg:w-1/2 md:w-8/15 modal-container"
        >
          <h1
            class="pb-1 mb-2 font-sans text-base border-b border-blue-500 sm:text-2xl sm:mb-4 sm:pb-3"
          >
            Hey there! Before we go in,
            <p class="font-extrabold text-blue-900">
              please read through our disclaimer:
            </p>
          </h1>
          <section class="text-left">
            <p class="p-2 mb-2 text-sm bg-gray-200 rounded-lg sm:text-base">
              This website is for a competition and is
              <span class="font-bold text-red-600">
                not ready for real world use</span
              >. The data we used is
              <span class="font-bold text-red-600">
                less accurate and not reflective
              </span>
              of the current job market in Malaysia. We are actively working on
              getting access to more accurate data. We appreciate your support!
            </p>
          </section>

          <div class="flex flex-col">
            <button
              class="self-center w-full py-2 text-sm font-semibold text-white bg-blue-600 rounded-lg shadow-xl sm:text-base sm:py-3 hover:bg-blue-900"
              @click="dismissDisclaimer"
            >
              I understand. Continue to the website!
            </button>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  methods: {
    dismissDisclaimer() {
      localStorage.isModalVisible = false
      this.$emit('close')
      // eslint-disable-next-line no-console
      console.log('in dismissDisclaimer')
    },
  },
}
</script>

<style scoped>
.modal-mask {
  background-color: rgba(0, 0, 0, 0.5);
}

/* xxs to xs sized screens */
/* .modal-container {
  height: auto;
  height: calc(120vh - 130px);
} */

/* xs to md sized screens */
/* @screen sm {
  .modal-container {
    height: auto;
    height: calc(120vh - 130px);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  }
} */

/* @screen md {
  .modal-container {
    height: auto;
    height: calc(100vh - 130px);
  }
} */

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */
.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
