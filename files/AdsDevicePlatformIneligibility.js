__d(
  "AdsDevicePlatformIneligibility",
  ["AdsCTVIncompatibleSelections"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n,
        r = [
          o("AdsCTVIncompatibleSelections").getCTVDevicePlatformIneligibility(
            e,
            t,
          ),
        ],
        a = new Set((n = e.spec.device_platforms) != null ? n : []),
        i = new Map();
      for (var l of r)
        if (l != null)
          for (var s of l) {
            var u = s[0],
              c = s[1];
            a.has(u) || i.set(u, c);
          }
      return i.size === 0 ? null : i;
    }
    l.getDevicePlatformIneligibility = e;
  },
  98,
);
