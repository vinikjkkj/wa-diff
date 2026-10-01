__d(
  "WAWebBizAIOAuthPopup",
  ["WAWebExternalLink.react", "WAWebURLUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "wa_web_biz_ai_oauth_popup",
      s = 600,
      u = 700;
    function c() {
      var e = Math.floor(window.screenX + (window.outerWidth - s) / 2),
        t = Math.floor(window.screenY + (window.outerHeight - u) / 2.5);
      return (
        "width=" +
        s +
        ",height=" +
        u +
        ",left=" +
        e +
        ",top=" +
        t +
        ",scrollbars=yes,resizable=yes"
      );
    }
    function d() {
      return window.open("", e, c());
    }
    function m(t, n) {
      return n == null || !r("WAWebURLUtils").isHttps(n) || t.closed
        ? !1
        : (o("WAWebExternalLink.react").openExternalLink(n, {
            allowReferrer: !0,
            noApiCmdHandling: !0,
            targetName: e,
          }),
          !0);
    }
    ((l.openBlankOAuthPopup = d), (l.navigateOAuthPopup = m));
  },
  98,
);
