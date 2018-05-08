this["JST"] = this["JST"] || {};

this["JST"]["audio-tmpl"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class=\'play-button-surround\'>\n    <div class=\'play-button\'>\n        <div class="play-glyph ';
 playing ? print('isPlaying') : print('isPaused') ;
__p += '">\n            ';
 playing ? print('<svg xmlns="http://www.w3.org/2000/svg" width="39.694" height="42.748" viewBox="0 0 39.694 42.748"><g ><path d="M13.687 9.32h4.32v18h-4.32zM21.687 9.32h4.32v18h-4.32z"/></g></svg>') : print('<svg xmlns="http://www.w3.org/2000/svg" width="39.694" height="42.748" viewBox="0 0 39.694 42.748"><path  d="M14.905 13.516l15.592 9.002-15.592 9.002z"/></svg>') ;
__p += '\n        </div>\n    </div>\n</div>\n<div class=\'controls tooltip clearfix\'>\n    <div class=\'';
 if (!(totalTracks -1 > trackNumber)) print("disabled ") ;
__p += ' prev move-button\'>\n        <svg xmlns="http://www.w3.org/2000/svg" width="39.693" height="42.748" viewBox="0 0 39.693 42.748"><g ><path d="M31.612 29.374L21.11 21.372l10.502-7.998zM21.67 29.374l-10.503-8.002 10.503-7.998zM8.083 13.694h3.555V29.05H8.083z"/></g></svg>\n    </div>\n    <div class=\'';
 if(trackNumber == 0) print("disabled ") ;
__p += ' next move-button\'>\n        <svg xmlns="http://www.w3.org/2000/svg" width="39.693" height="42.748" viewBox="0 0 39.693 42.748"><g ><path d="M8.083 13.374l10.503 8-10.503 8zM18.025 13.374l10.503 8-10.503 8zM28.058 13.696h3.555V29.05h-3.555z"/></g></svg>\n    </div>\n    <div class=\'scrubber\'>\n        <div class=\'scrubber-ticks left\'></div>\n        <div class=\'scrubber-ticks right\'></div>\n        <div class=\'scrubber-handle\'></div>\n    </div>\n    <div class=\'time\'>';
 print( AS.util.timeStringFromSeconds(currentDuration))  ;
__p += ' / ';
 print( AS.util.timeStringFromSeconds(totalDuration))  ;
__p += '</div>\n</div>';

}
return __p
};

this["JST"]["ie9iframe-tmpl"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {

 if ( AS.util.isIE9() ) { ;
__p += '\n    <iframe id=\'ie9Frame\' src=\'' +
((__t = (  AS.config.get( 'app.auth.authProxy' ) )) == null ? '' : __t) +
'\'></iframe>\n';
 } ;


}
return __p
};

this["JST"]["issuepage-tmpl"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="page">\n    <div class="page-content"></div>\n</div>';

}
return __p
};

this["JST"]["issueview-tmpl"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div id="issue">\n\n</div>';

}
return __p
};

this["JST"]["loader-tmpl"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div id="loader-screen" class="loader-block">\n\n    <div class="holder">\n        <div class="loadMsg msg-loading">' +
((__t = ( "loading-message-loading".toLocaleString() )) == null ? '' : __t) +
'</div>\n        <div class="loadMsg msg-rotate">' +
((__t = ( "loading-message-rotate".toLocaleString() )) == null ? '' : __t) +
'</div>\n        <div id="loadingCircle" class="circle inner">\n            <div class="rotate">\n                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="50px" height="50px" class="baseLoading">\n                    <circle cx="50px" cy="50px" r="80%" stroke="#00ADEF" stroke-width="3" fill="none"></circle>\n                </svg>\n\n                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="100%" height="100%" class="baseLoader">\n                    <circle cx="50%" cy="50%" r="40%" stroke="#CCCCCC" stroke-width="3" fill="none"></circle>\n                </svg>\n            </div>\n        </div>\n        <div id="loadingCircle" class="circle outer"></div>\n    </div>\n\n</div>';

}
return __p
};

