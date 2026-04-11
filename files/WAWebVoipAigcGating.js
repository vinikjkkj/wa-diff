__d(
  "WAWebVoipAigcGating",
  ["fbt", "WALogger", "WAWebABProps", "WAWebVoipNackHandlers", "react"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u,
      c = u || (u = o("react")),
      d = 10,
      m = 20;
    function p(e) {
      var t,
        n,
        r,
        a =
          (t = o("WAWebABProps").getABPropConfigValue("aigc_version")) != null
            ? t
            : 0;
      if (a >= e) return null;
      var i =
        (n = o("WAWebABProps").getABPropConfigValue(
          "ai_group_call_max_version_by_country",
        )) != null
          ? n
          : 0;
      if (i < e)
        return s._(
          /*BTDS*/ "Calls with Meta AI are not available in your country.",
        );
      var l =
        (r = o("WAWebABProps").getABPropConfigValue(
          "ai_group_call_max_version_by_platform",
        )) != null
          ? r
          : 0;
      return l < e
        ? s._(
            /*BTDS*/ "Calls with Meta AI are not supported on this device. Please join on your primary mobile phone.",
          )
        : s._(
            /*BTDS*/ "Update your app to the latest version of WhatsApp to continue using WhatsApp Calling with Meta AI.",
          );
    }
    p.displayName = p.name + " [from " + i.id + "]";
    function _(t, n) {
      if (!t) return !1;
      var r = n ? m : d,
        a = p(r);
      return a == null
        ? !1
        : (o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[AIGC] blocked isVideo=",
                " required=",
                "",
              ])),
            n,
            r,
          ),
          o("WAWebVoipNackHandlers").showErrorDialog(a),
          !0);
    }
    l.showAigcUnsupportedDialogIfNeeded = _;
  },
  226,
);
