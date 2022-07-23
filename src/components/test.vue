<script>
import { defineComponent } from 'vue'
import { NConfigProvider, NInput, NDatePicker, NSpace } from 'naive-ui'
// theme
import { createTheme, inputDark, datePickerDark } from 'naive-ui'


export default defineComponent({
    components: {
        NConfigProvider,
        NInput,
        NDatePicker,
        NSpace
    },
    setup() {
        return {
            darkTheme: createTheme([inputDark, datePickerDark]),

        }
    }
})
</script>

<template>
    <NConfigProvider theme={this.darkTheme}>
       
            <h1>Hello, world!</h1> 
            <p>This is a template for a simple Vue.js app.</p>
        
        <n-config-provider :theme="darkTheme" :locale="zhCN" :date-locale="dateZhCN">
            <n-space vertical>
                <n-input />
                <n-date-picker />
            </n-space>
        </n-config-provider>
    </NConfigProvider>
</template>

<style>
body {
    background: black;
}
</style>