this["JST"]["loadercustom-tmpl"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div id="loader-screen" style="background-color:' +
((__t = ( backgroundColor )) == null ? '' : __t) +
'">\n    <div id="loading-logo">\n        <img id="loading-image">\n    </div>\n    <div id="loading-text">\n        <div class="message issueload" style="color:' +
((__t = ( color )) == null ? '' : __t) +
'">' +
((__t = ( 'loading-message-issue'.toLocaleString() )) == null ? '' : __t) +
'</div>\n        <div class="message loading" style="color:' +
((__t = ( color )) == null ? '' : __t) +
'">' +
((__t = ( 'loading-message-loading'.toLocaleString() )) == null ? '' : __t) +
'</div>\n        <div class="message not-available" style="color:' +
((__t = ( color )) == null ? '' : __t) +
'">' +
((__t = ( 'issue-no-content'.toLocaleString() )) == null ? '' : __t) +
'</div>\n    </div>\n</div>';

}
return __p
};

this["JST"]["issuelogin-tmpl"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div id="issue-login" class="login popup">\n    <div class="popup-back"></div>\n    <div class="popup-content">\n        <header>\n            <h3>' +
((__t = ( "issue-login-title".toConfiguredLocaleString() )) == null ? '' : __t) +
'</h3>\n        </header>\n        <section class="main">\n            <form id="login-form">\n                <p class="error-message"></p>\n                <div class="form-container">\n                    <input id=\'usernamefield\' name="username" type="text" autocapitalize="off"\n                           placeholder="' +
((__t = ( "username".toLocaleString() )) == null ? '' : __t) +
'">\n                    <input id=\'passwordfield\' name="password" type="password"\n                           placeholder="' +
((__t = ( "password".toLocaleString() )) == null ? '' : __t) +
'">\n                </div>\n                <footer class="surround">\n                    ';
 if ( config.passwordRequestUrl ) { ;
__p += '\n                        <a href="' +
((__t = ( config.passwordRequestUrl )) == null ? '' : __t) +
'" target="_blank">\n                            ' +
((__t = ( "password-request".toLocaleString() )) == null ? '' : __t) +
'\n                        </a>\n                    ';
 } ;
__p += '\n                    <input type="submit" value="' +
((__t = ( "login".toConfiguredLocaleString() )) == null ? '' : __t) +
'" class="btn btn-submit pull-right">\n                    <a id="cancel" class="btn btn-gray pull-right" href="javascript:;">\n                        ' +
((__t = ( "cancel".toLocaleString() )) == null ? '' : __t) +
'\n                    </a>\n                </footer>\n            </form>\n        </section>\n        ';
 if ( config.subscribeUrl ) { ;
__p += '\n            <footer class="surround">\n                <h3>' +
((__t = ( "issue-login-subscribe".toConfiguredLocaleString() )) == null ? '' : __t) +
'</h3>\n                <a id="subcribe" href="' +
((__t = ( config.subscribeUrl )) == null ? '' : __t) +
'" target="_blank" class="btn btn-gray pull-right">\n                    ' +
((__t = ( "subscribe".toConfiguredLocaleString() )) == null ? '' : __t) +
'\n                </a>\n            </footer>\n        ';
 } ;
__p += '\n    </div>\n</div>\n';

}
return __p
};

this["JST"]["storelogin-tmpl"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div id="store-login" class="login popup">\n    <div class="popup-back"></div>\n    <div class="popup-content">\n        <header>\n            <h3>' +
((__t = ( "login".toConfiguredLocaleString() )) == null ? '' : __t) +
'</h3>\n        </header>\n        <section class="main">\n            <form id="login-form">\n                <p class="error-message"></p>\n                <div class="form-container">\n                    <input id=\'usernamefield\' name="username" type="text" autocapitalize="off"\n                           placeholder="' +
((__t = ( "username".toLocaleString() )) == null ? '' : __t) +
'">\n                    <input id=\'passwordfield\' name="password" type="password"\n                           placeholder="' +
((__t = ( "password".toLocaleString() )) == null ? '' : __t) +
'">\n                </div>\n                <input type="submit" value="' +
((__t = ( "login".toLocaleString() )) == null ? '' : __t) +
'" class="btn btn-submit pull-right invisible">\n                ';
 if ( config.passwordRequestUrl ) { ;
__p += '\n                    <footer class="surround">\n                        <a href="' +
((__t = ( config.passwordRequestUrl )) == null ? '' : __t) +
'" target="_blank">\n                            ' +
((__t = ( "password-request".toLocaleString() )) == null ? '' : __t) +
'\n                        </a>\n                    </footer>\n                ';
 } ;
__p += '\n            </form>\n        </section>\n        <footer>\n            <a id="cancel" class="btn btn-gray" href="javascript:;">\n                ' +
((__t = ( "cancel".toLocaleString() )) == null ? '' : __t) +
'\n            </a>\n            <a id="login" class="btn btn-submit" href="javascript:;" target="_blank">\n                ' +
((__t = ( "login".toConfiguredLocaleString() )) == null ? '' : __t) +
'\n            </a>\n        </footer>\n    </div>\n</div>';

}
return __p
};

