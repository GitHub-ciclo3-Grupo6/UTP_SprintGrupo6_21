<template>
  <nav
    id="sidebarMenu"
    class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse"
  >
    <div class="position-sticky pt-3">
      <ul class="nav flex-column">
        <li class="nav-item">
          <a
            class="nav-link"
            @click="$emit('update:option', 1)"
            :class="[option == 1 ? 'active' : '']"
            aria-current="page"
            href="#"
          >
            <span data-feather="home"></span>
            Dashboard
          </a>
        </li>
        <li class="nav-item">
          <a
            class="nav-link"
            @click="$emit('update:option', 2)"
            :class="[option == 2 ? 'active' : '']"
            href="#"
          >
            <span data-feather="file"></span>
            Pedidos
          </a>
        </li>
        <li class="nav-item">
          <a
            class="nav-link"
            @click="$emit('update:option', 3)"
            :class="[option == 3 ? 'active' : '']"
            href="#"
          >
            <span data-feather="shopping-cart"></span>
            Productos
          </a>
        </li>
        <li class="nav-item">
          <a
            class="nav-link"
            @click="$emit('update:option', 4)"
            :class="[option == 4 ? 'active' : '']"
            href="#"
          >
            <span data-feather="users"></span>
            Clientes
          </a>
        </li>
        <li class="nav-item">
          <a
            class="nav-link"
            @click="$emit('update:option', 5)"
            :class="[option == 5 ? 'active' : '']"
            href="#"
          >
            <span data-feather="users"></span>
            Usuarios
          </a>
        </li>
        <li class="nav-item">
          <a
            class="nav-link"
            @click="$emit('update:option', 6)"
            :class="[option == 6 ? 'active' : '']"
            href="#"
          >
            <span data-feather="bar-chart-2"></span>
            Reportes
          </a>
        </li>
      </ul>

      <h6
        class="
          sidebar-heading
          d-flex
          justify-content-between
          align-items-center
          px-3
          mt-4
          mb-1
          text-muted
        "
      >
        <span>Reportes guardados</span>
        <a class="link-secondary" href="#" aria-label="Add a new report">
          <span data-feather="plus-circle"></span>
        </a>
      </h6>
      <ul class="nav flex-column mb-2">
        <li class="nav-item">
          <a
            class="nav-link"
            @click="$emit('update:option', 7)"
            :class="[option == 7 ? 'active' : '']"
            href="#"
          >
            <span data-feather="file-text"></span>
            Mes actual
          </a>
        </li>
        <li class="nav-item">
          <a
            class="nav-link"
            @click="$emit('update:option', 8)"
            :class="[option == 8 ? 'active' : '']"
            href="#"
          >
            <span data-feather="file-text"></span>
            6 Meses anteriores
          </a>
        </li>
        <li class="nav-item">
          <a
            class="nav-link"
            @click="$emit('update:option', 9)"
            :class="[option == 9 ? 'active' : '']"
            href="#"
          >
            <span data-feather="file-text"></span>
            1 Año
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>
<script>
export default {
  name: "NavAdmin",
  props: {
    option: Number,
  },
};
</script>