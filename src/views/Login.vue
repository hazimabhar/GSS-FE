<template>
  <div class="bg-[#141922] min-h-screen">
    <div class="flex items-center justify-center">
      <div
        class="shadow-lg shodow-inner shadow-[#0c1c38]-500/50 my-[8%] py-8 bg-[url('/landing.png')] bg-no-repeat bg-white rounded-[15px] min-w-[55%]"
      >
        <div class="max-w-[56%]">
          <div class="px-8">
            <img src="../../public/login.png" alt="" />
          </div>
          <div class="my-4 px-12">
            <div class="flex text-[30px]">
              <h1 class="font-semibold mr-1">Grocery</h1>
              <h1 class="font-light">Store</h1>
            </div>
            <div class="text-[30px]">
              <h1 class="font-semibold">System</h1>
            </div>
          </div>
          <div class="">
            <form class="rounded px-12 pt-6 pb-8" @submit.prevent="onSubmit">
              <div class="mb-4">
                <input
                  class="shadow appearance-none border rounded w-full py-4 px-3 mb-3 text-gray-700 leading-tight focus:outline-[#70b4dd] focus:shadow-outline"
                  :class="emailError ? ' border-red-500' : 'border-[#c5c5c9]'"
                  id="emai"
                  type="email"
                  placeholder="Please Enter Your Email"
                  v-model="form.email"
                />
                <p :class="emailError ? 'text-red-500 text-xs italic' : 'hidden'">
                  Please choose a email.
                </p>
              </div>
              <div class="mb-6 relative">
                <input
                  class="shadow appearance-none border rounded w-full py-4 px-3 text-gray-700 mb-3 leading-tight focus:outline-[#70b4dd] focus:shadow-outline"
                  :class="passwordError ? ' border-red-500' : 'border-[#c5c5c9]'"
                  id="password"
                  :type="togglePassword ? 'text' : 'password'"
                  placeholder="Please Enter Your Password"
                  v-model="form.password"
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
                <p :class="passwordError ? 'text-red-500 text-xs italic' : 'hidden'">
                  Please choose a password.
                </p>
              </div>
              <div class="flex justify-between items-center">
                <div class="text-sm text-[#09a0fe] font-medium">
                  <span>Forgot Password?</span>
                </div>
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
export default {
  data() {
    return {
      form: {
        email: '',
        password: ''
      },
      emailError: false,
      passwordError: false,
      togglePassword: false
    }
  },
  created() {},
  mounted() {},
  methods: {
    onSubmit() {
      this.emailError = !this.form.email
      this.passwordError = !this.form.password
      if (!this.emailError && !this.passwordError) {
        if (this.form.email == 'admin@admin.com' && this.form.password == 'admin') {
          this.$router.push({ name: 'Dashboard' })
        } else {
          ToastMessage('error', 'Invalid email address or password. \nPlease try again!')
        }
      }
    }
  }
}
</script>
