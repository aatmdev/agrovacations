<template>
  <div>
    <header class="header">
      <div class="shadow-lg  bg-white rounded">
        <b-navbar toggleable="lg" type="light" variant="white">
          <b-navbar-brand to="/">
            <img
              src="../assets/BannerB.png"
              class="d-inline-block align-top"
              height="50px"
            />
          </b-navbar-brand>  
          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

          <b-collapse id="nav-collapse" is-nav>
          <b-nav-item id="welcome" href="#" to="/perfilcliente" v-if="client" > 
            Bienvenido <span class="font-weight-bold text-success">{{client.displayName}}</span> 
            </b-nav-item>
            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto">
              <b-navbar-nav>

                <b-nav-item href="#" to="/logincliente" v-if="!client"
                  ><b-icon icon="person-fill"></b-icon> Ingresar</b-nav-item
                >
                <b-nav-item href="#" to="/registrocliente" v-if="!client"
                  ><b-icon icon="person-plus-fill"></b-icon> Registrarse</b-nav-item
                >
              </b-navbar-nav>

              <b-nav-item-dropdown text="Me" right v-if="client">
                <template v-slot:button-content>
                  <b-icon icon="person-fill" aria-hidden="true"></b-icon> Usuario
                </template>
                <b-dropdown-item href="#" to="/perfilcliente">
                  <b-icon icon="person-lines-fill"></b-icon>
                  Perfil</b-dropdown-item
                >
                <b-dropdown-item href="#" to="/misactividades">
                  <b-icon icon="calendar"></b-icon>
                   Mis actividades</b-dropdown-item
                >
                <b-dropdown-item href="#" to="/messages">
                  <b-icon-chat-dots></b-icon-chat-dots>
                   Mensajes</b-dropdown-item
                >
                <b-dropdown-divider></b-dropdown-divider>
                <b-dropdown-item href="#" variant="danger" @click="$emit('logout')">
                  <b-icon icon="power"></b-icon> Salir</b-dropdown-item
                >
              </b-nav-item-dropdown>

              <router-link
                type="button"
                class="btn btn-success"
                style="margin-right: 60px; margin-left: 50px; "
                to="/registrocliente"
                v-if="!client"
                >Descubre aventuras</router-link
              >
              <router-link
                type="button"
                class="btn btn-success"
                style="margin-right: 60px; margin-left: 50px; "
                to="/crearactividad"
                v-if="client"
                >Publica ahora</router-link
              >
              
            </b-navbar-nav>
          </b-collapse>
        </b-navbar>
      </div>
    </header>
  </div>
</template>
<script>
import Vue from 'vue'
import { BootstrapVue,IconsPlugin} from 'bootstrap-vue'
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
export default {
  name: "Home"
};
</script>
<style lang="scss">
.header .navbar {
  background-color: transparent !important;
}

.navbar-light .navbar-nav .nav-link {
  color: #000000 !important;
}

.navbar {
  -webkit-box-shadow: 0 8px 6px -6px #999;
  -moz-box-shadow: 0 8px 6px -6px #999;
  box-shadow: 0 8px 6px -6px #999;
}
#nav a.router-link-exact-active{
  color: #47803e !important;
}
.navbar-expand-md .navbar-nav .nav-link {
  padding-right: 0.9rem !important;
  padding-left: 0.9rem !important;
}
.text-info {
    color: #47803e !important;
}
</style>

<script>
export default {
  name: "navigation",
  props: ["client"]
};
</script>