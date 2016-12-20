var env = {
    buildFolder: "build/",
    distFolder: "dist/",
    publicPath:'/assets/',
    vendorPath: "./src/vendor/",
    pagePath: "./src/page/",
    hmrPath: "/hmr/",
    port:8000,
    entry : {
        index:['./src/bundle/index/index.js','./src/bundle/index/index.css'],
        choose:['./src/bundle/choose/index.js','./src/bundle/choose/index.css'],
        search:['./src/bundle/search/index.js','./src/bundle/search/index.css'],
        mystore:['./src/bundle/mystore/index.js','./src/bundle/mystore/index.css'],
        member:['./src/bundle/member/index.js','./src/bundle/member/index.css'],
        chuangke:['./src/bundle/chuangke/index.js','./src/bundle/chuangke/index.css'],
        orders:['./src/bundle/orders/index.js','./src/bundle/orders/index.css'],
        mywealth:['./src/bundle/mywealth/index.js','./src/bundle/mywealth/index.css'],
        fans:['./src/bundle/fans/index.js','./src/bundle/fans/index.css'],
        school:['./src/bundle/school/index.js','./src/bundle/school/index.css'],
        decorate:['./src/bundle/decorate/index.js','./src/bundle/decorate/index.css'],
        goods:['./src/bundle/goods/index.js','./src/bundle/goods/index.css'],
        orderdetails:['./src/bundle/orderdetails/index.js','./src/bundle/orderdetails/index.css'],
        charity:['./src/bundle/charity/index.js','./src/bundle/charity/index.css'],
        collection:['./src/bundle/collection/index.js','./src/bundle/collection/index.css'],
        invite:['./src/bundle/invite/index.js','./src/bundle/invite/index.css'],
        logistics:['./src/bundle/logistics/index.js','./src/bundle/logistics/index.css'],
        newscontent:['./src/bundle/newscontent/index.js','./src/bundle/newscontent/index.css'],
        orderconfirm:['./src/bundle/orderconfirm/index.js','./src/bundle/orderconfirm/index.css'],
        recommend:['./src/bundle/recommend/index.js','./src/bundle/recommend/index.css'],
        withdrawal:['./src/bundle/withdrawal/index.js','./src/bundle/withdrawal/index.css']
        //vendor:['./src/vendor/vue.js']
    }
};

 

module.exports=env;