this["JST"]["needwebserver-tmpl"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div id="needwebserver" class="container">\n    <div class="info">\n        <h1>' +
((__t = ( "non-supported-browser-title".toLocaleString() )) == null ? '' : __t) +
'</h1>\n        <p>' +
((__t = ( "need-webserver-loading".toLocaleString() )) == null ? '' : __t) +
'</p>\n        <p>' +
((__t = ( "need-webserver-hosting".toLocaleString() )) == null ? '' : __t) +
'</p>\n        <br>\n        <p>' +
((__t = ( "need-webserver-guide".toLocaleString() )) == null ? '' : __t) +
'</p>\n    </div>\n</div>\n';

}
return __p
};

this["JST"]["nocookies-tmpl"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div id="no-cookies-screen" style="background-color:' +
((__t = ( loader.backgroundColor )) == null ? '' : __t) +
'">\n\t<div id="loading-logo">\n\t\t<img id="loading-image">\n\t\t<h1 class="title" style="color:' +
((__t = ( loader.color )) == null ? '' : __t) +
'">' +
((__t = ( cookieTitle )) == null ? '' : __t) +
'</h1>\n\t\t<div class="text" style="color:' +
((__t = ( loader.color )) == null ? '' : __t) +
'">' +
((__t = ( cookieText )) == null ? '' : __t) +
'</div>\n\t</div>\n</div>';

}
return __p
};

this["JST"]["nooffline-tmpl"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div id="no-offline-screen" style="background-color:' +
((__t = ( loaderColor )) == null ? '' : __t) +
'">\n\t<div id="loading-logo">\n\t\t<img id="loading-image">\n\t\t<h1 class="title" style="color:' +
((__t = ( loaderFontColor )) == null ? '' : __t) +
'">' +
((__t = ( offlineTitle )) == null ? '' : __t) +
'</h1>\n\t\t<div class="text" style="color:' +
((__t = ( loaderFontColor )) == null ? '' : __t) +
'">' +
((__t = ( offlineText )) == null ? '' : __t) +
'</div>\n\t</div>\n</div>';

}
return __p
};

this["JST"]["notification-tmpl"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div id="notifications">\n    <div id="messageBar" class="">\n        <span class="inner-message"></span>\n        <div class="close"></div>\n    </div>\n    ';
 if ( AS.browser.ios ) { ;
__p += '\n    <div class="ios-home-screen">\n        <svg xmlns="http://www.w3.org/2000/svg" width="560" height="960" viewBox="0 0 560 960"><path d="M75 68H10V23h12.975s3.447-4.484 10.85-10H5c-2.762 0-5 2.238-5 5v55c0 2.762 2.238 5 5 5h75c2.762 0 5-2.238 5-5V54.268l-10 8.226V68zm-8.19-34.75V51L100 24.997 66.81 0v15.652C26.5 15.652 26.5 55.5 26.5 55.5c11.408-18.74 18.43-22.25 40.31-22.25z"/></svg>\n        Add this to your home screen\n        <span class="arrow"></span>\n    <div>\n    ';
 } ;
__p += '\n</div>\n';

}
return __p
};

this["JST"]["offline-tmpl"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div id="offline-screen" style="background-color:' +
((__t = ( loader.backgroundColor )) == null ? '' : __t) +
'">\n\t<div id="loading-logo">\n\t\t<img id="loading-image">\n\t\t<h1 class="title" style="color:' +
((__t = ( loader.color )) == null ? '' : __t) +
'">' +
((__t = ( offlineTitle )) == null ? '' : __t) +
'</h1>\n\t\t<div class="text" style="color:' +
((__t = ( loader.color )) == null ? '' : __t) +
'">' +
((__t = ( offlineText )) == null ? '' : __t) +
'</div>\n\t</div>\n</div>';

}
return __p
};

