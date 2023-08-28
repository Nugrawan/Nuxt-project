<template>
  <div>
    <header class="w-full">
      <NavigationBar />
    </header>
    <main class="container cont">
      <Sidebar />
      <ClientOnly 
        fallback-tag="span" 
        fallback="Loading comments..."
      >
        <Comment />
      </ClientOnly>
    </main>
  </div>
</template>