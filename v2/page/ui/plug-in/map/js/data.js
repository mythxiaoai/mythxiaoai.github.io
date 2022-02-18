//var arrjson=[{经度key:经度值value,维度key:维度值value,key:value},{经度key:经度值value,维度key:维度值value,key:value}];.....{}json对象里面与顺序无关，具体键值对值，自己根据业务需求来
var data = {
	"data": [
		[113.328382, 23.130108, "雅居乐中心",12,12,0],
		[113.368179, 22.957698, "雅居乐鸿禧优活",12,12,0],
		[113.379331, 23.109411, "保利国际广场",12,12,0],
		[113.28791, 23.143688, "中环国际公寓Ⅰ",12,12,0],
		[113.288665, 23.141462, "中环国际公寓Ⅱ",12,12,0],
		[113.481974, 23.181807, "保利香雪山",12,12,0],
		[113.25627, 23.195242, "保利紫云",12,12,0],
		[113.228763, 23.152831, "保利瓏熙",12,12,0],
		[113.44676, 23.108631, "保利学府里",12,12,0],
		[113.324274, 23.120563, "保利中心",12,12,0],
		[113.336994, 23.128, "保利心语",12,12,0],
		[113.281197, 23.078874, "保利花园",12,12,0],
		[113.285729, 23.201013, "保利云禧",12,12,0],
		[113.386252, 23.110424, "保利天悦",12,12,0],
		[113.214952, 23.176408, "保利西海岸",12,12,0],
		[113.328776, 23.137089, "天河城百货Ⅰ",12,12,0],
		[113.410812, 23.128319, "天河城百货Ⅱ",12,12,0],
		[113.348649, 23.014298, "天河城百货Ⅲ",12,12,0],
		[113.271734, 23.188048, "天河城百货Ⅳ",12,12,0],
		[113.421544, 23.136524, "天河城百货Ⅴ",12,12,0],
		[113.276498, 23.129287, "天河城百货Ⅵ",12,12,0],
		[113.33351, 23.137953, "正佳广场",12,12,0],
		[113.473645, 23.175466, "万达广场Ⅰ",12,12,0],
		[113.273008, 23.178201, "万达广场Ⅱ",12,12,0],
		[113.355784, 23.012701, "万达广场Ⅲ",12,12,0],
		[113.274498, 23.129762, "广百百货Ⅰ",12,12,0],
		[113.350949, 23.128779, "广百百货Ⅱ",12,12,0],
		[113.327268, 23.139285, "广百百货Ⅲ",12,12,0],
		[113.272573, 23.100077, "广百百货Ⅳ",12,12,0],
		[113.279897, 23.103972, "广百百货Ⅴ",12,12,0],
		[113.327856, 23.137863, "广百百货Ⅵ",12,12,0],
		[113.313378, 23.137631, "广百百货Ⅶ",12,12,0],
		[113.275191, 23.129825, "广百百货Ⅷ",12,12,0],
		[113.319696, 23.101535, "广百百货Ⅸ",12,12,0],
		[113.385661, 23.126124, "麦德龙超市Ⅰ",12,12,0],
		[113.270719, 23.202281, "麦德龙超市Ⅱ",12,12,0],
		[113.353241, 22.92577, "麦德龙超市Ⅲ",12,12,0],
		[113.332674, 23.151767, "宜家家居",12,12,0],
		[113.386886, 23.125284, "百安居Ⅰ",12,12,0],
		[113.319379, 23.081206, "百安居Ⅱ",12,12,0],
		[113.259195, 23.095448, "太古仓",12,12,0],
		[113.337914, 23.140021, "太古汇",12,12,0],
		[113.33606, 23.138726, "万菱汇",12,12,0],
		[113.304881, 23.135708, "王府井百货",12,12,0],
		[113.381696, 23.147591, "食博会",12,12,0],
		[114.02026, 22.538772, "福田客运站",12,12,0],
		[113.287373, 22.754917, "容桂客运站",12,12,0],
		[116.61876, 23.654893, "客运中心枢纽站",12,12,0],
		[112.988338, 22.955956, "西樵雅居乐大都会",12,12,0],
		[113.81974, 23.030177, "汽车客运东站",12,12,0],
		[114.697907, 23.743572, "粤运汽车客运站",12,12,0],
		[114.425571, 23.157616, "城北汽车客运站",12,12,0],
		[113.073068, 22.636707, "江门汽车站",12,12,0],
		[116.381672, 23.575227, "岐山汽车站",12,12,0],
		[111.011396, 21.636707, "坡心客运站",12,12,0],
		[116.137008, 24.295711, "粤运江南汽车站",12,12,0],
		[113.050424, 23.692252, "新城汽车客运站",12,12,0],
		[116.825817, 23.562061, "东兴客运站",12,12,0],
		[115.388161, 22.797453, "汕尾汽车总站",12,12,0],
		[113.615549, 24.694094, "曲江汽车站",12,12,0],
		[111.982418, 21.848995, "城南客运站",12,12,0],
		[112.042526, 22.928186, "城西客运站",12,12,0],
		[110.505855, 21.263139, "坡头客运站",12,12,0],
		[112.529022, 23.041609, "金渡客运站",12,12,0],
		[113.391326, 22.517128, "益华客运配客中心",12,12,0],
		[113.604741, 22.361562, "唐家汽车站",12,12,0],
		[108.425554, 22.817924, "埌东汽车站",12,12,0],
		[109.137397, 21.425461, "银滩汽车站",12,12,0],
		[108.346443, 21.62286, "防城港客运站",12,12,0],
		[110.292014, 25.272829, "桂林汽车站",12,12,0],
		[109.413084, 24.305001, "柳州汽车总站",12,12,0],
		[108.95849, 22.290915, "陆屋客运站",12,12,0],
		[110.93601, 23.376572, "藤县客运站",12,12,0],
		[110.139969, 22.62458, "西环客运站",12,12,0],
		[100.241085, 26.865183, "丽江客运站",12,12,0],
		[100.965294, 22.764542, "普洱客运站",12,12,0],
		[103.803092, 25.513119, "高快汽车客运站",12,12,0],
		[102.544181, 24.359447, "玉溪高快客运站",12,12,0],
		[102.795198, 25.042897, "东部汽车客运站",12,12,0],
		[100.259484, 25.597537, "汽车客运站新站",12,12,0],
		[106.711418, 26.564625, "飞机坝客运发车站",12,12,0],
		[106.456692, 26.410507, "马场客运站",12,12,0],
		[106.227133, 28.318877, "遵义习水汽车站",12,12,0],
		[105.654277, 25.520993, "黔西南者相客运站",12,12,0],
	],
	"total": 5365,
	"rt_loc_cnt": 47764510,
	"errorno": 0,
	"NearestTime": "2014-08-29 15:20:00",
	"userTime": "2014-08-29 15:32:11"
}