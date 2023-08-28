<template>
  <nav class="p-5 flex justify-between bg-sky-600 items-center">
    <div class="flex gap-3 items-center shadow-inner px-3 rounded-sm cursor-pointer">
      <img
        src="~/assets/img/logo.png"
        alt="logo"
        class="w-7 h-7 -rotate-6"
      >
      <h1 class="text-red-500 text-2xl font-bold font-custom -rotate-1">
        MY - MOVIES
      </h1>
    </div>
    <ul class="nav-list flex gap-5 font-title text-gray-100 font-bold">
      <li>
        <NuxtLink to="/">
          Home
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/trend">
          Trending
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/genres">
          Genre
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/countries">
          Negara
        </NuxtLink>
      </li>
    </ul>
    <div class="bg-white flex items-center px-5 py-1 rounded-xl hover:shadow-xl">
      <input
        id="search"
        type="search"
        name="search"
        placeholder="Search..."
        class="focus:outline-none appearance-none"
      >
      <button class="border-l pl-3 hover:text-red-500">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-search"
          viewBox="0 0 16 16"
        >
          <path
            d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"
          />
        </svg>
      </button>
    </div>
  </nav>
</template>