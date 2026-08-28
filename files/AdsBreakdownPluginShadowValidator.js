__d(
  "AdsBreakdownPluginShadowValidator",
  ["AdsBreakdownPluginExperimentUtils", "FBLogger"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(t, n, r, o, a, i) {
      if (t !== n && !(t == null && n == null)) {
        if (t == null || n == null) {
          o.push({
            breakdownKey: a,
            adapterName: i,
            fieldPath: r,
            pluginValue: t,
            legacyValue: n,
          });
          return;
        }
        if (Array.isArray(t) !== Array.isArray(n)) {
          o.push({
            breakdownKey: a,
            adapterName: i,
            fieldPath: r,
            pluginValue: t,
            legacyValue: n,
          });
          return;
        }
        if (Array.isArray(t) && Array.isArray(n)) {
          if (t.length !== n.length) {
            o.push({
              breakdownKey: a,
              adapterName: i,
              fieldPath: r + ".length",
              pluginValue: t.length,
              legacyValue: n.length,
            });
            return;
          }
          for (var l = 0; l < t.length; l++)
            e(t[l], n[l], r + "[" + l + "]", o, a, i);
          return;
        }
        if (
          typeof t == "object" &&
          typeof n == "object" &&
          t != null &&
          n != null
        ) {
          var s = t,
            u = n,
            c = new Set([].concat(Object.keys(s), Object.keys(u)));
          for (var d of c) e(s[d], u[d], r + "." + d, o, a, i);
          return;
        }
        o.push({
          breakdownKey: a,
          adapterName: i,
          fieldPath: r,
          pluginValue: t,
          legacyValue: n,
        });
      }
    }
    function s(t, n, r) {
      if (r == null) return [];
      if (
        !o(
          "AdsBreakdownPluginExperimentUtils",
        ).getIsAccountInBreakdownPluginShadow()
      )
        return [];
      var a = [];
      return (e(r, n, "baseConfig", a, t, "BaseConfigAdapter"), a);
    }
    function u(e) {
      for (var t of e)
        r("FBLogger")("ads_breakdown_plugin_shadow").warn(
          "[BreakdownPluginShadow] Mismatch for %s.%s: plugin=%s legacy=%s",
          t.breakdownKey,
          t.fieldPath,
          JSON.stringify(t.pluginValue),
          JSON.stringify(t.legacyValue),
        );
    }
    ((l.validateBaseConfig = s), (l.logMismatches = u));
  },
  98,
);
