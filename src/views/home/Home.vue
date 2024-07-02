<template>
  <div class="flex">
    <div
      class="min-h-screen shadow-lg shadow-[#e6ebef]-500/50 duration-300"
      :class="[sideNavCollapse ? 'w-[5%]' : 'w-[15%]']"
    >
      <div class="flex justify-between p-3 items-center">
        <div class="flex items-center">
          <div>
            <img src="/sidenav.png" :class="[sideNavCollapse ? 'hidden' : '']" alt="" />
          </div>
          <div :class="[sideNavCollapse ? 'hidden' : 'text-center px-5']">Grocery Store System</div>
          <div :class="[sideNavCollapse ? 'px-5' : 'hidden']">GSS</div>
        </div>
      </div>
      <div class="">
        <div class="">
          <SideNavItem
            :side-nav-collapse="sideNavCollapse"
            :to="{ name: 'Dashboard' }"
            text="Dashboard"
            mini-icon="fa-solid fa-chart-simple"
          ></SideNavItem>
          <SideNavItem
            :side-nav-collapse="sideNavCollapse"
            :to="{ name: 'Report' }"
            text="Report"
            mini-icon="fa-solid fa-folder-open"
          ></SideNavItem>
          <div>
            <div
              class="flex items-center justify-between cursor-pointer hover:bg-[#cdd1d4]"
              @click="sideNavDropdown('inventory')"
            >
              <div class="flex gap-x-4 px-2 py-4">
                <div>
                  <i class="pl-8 fa-solid fa-warehouse"></i>
                </div>
                <div :class="[sideNavCollapse ? 'hidden' : '']">
                  <span> Inventory </span>
                </div>
              </div>
              <div class="px-4" :class="[sideNavCollapse ? 'hidden' : '']">
                <i
                  :class="[
                    dropdown.inventory ? 'fa-solid fa-angle-down' : 'fa-solid fa-angle-right'
                  ]"
                ></i>
              </div>
            </div>
            <div class="px-5" :class="[dropdown.inventory ? '' : 'hidden']">
              <SideNavItem
                :side-nav-collapse="sideNavCollapse"
                :to="{ name: 'Report' }"
                text="Test1"
                mini-icon="R"
              ></SideNavItem>
              <SideNavItem
                :side-nav-collapse="sideNavCollapse"
                :to="{ name: 'Report' }"
                text="Test2"
                mini-icon="R"
              ></SideNavItem>
            </div>
          </div>
          <div>
            <div
              class="flex items-center justify-between cursor-pointer hover:bg-[#cdd1d4]"
              @click="sideNavDropdown('security')"
            >
              <div class="flex gap-x-4 px-2 py-4">
                <div>
                  <i class="pl-8 fa-solid fa-shield"></i>
                </div>
                <div :class="[sideNavCollapse ? 'hidden' : '']">
                  <span> Security </span>
                </div>
              </div>
              <div class="px-4" :class="[sideNavCollapse ? 'hidden' : '']">
                <i
                  :class="[
                    dropdown.security ? 'fa-solid fa-angle-down' : 'fa-solid fa-angle-right'
                  ]"
                ></i>
              </div>
            </div>
            <div class="px-5" :class="[dropdown.security ? '' : 'hidden']">
              <SideNavItem
                :side-nav-collapse="sideNavCollapse"
                :to="{ name: 'Report' }"
                text="Test3"
                mini-icon="R"
              ></SideNavItem>
              <SideNavItem
                :side-nav-collapse="sideNavCollapse"
                :to="{ name: 'Report' }"
                text="Test4"
                mini-icon="R"
              ></SideNavItem>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="w-screen p-4">
      <div class="flex justify-between">
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
        <div class="flex justify-end items-center">
          <div class="mx-5">
            <span>{{ day }}</span>
            <span>{{ date }}</span>
          </div>
          <button
            data-twe-toggle="tooltip"
            data-twe-placement="bottom"
            data-twe-ripple-init
            data-twe-ripple-color="light"
            title="Change Password"
            class="mx-1"
            @click="
              () => {
                changePasswordDialog = !changePasswordDialog
              }
            "
          >
            <div role="button" class="bg-[#e6ebef] hover:bg-[#dbe1e6] rounded-full">
              <i class="fa-solid fa-lock text-[20px] p-2 hover:text-blue-500"></i>
            </div>
          </button>
          <button
            data-twe-toggle="tooltip"
            data-twe-placement="bottom"
            data-twe-ripple-init
            data-twe-ripple-color="light"
            title="Logout"
            class="mx-1"
            @click="
              () => {
                logoutDialog = !logoutDialog
              }
            "
          >
            <div role="button" class="bg-[#e6ebef] hover:bg-[#dbe1e6] rounded-full">
              <i class="fa-solid fa-right-from-bracket text-[20px] p-2 hover:text-red-500"></i>
            </div>
          </button>
        </div>
      </div>
      <div>
        <RouterView />
      </div>
    </div>
    <Logout :logout-dialog="logoutDialog" @close-dialog="()=>{logoutDialog = !logoutDialog}"></Logout>
    <ChangePassword
      :change-password-dialog="changePasswordDialog"
      @close-dialog="() =>{changePasswordDialog = !changePasswordDialog}"
    ></ChangePassword>
  </div>
</template>
<script>
import dayjs from 'dayjs'
import SideNavItem from './component/SideNav/SideNavItem.vue'
import Logout from './component/LogoutDialog.vue'
import ChangePassword from './component/ChangePasswordDialog.vue'
export default {
  components: {
    SideNavItem,
    Logout,
    ChangePassword
  },
  data() {
    return {
      sideNavCollapse: false,
      day: '',
      date: '',
      dropdown: {
        inventory: false,
        security: false,
        report: false
      },
      logoutDialog: false,
      changePasswordDialog: false
    }
  },
  created() {},
  mounted() {
    this.day = dayjs(new Date()).format('dddd ')
    this.date = dayjs(new Date()).format(' MMMM D, YYYY')
  },
  methods: {
    sideNavDropdown(dropdown) {
      const keys = Object.keys(this.dropdown)
      for (const key of keys) {
        if (dropdown === key) {
          this.dropdown[key] = !this.dropdown[key]
        } else {
          this.dropdown[key] = false
        }
      }
    },
  }
}
</script>
