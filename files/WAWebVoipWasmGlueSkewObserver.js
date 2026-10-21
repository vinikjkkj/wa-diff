__d(
  "WAWebVoipWasmGlueSkewObserver",
  ["WALogger", "WAWebCoreActionsODS", "WAWebVoipQplHelpers", "getErrorSafe"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d = !1,
      m = !1,
      p = !1,
      _ = !1,
      f = 0,
      g = 0,
      h = 0,
      y = 0,
      C = 0;
    function b(e) {
      try {
        S(e);
      } catch (e) {
        v(e);
      }
    }
    function v(t) {
      _ ||
        ((_ = !0),
        o("WALogger")
          .ERROR(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "voip: worker glue skew report failed",
              ])),
          )
          .catching(r("getErrorSafe")(t))
          .sendLogs("voip-worker-glue-skew-report-failed"));
    }
    function S(e) {
      d ||
        ((d = !0),
        o(
          "WAWebCoreActionsODS",
        ).logCallVoipInitWasmArtifactWorkerGlueSkewDetected(),
        o("WALogger").LOG(
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose([
              "voip: worker glue build skew observed source=",
              " expected=",
              " actual=",
              "",
            ])),
          e.source,
          e.expectedBuildSha,
          String(e.actualBuildSha),
        ));
      e: {
        var t = E(e.pinnedImport);
        if (t === "none") {
          f++;
          break e;
        }
        if (t === "started") {
          (f++, g++);
          break e;
        }
        if (t === "loaded") {
          R(e);
          break e;
        }
        if (t === "failed") {
          L(e);
          break e;
        }
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            t,
        );
      }
      o("WAWebVoipQplHelpers").voipInitQplAnnotateWorkerGlueSkew({
        pinnedImportFailed: y,
        pinnedImportLoaded: h,
        pinnedImportLoadedMaxMs: C,
        pinnedImportStarted: g,
        skewedWorkers: f,
      });
    }
    function R(e) {
      var t = k(e.pinnedImportMs);
      (h++,
        (C = Math.max(C, t)),
        !m &&
          ((m = !0),
          o(
            "WAWebCoreActionsODS",
          ).logCallVoipInitWasmArtifactWorkerGlueSkewPinnedImportLoaded(),
          o("WALogger").LOG(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "voip: worker glue pinned import loaded attempts=",
                " ms=",
                "",
              ])),
            k(e.pinnedImportAttempts),
            t,
          )));
    }
    function L(e) {
      (y++,
        !p &&
          ((p = !0),
          o(
            "WAWebCoreActionsODS",
          ).logCallVoipInitWasmArtifactWorkerGlueSkewPinnedImportFailed(),
          o("WALogger").LOG(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "voip: worker glue pinned import failed stage=",
                " attempts=",
                " ms=",
                "",
              ])),
            String(e.pinnedImportFailedStage),
            k(e.pinnedImportAttempts),
            k(e.pinnedImportMs),
          )));
    }
    function E(e) {
      return e === "started"
        ? "started"
        : e === "loaded"
          ? "loaded"
          : e === "failed"
            ? "failed"
            : "none";
    }
    function k(e) {
      return typeof e == "number" && Number.isFinite(e) && e > 0
        ? Math.round(e)
        : 0;
    }
    l.recordWasmGlueBuildSkewObserved = b;
  },
  98,
);
