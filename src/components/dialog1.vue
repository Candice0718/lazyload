<template>
    <div>
      <el-dialog
        :title="title"
        :visible.sync="visible"
        width="30%">
        <span>这是一段信息111</span>
        <span slot="footer" class="dialog-footer">
          <el-button @click="close">取 消</el-button>
          <el-button type="primary" @click="close">确 定</el-button>
        </span>
      </el-dialog>
    </div>
</template>
<script lang="ts">
  import {Component, Prop, Vue, Model, Emit} from 'vue-property-decorator';

  @Component
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
    
  }
</script>