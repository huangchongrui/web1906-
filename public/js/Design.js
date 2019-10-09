var Design={
    template:`    <main>
        <div class="design-head" :style="{height:dh}">
            <img src="images/bar5.jpg" alt="">
        </div>
        <div class="container" style="margin:100px auto 20px">
            <div class="row" @click="designmore">
                <div class="design-details">
                    <div class="design-detail">
                        <h3>智能化设计</h3>
                        <div>空间使用合理规划及划分，从空间的实用性出发。 空间布局策划关乎设计...</div>
                        <div class="diy">></div>
                    </div>
                </div>
                <div class="design-details">
                    <div class="design-detail">
                        <h3>智能化设计</h3>
                        <div>空间使用合理规划及划分，从空间的实用性出发。 空间布局策划关乎设计...</div>
                        <div class="diy">></div>
                    </div>
                </div>
                <div class="design-details">
                    <div class="design-detail">
                        <h3>智能化设计</h3>
                        <div>空间使用合理规划及划分，从空间的实用性出发。 空间布局策划关乎设计...</div>
                        <div class="diy">></div>
                    </div>
                </div>
                <div class="design-details">
                    <div class="design-detail">
                        <h3>智能化设计</h3>
                        <div>空间使用合理规划及划分，从空间的实用性出发。 空间布局策划关乎设计...</div>
                        <div class="diy">></div>
                    </div>
                </div>
                <div class="design-details">
                    <div class="design-detail">
                        <h3>智能化设计</h3>
                        <div>空间使用合理规划及划分，从空间的实用性出发。 空间布局策划关乎设计...</div>
                        <div class="diy">></div>
                    </div>
                </div>
                <div class="design-details">
                    <div class="design-detail">
                        <h3>智能化设计</h3>
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
    },
    methods:{
        designmore(e){
            if(
                e.target.nodeName=="DIV"){
                window.open("http://127.0.0.1:8080/index.html#/DesignMore");
            }
        }
    }
}