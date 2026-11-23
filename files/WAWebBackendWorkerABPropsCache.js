__d(
  "WAWebBackendWorkerABPropsCache",
  [
    "WAResolvable",
    "WAWebABPropExposureCandidate",
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
    function p(t, n) {
      var r = o("WAWebABPropsConfigs").ABPropConfigs[t];
      if (r != null) {
        var a = f(t);
        if (a != null) return a;
        var i = r[0],
          l = e.get(i),
          c = o("WAWebABPropExposureCandidate").getABPropExposureCandidate(
            l,
            n,
          );
        if (c != null && !c.awaitingExpoKey && !s.has(i)) {
          var d;
          (s.add(i),
            (d = u) == null ||
              d.fireAndForget("abPropsExposure", "recordExposure", {
                configCode: i,
              }));
        }
        return l == null ? void 0 : l.configValue;
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
