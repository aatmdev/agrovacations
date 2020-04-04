import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import LoginCliente from "../views/LoginCliente.vue";
import LoginEntidad from "../views/LoginEntidad.vue";
import PerfilCliente from "../views/PerfilCliente.vue";
import PerfilEntidad from "../views/PerfilEntidad.vue";
import RegistroCliente from "../views/RegistroCliente.vue";
import RegistroEntidad from "../views/RegistroEntidad.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/logincliente",
    name: "LoginCliente",
    component: LoginCliente
  },
  {
    path: "/loginentidad",
    name: "LoginEntidad",
    component: LoginEntidad
  },
  {
    path: "/perfilcliente",
    name: "PerfilCliente",
    component: PerfilCliente
  },
  {
    path: "/perfilentidad",
    name: "PerfilEntidad",
    component: PerfilEntidad
  },
  {
    path: "/registrocliente",
    name: "RegistroCliente",
    component: RegistroCliente
  },
  {
    path: "/registroentidad",
    name: "RegistroEntidad",
    component: RegistroEntidad
  },
  {
    path: "*",
    redirect: '/'
  }
];

const router = new VueRouter({
  routes
});

export default router;