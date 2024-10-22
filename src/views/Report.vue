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
