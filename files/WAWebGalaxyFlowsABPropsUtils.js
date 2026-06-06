__d(
  "WAWebGalaxyFlowsABPropsUtils",
  [
    "WAFlowsWebNativeBridgeClientABPropsContext.react",
    "WALogger",
    "WAWebABProps",
    "WAWebABPropsCache",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u(t, n) {
      var r;
      try {
        var a = Number(t),
          i = o("WAWebABPropsCache").getABPropConfigNameFromCode(a);
        r =
          i != null
            ? o("WAWebABProps").getABPropConfigValue(i)
            : n.defaultValue;
      } catch (t) {
        (o("WALogger").ERROR(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "[WAWebGalaxyFlowsABPropsUtils] Error getting value: ",
              "",
            ])),
          t,
        ),
          (r = void 0));
      }
      return { type: n.type, value: r !== void 0 ? String(r) : n.defaultValue };
    }
    async function c(e) {
      if (e == null || typeof e != "object")
        return (
          o("WALogger").ERROR(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "[WAWebGalaxyFlowsABPropsUtils] Invalid payload provided: ",
                "",
              ])),
            e,
          ),
          o("WAFlowsWebNativeBridgeClientABPropsContext.react")
            .abPropsFallBackDataForWeb
        );
      var t = Object.entries(e);
      if (t.length === 0) return {};
      var n = {};
      for (var r of t) {
        var a = r[0],
          i = r[1];
        n[a] = u(a, i);
      }
      return n;
    }
    l.getActualABPropData = c;
  },
  98,
);
