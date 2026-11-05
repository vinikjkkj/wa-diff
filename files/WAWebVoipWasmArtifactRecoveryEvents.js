__d(
  "WAWebVoipWasmArtifactRecoveryEvents",
  ["WALogger", "getErrorSafe"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = new Set(),
      u = new Set();
    function c(e) {
      return _(s, e);
    }
    function d() {
      f(s);
    }
    function m(e) {
      return _(u, e);
    }
    function p() {
      f(u);
    }
    function _(e, t) {
      return (
        e.add(t),
        function () {
          e.delete(t);
        }
      );
    }
    function f(t) {
      for (var n of t)
        try {
          n();
        } catch (t) {
          o("WALogger")
            .WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: WASM artifact recovery listener failed",
                ])),
            )
            .catching(r("getErrorSafe")(t));
        }
    }
    ((l.onVoipWasmArtifactRecovered = c),
      (l.emitVoipWasmArtifactRecovered = d),
      (l.onVoipWasmReloadRequested = m),
      (l.requestVoipWasmReload = p));
  },
  98,
);
