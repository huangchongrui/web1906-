var Case={
    template:`       <main>
    <div class="design-head" :style="{height:dh}">
        <img src="images/bar43.jpg" alt="">
    </div>
    <div class="case-main main" style="margin-top:-4px">
        <div class="container">
            <div class="head">
                <h2 class="chn-white chn">案例</h2>
                <p class="eng-white eng">CASE</p>
            </div>
            <div class="row" @click="casemore">
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
</main>`,
    data(){
        return {dh:parseInt($(".design-head").css("width"))*400/1920+"px"}
    },
    methods:{
        casemore(e){
            if(e.target.nodeName=="IMG" ||e.target.nodeName=="DIV"){
                window.open("http://127.0.0.1:8080/index.html#/CaseMore");
            }
        }
    }
}