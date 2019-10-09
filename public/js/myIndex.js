
var myIndex={
    template:
    `<div><div id="banner">
        <div id="btn-left" @click="left"></div>
        <ul id="ul-imgs" :style="{height:h}">
                <li><img :src="images/banner${n}.jpg"></li>
        </ul>
        <ul id="ul-idxs" @click="change">
            <li class="active" data-i=1></li>
            <li data-i=2></li>
            <li data-i=3></li>
        </ul>
        <div id="btn-right" @click="right"></div>
        </div>
        <div class="case-main main">
        <div class="container">
            <div class="head">
                <h2 class="chn-white chn">案例</h2>
                <p class="eng-white eng">CASE</p>
            </div>
            <div class="row">
                <div class="cases">
                    <a href="javascript:;">
                        <img src="images/case1.jpg" alt="">
                        <div class="case-detail">
                            <h3>滨海幸福里</h3>
                            <span>办公写字楼</span>
                        </div>
                    </a>
                </div>
                <div class="cases">
                    <a href="javascript:;">
                        <img src="images/case1.jpg" alt="">
                        <div class="case-detail">
                            <h3>滨海幸福里</h3>
                            <span>办公写字楼</span>
                        </div>
                    </a>
                </div>
                <div class="cases">
                    <a href="javascript:;">
                        <img src="images/case1.jpg" alt="">
                        <div class="case-detail">
                            <h3>滨海幸福里</h3>
                            <span>办公写字楼</span>
                        </div>
                    </a>
                </div>
                <div class="cases">
                    <a href="javascript:;">
                        <img src="images/case1.jpg" alt="">
                        <div class="case-detail">
                            <h3>滨海幸福里</h3>
                            <span>办公写字楼</span>
                        </div>
                    </a>
                </div>
                <div class="cases">
                    <a href="javascript:;">
                        <img src="images/case1.jpg" alt="">
                        <div class="case-detail">
                            <h3>滨海幸福里</h3>
                            <span>办公写字楼</span>
                        </div>
                    </a>
                </div>
                <div class="cases">
                    <a href="javascript:;">
                        <img src="images/case1.jpg" alt="">
                        <div class="case-detail">
                            <h3>滨海幸福里</h3>
                            <span>办公写字楼</span>
                        </div>
                    </a>
                </div>
                <p class="more">
                    <a href="javascript:;">更多案例 →</a>
                </p>
            </div>
        </div>
        </div>
        <div class="main">
        <div class="container">
            <div class="head">
                    <h2 class="chn-black chn">知名客户</h2>
                    <p class="eng-black eng">TESTIMONIALS</p>
            </div>
            <div class="row">
                <div class="clients">
                    <img src="images/client1.jpg" alt="">
                </div>
                <div class="clients">
                    <img src="images/client2.jpg" alt="">
                </div>
                <div class="clients">
                    <img src="images/client3.jpg" alt="">
                </div>
                <div class="clients">
                    <img src="images/client4.jpg" alt="">
                </div>
                <div class="clients">
                    <img src="images/client5.jpg" alt="">
                </div>
                <div class="clients">
                    <img src="images/client6.jpg" alt="">
                </div>
                <div class="clients">
                    <img src="images/client7.jpg" alt="">
                </div>
                <div class="clients">
                    <img src="images/client8.jpg" alt="">
                </div>
                <div class="clients">
                    <img src="images/client9.jpg" alt="">
                </div>
                <div class="clients">
                    <img src="images/client10.jpg" alt="">
                </div>
                <div class="clients">
                    <img src="images/client11.jpg" alt="">
                </div>
                <div class="clients">
                    <img src="images/client12.jpg" alt="">
                </div>
                <p class="more">
                    <a href="javascript:;">更多知名客户 →</a>
                </p>
            </div>
        </div>
        </div>
        <div class="main team-main">
        <div class="container">
            <div class="head">
                    <h2 class="chn-white chn">团队</h2>
                    <p class="eng-white eng">TEAM</p>
                    <p class="eng-white eng detail">设计、策划、企划、项目管理等各类高端人才系统，从办公室设计到开业全程顾问式设计服务</p>
            </div>
            <div class="team-row">
                <div class="person">
                    <a class="person-name" href="javascript:;" title="李强">李强</a>
                    <span class="person-position">副总经理</span>
                    <p class="person-detail">学习及工作经历：23年项目管理经验，精通施工工艺、把控工地能力强。熟悉工地现场施工管理、国家及行业的质量标准、施工工艺及流程、验收规范、材料性能及价格等。主持过众...</p>
                    <div>
                        <div class="prev-person"></div>
                        <div class="next-person"></div>
                    </div>
                    <a class="person-img" title="李强">
                        <img src="images/person-img.jpg" alt="">
                    </a>
                </div>
            </div>
                <p class="more">
                    <a href="javascript:;">更多团队 →</a>
                </p> 
        </div>
        </div>
        <div class="main">
        <div class="container">
            <div class="head">
                    <h2 class="chn-black chn">为什么选择我们</h2>
                    <p class="eng-black eng">WHY CHOOSE US</p>
                    <p class="eng-white eng detail">空间装饰设计服务三大优势和三大保障，关乎最终效果体现的根本，我们将其列为重中之重。</p>
            </div>
            <div class="row">
                <div class="choose">
                    <div class="choose-detail">
                        <h3>15年诚信品牌</h3>
                        <p>5年诚信企业，设计与施工二级资质，追求专业设计，注重施工品质。</p>
                    </div>
                </div>
                <div class="choose">
                    <div class="choose-detail">
                        <h3>15年诚信品牌</h3>
                        <p>5年诚信企业，设计与施工二级资质，追求专业设计，注重施工品质。</p>
                    </div>
                </div>
                <div class="choose">
                    <div class="choose-detail">
                        <h3>15年诚信品牌</h3>
                        <p>5年诚信企业，设计与施工二级资质，追求专业设计，注重施工品质。</p>
                    </div>
                </div>
                <div class="choose">
                    <div class="choose-detail">
                        <h3>15年诚信品牌</h3>
                        <p>5年诚信企业，设计与施工二级资质，追求专业设计，注重施工品质。</p>
                    </div>
                </div>
                <div class="choose">
                    <div class="choose-detail">
                        <h3>15年诚信品牌</h3>
                        <p>5年诚信企业，设计与施工二级资质，追求专业设计，注重施工品质。</p>
                    </div>
                </div>
                <div class="choose">
                    <div class="choose-detail">
                        <h3>15年诚信品牌</h3>
                        <p>5年诚信企业，设计与施工二级资质，追求专业设计，注重施工品质。</p>
                    </div>
                </div>
                <p class="more">
                    <a href="javascript:;">更多优势 →</a>
                </p>
            </div>
        </div>
        </div>
        <div class="main team-main">
        <div class="container">
            <div class="head">
                    <h2 class="chn-white chn">服务体系</h2>
                    <p class="eng-white eng">SERVICE SYSTEM</p>
                    <p class="eng-white eng detail">高效的服务体系，打造更高端地装饰设计作品</p>
            </div>
            <div class="row">
                <div class="services">
                    <img src="images/service1.png" alt="">
                    <p>15年诚信企业</p>
                </div>
                <div class="services">
                    <img src="images/service1.png" alt="">
                    <p>15年诚信企业</p>
                </div>
                <div class="services">
                    <img src="images/service1.png" alt="">
                    <p>15年诚信企业</p>
                </div>
                <div class="services">
                    <img src="images/service1.png" alt="">
                    <p>15年诚信企业</p>
                </div>
                <div class="services">
                    <img src="images/service1.png" alt="">
                    <p>15年诚信企业</p>
                </div>
                <div class="services">
                    <img src="images/service1.png" alt="">
                    <p>15年诚信企业</p>
                </div>
                <div class="services">
                    <img src="images/service1.png" alt="">
                    <p>15年诚信企业</p>
                </div>
                <div class="services">
                    <img src="images/service1.png" alt="">
                    <p>15年诚信企业</p>
                </div>
                <div class="services">
                    <img src="images/service1.png" alt="">
                    <p>15年诚信企业</p>
                </div>
                <div class="services">
                    <img src="images/service1.png" alt="">
                    <p>15年诚信企业</p>
                </div>
                <div class="services">
                    <img src="images/service1.png" alt="">
                    <p>15年诚信企业</p>
                </div>
                <div class="services">
                    <img src="images/service1.png" alt="">
                    <p>15年诚信企业</p>
                </div>
            </div>
        </div>
        </div>
        <div class="main about-main">
        <div class="container">
            <div class="head">
                    <h2 class="chn-white chn">关于</h2>
                    <p class="eng-white eng">ABOUT</p>
                    <p class="eng-white eng detail">15年耕耘，上千成功案例，客户满意度高达95%以上</p>
                    <p class="about-head-detail">高质量 我们工作室认真对待每一个客户，我们不用口头语言来吹捧我们的优秀，成百上千的案例，见证着我们成长。 高效率 直接与设计师、程序师沟通！我们崇尚速度，喜欢感受风驰电掣的狂飙，所以在3-5个工作日内我们为您提供最完美的方案，我们拒绝拖沓! 高诚信 客户是什么，他们在想什么，需要我们做什么，这些问题一直困扰着我们。但是经过几年的实践，发现做好客户关系其实很容易，那就是真诚！ ...</p>
            </div>
            <div class="row">
                <div class="abouts">
                    <p class="about-data">15年</p>
                    <p class="about-detail">资深行业经验</p>
                </div>
                <div class="abouts">
                    <p class="about-data">15年</p>
                    <p class="about-detail">资深行业经验</p>
                </div>
                <div class="abouts">
                    <p class="about-data">15年</p>
                    <p class="about-detail">资深行业经验</p>
                </div>
                <div class="abouts">
                    <p class="about-data">15年</p>
                    <p class="about-detail">资深行业经验</p>
                </div>
            </div>
            <p class="more">
                <a href="javascript:;">详细了解 →</a>
                <a href="javascript:;">荣誉资质 →</a>
            </p>
        </div>
        </div>
        <div class="main">
        <div class="container">
            <div class="head">
                <h2 class="chn-black chn">资讯</h2>
                <ul>
                    <li>
                        <a href="javascript:;">动态</a>
                    </li>
                    <li>
                        <a href="javascript:;">动态</a>
                    </li>
                    <li>
                        <a href="javascript:;">动态</a>
                    </li>
                    <li>
                        <a href="javascript:;">动态</a>
                    </li>
                </ul>
            </div>
            <div class="row">
                <div class="informations">
                    <div class="information-date">
                        <div>03-22</div>
                        <p>2018</p>
                    </div>
                    <div class="information-detail">
                        <a href="javascript:;">将文化融入设计 以设计推动创新</a>
                        <img src="images/new.gif" alt="">
                        <p>2013年11月13日，装饰有限公司联合北京大学政府管理学院承办了...</p>
                    </div>
                </div>
                <div class="informations">
                    <div class="information-date">
                        <div>03-22</div>
                        <p>2018</p>
                    </div>
                    <div class="information-detail">
                        <a href="javascript:;">将文化融入设计 以设计推动创新</a>
                        <img src="images/new.gif" alt="">
                        <p>2013年11月13日，装饰有限公司联合北京大学政府管理学院承办了...</p>
                    </div>
                </div>
                <div class="informations">
                    <div class="information-date">
                        <div>03-22</div>
                        <p>2018</p>
                    </div>
                    <div class="information-detail">
                        <a href="javascript:;">将文化融入设计 以设计推动创新</a>
                        <img src="images/new.gif" alt="">
                        <p>2013年11月13日，装饰有限公司联合北京大学政府管理学院承办了...</p>
                    </div>
                </div>
                <div class="informations">
                    <div class="information-date">
                        <div>03-22</div>
                        <p>2018</p>
                    </div>
                    <div class="information-detail">
                        <a href="javascript:;">将文化融入设计 以设计推动创新</a>
                        <img src="images/new.gif" alt="">
                        <p>2013年11月13日，装饰有限公司联合北京大学政府管理学院承办了...</p>
                    </div>
                </div>
                <div class="informations">
                    <div class="information-date">
                        <div>03-22</div>
                        <p>2018</p>
                    </div>
                    <div class="information-detail">
                        <a href="javascript:;">将文化融入设计 以设计推动创新</a>
                        <img src="images/new.gif" alt="">
                        <p>2013年11月13日，装饰有限公司联合北京大学政府管理学院承办了...</p>
                    </div>
                </div>
                <div class="informations">
                    <div class="information-date">
                        <div>03-22</div>
                        <p>2018</p>
                    </div>
                    <div class="information-detail">
                        <a href="javascript:;">将文化融入设计 以设计推动创新</a>
                        <img src="images/new.gif" alt="">
                        <p>2013年11月13日，装饰有限公司联合北京大学政府管理学院承办了...</p>
                    </div>
                </div>
            </div>
            <p class="more">
                <a href="javascript:;">更多资讯 →</a>
            </p>
        </div>
        </div>
        </div>`,
    data(){
        return {
            h:parseInt($("#banner").css("width"))*600/1919+"px",
            n:1
        }
    },
    methods:{
        left(){
            if(this.n==1){
                this.n=3
            }else{
                this.n--
            };
            $("#ul-idxs").children(`:nth-child(${this.n})`).addClass("active").siblings().removeClass("active")
        },
        right(){
            this.n==3?this.n=1:this.n=parseInt(this.n)+1;
            $("#ul-idxs").children(`:nth-child(${this.n})`).addClass("active").siblings().removeClass("active")
        },
        change(e){
            if(e.target.nodeName=="LI"){
                this.n=e.target.dataset.i;
                $("#ul-idxs").children(`:nth-child(${this.n})`).addClass("active").siblings().removeClass("active")
            }
        }
    }
}