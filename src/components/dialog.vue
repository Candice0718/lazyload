<template>
    <div>
      <el-dialog
        :title="title"
        :visible.sync="visible"
        width="30%">
        <span>这是一段信息</span>
        <span slot="footer" class="dialog-footer">
          <el-button @click="close()">取 消</el-button>
          <el-button type="primary" @click="open1">打开dialog1</el-button>
        </span>
      </el-dialog>
    </div>
</template>
<script lang="ts">
  import {Component, Prop, Vue, Model, Emit} from 'vue-property-decorator';
  import Dialog1 from '@/components/dialog1.vue';

  @Component({
    components: {
      Dialog1,
    },
  })
  export default class Dialog extends Vue {
    // @Model('change', {
    //   type: Boolean,
    // })
    // visible!: boolean;
    
    // @Emit('change')
    // public change(e: boolean) {
    // }
    
    @Prop() public title!: string;
    // visible: boolean = true;
    private open1() {
      if (!this.dialog) {
          this.dialog = this.$dialog.createDialog(Dialog1, {title: '弹窗嵌套弹窗'});
      }
      if (this.dialog.isShowing()) {
          this.dialog.close();
      }
      this.dialog.open();
    }
  }
</script>