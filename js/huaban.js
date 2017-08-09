window.onload=function(){
    let xiantiao=document.querySelector('.icon-xiantiao');
    let juxing=document.querySelector('.icon-juxing');
    let duobian=document.querySelector('.icon-duobianxing');
    let duoinput=document.querySelector('.icon-duobianxing>input');
    let yuan=document.querySelector('.icon-yuan');
    let qianbi=document.querySelector('.icon-qianbi');
    let xianpi=document.querySelector('.icon-xiangpi');
    let xuxian=document.querySelector('.icon-xuxian');
    let wenzi=document.querySelector('.icon-wenzi');
    let wujiaoxing=document.querySelector('.icon-wujiaoxing');
    let yuanjiaojuxing=document.querySelector('.icon-yuanjiaojuxing');
    let tianchong=document.querySelector('.icon-tianchong');
    let miaobian=document.querySelector('.icon-miaobian');
    let mask=document.querySelector('.mask');
    let baocun=document.querySelector('.icon-baocun');
    let caiqie=document.querySelector('.icon-caiqie');
    let xinjian=document.querySelector('.icon-xinjian');
    let undo=document.querySelector('.icon-undo');
    let ll=document.querySelector('.ll');
    let ll1=document.querySelector('.ll1');
    let label=document.querySelectorAll('label');
    console.log(label)
    for(let i=0;i<label.length;i++){
        label[i].addEventListener('click',function(){
            for(let j=0;j<label.length;j++){
                label[j].id='';
            }
            label[i].id='yy';
        },false);

    }

    let pass=new huaban();
    xiantiao.onclick=function(){
        pass.xiantiao();
    };
    juxing.onclick=function(){
        pass.juxing()
    };
    duobian.onclick=function(){
        pass.bianshu=prompt('输入需要的边数');
        pass.duobian();
    };
    document.onkeydown=function(e){
        if(e.keyCode==46){
            duoinput.style.display='none';
        }
    };
    yuan.onclick=function(){
        pass.yuan();
    };
    qianbi.onclick=function(){
        pass.qianbi();
    };
    xianpi.onclick=function(){
        pass.xianpi();
    };
    xuxian.onclick=function(){
        pass.xuxian();
    };
    yuanjiaojuxing.onclick=function(){
         pass.nn1=Number(prompt('请需要的角度'));
        pass.yuanjiao();
    };
    tianchong.onclick=function(){
        pass.type='fill';
    };
    miaobian.onclick=function(){
        pass.type='stroke';
    };
    wujiaoxing.onclick=function(){
        pass.bianshu=prompt('请输入需要的角度');
        pass.duojiao();
    };
    xianpi.onclick=function(){
        let w=prompt('请输入需要的尺寸','10');
        pass.xianpi(mask,w);
    };
    wenzi.onclick=function(){
        pass.book();
    };

    caiqie.onclick=function(){
        pass.caiqie();
    };
    xinjian.onclick=function(){
        pass.xinjian();d
    };
    baocun.onclick=function(){
        pass.baocun();
    };
    undo.onclick=function(){
        pass.undo();
    };

    ll.onclick=function(){
        ll.onchange=function() {
            pass.fillStyle = ll.value;
        }
    };
    ll1.onclick=function(){
        ll1.onchange=function() {
            pass.strokeStyle = ll1.value;
        }

    };
    pass.key();
}