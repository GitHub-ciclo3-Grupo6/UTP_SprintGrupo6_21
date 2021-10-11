<template>
  <div>
    <HeaderAdmin></HeaderAdmin>

    <div class="container-fluid">
      <div class="row">
        <NavAdmin :option.sync="option"></NavAdmin>
        <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
          <div
            class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom"
          >
            <h1 class="h2">Productos</h1>
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
                @click="editar = false"
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
                  <th scope="col">Code</th>
                  <th scope="col">Nombre</th>
                  <th scope="col">Cantidad</th>
                  <th scope="col">Precio C</th>
                  <th scope="col">Precio V</th>
                  <th scope="col">Ops.</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, index) in productos" :key="index">
                  <th scope="row">{{ item._id }}</th>
                  <td>{{ item.code }}</td>
                  <td>{{ item.name }}</td>
                  <td>{{ item.amount }}</td>
                  <td>{{ item.purchasePrice }}</td>
                  <td>{{ item.salePrice }}</td>
                  <td>
                    <button
                      class="btn btn-danger btn-sm mx-2"
                      @click="questionDelete(item)"
                      data-bs-toggle="modal"
                      data-bs-target="#deleteModal"
                    >
                      Eliminar
                    </button>
                    <button
                      class="btn btn-warning btn-sm mx-2"
                      @click="questionEdit(item)"
                      data-bs-toggle="modal"
                      data-bs-target="#productModal"
                    >
                      Editar
                    </button>
                  </td>
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
                    Crear producto
                  </h5>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="modal-body">
                  <form action="">
                    <div class="input-group mb-3">
                      <span class="input-group-text" id="basic-addon1">
                        Codigo
                      </span>
                      <input
                        v-model="producto.code"
                        type="text"
                        class="form-control"
                        placeholder="Codigo"
                        aria-describedby="basic-addon1"
                      />
                    </div>

                    <div class="input-group mb-3">
                      <span class="input-group-text" id="basic-addon2">
                        Nombre
                      </span>
                      <input
                        v-model="producto.name"
                        type="text"
                        class="form-control"
                        placeholder="Nombre"
                        aria-label="Nombre"
                        aria-describedby="basic-addon2"
                      />
                    </div>
                    <div class="input-group mb-3">
                      <span class="input-group-text" id="basic-addon3">
                        Cantidad
                      </span>
                      <input
                        v-model="producto.amount"
                        type="text"
                        class="form-control"
                        placeholder="Cantidad"
                        id="basic-url"
                        aria-describedby="basic-addon3"
                      />
                    </div>

                    <div class="input-group mb-3">
                      <span class="input-group-text">Precio C.</span>
                      <input
                        v-model="producto.purchasePrice"
                        type="text"
                        class="form-control"
                        placeholder="Precio de compra"
                        aria-label="Amount (to the nearest dollar)"
                      />
                      <span class="input-group-text">.00</span>
                    </div>

                    <div class="input-group mb-3">
                      <span class="input-group-text">Precio V.</span>
                      <input
                        v-model="producto.salePrice"
                        type="text"
                        class="form-control"
                        placeholder="Precio Venta"
                        aria-label="Server"
                      />
                    </div>

                    <div class="input-group">
                      <span class="input-group-text">With textarea</span>
                      <textarea
                        class="form-control"
                        aria-label="With textarea"
                      ></textarea>
                    </div>
                  </form>
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Cerrar
                  </button>
                  <button
                    type="button"
                    class="btn btn-primary"
                    v-if="(editar == false)"
                    @click="registrarProducto(producto)"
                  >
                    Registrar
                  </button>
                  <button
                    type="button"
                    class="btn btn-primary"
                    v-if="editar"
                    @click="editProducto()"
                  >
                    Editar
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div
            class="modal fade"
            id="deleteModal"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">
                    Eliminar producto [{{ productoED.name }}]
                  </h5>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="modal-body">
                  ¿Seguro de eliminar el producto [{{ productoED.code }}] - [{{
                    productoED.name
                  }}] ?
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Cancelar
                  </button>
                  <button
                    type="button"
                    class="btn btn-primary"
                    @click="deleteProducto(productoED)"
                  >
                    Eliminar
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
import HeaderAdmin from '@/components/admin/header.vue'
import NavAdmin from '@/components/admin/nav.vue'
import axios from 'axios'
import { mapState } from 'vuex'
export default {
  components: {
    HeaderAdmin,
    NavAdmin,
  },
  data() {
    return {
      productos: [],
      producto: {
        code: '1',
        name: 'Cocacola',
        amount: '123',
        purchasePrice: '1231232',
        salePrice: '1231232',
      },
      productoED: {
        _id: '',
        code: '',
        name: '',
      },
      option: 3,
      visibleSidebar: true,
      editar: false,
    }
  },
  created() {
    this.listarProductos()
  },
  computed: {
    ...mapState(['token']),
  },
  methods: {
    listarProductos() {
      axios
        .get('/admin/product/all', { headers: { 'auth-token': this.token } })
        .then((res) => {
          console.log(res.data)
          this.productos = res.data
        })
        .catch((e) => {
          console.log(e.response)
        })
    },
    registrarProducto(producto) {
      axios
        .post('/admin/product/register', producto, {
          headers: { 'auth-token': this.token },
        })
        .then((res) => {
          console.log(res.data)
          this.productos.push(res.data.data)
        })
        .catch((e) => {
          console.log(e.response)
        })
    },
    questionDelete(producto) {
      this.productoED = producto
    },
    questionEdit(producto) {
      this.producto = producto
      this.editar = true
    },
    deleteProducto(producto) {
      axios
        .delete('/admin/product/' + producto._id, {
          headers: { 'auth-token': this.token },
        })
        .then((res) => {
          console.log(res.data)
          const index = this.productos.findIndex(
            (item) => item._id === res.data._id,
          )
          this.productos.splice(index, 1)
        })
        .catch((e) => {
          console.log(e.response)
        })
    },
    editProducto() {
      axios
        .put('/admin/product/' + this.producto._id, this.producto, {
          headers: { 'auth-token': this.token },
        })
        .then((res) => {
          console.log(res.data)
          const index = this.productos.findIndex(
            (item) => item._id === res.data._id,
          )
          this.productos[index] = res.data
        })
        .catch((e) => {
          console.log(e.response)
        })
    },
    changeOption(i) {
      this.option = i
    },
    isVisibleSidebar() {
      this.visibleSidebar = !this.visibleSidebar
    },
  },
}
</script>
<style scoped>
@import '../../assets/css/dashboard.css';
</style>
