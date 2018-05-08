!function(a){"use strict";var b=Modernizr.touch;a.AS={},AS.bootstrap={options:null,isOnline:!1,initOptions:{bootOnline:!1,cookiesEnabled:!1,loadConfig:!1,publicationModel:void 0},tasks:["validateTouchForSurface","checkSupported","checkOnline","checkIpad","checkAndroid","loadResources","loadConfig","setFavIcon","setDocTitle","loadAnimConfig","checkCookie","checkIE","loadParams","loadExtensions","loadMediaResources","checkFeatures","loadSharingLibraries","loadExternalResources","checkComponents"],offlineScripts:[],notificationView:null,validateTouchForSurface:function(){-1!==navigator.userAgent.indexOf("Windows")&&"ontouchstart"in window&&(Modernizr.touch=!1,b=!1),this.runTask()},checkCookie:function(){document.cookie="cookie=1";var a=-1!==document.cookie.indexOf("cookie");return document.cookie="cookie=1; expires=Thu, 01-Jan-1970 00:00:01 GMT",a?(this.initOptions.cookiesEnabled=!0,void this.runTask()):void AS.bootstrap.clearTasks()},loadMediaResources:function(){var a="webreader/"+AS.config.get("widgets.video.mediaElementJSFile"),b=this;$.ajax({dataType:"script",url:a,async:!0,cache:!0,success:function(a,c,d){AS.mediaElementJS=a,b.runTask()},error:function(a,b,c){console.error("Unable to load as MediaElementLibrary is unavailable")}})},checkFeatures:function(){function a(a){throw c.onError("notification-load-config-fail".toLocaleString()),new Error(a)}var b=AS.config.get("features"),c=this;return b?void this.runTask():void a("Features config location not specified in features")},checkSupported:function(){try{if(!this.isSupportedBrowser())return void this.renderUnsupported();this.runTask()}catch(a){this.renderUnsupported()}},checkIE:function(){var a=this,b=AS.util.isIE9();if($("html").addClass(AS.util.getInternetExplorerVersion()>=9?"ie":"not-ie"),!b)return this.runTask();var c=function(a){var b=new $.Deferred;return yepnope({test:!window.btoa&&!window.atob,yep:"webreader/vendor/base64/base64.min.js",complete:function(){b.resolve()}}),b.promise()},d=function(){var a=new $.Deferred;return yepnope({test:b,yep:"webreader/vendor/jquery-placeholder/jquery.placeholder.js",complete:function(){a.resolve()}}),a.promise()};$.when(c(),d()).done(function(){a.runTask()})},checkIpad:function(){var a=this;navigator.userAgent.match(/iPad;.*CPU.*OS 7_\d/i)&&($("html").addClass("ipad ios7"),window.scrollTo(0,0)),yepnope({test:b,yep:["webreader/scripts/vendor/jquery-mobile/jquery.mobile.js"],complete:function(){a.runTask()}})},checkAndroid:function(){/Android/.test(navigator.userAgent)&&$("html").addClass("android"),this.runTask()},checkOnline:function(){var a=this;yepnope({load:["webreader/vendor/jquery/jquery.min.js","webreader/vendor/jQuery-Animate-Enhanced/jquery.animate-enhanced.min.js"],complete:function(){$.ajax({url:"webreader/online-poller.json",type:"GET",async:!0,cache:!1,success:function(){a.isOnline=!0,a.runTask()},error:function(){a.isOnline=!1,a.runTask()}})}})},needWebServer:function(){if(!window._)throw new Error("Woah, something really went wrong");var a=document.getElementsByTagName("body")[0],b=document.createElement("div");b.innerHTML=JST["needwebserver-tmpl"](),a.appendChild(b.firstChild)},loadConfig:function(){function a(a){if(c.isOnline||"file:"!==window.location.protocol)throw c.onError("notification-load-config-fail".toLocaleString()),new Error(a);c.needWebServer()}var b=AS.config.get("app.config"),c=this;return b?void $.ajax({dataType:"json",async:!0,url:b,cache:!1,success:function(a,b,d){AS.config(a),c.runTask()},error:function(b,c,d){a(d)}}):void a("Reader config location not specified in app.config")},setFavIcon:function(){var a="dynamic-favicon",b=document.createElement("link"),c=document.getElementById(a);b.type="image/x-icon",b.rel="icon",b.id=a,b.href=AS.config.get("app.images.favicon"),document.head.removeChild(c),document.head.appendChild(b),this.runTask()},setDocTitle:function(){var a=AS.config.get("app.title");document.title=a,this._addMetaTagInDoc("apple-mobile-web-app-title",a),this._addMetaTagInDoc("application-name",a),this.runTask()},loadAnimConfig:function(){function a(a){throw c.onError("notification-load-config-fail".toLocaleString()),new Error(a)}var b=AS.config.get("app.animConfig"),c=this;return b?void $.ajax({dataType:"json",url:b,async:!0,success:function(a,b,d){AS.config({animation:a}),c.runTask()},error:function(b,c,d){a(d)}}):void a("Animation config location not specified in app.animConfig")},loadParams:function(){var a,b=AS.util.queryStringParam("config"),c=AS.util.queryStringParam("orientation");void 0!==b&&(a=b.split("/"),AS.config({publication:{configFilename:a.pop(),urlRoot:a.join("/")+"/"}})),void 0!==c&&AS.config({publication:{orientation:c}}),this.runTask()},loadResources:function(){var a=this;yepnope({load:a.options.scripts,complete:function(){a.runTask()}})},loadExternalResources:function(){var a=this;AS.config.get("app.enableExternal")&&_.each(this.options.desktop,function(b){a._injectJS(b,!0)}),a.runTask()},loadSharingLibraries:function(){var a=this,b=AS.config.get();b.features.socialSharing&&b.socialSharing.options.facebookShare&&b.socialSharing.facebook.AppID&&a._injectJS("//connect.facebook.net/en_US/all.js",!0),a.runTask()},addOfflineScripts:function(a){this.offlineScripts=this.offlineScripts.concat(a)},loadExtensions:function(){var a=this,c=AS.config.get("extensions"),d=[];return c?(d=c.all.concat(b?c.mobile:c.desktop),void(this.isOnline?yepnope({load:d,complete:function(){a.runTask()}}):(this.addOfflineScripts(d),a.runTask()))):void a.runTask()},checkComponents:function(){var a=AS.config.get();a.IssueView.components=_.filter(a.IssueView.components,function(b){return"ToolbarView"===b?AS.util.isToolbarEnabled():"TocView"===b?a.features.tableOfContents:!0}),this.runTask()},run:function(a){if(!a)throw new Error("Error loading - load options not specified");this.options=a,this.runTask()},runTask:function(){return this.tasks.length?void this[this.tasks.shift()]():void this.finishTasks()},clearTasks:function(){this.tasks=[],this.runTask()},loadModels:function(){this.publicationModel=new AS.PublicationModel,this.publicationModel.fetch({success:function(){AS.bootstrap.runTask()}})},processOfflineScripts:function(){yepnope({load:AS.bootstrap.offlineScripts,complete:function(){AS.message.off(AS.message.ONLINE,AS.bootstrap.processOfflineScripts)}})},addEvents:function(){this.offlineScripts.length&&AS.message.on(AS.message.ONLINE,AS.bootstrap.processOfflineScripts)},finishTasks:function(){AS.message?(this.addEvents(),AS.message.trigger(this.isOnline?AS.message.ONLINE:AS.message.OFFLINE),this.options.complete&&this.options.complete(),AS.message.trigger(AS.message.APPLICATION_START),AS.router=new AS.Router(this.initOptions)):(this.tasks=["loadResources","loadConfig"],this.runTask())},onError:function(a){AS.NotificationView&&(this.notificationView||(this.notificationView=new AS.NotificationView,$("body").append(this.notificationView.el)),AS.message.trigger(AS.message.NOTIFICATION_SHOW,a,{level:AS.NOTIFICATION_LEVEL.ERROR}))},renderUnsupported:function(){yepnope.errorTimeout=600,yepnope({load:["webreader/vendor/lodash/dist/lodash.min.js"],complete:function(){if(!window._)throw new Error("Woah, something really went wrong");var a=document.getElementsByTagName("body")[0],b=document.createElement("div");b.innerHTML=JST["unsupported-tmpl"]({browser:navigator.appName}),a.appendChild(b.firstChild)}})},isSupportedBrowser:function(){for(var a=[function(a){return a.match(/MSIE ([0-9]{1,}[\\.0-9]{0,})/),parseFloat(RegExp.$1)<10},function(a){return/opera|opr/i.test(a)},function(a){return a.match(/Firefox\/(.*)$/),parseFloat(RegExp.$1)<26}];a.length;)if(a.pop().call(this,navigator.userAgent))return!1;return!0},_addMetaTagInDoc:function(a,b){var c=document.createElement("meta");c.name=a,c.content=b,document.getElementsByTagName("head")[0].appendChild(c)},_injectJS:function(a,b){if(a){var c=document.createElement("script");c.async=b,c.src=a,document.head.appendChild(c)}}}}(this);