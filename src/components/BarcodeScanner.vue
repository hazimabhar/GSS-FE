<template>
  <div>
    <div id="barcode-scanner"></div>
  </div>
</template>

<script>
import Quagga from 'quagga'

export default {
  name: 'BarcodeScanner',
  data() {
    return {
      result: '',
      format: ''
    }
  },
  mounted() {
    // Initialize QuaggaJS when the component is mounted
    Quagga.init(
      {
        inputStream: {
          name: 'Live',
          type: 'LiveStream',
          target: document.querySelector('#barcode-scanner'), // Attach the scanner to this element
          constraints: {
            width: 500,
            height: 300,
            facingMode: 'environment'
            // deviceId: '7832475934759384534'
          },
          area: {
            // defines rectangle of the detection/localization area
            top: '0%', // top offset
            right: '0%', // right offset
            left: '0%', // left offset
            bottom: '0%' // bottom offset
          },
          singleChannel: false // true: only the red color-channel is read
        },
        decoder: {
          readers: ['code_128_reader', 'ean_reader', 'ean_8_reader'] // Specify the barcode formats you want
        }
      },
      (err) => {
        if (err) {
          console.error(err)
          return
        }
        Quagga.start()
      }
    )

    // Add event listener for barcode detection
    Quagga.onDetected(this.onBarcodeDetected)
  },
  beforeDestroy() {
    Quagga.stop()
  },
  methods: {
    onBarcodeDetected(result) {
      this.result = result.codeResult.code
      this.format = result.codeResult.format

      // Emit the scanned result to the parent
      this.$emit('scanned', { result: this.result, format: this.format })
    }
  }
}
</script>
<style>
.drawingBuffer {
  display: none !important;
}

/* #barcode-scanner video{
  width: 100%;
  border: 1px solid #ccc; 
} */
</style>
