Vue.component("my-footer",{
    template:(`            <div class="footer">
    <div class="container">
        <div class="addresss row">
            <div class="address">
                <img src="images/address1.png" alt="">
                <div class="address-detail">
                    <p>地址</p>
                    <p>江苏省南京市玄武区玄武湖</p>
                </div>
            </div>
            <div class="address">
                <img src="images/address1.png" alt="">
                <div class="address-detail">
                    <p>地址</p>
                    <p>江苏省南京市玄武区玄武湖</p>
                </div>
            </div>
            <div class="address">
                <img src="images/address1.png" alt="">
                <div class="address-detail">
                    <p>地址</p>
                    <p>江苏省南京市玄武区玄武湖</p>
                </div>
            </div>
        </div>
        <ul class="menu row"l @click="navbarClick">
            <li>
                <a href="javascript:;" data-i="/" >首页</a>
            </li>
            <li>
                <a href="javascript:;" data-i="/Design">设计</a>
            </li>
            <li>
                <a href="javascript:;" data-i="/Goodness">优势</a>
            </li>
            <li>
                <a href="javascript:;" data-i="/Case">案例</a>
            </li>
            <li>
                <a href="javascript:;" data-i="/Team">团队</a>
            </li>
            <li>
                <a href="javascript:;" data-i="/About">关于</a>
            </li>
            <li>
                <a href="javascript:;" data-i="/Information">资讯</a>
            </li>
        </ul>
        <p>专注公装领域 | 15年诚信企业 | 设计与施工乙级资质 | 中国装饰行业协会诚信企业 | 亚太区广东优秀装饰设计企业 | 中国设计年度人物 | 2016年度杰出设计师</p>
        <p>Copyright &copy; 2002-2018 某某装饰有限公司 版权所有 备案号：苏ICP12345678</p>
    </div>
</div>`),
methods: {
    navbarClick(e){
        if(e.target.nodeName=="A"){
            window.open(`http://127.0.0.1:8080/index.html#${e.target.dataset.i}`);
        }
    }
},
})