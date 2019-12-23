<template>
    <section>
        <el-row>
            <el-col :span="4">
                <div style="background-color: rebeccapurple;width: 200px;height: 80px;"></div>
            </el-col>
            <el-col :span="16">
                <div style="background-color: rebeccapurple;width: 200px;height: 80px;"></div>
            </el-col>
            <el-col :span="4">
                <div style="background-color: rebeccapurple;width: 200px;height: 80px;"></div>
            </el-col>
        </el-row>
    </section>
</template>
<script lang="ts">
    import { Component,Vue } from 'vue-property-decorator'
    @Component({})
    export default class Header extends Vue{

    }

</script>