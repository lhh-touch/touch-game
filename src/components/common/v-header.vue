<template>
	  <div class="v-header">
	  	<div class="container d-flex justify-content-between align-items-center">
	  		<div class="logo">GAMEFLASK</div>
	  		<ul class="nav-bar-l d-flex">
	  			<li class="active">
	  				<router-link to="/">首页</router-link>
	  			</li>
	  			<li>
	  				<router-link to="/latestInfo">游戏</router-link>
	  			</li>
	  			<li class="">
	  				<router-link to="">加入我们</router-link>
	  			</li>
	  			<li>
	  				<router-link to="">关于我们</router-link>
	  			</li>
	  		</ul>
	  		<ul class="nav-bar-r d-flex">
	  			<li>
	  				<router-link to=""><img src="../../../static/img/1.png"/></router-link>
	  			</li>
	  			<li>
	  				<router-link to=""><img src="../../../static/img/2.png"/></router-link>
	  			</li>
	  			<li>
	  				<router-link to=""><img src="../../../static/img/1.png"/></router-link>
	  			</li>
	  			<li>
	  				<router-link to=""><img src="../../../static/img/2.png"/></router-link>
	  			</li>
	  		</ul>
	  	</div>
	  	
	  	
	  </div>
</template>

<script>
export default {
  name: 'v-header',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      activeIndex:1,
    }
  },
  mounted(){
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.v-header{
	height: 70px;
	background: #333;
	color: #999;
	font-size: 14px;
	a{
		color: #999;
		display: block;
	}
	.container{
		height: 100%;
	}
	.logo{
		font-size: 20px;
		color: #fff;
	}
	ul{
		height: 100%;
		li{
			height: 100%;
			line-height: 70px;
			padding: 0 15px;
			&.active{
				background: #ff9b27;
				color: #fff;
				a{
					color: #fff;
				}
			}
			img{
				width: auto;
				height: auto;
			}
		}
	}
}
</style>
<style lang="less">
.v-header{
	
}
</style>