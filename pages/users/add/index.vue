<template>
  <div class="container-fluid">
    <div class="card">
      <div class="card-header">
        <h4 class="card-title"></h4>
      </div>
      <div class="card-body">
        <UserForm />
      </div>
    </div>
  </div>
</template>
<script>
import UserForm from '@/components/form/User.vue'
export default {
  components: {
    UserForm,
  },
}
</script>
