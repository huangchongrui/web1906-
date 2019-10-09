Vue.component("my-header",{
    template:`    <header style="position:fixed;top:0;left:0;z-index:2">
    <div class="navbar">
        <div class="logo"></div>
        <ul @click="navbarClick">
            <li class="active" data-i="/" id="">
                <div>首页</div>
            </li>
            <li data-i="/Design" id="Design">
                <div>设计</div>
            </li>
            <li data-i="/Goodness" id="Goodness">
                <div>优势</div>
            </li>
            <li data-i="/Case" id="Case">
                <div>案例</div>
            </li>
            <li data-i="/Team" id="Team">
                <div>团队</div>
            </li>
            <li data-i="/About" id="About">
                <div>关于</div>
            </li>
            <li data-i="/Information" id="Information">
                <div>资讯</div>
            </li>
            <li data-i="/index" id="index">
                <div>4008-888-888</div> 
            </li>
        </ul>
        <div id="navbar-all" @click="ulShow">
            <div></div>
            <div></div>
            <div></div>
        </div>
    </div>
</header>`,
    methods: {
        ulShow(){
            $("#navbar-all").prev().css("height")=="0px"?$("#navbar-all").prev().css("height","323px"):$("#navbar-all").prev().css("height",0)
        },
        navbarClick(e){
            if(e.target.nodeName=="DIV"){
                window.open(`http://127.0.0.1:8080/index.html#${e.target.parentElement.dataset.i}`);
            }
        }

    },
})