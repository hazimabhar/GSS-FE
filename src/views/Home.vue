<template>
  <div class="flex">
    <div
      class="min-h-screen bg-[#e6ebef] duration-300"
      :class="[sideNavCollapse ? 'w-[5%]' : 'w-[15%]']"
    >
      <div class="flex justify-between p-3 items-center">
        <div class="flex items-center">
          <div>logo</div>
          <div :class="[sideNavCollapse ? 'hidden' : '']">
            <div>GSS</div>
            <!-- <div>Grocery Store System</div> -->
          </div>
        </div>
        <div
          class="text-right"
          @click="
            () => {
              sideNavCollapse = !sideNavCollapse
            }
          "
        >
          <i
            role="button"
            :class="[sideNavCollapse ? 'fa-solid fa-bars' : 'fa-solid fa-chevron-left']"
          ></i>
        </div>
      </div>
      <div class="">
        <div class="">
          <router-link
            :to="{ name: 'Dashboard' }"
            class="flex items-center gap-x-4 p-2 hover:bg-[#cdd1d4]"
          >
            <i class="pl-9">D</i>
            <router-link :to="{ name: 'Dashboard' }" :class="[sideNavCollapse ? 'hidden' : '']">
              Dashboard
            </router-link>
          </router-link>
          <router-link
            :to="{ name: 'Report' }"
            class="flex items-center gap-x-4 p-2 hover:bg-[#cdd1d4]"
          >
            <i class="pl-9">R</i>
            <router-link :to="{ name: 'Report' }" :class="[sideNavCollapse ? 'hidden' : '']">
              Report
            </router-link>
          </router-link>
        </div>
      </div>
    </div>
    <div>
      <div>This is navbar</div>
      <div>
        <RouterView />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      sideNavCollapse: false
    }
  },
  created() {},
  mounted() {}
}
</script>
