<template>
  <div v-if="addAccessRightDialog">
    <div class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
      <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div
          class="flex min-h-[50%] items-end justify-center p-4 text-center sm:items-center sm:p-0"
        >
          <div
            class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg min-w-max"
          >
            <div class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
              <div class="flex justify-between">
                <div class="flex items-center align-middle">
                  <i class="fa-solid fa-cookie-bite text-3xl"></i>
                  <h1 class="px-5 text-lg font-semibold leading-6 text-gray-900" id="modal-title">
                    Add New Acces Right
                  </h1>
                </div>
                <div>
                  <span @click="closeDialog" role="button" class="hover:text-slate-400 text-2xl">
                    <i class="fa-solid fa-circle-xmark"></i>
                  </span>
                </div>
              </div>
              <div class="px-12 pb-5">
                <h3 class="text-[#b0b5b9] text-sm font-medium">
                  Please Insert All The Information Required
                </h3>
              </div>
              <form class="rounded px-6 pt-3 pb-4" @submit.prevent="onSubmit">
                <div class="py-3">
                  <div class="relative w-full min-w-[200px] h-11">
                    <input
                      class="w-full h-full px-3 py-3 font-sans text-sm font-normal transition-all bg-transparent border rounded-md peer outline-none focus:outline-none focus:ring-0 disabled:bg-[#c5c5c9] disabled:border-0 placeholder-shown:border focus:border-2 border-t-transparent focus:border-t-transparent"
                      :class="
                        productNameError
                          ? 'text-[#ff6f6f] placeholder-shown:border-[#ff6f6f] placeholder-shown:border-t-[#ff6f6f] focus:border-[#ff6f6f] border-[#ff6f6f]'
                          : 'text-black placeholder-shown:border-[#c5c5c9] placeholder-shown:border-t-[#c5c5c9] focus:border-[#70b4dd] border-[#c5c5c9]'
                      "
                      type="text"
                      placeholder=" "
                      v-model="form.productName"
                    />
                    <label
                      class="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-[#c5c5c9] transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[4.1]"
                      :class="
                        productNameError
                          ? 'peer-placeholder-shown:text-[#ff6f6f] text-[#ff6f6f] peer-focus:text-[#ff6f6f] before:border-[#ff6f6f] peer-focus:before:!border-[#ff6f6f] after:border-[#ff6f6f] peer-focus:after:!border-[#ff6f6f]'
                          : 'peer-placeholder-shown:text-[#c5c5c9] text-[#c5c5c9] peer-focus:text-[#70b4dd] before:border-[#c5c5c9] peer-focus:before:!border-[#70b4dd] after:border-[#c5c5c9] peer-focus:after:!border-[#70b4dd] '
                      "
                      >Access Right Code
                    </label>
                  </div>
                  <p :class="productNameError ? 'text-red-500 text-xs italic pt-2' : 'hidden'">
                    Please insert a product name.
                  </p>
                </div>

                <div class="py-3">
                  <div class="relative w-full min-w-[200px] h-11">
                    <input
                      class="w-full h-full px-3 py-3 font-sans text-sm font-normal transition-all bg-transparent border rounded-md peer outline-none focus:outline-none focus:ring-0 disabled:bg-[#c5c5c9] disabled:border-0 placeholder-shown:border focus:border-2 border-t-transparent focus:border-t-transparent"
                      :class="
                        productNameError
                          ? 'text-[#ff6f6f] placeholder-shown:border-[#ff6f6f] placeholder-shown:border-t-[#ff6f6f] focus:border-[#ff6f6f] border-[#ff6f6f]'
                          : 'text-black placeholder-shown:border-[#c5c5c9] placeholder-shown:border-t-[#c5c5c9] focus:border-[#70b4dd] border-[#c5c5c9]'
                      "
                      type="text"
                      placeholder=" "
                      v-model="form.productName"
                    />
                    <label
                      class="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-[#c5c5c9] transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[4.1]"
                      :class="
                        productNameError
                          ? 'peer-placeholder-shown:text-[#ff6f6f] text-[#ff6f6f] peer-focus:text-[#ff6f6f] before:border-[#ff6f6f] peer-focus:before:!border-[#ff6f6f] after:border-[#ff6f6f] peer-focus:after:!border-[#ff6f6f]'
                          : 'peer-placeholder-shown:text-[#c5c5c9] text-[#c5c5c9] peer-focus:text-[#70b4dd] before:border-[#c5c5c9] peer-focus:before:!border-[#70b4dd] after:border-[#c5c5c9] peer-focus:after:!border-[#70b4dd] '
                      "
                      >Access Right Name
                    </label>
                  </div>
                  <p :class="productNameError ? 'text-red-500 text-xs italic pt-2' : 'hidden'">
                    Please insert a product name.
                  </p>
                </div>

                <div class="py-3">
                  <div class="relative w-full min-w-[200px] h-11">
                    <input
                      class="w-full h-full px-3 py-3 font-sans text-sm font-normal transition-all bg-transparent border rounded-md peer outline-none focus:outline-none focus:ring-0 disabled:bg-[#c5c5c9] disabled:border-0 placeholder-shown:border focus:border-2 border-t-transparent focus:border-t-transparent"
                      :class="
                        productNameError
                          ? 'text-[#ff6f6f] placeholder-shown:border-[#ff6f6f] placeholder-shown:border-t-[#ff6f6f] focus:border-[#ff6f6f] border-[#ff6f6f]'
                          : 'text-black placeholder-shown:border-[#c5c5c9] placeholder-shown:border-t-[#c5c5c9] focus:border-[#70b4dd] border-[#c5c5c9]'
                      "
                      type="text"
                      placeholder=" "
                      v-model="form.productName"
                    />
                    <label
                      class="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-[#c5c5c9] transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[4.1]"
                      :class="
                        productNameError
                          ? 'peer-placeholder-shown:text-[#ff6f6f] text-[#ff6f6f] peer-focus:text-[#ff6f6f] before:border-[#ff6f6f] peer-focus:before:!border-[#ff6f6f] after:border-[#ff6f6f] peer-focus:after:!border-[#ff6f6f]'
                          : 'peer-placeholder-shown:text-[#c5c5c9] text-[#c5c5c9] peer-focus:text-[#70b4dd] before:border-[#c5c5c9] peer-focus:before:!border-[#70b4dd] after:border-[#c5c5c9] peer-focus:after:!border-[#70b4dd] '
                      "
                      >Description
                    </label>
                  </div>
                  <p :class="productNameError ? 'text-red-500 text-xs italic pt-2' : 'hidden'">
                    Please insert a product name.
                  </p>
                </div>

                <div class="py-3">
                  <label class="inline-flex items-center cursor-pointer">
                    <input type="checkbox" value="" class="sr-only peer" checked />
                    <div
                      class="relative w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"
                    ></div>
                    <span class="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >Status</span
                    >
                  </label>
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
//   import ScanDialog from './ScanDialog.vue'
import vueFilePond from 'vue-filepond'
import FilePondPluginImagePreview from 'filepond-plugin-image-preview'
import FilePondPluginFileEncode from 'filepond-plugin-file-encode'
import 'filepond/dist/filepond.min.css'
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css'

