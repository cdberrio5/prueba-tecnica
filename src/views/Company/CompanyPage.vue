<template>
    <div>
      <div class="h-40 bg-cover bg-center" :style="{ backgroundImage: 'url(' + require('@/assets/cielo-estrellado.jpg') + ')' }"></div>

      <div class="container">
        <CardPage />

        <div class="w-full flex bg-slate-200 flex-col">
          <div class="w-full flex bg-white h-16 justify-center items-center uppercase p-10">
            <p class="text-center text-slate-400 text-[13px] font-semibold leading-tight tracking-wide">Match con la cultura</p>

            <div class="ml-4 flex justify-center items-center ">
              <p class="text-center text-lime-400 text-xs font-normal leading-[18px] tracking-wide">80%</p>

              <div class="w-[276px] h-3.5 relative bg-slate-200 rounded-[30px] ml-2">
                <div class="w-[207px] h-3.5 relative bg-lime-400 rounded-[30px]"></div>
              </div>
            </div>

            <div class="ml-auto h-10 px-3 py-2 bg-pink-600 rounded-md justify-center items-center gap-2.5 inline-flex">
              <p class="text-white text-[13px] font-semibold leading-tight tracking-wide">Enviar Pitch</p>
            </div>
          </div>

          <div class="w-full flex bg-white h-16 justify-start items-center uppercase p-10">
            <div class="h-[52px] text-lg p-4 flex-col justify-center items-center pb-4 gap-2.5 inline-flex cursor-pointer" :class="{ active: isActive('/profile') }">
              <router-link to="/profile" class="text-slate-400 font-semibold leading-tight tracking-wide">Perfil</router-link>
            </div>
            <div class="h-[52px] text-lg p-4 flex-col justify-center items-center gap-2.5 inline-flex cursor-pointer" :class="{ active: isActive('/vacancies') }">
              <a href="/vacancies" class="text-slate-400 font-semibold leading-tight tracking-wide">Vacantes</a>
            </div>
            <div class="h-[52px] text-lg p-4 flex-col justify-center items-center gap-2.5 inline-flex cursor-pointer">
              <a href="#" class="text-slate-400 font-semibold leading-tight tracking-wide">Listas</a>
            </div>
          </div>

          <div>
            <router-view />
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  import CardPage from '@/components/Card/CardPage.vue';

  export default {
    name: 'companyPage',
    components: {
      CardPage,
    },
    methods: {
      isActive(route) {
        return this.$route.path === route;
      },
    },
  }
</script>

<style scoped>
  .container {
    display: flex;
    width: 100%;
    max-width: 100%;
  }

  .bg-cover {
    background-size: cover;
  }

  .bg-center {
    background-position: center;
  }

  .active {
    --tw-border-opacity: 1;
    border-color: rgb(219 39 119 / var(--tw-border-opacity));
    border-bottom-width: 2px;
    --tw-text-opacity: 1;
    color: rgb(219 39 119 / var(--tw-text-opacity));
  }
</style>