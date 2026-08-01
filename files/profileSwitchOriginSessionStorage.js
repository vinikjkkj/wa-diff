__d(
  "profileSwitchOriginSessionStorage",
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
                : t.getItem("comet_profile_switch_origin");
          if (o == null) return null;
          (n = (e || (e = r("WebStorage"))).getSessionStorage()) == null ||
            n.removeItem("comet_profile_switch_origin");
          try {
            var a = JSON.parse(o);
            return { origin: a == null ? void 0 : a.origin };
          } catch (e) {
            return null;
          }
        },
        set: function (n) {
          (e || (e = r("WebStorage"))).setItemGuarded(
            e.getSessionStorage(),
            "comet_profile_switch_origin",
            JSON.stringify(n),
          );
        },
      },
      u = s;
    l.default = u;
  },
  98,
);
