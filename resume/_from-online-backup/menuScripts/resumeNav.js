//----------DHTML Menu Created using AllWebMenus PRO ver 5.3-#902---------------
//C:\wamp\www\robertmeans\conspectus\nav\resumeNav.awm
awmRelativeCorner=1;
var awmMenuName='resumeNav';
var awmLibraryBuild=902;
var awmLibraryPath='/../menuLibraries';
var awmImagesPath='/../menuImages';
var awmSupported=(navigator.appName + navigator.appVersion.substring(0,1)=="Netscape5" || document.all || document.layers || navigator.userAgent.indexOf('Opera')>-1 || navigator.userAgent.indexOf('Konqueror')>-1)?1:0;
if (awmSupported){
var nua=navigator.userAgent,scriptNo=(nua.indexOf('Chrome')>-1)?2:((nua.indexOf('Safari')>-1)?2:(nua.indexOf('Gecko')>-1)?2:((nua.indexOf('Opera')>-1)?4:1));
var mpi=document.location,xt="";
var mpa=mpi.protocol+"//"+mpi.host;
var mpi=mpi.protocol+"//"+mpi.host+mpi.pathname;
if(scriptNo==1){oBC=document.all.tags("BASE");if(oBC && oBC.length) if(oBC[0].href) mpi=oBC[0].href;}
while (mpi.search(/\\/)>-1) mpi=mpi.replace("\\","/");
mpi=mpi.substring(0,mpi.lastIndexOf("/")+1);
var mpin=mpi;
var e=document.getElementsByTagName("SCRIPT");
for (var i=0;i<e.length;i++){if (e[i].src){if (e[i].src.indexOf(awmMenuName+".js")!=-1){xt=e[i].src.split("/");if (xt[xt.length-1]==awmMenuName+".js"){xt=e[i].src.substring(0,e[i].src.length-awmMenuName.length-3);if (e[i].src.indexOf("://")!=-1){mpi=xt;}else{if(xt.substring(0,1)=="/")mpi=mpa+xt; else mpi+=xt;}}}}}
while (mpi.search(/\/\.\//)>-1) {mpi=mpi.replace("/./","/");}
var awmMenuPath=mpi.substring(0,mpi.length-1);
while (awmMenuPath.search("'")>-1) {awmMenuPath=awmMenuPath.replace("'","%27");}
document.write("<SCRIPT SRC='"+(awmMenuPath+awmLibraryPath).replace(/\/$/,"")+"/awmlib"+scriptNo+".js'><\/SCRIPT>");
var n=null;
awmzindex=800;
}

var awmImageName='';
var awmPosID='parchmentBody';
var awmPosClass='';
var awmSubmenusFrame='';
var awmSubmenusFrameOffset;
var awmOptimize=0;
var awmHash='XKRNFWYIWYQOTQBSEUHWGN';
var awmNoMenuPrint=1;
var awmUseTrs=0;
var awmSepr=["0","","",""];
var awmMarg=[0,0,0,0];
function awmBuildMenu(){
if (awmSupported){
awmImagesColl=["conspectus.png",48,48,"conspectus_mo.png",128,48];
awmCreateCSS(0,1,0,n,n,n,n,n,'none','0','#000000','0px 0px 0px 0',0,'0px / 0px',n);
awmCreateCSS(1,2,2,'#000046',n,n,'11px Tahoma',n,'none','0','#000000','0px 0px 0px 0',0,'0px / 0px',n);
awmCreateCSS(0,2,2,'#000046',n,n,'11px Tahoma',n,'none','0','#000000','0px 0px 0px 0',0,'0px / 0px',n);
awmCreateCSS(1,2,0,'#000046',n,n,'bold 11px Tahoma',n,'none','0','#000000','0px 0px 0px 0',1,'0px / 0px',n);
awmCreateCSS(0,2,0,'#000046',n,n,'bold 11px Tahoma',n,'none','0','#000000','0px 0px 0px 0',1,'0px / 0px',n);
var s0=awmCreateMenu(0,0,0,0,1,0,0,8,1,10,10,0,0,0,0,1,0,n,n,100,1,0,-30,245,0,-1,1,200,200,0,0,0,"0,0,0","142",0,1,1,"parchmentBody",-279,0,0,0,0,0,0,0,0,0,0,1,0,0,2,n,n,'',n,0,[]);
it=s0.addItemWithImages(1,2,2,"","","","",0,n,n,3,3,3,n,n,n,"",n,n,n,n,n,0,0,2,n,n,n,n,n,n,0,0,0,0,0,n,n,n,0,0,0,3,n);
var s1=it.addSubmenu(0,0,-47,0,0,0,2,0,1,1,0,n,n,100,0,1,0,-1,1,0,0,0,0,"0,0,0",0,"0",1);
it=s1.addItemWithImages(3,4,4,"","","","",1,1,1,3,3,3,n,n,n,"../conspectus.php",n,n,n,"../conspectus.php",n,0,0,2,n,n,n,n,n,n,0,0,0,0,0,n,n,n,0,0,0,0,n);
s0.pm.buildMenu();
}}