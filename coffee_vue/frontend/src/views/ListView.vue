<template>
    <div>
        <h1>주문목록</h1>
        <ul>
            <li v-for="order in vueList" :key="order.id">
                주문 번호: {{ order.id }}, 주문 명: {{ order.name }}
            </li>
        </ul>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            vueList: []
        }
    },
    methods: {
        async getList() {
            try {
                const res = await axios.get("http://localhost:8081/list");
                this.vueList = res.data;
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }
    },
    mounted() {
        this.getList();
    }
}
</script>

<style>

</style>
