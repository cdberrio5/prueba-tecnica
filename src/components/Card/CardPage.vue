<template>
  <div class="relative bg-white rounded-md overflow-hidden shadow-lg p-6 card">
    <div class="w-[170px] h-[170px] bg-slate-200 rounded-[185px] logo">
        <div class="text-indigo-900 text-[80px]">AC</div>
    </div>

    <h2 class="text-xl font-bold text-indigo-900">A.C Telecom</h2>
    <p class="mb-2">@ac-telecom</p>

    <p class="text-center mb-2 text-slate-400 text-[13px] font-semibold leading-tight tracking-wide">Startup - tecnología</p>

    <div class="text-icon mb-2 w-28">
        <div class="w-2 h-2 p-1 bg-lime-400 rounded-3xl"></div>
        <p class="text-lime-400 text-xs leading-[18px] tracking-wide">Empresa activa</p>
    </div>

    <div class="text-icon mb-4 w-44">
        <i class="fa-solid fa-location-dot"></i>
        <p class="text-center text-stone-500 text-xs font-normal leading-[18px] tracking-wide">Floridablanca - Colombia</p>
    </div>

    <div class="flex items-center w-44 container-rating mb-4">
        <div class="rating">
            <i class="fas fa-star text-yellow-400"></i>
            <i class="fas fa-star text-yellow-400"></i>
            <i class="fas fa-star text-yellow-400"></i>
            <i class="fas fa-star text-yellow-400"></i>
            <i class="fas fa-star text-yellow-100"></i>
        </div>

        <p class="text-center text-stone-500 text-xs font-normal leading-[18px] tracking-wide">(10 Reviews)</p>
    </div>

    <div class="flex space-x-2 mb-4 text-3xl">
      <i class="fab fa-facebook-square text-blue-800"></i>
      <i class="fab fa-instagram text-pink-800"></i>
      <i class="fab fa-twitter text-blue-800"></i>
      <i class="fab fa-linkedin text-blue-800"></i>
    </div>

    <div class="text-icon mb-4 w-60 text-pink-600">
        <i class="fa-solid fa-paperclip"></i>   
        <p class="text-xs font-normal leading-[18px] tracking-wide">https://www.actelecom.net/telecom</p>
    </div>

    <img src="@/assets/video.png" alt="QR Code" class="w-full mb-4 rounded-md">

    <img src="@/assets/QR.jpg" alt="QR Code" class="w-full mb-4 rounded-md">

    <button class="w-full mb-4 bg-pink-600 text-white px-4 py-2 rounded-md focus:outline-none focus:shadow-outline-blue justify-between items-center">
        <i class="fa-solid fa-share"></i>
        Compartir
    </button>

    <button class="w-full text-stone-500 flex gap-2.5 rounded-l-md inline-flex border-2 border-slate-400 mb-4">
        <div class="w-10 bg-pink-600 text-white px-4 py-2 rounded-l-md flex justify-center align-center">
            <i class="fa-solid fa-download"></i>
        </div>
        <div class="w-60"> 
            Descargar Resumen
        </div>
    </button>

    <div class="w-full flex items-center mb-4 text-lg uppercase">
        <div class="flex justify-start items-center">
            <i class="fa-solid fa-users"></i>
            <p class="ml-1 text-center text-stone-500 leading-[18px] tracking-wide">Talentos</p>
        </div>

        <p class="text-center ml-auto text-stone-500 leading-[18px] tracking-wide">20</p>
    </div>

    <hr style="border-bottom: 1px solid rgba(200, 200, 200, 0.4); border-radius: 10px;" class="mb-4 w-full" />

    <div class="w-full flex items-center mb-4 text-lg uppercase">
        <div class="flex justify-start items-center">
            <i class="fa-solid fa-eye"></i>
            <p class="ml-1 text-center text-stone-500 leading-[18px] tracking-wide">Vistas del perfil</p>
        </div>

        <p class="text-center ml-auto ml-auto text-stone-500 leading-[18px] tracking-wide">20</p>
    </div>

    <hr style="border-bottom: 1px solid rgba(200, 200, 200, 0.4); border-radius: 10px;" class="mb-4 w-full" />

    <div class="w-full flex items-center mb-4 text-lg uppercase">
        <div class="flex justify-start items-center">
            <i class="fa-solid fa-video"></i>
            <p class="ml-1 text-center text-stone-500 leading-[18px] tracking-wide">Pitches del perfil</p>
        </div>

        <p class="text-center ml-auto text-stone-500 leading-[18px] tracking-wide">20</p>
    </div>

    <hr style="border-bottom: 1px solid rgba(200, 200, 200, 0.4); border-radius: 10px;" class="mb-4 w-full" />

    <div class="w-full flex items-center mb-4 text-lg uppercase">
        <div class="flex justify-start items-center">
            <i class="fa-solid fa-person"></i>
            <p class="ml-1 text-center text-stone-500 leading-[18px] tracking-wide">Exhibiciones</p>
        </div>

        <p class="text-center ml-auto text-stone-500 leading-[18px] tracking-wide">20</p>
    </div>

    <hr style="border-bottom: 1px solid rgba(200, 200, 200, 0.4); border-radius: 10px;" class="mb-4 w-full" />

    <div class="w-full flex items-center mb-4 text-lg uppercase">
        <div class="flex justify-start items-center">
            <i class="fa-solid fa-clipboard-user"></i>
            <p class="ml-1 text-center text-stone-500 leading-[18px] tracking-wide">Vacantes</p>
        </div>

        <p class="text-center ml-auto text-stone-500 leading-[18px] tracking-wide">20</p>
    </div>

    <hr style="border-bottom: 1px solid rgba(200, 200, 200, 0.4); border-radius: 10px;" class="mb-4 w-full" />

    <div class="w-full flex items-center mb-4 text-lg uppercase">
        <div class="flex justify-start items-center">
            <i class="fa-solid fa-images"></i>
            <p class="ml-1 text-center text-stone-500 leading-[18px] tracking-wide">Contenidos</p>
        </div>

        <p class="text-center ml-auto text-stone-500 leading-[18px] tracking-wide">20</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CompanyCard',
};
</script>

<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');

    .card {
        max-width: 350px;
        top: -90px;
        margin-right: auto;
        margin-left: 5%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .logo {
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: 'Poppins', sans-serif;
        font-weight: bold;
        letter-spacing: -20px;
    }

    p {
        font-family: 'Inter', sans-serif;
    }

    .text-icon {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .container-rating {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
</style>