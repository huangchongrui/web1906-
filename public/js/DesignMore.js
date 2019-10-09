var DesignMore={
    template:`    <main>
    <div class="design-head" :style="{height:dh}">
        <img src="images/bar5.jpg" alt="">
    </div>
    <div class="d-title">智能化设计</div>
    <div class="container" id="d-detail">
        <p>空间使用合理规划及划分，从空间的实用性出发。</p>
        <p>空间布局策划关乎设计学、人体工程学、统计学及美好共同的结合体，我们从以下几个点来了解空间布局的重要性。</p>
        <img src="images/1-1P3210S14R53.jpg" alt="">
        <h3>空间规划能够满足企业的使用</h3>
        <p>比如企业具备：前台接待区、办公区、休闲区、会议区、办公室区、走道等等，这些基础的区域划分必须根据企业的需求以及未来的发展需求做好明确的规划及合理的划分。</p>
        <h3>空间实用性强，避免空间浪费</h3>
        <p>让空间的每个地方都能有很好的利用，避免空间的浪费。</p>
        <h3>空间规划符合人体工程学</h3>
        <p>比如办公座位的舒适度（高度、宽度等），走道的舒适度（宽度、拐角等）以及整体的划分比例等以达到美学的标准。</p>
    </div>
</main>`,
    data(){
        return {dh:parseInt($(".design-head").css("width"))*400/1920+"px"}
    }
}