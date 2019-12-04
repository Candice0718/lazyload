<template>
  <div>
    <!-- tslint:disable-next-line vue/valid-v-model -->
    <div @click="open">dialog</div>
  </div>
</template>
<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import Dialog from '@/components/dialog.vue';

  @Component({
    components: {
      Dialog,
    },
  })
  export default class DialogPage extends Vue {
    private open() {
      if (!this.dialog) {
          this.dialog = this.$dialog.createDialog(Dialog, {title: '222'});
      }
      if (this.dialog.isShowing()) {
          this.dialog.close();
      }
      this.dialog.open();
    }
    
  }
</script>