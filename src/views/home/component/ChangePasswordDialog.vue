<template>
  <div v-if="changePasswordDialog">
    <div class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
      <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div
          class="flex min-h-[70%] items-end justify-center p-4 text-center sm:items-center sm:p-0"
        >
          <div
            class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg"
          >
            <div class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
              <div class="flex justify-between pb-10">
                <div class="flex items-center align-middle">
                  <i class="fa-solid fa-circle-info text-red-500 text-2xl"></i>
                  <h1 class="px-5 text-lg font-semibold leading-6 text-gray-900" id="modal-title">
                    Change Password
                  </h1>
                </div>
                <div>
                  <span @click="closeDialog" role="button" class="hover:text-slate-400 text-xl">
                    <i class="fa-solid fa-circle-xmark"></i>
                  </span>
                </div>
              </div>
              <form class="rounded px-6 pt-3 pb-4" @submit.prevent="onSubmit">
                <div class="py-2">
                  <div class="relative w-full min-w-[200px] h-11">
                    <div
                      class="absolute grid w-5 h-5 place-items-center top-2/4 right-3 -translate-y-2/4 z-50"
                    >
                      <button
                        type="button"
                        class="absolute rounded-e-md text-slate-400"
                        @click="
                          () => {
                            togglePassword = !togglePassword
                          }
                        "
                      >
                        <i
                          :class="togglePassword ? 'fa-solid fa-eye' : 'fa-solid fa-eye-slash'"
                          aria-hidden="true"
                        ></i>
                      </button>
                    </div>
                    <input
                      class="w-full h-full px-3 py-3 font-sans text-sm font-normal transition-all bg-transparent border rounded-md peer outline outline-0 focus:outline-0 disabled:bg-[#c5c5c9] disabled:border-0 placeholder-shown:border focus:border-2 border-t-transparent focus:border-t-transparent"
                      :class="
                        currentPasswordError
                          ? 'text-[#ff6f6f] placeholder-shown:border-[#ff6f6f] placeholder-shown:border-t-[#ff6f6f] focus:border-[#ff6f6f] border-[#ff6f6f]'
                          : 'text-black placeholder-shown:border-[#c5c5c9] placeholder-shown:border-t-[#c5c5c9] focus:border-[#70b4dd] border-[#c5c5c9]'
                      "
                      :type="togglePassword ? 'text' : 'password'"
                      placeholder=" "
                      v-model="form.currentPassword"
                    />
                    <label
                      class="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-[#c5c5c9] transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[4.1]"
                      :class="
                        currentPasswordError
                          ? 'peer-placeholder-shown:text-[#ff6f6f] text-[#ff6f6f] peer-focus:text-[#ff6f6f] before:border-[#ff6f6f] peer-focus:before:!border-[#ff6f6f] after:border-[#ff6f6f] peer-focus:after:!border-[#ff6f6f]'
                          : 'peer-placeholder-shown:text-[#c5c5c9] text-[#c5c5c9] peer-focus:text-[#70b4dd] before:border-[#c5c5c9] peer-focus:before:!border-[#70b4dd] after:border-[#c5c5c9] peer-focus:after:!border-[#70b4dd]'
                      "
                      >Current Password
                    </label>
                  </div>
                  <p :class="currentPasswordError ? 'text-red-500 text-xs italic pt-2' : 'hidden'">
                    Please insert a password.
                  </p>
                </div>
                <div class="py-2">
                  <div class="relative w-full min-w-[200px] h-11">
                    <div
                      class="absolute grid w-5 h-5 place-items-center top-2/4 right-3 -translate-y-2/4 z-50"
                    >
                      <button
                        type="button"
                        class="absolute rounded-e-md text-slate-400"
                        @click="
                          () => {
                            toggleNewPassword = !toggleNewPassword
                          }
                        "
                      >
                        <i
                          :class="toggleNewPassword ? 'fa-solid fa-eye' : 'fa-solid fa-eye-slash'"
                          aria-hidden="true"
                        ></i>
                      </button>
                    </div>
                    <input
                      class="w-full h-full px-3 py-3 font-sans text-sm font-normal transition-all bg-transparent border rounded-md peer outline outline-0 focus:outline-0 disabled:bg-[#c5c5c9] disabled:border-0 placeholder-shown:border focus:border-2 border-t-transparent focus:border-t-transparent"
                      :class="
                        newPasswordError
                          ? 'text-[#ff6f6f] placeholder-shown:border-[#ff6f6f] placeholder-shown:border-t-[#ff6f6f] focus:border-[#ff6f6f] border-[#ff6f6f]'
                          : 'text-black placeholder-shown:border-[#c5c5c9] placeholder-shown:border-t-[#c5c5c9] focus:border-[#70b4dd] border-[#c5c5c9]'
                      "
                      :type="toggleNewPassword ? 'text' : 'password'"
                      placeholder=" "
                      v-model="form.newPassword"
                    /><label
                      class="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-[#c5c5c9] transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[4.1]"
                      :class="
                        newPasswordError
                          ? 'peer-placeholder-shown:text-[#ff6f6f] text-[#ff6f6f] peer-focus:text-[#ff6f6f] before:border-[#ff6f6f] peer-focus:before:!border-[#ff6f6f] after:border-[#ff6f6f] peer-focus:after:!border-[#ff6f6f]'
                          : 'peer-placeholder-shown:text-[#c5c5c9] text-[#c5c5c9] peer-focus:text-[#70b4dd] before:border-[#c5c5c9] peer-focus:before:!border-[#70b4dd] after:border-[#c5c5c9] peer-focus:after:!border-[#70b4dd]'
                      "
                      >New Password
                    </label>
                  </div>
                  <p :class="newPasswordError ? 'text-red-500 text-xs italic pt-2' : 'hidden'">
                    Please insert a new password.
                  </p>
                </div>
                <div class="py-2">
                  <div class="relative w-full min-w-[200px] h-11">
                    <div
                      class="absolute grid w-5 h-5 place-items-center top-2/4 right-3 -translate-y-2/4 z-50"
                    >
                      <button
                        type="button"
                        class="absolute rounded-e-md text-slate-400"
                        @click="
                          () => {
                            toggleConfirmNewPassword = !toggleConfirmNewPassword
                          }
                        "
                      >
                        <i
                          :class="
                            toggleConfirmNewPassword ? 'fa-solid fa-eye' : 'fa-solid fa-eye-slash'
                          "
                          aria-hidden="true"
                        ></i>
                      </button>
                    </div>
                    <input
                      class="w-full h-full px-3 py-3 font-sans text-sm font-normal transition-all bg-transparent border rounded-md peer outline outline-0 focus:outline-0 disabled:bg-[#c5c5c9] disabled:border-0 placeholder-shown:border focus:border-2 border-t-transparent focus:border-t-transparent"
                      :class="
                        confirmNewPasswordError
                          ? 'text-[#ff6f6f] placeholder-shown:border-[#ff6f6f] placeholder-shown:border-t-[#ff6f6f] focus:border-[#ff6f6f] border-[#ff6f6f]'
                          : 'text-black placeholder-shown:border-[#c5c5c9] placeholder-shown:border-t-[#c5c5c9] focus:border-[#70b4dd] border-[#c5c5c9]'
                      "
                      :type="toggleConfirmNewPassword ? 'text' : 'password'"
                      placeholder=" "
                      v-model="form.confirmNewPassword"
                    /><label
                      class="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-[#c5c5c9] transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[4.1]"
                      :class="
                        confirmNewPasswordError
                          ? 'peer-placeholder-shown:text-[#ff6f6f] text-[#ff6f6f] peer-focus:text-[#ff6f6f] before:border-[#ff6f6f] peer-focus:before:!border-[#ff6f6f] after:border-[#ff6f6f] peer-focus:after:!border-[#ff6f6f]'
                          : 'peer-placeholder-shown:text-[#c5c5c9] text-[#c5c5c9] peer-focus:text-[#70b4dd] before:border-[#c5c5c9] peer-focus:before:!border-[#70b4dd] after:border-[#c5c5c9] peer-focus:after:!border-[#70b4dd]'
                      "
                      >Confirm New Password
                    </label>
                  </div>
                  <p
                    :class="confirmNewPasswordError ? 'text-red-500 text-xs italic pt-2' : 'hidden'"
                  >
                    Please insert a password confirmation.
                  </p>
                </div>
                <div class="flex justify-end pt-5">
                  <button
                    class="bg-blue-500 px-5 py-2 text-white hover:bg-blue-700 rounded-3xl mx-1"
                  >
                    CONFIRM
                  </button>
                  <button
                    @click="closeDialog"
                    class="bg-red-500 px-5 py-2 text-white hover:bg-red-700 rounded-3xl mx-1"
                  >
                    CANCEL
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ToastMessage } from '@/components/ToastMessage'

