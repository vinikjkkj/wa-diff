__d(
  "WAWebBizCtwaAGMUtils",
  [
    "fbt",
    "WAWebABProps",
    "WAWebBizGatingUtils",
    "WAWebCommonMsgSubtypeTypes",
    "WAWebCtwaAGMUtils",
    "WAWebMsgType",
    "WAWebSettingsFBT",
    "WAWebSignupGating",
    "WAWebURLUtils",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    function e() {
      return s._(/*BTDS*/ "View details");
    }
    function u(e) {
      return e === o("WAWebCtwaAGMUtils").AGM_SOURCE_APP.WHATSAPP &&
        o("WAWebBizGatingUtils").getWamoAgmEnabled()
        ? o("WAWebSettingsFBT").wamoNonAGMMessagePreviewTitle()
        : s._(/*BTDS*/ "{ad source} ad", [s._param("ad source", e)]);
    }
    function c(e) {
      return r("WAWebURLUtils").withoutWww(r("WAWebURLUtils").hostname(e));
    }
    function d(e) {
      if (e.sourceUrl == null) return null;
      var t = c(e.sourceUrl),
        n = t.split(".")[0];
      return n === "fb" ? "facebook" : n;
    }
    function m(e) {
      return s._(/*BTDS*/ "{ad source} Ad image preview", [
        s._param("ad source", e),
      ]);
    }
    function p() {
      return s._(/*BTDS*/ "Error loading photo");
    }
    function _(e, t, n, r) {
      if (
        t === o("WAWebMsgType").MSG_TYPE.AUTOMATED_GREETING_MESSAGE &&
        r === o("WAWebCommonMsgSubtypeTypes").MsgSubtype.Signup &&
        o("WAWebBizGatingUtils").getFmxAgmEnabled()
      )
        return !0;
      var a = o("WAWebBizGatingUtils").getWamoAgmEnabled(),
        i =
          e === o("WAWebCtwaAGMUtils").AGM_SOURCE_APP.FACEBOOK ||
          e === o("WAWebCtwaAGMUtils").AGM_SOURCE_APP.INSTAGRAM,
        l =
          t === o("WAWebMsgType").MSG_TYPE.AUTOMATED_GREETING_MESSAGE &&
          n === !0 &&
          o("WAWebBizGatingUtils").getFmxAgmEnabled();
      return (a || i) && l;
    }
    function f(e) {
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
    function g(e) {
      var t, n;
      return e.type === o("WAWebMsgType").MSG_TYPE.AUTOMATED_GREETING_MESSAGE &&
        e.subtype === o("WAWebCommonMsgSubtypeTypes").MsgSubtype.Signup
        ? o("WAWebSignupGating").isSignupAGMEnabled()
        : f(e) &&
            _(
              (t = e.ctwaContext) == null ? void 0 : t.sourceApp,
              e.type,
              ((n = e.ctwaContext) == null
                ? void 0
                : n.automatedGreetingMessageShown) === !0,
            );
    }
    function h(e) {
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
    ((l.getCtwaDetailsLabel = e),
      (l.getAdSourceLabel = u),
      (l.getHostnameLabel = d),
      (l.getAdImageAlt = m),
      (l.getAdImgError = p),
      (l.isAutomatedGreetingMessage = _),
      (l.isAGMSupported = g),
      (l.isCtWAInitiatedChat = h));
  },
  226,
);
