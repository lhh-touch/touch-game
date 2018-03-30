<template>
	  <header class="v-header">
		  	<div class="container d-flex justify-content-between align-items-center">
			  		<div class="logo">GAMEFLASK</div>
			  		<div>
					  		<ul class="nav-bar-l d-flex">
						  			<li @click="changeIndex($event)" :class="{'active':activeIndex==0}">
						  				<router-link to="/"><i class="fa fa-home"></i>首页</router-link>
						  			</li>
						  			<li @click="changeIndex($event)" :class="{'active':activeIndex==1}">
						  				<router-link to="/latestInfo"><i class="fa fa-gamepad"></i>游戏</router-link>
						  			</li>
						  			<li @click="changeIndex($event)" :class="{'active':activeIndex==2}">
						  				<router-link to="/joinUs"><i class="fa fa-flag"></i>加入我们</router-link>
						  			</li>
						  			<li @click="changeIndex($event)" :class="{'active':activeIndex==3}">
						  				<router-link to=""><i class="fa fa-user"></i>关于我们</router-link>
						  			</li>
					  		</ul>
					  </div>
					  <div class="d-flex">
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
					  		<div class="language">
					  				<p @click="changeLanguage" :class="{'active':languageIndex==true}">中文</p>
					  				<ol :class="{'active':languageIndex==true}">
							  				<li>中文</li>
							  				<li>英文</li>
							  				<li>繁体</li>
						  		</ol>
					  		</div>
					  		
						 </div>
		  	</div>
	  </header>
</template>

<script>
export default {
  name: 'v-header',
  data () {
	    return {
		      msg: 'Welcome to Your Vue.js App',
		      activeIndex:1,
		      languageIndex:false
	    }
  },
  mounted(){
  },
  methods:{
	  	changeIndex(ev){
		  		if(ev.target.tagName=="LI"){
		  			return;
		  		}else if(ev.target.tagName=="I"){
		  			this.activeIndex=$(ev.target).parent().parent().index();
		  			return;
		  		}
	  			this.activeIndex=$(ev.target).parent().index();
	  	},
	  	changeLanguage(){
	  		console.log(this.languageIndex);
	  			this.languageIndex=!this.languageIndex;
	  	}
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
			i{
				margin-right: 5px;
			}
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
	.language{
		height: 70px;
		p{
			line-height: 70px;
			padding:0 20px;
			position: relative;
			cursor: pointer;
			&:after{
				content: "";
				display: block;
				width: 8px;
				height: 8px;
				border: 1px solid #cdcdcd;
				border-left: none;
				border-top: none;
				position: absolute;
				top: 50%;
				right: 5px;
				transform: translateY(-70%) rotate(45deg);
				transition: all .5s;
				transform-origin: 50% 60%; 
			}
			&.active{
				&:after{
					transform: translateY(-50%) rotate(-135deg);
				}
			}
		}
		ol{
			text-align: center;
			background: rgba(6,6,6,.6);
			height: 0;
			overflow: hidden;
			&.active{
				height: auto;
			}
			li{
				padding: 5px 0;
				cursor: pointer;
			}
		}
		
	}
}
</style>
<style lang="less">
.v-header{
	
}
</style>