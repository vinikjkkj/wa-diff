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
      c = "web_voip_detach_unstarted_audio_threads";
    function d() {
      var e = o("WAWebVoipChromiumDesktopBrowser").isChromiumDesktopBrowser();
      return r("WAWebVoipABPropConfig").filter(function (t) {
        var n = t.chromiumDesktopOnly;
        return n !== !0 || e;
      });
    }
    function m(t) {
      for (var n of d()) {
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
      t.setABPropBool(c, _());
    }
    function p() {
      var e = {};
      for (var t of d()) {
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
      return ((e[c] = { value: _(), type: "bool" }), e);
    }
    function _() {
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
    ((l.getForwardedVoipABProps = d),
      (l.setABPropsOnWasm = m),
      (l.buildABPropsBag = p));
  },
  98,
);
