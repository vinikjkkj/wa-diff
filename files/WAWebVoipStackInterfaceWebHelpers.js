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
    var e;
    function s() {
      var e = o("WAWebVoipChromiumDesktopBrowser").isChromiumDesktopBrowser();
      return r("WAWebVoipABPropConfig").filter(function (t) {
        var n = t.chromiumDesktopOnly;
        return n !== !0 || e;
      });
    }
    function u(t) {
      for (var n of s()) {
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
    ((l.getForwardedVoipABProps = s), (l.setABPropsOnWasm = u));
  },
  98,
);
