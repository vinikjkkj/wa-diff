__d(
  "WAWebBizAIOAuthTransport",
  [
    "WAWebBizAIOAuthPopup",
    "WAWebEnvironment",
    "WAWebExternalLink.react",
    "WAWebNoop",
    "WAWebURLUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "whatsapp_web:",
      s = "whatsapp_web_hybrid:";
    function u() {
      return r("WAWebEnvironment").getSubPlatform() === "win_hybrid";
    }
    function c() {
      if (u())
        return {
          abort: r("WAWebNoop"),
          isHybrid: !0,
          navigateToConsent: d,
          source: "" + s + window.location.hostname,
        };
      var t = o("WAWebBizAIOAuthPopup").openBlankOAuthPopup();
      return t == null
        ? null
        : {
            abort: function () {
              return t.close();
            },
            isHybrid: !1,
            navigateToConsent: function (n) {
              return o("WAWebBizAIOAuthPopup").navigateOAuthPopup(t, n);
            },
            source: "" + e + window.location.hostname,
          };
    }
    function d(e) {
      return e == null || !r("WAWebURLUtils").isHttps(e)
        ? !1
        : (o("WAWebExternalLink.react").openExternalLink(e, {
            allowReferrer: !0,
            noApiCmdHandling: !0,
          }),
          !0);
    }
    l.openOAuthTransport = c;
  },
  98,
);
