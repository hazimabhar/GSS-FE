<template>
  <div v-if="filterDialog">
    <div class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
      <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div class="flex items-end justify-end p-4 text-center sm:items-end sm:p-0">
          <div
            class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:w-full sm:max-w-lg min-w-max min-h-screen"
          >
            <div class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
              <div class="flex justify-between">
                <div class="flex items-center align-middle">
                  <i class="fa-solid fa-filter text-2xl"></i>
                  <h1 class="px-3 text-xl font-semibold leading-6 text-gray-900" id="modal-title">
                    Filter
                  </h1>
                </div>
                <div>
                  <span @click="closeDialog" role="button" class="hover:text-slate-400 text-2xl">
                    <i class="fa-solid fa-circle-xmark"></i>
                  </span>
                </div>
              </div>
              <div class="px-8">
                <h3 class="text-[#b0b5b9] text-sm font-medium">
                  See result in your view based on the filters you select here.
                </h3>
              </div>
              <div class="py-8 px-11">
                <div class="w-full max-w-sm pb-8">
                  <label class="block mb-2 text-sm font-medium text-slate-600"> Name </label>
                  <input
                    class="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                    placeholder="Product Name"
                  />
                </div>
                <div class="w-full max-w-sm pb-8">
                  <label class="block mb-2 text-sm font-medium text-slate-600"> Created Date </label>

                  <div id="date-range-picker" date-rangepicker class="flex items-center">
                    <div class="relative">
                      <div
                        class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"
                      >
                        <svg
                          class="w-4 h-4 text-gray-500 dark:text-gray-400"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"
                          />
                        </svg>
                      </div>
                      <input
                        id="datepicker-range-start"
                        name="start"
                        type="text"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Select date start"
                      />
                    </div>
                    <span class="mx-4 text-gray-500">to</span>
                    <div class="relative">
                      <div
                        class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"
                      >
                        <svg
                          class="w-4 h-4 text-gray-500 dark:text-gray-400"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"
                          />
                        </svg>
                      </div>
                      <input
                        id="datepicker-range-end"
                        name="end"
                        type="text"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Select date end"
                      />
                    </div>
                  </div>
                </div>
                <div class="w-full max-w-sm pb-8">
                  <label class="block mb-2 text-sm font-medium text-slate-600"> Price </label>
                  <div id="date-range-picker" date-rangepicker class="flex items-center">
                    <div class="relative">
                      <input
                        name="start"
                        type="number"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="From"
                      />
                    </div>
                    <span class="mx-4 text-gray-500">to</span>
                    <div class="relative">
                      <input
                        name="end"
                        type="number"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="To"
                      />
                    </div>
                  </div>
                </div>
                <div class="w-full max-w-sm pb-8">
                  <label class="block mb-2 text-sm font-medium text-slate-600"> Quantity </label>
                  <div id="date-range-picker" date-rangepicker class="flex items-center">
                    <div class="relative">
                      <input
                        name="start"
                        type="number"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="From"
                      />
                    </div>
                    <span class="mx-4 text-gray-500">to</span>
                    <div class="relative">
                      <input
                        name="end"
                        type="number"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="To"
                      />
                    </div>
                  </div>
                </div>
                <!-- <div class="w-full max-w-sm pb-8">
                  <label class="block mb-2 text-sm font-medium text-slate-600"> Total Transaction </label>
                  <div id="date-range-picker" date-rangepicker class="flex items-center">
                    <div class="relative">
                      <input
                        name="start"
                        type="number"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="From"
                      />
                    </div>
                    <span class="mx-4 text-gray-500">to</span>
                    <div class="relative">
                      <input
                        name="end"
                        type="number"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="To"
                      />
                    </div>
                  </div>
                </div> -->
                <label
                  for="posiition"
                  class="block mb-2 text-sm font-medium text-slate-600 dark:text-white"
                  >Category</label
                >
                <select
                  id="position"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option selected>Choose a category</option>
                  <option value="manager">Manager</option>
                  <option value="worker">Worker</option>
                </select>
              </div>

              <div class="flex justify-end py-5">
                <router-link
                  :to="{ name: 'Login' }"
                  role="button"
                  class="bg-blue-500 px-8 py-2 text-white hover:bg-blue-700 rounded-3xl mx-1"
                >
                  <button>FILTER</button>
                </router-link>
                <div
                  role="button"
                  @click="closeDialog"
                  class="bg-red-500 px-5 py-2 text-white hover:bg-red-700 rounded-3xl mx-1"
                >
                  <button>CANCEL</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { initFlowbite } from 'flowbite'

export default {
  data() {
    return {}
  },
  props: {
    filterDialog: {
      type: Boolean,
      default: false,
      required: true
    }
  },
  created() {},
  watch: {},
  mounted() {
    initFlowbite()
  },
  methods: {
    closeDialog() {
      this.$emit('closeDialog')
    }
  }
}
</script>
