__d(
  "WAWebVoipStackInterfaceWebHelpers",
  ["WALogger", "WAWebABProps", "WAWebVoipABPropConfig"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(t) {
      for (var n of r("WAWebVoipABPropConfig")) {
        var a = n.abProp,
          i = n.type,
          l = n.wasmKey;
        try {
          var s = o("WAWebABProps").getABPropConfigValue(a);
          i === "bool"
            ? t.setABPropBool(l, s)
            : i === "string"
              ? t.setABPropString(l, String(s))
              : t.setABPropInt(l, s);
        } catch (t) {
          o("WALogger").WARN(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "voip: skipping unknown AB prop ",
                "",
              ])),
            a,
          );
        }
      }
    }
    l.setABPropsOnWasm = s;
  },
  98,
);
