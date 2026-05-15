__d(
  "WAWebGuestCoreCommonUtils",
  ["WABase64", "WABase64UrlSafe", "WAWebBrowserInfo", "WAWebUA"],
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
      var t = r("WAWebBrowserInfo")(),
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
    function c(e) {
      return e.get("sc") != null && e.get("invite_code") == null;
    }
    function d(e) {
      return (
        (e >= 65 && e <= 90) ||
        (e >= 97 && e <= 122) ||
        (e >= 48 && e <= 57) ||
        e === 45 ||
        e === 46 ||
        e === 95 ||
        e === 126
      );
    }
    function m(e) {
      for (
        var t = "0123456789ABCDEF",
          n = e instanceof Uint8Array ? e : new Uint8Array(e),
          r = "",
          o = 0;
        o < n.length;
        o++
      ) {
        var a = n[o];
        d(a)
          ? (r += String.fromCharCode(a))
          : (r += "%" + t[Math.floor(a / 16)] + t[a % 16]);
      }
      return r;
    }
    function p(e, t, n) {
      var r = e.includes("?") ? "&" : "?";
      return "" + e + r + encodeURIComponent(t) + "=" + n;
    }
    function _(e) {
      return o("WABase64UrlSafe").urlSafeBase64(o("WABase64").encodeB64(e));
    }
    ((l.isAppClipWebView = e),
      (l.getBrowserAndOsDetails = s),
      (l.getInviteCodeFromUrlParams = u),
      (l.isSSIInviteCode = c),
      (l.percentEncodeBytes = m),
      (l.appendPreEncodedQueryParam = p),
      (l.encodeB64UrlSafe = _));
  },
  98,
);
