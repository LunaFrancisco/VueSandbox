<template>
    <div class="page">
        <div class="Text" :style="{
            marginBottom: '8rem',
            color: 'white',
            textAlign: 'center',
        }">
            <h1>¡ENCUENTRA TU MEJOR PASAJE EN BUS!</h1>
            <h2>La forma más fácil de comprar pasajes online.</h2>
        </div>

        <div class="form">
            <n-input-group>
                <div class="ida">
                    <a :style="{ color: 'white' }">ida</a>
                    <n-select :style="{ width: '16rem' }" :options="Origen" placeholder="Origen" />
                </div>
                <div class="vuelta">
                    <a :style="{ color: 'white' }">vuelta</a>
                    <n-select :style="{ width: '16rem' }" :options="Destino" placeholder="Destino" />
                </div>
                <div class="fecha-ida">
                    <a :style="{ color: 'white' }">Fecha ida</a>
                    <n-date-picker :style="{ width: '16rem' }" v-model:value="timestamp" placeholder="Fecha ida"
                        type="date" />
                </div>
                <div class="fecha-vuelta">
                    <a :style="{ color: 'white' }">Fecha vuelta</a>
                    <n-date-picker :style="{ width: '16rem' }" v-model:value="timestamp" placeholder="Fecha vuelta"
                        type="date" />
                </div>

                <div class="buscar">
                    <n-button type="primary">
                        Buscar
                    </n-button>
                </div>
            </n-input-group>
        </div>
    </div>
</template>

<style>
.form {
    margin: 5rem;
    padding-bottom: 25rem;
    padding-left: 20rem;
}


.buscar {
    margin-top: 1.4rem;
}

.page {
    background-image: url("https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YnVzfGVufDB8fDB8fA%3D%3D&w=1000&q=80");
    background-repeat: no-repeat, repeat;
    background-position: center;
    background-size: cover;

}

.Text {
    color: white;
    text-align: center;
    padding: 10rem;
}
</style>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
    setup() {
        return {
            Origen: ref([
                {
                    label: 'Rancagua',
                    value: 'Rancagua'
                },
                {
                    label: 'Santiago',
                    value: 'Santiago'
                },
                {
                    label: 'Valparaiso',
                    value: 'Valparaiso'
                },
                {
                    label: 'Atacama',
                    value: 'Atacama'
                },
                {
                    label: 'Los Lagos',
                    value: 'Los Lagos'
                },
                {
                    label: 'Antofagasta',
                    value: 'Antofagasta'
                },
            ]),
            Destino: ref([
                {
                    label: 'Rancagua',
                    value: 'Rancagua'
                },
                {
                    label: 'Santiago',
                    value: 'Santiago'
                },
                {
                    label: 'Valparaiso',
                    value: 'Valparaiso'
                },
                {
                    label: 'Atacama',
                    value: 'Atacama'
                },
                {
                    label: 'Los Lagos',
                    value: 'Los Lagos'
                },
                {
                    label: 'Antofagasta',
                    value: 'Antofagasta'
                },
            ]),
            cascaderOptions: ref([
                {
                    label: 'option-1',
                    value: 'option-1',
                    children: [
                        {
                            label: 'option-1-1',
                            value: 'option-1-1'
                        }
                    ]
                }
            ])
        }
    }
})
</script>
<style >
</style>