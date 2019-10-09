var Team={
    template:`    <main>        <div class="design-head" :style="{height:dh}">
    <img src="images/bar43.jpg" alt="">
</div>
<div class="main team-main" style="margin-top: -4px;">
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
                    <a class="person-img" title="李强">
                        <img src="images/person-img.jpg" alt="">
                    </a>
                </div>
            </div>
            <div class="team-row">
                <div class="person">
                    <a class="person-name" href="javascript:;" title="李强">李强</a>
                    <span class="person-position">副总经理</span>
                    <p class="person-detail">学习及工作经历：23年项目管理经验，精通施工工艺、把控工地能力强。熟悉工地现场施工管理、国家及行业的质量标准、施工工艺及流程、验收规范、材料性能及价格等。主持过众...</p>
                    <a class="person-img" title="李强">
                        <img src="images/person-img.jpg" alt="">
                    </a>
                </div>
            </div>
            <div class="team-row">
                <div class="person">
                    <a class="person-name" href="javascript:;" title="李强">李强</a>
                    <span class="person-position">副总经理</span>
                    <p class="person-detail">学习及工作经历：23年项目管理经验，精通施工工艺、把控工地能力强。熟悉工地现场施工管理、国家及行业的质量标准、施工工艺及流程、验收规范、材料性能及价格等。主持过众...</p>
                    <a class="person-img" title="李强">
                        <img src="images/person-img.jpg" alt="">
                    </a>
                </div>
            </div>
            <div class="team-row">
                <div class="person">
                    <a class="person-name" href="javascript:;" title="李强">李强</a>
                    <span class="person-position">副总经理</span>
                    <p class="person-detail">学习及工作经历：23年项目管理经验，精通施工工艺、把控工地能力强。熟悉工地现场施工管理、国家及行业的质量标准、施工工艺及流程、验收规范、材料性能及价格等。主持过众...</p>
                    <a class="person-img" title="李强">
                        <img src="images/person-img.jpg" alt="">
                    </a>
                </div>
            </div>
        </div>
    </div>
    </main>`,
    data(){
        return {dh:parseInt($(".design-head").css("width"))*400/1920+"px"}
    }
}