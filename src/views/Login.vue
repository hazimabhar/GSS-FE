<template>
  <div class="bg-[#f5f5fa] min-h-screen">
    <div class="flex items-center justify-center">
      <div class="shadow-lg shodow-inner shadow-[#e6ebef]-500/50 my-[8%] py-8 bg-white rounded-[35px] min-w-[40%]">
        <div class="max-w-[50%]">
          <div>
            <img src="/favicon.png" alt="" />
          </div>
          <div class="my-8 px-8">
            <div class="flex text-[30px]">
              <h1 class="font-bold mr-1">Grocery</h1>
              <h1>Store</h1>
            </div>
            <div class="text-[30px]">
              <h1 class="font-bold">System</h1>
            </div>
          </div>
          <div class="">
            <form class="bg-white rounded px-8 pt-6 pb-8">
              <div class="mb-4">
                <!-- <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                  Username
                </label> -->
                <input
                  class="shadow appearance-none border border-red-500 rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-blue-200 focus:shadow-outline"
                  id="emai"
                  type="email"
                  placeholder="Please Enter Your Email"
                />
                <p class="text-red-500 text-xs italic">Please choose a email.</p>
              </div>
              <div class="mb-6">
                <!-- <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
                  Password
                </label> -->
                <input
                  class="shadow appearance-none border border-red-500 rounded w-full py-4 px-3 text-gray-700 mb-3 leading-tight focus:outline-blue-200 focus:shadow-outline"
                  id="password"
                  type="password"
                  placeholder="Please Enter Your Password"
                />
                <p class="text-red-500 text-xs italic">Please choose a password.</p>
              </div>
              <div class="flex justify-between">
              <div>
                <span>Forgot Password?</span>
              </div>
              <div>
                <button>
                  <i class="fa-solid fa-arrow-right-long"></i>
                </button>
              </div>
            </div>
            </form>
          </div>
          <div class="px-8 text-[15px] font-extralight">
            <span>hazimabhar's Final Year Project 2022-2023</span>
          </div>
        </div>
        <!-- <router-link :to="{ name: 'Dashboard' }">Login</router-link> -->
      </div>
    </div>
  </div>
</template>
