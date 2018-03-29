<template>
		<article class="latest-info">
			
	  		<section class="info-header text-center d-flex flex-column justify-content-center">
	  				<h1>INFORMATION</h1>
	  				<p>了解我们的最新动向</p>
	  		</section>
	   		<section class="info-content">
	   				<div class="breadcrumb-wrap container">
			   				<nav aria-label="breadcrumb">
									  <ol class="breadcrumb">
										    <li class="breadcrumb-item"><router-link to=""><i class="fa fa-home" aria-hidden="true"></i>首页</router-link></li>
										    <!--<li class="breadcrumb-item"><router-link to="">资讯中心</router-link></li>-->
										    <li class="breadcrumb-item active" aria-current="page">资讯中心</li>
									  </ol>
								</nav>
	   				</div>
	   		</section>
  	</article>
</template>

<script>
export default {
  name: 'latest-info',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.latest-info{
		.info-header{
				height: 350px;
				color: #fff;
				background: url(../../../static/img/bgc.png) no-repeat center center;
				background-size: 1920px 350px;
				h1{
					margin-bottom: 20px;
					font-size: 32px;
				}
				p{
					font-size: 20px;
				}
		}
		.info-content{
				height: 60px;
				background: #eee;
				.breadcrumb{
						margin: 0;
						padding: 18px 16px;
						i{
							margin-right: 5px;
						}
				}
		}
		
	
}
</style>
