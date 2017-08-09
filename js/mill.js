function huaban(){
    this.canvas=document.querySelector('canvas');
    this.canvass=document.querySelector('.canvass');
    this.cli=document.querySelector('.cli');
    this.ctx=this.canvas.getContext('2d');
    this.speed=10;
    this.lineWidth=3;
    this.bianshu=5;
    this.nn1=10;
    this.strokeStyle='black';
    this.fillStyle='#000000';
    this.strokeStyle='#000000';
    this.lineCap='round';
    this.type='stroke';
    this.arr=[];
    this.tops='';
    this.lefts='';
    this.cx='';
    this.cy='';
    this.aa='';
    this.bb='';
    this.flag=true;
    this.flag1=true;
    this.font='30px 宋体';
    this.textAlign='center';
    this.textBaseline='middle';
    //画布的宽高
    this.width=this.canvas.width;
    this.height=this.canvas.height;
}

huaban.prototype={
    init:function(){
        this.ctx.lineWidth=this.lineWidth;
        this.ctx.fillStyle=this.fillStyle;
        this.ctx.strokeStyle=this.strokeStyle;
        this.ctx.lineCap=this.lineCap;
        this.ctx[this.type]();
    },
    //线条
        xiantiao:function() {
            let seft=this;
            seft.canvass.onmousedown=function(e){
                let ox=e.offsetX,oy=e.offsetY;
                seft.canvass.onmousemove=function(e){
                    let cx=e.offsetX,cy=e.offsetY;
                    seft.ctx.clearRect(0,0,seft.width,seft.height);
                    seft.init();
                    if(seft.arr.length>0){
                        seft.ctx.putImageData(seft.arr[seft.arr.length-1],0,0);
                    }
                    seft.ctx.beginPath();
                    seft.ctx.moveTo(ox,oy);
                    seft.ctx.setLineDash([0,0]);
                    seft.ctx.lineTo(cx,cy);
                    seft.ctx[seft.type]();
                }
            }
            seft.canvass.onmouseup=function(){
                seft.up();
            }
        },
    //清除ctrl+z
    key:function(){
        window.onkeydown=function(e){
            if(e.ctrlKey&&e.keyCode==90){
                this.arr.pop();
                if(this.arr.length==0){
                    this.ctx.clearRect(0,0,this.width,this.height);
                    return;
                }
                this.ctx.putImageData(this.arr[this.arr.length-1],0,0);
            }
        }.bind(this);
    },

    //矩形
    juxing:function(){
        let seft=this;
        this.canvass.onmousedown=function(e){
            let ox=e.offsetX,oy=e.offsetY;
            seft.canvass.onmousemove=function(e){
            let cx=e.offsetX,cy=e.offsetY;
                seft.ctx.clearRect(0,0,seft.width,seft.height);
                seft.init();
                if(seft.arr.length>0){
                    seft.ctx.putImageData(seft.arr[seft.arr.length-1],0,0);
                };
                seft.ctx.beginPath();
                seft.ctx.moveTo(ox,oy);
                seft.ctx.lineTo(cx,oy);
                seft.ctx.lineTo(cx,cy);
                seft.ctx.lineTo(ox,cy);
                seft.ctx.lineTo(ox,oy);
                seft.ctx.closePath();
                seft.ctx[seft.type]();
            }
        };
        this.canvass.onmouseup=function(){
            seft.up();
        }
    },
    //多边形
    duobian:function(){
        this.canvass.onmousedown=function(e){
         let ox=e.offsetX,oy=e.offsetY;
            this.canvass.onmousemove=function(e){
                let cx=e.offsetX,cy=e.offsetY;
                let zX=(cx-ox)/2+ox,zY=(cy-oy)/2+oy;
                let num=this.bianshu;
                let deg=360/num*(Math.PI/180);
                let r=(cx-cy)/2;
                this.ctx.clearRect(0,0,this.width,this.height);
                this.init();
                if(this.arr.length>0){
                    this.ctx.putImageData(this.arr[this.arr.length-1],0,0);
                };
                this.ctx.beginPath();
                for(let i=0;i<num;i++){
                    let xx=zX+r*Math.sin(deg*i);
                    let yy=zY+r*Math.cos(deg*i);
                    this.ctx.lineTo(xx,yy);
                }
                this.ctx.closePath();
                this.ctx[this.type]();
            }.bind(this);
        }.bind(this);
        this.canvass.onmouseup=function(){
            this.up();
        }.bind(this);
    },
    //圆
    yuan:function() {
        let seft=this;
        this.canvass.onmousedown = function (e) {
            let ox=e.offsetX,oy=e.offsetY;
            seft.canvass.onmousemove=function(e){
                let cx=e.offsetX,cy=e.offsetY;
                let zX=(cx-ox)/2+ox,zY=(cy-oy)/2+oy;
                let r=(cx-ox)/2;
                seft.ctx.clearRect(0,0,seft.width,seft.height);
                seft.init();
                if(seft.arr.length>0){
                    seft.ctx.putImageData(seft.arr[seft.arr.length-1],0,0);
                };
                seft.ctx.beginPath();
                seft.ctx.arc(zX,zY,r,0,Math.PI*2);
                seft.ctx.closePath();
                seft.ctx[seft.type]();
            }
        }
        this.canvass.onmouseup=function(){
            seft.up();
        }
    },

        //铅笔
    qianbi:function(){
            let seft=this;
            seft.canvass.onmousedown=function(e){
                let ox=e.offsetX,oy=e.offsetY;
                seft.ctx.beginPath();
                seft.ctx.moveTo(ox,oy);
                seft.canvass.onmousemove=function(e){
                    let cx=e.offsetX,cy=e.offsetY;
                    seft.ctx.clearRect(0,0,seft.width,seft.height);
                    seft.init();
                    if(seft.arr.length>0){
                        seft.ctx.putImageData(seft.arr[seft.arr.length-1],0,0);
                    }
                    seft.ctx.lineTo(cx,cy);
                    seft.ctx.stroke();
                }
            }
            seft.canvass.onmouseup=function(){
                seft.up();
            }
    },
    //橡皮擦
    xianpi:function(mask,w){
        let seft=this;
        this.canvass.onmousedown=function(e){
            mask.style.display='block';
            mask.style.width=`${w}px`;
            mask.style.height=`${w}px`;
            seft.canvass.onmousemove=function(e){
            let cx=e.offsetX-w/2,cy=e.offsetY-w/2;
                mask.style.top=cy+'px';
                mask.style.left=cx+'px';
                seft.ctx.clearRect(cx,cy,w,w);
            }
        };
        this.canvass.onmouseup=function(){
            mask.style.display='none';
            seft.up();
        };
       /* document.onmouseup=function(){
            mask.style.display='none';
        };*/
    },

    //虚线
    xuxian:function(){
        let self=this;
        this.canvass.onmousedown=function(e){
            let ox=e.offsetX,oy=e.offsetY;
            self.canvass.onmousemove=function(e){
                let cx=e.offsetX,cy=e.offsetY;
                self.ctx.clearRect(0,0,self.width,self.height);
                self.init();
                if(self.arr.length>0){
                    self.ctx.putImageData(self.arr[self.arr.length-1],0,0);
                }
                self.ctx.beginPath();
                self.ctx.moveTo(ox,oy);
                self.ctx.setLineDash([5,10]);
                self.ctx.lineTo(cx,cy);
                self.ctx[self.type]();
            }
        }
        this.canvass.onmouseup=function(){
            self.up();
        }
    },

    // 文字
    book:function(){
        let self=this;
        this.canvass.onmousedown=function(e){
            let ox=e.offsetX,oy=e.offsetY;
            let div=document.createElement('div');
            div.style.cssText=`
            min-width:50px;height:30px;position: absolute;left:${ox}px;top:${oy}px;background:#fff;
            `;
            div.contentEditable=true;
            self.canvass.appendChild(div);
            self.canvass.onmousedown=null;
            div.onmousedown=function(e){
                let dx=e.clientX-this.offsetLeft,dy=e.clientY-this.offsetTop;
                let self=this;
               document.onmousemove=function(e){
                    let mx=e.clientX,my=e.clientY;
                    self.lefts=mx-dx;
                    self.tops=my-dy;
                    self.style.left=self.lefts+'px';
                    self.style.top=self.tops+'px';
                }
            }
            div.onmouseup=function(){
                document.onmousemove=null;
            };
            div.onblur=function(){
                let rong=div.innerText;
                self.canvass.removeChild(div);
                self.ctx.font=self.font;
                 /*self.ctx.textAlign=self.textAlign;
                self.ctx.textBaseline=self.textBaseline;*/
                self.ctx.strokeText(rong,this.lefts,this.tops);
            }
        }

    },



    //圆角矩形
    yuanjiao:function(){
        let self=this;
        this.canvass.onmousedown=function(e){
            let ox=e.offsetX,oy=e.offsetY;
            self.canvass.onmousemove=function(e){
                let cx=e.offsetX,cy=e.offsetY;
                let nnX=self.nn1,nnY=self.nn1;
                if(cx<ox){
                    nnX*=-1;
                }
                if(cy<oy){
                    nnY*=-1;
                }
                self.ctx.clearRect(0,0,self.width,self.height);
                self.init();
                if(self.arr.length>0){
                    self.ctx.putImageData(self.arr[self.arr.length-1],0,0);
                }
                self.ctx.beginPath();
                self.ctx.moveTo(ox+nnX,oy);
                self.ctx.lineTo(cx,oy);
                self.ctx.quadraticCurveTo(cx+nnX,oy,cx+nnX,oy+nnY);
                self.ctx.lineTo(cx+nnX,cy);
                self.ctx.quadraticCurveTo(cx+nnX,cy+nnY,cx,cy+nnY);
                self.ctx.lineTo(ox,cy+nnY);
                self.ctx.quadraticCurveTo(ox-nnX,cy+nnY,ox-nnX,cy);
                self.ctx.lineTo(ox-nnX,oy+nnY);
                self.ctx.quadraticCurveTo(ox-nnX,oy,ox,oy);
                self.ctx.closePath();
                self.ctx[self.type]();
            }
        }
        this.canvass.onmouseup=function(){
            self.up();
        }
    },


    //多角型
   duojiao:function(){
        this.canvass.onmousedown=function(e){
            let ox=e.offsetX,oy=e.offsetY;
            this.canvass.onmousemove=function(e){
                let cx=e.offsetX,cy=e.offsetY;
                let zX=(cx-ox)/2+ox,zY=(cy-oy)/2+oy;
                let num=this.bianshu;
                let deg=360/(num*2)*(Math.PI/180);
                let r=(cx-cy)/2;
                let r1=r/2;
                this.ctx.clearRect(0,0,this.width,this.height);
                this.init();
                if(this.arr.length>0){
                    this.ctx.putImageData(this.arr[this.arr.length-1],0,0);
                };
                this.ctx.beginPath();
                for(let i=0;i<num*2;i++){
                    if(i%2==0){
                        this.ctx.lineTo(zX+r*Math.cos(deg*i),zY+r*Math.sin(deg*i));
                    }else{
                        this.ctx.lineTo(zX+r1*Math.cos(deg*i),zY+r1*Math.sin(deg*i));
                    }
                };
                this.ctx.closePath();
                this.ctx[this.type]();
            }.bind(this);
        }.bind(this);
        this.canvass.onmouseup=function(){
            this.up();
        }.bind(this);
    },


    //保存图片

    baocun:function(){
        let data=this.canvas.toDataURL('image/png').replace('data:image/png','data:stream/octet');
        location.href=data;
    },

//保存图片
    undo:function(){
    let data=this.canvas.toDataURL('image/png');
    location.href=data;
},
    //新建
    xinjian:function(){
        this.ctx.clearRect(0,0,this.width,this.height);
        this.up();
    },


    //裁切

    caiqie:function() {
        let self = this;
        let ox, oy, ax, ay;
        self.canvass.onmousedown = function (e) {
            ox = e.clientX;
            oy = e.clientY;
            ax = e.offsetX;
            ay = e.offsetY;
            document.onmousemove = function (e) {
                let cx = e.clientX, cy = e.clientY;
                self.cli.style.display = 'block';
                self.cx = cx - ox;
                self.cy = cy - oy;
                self.cli.style.width = cx-ox + 'px';
                self.cli.style.height = cy-oy + 'px';
                self.cli.style.left = ax + 'px';
                self.cli.style.top = ay + 'px';
                self.cli.onmousedown = function (e) {
                    let ox = e.offsetX, oy = e.offsetY;
                    self.cli.onmousemove = function (e) {
                        let cx = e.clientX, cy = e.clientY;
                        let left = cx - ox, top = cy - oy;
                        ax = left - 140;
                        ay = top - 62;
                        if (left < 140) {
                            left = 140;
                        }
                        if (left > 140 + self.width - self.cx) {
                            left = 140 + self.width - self.cx;
                        }
                        if (top < 62) {
                            top = 62;
                        }
                        if (top > 62 + self.height - self.cy) {
                            top = 62 + self.height - self.cy;
                        }
                        this.style.left = left-140 + 'px';
                        this.style.top = top-60 + 'px';
                        self.ctx.clearRect(0, 0, self.width, self.height);
                        self.ctx.putImageData(self.bb, 0, 0);
                        self.ctx.putImageData(self.aa, ax, ay);

                    }
                    self.cli.onmouseup = function () {
                        self.cli.onmousemove = null;
                        self.cli.onmouseup = null;
                    }
                    self.arr.push(self.ctx.getImageData(0, 0, self.width, self.height));
                }
                if (self.flag1) {
                    self.canvass.onmousedown = function (e) {
                        let dx = e.clientX - 140, dy = e.clientY - 62;
                        if (dx > ox && dx < ox + self.cx && dy > oy && dy < oy + self.cy) {
                            return;
                        }
                        self.cli.style.display='none';
                        self.flag = true;
                        self.flag1 = false;
                    }
                }
            };
            document.onmouseup = function () {
                document.onmousemove = null;
                document.onmouseup = null;
                if (self.flag) {
                    self.flag = false;
                    self.aa = self.ctx.getImageData(ax,ay,self.cx,self.cy);
                    self.ctx.clearRect(ax, ay, self.cx, self.cy);
                    self.bb = self.ctx.getImageData(0, 0, self.width, self.height);
                    self.ctx.clearRect(0,0, ax, ay);
                }
            }
            self.arr.push(self.ctx.getImageData(0, 0, self.width, self.height));
        }
    },
    

        up:function(){
        this.arr.push(this.ctx.getImageData(0,0,this.width,this.height));
        this.canvass.onmousemove=null;
    }
}