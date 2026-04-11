__d(
  "WAWebGroupABProps",
  ["WALogger", "WAWebGroupABPropsCache", "WAWebGroupABPropsConfigs", "gkx"],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u(t, n) {
      var a,
        i = o("WAWebGroupABPropsConfigs").ABPropConfigs[n];
      i == null &&
        o("WALogger").ERROR(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "[group-abprops] config not defined, config name: ",
              ".",
            ])),
          n,
        );
      var l = i[0],
        u = i[1],
        c = i[2],
        d = i[3],
        m = c,
        p = o("WAWebGroupABPropsCache").getGetGroupABPropConfigValueImpl();
      if (p == null)
        return (
          r("gkx")("26258") ||
            o("WALogger").WARN(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[group-abprops] impl must be set before access: ",
                  "",
                ])),
              n,
            ),
          m
        );
      var _ = (a = p(t, n)) != null ? a : m;
      return _;
    }
    l.getGroupABPropConfigValue = u;
  },
  98,
);
