__d(
  "WAWebAbPropsParsingJob",
  ["WAWebABPropsConfigs"],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      var n = new Map();
      e.forEach(function (e) {
        var t = e.configCode,
          r = e.configExpoKey,
          o = e.configValue;
        n.set(t, { configValue: o, configExpoKey: r });
      });
      var r = new Map();
      return (
        Object.keys(o("WAWebABPropsConfigs").ABPropConfigs).map(function (e) {
          var a = o("WAWebABPropsConfigs").ABPropConfigs[e][0],
            i = n.get(a);
          if (!(i == null && t)) {
            var l = i == null ? void 0 : i.configValue,
              s = i == null ? void 0 : i.configExpoKey;
            r.set(a, {
              configValue: l,
              configExpoKey: s == null ? null : s.toString(),
            });
          }
        }),
        r
      );
    }
    l.parseABProps = e;
  },
  98,
);
