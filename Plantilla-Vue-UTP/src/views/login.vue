<template>
  <main class="form-signin">
    <form>
      <img class="mb-4" src="@/assets/img/logo.svg" alt="" width="72" />
      <h1 class="h3 mb-3 fw-normal">Favor Inicie sesión</h1>

      <div class="form-floating">
        <input
          type="email"
          class="form-control"
          id="floatingInput"
          placeholder="name@example.com"
        />
        <label for="floatingInput">Correo</label>
      </div>
      <div class="form-floating">
        <input
          type="password"
          class="form-control"
          id="floatingPassword"
          placeholder="Password"
        />
        <label for="floatingPassword">Contraseña</label>
      </div>

      <div class="checkbox mb-3">
        <label> <input type="checkbox" value="remember-me" /> Recordar </label>
      </div>
      <!--       <button class="w-100 btn btn-lg btn-primary" type="submit">Iniciar sesión</button> -->
      <a href="../admin/index.html" class="w-100 btn btn-lg btn-primary"
        >Iniciar sesión</a
      >
      <p class="mt-3 mb-5 mb-3 text-muted">&copy; 2017–2021</p>
    </form>
    <a href="../index.html" class="w-100 btn btn-lg btn-danger"
      >Volver a Inicio</a
    >
  </main>
  <!-- <div class="login">
    <div class="mt-5 login-content">
      <b-form @submit="onSubmit" @reset="onReset" v-if="show">
        <b-form-group
          id="input-group-1"
          label="Email address:"
          label-for="input-1"
          description="We'll never share your email with anyone else."
        >
          <b-form-input
            id="input-1"
            v-model="form.email"
            type="email"
            placeholder="Enter email"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-2" label="Password:" label-for="input-2">
          <b-form-input
            id="input-2"
            v-model="form.name"
            type="password"
            required
          ></b-form-input>
        </b-form-group>        

        <b-form-group id="input-group-4" v-slot="{ ariaDescribedby }">
          <b-form-checkbox-group
            v-model="form.checked"
            id="checkboxes-4"
            :aria-describedby="ariaDescribedby"
          >
            <b-form-checkbox value="me">Check me out</b-form-checkbox>
            <b-form-checkbox value="that">Check that out</b-form-checkbox>
          </b-form-checkbox-group>
        </b-form-group>

        <b-button type="submit" variant="primary" class="mr-2">Submit</b-button>
        <b-button type="reset" variant="danger">Regresar</b-button>
      </b-form>      
    </div>
  </div> -->
</template>

<script>
export default {
  data() {
    return {
      form: {
        email: "",
        name: "",
        food: null,
        checked: [],
      },
      foods: [
        { text: "Select One", value: null },
        "Carrots",
        "Beans",
        "Tomatoes",
        "Corn",
      ],
      show: true,
    };
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      alert(JSON.stringify(this.form));
      this.$router.push("admin");
    },
    onReset(event) {
      event.preventDefault();
      this.$router.push("/");
    },
  },
};
</script>
<style scoped>
@import "../assets/css/login.css";
</style>