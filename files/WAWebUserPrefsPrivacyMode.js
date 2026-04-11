__d(
  "WAWebUserPrefsPrivacyMode",
  [
    "$InternalEnum",
    "WAWebPrivacyModeBlurConfig",
    "WAWebPrivacyModeGating",
    "WAWebUserPrefsStore",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = n("$InternalEnum").Mirrored([
        "PrivacyScreenEnabled",
        "BlurPresetGeneral",
        "BlurPresetMedia",
      ]);
    function u() {
      return o("WAWebPrivacyModeGating").isPrivacyScreenEnabled()
        ? r("WAWebUserPrefsStore").getUser(s.PrivacyScreenEnabled) === !0
        : !1;
    }
    function c(e) {
      r("WAWebUserPrefsStore").setUser(s.PrivacyScreenEnabled, e);
    }
    var d =
      ((e = {}),
      (e[o("WAWebPrivacyModeBlurConfig").BlurCategory.General] =
        s.BlurPresetGeneral),
      (e[o("WAWebPrivacyModeBlurConfig").BlurCategory.Media] =
        s.BlurPresetMedia),
      e);
    function m(e) {
      if (!o("WAWebPrivacyModeGating").isPrivacyScreenEnabled())
        return o("WAWebPrivacyModeBlurConfig").defaultPresetForCategory(e);
      var t = r("WAWebUserPrefsStore").getUser(d[e]);
      if (t != null && typeof t == "string") {
        var n = o("WAWebPrivacyModeBlurConfig").BlurPreset.cast(t);
        if (n != null) return n;
      }
      return o("WAWebPrivacyModeBlurConfig").defaultPresetForCategory(e);
    }
    function p(e, t) {
      r("WAWebUserPrefsStore").setUser(d[e], t);
    }
    ((l.isPrivacyScreenEnabled = u),
      (l.setPrivacyScreenEnabled = c),
      (l.getBlurPreset = m),
      (l.setBlurPreset = p));
  },
  98,
);