export default {
  data() {
    return {
      form: {
        currentPassword: '',
        newPassword: '',
        confirmNewPassword: ''
      },
      togglePassword: false,
      toggleNewPassword: false,
      toggleConfirmNewPassword: false,
      currentPasswordError: false,
      newPasswordError: false,
      confirmNewPasswordError: false
    }
  },
  props: {
    changePasswordDialog: {
      type: Boolean,
      default: false,
      required: true
    }
  },
  created() {},
  watch: {},
  methods: {
    closeDialog() {
      this.resetForm()
      this.$emit('closeDialog')
    },
    onSubmit() {
      this.currentPasswordError = !this.form.currentPassword
      this.newPasswordError = !this.form.newPassword
      this.confirmNewPasswordError = !this.form.confirmNewPassword

      if (this.currentPasswordError || this.newPasswordError || this.confirmNewPasswordError) {
        ToastMessage('error', 'Please fill in all fields.')
        return
      }

      // Check if current password is correct
      if (this.form.currentPassword !== 'admin') {
        this.currentPasswordError = true
        ToastMessage('error', 'Incorrect Current Password!')
        return
      }

      // Validate if new password matches confirm password
      if (this.form.newPassword !== this.form.confirmNewPassword) {
        this.newPasswordError = this.confirmNewPasswordError = true
        ToastMessage('error', 'New passwords do not match. Please try again!')
        return
      }

      this.resetForm()

      ToastMessage('success', 'Password Changed Successfully')
      this.closeDialog()
    },
    resetForm() {
      this.currentPasswordError = false
      this.newPasswordError = false
      this.confirmNewPasswordError = false

      this.togglePassword = false
      this.toggleNewPassword = false
      this.toggleConfirmNewPassword = false

      Object.assign(this.form, {
        currentPassword: '',
        newPassword: '',
        confirmNewPassword: ''
      })
    }
  }
}
</script>
