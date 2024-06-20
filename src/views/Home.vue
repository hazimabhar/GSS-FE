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
          <SideNavItem
            :side-nav-collapse="sideNavCollapse"
            :to="{ name: 'Dashboard' }"
            text="Dashboard"
            mini-icon="D"
          ></SideNavItem>
          <SideNavItem
            :side-nav-collapse="sideNavCollapse"
            :to="{ name: 'Report' }"
            text="Report"
            mini-icon="R"
          ></SideNavItem>
        </div>
      </div>
    </div>
    <div class="w-screen p-4">
      <div class="flex justify-end items-center">
        <div class="mx-5">
          <span>{{ day }}</span>
          <span>{{ date }}</span>
        </div>
        <router-link
          data-twe-toggle="tooltip"
          data-twe-placement="bottom"
          data-twe-ripple-init
          data-twe-ripple-color="light"
          title="Change Password"
          :to="{ name: 'Login' }"
          class="mx-1"
        >
          <div role="button" class="bg-[#e6ebef] hover:bg-[#dbe1e6] rounded-full">
            <i class="fa-solid fa-lock text-[20px] p-2 hover:text-blue-500"></i>
          </div>
        </router-link>
        <router-link
          data-twe-toggle="tooltip"
          data-twe-placement="bottom"
          data-twe-ripple-init
          data-twe-ripple-color="light"
          title="Logout"
          :to="{ name: 'Login' }"
          class="mx-1"
        >
          <div role="button" class="bg-[#e6ebef] hover:bg-[#dbe1e6] rounded-full">
            <i class="fa-solid fa-right-from-bracket text-[20px] p-2 hover:text-red-500"></i>
          </div>
        </router-link>
      </div>
      <div>
        <RouterView />
      </div>
    </div>
  </div>
</template>
<script>
import dayjs from 'dayjs'
import SideNavItem from '../components/SideNavItem.vue'
export default {
  components: {
    SideNavItem
  },
  data() {
    return {
      sideNavCollapse: false,
      day: '',
      date: ''
    }
  },
  created() {},
  mounted() {
    this.day = dayjs(new Date()).format('dddd ')
    this.date = dayjs(new Date()).format(' MMMM D, YYYY')
  }
}
</script>
