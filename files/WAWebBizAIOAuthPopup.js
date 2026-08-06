__d(
  "WAWebBizAIOAuthPopup",
  ["WAWebURLUtils"],
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
    function m(e, t) {
      return t == null || !r("WAWebURLUtils").isHttps(t)
        ? !1
        : ((e.location.href = t), !0);
    }
    ((l.openBlankOAuthPopup = d), (l.navigateOAuthPopup = m));
  },
  98,
);
