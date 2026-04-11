__d(
  "WAWebBackendWorkerABPropsCache",
  [
    "WAResolvable",
    "WAWebABProps",
    "WAWebABPropsConfigs",
    "WAWebABPropsParseConfigValue",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = new Map(),
      s = new Set(),
      u = null,
      c = new (o("WAResolvable").Resolvable)(),
      d = "";
    function m(e) {
      ((u = e), o("WAWebABProps").setGetABPropConfigValueImpl(p));
    }
    function p(t) {
      var n = o("WAWebABPropsConfigs").ABPropConfigs[t];
      if (n != null) {
        var r = n[0],
          a = n[1],
          i = n[2],
          l = n[3],
          c = i,
          d = e.get(r);
        if (!s.has(r) && e.has(r)) {
          var m;
          (s.add(r),
            (m = u) == null ||
              m.fireAndForget("abPropsExposure", "recordExposure", {
                configCode: r,
              }));
        }
        return d == null ? void 0 : d.configValue;
      }
    }
    function _(t, n) {
      d = n;
      for (var r of t) e.set(r.configCode, r);
      c.resolveWasCalled() || c.resolve();
    }
    ((l.initializeWorkerABProps = m), (l.updateWorkerABProps = _));
  },
  98,
);
