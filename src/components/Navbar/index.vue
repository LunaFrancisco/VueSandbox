<template>
    <div class="nav">
   
            <div class="bar">
                <img src="../../assets/images/ministeriobar.svg" />
        </div>
        <div class="nav-left">
            <router-link to="/claveunica">   
                <img src="../../assets/images/logo.svg" />
            </router-link>
        </div>
        <div class="content">
            <router-link to="/activa">
                <a>Activa</a>    
            </router-link>
            <router-link to="/recupera">
                <a>Recupera</a>    
            </router-link>
            <router-link to="/actualiza">
                <a>Actualiza</a>    
            </router-link>
            <router-link to="/instituciones_publicas">
                <a>Instituciones Públicas</a>    
            </router-link>
            <router-link to="/login">
                <button><img src="../../assets/images/claveunica.svg" /><a>Iniciar sesión</a></button>
            </router-link>
        </div>
        <div class="left-info">
            <h4 class="uniquekey">ClaveÚnica</h4>
            <h2 class="description">Es tu identidad digital, úsala desde el trabajo, la casa o tu celular</h2>
            <p>Accede a los servicios del Estado de manera fácil, segura y confiable.</p>        
        </div>
        <div class="right-info">
            <div class="learn_more"> <a href="">Aprende más</a></div>
            <img src="../../assets/images/ilustracion_home.svg" />
        </div>
    </div>
 

</template>


<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    setup() {
        return {
            name: 'Nabvar'
        }
    }
})
</script>
<style >
 @import url('https://fonts.googleapis.com/css?family=Roboto Slab');
    .bar {
        position:absolute;
        top:0;
        padding-top: 0%;
        padding-left: 17rem;
    }
    .nav {
        display: flex;
        /* justify-content: space-around; */
        /* align-items: center; */
        padding: 1.8rem;
        background-color: #093F75;
        height: 30.5rem;
        
        /* border-bottom: 1px solid #ccc; */
    }
    .nav-left {
    position: absolute;
    margin-left: 17rem; 
    }
    .content{
        padding-left: 44%;
    }
    .content > *{
        margin: 0 1rem;
        justify-content: center;
    }
    a {
        /* text-decoration: none; */
        color: #f5f5f5;
        font-size: 16.5px;
    }
    button {
        background-color: #106cc4;
        border-color:  #106cc4;
        padding: 5px;
        font-size: 17px;
        color: #f5f5f5;
    }
    button a {
        margin: 1rem 1rem;
    }
    .left-info {
        width: 35%;
        position: absolute;
        margin-left: 17.6rem;
        margin-top: 6.1rem;
    }
    .left-info p {
        position: absolute;
  color:#f5f5f5;
  font-size: 18px;
  bottom: -0.5rem;

    }
    .uniquekey {
        position: absolute;
        font-size: 24px;
        font-family: 'Roboto Slab';
        color: white;
        

    }
    h2{
        padding-top: 1.9rem;
        font-size: 3rem;
        font-family: 'Roboto Slab';
        color: white;
    }
    .right-info {
        width: 35%;
        position: absolute;
        margin-left: 53rem;
        margin-top: 6.1rem;
    }
    .learn_more {
        position: absolute;
        background-color: #a0a4b4;
        height: 51px;
        top: 16rem;
        width: 8rem;
        left: 7rem;
        /* padding:  10px; */
        padding-top: 20px;
        padding-left: 40px; 
        padding-right: 40px; 
        
    }
    .learn_more a{
        color: #f5f5f5;
        font-size: 1.2rem;

    } 
</style>