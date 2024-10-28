<template>
  <div class="mx-10">
    <div class="mb-10">
      <h1 class="text-4xl font-semibold">Sales Report</h1>
    </div>
    <div class="flex justify-start pt-5">
      <div
        @click="onTabClick('dailyTab')"
        class="px-8 py-2 cursor-pointer hover:bg-[#ebeced] rounded-t-xl"
        :class="tabs.dailyTab ? 'border-b-4 flex border-[#70b4dd] text-[#70b4dd]' : 'border-0'"
      >
        Daily
      </div>
      <div
        @click="onTabClick('weeklyTab')"
        class="px-8 py-2 cursor-pointer hover:bg-[#ebeced] rounded-t-xl"
        :class="tabs.weeklyTab ? 'border-b-4 flex border-[#70b4dd] text-[#70b4dd]' : 'border-0'"
      >
        Weekly
      </div>
      <div
        @click="onTabClick('monthlyTab')"
        class="px-8 py-2 cursor-pointer hover:bg-[#ebeced] rounded-t-xl"
        :class="tabs.monthlyTab ? 'border-b-4 flex border-[#70b4dd] text-[#70b4dd]' : 'border-0'"
      >
        Monthly
      </div>
      <div
        @click="onTabClick('yearlyTab')"
        class="px-8 py-2 cursor-pointer hover:bg-[#ebeced] rounded-t-xl"
        :class="tabs.yearlyTab ? 'border-b-4 flex border-[#70b4dd] text-[#70b4dd]' : 'border-0'"
      >
        Yearly
      </div>
    </div>
    <div class="flex justify-end pt-5">
      <button
        class="px-4 py-2 rounded-lg mx-1 outline outline-1 flex outline-[#b0b5b9] hover:outline-[#70b4dd] hover:outline-2"
      >
        <div><i class="fa-solid fa-arrow-up-z-a text-sm"></i></div>
        <div class="px-2 text-[15px]">Sort by</div>
      </button>
      <button
        class="px-5 py-2 rounded-lg mx-1 outline outline-1 flex outline-[#b0b5b9] hover:outline-[#70b4dd] hover:outline-2"
      >
        <div>
          <i class="fa-solid fa-filter text-sm"></i>
        </div>
        <div class="px-2 text-[15px]">Filter</div>
      </button>
    </div>
    <div class="my-5">
      <div class="relative flex flex-col w-full h-full text-gray-700 bg-white overflow-scroll">
        <div>
          <table class="w-full text-left table-auto min-w-max border-x border-blue-gray-100">
            <thead>
              <tr class="">
                <th class="p-4 border-y border-blue-gray-100 bg-blue-gray-50/50">
                  <p
                    class="font-semibold block font-sans text-sm antialiased leading-none text-blue-gray-900 opacity-70"
                  >
                    Report Title
                  </p>
                </th>
                <th class="p-4 border-y border-blue-gray-100 bg-blue-gray-50/50">
                  <p
                    class="block font-sans text-sm antialiased font-bold leading-none text-blue-gray-900 opacity-70"
                  >
                    Date
                  </p>
                </th>
                <th class="p-4 border-y border-blue-gray-100 bg-blue-gray-50/50">
                  <p
                    class="block font-sans text-sm antialiased font-bold leading-none text-blue-gray-900 opacity-70"
                  >
                    Offline Transaction
                  </p>
                </th>
                <th class="p-4 border-y border-blue-gray-100 bg-blue-gray-50/50">
                  <p
                    class="block font-sans text-sm antialiased font-bold leading-none text-blue-gray-900 opacity-70"
                  >
                    Online Transaction
                  </p>
                </th>
                <th class="p-4 border-y border-blue-gray-100 bg-blue-gray-50/50">
                  <p
                    class="block font-sans text-sm antialiased font-bold leading-none text-blue-gray-900 opacity-70"
                  >
                    Total
                  </p>
                </th>
                <th class="p-4 border-y border-blue-gray-100 bg-blue-gray-50/50">
                  <p
                    class="block font-sans text-sm antialiased font-bold leading-none text-blue-gray-900 opacity-70"
                  >
                    Closed By
                  </p>
                </th>
                <th class="p-4 border-y border-blue-gray-100 bg-blue-gray-50/50">
                  <p
                    class="block font-sans text-sm antialiased font-bold leading-none text-blue-gray-900 opacity-70"
                  >
                    Action
                  </p>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="p-4 border-b border-blue-gray-50">
                  <div class="flex items-center gap-3">
                    <img
                      src="/report.svg"
                      alt="report"
                      class="relative inline-block h-12 w-12 !rounded-xl border border-blue-gray-50 bg-blue-gray-50/50 object-contain object-center p-1"
                    />
                    <p
                      class="block font-sans text-sm antialiased font-bold leading-normal text-blue-gray-900"
                    >
                      Daily-26-October-2024
                    </p>
                  </div>
                </td>
                <td class="p-4 border-b border-blue-gray-50">
                  <p
                    class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900"
                  >
                    26-Oct-2024
                  </p>
                </td>
                <td class="p-4 border-b border-blue-gray-50">
                  <p
                    class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900"
                  >
                    MYR 100.00
                  </p>
                </td>
                <td class="p-4 border-b border-blue-gray-50">
                  <p
                    class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900"
                  >
                    MYR 100.00
                  </p>
                </td>
                <td class="p-4 border-b border-blue-gray-50">
                  <p
                    class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900"
                  >
                    MYR 200.00
                  </p>
                </td>
                <td class="p-4 border-b border-blue-gray-50">
                  <div class="flex items-center gap-3">
                    <div>
                      <img
                        src="/worker.svg"
                        alt="worker"
                        class="relative inline-block h-12 w-12 !rounded-full border border-blue-gray-50 bg-blue-gray-50/50 object-contain object-center p-1"
                      />
                    </div>
                    <div class="flex flex-col">
                      <p
                        class="block font-sans text-sm antialiased font-normal leading-normal capitalize text-blue-gray-900"
                      >
                        Hazim Abhar
                      </p>
                      <p
                        class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900 opacity-70"
                      >
                        Worker
                      </p>
                    </div>
                  </div>
                </td>
                <td class="p-4 border-b border-blue-gray-50">
                  <button
                    class="relative h-10 max-h-[40px] w-10 max-w-[40px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-gray-900 transition-all hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="button"
                  >
                    <span
                      class="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 384 512"
                        fill="currentColor"
                        aria-hidden="true"
                        class="w-6 h-6"
                      >
                        <path
                          d="M64 0C28.7 0 0 28.7 0 64L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-288-128 0c-17.7 0-32-14.3-32-32L224 0 64 0zM256 0l0 128 128 0L256 0zM216 232l0 102.1 31-31c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-72 72c-9.4 9.4-24.6 9.4-33.9 0l-72-72c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l31 31L168 232c0-13.3 10.7-24 24-24s24 10.7 24 24z"
                        />
                      </svg>
                    </span>
                  </button>
                </td>
              </tr>
              <tr>
                <td class="p-4 border-b border-blue-gray-50">
                  <div class="flex items-center gap-3">
                    <img
                      src="/report.svg"
                      alt="report"
                      class="relative inline-block h-12 w-12 !rounded-xl border border-blue-gray-50 bg-blue-gray-50/50 object-contain object-center p-1"
                    />
                    <p
                      class="block font-sans text-sm antialiased font-bold leading-normal text-blue-gray-900"
                    >
                      Daily-27-October-2024
                    </p>
                  </div>
                </td>
                <td class="p-4 border-b border-blue-gray-50">
                  <p
                    class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900"
                  >
                    27-Oct-2024
                  </p>
                </td>
                <td class="p-4 border-b border-blue-gray-50">
                  <p
                    class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900"
                  >
                    MYR 100.00
                  </p>
                </td>
                <td class="p-4 border-b border-blue-gray-50">
                  <p
                    class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900"
                  >
                    MYR 100.00
                  </p>
                </td>
                <td class="p-4 border-b border-blue-gray-50">
                  <p
                    class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900"
                  >
                    MYR 200.00
                  </p>
                </td>
                <td class="p-4 border-b border-blue-gray-50">
                  <div class="flex items-center gap-3">
                    <div>
                      <img
                        src="/boss.svg"
                        alt="boss"
                        class="relative inline-block h-12 w-12 !rounded-full border border-blue-gray-50 bg-blue-gray-50/50 object-contain object-center p-1"
                      />
                    </div>
                    <div class="flex flex-col">
                      <p
                        class="block font-sans text-sm antialiased font-normal leading-normal capitalize text-blue-gray-900"
                      >
                        Hazim Abhar
                      </p>
                      <p
                        class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900 opacity-70"
                      >
                        Manager
                      </p>
                    </div>
                  </div>
                </td>
                <td class="p-4 border-b border-blue-gray-50">
                  <button
                    class="relative h-10 max-h-[40px] w-10 max-w-[40px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-gray-900 transition-all hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="button"
                  >
                    <span
                      class="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 384 512"
                        fill="currentColor"
                        aria-hidden="true"
                        class="w-6 h-6"
                      >
                        <path
                          d="M64 0C28.7 0 0 28.7 0 64L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-288-128 0c-17.7 0-32-14.3-32-32L224 0 64 0zM256 0l0 128 128 0L256 0zM216 232l0 102.1 31-31c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-72 72c-9.4 9.4-24.6 9.4-33.9 0l-72-72c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l31 31L168 232c0-13.3 10.7-24 24-24s24 10.7 24 24z"
                        />
                      </svg>
                    </span>
                  </button>
                </td>
              </tr>
              <tr>
                <td class="p-4 border-b border-blue-gray-50">
                  <div class="flex items-center gap-3">
                    <img
                      src="/report.svg"
                      alt="report"
                      class="relative inline-block h-12 w-12 !rounded-xl border border-blue-gray-50 bg-blue-gray-50/50 object-contain object-center p-1"
                    />
                    <p
                      class="block font-sans text-sm antialiased font-bold leading-normal text-blue-gray-900"
                    >
                      Daily-28-October-2024
                    </p>
                  </div>
                </td>
                <td class="p-4 border-b border-blue-gray-50">
                  <p
                    class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900"
                  >
                    28-Oct-2024
                  </p>
                </td>
                <td class="p-4 border-b border-blue-gray-50">
                  <p
                    class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900"
                  >
                    MYR 100.00
                  </p>
                </td>
                <td class="p-4 border-b border-blue-gray-50">
                  <p
                    class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900"
                  >
                    MYR 100.00
                  </p>
                </td>
                <td class="p-4 border-b border-blue-gray-50">
                  <p
                    class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900"
                  >
                    MYR 200.00
                  </p>
                </td>
                <td class="p-4 border-b border-blue-gray-50">
                  <div class="flex items-center gap-3">
                    <div>
                      <img
                        src="/worker.svg"
                        alt="worker"
                        class="relative inline-block h-12 w-12 !rounded-full border border-blue-gray-50 bg-blue-gray-50/50 object-contain object-center p-1"
                      />
                    </div>
                    <div class="flex flex-col">
                      <p
                        class="block font-sans text-sm antialiased font-normal leading-normal capitalize text-blue-gray-900"
                      >
                        Hazim Abhar
                      </p>
                      <p
                        class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900 opacity-70"
                      >
                        Worker
                      </p>
                    </div>
                  </div>
                </td>
                <td class="p-4 border-b border-blue-gray-50">
                  <button
                    class="relative h-10 max-h-[40px] w-10 max-w-[40px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-gray-900 transition-all hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="button"
                  >
                    <span
                      class="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 384 512"
                        fill="currentColor"
                        aria-hidden="true"
                        class="w-6 h-6"
                      >
                        <path
                          d="M64 0C28.7 0 0 28.7 0 64L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-288-128 0c-17.7 0-32-14.3-32-32L224 0 64 0zM256 0l0 128 128 0L256 0zM216 232l0 102.1 31-31c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-72 72c-9.4 9.4-24.6 9.4-33.9 0l-72-72c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l31 31L168 232c0-13.3 10.7-24 24-24s24 10.7 24 24z"
                        />
                      </svg>
                    </span>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="flex items-center justify-between p-4 border-b border-x border-blue-gray-100">
          <button
            class="select-none rounded-lg border border-gray-900 py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-gray-900 transition-all hover:border-[#70b4dd] hover:text-[#70b4dd] focus:ring focus:ring-gray-300 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
          >
            Previous
          </button>
          <div class="flex items-center gap-2">
            <button
              class="relative h-8 max-h-[32px] w-8 max-w-[32px] select-none rounded-lg border border-gray-900 text-center align-middle font-sans text-xs font-medium uppercase text-gray-900 transition-all hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
            >
              <span class="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                1
              </span>
            </button>
            <button
              class="relative h-8 max-h-[32px] w-8 max-w-[32px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-gray-900 transition-all hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
            >
              <span class="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                2
              </span>
            </button>
            <button
              class="relative h-8 max-h-[32px] w-8 max-w-[32px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-gray-900 transition-all hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
            >
              <span class="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                3
              </span>
            </button>
            <button
              class="relative h-8 max-h-[32px] w-8 max-w-[32px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-gray-900 transition-all hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
            >
              <span class="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                ...
              </span>
            </button>
            <button
              class="relative h-8 max-h-[32px] w-8 max-w-[32px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-gray-900 transition-all hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
            >
              <span class="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                8
              </span>
            </button>
            <button
              class="relative h-8 max-h-[32px] w-8 max-w-[32px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-gray-900 transition-all hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
            >
              <span class="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                9
              </span>
            </button>
            <button
              class="relative h-8 max-h-[32px] w-8 max-w-[32px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-gray-900 transition-all hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
            >
              <span class="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                10
              </span>
            </button>
          </div>
          <button
            class="select-none rounded-lg border border-gray-900 py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-gray-900 transition-all hover:border-[#70b4dd] hover:text-[#70b4dd]   focus:ring focus:ring-gray-300 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tabs: {
        dailyTab: true,
        weeklyTab: false,
        monthlyTab: false,
        yearlyTab: false
      }
    }
  },
  created() {},
  mounted() {},
  methods: {
    onTabClick(tab) {
      const keys = Object.keys(this.tabs)
      for (let key of keys) {
        if (tab === key) {
          this.tabs[key] = true
        } else {
          this.tabs[key] = false
        }
      }
    }
  }
}
</script>
