//banner
{
	let imgs=document.querySelectorAll(".imgbox li");
	let pagers=document.querySelectorAll(".pagerbox li");
	let banner=document.querySelector(".banner_main_zhong");
	let next=document.querySelector(".next");
	let prev=document.querySelector(".prev");
	const l=imgs.length;
	pagers.forEach(function(ele,index){
		ele.onmouseenter=function(){
			for(let i=0;i<l;i++){
				imgs[i].classList.remove("active");
				pagers[i].classList.remove("active");
			}
			//this ele pagers[index]
			this.classList.add("active");
			imgs[index].classList.add("active");
			n=index;
		}
	});
	let n=0;
	let t=setInterval(move,3000);
	function move(){
		n++;
		// n=n%5;
		if(n===imgs.length){
			n=0;
		}
		if(n<0){
			n=imgs.length-1;
		}
		for(let i=0;i<l;i++){
			imgs[i].classList.remove("active");
			pagers[i].classList.remove("active");
		}
		imgs[n].classList.add("active");
		pagers[n].classList.add("active");
	}
	banner.onmouseenter=function(){
		clearInterval(t);
	}
	banner.onmouseleave=function(){
		t=setInterval(move,3000);	
	}

	let flag=true;
	next.onclick=function(){
		if(flag){
			flag=false;
			move();
		}
		
	};
	prev.onclick=function(){
		if(flag){
			flag=false;
			n-=2;
			move();
		}
		
	};
	imgs.forEach(function(ele,index){
		ele.addEventListener("transitionend", function(){
			flag=true;
		})
	})


	let labels=document.querySelectorAll(".li");
	let menus=document.querySelectorAll(".menu");
	let obj=menus[0];
	labels.forEach(function(ele,index){
		ele.onmouseenter=function(){
			obj.style.display="none";
			menus[index].style.display="block";
			obj=menus[index];
		}
		ele.onmouseleave=function(){
			menus[index].style.display="none";
		}
	})
}

//聚惠
{
	let juhui_container=document.querySelector(".juhui_container");
	let juhui_prev=document.querySelector(".juhui_prev");
	let juhui_next=document.querySelector(".juhui_next");
	let juhui_inner=document.querySelector(".juhui_inner");
	let n=1;
	let flag=true;
	juhui_next.onclick=function(){
		if(flag){
		flag=false;
		juhui_inner.style.transition="all .5s"
		n++;
		juhui_inner.style.marginLeft=-1000*n+"px";
		}
	}
	juhui_prev.onclick=function(){
		if(flag){
		flag=false;
		juhui_inner.style.transition="all .5s"
		n--;
		juhui_inner.style.marginLeft=-1000*n+"px";
		}
	}
	juhui_inner.addEventListener("transitionend",function(){
		flag=true;
		if(n===4){
			juhui_inner.style.transition="none";
			juhui_inner.style.marginLeft="-1000px";
			n=1;
		}
		if(n===0){
			juhui_inner.style.transition="none";
			juhui_inner.style.marginLeft="-3000px";
			n=3;
		} 
	})
}
//好货排放榜
{
	function wheel(parent){
		let prev=parent.querySelector(".haohuo_lbtn");
		let next=parent.querySelector(".haohuo_gbtn");
		let inner=parent.querySelector(".haohuortop_inner");
		let contents=parent.querySelectorAll(".haohuortop_content");
		let pagers=parent.querySelectorAll(".haohuo_yuan");
		let n=0;
		next.onclick=function(){
			n++;
			if(n===contents.length){
				n=contents.length-1;
				return;
			}
			inner.style.left=n*-390+"px";
			pagers[n].classList.add("active");
			pagers[n-1].classList.remove("active");
			obj=pagers[n];
		};
		prev.onclick=function(){
			n--;
			if(n<0){
				n=0;
				return;
			}
			inner.style.left=n*-390+"px";
			pagers[n].classList.add("active");
			pagers[n+1].classList.remove("active");
			obj=pagers[n];
		};
		let obj=pagers[0];
		pagers.forEach(function(ele,index){
			ele.onclick=function(){
				obj.classList.remove("active");
				ele.classList.add("active");
				obj=ele;
				inner.style.left=index*-390+"px";
				n=index;
			}
		})
	}
	let items=document.querySelectorAll(".haohuortop_item");
	items.forEach(function(ele){
		wheel(ele);
	})
}
//视频
{
	function wheel(parent){
		let prev=parent.querySelector(".shengxian_lbtn");
		let next=parent.querySelector(".shengxian_gbtn");
		let inner=parent.querySelector(".shengxian_rshipin_inner");
		let contents=parent.querySelectorAll(".shengxian_rshipin_content");
		let n=0;
		next.onclick=function(){
			n++;
			if(n===contents.length){
				n=contents.length-1;
				return;
			}
			inner.style.left=n*-390+"px";
		};
		prev.onclick=function(){
			n--;
			if(n<0){
				n=0;
				return;
			}
			inner.style.left=n*-390+"px";
		};
	}
	let items=document.querySelectorAll(".shengxian_right_item2");
	items.forEach(function(ele){
		wheel(ele);
	})
	function content(parent){
		const types=parent.querySelectorAll(".shengxian_right_shipin");
		const goods=parent.querySelectorAll(".shengxian_tu li");
		types.forEach(function(ele,index){
			ele.onmouseover=function(){
				for(let i=0;i<types.length;i++){
					types[i].classList.remove("active");
					goods[i].classList.remove("active");
				}
				this.classList.add("active");
				goods[index].classList.add("active");
			}
		})
	}
	const contentlist=document.querySelectorAll(".shengxian_right");
	contentlist.forEach(function(ele){
		content(ele);
	})
}

