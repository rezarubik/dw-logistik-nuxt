<template>
  <div id="wrapper">
    <Sidebar v-if="isAuth" />
    <!-- Content Wrapper -->
    <div id="content-wrapper" class="d-flex flex-column">
      <!-- Main Content -->
      <div id="content">
        <Header v-if="isAuth" />
        <nuxt />
      </div>
      <!--  -->
    </div>
  </div>
</template>
<script>
import Sidebar from '@/components/layouts/Sidebar.vue'
import Header from '@/components/layouts/Header.vue'
import { mapState } from 'vuex'
export default {
  data() {
    return {
      // isAuth: false,
    }
  },
  computed: {
    // todo: Load state dari index.js, loadState menggunakan mapState
    ...mapState(['isAuth']),
  },
  components: { Sidebar, Header },
}
</script>
