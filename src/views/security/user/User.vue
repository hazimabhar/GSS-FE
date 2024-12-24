<template>
  <div class="mx-10">
    <div class="mb-10">
      <h1 class="text-4xl font-semibold">User</h1>
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
              placeholder="Search User ..."
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
          @click="
            () => {
              addUserDialog = !addUserDialog
            }
          "
          class="bg-[#1ba09d] text-white px-4 py-2 rounded-lg mx-1 flex hover:text-black hover:bg-white hover:outline-black hover:outline outline-1"
        >
          <div><i class="fa-regular fa-square-plus"></i></div>
          <div class="px-2 text-[15px]">Add New User</div>
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
                  <img class="rounded-full w-5 h-5" src="/name.svg" alt="date" />
                </div>
                <div class="w-full py-1 pl-2">
                  <div class="text-gray-500 text-sm mb-1.5 dark:text-gray-400">Name</div>
                </div>
              </a>
            </li>
            <li>
              <a
                href="#"
                class="flex px-2 py-1 hover:bg-gray-100 dark:hover:bg-gray-700 align-middle"
              >
                <div class="flex-shrink-0">
                  <img class="rounded-full w-6 h-6" src="/role.svg" alt="total" />
                </div>
                <div class="w-full py-1 pl-2">
                  <div class="text-gray-500 text-sm mb-1.5 dark:text-gray-400">Role</div>
                </div>
              </a>
            </li>
            <li>
              <a
                href="#"
                class="flex px-2 py-1 hover:bg-gray-100 dark:hover:bg-gray-700 align-middle"
              >
                <div class="flex-shrink-0">
                  <img class="rounded-full w-5 h-5" src="/time.svg" alt="closedby" />
                </div>
                <div class="w-full py-1 pl-2">
                  <div class="text-gray-500 text-sm mb-1.5 dark:text-gray-400">Created At</div>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="my-10">
      <div class="relative flex flex-col w-full h-full text-gray-700 bg-white overflow-scroll">
        <div>
          <table class="w-full text-left table-auto min-w-max border-x border-blue-gray-100">
            <thead>
              <tr class="">
                <th class="p-4 border-y border-blue-gray-100 bg-blue-gray-50/50">
                  <p
                    class="font-semibold block font-sans text-sm antialiased leading-none text-blue-gray-900 opacity-70"
                  >
                    No.
                  </p>
                </th>
                <th class="p-4 border-y border-blue-gray-100 bg-blue-gray-50/50">
                  <p
                    class="font-semibold block font-sans text-sm antialiased leading-none text-blue-gray-900 opacity-70"
                  >
                    Name
                  </p>
                </th>
                <th class="p-4 border-y border-blue-gray-100 bg-blue-gray-50/50">
                  <p
                    class="block font-sans text-sm antialiased font-bold leading-none text-blue-gray-900 opacity-70"
                  >
                    Role
                  </p>
                </th>
                <th class="p-4 border-y border-blue-gray-100 bg-blue-gray-50/50">
                  <p
                    class="block font-sans text-sm antialiased font-bold leading-none text-blue-gray-900 opacity-70"
                  >
                    Decsription
                  </p>
                </th>
                <th class="p-4 border-y border-blue-gray-100 bg-blue-gray-50/50">
                  <p
                    class="block font-sans text-sm antialiased font-bold leading-none text-blue-gray-900 opacity-70"
                  >
                    Created At
                  </p>
                </th>
                <th class="p-4 border-y border-blue-gray-100 bg-blue-gray-50/50">
                  <p
                    class="block font-sans text-sm antialiased font-bold leading-none text-blue-gray-900 opacity-70"
                  >
                    Action
                  </p>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="p-4 border-b border-blue-gray-50">
                  <p
                    class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900"
                  >
                    1
                  </p>
                </td>
                <td class="p-4 border-b border-blue-gray-50">
                  <p
                    class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900"
                  >
                    ABCD-1
                  </p>
                </td>
                <td class="p-4 border-b border-blue-gray-50">
                  <p
                    class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900"
                  >
                    Alphabet
                  </p>
                </td>
                <td class="p-4 border-b border-blue-gray-50">
                  <p
                    class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900"
                  >
                    Alphabet
                  </p>
                </td>
                <td class="p-4 border-b border-blue-gray-50">
                  <p
                    class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900"
                  >
                    Alphabet
                  </p>
                </td>
                <td class="p-4 border-b border-blue-gray-50">
                  <p
                    class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900"
                  >
                    <i
                      class="fa-solid fa-pen cursor-pointer text-base hover:text-[#c3c7ca] px-1"
                    ></i>
                    <i
                      class="fa-solid fa-trash-can cursor-pointer text-base hover:text-[#c3c7ca] px-1"
                      @click="
                        () => {
                          deleteDialog = !deleteDialog
                        }
                      "
                    ></i>
                  </p>
                </td>
              </tr>
              <tr>
                <td class="p-4 border-b border-blue-gray-50">
                  <p
                    class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900"
                  >
                    1
                  </p>
                </td>
                <td class="p-4 border-b border-blue-gray-50">
                  <p
                    class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900"
                  >
                    ABCD-1
                  </p>
                </td>
                <td class="p-4 border-b border-blue-gray-50">
                  <p
                    class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900"
                  >
                    Alphabet
                  </p>
                </td>
                <td class="p-4 border-b border-blue-gray-50">
                  <p
                    class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900"
                  >
                    Alphabet
                  </p>
                </td>
                <td class="p-4 border-b border-blue-gray-50">
                  <p
                    class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900"
                  >
                    Alphabet
                  </p>
                </td>
                <td class="p-4 border-b border-blue-gray-50">
                  <p
                    class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900"
                  >
                    <i
                      class="fa-solid fa-pen cursor-pointer text-base hover:text-[#c3c7ca] px-1"
                    ></i>
                    <i
                      class="fa-solid fa-trash-can cursor-pointer text-base hover:text-[#c3c7ca] px-1"
                    ></i>
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="flex items-center justify-between p-4 border-b border-x border-blue-gray-100">
          <button
            class="select-none rounded-lg border border-gray-900 py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-gray-900 transition-all hover:border-[#70b4dd] hover:text-[#70b4dd] focus:ring focus:ring-gray-300 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
          >
            Previous
          </button>
          <div class="flex items-center gap-2">
            <button
              class="relative h-8 max-h-[32px] w-8 max-w-[32px] select-none rounded-lg border border-gray-900 text-center align-middle font-sans text-xs font-medium uppercase text-gray-900 transition-all hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
            >
              <span class="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                1
              </span>
            </button>
            <button
              class="relative h-8 max-h-[32px] w-8 max-w-[32px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-gray-900 transition-all hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
            >
              <span class="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                2
              </span>
            </button>
            <button
              class="relative h-8 max-h-[32px] w-8 max-w-[32px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-gray-900 transition-all hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
            >
              <span class="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                3
              </span>
            </button>
            <button
              class="relative h-8 max-h-[32px] w-8 max-w-[32px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-gray-900 transition-all hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
            >
              <span class="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                ...
              </span>
            </button>
            <button
              class="relative h-8 max-h-[32px] w-8 max-w-[32px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-gray-900 transition-all hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
            >
              <span class="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                8
              </span>
            </button>
            <button
              class="relative h-8 max-h-[32px] w-8 max-w-[32px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-gray-900 transition-all hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
            >
              <span class="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                9
              </span>
            </button>
            <button
              class="relative h-8 max-h-[32px] w-8 max-w-[32px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-gray-900 transition-all hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
            >
              <span class="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                10
              </span>
            </button>
          </div>
          <button
            class="select-none rounded-lg border border-gray-900 py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-gray-900 transition-all hover:border-[#70b4dd] hover:text-[#70b4dd] focus:ring focus:ring-gray-300 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  </div>
  <AddUser
    :add-user-dialog="addUserDialog"
    @close-dialog="
      () => {
        addUserDialog = !addUserDialog
      }
    "
  >
  </AddUser>
  <DeleteUser
    :delete-dialog="deleteDialog"
    @close-dialog="
      () => {
        deleteDialog = !deleteDialog
      }
    "
  >
  </DeleteUser>
</template>
<script>
import { initFlowbite } from 'flowbite'
//   import FilterDialog from './component/Filter.vue'
//   import AddInventory from './component/AddInventory.vue'
import AddUser from './component/AddUser.vue'
import DeleteUser from './component/DeleteUser.vue'
export default {
  components: {
    //   FilterDialog,
    //   AddInventory
    AddUser,
    DeleteUser
  },
  data() {
    return {
      addUserDialog: false,
      deleteDialog: false
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
