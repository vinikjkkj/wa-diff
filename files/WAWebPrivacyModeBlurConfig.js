__d(
  "WAWebPrivacyModeBlurConfig",
  ["$InternalEnum"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e,
      l,
      s = n("$InternalEnum").Mirrored(["General", "Media"]),
      u = n("$InternalEnum").Mirrored(["Off", "Light", "Medium", "Strong"]),
      c =
        ((e = {}),
        (e[u.Off] = 0),
        (e[u.Light] = 4),
        (e[u.Medium] = 8),
        (e[u.Strong] = 20),
        e),
      d = ((l = {}), (l[s.General] = u.Light), (l[s.Media] = u.Medium), l);
    function m(e) {
      return c[e];
    }
    function p(e) {
      return d[e];
    }
    ((i.BlurCategory = s),
      (i.BlurPreset = u),
      (i.blurValueForPreset = m),
      (i.defaultPresetForCategory = p));
  },
  66,
);
