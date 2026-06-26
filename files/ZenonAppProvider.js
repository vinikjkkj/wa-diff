__d(
  "ZenonAppProvider",
  ["HorizonMetaIsCastingRoute", "IGDWebUtils", "ZenonActorHooks"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      return o("IGDWebUtils").isInstagramWebSupportedApp(S());
    }
    function s() {
      return R(S());
    }
    function u() {
      return S() === 351299233827255;
    }
    function c() {
      return S() === 0x74ed7b6f24452;
    }
    function d() {
      return S() === 518491789147974;
    }
    function m() {
      var e = S();
      return (
        e === 0x9d143786e51a6 ||
        e === 0x399e2d8359725 ||
        (e === 351299233827255 &&
          r("HorizonMetaIsCastingRoute").getIsCastingRoute())
      );
    }
    function p() {
      var e = S();
      return e === 0xc7269b363f3c;
    }
    function _() {
      var e = S();
      return e === 772021112871879 || e === 0x7e36f3fcc43bc;
    }
    function f() {
      var e = S();
      return (
        e === 949958857019662 || e === 0x4d31ba8e7e89d || e === 445865345227527
      );
    }
    function g() {
      var e = S();
      return (
        e === 514771569228061 || e === 436761779744620 || e === 349974259839838
      );
    }
    function h() {
      var e = S();
      return e === 0x70127cc7da0a0;
    }
    function y() {
      return S() === 0x5a31088e0c758;
    }
    function C() {
      return o("ZenonActorHooks").ZenonActor.isMAISAVoice();
    }
    function b() {
      return S() === 307542933446158;
    }
    function v() {
      return f() || h() || p();
    }
    function S() {
      var e = o("ZenonActorHooks").ZenonActor.getAppID();
      return e == null ? null : Number(e);
    }
    function R(e) {
      return e != null
        ? e === 0x9d143786e51a6 ||
            e === 0x399e2d8359725 ||
            e === 351299233827255
        : !1;
    }
    ((l.isInstagramApp = e),
      (l.isOculusApp = s),
      (l.isHorizonApp = u),
      (l.isHorizonWorldsApp = c),
      (l.isCastingCenterApp = d),
      (l.isOculusCastingSite = m),
      (l.isMDCApp = p),
      (l.isMessengerWebApp = _),
      (l.isMetaAI = f),
      (l.isBizWebApp = g),
      (l.isWidgetLiveChatApp = h),
      (l.isWorkplace = y),
      (l.isMAISAVoice = C),
      (l.isInternApp = b),
      (l.shouldSupportRTPSession = v));
  },
  98,
);
