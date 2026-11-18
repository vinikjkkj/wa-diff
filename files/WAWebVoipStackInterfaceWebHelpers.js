__d(
  "WAWebVoipStackInterfaceWebHelpers",
  [
    "WALogger",
    "WAWebABProps",
    "WAWebVoipABPropConfig",
    "WAWebVoipChromiumDesktopBrowser",
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
    function p() {
      var e = o("WAWebVoipChromiumDesktopBrowser").isChromiumDesktopBrowser();
      return r("WAWebVoipABPropConfig").filter(function (t) {
        var n = t.chromiumDesktopOnly;
        return n !== !0 || e;
      });
    }
    function _(t) {
      for (var n of p()) {
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
      t.setABPropBool(c, h());
      var s = g();
      s != null && t.setABPropInt(d, s);
    }
    function f() {
      var e = {};
      for (var t of p()) {
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
      e[c] = { value: h(), type: "bool" };
      var i = g();
      return (i != null && (e[d] = { value: i, type: "int" }), e);
    }
    function g() {
      return null;
    }
    function h() {
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
    ((l.setABPropsOnWasm = _), (l.buildABPropsBag = f));
  },
  98,
);
