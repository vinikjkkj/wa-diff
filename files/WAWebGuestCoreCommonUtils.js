__d(
  "WAWebGuestCoreCommonUtils",
  [
    "WABase64",
    "WABase64UrlSafe",
    "WAWebBrowserInfo",
    "WAWebGuestCoreDownloadCTAClickAction",
    "WAWebGuestCoreLocalStorage",
    "WAWebUA",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = new Set([
      "AbortError",
      "ConstraintError",
      "DataError",
      "Error",
      "InvalidStateError",
      "NetworkError",
      "NotAllowedError",
      "NotFoundError",
      "NotReadableError",
      "OperationError",
      "QuotaExceededError",
      "RangeError",
      "SecurityError",
      "SyntaxError",
      "TimeoutError",
      "TypeError",
      "UnknownError",
    ]);
    function s() {
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
    function u() {
      var e = r("WAWebBrowserInfo")();
      return {
        browserName: s() ? "WhatsApp-AppClip" : e.name,
        browserVersion: o("WAWebUA").UA.browserVersion,
        osName: e.os,
        osVersion: o("WAWebUA").UA.osVersion,
      };
    }
    function c(t) {
      var n = r("getErrorSafe")(t),
        o = n.name;
      return e.has(o) ? o : "other";
    }
    function d(e) {
      var t;
      return (t = e.get("invite_code")) != null ? t : e.get("sc");
    }
    function m(e) {
      var t;
      return (t = d(e)) != null ? t : e.get("ic");
    }
    function p(e) {
      return e.get("sc") != null && e.get("invite_code") == null;
    }
    function _(e) {
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
    function f(e) {
      for (
        var t = "0123456789ABCDEF",
          n = e instanceof Uint8Array ? e : new Uint8Array(e),
          r = "",
          o = 0;
        o < n.length;
        o++
      ) {
        var a = n[o];
        _(a)
          ? (r += String.fromCharCode(a))
          : (r += "%" + t[Math.floor(a / 16)] + t[a % 16]);
      }
      return r;
    }
    function g(e, t, n) {
      var r = e.includes("?") ? "&" : "?";
      return "" + e + r + encodeURIComponent(t) + "=" + n;
    }
    function h(e) {
      return o("WABase64UrlSafe").urlSafeBase64(o("WABase64").encodeB64(e));
    }
    function y(e, t) {
      var n = function () {
        document.visibilityState === "visible" &&
          o("WAWebGuestCoreLocalStorage").getGuestExperienceType() !== t &&
          o("WAWebGuestCoreDownloadCTAClickAction").downloadCTAClickAction(e);
      };
      document.addEventListener("visibilitychange", n);
    }
    ((l.isAppClipWebView = s),
      (l.getBrowserAndOsDetails = u),
      (l.getGuestErrorNameCode = c),
      (l.getInviteCodeFromUrlParams = d),
      (l.getPrivateInviteCodeFromUrlParams = m),
      (l.isSSIInviteCode = p),
      (l.percentEncodeBytes = f),
      (l.appendPreEncodedQueryParam = g),
      (l.encodeB64UrlSafe = h),
      (l.addGuestExperienceVisibilityListener = y));
  },
  98,
);
