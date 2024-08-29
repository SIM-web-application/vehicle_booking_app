<template>
    <div>
        <div class="flex justify-between p-2">
            <img src="~/public/img/logo-car.png" width="60px" height="60px" alt="">
            <!-- <div class="icon cursor-pointer flex flex-end items-center" id="icon" @click="toggleMenu">
                <Icon name="heroicons-bars-4-20-solid" />
            </div> -->
            <div class="flex items-center">
                <ul v-if="isMenuVisible" class="flex flex-col absolute top-14 left-28 bg-white shadow-lg rounded-lg p-3 gap-2">
                    <li>Giới thiệu</li>
                    <li>Dịch vụ</li>
                    <li>Liên hệ</li>
                </ul>
            </div>
            <div class="flex items-center gap-3">
                <div class="icon cursor-pointer flex flex-end items-center" id="icon" @click="toggleMenu">
                    <Icon name="heroicons-bars-4-20-solid" />
                </div>
                <btndark/>
                <p>Login</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const isMenuVisible = ref(false);

const toggleMenu = () => {
    isMenuVisible.value = !isMenuVisible.value;
};
</script>

<style scoped>
.icon {
    cursor: pointer;
}
</style>
