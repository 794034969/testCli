<template>
    <section>
        <Header/>
        <router-view/>
        <Footer/>
    </section>
</template>
<script lang="ts">
    import { Component, Vue } from "vue-property-decorator"
    import  Header from '@/components/Header.vue'
    import  Footer from '@/components/Footer.vue'
    @Component({
        components:{
            Header,Footer
        }
    })
    export default class About extends Vue{
        
    }
</script>