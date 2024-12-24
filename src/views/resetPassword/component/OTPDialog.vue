<template>
  <div v-if="openDialog">
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
              <div class="flex justify-between pb-3">
                <div class="flex items-center align-middle">
                  <i class="fa-solid fa-circle-info text-red-500 text-2xl"></i>
                  <h1 class="px-5 text-xl font-semibold leading-6 text-gray-900" id="modal-title">
                    Enter OTP Code
                  </h1>
                </div>
                <div>
                  <span @click="closeDialog" role="button" class="hover:text-slate-400 text-xl">
                    <i class="fa-solid fa-circle-xmark"></i>
                  </span>
                </div>
              </div>
              <div class="pb-5">
                <div class="flex justify-between">
                  <div class="flex items-center align-middle">
                    <h1 class="px-11 font-medium text-sm leading-6 text-gray-900" id="modal-title">
                      Enter the 6-digits code sent to your email.
                    </h1>
                  </div>
                </div>
                <div class="flex justify-between">
                  <div class="flex items-center align-middle">
                    <h1 class="px-11 font-medium text-sm leading-6 text-gray-900" id="modal-title">
                      Didn't get a code?
                      <span
                        class="text-sm text-[#09a0fe] font-medium hover:text-[#6abcf0] cursor-pointer"
                        >Request New OTP</span
                      >
                    </h1>
                  </div>
                </div>
              </div>
              <form class="rounded px-6 pt-3 pb-4" @submit.prevent="onSubmit">

                <HOtpInput
                :length="6"
                type="text"
                @on-finish="handleFinish"
                @on-change="handleChange"
                wrapperClassName="otp-input"
                :outlined="true"
                ref="otpInput"
                :only-number="true"
              />
                <div class="flex justify-end pt-10">
                  <!-- <button
                    class="bg-blue-500 px-5 py-2 text-white hover:bg-blue-700 rounded-3xl mx-1"
                  >
                    CONFIRM
                  </button> -->
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
import { HOtpInput } from '@healerlab/vue3-simple-otp-input'
import { ToastMessage } from '@/components/ToastMessage'

export default {

    components:{
        HOtpInput
    },
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
    openDialog: {
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
    handleFinish(otpCode) {
        console.log(otpCode)
        this.$router.push({ name: 'New Password' })
      // write logic with received code
    },

    handleChange(otpCode) {
      // write logic with changed code
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

<style scoped lang="scss">
.otp-input {
  :deep(input) {
    outline: none;
    width: 40px;
    padding: 12px;
    font-size: 22px;
    border: none;
    margin-left: 10px;
    text-align: center;
    &:first-child {
      margin-left: 0;
    }
    &:focus {
      outline: none;
    }
  }

  :deep(span) {
    padding: 0 0px 0 10px;
    font-size: 30px;
  }
}
</style>
