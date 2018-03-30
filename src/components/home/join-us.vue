<template>
	  <article class="join-us">
	    	<section class="banner">
	    			<div class="container d-flex flex-column justify-content-center align-items-center">
	    					<h1>GAREEAS</h1>
	    					<p>追梦路上&nbsp;&nbsp;有你同行</p>
	    			</div>
	    	</section>
	    	<section class="recruit">
	    			<div class="title text-center">
	    					<h3 class="text-center">最新招聘信息</h3>
	    			</div>
	    			<div class="container recruit-list">
	    					<div class="list-item" :class="{'active':activeIndex==index}" v-for="(item,index) in 2">
	    							<div class="item-head">
	    									<h2>美术指导</h2>
	    									<h2>Art Director</h2>
	    									<div>部门：品牌设计部&nbsp;招聘人数：<span>1人</span></div>
	    							</div>
	    							<div class="item-body">
	    									<div class="position-describtion">
	    											<p>职位描述：</p>
	    											<ol>
	    													<li>负责项目的架构设计，注重前端用户体验，提高网站性能，进行网站的日常维护负责项目的架构设计，注重前端用户体验，提高网站性能，进行网站的日常维护</li>
	    													<li>负责项目的架构设计，注重前端用户体验，提高网站性能，进行网站的日常维护</li>
	    													<li>负责项目的架构设计，注重前端用户体验，提高网站性能，进行网站的日常维护</li>
	    													<li>负责项目的架构设计，注重前端用户体验，提高网站性能，进行网站的日常维护</li>
	    													<li>负责项目的架构设计，注重前端用户体验，提高网站性能，进行网站的日常维护</li>
	    													<li>负责项目的架构设计，注重前端用户体验，提高网站性能，进行网站的日常维护</li>
	    											</ol>
	    									</div>
	    									<div class="position-qualification">
	    											<p>任职资格：</p>
	    											<ol>
	    													<li>优秀的文档撰写功底，能胜任任何文档类型的撰写工作</li>
	    													<li>优秀的文档撰写功底，能胜任任何文档类型的撰写工作</li>
	    													<li>优秀的文档撰写功底，能胜任任何文档类型的撰写工作</li>
	    													<li>优秀的文档撰写功底，能胜任任何文档类型的撰写工作</li>
	    													<li>优秀的文档撰写功底，能胜任任何文档类型的撰写工作</li>
	    													<li>优秀的文档撰写功底，能胜任任何文档类型的撰写工作</li>
	    											</ol>
	    										
	    									</div>
	    							</div>
	    					</div>
	    			</div>
	    			<div class="process">
	    					<div class="container">
		    						<h4>应聘流程及须知：</h4>
			    					<p>
			    						请注意上面的招聘信息是否有你的职位，请注意上面的招聘信息是否有你的职位，请注意上面的招聘信息是否有你的职位，请注意上面的招聘信息是否有你的职位，请注意上面的招聘信息是否有你的职位，
			    					</p>
			    					<p  class="salary">薪资要求：请在邮箱内写明或面议</p>
			    					<p>试用期：1个月</p>
			    					<p>上班时间：周一到周五（单双休），早上9:00-12:00,下午12:00-18:00</p>
			    					<p>有意者请发简历作品和近照至123456@163.com</p>
	    					</div>
	    					
	    			</div>
	    	</section>
	  </article>
</template>

<script>
export default {
  name: 'join-us',
  data () {
    return {
    	activeIndex:0,
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.join-us{
	.banner{
		height: 350px;
		background: url(../../../static/img/bgc.png) no-repeat center center;
		background-size:1920px 350px ;
		color: #fff;
		.container{
			height: 100%;
			h1{
				font-size: 32px;
				margin-bottom: 20px;
			}
			p{
				font-size: 20px;
			}
		}
	}
	.recruit{
		padding-bottom:60px ;
		.title{
			padding: 75px 0 60px;
			border-bottom: 1px solid #eee;
			h3{
				text-align: center;
				padding-bottom:25px;
				font-size: 30px;
				position:relative; 
				&:after{
					content: "";
					width: 80px;
					height: 3px;
					background: #ff9a24;
					position: absolute;
					bottom: 0;
					left: 50%;
					transform: translateX(-50%);
				}
			}
		}
		.list-item{
			font-size: 12px;
			height: 173px;
			overflow: hidden;
			border-bottom: 1px solid #e5e5e5;
			transition: all .5s;
			&.active{
				height: auto;
			}
			.item-head{
					padding:15px 0 30px;
					div{
						font-size: 15px;
						margin-top: 10px;
						span{
							color: #febb6d;
						}
					}
			}
			.item-body{
				color: #666;
				>div{
					margin-bottom: 45px;
				}
				li{
					list-style-position:inside;
					letter-spacing: 2px;
					line-height: 2.2;
				}
			}
		}
	}
	.process{
		margin-top: 30px;
		h4{
			font-size: 20px;
			margin-bottom: 15px;
			color: #ff9c00;
		}
		p{
			line-height: 2;
			font-size: 12px;
			&:nth-of-type(1){
				margin-bottom: 10px;
			}
		}
	}
	
}
</style>
