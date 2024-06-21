<template>
  <div v-if="logoutDialog">
    <div class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
      <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div
          class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0"
        >
          <div
            class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg"
          >
            <div class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
              <div class="flex justify-between">
                <div class="flex items-center align-middle">
                  <i class="fa-solid fa-circle-info text-red-500 text-2xl"></i>
                  <h1 class="px-5 text-lg font-semibold leading-6 text-gray-900" id="modal-title">
                    Log Out Confirmation
                  </h1>
                </div>
                <div>
                  <span @click="closeDialog" role="button" class="hover:text-slate-400 text-xl">
                    <i class="fa-solid fa-circle-xmark"></i>
                  </span>
                </div>
              </div>
              <div class="p-10">
                <h3 class="text-yellow-500">Are you sure you want to log out?</h3>
              </div>
              <div class="flex justify-end">
                <router-link
                  :to="{ name: 'Login' }"
                  role="button"
                  class="bg-blue-500 px-5 py-2 text-white hover:bg-blue-800 rounded-3xl mx-1"
                >
                  <button>CONFIRM</button>
                </router-link>
                <div
                  role="button"
                  @click="closeDialog"
                  class="bg-red-500 px-5 py-2 text-white hover:bg-red-800 rounded-3xl mx-1"
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
export default {
  data() {
    return {}
  },
  props: {
    logoutDialog: {
      type: Boolean,
      default: false,
      required: true
    }
  },
  created() {},
  watch: {},
  methods: {
    closeDialog() {
      this.$emit('closeDialog')
    }
  }
}
</script>
