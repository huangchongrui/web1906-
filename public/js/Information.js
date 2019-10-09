var Information={
    template:`    <main>
    <div class="design-head" :style="{height:dh}">
    <img src="images/bar16.jpg" alt="">
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
            <div class="row" @click="informationmore">
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
        </div>
        </div>
    </main>`,
    data(){
        return {dh:parseInt($(".design-head").css("width"))*400/1920+"px"}
    },
    methods:{
        informationmore(e){
            if(e.target.nodeName=="A"){
                window.open("http://127.0.0.1:8080/index.html#/InformationMore");
            }
        }
    }
}