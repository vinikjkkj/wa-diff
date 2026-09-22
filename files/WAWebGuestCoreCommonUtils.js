__d(
  "WAWebGuestCoreCommonUtils",
  [
    "WABase64",
    "WABase64UrlSafe",
    "WAWebBrowserInfo",
    "WAWebGuestCoreDownloadCTAClickAction",
    "WAWebGuestCoreLocalStorage",
    "WAWebUA",
  ],
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
      var t;
      return (t = u(e)) != null ? t : e.get("ic");
    }
    function d(e) {
      return e.get("sc") != null && e.get("invite_code") == null;
    }
    function m(e) {
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
    function p(e) {
      for (
        var t = "0123456789ABCDEF",
          n = e instanceof Uint8Array ? e : new Uint8Array(e),
          r = "",
          o = 0;
        o < n.length;
        o++
      ) {
        var a = n[o];
        m(a)
          ? (r += String.fromCharCode(a))
          : (r += "%" + t[Math.floor(a / 16)] + t[a % 16]);
      }
      return r;
    }
    function _(e, t, n) {
      var r = e.includes("?") ? "&" : "?";
      return "" + e + r + encodeURIComponent(t) + "=" + n;
    }
    function f(e) {
      return o("WABase64UrlSafe").urlSafeBase64(o("WABase64").encodeB64(e));
    }
    function g(e, t) {
      var n = function () {
        document.visibilityState === "visible" &&
          o("WAWebGuestCoreLocalStorage").getGuestExperienceType() !== t &&
          o("WAWebGuestCoreDownloadCTAClickAction").downloadCTAClickAction(e);
      };
      document.addEventListener("visibilitychange", n);
    }
    ((l.isAppClipWebView = e),
      (l.getBrowserAndOsDetails = s),
      (l.getInviteCodeFromUrlParams = u),
      (l.getPrivateInviteCodeFromUrlParams = c),
      (l.isSSIInviteCode = d),
      (l.percentEncodeBytes = p),
      (l.appendPreEncodedQueryParam = _),
      (l.encodeB64UrlSafe = f),
      (l.addGuestExperienceVisibilityListener = g));
  },
  98,
);
