__d(
  "WAWebGuestCoreCommonUtils",
  ["WAWebMiscBrowserUtils", "WAWebUA"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      var e;
      return (
        (navigator.userAgent.includes("WhatsApp-AppClip") &&
          typeof window != "undefined" &&
          ((e = window.webkit) == null ||
          (e = e.messageHandlers) == null ||
          (e = e.WAAppClipHandler) == null
            ? void 0
            : e.postMessage) !== void 0) === !0
      );
    }
    function s() {
      var t = r("WAWebMiscBrowserUtils").info(),
        n = o("WAWebUA").UA.parser.getResult();
      return {
        browserName: e() ? "WhatsApp-AppClip" : t.name,
        browserVersion: n.browser.version,
        osName: t.os,
        osVersion: t.version,
      };
    }
    function u(e) {
      var t;
      return (t = e.get("invite_code")) != null ? t : e.get("sc");
    }
    ((l.isAppClipWebView = e),
      (l.getBrowserAndOsDetails = s),
      (l.getInviteCodeFromUrlParams = u));
  },
  98,
);
