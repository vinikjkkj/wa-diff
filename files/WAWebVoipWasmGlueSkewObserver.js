__d(
  "WAWebVoipWasmGlueSkewObserver",
  ["WALogger", "WAWebCoreActionsODS"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = !1;
    function u(t) {
      s ||
        ((s = !0),
        o(
          "WAWebCoreActionsODS",
        ).logCallVoipInitWasmArtifactWorkerGlueSkewDetected(),
        o("WALogger").LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "voip: worker glue build skew observed source=",
              " expected=",
              " actual=",
              "",
            ])),
          t.source,
          t.expectedBuildSha,
          String(t.actualBuildSha),
        ));
    }
    function c() {
      s = !1;
    }
    ((l.recordWasmGlueBuildSkewObserved = u),
      (l.resetWasmGlueBuildSkewObserverForTests = c));
  },
  98,
);
