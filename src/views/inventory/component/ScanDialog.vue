<template>
  <div
    v-if="scannerDialog"
    class="z-50 fixed inset-0 bg-gray-500 bg-opacity-50 flex items-center justify-center"
  >
    <div
      class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 w-[90%] sm:max-w-md min-w-[300px] p-5"
    >
      <h2 class="text-lg font-bold">Scan Barcode</h2>
      <p class="text-gray-600">Please scan your barcode.</p>
      <button
        @click="closeScannerDialog"
        class="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
      >
        <i class="fa-solid fa-circle-xmark text-xl"></i>
      </button>

      <div class="">
        <BarcodeScanner @scanned="onBarcodeScanned" />
        <div>Scanned Result: {{ result }}</div>
        <div>Format: {{ format }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import BarcodeScanner from '@/components/BarcodeScanner.vue'

export default {
  props: {
    scannerDialog: Boolean
  },
  components: {
    BarcodeScanner
  },
  data() {
    return {
      result: '',
      format: ''
    }
  },
  methods: {
    closeScannerDialog() {
      this.$emit('close-dialog')
    },
    onBarcodeScanned({ result, format }) {
      this.result = result
      this.format = format
    }
  }
}
</script>
