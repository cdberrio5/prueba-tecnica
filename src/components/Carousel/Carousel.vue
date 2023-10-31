<template>
    <div class="w-full grow shrink basis-0 h-[375px] justify-center items-center gap-4 flex">
        <carousel :items-to-show="1">
            <slide v-for="slide in 10" :key="slide">
                <div class="w-56 mr-4 bg-white rounded-[10px] border border-slate-200 flex-col justify-center items-start inline-flex">
                    <img class="w-full h-[73px]" src="@/assets/work.png" />
                    <div class="self-stretch px-3 py-2 bg-neutral-50 justify-between items-center inline-flex">
                        <div class="justify-start items-center gap-2 flex">
                            <div class="text-stone-500 text-xs font-normal leading-[18px] tracking-wide">Experticia</div>
                        </div>
                        <div class="w-6 h-6 px-[5px] py-1 justify-center items-center flex">
                            <i class="fa-regular fa-share-from-square"></i>
                        </div>
                    </div>
                    <div class="self-stretch h-[262px] px-3 pt-[11px] pb-3 bg-white flex-col justify-start items-start gap-4 inline-flex">
                        <div class="self-stretch h-[181px] flex-col justify-start items-start gap-4 flex">
                            <div class="self-stretch h-[129px] flex-col justify-start items-start gap-2 flex">
                                <div class="flex-col justify-start items-start gap-[5px] flex">
                                    <div class="w-full text-indigo-900 text-base font-normal  leading-relaxed tracking-wide">Lider UX/UI</div>
                                    <div class="px-[5px] bg-sky-100 rounded-[10px] justify-center items-center gap-2 inline-flex">
                                        <div class="text-center text-sky-500 text-xs font-normal  leading-[18px] tracking-wide">Creada por organización: Nombre</div>
                                    </div>
                                </div>
                                <div class="self-stretch text-stone-500 text-xs font-normal leading-[18px] tracking-wide">¿Cómo podrías crear un plan de ejecución a seis meses desde tu área de conocimiento para generar valor en una organización?</div>
                            </div>
                            <div class="self-stretch justify-between items-center inline-flex mt-4">
                                <div class="flex-col justify-start items-center gap-[5px] inline-flex">
                                    <div class="px-[5px] bg-pink-400 rounded-[10px] justify-center items-center gap-2 inline-flex">
                                        <div class="text-center text-white text-xs font-normal  leading-[18px] tracking-wide">60</div>
                                    </div>
                                    <div class="text-stone-500 text-[11px] font-medium  leading-[13.20px] tracking-wide">Vistas</div>
                                </div>
                                <div class="flex-col justify-start items-center gap-[5px] inline-flex">
                                    <div class="px-[5px] bg-pink-400 rounded-[10px] justify-center items-center gap-2 inline-flex">
                                        <div class="text-center text-white text-xs font-normal  leading-[18px] tracking-wide">30</div>
                                    </div>
                                    <div class="text-stone-500 text-[11px] font-medium  leading-[13.20px] tracking-wide">Comentarios</div>
                                </div>
                                <div class="flex-col justify-start items-center gap-[5px] inline-flex">
                                    <div class="px-[5px] bg-pink-400 rounded-[10px] justify-center items-center gap-2 inline-flex">
                                        <div class="text-center text-white text-xs font-normal  leading-[18px] tracking-wide">41</div>
                                    </div>
                                    <div class="text-stone-500 text-[11px] font-medium  leading-[13.20px] tracking-wide">Pitches</div>
                                </div>
                            </div>
                        </div>
                        <div class="h-[26px] px-3 py-[5px] bg-pink-600 mt-4 rounded-md justify-center items-center gap-2.5 inline-flex">
                            <div class="text-white text-[11px] font-medium  leading-[13.20px] tracking-wide">Aplicar a vacante</div>
                        </div>
                    </div>
                </div>
                <div class="w-56 mr-4 bg-white rounded-[10px] border border-slate-200 flex-col justify-center items-start inline-flex">
                    <img class="w-full h-[73px]" src="@/assets/work.png" />
                    <div class="self-stretch px-3 py-2 bg-neutral-50 justify-between items-center inline-flex">
                        <div class="justify-start items-center gap-2 flex">
                            <div class="text-stone-500 text-xs font-normal leading-[18px] tracking-wide">Experticia</div>
                        </div>
                        <div class="w-6 h-6 px-[5px] py-1 justify-center items-center flex">
                            <i class="fa-regular fa-share-from-square"></i>
                        </div>
                    </div>
                    <div class="self-stretch h-[262px] px-3 pt-[11px] pb-3 bg-white flex-col justify-start items-start gap-4 inline-flex">
                        <div class="self-stretch h-[181px] flex-col justify-start items-start gap-4 flex">
                            <div class="self-stretch h-[129px] flex-col justify-start items-start gap-2 flex">
                                <div class="flex-col justify-start items-start gap-[5px] flex">
                                    <div class="w-full text-indigo-900 text-base font-normal  leading-relaxed tracking-wide">Lider UX/UI</div>
                                    <div class="px-[5px] bg-sky-100 rounded-[10px] justify-center items-center gap-2 inline-flex">
                                        <div class="text-center text-sky-500 text-xs font-normal  leading-[18px] tracking-wide">Creada por organización: Nombre</div>
                                    </div>
                                </div>
                                <div class="self-stretch text-stone-500 text-xs font-normal leading-[18px] tracking-wide">¿Cómo podrías crear un plan de ejecución a seis meses desde tu área de conocimiento para generar valor en una organización?</div>
                            </div>
                            <div class="self-stretch justify-between items-center inline-flex mt-4">
                                <div class="flex-col justify-start items-center gap-[5px] inline-flex">
                                    <div class="px-[5px] bg-pink-400 rounded-[10px] justify-center items-center gap-2 inline-flex">
                                        <div class="text-center text-white text-xs font-normal  leading-[18px] tracking-wide">60</div>
                                    </div>
                                    <div class="text-stone-500 text-[11px] font-medium  leading-[13.20px] tracking-wide">Vistas</div>
                                </div>
                                <div class="flex-col justify-start items-center gap-[5px] inline-flex">
                                    <div class="px-[5px] bg-pink-400 rounded-[10px] justify-center items-center gap-2 inline-flex">
                                        <div class="text-center text-white text-xs font-normal  leading-[18px] tracking-wide">30</div>
                                    </div>
                                    <div class="text-stone-500 text-[11px] font-medium  leading-[13.20px] tracking-wide">Comentarios</div>
                                </div>
                                <div class="flex-col justify-start items-center gap-[5px] inline-flex">
                                    <div class="px-[5px] bg-pink-400 rounded-[10px] justify-center items-center gap-2 inline-flex">
                                        <div class="text-center text-white text-xs font-normal  leading-[18px] tracking-wide">41</div>
                                    </div>
                                    <div class="text-stone-500 text-[11px] font-medium  leading-[13.20px] tracking-wide">Pitches</div>
                                </div>
                            </div>
                        </div>
                        <div class="h-[26px] px-3 py-[5px] bg-pink-600 mt-4 rounded-md justify-center items-center gap-2.5 inline-flex">
                            <div class="text-white text-[11px] font-medium  leading-[13.20px] tracking-wide">Aplicar a vacante</div>
                        </div>
                    </div>
                </div>
                <div class="w-56 mr-4 bg-white rounded-[10px] border border-slate-200 flex-col justify-center items-start inline-flex">
                    <img class="w-full h-[73px]" src="@/assets/work.png" />
                    <div class="self-stretch px-3 py-2 bg-neutral-50 justify-between items-center inline-flex">
                        <div class="justify-start items-center gap-2 flex">
                            <div class="text-stone-500 text-xs font-normal leading-[18px] tracking-wide">Experticia</div>
                        </div>
                        <div class="w-6 h-6 px-[5px] py-1 justify-center items-center flex">
                            <i class="fa-regular fa-share-from-square"></i>
                        </div>
                    </div>
                    <div class="self-stretch h-[262px] px-3 pt-[11px] pb-3 bg-white flex-col justify-start items-start gap-4 inline-flex">
                        <div class="self-stretch h-[181px] flex-col justify-start items-start gap-4 flex">
                            <div class="self-stretch h-[129px] flex-col justify-start items-start gap-2 flex">
                                <div class="flex-col justify-start items-start gap-[5px] flex">
                                    <div class="w-full text-indigo-900 text-base font-normal  leading-relaxed tracking-wide">Lider UX/UI</div>
                                    <div class="px-[5px] bg-sky-100 rounded-[10px] justify-center items-center gap-2 inline-flex">
                                        <div class="text-center text-sky-500 text-xs font-normal  leading-[18px] tracking-wide">Creada por organización: Nombre</div>
                                    </div>
                                </div>
                                <div class="self-stretch text-stone-500 text-xs font-normal leading-[18px] tracking-wide">¿Cómo podrías crear un plan de ejecución a seis meses desde tu área de conocimiento para generar valor en una organización?</div>
                            </div>
                            <div class="self-stretch justify-between items-center inline-flex mt-4">
                                <div class="flex-col justify-start items-center gap-[5px] inline-flex">
                                    <div class="px-[5px] bg-pink-400 rounded-[10px] justify-center items-center gap-2 inline-flex">
                                        <div class="text-center text-white text-xs font-normal  leading-[18px] tracking-wide">60</div>
                                    </div>
                                    <div class="text-stone-500 text-[11px] font-medium  leading-[13.20px] tracking-wide">Vistas</div>
                                </div>
                                <div class="flex-col justify-start items-center gap-[5px] inline-flex">
                                    <div class="px-[5px] bg-pink-400 rounded-[10px] justify-center items-center gap-2 inline-flex">
                                        <div class="text-center text-white text-xs font-normal  leading-[18px] tracking-wide">30</div>
                                    </div>
                                    <div class="text-stone-500 text-[11px] font-medium  leading-[13.20px] tracking-wide">Comentarios</div>
                                </div>
                                <div class="flex-col justify-start items-center gap-[5px] inline-flex">
                                    <div class="px-[5px] bg-pink-400 rounded-[10px] justify-center items-center gap-2 inline-flex">
                                        <div class="text-center text-white text-xs font-normal  leading-[18px] tracking-wide">41</div>
                                    </div>
                                    <div class="text-stone-500 text-[11px] font-medium  leading-[13.20px] tracking-wide">Pitches</div>
                                </div>
                            </div>
                        </div>
                        <div class="h-[26px] px-3 py-[5px] bg-pink-600 mt-4 rounded-md justify-center items-center gap-2.5 inline-flex">
                            <div class="text-white text-[11px] font-medium  leading-[13.20px] tracking-wide">Aplicar a vacante</div>
                        </div>
                    </div>
                </div>
            </slide>

            <template #addons>
                <navigation />
            </template>
        </carousel>
    </div>
</template>

<script>
    import 'vue3-carousel/dist/carousel.css'
    import { Carousel, Slide, Navigation } from 'vue3-carousel'

    export default {
        name: 'App',
        components: {
            Carousel,
            Slide,
            Navigation,
        },
    }
</script>

<style scoped>
    .carousel {
        max-width: 800px;
    }

    .carousel__slide {
        padding: 10px;
    }
</style>