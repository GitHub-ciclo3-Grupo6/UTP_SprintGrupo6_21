<template>
  <div>
    <HeaderAdmin></HeaderAdmin>

    <div class="container-fluid">
      <div class="row">
        <NavAdmin :option.sync="option"></NavAdmin>
        <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
          <Dashboard v-if="option == 1"></Dashboard>
          <Pedido v-else-if="option == 2"></Pedido>
          <Producto v-else-if="option == 3"></Producto>
          <Cliente v-else-if="option == 4"></Cliente>
          <Usuario v-else-if="option == 5"></Usuario>
        </main>
      </div>
    </div>
  </div>
  <!-- <div class="admin">
    <b-nav :class="[ !visibleSidebar ? 'd-none' : '' ]" vertical class="sidebar-content">
      <div>
        <h1>Menu</h1>
      </div>
      <b-nav-item @click="changeOption(1)" :class="[ option==1 ? 'active' : '']">Categorias</b-nav-item>
      <b-nav-item @click="changeOption(2)" :class="[ option==2 ? 'active' : '']">Articulos</b-nav-item>
      <b-nav-item @click="changeOption(3)" :class="[ option==3 ? 'active' : '']">Usuarios</b-nav-item>
    </b-nav>
    <div class="content-custom">
      <b-navbar type="dark" variant="dark">
        <div class="d-flex align-items-center mr-3">
          <span @click="isVisibleSidebar" class="navbar-toggler-icon"></span>
        </div>
        <b-navbar-nav>          
          <router-link to="/" class="nav-link">Home</router-link>          
        </b-navbar-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown text="User" right>
            <b-dropdown-item href="#">Account</b-dropdown-item>
            <b-dropdown-item><router-link to="/login">logout</router-link></b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-navbar>
      <div class="container-fluid">
        <div class="m-5">
          <Category v-if="option == 1"/>
          <Article v-else-if="option == 2"/>
          <User v-else-if="option == 3"/>
        </div>
      </div>
    </div>
  </div> -->
</template>
<script>
/* import Category from "../components/admin/category.vue";
import Article from "../components/admin/article.vue";
import User from "../components/admin/user.vue"; */
import HeaderAdmin from "@/components/admin/header.vue";
import NavAdmin from "@/components/admin/nav.vue";
import Dashboard from "@/components/admin/body/dashboard.vue";
import Pedido from "@/components/admin/body/pedido.vue";
import Producto from "@/components/admin/body/producto.vue";
import Cliente from "@/components/admin/body/cliente.vue";
import Usuario from "@/components/admin/body/usuario.vue";

export default {
  components: {
    HeaderAdmin,
    NavAdmin,
    Dashboard,
    Pedido,
    Producto,
    Cliente,
    Usuario,
    /*  Category,
    Article,
    User, */
  },
  data() {
    return {
      option: 1,
      visibleSidebar: true,
    };
  },
  methods: {
    changeOption(i) {
      this.option = i;
    },
    isVisibleSidebar() {
      this.visibleSidebar = !this.visibleSidebar;
    },
  },
};
</script>
<style scoped>
@import "../assets/css/dashboard.css";
</style>