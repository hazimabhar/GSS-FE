<template>
  <router-link :to="to" class="flex items-center gap-x-4 px-2 py-4 hover:bg-[#cdd1d4]">
    <i :class="['pl-8', miniIcon]"></i>
    <router-link class="text-left" :to="to" :class="[sideNavCollapse ? 'hidden' : '']">
      {{ text }}
    </router-link>
  </router-link>
</template>
<script>
export default {
  name: 'SidenavItem',
  props: {
    sideNavCollapse: {
      type: Boolean
    },
    to: {
      type: [Object, String],
      required: true
    },
    miniIcon: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    }
  }
}
</script>
