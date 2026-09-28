'use strict';
const SugarData={
  version:'2.0.0',
  sources:[
    {id:'who',title:'WHO · Healthy diet',date:'2026-01-26',url:'https://www.who.int/news-room/fact-sheets/detail/healthy-diet',use:'游离糖的范围、果汁说明与一般膳食建议。'},
    {id:'who2015',title:'WHO · 关于减少成人与儿童糖摄入的说明',date:'2015-03-04',url:'https://www.who.int/news/item/04-03-2015-who-calls-on-countries-to-reduce-sugars-intake-among-adults-and-children',use:'完整水果、奶中天然糖与游离糖的区别。'},
    {id:'nhc',title:'国家卫健委 · 2024年6月6日新闻发布会',date:'2024-06-06',url:'https://www.nhc.gov.cn/xcs/c100122/202406/4712324a0508410b953a3d3eb717ab43.shtml',use:'健康成年人添加糖摄入建议及日常饮水选择。'},
    {id:'label',title:'国家卫健委 · GB 28050—2025 问答',date:'2025-09-25',url:'https://www.nhc.gov.cn/sps/c100087/202509/470fa4ff5de14dd38619223cce9da4e7.shtml',use:'糖、碳水化合物的定义；新标准实施日期。'},
    {id:'label2011',title:'国家卫健委 · GB 28050—2011 问答（修订版）',date:'2014-02',url:'https://www.nhc.gov.cn/zwgk/zcjd/201402/6f68ec6692594cf28d190cb47b770c11.shtml',use:'现行营养标签标示的相关解释。'}
  ],
  labels:[
    {id:'a',name:'A号标签',subtitle:'按每100 mL标示',sugar:8.2,basis:'100',serving:100,volume:450,correct:'calculate',needed:['sugar','basis','volume'],rows:[['energy','能量','176 kJ'],['carb','碳水化合物','9.4 g'],['sugar','糖','8.2 g'],['basis','标示单位','每100 mL'],['volume','整瓶容量','450 mL']],explanation:'糖含量、标示单位和整瓶容量齐全，可以计算整瓶糖总量。8.2 × 450 ÷ 100 = 36.9 g。'},
    {id:'b',name:'B号标签',subtitle:'按每份标示',sugar:9,basis:'serving',serving:150,volume:450,correct:'calculate',needed:['sugar','basis','serving','volume'],rows:[['energy','能量','175 kJ'],['carb','碳水化合物','10 g'],['sugar','糖','9 g'],['basis','标示单位','每份'],['serving','每份容量','150 mL'],['volume','整瓶容量','450 mL']],explanation:'一瓶有450 ÷ 150 = 3份，糖总量为9 × 3 = 27 g。每份的9 g不能直接当作整瓶的数值。'},
    {id:'c',name:'C号标签',subtitle:'信息缺失的情况',sugar:null,basis:'unknown',serving:100,volume:500,correct:'unknown',needed:[],rows:[['energy','能量','126 kJ'],['carb','碳水化合物','7.4 g'],['protein','蛋白质','0 g'],['basis','标示单位','每100 mL'],['volume','整瓶容量','500 mL']],explanation:'这里没有单独列出“糖”。7.4 g是碳水化合物，不能据此断言整瓶含糖37 g，也不能把缺失当作0。'}
  ],
  quiz:{
    opening:{question:'一瓶500 mL，每100 mL含糖8 g。整瓶糖总量是多少？',options:['8 g','40 g','信息不足'],correct:1,dimension:'换算',explain:'8 × 500 ÷ 100 = 40 g。这是按标签换算的糖总量。'},
    c1:{question:'三瓶中，哪一瓶无法仅凭给出的信息计算糖总量？',options:['X瓶','Y瓶','Z瓶'],correct:2,dimension:'证据',explain:'Z瓶只列出碳水化合物，缺少单独的糖含量。X和Y的数据均可换算。'},
    c2:{question:'Y瓶每份200 mL含糖8 g，一瓶500 mL。整瓶是多少？',options:['8 g','20 g','40 g'],correct:1,dimension:'换算',explain:'500 ÷ 200 = 2.5份；8 × 2.5 = 20 g。'},
    c3:{question:'X瓶每100 mL含糖5 g、整瓶400 mL；Y瓶整瓶20 g。各喝整瓶时？',options:['X的糖总量更少','Y的糖总量更少','两瓶一样多'],correct:2,dimension:'比较',explain:'X为5 × 400 ÷ 100 = 20 g，和Y相同。这一结论仅比较糖总量。'},
    t1:{question:'换一张标签：每份125 mL含糖6 g，喝250 mL，糖总量是多少？',options:['6 g','12 g','24 g'],correct:1,dimension:'换算',explain:'实际喝下2份，所以是6 × 2 = 12 g。'},
    t2:{question:'只知道碳水化合物6 g/100 mL，糖这一项未给出，应该？',options:['按6 g当作糖计算','按0 g记录','保留未知，补充糖含量'],correct:2,dimension:'证据',explain:'信息不足时保留未知，不能用碳水化合物或0替代。'},
    t3:{question:'标签写糖总量12 g，能据此认定添加糖就是12 g吗？',options:['能，两个概念相同','不能，还需来源信息'],correct:1,dimension:'口径',explain:'糖总量可能包括天然存在和添加的糖，不能直接拆出添加糖。'}
  },
  foods:[{id:'honey',name:'蜂蜜中的天然糖',correct:'yes',explain:'属于游离糖；天然来源并不自动排除在游离糖之外。'},{id:'juice',name:'纯果汁中的天然糖',correct:'yes',explain:'属于游离糖，即使没有额外加糖也一样。'},{id:'apple',name:'完整苹果中的天然糖',correct:'no',explain:'不属于WHO在此定义的游离糖。'},{id:'milk',name:'未加糖纯奶中的天然乳糖',correct:'no',explain:'不属于WHO在此定义的游离糖。'}]
};
