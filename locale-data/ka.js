!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e.ReactIntlLocaleData=e.ReactIntlLocaleData||{},e.ReactIntlLocaleData.ka=t())}(this,function(){"use strict";return[{locale:"ka",pluralRuleFunction:function(e,t){var a=String(e).split(".")[0],o=a.slice(-2);return t?1==a?"one":0==a||2<=o&&o<=20||40==o||60==o||80==o?"many":"other":1==e?"one":"other"},fields:{year:{displayName:"წელი",relative:{0:"ამ წელს",1:"მომავალ წელს","-1":"გასულ წელს"},relativeTime:{future:{one:"{0} წელიწადში",other:"{0} წელიწადში"},past:{one:"{0} წლის წინ",other:"{0} წლის წინ"}}},month:{displayName:"თვე",relative:{0:"ამ თვეში",1:"მომავალ თვეს","-1":"გასულ თვეს"},relativeTime:{future:{one:"{0} თვეში",other:"{0} თვეში"},past:{one:"{0} თვის წინ",other:"{0} თვის წინ"}}},day:{displayName:"დღე",relative:{0:"დღეს",1:"ხვალ",2:"ზეგ","-2":"გუშინწინ","-1":"გუშინ"},relativeTime:{future:{one:"{0} დღეში",other:"{0} დღეში"},past:{one:"{0} დღის წინ",other:"{0} დღის წინ"}}},hour:{displayName:"საათი",relative:{0:"ამ საათში"},relativeTime:{future:{one:"{0} საათში",other:"{0} საათში"},past:{one:"{0} საათის წინ",other:"{0} საათის წინ"}}},minute:{displayName:"წუთი",relative:{0:"ამ წუთში"},relativeTime:{future:{one:"{0} წუთში",other:"{0} წუთში"},past:{one:"{0} წუთის წინ",other:"{0} წუთის წინ"}}},second:{displayName:"წამი",relative:{0:"ახლა"},relativeTime:{future:{one:"{0} წამში",other:"{0} წამში"},past:{one:"{0} წამის წინ",other:"{0} წამის წინ"}}}}}]});
