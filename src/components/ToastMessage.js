import { useToast } from 'vue-toastification'

const toast = useToast()

export function ToastMessage(type, message) {
  const options = {
    position: 'top-center',
    timeout: 3000,
    closeOnClick: true,
    pauseOnFocusLoss: true,
    pauseOnHover: true,
    draggable: true,
    draggablePercent: 2,
    showCloseButtonOnHover: false,
    hideProgressBar: false,
    closeButton: 'button',
    icon: true,
    rtl: false
  }

  const toastTypes = {
    default: 'default',
    success: 'success',
    info: 'info',
    warning: 'warning',
    error: 'error'
  }

  toast[toastTypes[type]](message, options)
}