this["JST"]["pagelistview-tmpl"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div id="pagelistviewWrapper">\n    <div id="pagelistview">\n        <div id="pagelist"></div>\n    </div>\n    ';
 if ( AS.config.get('features.pageNavigation') && 
            (((AS.config.get('app.mobileOnly') || Modernizr.touch) && AS.config.get('pageNavigation.showArrowsForMobile')) ||
            (!Modernizr.touch && AS.config.get('pageNavigation.showArrowsForDesktop')))) { ;
__p += '\n        <button class="left-arrow"></button>\n        <button class="right-arrow"></button>\n        ';
 } ;
__p += '\n</div>';

}
return __p
};

this["JST"]["geolocation-tmpl"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="modalView">\n    <div class="modalBackground"></div>\n    <div class="dummyContainer">\n        <div class="popupHolder">\n            <div id="mapCanvas"></div>\n        </div>\n    </div>\n</div>';

}
return __p
};

this["JST"]["popupvideo-tmpl"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="modalView">\n    <div class="modalBackground"></div>\n    <div class="dummyContainer">\n    \t<div class="pv-closeButtonHolder">\n\t\t\t<a class="pv-close"><svg xmlns="http://www.w3.org/2000/svg" width="26" height="24" viewBox="0 0 26 24"><path d="M4 18.02L19.02 3.006 22 5.988 6.982 21.002zM6.98 2.998l15.016 15.017-2.98 2.98L4 5.976z"/></svg></a>\n\t\t</div>\n        <div class="popupHolder">\n                <video controls="true" class="hide" id="modelvideo"></video>\n        </div>\n    </div>\n</div>\n\n';

}
return __p
};

this["JST"]["zoomableimage-tmpl"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="modalView">\n    <div class="modalBackground"></div>\n    <div class="dummyContainer">\n\t\t<div class="zw-closeButtonHolder">\n\t\t\t<a class="zw-close"><svg xmlns="http://www.w3.org/2000/svg" width="26" height="24" viewBox="0 0 26 24"><path d="M4 18.02L19.02 3.006 22 5.988 6.982 21.002zM6.98 2.998l15.016 15.017-2.98 2.98L4 5.976z"/></svg></a>\n\t\t</div>\n        <div class="popupHolder zoom-widget">\n            <img>\n            <div class="centred spinner"></div>\n        </div>\n    </div>\n\n</div>\n\n';

}
return __p
};

this["JST"]["navigationwrapper-tmpl"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div id="navigation-wrapper"></div>';

}
return __p
};

this["JST"]["scrubberpagenos-tmpl"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="pageID pull-right">\n    <span id="currentPagePosition">' +
((__t = ( currentPagePosition )) == null ? '' : __t) +
'</span>\n    <span>/ ' +
((__t = ( endPage )) == null ? '' : __t) +
'</span>\n</div>';

}
return __p
};

this["JST"]["scrubberthumbnail-tmpl"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<li class="thumbnail" data-index="' +
((__t = ( index )) == null ? '' : __t) +
'">\n    <img src="' +
((__t = ( thumbnail )) == null ? '' : __t) +
'">\n    ';
 if ( article.title ) { ;
__p += '\n        <span class="page-title">' +
((__t = ( article.title )) == null ? '' : __t) +
'</span>\n    ';
 } ;
__p += '\n    <span class="page-index">' +
((__t = ( index + 1 )) == null ? '' : __t) +
'</span>\n</li>';

}
return __p
};

this["JST"]["scrubberthumbnailgroup-tmpl"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<li class="thumbnail-group">\n    <h5 class="thumbnail-group-title"><span class="title">' +
((__t = ( name.toLocaleString() )) == null ? '' : __t) +
'</span></h5>\n    <ul class="thumbnail-list" style="border-top-color: ' +
((__t = ( colour )) == null ? '' : __t) +
'"></ul>\n</li>';

}
return __p
};

this["JST"]["scrubbertick-tmpl"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="tick">\n    <span class="tick-inner"></span>\n</div>';

}
return __p
};

