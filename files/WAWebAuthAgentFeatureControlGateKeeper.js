__d(
  "WAWebAuthAgentFeatureControlGateKeeper",
  ["WAWebFeatureControlCache", "WAWebFeatureControlPolicy"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = !1;
    function s(t, n) {
      if (!e) {
        e = !0;
        var r = Object.entries(t.entries)
            .filter(function (e) {
              var t = e[1];
              return t === "DISABLED";
            })
            .map(function (e) {
              var t = e[0];
              return t;
            })
            .sort(),
          o = Object.entries(t.entries)
            .filter(function (e) {
              var t = e[1];
              return t === "LOCKED";
            })
            .map(function (e) {
              var t = e[0];
              return t;
            })
            .sort();
      }
    }
    function u(t) {
      var n = o("WAWebFeatureControlCache").getUserIsAA();
      if (!n) return (e || (e = !0), "ENABLED");
      var r = o("WAWebFeatureControlCache").getPolicy(),
        a = r != null ? r : o("WAWebFeatureControlPolicy").PILOT_DEFAULT;
      return (
        s(a, r != null ? "cached" : "pilot_default"),
        o("WAWebFeatureControlPolicy").featureState(a, t)
      );
    }
    function c(e) {
      return u(e) === "ENABLED";
    }
    function d(e) {
      return u(e) === "DISABLED";
    }
    function m(e) {
      return u(e) === "LOCKED";
    }
    ((l.getFeatureState = u),
      (l.isFeatureEnabled = c),
      (l.isFeatureDisabled = d),
      (l.isFeatureLocked = m));
  },
  98,
);
