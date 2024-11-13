<template>
  <div class="flex">
    <form class="max-w-sm mx-auto">
      <label for="years" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >Select an option</label
      >
      <select
        multiple
        id="years"
        size="10"
        v-model="selectedUnassigned"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        <option v-for="right in unassignedRights" :key="right" :value="right">
          {{ right }}
        </option>
      </select>
    </form>

    <div class="flex flex-col justify-center">
      <button
        @click="moveSelectedToAssigned"
        class="px-4 py-2 rounded-lg mx-1 outline outline-1 flex outline-[#b0b5b9] hover:outline-[#70b4dd] hover:outline-2 justify-center my-2"
      >
        Select<i class="fa-solid fa-caret-right pl-1 py-1"></i>
      </button>
      <button
        @click="moveAllToAssigned"
        class="px-4 py-2 rounded-lg mx-1 outline outline-1 flex outline-[#b0b5b9] hover:outline-[#70b4dd] hover:outline-2 justify-center my-2"
      >
        Select All <i class="fa-solid fa-caret-right pl-1 py-1"></i
        ><i class="fa-solid fa-caret-right py-1"></i>
      </button>
      <button
        @click="moveSelectedToUnassigned"
        class="px-4 py-2 rounded-lg mx-1 outline outline-1 flex outline-[#b0b5b9] hover:outline-[#70b4dd] hover:outline-2 justify-center my-2"
      >
        <i class="fa-solid fa-caret-left pr-1 py-1"></i> Remove
      </button>
      <button
        @click="moveAllToUnassigned"
        class="px-4 py-2 rounded-lg mx-1 outline outline-1 flex outline-[#b0b5b9] hover:outline-[#70b4dd] hover:outline-2 justify-center my-2"
      >
        <i class="fa-solid fa-caret-left py-1"></i><i class="fa-solid fa-caret-left pr-1 py-1"></i> Remove All
      </button>
    </div>

    <form class="max-w-sm mx-auto">
      <label for="years" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >Select an option</label
      >
      <select
        multiple
        id="years"
        size="10"
        v-model="selectedAssigned"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        <option v-for="right in assignedRights" :key="right" :value="right">
          {{ right }}
        </option>
      </select>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      unassignedRights: ['2001', '2002', '2003', '2004', '2005'],
      assignedRights: [],
      selectedUnassigned: [],
      selectedAssigned: []
    }
  },
  methods: {
    // Move selected rights to the assigned list
    moveSelectedToAssigned() {
      this.assignedRights.push(...this.selectedUnassigned)
      this.unassignedRights = this.unassignedRights.filter(
        (right) => !this.selectedUnassigned.includes(right)
      )
      this.selectedUnassigned = []
    },
    // Move all rights to the assigned list
    moveAllToAssigned() {
      this.assignedRights.push(...this.unassignedRights)
      this.unassignedRights = []
      this.selectedUnassigned = []
    },
    // Move selected rights back to the unassigned list
    moveSelectedToUnassigned() {
      this.unassignedRights.push(...this.selectedAssigned)
      this.assignedRights = this.assignedRights.filter(
        (right) => !this.selectedAssigned.includes(right)
      )
      this.selectedAssigned = []
    },
    // Move all rights back to the unassigned list
    moveAllToUnassigned() {
      this.unassignedRights.push(...this.assignedRights)
      this.assignedRights = []
      this.selectedAssigned = []
    }
  }
}
</script>

<style>
.container {
  display: flex;
  gap: 20px;
}
.box {
  width: 200px;
  height: 300px;
  border: 1px solid #333;
  padding: 10px;
  overflow-y: auto;
}
.buttons {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>
