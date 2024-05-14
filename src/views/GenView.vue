<template>
  <div class="gen">
    <GenLogo />
    <br/>
    <h2 style="text-align:center">服务器:http://10.214.211.106:7071</h2>
    <form id="test" action="http://10.214.211.106:7071//generate_Logo" method="get" name="test_form" style="text-align:center">
      prompt:<input type="text" name="prompt" id="prompt" value="a red flower trademark logo with a white backgroud">
      save_dir:<input type="text" name="save_dir" id="save_dir" value="/home/hcg/logo-app/logo-Fronted/src/assets/gen_logo.png">
      scale:<input type="int" name="scale" id="scale" value=7.5>
      <br/>
      H:<input type="int" name="H" id="H" value=512>
      W:<input type="int" name="W" id="W" value=512>
      ddim_steps:<input type="int" name="ddim_steps" value="50">
      <input type="submit" value="提交表单">
    </form>
    <br/>
    <br/>
    <h2 style="text-align:center">服务器:http://10.214.242.156:7071</h2>
    <form id="test" action="http://10.214.242.156:7071//generate_Logo" method="get" name="test_form" style="text-align:center">
      prompt:<input type="text" name="prompt" id="prompt" value="a red flower trademark logo with a white backgroud">
      save_dir:<input type="text" name="save_dir" id="save_dir" value="/home/hcg/logo-app/logo-Fronted/src/assets/gen_logo.png">
      scale:<input type="int" name="scale" id="scale" value=7.5>
      <br/>
      H:<input type="int" name="H" id="H" value=512>
      W:<input type="int" name="W" id="W" value=512>
      ddim_steps:<input type="int" name="ddim_steps" value="50">
      <input type="submit" value="提交表单">
    </form>
    <h2 style="text-align:center">以下为图片生成结果</h2>

    <div style="text-align:center">
      
      <img :src=imgUrl alt="图片还未生成，请稍等..." width="400px"/>
      <br/>
      <br/>
      <img width="200px" src="/home/hcg/logo-app/logo-Fronted/src/assets/gen_logo.png" alt="图片还未生成，请稍等..."/>
      
    </div>

    
   </div>
  
</template>

<script>
import GenLogo from '@/components/GenLogo.vue'

export default {
  name: 'GenView',
  components: {
    GenLogo
  },
  data() {
    return {
      imgUrl: 
        require("@/assets/gen_logo.png") 
    };
  },
}
</script>

<style>
.router-link-active {
  display: none;
}
</style>