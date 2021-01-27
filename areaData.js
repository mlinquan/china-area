const areaData = {11:{v:"北京2",c:{101:"东城5",102:"西城5",105:"朝阳5",106:"丰台5",107:"石景山5",108:"海淀5",109:"门头沟5",111:"房山5",112:"通州5",113:"顺义5",114:"昌平5",115:"大兴5",116:"怀柔5",117:"平谷5",118:"密云5",119:"延庆5"}},12:{v:"天津2",c:{101:"和平5",102:"河东5",103:"河西5",104:"南开5",105:"河北5",106:"红桥5",110:"东丽5",111:"西青5",112:"津南5",113:"北辰5",114:"武清5",115:"宝坻5",116:"滨海新5",117:"宁河5",118:"静海5",119:"蓟州5"}},13:{v:"河北1",c:{1:{v:"石家庄2",c:{2:"长安区",4:"桥西区",5:"新华区",7:"井陉矿区",8:"裕华区",9:"藁城区",10:"鹿泉区",11:"栾城区",21:"井陉县",23:"正定县",25:"行唐县",26:"灵寿县",27:"高邑县",28:"深泽县",29:"赞皇县",30:"无极县",31:"平山县",32:"元氏县",33:"赵县",71:"石家庄高新技术产业开发区",72:"石家庄循环化工园区",81:"辛集市",83:"晋州市",84:"新乐市"}},2:{v:"唐山2",c:{2:"路南区",3:"路北区",4:"古冶区",5:"开平区",7:"丰南区",8:"丰润区",9:"曹妃甸区",24:"滦南县",25:"乐亭县",27:"迁西县",29:"玉田县",71:"河北唐山芦台经济开发区",72:"唐山市汉沽管理区",73:"唐山高新技术产业开发区",74:"河北唐山海港经济开发区",81:"遵化市",83:"迁安市",84:"滦州市"}},3:{v:"秦皇岛2",c:{2:"海港区",3:"山海关区",4:"北戴河区",6:"抚宁区",21:"青龙9",22:"昌黎县",24:"卢龙县",71:"秦皇岛市经济技术开发区",72:"北戴河新区"}},4:{v:"邯郸2",c:{2:"邯山区",3:"丛台区",4:"复兴区",6:"峰峰矿区",7:"肥乡区",8:"永年区",23:"临漳县",24:"成安县",25:"大名县",26:"涉县",27:"磁县",30:"邱县",31:"鸡泽县",32:"广平县",33:"馆陶县",34:"魏县",35:"曲周县",71:"邯郸经济技术开发区",73:"邯郸冀南新区",81:"武安市"}},5:{v:"邢台2",c:{2:"襄都区",3:"信都区",5:"任泽区",6:"南和区",22:"临城县",23:"内丘县",24:"柏乡县",25:"隆尧县",28:"宁晋县",29:"巨鹿县",30:"新河县",31:"广宗县",32:"平乡县",33:"威县",34:"清河县",35:"临西县",71:"河北邢台经济开发区",81:"南宫市",82:"沙河市"}},6:{v:"保定2",c:{2:"竞秀区",6:"莲池区",7:"满城区",8:"清苑区",9:"徐水区",23:"涞水县",24:"阜平县",26:"定兴县",27:"唐县",28:"高阳县",29:"容城县",30:"涞源县",31:"望都县",32:"安新县",33:"易县",34:"曲阳县",35:"蠡县",36:"顺平县",37:"博野县",38:"雄县",71:"保定高新技术产业开发区",72:"保定白沟新城",81:"涿州市",82:"定州市",83:"安国市",84:"高碑店市"}},7:{v:"张家口2",c:{2:"桥东区",3:"桥西区",5:"宣化区",6:"下花园区",8:"万全区",9:"崇礼区",22:"张北县",23:"康保县",24:"沽源县",25:"尚义县",26:"蔚县",27:"阳原县",28:"怀安县",30:"怀来县",31:"涿鹿县",32:"赤城县",71:"张家口经济开发区",72:"张家口市察北管理区",73:"张家口市塞北管理区"}},8:{v:"承德2",c:{2:"双桥区",3:"双滦区",4:"鹰手营子矿区",21:"承德县",22:"兴隆县",24:"滦平县",25:"隆化县",26:"丰宁9",27:"宽城9",28:"围场10",71:"承德高新技术产业开发区",81:"平泉市"}},9:{v:"沧州2",c:{2:"新华区",3:"运河区",21:"沧县",22:"青县",23:"东光县",24:"海兴县",25:"盐山县",26:"肃宁县",27:"南皮县",28:"吴桥县",29:"献县",30:"孟村11",71:"河北沧州经济开发区",72:"沧州高新技术产业开发区",73:"沧州渤海新区",81:"泊头市",82:"任丘市",83:"黄骅市",84:"河间市"}},10:{v:"廊坊2",c:{2:"安次区",3:"广阳区",22:"固安县",23:"永清县",24:"香河县",25:"大城县",26:"文安县",28:"大厂11",71:"廊坊经济技术开发区",81:"霸州市",82:"三河市"}},11:{v:"衡水2",c:{2:"桃城区",3:"冀州区",21:"枣强县",22:"武邑县",23:"武强县",24:"饶阳县",25:"安平县",26:"故城县",27:"景县",28:"阜城县",71:"河北衡水高新技术产业开发区",72:"衡水滨湖新区",82:"深州市"}}}},14:{v:"山西1",c:{1:{v:"太原2",c:{5:"小店区",6:"迎泽区",7:"杏花岭区",8:"尖草坪区",9:"万柏林区",10:"晋源区",21:"清徐县",22:"阳曲县",23:"娄烦县",71:"山西转型综合改革示范区",81:"古交市"}},2:{v:"大同2",c:{12:"新荣区",13:"平城区",14:"云冈区",15:"云州区",21:"阳高县",22:"天镇县",23:"广灵县",24:"灵丘县",25:"浑源县",26:"左云县",71:"山西大同经济开发区"}},3:{v:"阳泉2",c:{2:"城区",3:"矿区",11:"郊区",21:"平定县",22:"盂县"}},4:{v:"长治2",c:{3:"潞州区",4:"上党区",5:"屯留区",6:"潞城区",23:"襄垣县",25:"平顺县",26:"黎城县",27:"壶关县",28:"长子县",29:"武乡县",30:"沁县",31:"沁源县",71:"山西长治高新技术产业园区"}},5:{v:"晋城2",c:{2:"城区",21:"沁水县",22:"阳城县",24:"陵川县",25:"泽州县",81:"高平市"}},6:{v:"朔州2",c:{2:"朔城区",3:"平鲁区",21:"山阴县",22:"应县",23:"右玉县",71:"山西朔州经济开发区",81:"怀仁市"}},7:{v:"晋中2",c:{2:"榆次区",3:"太谷区",21:"榆社县",22:"左权县",23:"和顺县",24:"昔阳县",25:"寿阳县",27:"祁县",28:"平遥县",29:"灵石县",81:"介休市"}},8:{v:"运城2",c:{2:"盐湖区",21:"临猗县",22:"万荣县",23:"闻喜县",24:"稷山县",25:"新绛县",26:"绛县",27:"垣曲县",28:"夏县",29:"平陆县",30:"芮城县",81:"永济市",82:"河津市"}},9:{v:"忻州2",c:{2:"忻府区",21:"定襄县",22:"五台县",23:"代县",24:"繁峙县",25:"宁武县",26:"静乐县",27:"神池县",28:"五寨县",29:"岢岚县",30:"河曲县",31:"保德县",32:"偏关县",71:"五台山风景名胜区",81:"原平市"}},10:{v:"临汾2",c:{2:"尧都区",21:"曲沃县",22:"翼城县",23:"襄汾县",24:"洪洞县",25:"古县",26:"安泽县",27:"浮山县",28:"吉县",29:"乡宁县",30:"大宁县",31:"隰县",32:"永和县",33:"蒲县",34:"汾西县",81:"侯马市",82:"霍州市"}},11:{v:"吕梁2",c:{2:"离石区",21:"文水县",22:"交城县",23:"兴县",24:"临县",25:"柳林县",26:"石楼县",27:"岚县",28:"方山县",29:"中阳县",30:"交口县",81:"孝义市",82:"汾阳市"}}}},15:{v:"内蒙古12",c:{1:{v:"呼和浩特2",c:{2:"新城区",3:"回民区",4:"玉泉区",5:"赛罕区",21:"土默特左旗",22:"托克托县",23:"和林格尔县",24:"清水河县",25:"武川县",72:"呼和浩特经济技术开发区"}},2:{v:"包头2",c:{2:"东河区",3:"昆都仑区",4:"青山区",5:"石拐区",6:"白云鄂博矿区",7:"九原区",21:"土默特右旗",22:"固阳县",23:"达尔罕茂明安联合旗",71:"包头稀土高新技术产业开发区"}},3:{v:"乌海2",c:{2:"海勃湾区",3:"海南区",4:"乌达区"}},4:{v:"赤峰2",c:{2:"红山区",3:"元宝山区",4:"松山区",21:"阿鲁科尔沁旗",22:"巴林左旗",23:"巴林右旗",24:"林西县",25:"克什克腾旗",26:"翁牛特旗",28:"喀喇沁旗",29:"宁城县",30:"敖汉旗"}},5:{v:"通辽2",c:{2:"科尔沁区",21:"科尔沁左翼中旗",22:"科尔沁左翼后旗",23:"开鲁县",24:"库伦旗",25:"奈曼旗",26:"扎鲁特旗",71:"通辽经济技术开发区",81:"霍林郭勒市"}},6:{v:"鄂尔多斯2",c:{2:"东胜区",3:"康巴什区",21:"达拉特旗",22:"准格尔旗",23:"鄂托克前旗",24:"鄂托克旗",25:"杭锦旗",26:"乌审旗",27:"伊金霍洛旗"}},7:{v:"呼伦贝尔2",c:{2:"海拉尔区",3:"扎赉诺尔区",21:"阿荣旗",22:"莫力达瓦13",23:"鄂伦春自治旗",24:"鄂温克族自治旗",25:"陈巴尔虎旗",26:"新巴尔虎左旗",27:"新巴尔虎右旗",81:"满洲里市",82:"牙克石市",83:"扎兰屯市",84:"额尔古纳市",85:"根河市"}},8:{v:"巴彦淖尔2",c:{2:"临河区",21:"五原县",22:"磴口县",23:"乌拉特前旗",24:"乌拉特中旗",25:"乌拉特后旗",26:"杭锦后旗"}},9:{v:"乌兰察布2",c:{2:"集宁区",21:"卓资县",22:"化德县",23:"商都县",24:"兴和县",25:"凉城县",26:"察哈尔右翼前旗",27:"察哈尔右翼中旗",28:"察哈尔右翼后旗",29:"四子王旗",81:"丰镇市"}},22:{v:"兴安3",c:{1:"乌兰浩特市",2:"阿尔山市",21:"科尔沁右翼前旗",22:"科尔沁右翼中旗",23:"扎赉特旗",24:"突泉县"}},25:{v:"锡林郭勒3",c:{1:"二连浩特市",2:"锡林浩特市",22:"阿巴嘎旗",23:"苏尼特左旗",24:"苏尼特右旗",25:"东乌珠穆沁旗",26:"西乌珠穆沁旗",27:"太仆寺旗",28:"镶黄旗",29:"正镶白旗",30:"正蓝旗",31:"多伦县",71:"乌拉盖管委会"}},29:{v:"阿拉善3",c:{21:"阿拉善左旗",22:"阿拉善右旗",23:"额济纳旗",71:"内蒙古阿拉善经济开发区"}}}},21:{v:"辽宁1",c:{1:{v:"沈阳2",c:{2:"和平区",3:"沈河区",4:"大东区",5:"皇姑区",6:"铁西区",11:"苏家屯区",12:"浑南区",13:"沈北新区",14:"于洪区",15:"辽中区",23:"康平县",24:"法库县",81:"新民市"}},2:{v:"大连2",c:{2:"中山区",3:"西岗区",4:"沙河口区",11:"甘井子区",12:"旅顺口区",13:"金州区",14:"普兰店区",24:"长海县",81:"瓦房店市",83:"庄河市"}},3:{v:"鞍山2",c:{2:"铁东区",3:"铁西区",4:"立山区",11:"千山区",21:"台安县",23:"岫岩9",81:"海城市"}},4:{v:"抚顺2",c:{2:"新抚区",3:"东洲区",4:"望花区",11:"顺城区",21:"抚顺县",22:"新宾9",23:"清原9"}},5:{v:"本溪2",c:{2:"平山区",3:"溪湖区",4:"明山区",5:"南芬区",21:"本溪9",22:"桓仁9"}},6:{v:"丹东2",c:{2:"元宝区",3:"振兴区",4:"振安区",24:"宽甸9",81:"东港市",82:"凤城市"}},7:{v:"锦州2",c:{2:"古塔区",3:"凌河区",11:"太和区",26:"黑山县",27:"义县",81:"凌海市",82:"北镇市"}},8:{v:"营口2",c:{2:"站前区",3:"西市区",4:"鲅鱼圈区",11:"老边区",81:"盖州市",82:"大石桥市"}},9:{v:"阜新2",c:{2:"海州区",3:"新邱区",4:"太平区",5:"清河门区",11:"细河区",21:"阜新14",22:"彰武县"}},10:{v:"辽阳2",c:{2:"白塔区",3:"文圣区",4:"宏伟区",5:"弓长岭区",11:"太子河区",21:"辽阳县",81:"灯塔市"}},11:{v:"盘锦2",c:{2:"双台子区",3:"兴隆台区",4:"大洼区",22:"盘山县"}},12:{v:"铁岭2",c:{2:"银州区",4:"清河区",21:"铁岭县",23:"西丰县",24:"昌图县",81:"调兵山市",82:"开原市"}},13:{v:"朝阳2",c:{2:"双塔区",3:"龙城区",21:"朝阳县",22:"建平县",24:"喀喇沁左翼14",81:"北票市",82:"凌源市"}},14:{v:"葫芦岛2",c:{2:"连山区",3:"龙港区",4:"南票区",21:"绥中县",22:"建昌县",81:"兴城市"}}}},22:{v:"吉林1",c:{1:{v:"长春2",c:{2:"南关区",3:"宽城区",4:"朝阳区",5:"二道区",6:"绿园区",12:"双阳区",13:"九台区",22:"农安县",71:"长春经济技术开发区",72:"长春净月高新技术产业开发区",73:"长春高新技术产业开发区",74:"长春汽车经济技术开发区",82:"榆树市",83:"德惠市",84:"公主岭市"}},2:{v:"吉林2",c:{2:"昌邑区",3:"龙潭区",4:"船营区",11:"丰满区",21:"永吉县",71:"吉林经济开发区",72:"吉林高新技术产业开发区",73:"吉林中国新加坡食品区",81:"蛟河市",82:"桦甸市",83:"舒兰市",84:"磐石市"}},3:{v:"四平2",c:{2:"铁西区",3:"铁东区",22:"梨树县",23:"伊通9",82:"双辽市"}},4:{v:"辽源2",c:{2:"龙山区",3:"西安区",21:"东丰县",22:"东辽县"}},5:{v:"通化2",c:{2:"东昌区",3:"二道江区",21:"通化县",23:"辉南县",24:"柳河县",81:"梅河口市",82:"集安市"}},6:{v:"白山2",c:{2:"浑江区",5:"江源区",21:"抚松县",22:"靖宇县",23:"长白15",81:"临江市"}},7:{v:"松原2",c:{2:"宁江区",21:"前郭尔罗斯14",22:"长岭县",23:"乾安县",71:"吉林松原经济开发区",81:"扶余市"}},8:{v:"白城2",c:{2:"洮北区",21:"镇赉县",22:"通榆县",71:"吉林白城经济开发区",81:"洮南市",82:"大安市"}},24:{v:"延边16",c:{1:"延吉市",2:"图们市",3:"敦化市",4:"珲春市",5:"龙井市",6:"和龙市",24:"汪清县",26:"安图县"}}}},23:{v:"黑龙江1",c:{1:{v:"哈尔滨2",c:{2:"道里区",3:"南岗区",4:"道外区",8:"平房区",9:"松北区",10:"香坊区",11:"呼兰区",12:"阿城区",13:"双城区",23:"依兰县",24:"方正县",25:"宾县",26:"巴彦县",27:"木兰县",28:"通河县",29:"延寿县",83:"尚志市",84:"五常市"}},2:{v:"齐齐哈尔2",c:{2:"龙沙区",3:"建华区",4:"铁锋区",5:"昂昂溪区",6:"富拉尔基区",7:"碾子山区",8:"梅里斯达斡尔族区",21:"龙江县",23:"依安县",24:"泰来县",25:"甘南县",27:"富裕县",29:"克山县",30:"克东县",31:"拜泉县",81:"讷河市"}},3:{v:"鸡西2",c:{2:"鸡冠区",3:"恒山区",4:"滴道区",5:"梨树区",6:"城子河区",7:"麻山区",21:"鸡东县",81:"虎林市",82:"密山市"}},4:{v:"鹤岗2",c:{2:"向阳区",3:"工农区",4:"南山区",5:"兴安区",6:"东山区",7:"兴山区",21:"萝北县",22:"绥滨县"}},5:{v:"双鸭山2",c:{2:"尖山区",3:"岭东区",5:"四方台区",6:"宝山区",21:"集贤县",22:"友谊县",23:"宝清县",24:"饶河县"}},6:{v:"大庆2",c:{2:"萨尔图区",3:"龙凤区",4:"让胡路区",5:"红岗区",6:"大同区",21:"肇州县",22:"肇源县",23:"林甸县",24:"杜尔伯特14",71:"大庆高新技术产业开发区"}},7:{v:"伊春2",c:{17:"伊美区",18:"乌翠区",19:"友好区",22:"嘉荫县",23:"汤旺县",24:"丰林县",25:"大箐山县",26:"南岔县",51:"金林区",81:"铁力市"}},8:{v:"佳木斯2",c:{3:"向阳区",4:"前进区",5:"东风区",11:"郊区",22:"桦南县",26:"桦川县",28:"汤原县",81:"同江市",82:"富锦市",83:"抚远市"}},9:{v:"七台河2",c:{2:"新兴区",3:"桃山区",4:"茄子河区",21:"勃利县"}},10:{v:"牡丹江2",c:{2:"东安区",3:"阳明区",4:"爱民区",5:"西安区",25:"林口县",71:"牡丹江经济技术开发区",81:"绥芬河市",83:"海林市",84:"宁安市",85:"穆棱市",86:"东宁市"}},11:{v:"黑河2",c:{2:"爱辉区",23:"逊克县",24:"孙吴县",81:"北安市",82:"五大连池市",83:"嫩江市"}},12:{v:"绥化2",c:{2:"北林区",21:"望奎县",22:"兰西县",23:"青冈县",24:"庆安县",25:"明水县",26:"绥棱县",81:"安达市",82:"肇东市",83:"海伦市"}},27:{v:"大兴安岭4",c:{1:"漠河市",21:"呼玛县",22:"塔河县",61:"加格达奇区",62:"松岭区",63:"新林区",64:"呼中区"}}}},31:{v:"上海2",c:{101:"黄浦5",104:"徐汇5",105:"长宁5",106:"静安5",107:"普陀5",109:"虹口5",110:"杨浦5",112:"闵行5",113:"宝山5",114:"嘉定5",115:"浦东新5",116:"金山5",117:"松江5",118:"青浦5",120:"奉贤5",151:"崇明5"}},32:{v:"江苏1",c:{1:{v:"南京2",c:{2:"玄武区",4:"秦淮区",5:"建邺区",6:"鼓楼区",11:"浦口区",13:"栖霞区",14:"雨花台区",15:"江宁区",16:"六合区",17:"溧水区",18:"高淳区"}},2:{v:"无锡2",c:{5:"锡山区",6:"惠山区",11:"滨湖区",13:"梁溪区",14:"新吴区",81:"江阴市",82:"宜兴市"}},3:{v:"徐州2",c:{2:"鼓楼区",3:"云龙区",5:"贾汪区",11:"泉山区",12:"铜山区",21:"丰县",22:"沛县",24:"睢宁县",71:"徐州经济技术开发区",81:"新沂市",82:"邳州市"}},4:{v:"常州2",c:{2:"天宁区",4:"钟楼区",11:"新北区",12:"武进区",13:"金坛区",81:"溧阳市"}},5:{v:"苏州2",c:{5:"虎丘区",6:"吴中区",7:"相城区",8:"姑苏区",9:"吴江区",71:"苏州工业园区",81:"常熟市",82:"张家港市",83:"昆山市",85:"太仓市"}},6:{v:"南通2",c:{2:"崇川区",11:"港闸区",12:"通州区",23:"如东县",71:"南通经济技术开发区",81:"启东市",82:"如皋市",84:"海门市",85:"海安市"}},7:{v:"连云港2",c:{3:"连云区",6:"海州区",7:"赣榆区",22:"东海县",23:"灌云县",24:"灌南县",71:"连云港经济技术开发区",72:"连云港高新技术产业开发区"}},8:{v:"淮安2",c:{3:"淮安区",4:"淮阴区",12:"清江浦区",13:"洪泽区",26:"涟水县",30:"盱眙县",31:"金湖县",71:"淮安经济技术开发区"}},9:{v:"盐城2",c:{2:"亭湖区",3:"盐都区",4:"大丰区",21:"响水县",22:"滨海县",23:"阜宁县",24:"射阳县",25:"建湖县",71:"盐城经济技术开发区",81:"东台市"}},10:{v:"扬州2",c:{2:"广陵区",3:"邗江区",12:"江都区",23:"宝应县",71:"扬州经济技术开发区",81:"仪征市",84:"高邮市"}},11:{v:"镇江2",c:{2:"京口区",11:"润州区",12:"丹徒区",71:"镇江新区",81:"丹阳市",82:"扬中市",83:"句容市"}},12:{v:"泰州2",c:{2:"海陵区",3:"高港区",4:"姜堰区",71:"泰州医药高新技术产业开发区",81:"兴化市",82:"靖江市",83:"泰兴市"}},13:{v:"宿迁2",c:{2:"宿城区",11:"宿豫区",22:"沭阳县",23:"泗阳县",24:"泗洪县",71:"宿迁经济技术开发区"}}}},33:{v:"浙江1",c:{1:{v:"杭州2",c:{2:"上城区",3:"下城区",4:"江干区",5:"拱墅区",6:"西湖区",8:"滨江区",9:"萧山区",10:"余杭区",11:"富阳区",12:"临安区",22:"桐庐县",27:"淳安县",82:"建德市"}},2:{v:"宁波2",c:{3:"海曙区",5:"江北区",6:"北仑区",11:"镇海区",12:"鄞州区",13:"奉化区",25:"象山县",26:"宁海县",81:"余姚市",82:"慈溪市"}},3:{v:"温州2",c:{2:"鹿城区",3:"龙湾区",4:"瓯海区",5:"洞头区",24:"永嘉县",26:"平阳县",27:"苍南县",28:"文成县",29:"泰顺县",71:"温州经济技术开发区",81:"瑞安市",82:"乐清市",83:"龙港市"}},4:{v:"嘉兴2",c:{2:"南湖区",11:"秀洲区",21:"嘉善县",24:"海盐县",81:"海宁市",82:"平湖市",83:"桐乡市"}},5:{v:"湖州2",c:{2:"吴兴区",3:"南浔区",21:"德清县",22:"长兴县",23:"安吉县"}},6:{v:"绍兴2",c:{2:"越城区",3:"柯桥区",4:"上虞区",24:"新昌县",81:"诸暨市",83:"嵊州市"}},7:{v:"金华2",c:{2:"婺城区",3:"金东区",23:"武义县",26:"浦江县",27:"磐安县",81:"兰溪市",82:"义乌市",83:"东阳市",84:"永康市"}},8:{v:"衢州2",c:{2:"柯城区",3:"衢江区",22:"常山县",24:"开化县",25:"龙游县",81:"江山市"}},9:{v:"舟山2",c:{2:"定海区",3:"普陀区",21:"岱山县",22:"嵊泗县"}},10:{v:"台州2",c:{2:"椒江区",3:"黄岩区",4:"路桥区",22:"三门县",23:"天台县",24:"仙居县",81:"温岭市",82:"临海市",83:"玉环市"}},11:{v:"丽水2",c:{2:"莲都区",21:"青田县",22:"缙云县",23:"遂昌县",24:"松阳县",25:"云和县",26:"庆元县",27:"景宁17",81:"龙泉市"}}}},34:{v:"安徽1",c:{1:{v:"合肥2",c:{2:"瑶海区",3:"庐阳区",4:"蜀山区",11:"包河区",21:"长丰县",22:"肥东县",23:"肥西县",24:"庐江县",71:"合肥高新技术产业开发区",72:"合肥经济技术开发区",73:"合肥新站高新技术产业开发区",81:"巢湖市"}},2:{v:"芜湖2",c:{2:"镜湖区",3:"弋江区",7:"鸠江区",8:"三山区",21:"芜湖县",22:"繁昌县",23:"南陵县",71:"芜湖经济技术开发区",72:"安徽芜湖长江大桥经济开发区",81:"无为市"}},3:{v:"蚌埠2",c:{2:"龙子湖区",3:"蚌山区",4:"禹会区",11:"淮上区",21:"怀远县",22:"五河县",23:"固镇县",71:"蚌埠市高新技术开发区",72:"蚌埠市经济开发区"}},4:{v:"淮南2",c:{2:"大通区",3:"田家庵区",4:"谢家集区",5:"八公山区",6:"潘集区",21:"凤台县",22:"寿县"}},5:{v:"马鞍山2",c:{3:"花山区",4:"雨山区",6:"博望区",21:"当涂县",22:"含山县",23:"和县"}},6:{v:"淮北2",c:{2:"杜集区",3:"相山区",4:"烈山区",21:"濉溪县"}},7:{v:"铜陵2",c:{5:"铜官区",6:"义安区",11:"郊区",22:"枞阳县"}},8:{v:"安庆2",c:{2:"迎江区",3:"大观区",11:"宜秀区",22:"怀宁县",25:"太湖县",26:"宿松县",27:"望江县",28:"岳西县",71:"安徽安庆经济开发区",81:"桐城市",82:"潜山市"}},10:{v:"黄山2",c:{2:"屯溪区",3:"黄山区",4:"徽州区",21:"歙县",22:"休宁县",23:"黟县",24:"祁门县"}},11:{v:"滁州2",c:{2:"琅琊区",3:"南谯区",22:"来安县",24:"全椒县",25:"定远县",26:"凤阳县",71:"苏滁现代产业园",72:"滁州经济技术开发区",81:"天长市",82:"明光市"}},12:{v:"阜阳2",c:{2:"颍州区",3:"颍东区",4:"颍泉区",21:"临泉县",22:"太和县",25:"阜南县",26:"颍上县",71:"阜阳合肥现代产业园区",72:"阜阳经济技术开发区",82:"界首市"}},13:{v:"宿州2",c:{2:"埇桥区",21:"砀山县",22:"萧县",23:"灵璧县",24:"泗县",71:"宿州马鞍山现代产业园区",72:"宿州经济技术开发区"}},15:{v:"六安2",c:{2:"金安区",3:"裕安区",4:"叶集区",22:"霍邱县",23:"舒城县",24:"金寨县",25:"霍山县"}},16:{v:"亳州2",c:{2:"谯城区",21:"涡阳县",22:"蒙城县",23:"利辛县"}},17:{v:"池州2",c:{2:"贵池区",21:"东至县",22:"石台县",23:"青阳县"}},18:{v:"宣城2",c:{2:"宣州区",21:"郎溪县",23:"泾县",24:"绩溪县",25:"旌德县",71:"宣城市经济开发区",81:"宁国市",82:"广德市"}}}},35:{v:"福建1",c:{1:{v:"福州2",c:{2:"鼓楼区",3:"台江区",4:"仓山区",5:"马尾区",11:"晋安区",12:"长乐区",21:"闽侯县",22:"连江县",23:"罗源县",24:"闽清县",25:"永泰县",28:"平潭县",81:"福清市"}},2:{v:"厦门2",c:{3:"思明区",5:"海沧区",6:"湖里区",11:"集美区",12:"同安区",13:"翔安区"}},3:{v:"莆田2",c:{2:"城厢区",3:"涵江区",4:"荔城区",5:"秀屿区",22:"仙游县"}},4:{v:"三明2",c:{2:"梅列区",3:"三元区",21:"明溪县",23:"清流县",24:"宁化县",25:"大田县",26:"尤溪县",27:"沙县",28:"将乐县",29:"泰宁县",30:"建宁县",81:"永安市"}},5:{v:"泉州2",c:{2:"鲤城区",3:"丰泽区",4:"洛江区",5:"泉港区",21:"惠安县",24:"安溪县",25:"永春县",26:"德化县",81:"石狮市",82:"晋江市",83:"南安市"}},6:{v:"漳州2",c:{2:"芗城区",3:"龙文区",22:"云霄县",23:"漳浦县",24:"诏安县",25:"长泰县",26:"东山县",27:"南靖县",28:"平和县",29:"华安县",81:"龙海市"}},7:{v:"南平2",c:{2:"延平区",3:"建阳区",21:"顺昌县",22:"浦城县",23:"光泽县",24:"松溪县",25:"政和县",81:"邵武市",82:"武夷山市",83:"建瓯市"}},8:{v:"龙岩2",c:{2:"新罗区",3:"永定区",21:"长汀县",23:"上杭县",24:"武平县",25:"连城县",81:"漳平市"}},9:{v:"宁德2",c:{2:"蕉城区",21:"霞浦县",22:"古田县",23:"屏南县",24:"寿宁县",25:"周宁县",26:"柘荣县",81:"福安市",82:"福鼎市"}}}},36:{v:"江西1",c:{1:{v:"南昌2",c:{2:"东湖区",3:"西湖区",4:"青云谱区",11:"青山湖区",12:"新建区",13:"红谷滩区",21:"南昌县",23:"安义县",24:"进贤县"}},2:{v:"景德镇2",c:{2:"昌江区",3:"珠山区",22:"浮梁县",81:"乐平市"}},3:{v:"萍乡2",c:{2:"安源区",13:"湘东区",21:"莲花县",22:"上栗县",23:"芦溪县"}},4:{v:"九江2",c:{2:"濂溪区",3:"浔阳区",4:"柴桑区",23:"武宁县",24:"修水县",25:"永修县",26:"德安县",28:"都昌县",29:"湖口县",30:"彭泽县",81:"瑞昌市",82:"共青城市",83:"庐山市"}},5:{v:"新余2",c:{2:"渝水区",21:"分宜县"}},6:{v:"鹰潭2",c:{2:"月湖区",3:"余江区",81:"贵溪市"}},7:{v:"赣州2",c:{2:"章贡区",3:"南康区",4:"赣县区",22:"信丰县",23:"大余县",24:"上犹县",25:"崇义县",26:"安远县",28:"定南县",29:"全南县",30:"宁都县",31:"于都县",32:"兴国县",33:"会昌县",34:"寻乌县",35:"石城县",81:"瑞金市",83:"龙南市"}},8:{v:"吉安2",c:{2:"吉州区",3:"青原区",21:"吉安县",22:"吉水县",23:"峡江县",24:"新干县",25:"永丰县",26:"泰和县",27:"遂川县",28:"万安县",29:"安福县",30:"永新县",81:"井冈山市"}},9:{v:"宜春2",c:{2:"袁州区",21:"奉新县",22:"万载县",23:"上高县",24:"宜丰县",25:"靖安县",26:"铜鼓县",81:"丰城市",82:"樟树市",83:"高安市"}},10:{v:"抚州2",c:{2:"临川区",3:"东乡区",21:"南城县",22:"黎川县",23:"南丰县",24:"崇仁县",25:"乐安县",26:"宜黄县",27:"金溪县",28:"资溪县",30:"广昌县"}},11:{v:"上饶2",c:{2:"信州区",3:"广丰区",4:"广信区",23:"玉山县",24:"铅山县",25:"横峰县",26:"弋阳县",27:"余干县",28:"鄱阳县",29:"万年县",30:"婺源县",81:"德兴市"}}}},37:{v:"山东1",c:{1:{v:"济南2",c:{2:"历下区",3:"市中区",4:"槐荫区",5:"天桥区",12:"历城区",13:"长清区",14:"章丘区",15:"济阳区",16:"莱芜区",17:"钢城区",24:"平阴县",26:"商河县",71:"济南高新技术产业开发区"}},2:{v:"青岛2",c:{2:"市南区",3:"市北区",11:"黄岛区",12:"崂山区",13:"李沧区",14:"城阳区",15:"即墨区",71:"青岛高新技术产业开发区",81:"胶州市",83:"平度市",85:"莱西市"}},3:{v:"淄博2",c:{2:"淄川区",3:"张店区",4:"博山区",5:"临淄区",6:"周村区",21:"桓台县",22:"高青县",23:"沂源县"}},4:{v:"枣庄2",c:{2:"市中区",3:"薛城区",4:"峄城区",5:"台儿庄区",6:"山亭区",81:"滕州市"}},5:{v:"东营2",c:{2:"东营区",3:"河口区",5:"垦利区",22:"利津县",23:"广饶县",71:"东营经济技术开发区",72:"东营港经济开发区"}},6:{v:"烟台2",c:{2:"芝罘区",11:"福山区",12:"牟平区",13:"莱山区",14:"蓬莱区",71:"烟台高新技术产业开发区",72:"烟台经济技术开发区",81:"龙口市",82:"莱阳市",83:"莱州市",85:"招远市",86:"栖霞市",87:"海阳市"}},7:{v:"潍坊2",c:{2:"潍城区",3:"寒亭区",4:"坊子区",5:"奎文区",24:"临朐县",25:"昌乐县",72:"潍坊滨海经济技术开发区",81:"青州市",82:"诸城市",83:"寿光市",84:"安丘市",85:"高密市",86:"昌邑市"}},8:{v:"济宁2",c:{11:"任城区",12:"兖州区",26:"微山县",27:"鱼台县",28:"金乡县",29:"嘉祥县",30:"汶上县",31:"泗水县",32:"梁山县",71:"济宁高新技术产业开发区",81:"曲阜市",83:"邹城市"}},9:{v:"泰安2",c:{2:"泰山区",11:"岱岳区",21:"宁阳县",23:"东平县",82:"新泰市",83:"肥城市"}},10:{v:"威海2",c:{2:"环翠区",3:"文登区",71:"威海火炬高技术产业开发区",72:"威海经济技术开发区",73:"威海临港经济技术开发区",82:"荣成市",83:"乳山市"}},11:{v:"日照2",c:{2:"东港区",3:"岚山区",21:"五莲县",22:"莒县",71:"日照经济技术开发区"}},13:{v:"临沂2",c:{2:"兰山区",11:"罗庄区",12:"河东区",21:"沂南县",22:"郯城县",23:"沂水县",24:"兰陵县",25:"费县",26:"平邑县",27:"莒南县",28:"蒙阴县",29:"临沭县",71:"临沂高新技术产业开发区"}},14:{v:"德州2",c:{2:"德城区",3:"陵城区",22:"宁津县",23:"庆云县",24:"临邑县",25:"齐河县",26:"平原县",27:"夏津县",28:"武城县",71:"德州经济技术开发区",72:"德州运河经济开发区",81:"乐陵市",82:"禹城市"}},15:{v:"聊城2",c:{2:"东昌府区",3:"茌平区",21:"阳谷县",22:"莘县",24:"东阿县",25:"冠县",26:"高唐县",81:"临清市"}},16:{v:"滨州2",c:{2:"滨城区",3:"沾化区",21:"惠民县",22:"阳信县",23:"无棣县",25:"博兴县",81:"邹平市"}},17:{v:"菏泽2",c:{2:"牡丹区",3:"定陶区",21:"曹县",22:"单县",23:"成武县",24:"巨野县",25:"郓城县",26:"鄄城县",28:"东明县",71:"菏泽经济技术开发区",72:"菏泽高新技术开发区"}}}},41:{v:"河南1",c:{1:{v:"郑州2",c:{2:"中原区",3:"二七区",4:"管城回族区",5:"金水区",6:"上街区",8:"惠济区",22:"中牟县",71:"郑州经济技术开发区",72:"郑州高新技术产业开发区",73:"郑州航空港经济综合实验区",81:"巩义市",82:"荥阳市",83:"新密市",84:"新郑市",85:"登封市"}},2:{v:"开封2",c:{2:"龙亭区",3:"顺河回族区",4:"鼓楼区",5:"禹王台区",12:"祥符区",21:"杞县",22:"通许县",23:"尉氏县",25:"兰考县"}},3:{v:"洛阳2",c:{2:"老城区",3:"西工区",4:"瀍河回族区",5:"涧西区",6:"吉利区",11:"洛龙区",22:"孟津县",23:"新安县",24:"栾川县",25:"嵩县",26:"汝阳县",27:"宜阳县",28:"洛宁县",29:"伊川县",71:"洛阳高新技术产业开发区",81:"偃师市"}},4:{v:"平顶山2",c:{2:"新华区",3:"卫东区",4:"石龙区",11:"湛河区",21:"宝丰县",22:"叶县",23:"鲁山县",25:"郏县",71:"平顶山高新技术产业开发区",72:"平顶山市城乡一体化示范区",81:"舞钢市",82:"汝州市"}},5:{v:"安阳2",c:{2:"文峰区",3:"北关区",5:"殷都区",6:"龙安区",22:"安阳县",23:"汤阴县",26:"滑县",27:"内黄县",71:"安阳高新技术产业开发区",81:"林州市"}},6:{v:"鹤壁2",c:{2:"鹤山区",3:"山城区",11:"淇滨区",21:"浚县",22:"淇县",71:"鹤壁经济技术开发区"}},7:{v:"新乡2",c:{2:"红旗区",3:"卫滨区",4:"凤泉区",11:"牧野区",21:"新乡县",24:"获嘉县",25:"原阳县",26:"延津县",27:"封丘县",71:"新乡高新技术产业开发区",72:"新乡经济技术开发区",73:"新乡市平原城乡一体化示范区",81:"卫辉市",82:"辉县市",83:"长垣市"}},8:{v:"焦作2",c:{2:"解放区",3:"中站区",4:"马村区",11:"山阳区",21:"修武县",22:"博爱县",23:"武陟县",25:"温县",71:"焦作城乡一体化示范区",82:"沁阳市",83:"孟州市"}},9:{v:"濮阳2",c:{2:"华龙区",22:"清丰县",23:"南乐县",26:"范县",27:"台前县",28:"濮阳县",71:"河南濮阳工业园区",72:"濮阳经济技术开发区"}},10:{v:"许昌2",c:{2:"魏都区",3:"建安区",24:"鄢陵县",25:"襄城县",71:"许昌经济技术开发区",81:"禹州市",82:"长葛市"}},11:{v:"漯河2",c:{2:"源汇区",3:"郾城区",4:"召陵区",21:"舞阳县",22:"临颍县",71:"漯河经济技术开发区"}},12:{v:"三门峡2",c:{2:"湖滨区",3:"陕州区",21:"渑池县",24:"卢氏县",71:"河南三门峡经济开发区",81:"义马市",82:"灵宝市"}},13:{v:"南阳2",c:{2:"宛城区",3:"卧龙区",21:"南召县",22:"方城县",23:"西峡县",24:"镇平县",25:"内乡县",26:"淅川县",27:"社旗县",28:"唐河县",29:"新野县",30:"桐柏县",71:"南阳高新技术产业开发区",72:"南阳市城乡一体化示范区",81:"邓州市"}},14:{v:"商丘2",c:{2:"梁园区",3:"睢阳区",21:"民权县",22:"睢县",23:"宁陵县",24:"柘城县",25:"虞城县",26:"夏邑县",71:"豫东综合物流产业聚集区",72:"河南商丘经济开发区",81:"永城市"}},15:{v:"信阳2",c:{2:"浉河区",3:"平桥区",21:"罗山县",22:"光山县",23:"新县",24:"商城县",25:"固始县",26:"潢川县",27:"淮滨县",28:"息县",71:"信阳高新技术产业开发区"}},16:{v:"周口2",c:{2:"川汇区",3:"淮阳区",21:"扶沟县",22:"西华县",23:"商水县",24:"沈丘县",25:"郸城县",27:"太康县",28:"鹿邑县",71:"河南周口经济开发区",81:"项城市"}},17:{v:"驻马店2",c:{2:"驿城区",21:"西平县",22:"上蔡县",23:"平舆县",24:"正阳县",25:"确山县",26:"泌阳县",27:"汝南县",28:"遂平县",29:"新蔡县",71:"河南驻马店经济开发区",9001:"济源市"}}}},42:{v:"湖北1",c:{1:{v:"武汉2",c:{2:"江岸区",3:"江汉区",4:"硚口区",5:"汉阳区",6:"武昌区",7:"青山区",11:"洪山区",12:"东西湖区",13:"汉南区",14:"蔡甸区",15:"江夏区",16:"黄陂区",17:"新洲区"}},2:{v:"黄石2",c:{2:"黄石港区",3:"西塞山区",4:"下陆区",5:"铁山区",22:"阳新县",81:"大冶市"}},3:{v:"十堰2",c:{2:"茅箭区",3:"张湾区",4:"郧阳区",22:"郧西县",23:"竹山县",24:"竹溪县",25:"房县",81:"丹江口市"}},5:{v:"宜昌2",c:{2:"西陵区",3:"伍家岗区",4:"点军区",5:"猇亭区",6:"夷陵区",25:"远安县",26:"兴山县",27:"秭归县",28:"长阳18",29:"五峰18",81:"宜都市",82:"当阳市",83:"枝江市"}},6:{v:"襄阳2",c:{2:"襄城区",6:"樊城区",7:"襄州区",24:"南漳县",25:"谷城县",26:"保康县",82:"老河口市",83:"枣阳市",84:"宜城市"}},7:{v:"鄂州2",c:{2:"梁子湖区",3:"华容区",4:"鄂城区"}},8:{v:"荆门2",c:{2:"东宝区",4:"掇刀区",22:"沙洋县",81:"钟祥市",82:"京山市"}},9:{v:"孝感2",c:{2:"孝南区",21:"孝昌县",22:"大悟县",23:"云梦县",81:"应城市",82:"安陆市",84:"汉川市"}},10:{v:"荆州2",c:{2:"沙市区",3:"荆州区",22:"公安县",23:"监利县",24:"江陵县",71:"荆州经济技术开发区",81:"石首市",83:"洪湖市",87:"松滋市"}},11:{v:"黄冈2",c:{2:"黄州区",21:"团风县",22:"红安县",23:"罗田县",24:"英山县",25:"浠水县",26:"蕲春县",27:"黄梅县",71:"龙感湖管理区",81:"麻城市",82:"武穴市"}},12:{v:"咸宁2",c:{2:"咸安区",21:"嘉鱼县",22:"通城县",23:"崇阳县",24:"通山县",81:"赤壁市"}},13:{v:"随州2",c:{3:"曾都区",21:"随县",81:"广水市"}},28:{v:"恩施19",c:{1:"恩施市",2:"利川市",22:"建始县",23:"巴东县",25:"宣恩县",26:"咸丰县",27:"来凤县",28:"鹤峰县",9004:"仙桃市",9005:"潜江市",9006:"天门市",9021:"神农架林区"}}}},43:{v:"湖南1",c:{1:{v:"长沙2",c:{2:"芙蓉区",3:"天心区",4:"岳麓区",5:"开福区",11:"雨花区",12:"望城区",21:"长沙县",81:"浏阳市",82:"宁乡市"}},2:{v:"株洲2",c:{2:"荷塘区",3:"芦淞区",4:"石峰区",11:"天元区",12:"渌口区",23:"攸县",24:"茶陵县",25:"炎陵县",71:"云龙示范区",81:"醴陵市"}},3:{v:"湘潭2",c:{2:"雨湖区",4:"岳塘区",21:"湘潭县",71:"湖南湘潭高新技术产业园区",72:"湘潭昭山示范区",73:"湘潭九华示范区",81:"湘乡市",82:"韶山市"}},4:{v:"衡阳2",c:{5:"珠晖区",6:"雁峰区",7:"石鼓区",8:"蒸湘区",12:"南岳区",21:"衡阳县",22:"衡南县",23:"衡山县",24:"衡东县",26:"祁东县",71:"衡阳综合保税区",72:"湖南衡阳高新技术产业园区",73:"湖南衡阳松木经济开发区",81:"耒阳市",82:"常宁市"}},5:{v:"邵阳2",c:{2:"双清区",3:"大祥区",11:"北塔区",22:"新邵县",23:"邵阳县",24:"隆回县",25:"洞口县",27:"绥宁县",28:"新宁县",29:"城步20",81:"武冈市",82:"邵东市"}},6:{v:"岳阳2",c:{2:"岳阳楼区",3:"云溪区",11:"君山区",21:"岳阳县",23:"华容县",24:"湘阴县",26:"平江县",71:"岳阳市屈原管理区",81:"汨罗市",82:"临湘市"}},7:{v:"常德2",c:{2:"武陵区",3:"鼎城区",21:"安乡县",22:"汉寿县",23:"澧县",24:"临澧县",25:"桃源县",26:"石门县",71:"常德市西洞庭管理区",81:"津市市"}},8:{v:"张家界2",c:{2:"永定区",11:"武陵源区",21:"慈利县",22:"桑植县"}},9:{v:"益阳2",c:{2:"资阳区",3:"赫山区",21:"南县",22:"桃江县",23:"安化县",71:"益阳市大通湖管理区",72:"湖南益阳高新技术产业园区",81:"沅江市"}},10:{v:"郴州2",c:{2:"北湖区",3:"苏仙区",21:"桂阳县",22:"宜章县",23:"永兴县",24:"嘉禾县",25:"临武县",26:"汝城县",27:"桂东县",28:"安仁县",81:"资兴市"}},11:{v:"永州2",c:{2:"零陵区",3:"冷水滩区",21:"祁阳县",22:"东安县",23:"双牌县",24:"道县",25:"江永县",26:"宁远县",27:"蓝山县",28:"新田县",29:"江华21",71:"永州经济技术开发区",72:"永州市金洞管理区",73:"永州市回龙圩管理区"}},12:{v:"怀化2",c:{2:"鹤城区",21:"中方县",22:"沅陵县",23:"辰溪县",24:"溆浦县",25:"会同县",26:"麻阳20",27:"新晃22",28:"芷江22",29:"靖州23",30:"通道22",71:"怀化市洪江管理区",81:"洪江市"}},13:{v:"娄底2",c:{2:"娄星区",21:"双峰县",22:"新化县",81:"冷水江市",82:"涟源市"}},31:{v:"湘西19",c:{1:"吉首市",22:"泸溪县",23:"凤凰县",24:"花垣县",25:"保靖县",26:"古丈县",27:"永顺县",30:"龙山县"}}}},44:{v:"广东1",c:{1:{v:"广州2",c:{3:"荔湾区",4:"越秀区",5:"海珠区",6:"天河区",11:"白云区",12:"黄埔区",13:"番禺区",14:"花都区",15:"南沙区",17:"从化区",18:"增城区"}},2:{v:"韶关2",c:{3:"武江区",4:"浈江区",5:"曲江区",22:"始兴县",24:"仁化县",29:"翁源县",32:"乳源21",33:"新丰县",81:"乐昌市",82:"南雄市"}},3:{v:"深圳2",c:{3:"罗湖区",4:"福田区",5:"南山区",6:"宝安区",7:"龙岗区",8:"盐田区",9:"龙华区",10:"坪山区",11:"光明区"}},4:{v:"珠海2",c:{2:"香洲区",3:"斗门区",4:"金湾区"}},5:{v:"汕头2",c:{7:"龙湖区",11:"金平区",12:"濠江区",13:"潮阳区",14:"潮南区",15:"澄海区",23:"南澳县"}},6:{v:"佛山2",c:{4:"禅城区",5:"南海区",6:"顺德区",7:"三水区",8:"高明区"}},7:{v:"江门2",c:{3:"蓬江区",4:"江海区",5:"新会区",81:"台山市",83:"开平市",84:"鹤山市",85:"恩平市"}},8:{v:"湛江2",c:{2:"赤坎区",3:"霞山区",4:"坡头区",11:"麻章区",23:"遂溪县",25:"徐闻县",81:"廉江市",82:"雷州市",83:"吴川市"}},9:{v:"茂名2",c:{2:"茂南区",4:"电白区",81:"高州市",82:"化州市",83:"信宜市"}},12:{v:"肇庆2",c:{2:"端州区",3:"鼎湖区",4:"高要区",23:"广宁县",24:"怀集县",25:"封开县",26:"德庆县",84:"四会市"}},13:{v:"惠州2",c:{2:"惠城区",3:"惠阳区",22:"博罗县",23:"惠东县",24:"龙门县"}},14:{v:"梅州2",c:{2:"梅江区",3:"梅县区",22:"大埔县",23:"丰顺县",24:"五华县",26:"平远县",27:"蕉岭县",81:"兴宁市"}},15:{v:"汕尾2",c:{2:"城区",21:"海丰县",23:"陆河县",81:"陆丰市"}},16:{v:"河源2",c:{2:"源城区",21:"紫金县",22:"龙川县",23:"连平县",24:"和平县",25:"东源县"}},17:{v:"阳江2",c:{2:"江城区",4:"阳东区",21:"阳西县",81:"阳春市"}},18:{v:"清远2",c:{2:"清城区",3:"清新区",21:"佛冈县",23:"阳山县",25:"连山24",26:"连南21",81:"英德市",82:"连州市"}},19:{v:"东莞2",c:{}},20:{v:"中山2",c:{}},51:{v:"潮州2",c:{2:"湘桥区",3:"潮安区",22:"饶平县"}},52:{v:"揭阳2",c:{2:"榕城区",3:"揭东区",22:"揭西县",24:"惠来县",81:"普宁市"}},53:{v:"云浮2",c:{2:"云城区",3:"云安区",21:"新兴县",22:"郁南县",81:"罗定市"}}}},45:{v:"广西25",c:{1:{v:"南宁2",c:{2:"兴宁区",3:"青秀区",5:"江南区",7:"西乡塘区",8:"良庆区",9:"邕宁区",10:"武鸣区",23:"隆安县",24:"马山县",25:"上林县",26:"宾阳县",27:"横县"}},2:{v:"柳州2",c:{2:"城中区",3:"鱼峰区",4:"柳南区",5:"柳北区",6:"柳江区",22:"柳城县",23:"鹿寨县",24:"融安县",25:"融水20",26:"三江22"}},3:{v:"桂林2",c:{2:"秀峰区",3:"叠彩区",4:"象山区",5:"七星区",11:"雁山区",12:"临桂区",21:"阳朔县",23:"灵川县",24:"全州县",25:"兴安县",26:"永福县",27:"灌阳县",28:"龙胜各族自治县",29:"资源县",30:"平乐县",32:"恭城21",81:"荔浦市"}},4:{v:"梧州2",c:{3:"万秀区",5:"长洲区",6:"龙圩区",21:"苍梧县",22:"藤县",23:"蒙山县",81:"岑溪市"}},5:{v:"北海2",c:{2:"海城区",3:"银海区",12:"铁山港区",21:"合浦县"}},6:{v:"防城港2",c:{2:"港口区",3:"防城区",21:"上思县",81:"东兴市"}},7:{v:"钦州2",c:{2:"钦南区",3:"钦北区",21:"灵山县",22:"浦北县"}},8:{v:"贵港2",c:{2:"港北区",3:"港南区",4:"覃塘区",21:"平南县",81:"桂平市"}},9:{v:"玉林2",c:{2:"玉州区",3:"福绵区",21:"容县",22:"陆川县",23:"博白县",24:"兴业县",81:"北流市"}},10:{v:"百色2",c:{2:"右江区",3:"田阳区",22:"田东县",24:"德保县",26:"那坡县",27:"凌云县",28:"乐业县",29:"田林县",30:"西林县",31:"隆林各族自治县",81:"靖西市",82:"平果市"}},11:{v:"贺州2",c:{2:"八步区",3:"平桂区",21:"昭平县",22:"钟山县",23:"富川21"}},12:{v:"河池2",c:{2:"金城江区",3:"宜州区",21:"南丹县",22:"天峨县",23:"凤山县",24:"东兰县",25:"罗城26",26:"环江27",27:"巴马21",28:"都安21",29:"大化21"}},13:{v:"来宾2",c:{2:"兴宾区",21:"忻城县",22:"象州县",23:"武宣县",24:"金秀21",81:"合山市"}},14:{v:"崇左2",c:{2:"江州区",21:"扶绥县",22:"宁明县",23:"龙州县",24:"大新县",25:"天等县",81:"凭祥市"}}}},46:{v:"海南1",c:{1:{v:"海口2",c:{5:"秀英区",6:"龙华区",7:"琼山区",8:"美兰区"}},2:{v:"三亚2",c:{2:"海棠区",3:"吉阳区",4:"天涯区",5:"崖州区"}},3:{v:"三沙2",c:{21:"西沙群岛",22:"南沙群岛",23:"中沙群岛的岛礁及其海域",9001:"五指山市",9002:"琼海市",9005:"文昌市",9006:"万宁市",9007:"东方市",9021:"定安县",9022:"屯昌县",9023:"澄迈县",9024:"临高县",9025:"白沙28",9026:"昌江28",9027:"乐东28",9028:"陵水28",9029:"保亭29",9030:"琼中29"}},4:{v:"儋州2",c:{}}}},50:{v:"重庆2",c:{101:"万州5",102:"涪陵5",103:"渝中5",104:"大渡口5",105:"江北5",106:"沙坪坝5",107:"九龙坡5",108:"南岸5",109:"北碚5",110:"綦江5",111:"大足5",112:"渝北5",113:"巴南5",114:"黔江5",115:"长寿5",116:"江津5",117:"合川5",118:"永川5",119:"南川5",120:"璧山5",151:"铜梁5",152:"潼南5",153:"荣昌5",154:"开州5",155:"梁平5",156:"武隆5",229:"城口8",230:"丰都8",231:"垫江8",233:"忠8",235:"云阳8",236:"奉节8",237:"巫山8",238:"巫溪8",240:"石柱18",241:"秀山30",242:"酉阳30",243:"彭水31"}},51:{v:"四川1",c:{1:{v:"成都2",c:{4:"锦江区",5:"青羊区",6:"金牛区",7:"武侯区",8:"成华区",12:"龙泉驿区",13:"青白江区",14:"新都区",15:"温江区",16:"双流区",17:"郫都区",18:"新津区",21:"金堂县",29:"大邑县",31:"蒲江县",81:"都江堰市",82:"彭州市",83:"邛崃市",84:"崇州市",85:"简阳市"}},3:{v:"自贡2",c:{2:"自流井区",3:"贡井区",4:"大安区",11:"沿滩区",21:"荣县",22:"富顺县"}},4:{v:"攀枝花2",c:{2:"东区",3:"西区",11:"仁和区",21:"米易县",22:"盐边县"}},5:{v:"泸州2",c:{2:"江阳区",3:"纳溪区",4:"龙马潭区",21:"泸县",22:"合江县",24:"叙永县",25:"古蔺县"}},6:{v:"德阳2",c:{3:"旌阳区",4:"罗江区",23:"中江县",81:"广汉市",82:"什邡市",83:"绵竹市"}},7:{v:"绵阳2",c:{3:"涪城区",4:"游仙区",5:"安州区",22:"三台县",23:"盐亭县",25:"梓潼县",26:"北川32",27:"平武县",81:"江油市"}},8:{v:"广元2",c:{2:"利州区",11:"昭化区",12:"朝天区",21:"旺苍县",22:"青川县",23:"剑阁县",24:"苍溪县"}},9:{v:"遂宁2",c:{3:"船山区",4:"安居区",21:"蓬溪县",23:"大英县",81:"射洪市"}},10:{v:"内江2",c:{2:"市中区",11:"东兴区",24:"威远县",25:"资中县",71:"内江经济开发区",83:"隆昌市"}},11:{v:"乐山2",c:{2:"市中区",11:"沙湾区",12:"五通桥区",13:"金口河区",23:"犍为县",24:"井研县",26:"夹江县",29:"沐川县",32:"峨边33",33:"马边33",81:"峨眉山市"}},13:{v:"南充2",c:{2:"顺庆区",3:"高坪区",4:"嘉陵区",21:"南部县",22:"营山县",23:"蓬安县",24:"仪陇县",25:"西充县",81:"阆中市"}},14:{v:"眉山2",c:{2:"东坡区",3:"彭山区",21:"仁寿县",23:"洪雅县",24:"丹棱县",25:"青神县"}},15:{v:"宜宾2",c:{2:"翠屏区",3:"南溪区",4:"叙州区",23:"江安县",24:"长宁县",25:"高县",26:"珙县",27:"筠连县",28:"兴文县",29:"屏山县"}},16:{v:"广安2",c:{2:"广安区",3:"前锋区",21:"岳池县",22:"武胜县",23:"邻水县",81:"华蓥市"}},17:{v:"达州2",c:{2:"通川区",3:"达川区",22:"宣汉县",23:"开江县",24:"大竹县",25:"渠县",71:"达州经济开发区",81:"万源市"}},18:{v:"雅安2",c:{2:"雨城区",3:"名山区",22:"荥经县",23:"汉源县",24:"石棉县",25:"天全县",26:"芦山县",27:"宝兴县"}},19:{v:"巴中2",c:{2:"巴州区",3:"恩阳区",21:"通江县",22:"南江县",23:"平昌县",71:"巴中经济开发区"}},20:{v:"资阳2",c:{2:"雁江区",21:"安岳县",22:"乐至县"}},32:{v:"阿坝34",c:{1:"马尔康市",21:"汶川县",22:"理县",23:"茂县",24:"松潘县",25:"九寨沟县",26:"金川县",27:"小金县",28:"黑水县",30:"壤塘县",31:"阿坝县",32:"若尔盖县",33:"红原县"}},33:{v:"甘孜35",c:{1:"康定市",22:"泸定县",23:"丹巴县",24:"九龙县",25:"雅江县",26:"道孚县",27:"炉霍县",28:"甘孜县",29:"新龙县",30:"德格县",31:"白玉县",32:"石渠县",33:"色达县",34:"理塘县",35:"巴塘县",36:"乡城县",37:"稻城县",38:"得荣县"}},34:{v:"凉山36",c:{1:"西昌市",22:"木里37",23:"盐源县",24:"德昌县",25:"会理县",26:"会东县",27:"宁南县",28:"普格县",29:"布拖县",30:"金阳县",31:"昭觉县",32:"喜德县",33:"冕宁县",34:"越西县",35:"甘洛县",36:"美姑县",37:"雷波县"}}}},52:{v:"贵州1",c:{1:{v:"贵阳2",c:{2:"南明区",3:"云岩区",11:"花溪区",12:"乌当区",13:"白云区",15:"观山湖区",21:"开阳县",22:"息烽县",23:"修文县",81:"清镇市"}},2:{v:"六盘水2",c:{1:"钟山区",3:"六枝特区",21:"水城县",81:"盘州市"}},3:{v:"遵义2",c:{2:"红花岗区",3:"汇川区",4:"播州区",22:"桐梓县",23:"绥阳县",24:"正安县",25:"道真38",26:"务川38",27:"凤冈县",28:"湄潭县",29:"余庆县",30:"习水县",81:"赤水市",82:"仁怀市"}},4:{v:"安顺2",c:{2:"西秀区",3:"平坝区",22:"普定县",23:"镇宁39",24:"关岭39",25:"紫云40"}},5:{v:"毕节2",c:{2:"七星关区",21:"大方县",22:"黔西县",23:"金沙县",24:"织金县",25:"纳雍县",26:"威宁41",27:"赫章县"}},6:{v:"铜仁2",c:{2:"碧江区",3:"万山区",21:"江口县",22:"玉屏22",23:"石阡县",24:"思南县",25:"印江30",26:"德江县",27:"沿河18",28:"松桃20"}},23:{v:"黔西南42",c:{1:"兴义市",2:"兴仁市",23:"普安县",24:"晴隆县",25:"贞丰县",26:"望谟县",27:"册亨县",28:"安龙县"}},26:{v:"黔东南43",c:{1:"凯里市",22:"黄平县",23:"施秉县",24:"三穗县",25:"镇远县",26:"岑巩县",27:"天柱县",28:"锦屏县",29:"剑河县",30:"台江县",31:"黎平县",32:"榕江县",33:"从江县",34:"雷山县",35:"麻江县",36:"丹寨县"}},27:{v:"黔南42",c:{1:"都匀市",2:"福泉市",22:"荔波县",23:"贵定县",25:"瓮安县",26:"独山县",27:"平塘县",28:"罗甸县",29:"长顺县",30:"龙里县",31:"惠水县",32:"三都44"}}}},53:{v:"云南1",c:{1:{v:"昆明2",c:{2:"五华区",3:"盘龙区",11:"官渡区",12:"西山区",13:"东川区",14:"呈贡区",15:"晋宁区",24:"富民县",25:"宜良县",26:"石林33",27:"嵩明县",28:"禄劝45",29:"寻甸46",81:"安宁市"}},3:{v:"曲靖2",c:{2:"麒麟区",3:"沾益区",4:"马龙区",22:"陆良县",23:"师宗县",24:"罗平县",25:"富源县",26:"会泽县",81:"宣威市"}},4:{v:"玉溪2",c:{2:"红塔区",3:"江川区",23:"通海县",24:"华宁县",25:"易门县",26:"峨山33",27:"新平47",28:"元江48",81:"澄江市"}},5:{v:"保山2",c:{2:"隆阳区",21:"施甸县",23:"龙陵县",24:"昌宁县",81:"腾冲市"}},6:{v:"昭通2",c:{2:"昭阳区",21:"鲁甸县",22:"巧家县",23:"盐津县",24:"大关县",25:"永善县",26:"绥江县",27:"镇雄县",28:"彝良县",29:"威信县",81:"水富市"}},7:{v:"丽江2",c:{2:"古城区",21:"玉龙49",22:"永胜县",23:"华坪县",24:"宁蒗33"}},8:{v:"普洱2",c:{2:"思茅区",21:"宁洱50",22:"墨江51",23:"景东33",24:"景谷52",25:"镇沅53",26:"江城50",27:"孟连54",28:"澜沧55",29:"西盟56"}},9:{v:"临沧2",c:{2:"临翔区",21:"凤庆县",22:"云县",23:"永德县",24:"镇康县",25:"双江57",26:"耿马58",27:"沧源56"}},23:{v:"楚雄36",c:{1:"楚雄市",22:"双柏县",23:"牟定县",24:"南华县",25:"姚安县",26:"大姚县",27:"永仁县",28:"元谋县",29:"武定县",31:"禄丰县"}},25:{v:"红河59",c:{1:"个旧市",2:"开远市",3:"蒙自市",4:"弥勒市",23:"屏边20",24:"建水县",25:"石屏县",27:"泸西县",28:"元阳县",29:"红河县",30:"金平60",31:"绿春县",32:"河口21"}},26:{v:"文山61",c:{1:"文山市",22:"砚山县",23:"西畴县",24:"麻栗坡县",25:"马关县",26:"丘北县",27:"广南县",28:"富宁县"}},28:{v:"西双版纳62",c:{1:"景洪市",22:"勐海县",23:"勐腊县"}},29:{v:"大理63",c:{1:"大理市",22:"漾濞33",23:"祥云县",24:"宾川县",25:"弥渡县",26:"南涧33",27:"巍山64",28:"永平县",29:"云龙县",30:"洱源县",31:"剑川县",32:"鹤庆县"}},31:{v:"德宏65",c:{2:"瑞丽市",3:"芒市",22:"梁河县",23:"盈江县",24:"陇川县"}},33:{v:"怒江66",c:{1:"泸水市",23:"福贡县",24:"贡山67",25:"兰坪68"}},34:{v:"迪庆35",c:{1:"香格里拉市",22:"德钦县",23:"维西69"}}}},54:{v:"西藏12",c:{1:{v:"拉萨2",c:{2:"城关区",3:"堆龙德庆区",4:"达孜区",21:"林周县",22:"当雄县",23:"尼木县",24:"曲水县",27:"墨竹工卡县",71:"格尔木藏青工业园区",72:"拉萨经济技术开发区",73:"西藏文化旅游创意园区",74:"达孜工业园区"}},2:{v:"日喀则2",c:{2:"桑珠孜区",21:"南木林县",22:"江孜县",23:"定日县",24:"萨迦县",25:"拉孜县",26:"昂仁县",27:"谢通门县",28:"白朗县",29:"仁布县",30:"康马县",31:"定结县",32:"仲巴县",33:"亚东县",34:"吉隆县",35:"聂拉木县",36:"萨嘎县",37:"岗巴县"}},3:{v:"昌都2",c:{2:"卡若区",21:"江达县",22:"贡觉县",23:"类乌齐县",24:"丁青县",25:"察雅县",26:"八宿县",27:"左贡县",28:"芒康县",29:"洛隆县",30:"边坝县"}},4:{v:"林芝2",c:{2:"巴宜区",21:"工布江达县",22:"米林县",23:"墨脱县",24:"波密县",25:"察隅县",26:"朗县"}},5:{v:"山南2",c:{2:"乃东区",21:"扎囊县",22:"贡嘎县",23:"桑日县",24:"琼结县",25:"曲松县",26:"措美县",27:"洛扎县",28:"加查县",29:"隆子县",30:"错那县",31:"浪卡子县"}},6:{v:"那曲2",c:{2:"色尼区",21:"嘉黎县",22:"比如县",23:"聂荣县",24:"安多县",25:"申扎县",26:"索县",27:"班戈县",28:"巴青县",29:"尼玛县",30:"双湖县"}},25:{v:"阿里4",c:{21:"普兰县",22:"札达县",23:"噶尔县",24:"日土县",25:"革吉县",26:"改则县",27:"措勤县"}}}},61:{v:"陕西1",c:{1:{v:"西安2",c:{2:"新城区",3:"碑林区",4:"莲湖区",11:"灞桥区",12:"未央区",13:"雁塔区",14:"阎良区",15:"临潼区",16:"长安区",17:"高陵区",18:"鄠邑区",22:"蓝田县",24:"周至县"}},2:{v:"铜川2",c:{2:"王益区",3:"印台区",4:"耀州区",22:"宜君县"}},3:{v:"宝鸡2",c:{2:"渭滨区",3:"金台区",4:"陈仓区",22:"凤翔县",23:"岐山县",24:"扶风县",26:"眉县",27:"陇县",28:"千阳县",29:"麟游县",30:"凤县",31:"太白县"}},4:{v:"咸阳2",c:{2:"秦都区",3:"杨陵区",4:"渭城区",22:"三原县",23:"泾阳县",24:"乾县",25:"礼泉县",26:"永寿县",28:"长武县",29:"旬邑县",30:"淳化县",31:"武功县",81:"兴平市",82:"彬州市"}},5:{v:"渭南2",c:{2:"临渭区",3:"华州区",22:"潼关县",23:"大荔县",24:"合阳县",25:"澄城县",26:"蒲城县",27:"白水县",28:"富平县",81:"韩城市",82:"华阴市"}},6:{v:"延安2",c:{2:"宝塔区",3:"安塞区",21:"延长县",22:"延川县",25:"志丹县",26:"吴起县",27:"甘泉县",28:"富县",29:"洛川县",30:"宜川县",31:"黄龙县",32:"黄陵县",81:"子长市"}},7:{v:"汉中2",c:{2:"汉台区",3:"南郑区",22:"城固县",23:"洋县",24:"西乡县",25:"勉县",26:"宁强县",27:"略阳县",28:"镇巴县",29:"留坝县",30:"佛坪县"}},8:{v:"榆林2",c:{2:"榆阳区",3:"横山区",22:"府谷县",24:"靖边县",25:"定边县",26:"绥德县",27:"米脂县",28:"佳县",29:"吴堡县",30:"清涧县",31:"子洲县",81:"神木市"}},9:{v:"安康2",c:{2:"汉滨区",21:"汉阴县",22:"石泉县",23:"宁陕县",24:"紫阳县",25:"岚皋县",26:"平利县",27:"镇坪县",28:"旬阳县",29:"白河县"}},10:{v:"商洛2",c:{2:"商州区",21:"洛南县",22:"丹凤县",23:"商南县",24:"山阳县",25:"镇安县",26:"柞水县"}}}},62:{v:"甘肃1",c:{1:{v:"兰州2",c:{2:"城关区",3:"七里河区",4:"西固区",5:"安宁区",11:"红古区",21:"永登县",22:"皋兰县",23:"榆中县",71:"兰州新区"}},2:{v:"嘉峪关2",c:{}},3:{v:"金昌2",c:{2:"金川区",21:"永昌县"}},4:{v:"白银2",c:{2:"白银区",3:"平川区",21:"靖远县",22:"会宁县",23:"景泰县"}},5:{v:"天水2",c:{2:"秦州区",3:"麦积区",21:"清水县",22:"秦安县",23:"甘谷县",24:"武山县",25:"张家川11"}},6:{v:"武威2",c:{2:"凉州区",21:"民勤县",22:"古浪县",23:"天祝37"}},7:{v:"张掖2",c:{2:"甘州区",21:"肃南70",22:"民乐县",23:"临泽县",24:"高台县",25:"山丹县"}},8:{v:"平凉2",c:{2:"崆峒区",21:"泾川县",22:"灵台县",23:"崇信县",25:"庄浪县",26:"静宁县",81:"华亭市"}},9:{v:"酒泉2",c:{2:"肃州区",21:"金塔县",22:"瓜州县",23:"肃北14",24:"阿克塞71",81:"玉门市",82:"敦煌市"}},10:{v:"庆阳2",c:{2:"西峰区",21:"庆城县",22:"环县",23:"华池县",24:"合水县",25:"正宁县",26:"宁县",27:"镇原县"}},11:{v:"定西2",c:{2:"安定区",21:"通渭县",22:"陇西县",23:"渭源县",24:"临洮县",25:"漳县",26:"岷县"}},12:{v:"陇南2",c:{2:"武都区",21:"成县",22:"文县",23:"宕昌县",24:"康县",25:"西和县",26:"礼县",27:"徽县",28:"两当县"}},29:{v:"临夏72",c:{1:"临夏市",21:"临夏县",22:"康乐县",23:"永靖县",24:"广河县",25:"和政县",26:"东乡族自治县",27:"积石山73"}},30:{v:"甘南35",c:{1:"合作市",21:"临潭县",22:"卓尼县",23:"舟曲县",24:"迭部县",25:"玛曲县",26:"碌曲县",27:"夏河县"}}}},63:{v:"青海1",c:{1:{v:"西宁2",c:{2:"城东区",3:"城中区",4:"城西区",5:"城北区",6:"湟中区",21:"大通74",23:"湟源县"}},2:{v:"海东2",c:{2:"乐都区",3:"平安区",22:"民和74",23:"互助75",24:"化隆11",25:"循化76"}},22:{v:"海北35",c:{21:"门源11",22:"祁连县",23:"海晏县",24:"刚察县"}},23:{v:"黄南35",c:{21:"同仁县",22:"尖扎县",23:"泽库县",24:"河南14"}},25:{v:"海南35",c:{21:"共和县",22:"同德县",23:"贵德县",24:"兴海县",25:"贵南县"}},26:{v:"果洛35",c:{21:"玛沁县",22:"班玛县",23:"甘德县",24:"达日县",25:"久治县",26:"玛多县"}},27:{v:"玉树35",c:{1:"玉树市",22:"杂多县",23:"称多县",24:"治多县",25:"囊谦县",26:"曲麻莱县"}},28:{v:"海西77",c:{1:"格尔木市",2:"德令哈市",3:"茫崖市",21:"乌兰县",22:"都兰县",23:"天峻县",57:"大柴旦行政委员会"}}}},64:{v:"宁夏78",c:{1:{v:"银川2",c:{4:"兴庆区",5:"西夏区",6:"金凤区",21:"永宁县",22:"贺兰县",81:"灵武市"}},2:{v:"石嘴山2",c:{2:"大武口区",5:"惠农区",21:"平罗县"}},3:{v:"吴忠2",c:{2:"利通区",3:"红寺堡区",23:"盐池县",24:"同心县",81:"青铜峡市"}},4:{v:"固原2",c:{2:"原州区",22:"西吉县",23:"隆德县",24:"泾源县",25:"彭阳县"}},5:{v:"中卫2",c:{2:"沙坡头区",21:"中宁县",22:"海原县"}}}},65:{v:"新疆79",c:{1:{v:"乌鲁木齐2",c:{2:"天山区",3:"沙依巴克区",4:"新市区",5:"水磨沟区",6:"头屯河区",7:"达坂城区",9:"米东区",21:"乌鲁木齐县"}},2:{v:"克拉玛依2",c:{2:"独山子区",3:"克拉玛依区",4:"白碱滩区",5:"乌尔禾区"}},4:{v:"吐鲁番2",c:{2:"高昌区",21:"鄯善县",22:"托克逊县"}},5:{v:"哈密2",c:{2:"伊州区",21:"巴里坤80",22:"伊吾县"}},23:{v:"昌吉72",c:{1:"昌吉市",2:"阜康市",23:"呼图壁县",24:"玛纳斯县",25:"奇台县",27:"吉木萨尔县",28:"木垒80"}},27:{v:"博尔塔拉81",c:{1:"博乐市",2:"阿拉山口市",22:"精河县",23:"温泉县"}},28:{v:"巴音郭楞81",c:{1:"库尔勒市",22:"轮台县",23:"尉犁县",24:"若羌县",25:"且末县",26:"焉耆11",27:"和静县",28:"和硕县",29:"博湖县",71:"库尔勒经济技术开发区"}},29:{v:"阿克苏4",c:{1:"阿克苏市",2:"库车市",22:"温宿县",24:"沙雅县",25:"新和县",26:"拜城县",27:"乌什县",28:"阿瓦提县",29:"柯坪县"}},30:{v:"克孜勒苏82",c:{1:"阿图什市",22:"阿克陶县",23:"阿合奇县",24:"乌恰县"}},31:{v:"喀什4",c:{1:"喀什市",21:"疏附县",22:"疏勒县",23:"英吉沙县",24:"泽普县",25:"莎车县",26:"叶城县",27:"麦盖提县",28:"岳普湖县",29:"伽师县",30:"巴楚县",31:"塔什库尔干83"}},32:{v:"和田4",c:{1:"和田市",21:"和田县",22:"墨玉县",23:"皮山县",24:"洛浦县",25:"策勒县",26:"于田县",27:"民丰县"}},40:{v:"伊犁84",c:{2:"伊宁市",3:"奎屯市",4:"霍尔果斯市",21:"伊宁县",22:"察布查尔85",23:"霍城县",24:"巩留县",25:"新源县",26:"昭苏县",27:"特克斯县",28:"尼勒克县"}},42:{v:"塔城4",c:{1:"塔城市",2:"乌苏市",21:"额敏县",23:"沙湾县",24:"托里县",25:"裕民县",26:"和布克赛尔86"}},43:{v:"阿勒泰4",c:{1:"阿勒泰市",21:"布尔津县",22:"富蕴县",23:"福海县",24:"哈巴河县",25:"青河县",26:"吉木乃县",9001:"石河子市",9002:"阿拉尔市",9003:"图木舒克市",9004:"五家渠市",9005:"北屯市",9006:"铁门关市",9007:"双河市",9008:"可克达拉市",9009:"昆玉市",9010:"胡杨河市"}}}}};
const suffixMap = ["特别行政区","省","市","盟","地区","区","矿区","林区","县","满族自治县","满族蒙古族自治县","回族自治县","自治区","达斡尔族自治旗","蒙古族自治县","朝鲜族自治县","朝鲜族自治州","畲族自治县","土家族自治县","土家族苗族自治州","苗族自治县","瑶族自治县","侗族自治县","苗族侗族自治县","壮族瑶族自治县","壮族自治区","仫佬族自治县","毛南族自治县","黎族自治县","黎族苗族自治县","土家族苗族自治县","苗族土家族自治县","羌族自治县","彝族自治县","藏族羌族自治州","藏族自治州","彝族自治州","藏族自治县","仡佬族苗族自治县","布依族苗族自治县","苗族布依族自治县","彝族回族苗族自治县","布依族苗族自治州","苗族侗族自治州","水族自治县","彝族苗族自治县","回族彝族自治县","彝族傣族自治县","哈尼族彝族傣族自治县","纳西族自治县","哈尼族彝族自治县","哈尼族自治县","傣族彝族自治县","彝族哈尼族拉祜族自治县","傣族拉祜族佤族自治县","拉祜族自治县","佤族自治县","拉祜族佤族布朗族傣族自治县","傣族佤族自治县","哈尼族彝族自治州","苗族瑶族傣族自治县","壮族苗族自治州","傣族自治州","白族自治州","彝族回族自治县","傣族景颇族自治州","傈僳族自治州","独龙族怒族自治县","白族普米族自治县","傈僳族自治县","裕固族自治县","哈萨克族自治县","回族自治州","保安族东乡族撒拉族自治县","回族土族自治县","土族自治县","撒拉族自治县","蒙古族藏族自治州","回族自治区","维吾尔自治区","哈萨克自治县","蒙古自治州","柯尔克孜自治州","塔吉克自治县","哈萨克自治州","锡伯自治县","蒙古自治县"];
module.exports = {
  areaData: areaData,
  suffixMap: suffixMap
};