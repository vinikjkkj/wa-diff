__d(
  "WAWebVoipStackInterfaceWebHelpers",
  [
    "WALogger",
    "WAWebABProps",
    "WAWebVoipABPropConfig",
    "WAWebVoipChromiumDesktopBrowser",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s;
    function u() {
      var e = o("WAWebVoipChromiumDesktopBrowser").isChromiumDesktopBrowser();
      return r("WAWebVoipABPropConfig").filter(function (t) {
        var n = t.chromiumDesktopOnly;
        return n !== !0 || e;
      });
    }
    function c(t) {
      for (var n of u()) {
        var r = n.abProp,
          a = n.type,
          i = n.wasmKey;
        try {
          var l = o("WAWebABProps").getABPropConfigValue(r);
          a === "bool"
            ? t.setABPropBool(i, l)
            : a === "string"
              ? t.setABPropString(i, String(l))
              : t.setABPropInt(i, l);
        } catch (t) {
          o("WALogger").WARN(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "voip: skipping unknown AB prop ",
                "",
              ])),
            r,
          );
        }
      }
    }
    function d() {
      var e = {};
      for (var t of u()) {
        var n = t.abProp,
          r = t.type,
          a = t.wasmKey;
        try {
          e[a] = { value: o("WAWebABProps").getABPropConfigValue(n), type: r };
        } catch (e) {
          o("WALogger").WARN(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "voip: skipping unknown AB prop ",
                "",
              ])),
            n,
          );
        }
      }
      return e;
    }
    ((l.getForwardedVoipABProps = u),
      (l.setABPropsOnWasm = c),
      (l.buildABPropsBag = d));
  },
  98,
);
