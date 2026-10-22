__d(
  "WAWebUserPrefsPrivacyMode",
  ["$InternalEnum", "WAWebPrivacyModeBlurConfig", "WAWebUserPrefsStore"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = n("$InternalEnum").Mirrored([
        "PrivacyScreenEnabled",
        "BlurPresetGeneral",
        "BlurPresetMedia",
      ]);
    function u(e) {
      r("WAWebUserPrefsStore").setUser(s.PrivacyScreenEnabled, e);
    }
    var c =
      ((e = {}),
      (e[o("WAWebPrivacyModeBlurConfig").BlurCategory.General] =
        s.BlurPresetGeneral),
      (e[o("WAWebPrivacyModeBlurConfig").BlurCategory.Media] =
        s.BlurPresetMedia),
      e);
    function d(e) {
      return o("WAWebPrivacyModeBlurConfig").defaultPresetForCategory(e);
    }
    function m(e, t) {
      r("WAWebUserPrefsStore").setUser(c[e], t);
    }
    ((l.setPrivacyScreenEnabled = u),
      (l.getBlurPreset = d),
      (l.setBlurPreset = m));
  },
  98,
);
