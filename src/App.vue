<template>
  <div id="app">
  	<!--header组件-->
  	<v-header></v-header>
  	<!--视图-->
  	<router-view/>
    <!--footer组件-->
    <v-footer></v-footer>
  </div>
</template>


<script>
import vHeader from './components/common/v-header';
import vFooter from './components/common/v-footer';
export default {
  name: 'App',
  components:{
  	vHeader,
  	vFooter
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;
  color: #2c3e50;
  margin-top: 60px;*/
}
</style>
