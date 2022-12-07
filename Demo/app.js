let AnalysysAgent = require("./util/sdk/AnalysysAgent_QQ_SDK.min.js")
AnalysysAgent.debugMode = 2
AnalysysAgent.appkey = 'sdktest201907'
AnalysysAgent.uploadURL = 'https://arksdk.analysys.cn'
AnalysysAgent.encryptType = 1; //使用加密文件的时候 放开赋值。（直接放开不会报错）
AnalysysAgent.autoShare = true;
// AnalysysAgent.autoProfile = false;
AnalysysAgent.auto = true;
AnalysysAgent.autoTrack = true;


// AnalysysAgent.uploadURL = 'https://arkpaastest.analysys.cn:4089'   // 明文
// AnalysysAgent.uploadURL = 'https://arksdk.analysys.cn:4089'    //密文

// AnalysysAgent.uploadURL = 'https://arksdktest.analysys.cn:4069'    //密文
// AnalysysAgent.uploadURL = 'http://192.168.8.103:8089'    //密文

/**
 * @file app.js
 * @author tt
 */

/* globals tt */

AnalysysAgent.registerSuperProperty("age", 20)


App({
    onLaunch (options) {
        // do something when launch
    },
    onShow (options) {
        // console.log(options)
        // console.log(AnalysysAgent)
        // AnalysysAgent.appStart(options)
        // do something when show
    },
    onHide () {
        // do something when hide
    }
});