this["JST"]["scrubbertimeline-tmpl"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div id="scrubber-timeline">\n    <ul id="scrubber-timeline-list"></ul>\n</div>';

}
return __p
};

this["JST"]["scrubberview-tmpl"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div id="scrubber-wrapper">\n    <button class=\'home-button\'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" enable-background="new 0 0 24 24"><path d="M21.9 12.7c-.1.1-.2.1-.3.1-.1 0-.2 0-.3-.1L12 5.1l-9.3 7.7c-.1.1-.2.1-.3.1-.1 0-.2-.1-.3-.1l-.8-1c-.1-.2-.1-.5.1-.6l9.6-8c.6-.5 1.5-.5 2 0l3.3 2.7V3.3c0-.2.2-.4.4-.4h2.6c.2 0 .4.2.4.4v5.5l2.9 2.4c.2.1.2.4.1.6l-.8.9zm-2.2 6.4c0 .5-.4.9-.9.9h-5.1v-5.1h-3.4V20H5.2c-.5 0-.9-.4-.9-.9v-6.5L12 6.3l7.7 6.3v6.5z"/></svg></button>\n    <div id="scrubber">\n        <div class="ticks">\n        </div>\n        ';
 if ( !Modernizr.touch || AS.config.get( 'app.mobileOnly' )) { ;
__p += '\n            <div id="scrubber-thumb"></div>\n        ';
 } ;
__p += '\n    </div>\n</div>';

}
return __p
};

this["JST"]["settings-tmpl"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div id="settings">\n\n\t<div id="settings-menu">\n        <h2>' +
((__t = ( settingsTitle )) == null ? '' : __t) +
'</h2>\n        <button class="settings-close"><svg xmlns="http://www.w3.org/2000/svg" width="26" height="24" viewBox="0 0 26 24"><path d="M4 18.02L19.02 3.006 22 5.988 6.982 21.002zM6.98 2.998l15.016 15.017-2.98 2.98L4 5.976z"/></svg></button>\n\t    <ul id="settings-menu-list">\n\n\t    \t<li><button class="settings-button selected">Offline Options</button></li>\n\n\t    </ul>\n\t</div>\n\n\t<div class="settings-panel">\n\n\t\t<h3>Offline Capabilities</h3>\n\t\t<div class="padding">\n\t\t\t<p>Would you like to use your browers offline capabilities to save issues to read at a later date when you may not have any internet access.</p>\n\n\t\t\t<div class="options-display">\n\t\t\t\t<div class="options" data-option="0">\n\t\t\t\t\t<span data-option="0" >Off</span><span data-option="1" >On</span>\n\t\t\t\t</div>\n\t\t\t\t<label>Turn offline options on or off</label>\n\t\t\t</div>\n\t\t</div>\n\n\n\n\t</div>\n\n</div>';

}
return __p
};

this["JST"]["sharing-tmpl"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div style="position:absolute;display:none;">\n    <div class="sharing_icons">\n        ';
 if ( AS.config.get('socialSharing.options.emailShare') ){ ;
__p += '\n            <div class="icon email"></div>\n        ';
 } ;
__p += '\n        ';
 if ( AS.config.get('socialSharing.options.linkedinShare') ) { ;
__p += '\n            <div class="icon linkedin"></div>\n        ';
 } ;
__p += '\n        ';
 if ( AS.config.get('socialSharing.options.twitterShare') ) { ;
__p += '\n            <div class="icon twitter"></div>\n        ';
 } ;
__p += '\n        ';
 if ( AS.config.get('socialSharing.options.facebookShare') ) { ;
__p += '\n            <div class="icon facebook"></div>\n        ';
 } ;
__p += '\n    </div>\n</div>';

}
return __p
};

this["JST"]["storebanner-tmpl"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div id="banner" style="height:' +
((__t = ( bannerHeight )) == null ? '' : __t) +
'px;">\n    <iframe style="height:' +
((__t = ( bannerHeight )) == null ? '' : __t) +
'px;" src="' +
((__t = ( bannerSrc )) == null ? '' : __t) +
'"></iframe>\n</div>';

}
return __p
};

