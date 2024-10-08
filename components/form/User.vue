<template>
  <div>
    <div class="form-group">
      <label for="identityId">Identity ID</label>
      <input
        type="text"
        class="form-control"
        :class="{ 'is-invalid': errors.identity_id }"
        v-model="users.identity_id"
      />
      <p class="text-danger" v-if="errors.identity_id">
        {{ errors.identity_id[0] }}
      </p>
    </div>
    <div class="form-group">
      <label for="name">Name</label>
      <input
        type="text"
        class="form-control"
        :class="{ 'is-invalid': errors.name }"
        v-model="users.name"
      />
      <p class="text-danger" v-if="errors.name">
        {{ errors.name[0] }}
      </p>
    </div>
    <div class="form-group">
      <label for="gender">Gender</label>
      <select
        name=""
        id=""
        class="form-control"
        :class="{ 'is-invalid': errors.gender }"
        v-model="users.gender"
      >
        <option value="">Choose One</option>
        <option value="1">Male</option>
        <option value="2">Female</option>
      </select>
      <p class="text-danger" v-if="errors.gender">
        {{ errors.gender[0] }}
      </p>
    </div>
    <div class="form-group">
      <label for="address">Address</label>
      <input
        type="text"
        class="form-control"
        :class="{ 'is-invalid': errors.address }"
        v-model="users.address"
      />
      <p class="text-danger" v-if="errors.address">
        {{ errors.address[0] }}
      </p>
    </div>
    <div class="form-group">
      <label for="email">Email</label>
      <input
        type="text"
        class="form-control"
        :class="{ 'is-invalid': errors.email }"
        v-model="users.email"
      />
      <p class="text-danger" v-if="errors.email">
        {{ errors.email[0] }}
      </p>
    </div>
    <div class="form-group">
      <label for="password">Password</label>
      <input
        type="password"
        class="form-control"
        :class="{ 'is-invalid': errors.password }"
        v-model="users.password"
      />
      <p class="text-danger" v-if="errors.password">
        {{ errors.password[0] }}
      </p>
    </div>
    <div class="form-group">
      <label for="phoneNumber">Phone Number</label>
      <input
        type="text"
        class="form-control"
        :class="{ 'is-invalid': errors.phone_number }"
        v-model="users.phone_number"
      />
      <p class="text-danger" v-if="errors.phone_number">
        {{ errors.phone_number[0] }}
      </p>
    </div>
    <div class="form-group">
      <label for="role">Role</label>
      <select
        name=""
        id=""
        class="form-control"
        :class="{ 'is-invalid': errors.role }"
        v-model="users.role"
      >
        <option value="">Choose One</option>
        <option value="0">Admin</option>
        <option value="1">Driver</option>
        <option value="2">User</option>
      </select>
      <p class="text-danger" v-if="errors.role">
        {{ errors.role[0] }}
      </p>
    </div>
    <div class="form-group">
      <label for="status">Status</label>
      <select
        name=""
        id=""
        class="form-control"
        :class="{ 'is-invalid': errors.status }"
        v-model="users.status"
      >
        <option value="">Choose One</option>
        <option value="0">Not active</option>
        <option value="1">Active</option>
      </select>
      <p class="text-danger" v-if="errors.status">
        {{ errors.status[0] }}
      </p>
    </div>
    <button class="btn btn-primary" @click="submit">Save</button>
  </div>
</template>
<script>
import { mapActions, mapState } from 'vuex'
export default {
  data() {
    return {
      users: {
        name: '',
        identity_id: '',
        gender: '',
        address: '',
        email: '',
        password: '',
        phone_number: '',
        role: '',
        status: '',
      },
    }
  },
  //   todo: first load / after render
  computed: {
    ...mapState('user', {
      errors: (state) => state.errors,
    }),
  },
  methods: {
    ...mapActions('user', ['storeUsersData']),
    submit() {
      console.log('submit clickec')
      this.storeUsersData(this.users).then(() =>
        this.$router.push({ name: 'users' })
      )
    },
  },
}
</script>
