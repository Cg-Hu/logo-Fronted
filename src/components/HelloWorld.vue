<template>
  <div class="hello">
    <div class="text-overlay">
      <div>
        <img id="homepage" src="../assets/bg.jpg" />
      </div>
      <div>
        <h1 class="text">Welcome to Logo Creator!</h1>
        <router-link to="/gen" class="link">Start!</router-link>
      </div>
        
    </div>
  </div>
  
</template>

<script>

export default {
  name: 'HelloWorld',
}
</script>


<style>
#homepage{
  width: 100%; height: 100%;
  background-size: cover;
}
.text-overlay {
  position: relative;
}

.text {
  left: 380px;
  position: absolute;
  width: 800px;
  font-family: Helvetica, 'Hiragino Sans GB', 'Microsoft Yahei', '微软雅黑', Arial, sans-serif;
  color: rgba(0, 0, 0, 0);
  font-size: 4rem;
  letter-spacing: -3px;
  text-shadow: 0px 1px 1px rgba(255, 255, 255, 0.6);
  margin:0 auto;
  text-align:center; 
  transform: translate(0px,-600px);
}

.link{
  position: absolute;
  left: 700px;
  font-family: Helvetica, 'Hiragino Sans GB', 'Microsoft Yahei', '微软雅黑', Arial, sans-serif;
  color: rgba(49, 4, 4, 0.4);
  font-size: 4rem;
  letter-spacing: 2px;
  text-shadow: 0px 2px 2px rgba(255, 255, 255, 0.6);
  text-decoration: none;
  text-align:center; 
  transform: translate(0px,-500px);
}

</style>
