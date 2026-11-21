__d(
  "WAWebVoipStackInterfaceWebHelpers",
  [
    "WALogger",
    "WAWebABProps",
    "WAWebVoipABPropConfig",
    "WAWebVoipMainThreadLockFixes",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c = "web_voip_detach_unstarted_audio_threads",
      d = "log_level",
      m = 1;
    function p(t) {
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
      t.setABPropBool(c, g());
      var u = f();
      u != null && t.setABPropInt(d, u);
    }
    function _() {
      var e = {};
      for (var t of r("WAWebVoipABPropConfig")) {
        var n = t.abProp,
          a = t.type,
          i = t.wasmKey;
        try {
          e[i] = { value: o("WAWebABProps").getABPropConfigValue(n), type: a };
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
      e[c] = { value: g(), type: "bool" };
      var l = f();
      return (l != null && (e[d] = { value: l, type: "int" }), e);
    }
    function f() {
      return null;
    }
    function g() {
      try {
        return (
          o("WAWebVoipMainThreadLockFixes").readMainThreadLockFix() &&
          !r("justknobx")._("1644")
        );
      } catch (e) {
        return (
          o("WALogger").WARN(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "voip: main thread lock fix gate unavailable, audio threads join on stop: ",
                "",
              ])),
            e,
          ),
          !1
        );
      }
    }
    ((l.setABPropsOnWasm = p), (l.buildABPropsBag = _));
  },
  98,
);
