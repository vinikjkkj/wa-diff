__d(
  "WAWebVoipWasmArtifactRecoveryEvents",
  ["WALogger", "getErrorSafe"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = new Set();
    function u(e) {
      return (
        s.add(e),
        function () {
          s.delete(e);
        }
      );
    }
    function c() {
      for (var t of s)
        try {
          t();
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
    ((l.onVoipWasmArtifactRecovered = u),
      (l.emitVoipWasmArtifactRecovered = c));
  },
  98,
);