const FilePond = vueFilePond(FilePondPluginImagePreview, FilePondPluginFileEncode)

export default {
  data() {
    return {
      form: {
        productName: '',
        productPrice: '',
        productCategory: '',
        productBarcode: ''
      },
      togglePassword: false,
      toggleNewPassword: false,
      toggleConfirmNewPassword: false,
      productNameError: false,
      productPriceError: false,
      productCategoryError: false,
      productBarcodeError: false,
      scannerDialog: false
    }
  },
  components: {
    FilePond
    // BarcodeScanner,
    //   ScanDialog
  },
  props: {
    addAccessRightDialog: {
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
      this.productNameError = !this.form.productName
      this.productPriceError = !this.form.productPrice
      this.productCategoryError = !this.form.productCategory
      this.productBarcodeError = !this.form.productBarcode

      if (
        this.productNameError ||
        this.productPriceError ||
        this.productBarcodeError ||
        this.productCategoryError
      ) {
        ToastMessage('error', 'Please fill in all fields.')
        return
      }

      //   // Check if current password is correct
      //   if (this.form.productName !== 'admin') {
      //     this.productNameError = true
      //     ToastMessage('error', 'Incorrect Current Password!')
      //     return
      //   }

      //   // Validate if new password matches confirm password
      //   if (this.form.newPassword !== this.form.confirmNewPassword) {
      //     this.newPasswordError = this.confirmNewPasswordError = true
      //     ToastMessage('error', 'New passwords do not match. Please try again!')
      //     return
      //   }

      this.resetForm()

      ToastMessage('success', 'Product Added Successfully')
      this.closeDialog()
    },
    resetForm() {
      this.productPriceError = false
      this.productCategoryError = false
      this.productBarcodeError = false
      this.productNameError = false

      Object.assign(this.form, {
        productName: '',
        productPrice: '',
        productCategory: '',
        productBarcode: ''
      })
    },
    handleFileAdd(error, file) {
      if (!error && file) {
        console.log('Base64 String:', file.getFileEncodeDataURL())
      }
    }
  }
}
</script>
