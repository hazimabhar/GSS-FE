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
                <div class="relative w-full min-w-[200px]">
                  <div
                    class="absolute grid w-5 h-5 place-items-center text-blue-gray-500 top-2/4 right-3 -translate-y-2/4"
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
                    class="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-[#70b4dd]"
                    placeholder=" "
                  /><label
                    class="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-300 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-blue-gray-400 peer-focus:text-[#70b4dd] before:border-blue-gray-200 peer-focus:before:!border-[#70b4dd] after:border-blue-gray-200 peer-focus:after:!border-[#70b4dd]"
                    >Current Password
                  </label>
                </div>
                <div class="mb-6 relative">
                  <input
                    class="shadow appearance-none border rounded w-full py-4 px-3 text-gray-700 mb-3 leading-tight focus:outline-[#70b4dd] focus:shadow-outline"
                    :class="currentPasswordError ? ' border-red-500' : 'border-[#c5c5c9]'"
                    id="password"
                    :type="togglePassword ? 'text' : 'password'"
                    placeholder="Please Enter Your Password"
                    v-model="form.currentPassword"
                  />
                  <button
                    type="button"
                    class="absolute top-0 end-0 p-3.5 rounded-e-md text-slate-400"
                    @click="
                      () => {
                        togglePassword = !togglePassword
                      }
                    "
                  >
                    <i :class="togglePassword ? 'fa-solid fa-eye' : 'fa-solid fa-eye-slash'"></i>
                  </button>
                  <p :class="currentPasswordError ? 'text-red-500 text-xs italic' : 'hidden'">
                    Please enter current password.
                  </p>
                </div>
                <div class="mb-6 relative">
                  <input
                    class="shadow appearance-none border rounded w-full py-4 px-3 text-gray-700 mb-3 leading-tight focus:outline-[#70b4dd] focus:shadow-outline"
                    :class="newPasswordError ? ' border-red-500' : 'border-[#c5c5c9]'"
                    id="newPassword"
                    :type="toggleNewPassword ? 'text' : 'password'"
                    placeholder="Please Enter Your New Password"
                    v-model="form.newPassword"
                  />
                  <button
                    type="button"
                    class="absolute top-0 end-0 p-3.5 rounded-e-md text-slate-400"
                    @click="
                      () => {
                        toggleNewPassword = !toggleNewPassword
                      }
                    "
                  >
                    <i :class="toggleNewPassword ? 'fa-solid fa-eye' : 'fa-solid fa-eye-slash'"></i>
                  </button>
                  <p :class="newPasswordError ? 'text-red-500 text-xs italic' : 'hidden'">
                    Please enter new password.
                  </p>
                </div>
                <div class="mb-6 relative">
                  <input
                    class="shadow appearance-none border rounded w-full py-4 px-3 text-gray-700 mb-3 leading-tight focus:outline-[#70b4dd] focus:shadow-outline"
                    :class="confirmNewPasswordError ? ' border-red-500' : 'border-[#c5c5c9]'"
                    id="confirmNewPassword"
                    :type="toggleConfirmNewPassword ? 'text' : 'password'"
                    placeholder="Please Confirm Your New Password"
                    v-model="form.confirmNewPassword"
                  />
                  <button
                    type="button"
                    class="absolute top-0 end-0 p-3.5 rounded-e-md text-slate-400"
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
                    ></i>
                  </button>
                  <p :class="confirmNewPasswordError ? 'text-red-500 text-xs italic' : 'hidden'">
                    Please confirm new password.
                  </p>
                </div>
                <div class="flex justify-end">
                  <button
                    type="submit"
                    :to="{ name: 'Login' }"
                    role="button"
                    class="bg-blue-500 px-5 py-2 text-white hover:bg-blue-700 rounded-3xl mx-1"
                  >
                    <button>CONFIRM</button>
                  </button>
                  <div
                    role="button"
                    @click="closeDialog"
                    class="bg-red-500 px-5 py-2 text-white hover:bg-red-700 rounded-3xl mx-1"
                  >
                    <button>CANCEL</button>
                  </div>
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
      this.$emit('closeDialog')
    },
    onSubmit() {
      this.currentPasswordError = !this.form.currentPassword
      this.newPasswordError = !this.form.newPassword
      this.confirmNewPasswordError = !this.form.confirmNewPassword

      if (!this.passwordError && !this.newPasswordError && !this.confirmNewPasswordError) {
        if (this.form.newPassword != this.form.confirmNewPassword) {
          ToastMessage('error', 'Invalid New Password. \nPlease try again!')
        } else {
          Object.assign(this.form, { currentPassword: '', newPassword: '', confirmNewPassword: '' })
          ToastMessage('success', 'Password Changed Successfully')
          this.closeDialog()
        }
      }
    }
  }
}
</script>
