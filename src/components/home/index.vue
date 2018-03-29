<template>
  <div class="index">
    	<div class="banner">
    			
    	</div>
    	<div class="content">
    			<div class="title text-center">
    					最新招聘信息
    			</div>
    			<div class="latestInfo">
	    				<div class="container">
	    						<ul>
	    							<li>最先招聘信息列表</li>
	    							<li>最先招聘信息列表</li>
	    							<li>最先招聘信息列表</li>
	    							<li>最先招聘信息列表</li>
	    							<li>最先招聘信息列表</li>
	    						</ul>
	    				</div>
    			</div>
    	</div>
  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.index{
	.banner{
		height: 300px;
		background: #00C1DD;
	}
	.content{
		.title{
			padding: 30px 0;
		}
		.latestInfo{
			li{
				margin-bottom: 20px;
				border-bottom: 1px solid #ccc;
			}
		}
		
	}
}
</style>
