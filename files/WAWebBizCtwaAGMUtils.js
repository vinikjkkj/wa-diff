__d(
  "WAWebBizCtwaAGMUtils",
  [
    "fbt",
    "WAWebABProps",
    "WAWebCommonMsgSubtypeTypes",
    "WAWebCtwaAGMUtils",
    "WAWebMsgType",
    "WAWebSignupGating",
    "WAWebURLUtils",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    function e(e) {
      return s._(/*BTDS*/ "{ad source} ad", [s._param("ad source", e)]);
    }
    function u(e) {
      return r("WAWebURLUtils").withoutWww(r("WAWebURLUtils").hostname(e));
    }
    function c(e) {
      if (e.sourceUrl == null) return null;
      var t = u(e.sourceUrl),
        n = t.split(".")[0];
      return n === "fb" ? "facebook" : n;
    }
    function d(e) {
      return s._(/*BTDS*/ "{ad source} Ad image preview", [
        s._param("ad source", e),
      ]);
    }
    function m() {
      return s._(/*BTDS*/ "Error loading photo");
    }
    function p(e) {
      var t = e.isAGMShown,
        n = e.msgSource,
        r = e.msgSubtype,
        a = e.msgType;
      if (
        a === o("WAWebMsgType").MSG_TYPE.AUTOMATED_GREETING_MESSAGE &&
        r === o("WAWebCommonMsgSubtypeTypes").MsgSubtype.Signup
      )
        return !0;
      var i =
          n === o("WAWebCtwaAGMUtils").AGM_SOURCE_APP.FACEBOOK ||
          n === o("WAWebCtwaAGMUtils").AGM_SOURCE_APP.INSTAGRAM,
        l =
          a === o("WAWebMsgType").MSG_TYPE.AUTOMATED_GREETING_MESSAGE &&
          t === !0;
      return i && l;
    }
    function _(e) {
      if (
        e.type === o("WAWebMsgType").MSG_TYPE.AUTOMATED_GREETING_MESSAGE &&
        e.ctwaContext != null
      ) {
        var t = e.ctwaContext,
          n = o("WAWebCtwaAGMUtils").extractAGMPayload(t);
        return (n == null ? void 0 : n.ctaType) ===
          o("WAWebCtwaAGMUtils").AGM_CTA_TYPE.FLOW
          ? o("WAWebABProps").getABPropConfigValue("flows_wa_web") &&
              o("WAWebABProps").getABPropConfigValue("enable_agm_flow_cta") &&
              o("WAWebABProps").getABPropConfigValue("flows_wa_web_agm_cta") &&
              o("WAWebABProps").getABPropConfigValue(
                "flows_wa_web_responses_download",
              )
          : !0;
      }
      return !1;
    }
    function f(e) {
      var t, n;
      return e.type === o("WAWebMsgType").MSG_TYPE.AUTOMATED_GREETING_MESSAGE &&
        e.subtype === o("WAWebCommonMsgSubtypeTypes").MsgSubtype.Signup
        ? o("WAWebSignupGating").isSignupAGMEnabled()
        : _(e) &&
            p({
              isAGMShown:
                ((t = e.ctwaContext) == null
                  ? void 0
                  : t.automatedGreetingMessageShown) === !0,
              msgSource: (n = e.ctwaContext) == null ? void 0 : n.sourceApp,
              msgType: e.type,
            });
    }
    function g(e) {
      var t = e.getAllMsgs(),
        n = t.find(function (e) {
          return (
            e.type !== o("WAWebMsgType").MSG_TYPE.E2E_NOTIFICATION &&
            e.type !== o("WAWebMsgType").MSG_TYPE.NOTIFICATION_TEMPLATE &&
            e.type !== o("WAWebMsgType").MSG_TYPE.NOTIFICATION
          );
        });
      return (
        (n == null ? void 0 : n.type) ===
        o("WAWebMsgType").MSG_TYPE.AUTOMATED_GREETING_MESSAGE
      );
    }
    ((l.getAdSourceLabel = e),
      (l.getHostnameLabel = c),
      (l.getAdImageAlt = d),
      (l.getAdImgError = m),
      (l.isAutomatedGreetingMessage = p),
      (l.isAGMSupported = f),
      (l.isCtWAInitiatedChat = g));
  },
  226,
);
