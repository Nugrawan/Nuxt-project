<template>
  <div>
    <header class="w-full">
      <NavigationBar />
    </header>
    <main class="container mx-auto">
      <section class="cont">
        <div class="flex items-center gap-5">
          <img
            src="~/assets/img/play.png"
            alt="icons"
            class="w-36"
          >
          <div class="w-[70%]">
            <h1 class="text-3xl font-bold text-red-500 mb-3">
              Nonton Film Dan Series Tanpa Ribet Dan Tanpa Iklan
            </h1>
            <p class="text-xl font-semibold">
              Website ini di buat khusus untuk pecinta film,series, dan drama.
              Dengan bermacam macam genre dan negara
            </p>
          </div>
        </div>
      </section>
    </main>
    <footer>
      <FooterComponent />
    </footer>
  </div>
</template>

<script setup lang="js">
useHead({
  title: 'My - Movies: Watch Series and Drama',
  meta: [
    { name: 'description', content: 'Enjoy ilegals movies wihtout ads and simple way' }
  ],
  bodyAttrs: {
    class: 'test'
  },
})
</script>