this["JST"]["storefooter-tmpl"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<footer title="' +
((__t = ( timestamp )) == null ? '' : __t) +
'">\n    <small>\n        Powered by <span class="appstudio-logo"></span>\n        Version ' +
((__t = ( version )) == null ? '' : __t);
 if ( branch ) { ;
__p += ' (' +
((__t = ( branch )) == null ? '' : __t) +
'-' +
((__t = ( buildNumber )) == null ? '' : __t) +
')';
 } ;
__p += '\n    </small>\n</footer>';

}
return __p
};

this["JST"]["storeheader-tmpl"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<header>\n    <div class=\'store-greeting\'>\n        <h1 class=\'tight\'>' +
((__t = ( greeting )) == null ? '' : __t) +
'</h1>\n        ';
 if ( summary ) { ;
__p += '\n            <p id=\'lorem\'>' +
((__t = ( summary )) == null ? '' : __t) +
'</p>\n        ';
 } ;
__p += '\n    </div>\n    <div class="store-tools">\n\n        <div id="fullscr"\n                data-ttip-width="160"\n                data-ttip-side="bottom"\n                data-ttip-align="right"\n                data-ttip-text-align="left" >\n            <svg xmlns="http://www.w3.org/2000/svg" width="26.083" height="24.167" viewBox="0 0 26.083 24.167"><g ><path d="M16.402 6.052l-3.26 3.26 2.322 2.32 3.26-3.258 2.45 2.45.515-7.74-7.74.517zM6.656 15.795l3.26-3.26 2.323 2.323-3.26 3.26 2.45 2.45-7.74.516.515-7.74z"/></g></svg>\n        </div>\n        ';
 if ( AS.browser.ios || AS.browser.android || AS.browser.kindle ) { ;
__p += '\n            <button id="get-app">\n                ' +
((__t = ( "downloadApp".toConfiguredLocaleString() )) == null ? '' : __t) +
'\n            </button>\n        ';
 } ;
__p += '\n        ';
 if ( AS.AuthProxy.enabled && isConnected && AS.AuthProxy.level !== 'publication' ) { ;
__p += '\n            <div class="actions">\n                ';
 if ( !AS.Session.authenticated ) { ;
__p += '\n                    <a id="login-button" href="javascript:;">\n                        ' +
((__t = ( "login".toConfiguredLocaleString() )) == null ? '' : __t) +
'\n                    </a>\n                    ';
 if ( AS.config.get('app.auth.subscribeUrl') !== '' ) { ;
__p += '\n                        <a id="subscribe-button" href="' +
((__t = ( subscribeUrl )) == null ? '' : __t) +
'" target="_blank">\n                            ' +
((__t = ( "subscribe".toConfiguredLocaleString() )) == null ? '' : __t) +
'\n                        </a>\n                    ';
 } ;
__p += '\n                ';
 } else { ;
__p += '\n                    <p>' +
((__t = ("logged-in".toLocaleString() )) == null ? '' : __t) +
'\n                        <span>' +
((__t = ( username )) == null ? '' : __t) +
'</span>\n                    </p>\n                    <a id="logout-button" href="javascript:;">\n                        ' +
((__t = ( "logout".toConfiguredLocaleString() )) == null ? '' : __t) +
'\n                    </a>\n                ';
 } ;
__p += '\n            </div>\n        ';
 } ;
__p += '\n        ';
 if (offline) { ;
__p += '\n            <div id="btnLibrary" class="' +
((__t = ( activeClass )) == null ? '' : __t) +
'"\n                        data-ttip-width="160"\n                        data-ttip-side="bottom"\n                        data-ttip-align="right"\n                        data-ttip-text-align="left" >\n                <svg width="512" height="512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M288.117 144.635l121.356-40.716 101.792 303.39-121.356 40.717zM0 448h128V96H0v352zm32-288h64v32H32v-32zm128 288h128V96H160v352zm32-288h64v32h-64v-32z"/></svg>\n            </div>\n        ';
 } ;
__p += '\n    </div>\n</header>\n';

}
return __p
};

