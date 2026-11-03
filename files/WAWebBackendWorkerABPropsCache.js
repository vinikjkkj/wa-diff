__d(
  "WAWebBackendWorkerABPropsCache",
  [
    "WAResolvable",
    "WAWebABProps",
    "WAWebABPropsConfigs",
    "WAWebABPropsJestE2EReadLog",
    "WAWebABPropsParseConfigValue",
    "WAWebABPropsUrlOverrideParam",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = new Map(),
      s = new Set(),
      u = null,
      c = new (o("WAResolvable").Resolvable)(),
      d = "";
    function m(e) {
      ((u = e),
        o("WAWebABProps").setGetABPropConfigValueImpl(p, _),
        o("WAWebABPropsJestE2EReadLog").setABPropReadRecorderForJestE2E(
          function (t) {
            e.fireAndForget("abPropsExposure", "recordJestE2ERead", {
              line: t,
            });
          },
        ));
    }
    function p(t) {
      var n = o("WAWebABPropsConfigs").ABPropConfigs[t];
      if (n != null) {
        var r = f(t);
        if (r != null) return r;
        var a = n[0],
          i = e.get(a);
        if (i != null && !i.awaitingExpoKey && !s.has(a)) {
          var l;
          (s.add(a),
            (l = u) == null ||
              l.fireAndForget("abPropsExposure", "recordExposure", {
                configCode: a,
              }));
        }
        return i == null ? void 0 : i.configValue;
      }
    }
    function _(t) {
      var n,
        r = o("WAWebABPropsConfigs").ABPropConfigs[t];
      return {
        isOverridden: r != null && f(t) != null,
        hasServerValue:
          r != null &&
          ((n = e.get(r[0])) == null ? void 0 : n.configValue) != null,
      };
    }
    function f(e) {
      if (!r("gkx")("16539") || !d) return null;
      var t = o("WAWebABPropsUrlOverrideParam").getABPropUrlOverrideParam(
        new URLSearchParams(d),
        e,
      );
      if (t == null || t === "") return null;
      var n = o("WAWebABPropsConfigs").ABPropConfigs[e],
        a = n[1],
        i = n[2],
        l = n[3],
        s = i;
      return o("WAWebABPropsParseConfigValue").parseConfigValue(t, a, s);
    }
    function g(t, n) {
      d = n;
      for (var r of t) e.set(r.configCode, r);
      c.resolveWasCalled() || c.resolve();
    }
    ((l.initializeWorkerABProps = m), (l.updateWorkerABProps = g));
  },
  98,
);
