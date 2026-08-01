__d(
  "isRecentProfileSwitchSessionStorage",
  ["WebStorage"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = {
        getAndRemove: function () {
          var t,
            n,
            o =
              (t = (e || (e = r("WebStorage"))).getSessionStorage()) == null
                ? void 0
                : t.getItem("comet_is_recent_profile_switch");
          if (o == null) return null;
          (n = (e || (e = r("WebStorage"))).getSessionStorage()) == null ||
            n.removeItem("comet_is_recent_profile_switch");
          try {
            var a = JSON.parse(o);
            return {
              didSwitchToMainProfile:
                (a == null ? void 0 : a.didSwitchToMainProfile) === !0,
            };
          } catch (e) {
            return null;
          }
        },
        set: function (n) {
          (e || (e = r("WebStorage"))).setItemGuarded(
            e.getSessionStorage(),
            "comet_is_recent_profile_switch",
            JSON.stringify(n),
          );
        },
      },
      u = s;
    l.default = u;
  },
  98,
);