this["JST"]["storeissue-tmpl"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<li class="issue">\n\n    <div class="thumb">\n        <a href="#issue/' +
((__t = ( id )) == null ? '' : __t) +
'" class="image-loader">\n            <img src="' +
((__t = ( imageSrc )) == null ? '' : __t) +
'" />\n        </a>\n    </div>\n\n    <div class="info">\n        <a class="h2" href=\'#issue/' +
((__t = ( id )) == null ? '' : __t) +
'\'>' +
((__t = ( title )) == null ? '' : __t) +
'</a>\n        ';
 if ( false ) { ;
__p += '\n            <p>' +
((__t = ( description )) == null ? '' : __t) +
'</p>\n        ';
 } ;
__p += '\n        <div class="ctrl">\n            ';
 if ( viewable ) { ;
__p += '\n                <a href="#issue/' +
((__t = ( id )) == null ? '' : __t) +
'" class="store-link">\n                    ' +
((__t = ( "view".toLocaleString() )) == null ? '' : __t) +
'\n                </a>\n            ';
 } else { ;
__p += '\n                <a href="' +
((__t = ( subscribeUrl )) == null ? '' : __t) +
'" target="_blank" class="store-link">\n                    ' +
((__t = ( "subscribe".toLocaleString() )) == null ? '' : __t) +
'\n                </a>\n            ';
 } ;
__p += '\n        </div>\n    </div>\n\n</li>\n';

}
return __p
};

this["JST"]["storeissuecontainer-tmpl"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<section>\n    <section id=\'promotedIssue\'></section>\n\n    <section id=\'externalBanner\'></section>\n\n    <section id=\'standardIssue\'>\n        <ul id="issueContainer"></ul>\n\n    </section>\n\n    <div id="more" class="store-loader">\n        <img src="webreader/images/spinner.gif"></img>\n    </div>\n\n</section>\n';

}
return __p
};

this["JST"]["storepromotion-tmpl"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class="jumbotron">\n    <div class="background-container"></div>\n    <div class="content-container">\n        <div class="thumb">\n            <a href="#issue/' +
((__t = ( id )) == null ? '' : __t) +
'">\n                <img src="' +
((__t = ( imageSrc )) == null ? '' : __t) +
'" />\n            </a>\n        </div>\n        <div class="info">\n            <h2><a href="#issue/' +
((__t = ( id )) == null ? '' : __t) +
'" title="' +
((__t = ( title )) == null ? '' : __t) +
'">' +
((__t = ( title )) == null ? '' : __t) +
'</a></h2>\n            <p title="' +
((__t = ( description )) == null ? '' : __t) +
'">' +
((__t = ( description )) == null ? '' : __t) +
'</p>\n            <div class="ctrl">\n                ';
 if ( viewable ) { ;
__p += '\n                    <a href="#issue/' +
((__t = ( id )) == null ? '' : __t) +
'" class="store-link">\n                        ' +
((__t = ( "view".toLocaleString() )) == null ? '' : __t) +
'\n                    </a>\n                ';
 } else { ;
__p += '\n                    <a href="' +
((__t = ( subscribeUrl )) == null ? '' : __t) +
'" target="_blank" class="store-link">\n                        ' +
((__t = ( "subscribe".toLocaleString() )) == null ? '' : __t) +
'\n                    </a>\n                ';
 } ;
__p += '\n            </div>\n        </div>\n    </div>\n</div>';

}
return __p
};

this["JST"]["toc-tmpl"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div id="toc" class="tocWrapper">\n    <div id="tocView">\n    </div>\n</div>\n';

}
return __p
};

this["JST"]["tocbanner-tmpl"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="tocBanner">\n    <button class="hideToc"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" enable-background="new 0 0 24 24"><path d="M20.8 10.6l-8.3 8.3c-.1.1-.3.2-.5.2s-.4-.1-.5-.2l-8.3-8.3c-.1-.1-.2-.3-.2-.5s.1-.4.2-.5l1.9-1.9c.1-.1.3-.2.5-.2s.4.1.5.2l6 6 6-6c.1-.1.3-.2.5-.2s.4.1.5.2L21 9.6c.1.1.2.3.2.5s-.3.3-.4.5z"/></svg></svg></button>\n    <span id="bannerTitle"></span>\n</div>';

}
return __p
};

this["JST"]["tocframe-tmpl"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div id="tocFrameWrapper">\n        <div id="tocFrameContainer">\n            <iframe id="tocFrame"></iframe>\n    </div>\n</div>\n';

}
return __p
};

