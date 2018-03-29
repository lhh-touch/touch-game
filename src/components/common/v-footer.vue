<template>
	  <div class="v-footer">
				<div class="footer-top">
						<div class="container d-flex justify-content-between">
								<div class="top-l">
										<dl>
												<dt>GAMEFALSK</dt>
												<dd>电话号码：052-2465144</dd>
												<dd>电邮地址：15656@163.com</dd>
												<dd>公司地址：广东省广州市天河区津滨腾越大厦</dd>
										</dl>
								</div>
								<div class="top-r d-flex">
										<dl>
												<dt>我们的游戏</dt>
												<dd><router-link to="">锄大D大亨</router-link></dd>
												<dd><router-link to="">疯麻将16张</router-link></dd>
												<dd><router-link to="">疯梭哈</router-link></dd>
												<dd><router-link to="">锄大D大亨</router-link></dd>
										</dl>
										<dl>
												<dt>关于我们</dt>
												<dd><router-link to="">公司介绍</router-link></dd>
												<dd><router-link to="">联系我们</router-link></dd>
												<dd><router-link to="">加入我们</router-link></dd>
										</dl>
								</div>
						</div>
				</div>
				
				<div class="footer-bot">
						<div class="container d-flex justify-content-between align-items-center">
								<p>&copy; HALFBRICK HALFBRICK HALFBRICK HALFBRICK</p>
								<ul class="d-flex">
										<li><router-link to="">隐私条款</router-link></li>
										<li><router-link to="">使用守则</router-link></li>
								</ul>
						</div>
				</div>
				
	  </div>
</template>

<script>
export default {
  name: 'v-footer',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.v-footer{
	background: #141414;
	color: #999;
	font-size: 12px;
	a{
		color: #999;
	}
	.footer-top{
		padding: 70px 0 80px;
		dl{
			dt{
				font-size: 20px;
				color: #fff;
				padding-bottom: 20px;
				margin-bottom: 20px;
				border-bottom: 1px solid #999;
			}
			dd{
				margin-bottom: 15px;
			}
		}
		.top-l{
			dt{
				margin-bottom: 0;
				border: none;
			}
		}
		.top-r{
			dl{
				width: 200px;
				margin-left: 80px;
				dt{
					font-size: 15px;
				}
			}
		}
	}
	.footer-bot{
		height: 50px;
		background: #000;
		.container{
			height: 100%;
		}
		li{
			padding: 0 20px;
			&:last-child{
				border-left: 1px solid #999;
			}
		}
	}
	
}
</style>
