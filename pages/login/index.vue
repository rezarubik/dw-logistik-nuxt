<template>
  <div class="container-fluid">
    <div class="row justify-content-center">
      <div class="col-xl-10 col-lg-12 col-md-9">
        <div class="card o-hidden border-0 shadow-lg my-5">
          <div class="card-body p-0">
            <!-- Nested Row within Card Body -->
            <div class="row">
              <div class="col-lg-6 d-none d-lg-block bg-login-image"></div>
              <div class="col-lg-6">
                <div class="p-5">
                  <div class="text-center">
                    <h1 class="h4 text-gray-900 mb-4">Welcome Back!</h1>
                  </div>
                  <form class="user">
                    <div class="form-group">
                      <input
                        type="email"
                        class="form-control form-control-user"
                        id="exampleInputEmail"
                        aria-describedby="emailHelp"
                        placeholder="Enter Email Address..."
                        v-model="auth.email"
                      />
                    </div>
                    <div class="form-group">
                      <input
                        type="password"
                        class="form-control form-control-user"
                        id="exampleInputPassword"
                        placeholder="Password"
                        v-model="auth.password"
                      />
                    </div>
                    <div class="form-group">
                      <div class="custom-control custom-checkbox small">
                        <input
                          type="checkbox"
                          class="custom-control-input"
                          id="customCheck"
                        />
                        <label class="custom-control-label" for="customCheck"
                          >Remember Me</label
                        >
                      </div>
                    </div>
                    <a
                      href="javascript:void(0)"
                      @click="submit"
                      class="btn btn-primary btn-user btn-block"
                    >
                      Login
                    </a>
                    <hr />
                    <a
                      href="index.html"
                      class="btn btn-google btn-user btn-block"
                    >
                      <i class="fab fa-google fa-fw"></i> Login with Google
                    </a>
                    <a
                      href="index.html"
                      class="btn btn-facebook btn-user btn-block"
                    >
                      <i class="fab fa-facebook-f fa-fw"></i> Login with
                      Facebook
                    </a>
                  </form>
                  <hr />
                  <div class="text-center">
                    <a class="small" href="#">Forgot Password?</a>
                  </div>
                  <div class="text-center">
                    <a class="small" href="#">Create an Account!</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapMutations } from 'vuex'
export default {
  auth: false,
  data() {
    return {
      auth: {
        email: null,
        password: null,
      },
    }
  },
  mounted() {
    console.log(this.$auth)
    // todo: Jika user sudah login, didirect ke halaman utama
    if (this.$auth.loggedIn) {
      this.$router.push('/')
    }
  },
  methods: {
    // todo: Meload mutation
    ...mapMutations(['SET_IS_AUTH']),
    submit() {
      console.log('login clicked')
      console.log(this.auth.email)
      this.$auth
        .loginWith('local', {
          data: {
            email: this.auth.email,
            password: this.auth.password,
          },
        })
        .then(() => {
          // todo: Mengubah state menjadi true
          this.SET_IS_AUTH(true)
          //todo: after login
          this.$router.push('/')
        })
    },
  },
}
</script>
