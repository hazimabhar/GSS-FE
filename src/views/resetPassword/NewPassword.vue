<template>
    <div class="bg-[#141922] min-h-screen">
      <div class="flex items-center justify-center">
        <div
          class="shadow-lg shodow-inner shadow-[#0c1c38]-500/50 my-[8%] py-8 bg-[url('/landing.png')] bg-no-repeat bg-white rounded-[15px] min-w-[55%]"
        >
          <div class="max-w-[56%]">
            <div class="px-8">
              <img src="/login.png" alt="" />
            </div>
            <div class="my-4 px-12">
              <div class="flex text-[30px]">
                <h1 class="font-semibold mr-1">Change</h1>
                <h1 class="font-light">Password</h1>
              </div>
              <!-- <div class="text-[30px]">
                  <h1 class="font-semibold">System</h1>
                </div> -->
            </div>
            <div class="">
              <form class="rounded px-12 pt-6 pb-8" @submit.prevent="onSubmit">
                <div class="mb-6 relative">
                  <input
                    class="shadow appearance-none border rounded w-full py-4 px-3 text-gray-700 mb-3 leading-tight focus:outline-[#70b4dd] focus:shadow-outline"
                    :class="newPasswordError ? ' border-red-500' : 'border-[#c5c5c9]'"
                    id="password"
                    type="text"
                    placeholder="Please Enter New Password"
                    v-model="form.newPassword"
                  />
                  <!-- <button
                      type="button"
                      class="absolute top-0 end-0 p-3.5 rounded-e-md text-slate-400"
                      @click="
                        () => {
                          togglePassword = !togglePassword
                        }
                      "
                    >
                      <i :class="togglePassword ? 'fa-solid fa-eye' : 'fa-solid fa-eye-slash'"></i>
                    </button> -->
                  <p :class="newPasswordError ? 'text-red-500 text-xs italic' : 'hidden'">
                    Please insert new password.
                  </p>
                </div>
  
                <div class="mb-4">
                  <input
                    class="shadow appearance-none border rounded w-full py-4 px-3 mb-3 text-gray-700 leading-tight focus:outline-[#70b4dd] focus:shadow-outline"
                    :class="passwordVerfificationError ? ' border-red-500' : 'border-[#c5c5c9]'"
                    id="email"
                    type="text"
                    placeholder="Please Enter Re-enter New Password"
                    v-model="form.passwordVerification"
                  />
                  <p :class="passwordVerfificationError ? 'text-red-500 text-xs italic' : 'hidden'">
                    Please Re-enter new password.
                  </p>
                </div>
  
                <div class="flex justify-between items-center">
                  <!-- <router-link :to="{ name: 'Login' }">
                    <div
                      class="text-sm text-[#09a0fe] font-medium hover:text-[#6abcf0] cursor-pointer"
                      @click=""
                    >
                      <span>Back To Login Page</span>
                    </div>
                  </router-link> -->
                  <button class="bg-[#09a0fe] text-white py-2 px-8 rounded-md hover:bg-[#80ceff]">
                    <i class="fa-solid fa-arrow-right-long"></i>
                  </button>
                </div>
              </form>
            </div>
            <div class="px-12 text-[11px] font-medium">
              <span>hazimabhar's Final Year Project 2022-2023</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  <script>
  import { ToastMessage } from '@/components/ToastMessage'
  import OTPDialog from './component/OTPDialog.vue'
  export default {
    components: {
      OTPDialog
    },
    data() {
      return {
        form: {
          newPassword: '',
          passwordVerification: '',
        },
        newPasswordError: false,
        passwordVerfificationError: false,
        // togglePassword: false
      }
    },
    created() {},
    mounted() {},
    methods: {
      onSubmit() {
        this.newPasswordError = !this.form.newPassword
        this.passwordVerificationError = !this.form.passwordVerification
        if (!this.newPasswordError && !this.passwordVerificationError) {
          if (this.form.passwordVerification == this.form.newPassword) {
              this.$router.push({ name: 'Login' })
              ToastMessage('success', 'Password Successfully Changed. \nPlease Re-login')
            // this.openDialog = true
          } else {
            ToastMessage('error', 'Password verfification not same as new password. \nPlease try again!')
          }
        }
      }
    }
  }
  </script>
  