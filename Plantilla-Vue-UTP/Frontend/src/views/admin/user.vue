<template>
  <div>
    <HeaderAdmin></HeaderAdmin>

    <div class="container-fluid">
      <div class="row">
        <NavAdmin :option.sync="option"></NavAdmin>
        <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
          <div
            class="
              d-flex
              justify-content-between
              flex-wrap flex-md-nowrap
              align-items-center
              pt-3
              pb-2
              mb-3
              border-bottom
            "
          >
            <h1 class="h2">Usuarios</h1>
            <div class="btn-toolbar mb-2 mb-md-0">
              <div class="btn-group me-2">
                <button type="button" class="btn btn-sm btn-outline-secondary">
                  Compartir
                </button>
                <button type="button" class="btn btn-sm btn-outline-secondary">
                  Exportar
                </button>
              </div>
              <button
                type="button"
                class="btn btn-sm btn-outline-secondary dropdown-toggle"
                data-bs-toggle="modal"
                data-bs-target="#productModal"
              >
                <span data-feather="product"></span>
                Crear Producto
              </button>
            </div>
          </div>
          <div class="table-responsive">
            <table class="table table-striped table-sm">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Header</th>
                  <th scope="col">Header</th>
                  <th scope="col">Header</th>
                  <th scope="col">Header</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1,001</td>
                  <td>random</td>
                  <td>data</td>
                  <td>placeholder</td>
                  <td>text</td>
                </tr>
              </tbody>
            </table>
          </div>

          <!-- Modal -->
          <div
            class="modal fade"
            id="productModal"
            tabindex="-1"
            aria-labelledby="productModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="productModalLabel">
                    Modal title
                  </h5>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="modal-body">...</div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="button" class="btn btn-primary">
                    Save changes
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  </div>
</template>
<script>
import HeaderAdmin from "@/components/admin/header.vue";
import NavAdmin from "@/components/admin/nav.vue";

export default {
  components: {
    HeaderAdmin,
    NavAdmin,
  },
  data() {
    return {
      option: 5,
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
@import "../../assets/css/dashboard.css";
</style>