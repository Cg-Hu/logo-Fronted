<template>
  <div id="app">
    <!-- <router-link class="gen" to="/gen">Start!</router-link>  -->
    <router-view/>
  </div>
  
</template>

<style lang="scss">
#app {
  position: relative;
}
body{
  margin:0;
}

// a{
//   text-decoration: none;
//   color: rgba(12, 3, 3, 0.475)
// }

// .gen {
//   position: absolute;
//   // transform: translate(-50%, 50%); /* 将文本居中 */
//   font-family: Arial, Helvetica, sans-serif;
//   color: rgba(36, 4, 4, 0.466);
//   font-size: 3rem;
//   text-shadow: 0px 2px 2px rgba(255, 255, 255, 0.6);
// }
</style>