// 必抢清单
{
	function wheel(parent){
		let prev=parent.querySelector(".bingqiang_lbtn");
		let next=parent.querySelector(".bingqiang_gbtn");
		let inner=parent.querySelector(".bingqiang_bitem_inner");
		let contents=parent.querySelectorAll(".bingqiang_bitem_content");
		let n=0;
		next.onclick=function(){
			n++;
			if(n===contents.length){
				n=contents.length-1;
				return;
			}
			inner.style.left=n*-590+"px";
		};
		prev.onclick=function(){
			n--;
			if(n<0){
				n=0;
				return;
			}
			inner.style.left=n*-590+"px";
		};
	}
	let items=document.querySelectorAll(".bingqiangqingdan_item_boottom");
	items.forEach(function(ele){
		wheel(ele);
	});
}

// 返回顶部
{
	let totop=document.querySelector(".totop");
	let gotop=document.querySelector(".leftBar_gotop");
	totop.onclick=function(){
		// document.documentElement.scrollTop=0;
		let st=document.documentElement.scrollTop;
		let t=setInterval(function(){
			st-=200;
			if(st<0){
				st=0;
				clearInterval(t);
			}
			document.documentElement.scrollTop=st;
		},25)
	}
	gotop.onclick=function(){
		// document.documentElement.scrollTop=0;
		let st=document.documentElement.scrollTop;
		let t=setInterval(function(){
			st-=200;
			if(st<0){
				st=0;
				clearInterval(t);
			}
			document.documentElement.scrollTop=st;
		},25)
	}
	var demo=document.querySelector(".totop");
	var demo1=document.querySelector(".totop_item");
	demo.onmouseenter=function(){
		demo1.style.width="90px";
		demo1.style.background="#ff9900";
	}
	demo.onmouseleave=function(){
		demo1.style.background="#383838";
		demo1.style.width="0";	
	}
	demo.addEventListener("transitionend", function(){
		demo1.style.background="fff";
	})
	

	var xiaoxi=document.querySelector(".xiaoxi");
	var xiaoxi_item=document.querySelector(".xiaoxi_item");
	xiaoxi.onmouseenter=function(){
		xiaoxi_item.style.width="70px";
		xiaoxi_item.style.background="#ffaa00";
	}
	xiaoxi.onmouseleave=function(){
		xiaoxi_item.style.background="#383838";
		xiaoxi_item.style.width="0";	
	}

	var licai=document.querySelector(".licai");
	var licai_item=document.querySelector(".licai_item");
	licai.onmouseenter=function(){
		licai_item.style.width="70px";
		licai_item.style.background="#ffaa00";
	}
	licai.onmouseleave=function(){
		licai_item.style.background="#383838";
		licai_item.style.width="0";	
	}
	var zuji=document.querySelector(".zuji");
	var zuji_item=document.querySelector(".zuji_item");
	zuji.onmouseenter=function(){
		zuji_item.style.width="70px";
		zuji_item.style.background="#ffaa00";
	}
	zuji.onmouseleave=function(){
		zuji_item.style.background="#383838";
		zuji_item.style.width="0";	
	}
	var qiandao=document.querySelector(".qiandao");
	var qiandao_item=document.querySelector(".qiandao_item");
	qiandao.onmouseenter=function(){
		qiandao_item.style.width="70px";
		qiandao_item.style.background="#ffaa00";
	}
	qiandao.onmouseleave=function(){
		qiandao_item.style.background="#383838";
		qiandao_item.style.width="0";	
	}
	var zaixian=document.querySelector(".zaixian");
	var zaixian_item=document.querySelector(".zaixian_item");
	zaixian.onmouseenter=function(){
		zaixian_item.style.width="90px";
		zaixian_item.style.background="#ffaa00";
	}
	zaixian.onmouseleave=function(){
		zaixian_item.style.background="#383838";
		zaixian_item.style.width="0";	
	}
	var yijian=document.querySelector(".yijian");
	var yijian_item=document.querySelector(".yijian_item");
	yijian.onmouseenter=function(){
		yijian_item.style.width="90px";
		yijian_item.style.background="#ffaa00";
	}
	yijian.onmouseleave=function(){
		yijian_item.style.background="#383838";
		yijian_item.style.width="0";	
	}
}


//topBar
{
	let topBar=document.querySelector(".topBar");
	let leftBar=document.querySelector(".leftBar");
	window.onscroll=function(){
		let st=document.documentElement.scrollTop;
		if(st>600){
			topBar.style.display="block";
		}else{
			topBar.style.display="none";
		}

		if(st>2850){
			leftBar.style.display="block";
		}else{
			leftBar.style.display="none";
		}
	}
}

//leftBar
{
	let tips=document.querySelectorAll(".leftBar_tips");
	let content=document.querySelectorAll(".leftBar_content");
	let contents=document.querySelectorAll(".leftBar_content1");
	tips.forEach(function(ele,index){
		ele.onclick=function(){
			let ot=content[index].offsetTop-55;
			// console.log(ot);
			// document.documentElement.scrollTop=ot;
			let now=document.documentElement.scrollTop;
			let speed=(ot-now)/8;
			let time=0;
			let t=setInterval(function(){
				time+=25;
				now+=speed;
				if(time===200){
					clearInterval(t);
				}
				document.documentElement.scrollTop=now;
			},25);
		}
	})

	window.addEventListener("scroll",function(){
		let st=document.documentElement.scrollTop;
		
		for(let i=0;i<content.length;i++){
			if(st>content[i].offsetTop-457){
				for(let i=0;i<tips.length;i++){
					tips[i].classList.remove("active");
					
				}
				tips[i].classList.add("active");
			}
		}
	})
}