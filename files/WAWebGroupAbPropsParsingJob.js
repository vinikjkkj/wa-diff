__d(
  "WAWebGroupAbPropsParsingJob",
  [],
  function (t, n, r, o, a, i) {
    function e(e, t) {
      return t.map(function (t) {
        var n = t.configCode,
          r = t.configExpoKey,
          o = t.configValue;
        return {
          groupJid: e,
          configCode: String(n),
          configValue: o,
          configExpoKey: r == null ? null : r.toString(),
          hasAccessed: !1,
          overriddenConfigValue: null,
        };
      });
    }
    i.parseGroupABProps = e;
  },
  66,
);
