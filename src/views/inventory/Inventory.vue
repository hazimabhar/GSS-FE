<template>
  <div class="mx-10">
    <div class="mb-10">
      <h1 class="text-4xl font-semibold">Manage Products</h1>
    </div>
    <div class="flex justify-between">
      <div>
        <form class="max-w-md mx-auto">
          <label
            for="default-search"
            class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >Search</label
          >
          <div class="relative">
            <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                class="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              class="block min-w-[350px] p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search Items ..."
              required
            />
            <button
              type="submit"
              class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Search
            </button>
          </div>
        </form>
      </div>
      <div class="flex justify-end items-center">
        <button
          class="bg-[#1ba09d] text-white px-4 py-2 rounded-lg mx-1 flex hover:text-black hover:bg-white hover:outline-black hover:outline outline-1"
        >
          <div><i class="fa-regular fa-square-plus"></i></div>
          <div class="px-2 text-[15px]">Add New Product</div>
        </button>
        <button
          id="dropdownSortButton"
          data-dropdown-toggle="dropdownSort"
          class="px-4 py-2 rounded-lg mx-1 outline outline-1 flex outline-[#b0b5b9] hover:outline-[#70b4dd] hover:outline-2"
        >
          <div><i class="fa-solid fa-arrow-up-z-a text-sm"></i></div>
          <div class="px-2 text-[15px]">Sort by</div>
        </button>
        <!-- Dropdown menu -->
        <div
          id="dropdownSort"
          class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
        >
          <ul
            class="py-2 text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="dropdownSortButton"
          >
            <li>
              <a
                href="#"
                class="flex px-2 py-1 hover:bg-gray-100 dark:hover:bg-gray-700 align-middle"
              >
                <div class="flex-shrink-0">
                  <img class="rounded-full w-6 h-6" src="/date.svg" alt="date" />
                </div>
                <div class="w-full py-1 pl-2">
                  <div class="text-gray-500 text-sm mb-1.5 dark:text-gray-400">Date</div>
                </div>
              </a>
            </li>
            <li>
              <a
                href="#"
                class="flex px-2 py-1 hover:bg-gray-100 dark:hover:bg-gray-700 align-middle"
              >
                <div class="flex-shrink-0">
                  <img class="rounded-full w-6 h-6" src="/total.svg" alt="total" />
                </div>
                <div class="w-full py-1 pl-2">
                  <div class="text-gray-500 text-sm mb-1.5 dark:text-gray-400">Total</div>
                </div>
              </a>
            </li>
            <li>
              <a
                href="#"
                class="flex px-2 py-1 hover:bg-gray-100 dark:hover:bg-gray-700 align-middle"
              >
                <div class="flex-shrink-0">
                  <img class="rounded-full w-6 h-6" src="/closedby.svg" alt="closedby" />
                </div>
                <div class="w-full py-1 pl-2">
                  <div class="text-gray-500 text-sm mb-1.5 dark:text-gray-400">Closed By</div>
                </div>
              </a>
            </li>
          </ul>
        </div>

        <button
          @click="
            () => {
              filterDialog = !filterDialog
            }
          "
          class="px-5 py-2 rounded-lg mx-1 outline outline-1 flex outline-[#b0b5b9] hover:outline-[#70b4dd] hover:outline-2"
        >
          <div>
            <i class="fa-solid fa-filter text-sm"></i>
          </div>
          <div class="px-2 text-[15px]">Filter</div>
        </button>
      </div>
    </div>
    <div class="py-10 grid grid-cols-5 gap-5">
      <div
        class="outline-1 outline-[#c3c7ca] rounded-2xl outline hover:outline-[#70b4dd] hover:outline-2"
      >
        <div class="flex justify-end p-3">
          <i class="fa-solid fa-trash-can cursor-pointer text-lg hover:text-[#c3c7ca]"></i>
        </div>
        <div class="flex justify-center">
          <img
            class="max-w-[50%]"
            src="https://www.buffet-express.com/wp-content/uploads/2021/05/Coke.png"
            alt="Product"
          />
        </div>
        <div class="px-5 py-2">
          <div>
            <p class="text-[#9da3a8]">Drinks</p>
          </div>
          <div>
            <p class="font-semibold">Coca Cola</p>
          </div>
          <div class="py-2">
            <p class="font-semibold">MYR 50.00</p>
          </div>
        </div>
      </div>
      <div
        class="outline-1 outline-[#c3c7ca] rounded-2xl outline hover:outline-[#70b4dd] hover:outline-2"
      >
        <div class="flex justify-end p-3">
          <i class="fa-solid fa-trash-can cursor-pointer text-lg hover:text-[#c3c7ca]"></i>
        </div>
        <div class="flex justify-center">
          <img
            class="max-w-[50%]"
            src="https://www.buffet-express.com/wp-content/uploads/2021/05/Coke.png"
            alt="Product"
          />
        </div>
        <div class="px-5 py-2">
          <div>
            <p class="text-[#9da3a8]">Drinks</p>
          </div>
          <div>
            <p class="font-semibold">Coca Cola</p>
          </div>
          <div class="py-2">
            <p class="font-semibold">MYR 50.00</p>
          </div>
        </div>
      </div>
      <div class="outline-1 outline-[#c3c7ca] rounded-2xl outline hover:outline-[#70b4dd] hover:outline-2">
        <div class="flex justify-end p-3 ">
          <i class="fa-solid fa-trash-can cursor-pointer text-lg hover:text-[#c3c7ca]"></i>
        </div>
        <div class="flex justify-center">
          <img
            class="max-w-[50%]"
            src="https://www.buffet-express.com/wp-content/uploads/2021/05/Coke.png"
            alt="Product"
          />
        </div>
        <div class="px-5 py-2">
          <div>
            <p class="text-[#9da3a8]">Drinks</p>
          </div>
          <div>
            <p class="font-semibold">Coca Cola</p>
          </div>
          <div class="py-2">
            <p class="font-semibold">MYR 50.00</p>
          </div>
        </div>
      </div>
      <div class="outline-1 outline-[#c3c7ca] rounded-2xl outline hover:outline-[#70b4dd] hover:outline-2">
        <div class="flex justify-end p-3 ">
          <i class="fa-solid fa-trash-can cursor-pointer text-lg hover:text-[#c3c7ca]"></i>
        </div>
        <div class="flex justify-center">
          <img
            class="max-w-[50%]"
            src="https://www.buffet-express.com/wp-content/uploads/2021/05/Coke.png"
            alt="Product"
          />
        </div>
        <div class="px-5 py-2">
          <div>
            <p class="text-[#9da3a8]">Drinks</p>
          </div>
          <div>
            <p class="font-semibold">Coca Cola</p>
          </div>
          <div class="py-2">
            <p class="font-semibold">MYR 50.00</p>
          </div>
        </div>
      </div>
      <div class="outline-1 outline-[#c3c7ca] rounded-2xl outline hover:outline-[#70b4dd] hover:outline-2">
        <div class="flex justify-end p-3 ">
          <i class="fa-solid fa-trash-can cursor-pointer text-lg hover:text-[#c3c7ca]"></i>
        </div>
        <div class="flex justify-center">
          <img
            class="max-w-[50%]"
            src="https://www.buffet-express.com/wp-content/uploads/2021/05/Coke.png"
            alt="Product"
          />
        </div>
        <div class="px-5 py-2">
          <div>
            <p class="text-[#9da3a8]">Drinks</p>
          </div>
          <div>
            <p class="font-semibold">Coca Cola</p>
          </div>
          <div class="py-2">
            <p class="font-semibold">MYR 50.00</p>
          </div>
        </div>
      </div>
      <div class="outline-1 outline-[#c3c7ca] rounded-2xl outline hover:outline-[#70b4dd] hover:outline-2">
        <div class="flex justify-end p-3 ">
          <i class="fa-solid fa-trash-can cursor-pointer text-lg hover:text-[#c3c7ca]"></i>
        </div>
        <div class="flex justify-center">
          <img
            class="max-w-[50%]"
            src="https://www.buffet-express.com/wp-content/uploads/2021/05/Coke.png"
            alt="Product"
          />
        </div>
        <div class="px-5 py-2">
          <div>
            <p class="text-[#9da3a8]">Drinks</p>
          </div>
          <div>
            <p class="font-semibold">Coca Cola</p>
          </div>
          <div class="py-2">
            <p class="font-semibold">MYR 50.00</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <FilterDialog
    :filter-dialog="filterDialog"
    @close-dialog="
      () => {
        filterDialog = !filterDialog
      }
    "
  ></FilterDialog>
</template>
<script>
import { initFlowbite } from 'flowbite'
import FilterDialog from './component/Filter.vue'
export default {
  components: {
    FilterDialog
  },
  data() {
    return {
      filterDialog: false
      //   tabs: {
      //     dailyTab: true,
      //     weeklyTab: false,
      //     monthlyTab: false,
      //     yearlyTab: false
      //   }
    }
  },
  created() {},
  mounted() {
    initFlowbite()
  },
  methods: {
    onTabClick(tab) {
      const keys = Object.keys(this.tabs)
      for (let key of keys) {
        if (tab === key) {
          this.tabs[key] = true
        } else {
          this.tabs[key] = false
        }
      }
    }
  }
}
</script>