this["JST"]["tocitem-tmpl"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class=\'tocColour\' style=\'background-color:' +
((__t = ( colour )) == null ? '' : __t) +
';\'></div>\n<button class="sectionHeader">' +
((__t = ( name.toLocaleString() )) == null ? '' : __t) +
'</button>\n<ul class="sectionItems">\n\n</ul>';

}
return __p
};

this["JST"]["tocsubitem-tmpl"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<button class="goToArticle" data-target="' +
((__t = ( id )) == null ? '' : __t) +
'">\n\t';
 if ( imageShow ){ ;
__p += '\n\t<img src="' +
((__t = ( image )) == null ? '' : __t) +
'"/>\n\t';
 } ;
__p += '\n\t<span class="articleTitle">' +
((__t = ( name )) == null ? '' : __t) +
'</span>\n\t';
 if ( descriptionShow ) { ;
__p += '\n\t<span class="articleDescription">' +
((__t = ( description )) == null ? '' : __t) +
'' +
((__t = ( page )) == null ? '' : __t) +
'</span>\n\t';
 } ;
__p += '\n</button>';

}
return __p
};

this["JST"]["toolbar-tmpl"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div id="toolbarWrapper">\n    <div id="toolbarContainer">\n\n    </div>\n    <div id="toolbarContainerMore">\n\n    </div>\n</div>\n';

}
return __p
};

this["JST"]["toolbaritem-tmpl"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="toolbarItem" data-action="' +
((__t = ( buttonAction )) == null ? '' : __t) +
'" data-ttip-side="top">\n    <button class="' +
((__t = ( cssClass )) == null ? '' : __t) +
'">\n    \t' +
((__t = ( svgData )) == null ? '' : __t) +
'\n\t</button>\n</div>';

}
return __p
};

this["JST"]["tooltip-tmpl"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class=\'tooltip transparent\'>\n    <span class=\'tooltip-content\'>' +
((__t = ( content )) == null ? '' : __t) +
'</span>\n    <div class=\'arrow\'></div>\n</div>';

}
return __p
};

this["JST"]["ttip-tmpl"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div id="ttip">\n    <span class=\'tooltip-content\'></span>\n    <div class=\'arrow\'></div>\n    <div class=\'inner-arrow\'></div>\n</div>';

}
return __p
};

this["JST"]["unsupported-tmpl"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div id="unsupported" class="container">\n\n    <div class="info">\n        <h1>' +
((__t = ( "non-supported-browser-title".toLocaleString() )) == null ? '' : __t) +
'</h1>\n        <p>' +
((__t = ( "non-supported-browser-info".toLocaleString() )) == null ? '' : __t) +
'</p>\n        <p>' +
((__t = ( "browser-recommendation".toLocaleString() )) == null ? '' : __t) +
'</p>\n    </div>\n\n    <div>\n        <a href="http://www.google.com/chrome" class="browser">\n            <img src="webreader/images/browsers/64-chrome.png" alt="Chrome" />\n            <p>' +
((__t = ( "chrome".toLocaleString() )) == null ? '' : __t) +
'</p>\n        </a>\n        <a href="http://www.apple.com/uk/safari/" class="browser">\n            <img src="webreader/images/browsers/64-safari.png" alt="Safari" />\n            <p>' +
((__t = ( "safari".toLocaleString() )) == null ? '' : __t) +
'</p>\n        </a>\n        <a href="http://windows.microsoft.com/en-GB/internet-explorer/download-ie" class="browser">\n            <img src="webreader/images/browsers/64-ie.png" alt="Internet Explorer" />\n            <p>' +
((__t = ( "ie-supported".toLocaleString() )) == null ? '' : __t) +
'</p>\n        </a>\n        <a href="https://www.microsoft.com/en-in/windows/microsoft-edge" class="browser">\n            <img src="webreader/images/browsers/64-edge.png" alt="Edge" />\n            <p>' +
((__t = ( "edge".toLocaleString() )) == null ? '' : __t) +
'</p>\n        </a>\n        <a href="http://getfirefox.com" class="browser">\n            <img src="webreader/images/browsers/64-firefox.png" alt="Firefox" />\n            <p>' +
((__t = ( "firefox-supported".toLocaleString() )) == null ? '' : __t) +
'</p>\n        </a>\n    </div>\n</div>\n';

}
return __p
};