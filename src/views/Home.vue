<template>
  <div class="flex">
    <div
      class="min-h-screen bg-slate-500 duration-300"
      :class="[sideBarCollapse ? 'w-[5%]' : 'w-[15%]']"
    >
      <div class="flex justify-between p-3 items-center">
        <div class="flex items-center">
          <div>logo</div>
          <div>
            <div>GSS</div>
            <div>Grocery Store System</div>
          </div>
        </div>
        <div
          class="text-right z-50"
          @click="
            () => {
              sideBarCollapse = !sideBarCollapse
            }
          "
        >
          <i
            role="button"
            class="fa-solid fa-chevron-left"
            :class="[sideBarCollapse ? 'rotate-180' : 'rotate-0']"
          ></i>
        </div>
      </div>
      <div></div>
    </div>
    <div>
      <div>This is navbar</div>
      <div>this is content</div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      sideBarCollapse: false
    }
  },
  created() {}
}
</script>
