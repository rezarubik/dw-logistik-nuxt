<template>
  <div class="container-fluid">
    <div class="card">
      <div class="card-header">
        <h4 class="card-title">
          <nuxt-link
            :to="{ name: 'users-add' }"
            class="btn btn-primary float-right btn-sm"
            >Add New</nuxt-link
          >
        </h4>
      </div>
      <div class="card-body">
        <b-table striped hover :items="users.data" :fields="fields" show-empty>
          <template v-slot:cell(name)="row">
            <p>
              <strong>{{ row.item.name }}</strong>
            </p>
            <p>
              ID:
              <span class="badge badge-success">{{
                row.item.identity_id
              }}</span>
              <br />
              Gender:
              <span class="badge badge-success">{{
                row.item.gender ? 'Male' : 'Female'
              }}</span>
            </p>
          </template>
        </b-table>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapState } from 'vuex'
export default {
  // todo: fungsi akan otomatis dijalankan ketika halaman di load menggunakan asyncData, menjalankan sebelum/menggunakan server side
  async asyncData({ store }) {
    // todo: Agar fungsi dijalankan bersaman jika lebih dari satu
    await Promise.all([store.dispatch('user/getUsersData')])
    return
  },
  data() {
    return {
      fields: ['name', 'address', 'email', 'phone_number'],
      items: [],
    }
  },
  //   todo: Fungsi akan digunakan ketika halaman di load, maka fungsi dijalankan
  computed: {
    // todo: Load state user duluan agar dapat digunakan di table
    ...mapState('user', {
      users: (state) => state.users,
    }),
  },
  methods: {
    ...mapActions('user', ['getUsersData']),
  },
}
</script>
