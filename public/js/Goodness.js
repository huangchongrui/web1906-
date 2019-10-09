var Goodness={
    template:`    <main>
    <div class="design-head" :style="{height:dh}">
        <img src="images/bar43.jpg" alt="">
    </div>
    <div class="container" style="margin:100px auto 20px">
        <div class="row">
            <div class="design-details">
                <div class="design-detail">
                    <h3>售后服务</h3>
                    <div>空间使用合理规划及划分，从空间的实用性出发。 空间布局策划关乎设计...</div>
                    <div class="diy">></div>
                </div>
            </div>
            <div class="design-details">
                <div class="design-detail">
                    <h3>一站式配套</h3>
                    <div>空间使用合理规划及划分，从空间的实用性出发。 空间布局策划关乎设计...</div>
                    <div class="diy">></div>
                </div>
            </div>
            <div class="design-details">
                <div class="design-detail">
                    <h3>服务流程</h3>
                    <div>空间使用合理规划及划分，从空间的实用性出发。 空间布局策划关乎设计...</div>
                    <div class="diy">></div>
                </div>
            </div>
            <div class="design-details">
                <div class="design-detail">
                    <h3>环保优势</h3>
                    <div>空间使用合理规划及划分，从空间的实用性出发。 空间布局策划关乎设计...</div>
                    <div class="diy">></div>
                </div>
            </div>
        </div>
    </div>
    <div class="num">共 1页6条记录</div>
</main>`,
    data(){
        return {dh:parseInt($(".design-head").css("width"))*400/1920+"px"}
    }
}