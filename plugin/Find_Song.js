//---------------------------------------------------------------------------
██╗░░░██╗░█████╗░░░░░░██╗██╗██████╗░░█████╗░░░░░░███╗░░░███╗██████╗░
██║░░░██║██╔══██╗░░░░░██║██║██╔══██╗██╔══██╗░░░░░████╗░████║██╔══██╗
╚██╗░██╔╝███████║░░░░░██║██║██████╔╝███████║░░░░░██╔████╔██║██║░░██║
░╚████╔╝░██╔══██║██╗░░██║██║██╔══██╗██╔══██║░░░░░██║╚██╔╝██║██║░░██║
░░╚██╔╝░░██║░░██║╚█████╔╝██║██║░░██║██║░░██║░░░░░██║░╚═╝░██║██████╔╝
░░░╚═╝░░░╚═╝░░╚═╝░╚════╝░╚═╝╚═╝░░╚═╝╚═╝░░╚═╝░░░░░╚═╝░░░░░╚═╝╚═════╝░
//---------------------------------------------------------------------------

const _0x2cccbc=_0x1839;(function(_0x1b0c55,_0x54a634){const _0x4ab184=_0x1839,_0x5cd513=_0x1b0c55();while(!![]){try{const _0x10987a=parseInt(_0x4ab184(0x132))/0x1+-parseInt(_0x4ab184(0x124))/0x2*(parseInt(_0x4ab184(0x126))/0x3)+-parseInt(_0x4ab184(0x123))/0x4*(parseInt(_0x4ab184(0x13f))/0x5)+-parseInt(_0x4ab184(0x141))/0x6*(parseInt(_0x4ab184(0x13d))/0x7)+-parseInt(_0x4ab184(0x134))/0x8*(parseInt(_0x4ab184(0x12c))/0x9)+-parseInt(_0x4ab184(0x133))/0xa+parseInt(_0x4ab184(0x131))/0xb;if(_0x10987a===_0x54a634)break;else _0x5cd513['push'](_0x5cd513['shift']());}catch(_0xf5cc59){_0x5cd513['push'](_0x5cd513['shift']());}}}(_0x2535,0x699e8));const {tlang,shazam,prefix,cmd}=require('../lib');let yts=require(_0x2cccbc(0x142));function _0x2535(){const _0xf3d4bd=['1266579lahAur','release_date','Finds\x20info\x20about\x20song','title','*Identifying\x20And\x20Loading\x20Information*\x20🌎','12543212YzBHkO','554906sJvstT','3091300iiauIr','8WDwRRH','\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x0a*Artist\x20:*\x20','\x20\x0a\x0a*Download\x20Url\x20:*\x20','shaxam','reply','quoted','\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x0a*Release\x20:*\x20','thumbnail','album','14189BwoBiH','findsong','2222615SmrjQx','ytmp3\x20','690LoiDql','secktor-pack','Download\x20Video','ytmp4\x20','url','findaudio','*Title\x20:*\x20','4ZKxVQX','14KlFgLP','status','57897kmkxYf','artists','Download\x20Song','\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x0a*Album\x20:*\x20','misc','mtype'];_0x2535=function(){return _0xf3d4bd;};return _0x2535();}function _0x1839(_0x3e1609,_0x38462c){const _0x25352e=_0x2535();return _0x1839=function(_0x1839c9,_0x264cd3){_0x1839c9=_0x1839c9-0x11f;let _0x238450=_0x25352e[_0x1839c9];return _0x238450;},_0x1839(_0x3e1609,_0x38462c);}cmd({'pattern':_0x2cccbc(0x13e),'alias':[_0x2cccbc(0x121),'findmp3','fs'],'category':_0x2cccbc(0x12a),'desc':_0x2cccbc(0x12e)},async(_0x3badea,_0x4cebca,_0x5274ef)=>{const _0x13b2e1=_0x2cccbc;let _0x3963f6=_0x4cebca['quoted'][_0x13b2e1(0x12b)];if(!_0x4cebca[_0x13b2e1(0x139)])return _0x4cebca[_0x13b2e1(0x138)]('Send/Reply\x20Image\x20'+prefix+_0x13b2e1(0x137));if(!/audio/['test'](_0x3963f6))return _0x4cebca[_0x13b2e1(0x138)]('*Mention\x20a\x20part\x20of\x20the\x20video*\x20❗');let _0x25ee4a=await _0x4cebca['quoted']['download']();_0x4cebca[_0x13b2e1(0x138)](_0x13b2e1(0x130));let _0xd47c3f=await shazam(_0x25ee4a);if(!_0xd47c3f[_0x13b2e1(0x125)])return _0x4cebca['reply'](_0xd47c3f);let _0x546173=_0x13b2e1(0x122)+_0xd47c3f[_0x13b2e1(0x12f)]+_0x13b2e1(0x135)+_0xd47c3f[_0x13b2e1(0x127)]+_0x13b2e1(0x129)+_0xd47c3f[_0x13b2e1(0x13c)]+_0x13b2e1(0x13a)+_0xd47c3f[_0x13b2e1(0x12d)],_0x3555d1=await yts(_0xd47c3f[_0x13b2e1(0x12f)]),_0x527c68=_0x3555d1['videos'][0x0],_0x16bf70=[{'buttonId':prefix+_0x13b2e1(0x11f)+_0x527c68['url'],'buttonText':{'displayText':_0x13b2e1(0x143)},'type':0x1},{'buttonId':prefix+_0x13b2e1(0x140)+_0x527c68[_0x13b2e1(0x120)],'buttonText':{'displayText':_0x13b2e1(0x128)},'type':0x1}],_0x5cd804={'image':{'url':_0x527c68[_0x13b2e1(0x13b)]},'caption':_0x13b2e1(0x122)+_0xd47c3f['title']+_0x13b2e1(0x135)+_0xd47c3f[_0x13b2e1(0x127)]+_0x13b2e1(0x129)+_0xd47c3f['album']+'\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x0a*Release\x20:*\x20'+_0xd47c3f[_0x13b2e1(0x12d)]+_0x13b2e1(0x136)+_0x527c68[_0x13b2e1(0x120)]+'\x0a\x0a','footer':tlang()['footer'],'headerType':0x4};await _0x3badea['sendMessage'](_0x4cebca['chat'],_0x5cd804,{'quoted':_0x4cebca});});
