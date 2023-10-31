<template>
    <div class="p-10">
        <div class="w-full bg-white mt-3 px-4 py-2.5 rounded-[10px] justify-start items-center gap-4 inline-flex">
            <div class="text-center text-indigo-900 text-xl font-bold leading-[25px] tracking-wide">Publicados recientemente</div>
        </div>

        <div class="w-full py-4 justify-start items-end gap-2 inline-flex">
            <Carousel />
        </div>

        <div class="w-full bg-white mt-3 px-4 py-2.5 rounded-[10px] justify-start items-center gap-4 inline-flex">
            <div class="text-center text-indigo-900 text-xl font-bold leading-[25px] tracking-wide">Publicados recientemente</div>
        </div>

        <div class="w-full py-4 justify-start items-end gap-2 inline-flex">
            <Carousel />
        </div>
    </div>
</template>

<script>
    import Carousel from '@/components/Carousel/Carousel.vue';

    export default {
        name: "vacanciePage",
        components: {
            Carousel
        }
    }
</script>


<style scoped>
</style>