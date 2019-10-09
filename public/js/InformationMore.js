var InformationMore={
    template:`     <main>
    <div class="design-head" :style="{height:dh}">
        <img src="images/bar16.jpg" alt="">
    </div>
    <div class="d-title">将文化融入设计 以设计推动创新</div>
    <div class="container" id="d-detail">
        <p>2013年11月13日，装饰有限公司联合北京大学政府管理学院承办了“文化与设计”主题设计沙龙活动。此次沙龙在文化气息浓厚的北京大学政府管理学院廖凯原楼举行，旨在通过对东西方文化的融合，对建筑装饰设计中文化元素的定位和探讨，让建筑装饰更好地体现文化内涵和时代色彩，美化生活和环境，从而推动建筑装饰行业的创新与发展。</p>
        <p>建筑装饰协会会长亲临现场参加了此次沙龙活动，建筑装饰协会设计委执行会长发表了热情洋溢的致辞。我国著名哲学家、国学大家楼宇烈先生，以及住房城乡建设部村镇建设司司长，教授级高级城市规划师李兵第先生，分别以“中国文化的艺术精神”和“走新型城镇化道路，推进城乡一体化规划”做了精彩演讲。三十余位建筑装饰行业企业设计精英人士参加了主题沙龙。</p>
        <p>装饰有限公司常务副总经理作为承办方的代表在致辞中说：未来十年，中国建筑装饰行业必将实现从传统产业向高新技术产业的转变，这种转变不仅仅是实力的整合、行业的重新洗牌，更是以“科技创新”为核心的一种较量，而“文化与设计”就是这场装饰行业科技创新变革中最前沿，同时也是最贴近生活，最符合人们对美的追求，最顺应时代潮流，最具前瞻性的文化理念创新。</p>
        <p>此次沙龙活动在浓厚的文化氛围中圆满结束。</p>
    </div>
</main>`,
    data(){
        return {dh:parseInt($(".design-head").css("width"))*400/1920+"px"}
    }
}