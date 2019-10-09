var CaseMore={
    template:`    <main>
    <div class="design-head" :style="{height:dh}">
        <img src="images/bar1.jpg" alt="">
    </div>
    <div class="d-title">滨海幸福里</div>
    <div class="container" id="d-detail">
        <p>设计说明：这是一个以欧式为设计主题的住宅空间，通过优美的线条，将家打造的温馨舒适。 尽可能的在空间划分上做到合理，细致。独立出来又紧紧结合在一起。高贵典雅，打造视觉空间。</p>
        <img src="images/1-1P320102603C1.jpg" alt="">
        <img src="images/1-1P320102615Q3.jpg" alt="">
        <img src="images/1-1P320102621J7.jpg" alt="">
        <img src="images/1-1P320102609447.jpg" alt="">
    </div>
</main>`,
    data(){
        return {dh:parseInt($(".design-head").css("width"))*400/1920+"px"}
    },
}