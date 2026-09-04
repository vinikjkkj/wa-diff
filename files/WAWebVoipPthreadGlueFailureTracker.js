__d(
  "WAWebVoipPthreadGlueFailureTracker",
  [
    "Promise",
    "WALogger",
    "WAWebCoreActionsODS",
    "WAWebNoop",
    "WAWebVoipWasmArtifactSkewErrors",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d,
      m = null,
      p = new Set();
    function _(e) {
      return e.kind === "build_mismatch"
        ? r("err")(
            o("WAWebVoipWasmArtifactSkewErrors")
              .WORKER_GLUE_BUILD_MISMATCH_TOKEN +
              " source=" +
              e.source +
              " expected=" +
              e.expectedBuildSha +
              " actual=" +
              String(e.actualBuildSha),
          )
        : r("err")(
            o("WAWebVoipWasmArtifactSkewErrors")
              .PINNED_WORKER_GLUE_LOAD_FAILED_TOKEN +
              ": " +
              e.error,
          );
    }
    function f(t) {
      var n = _(t);
      if (m != null) {
        o("WALogger").LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "voip: [pthread-glue] repeated failure after latch: ",
              "",
            ])),
          n.message,
        );
        return;
      }
      (t.kind === "build_mismatch" && (m = n),
        t.kind === "pinned_load_failed" &&
          o(
            "WAWebCoreActionsODS",
          ).logCallVoipInitWasmArtifactWorkerGluePinnedLoadFailed(),
        o("WALogger")
          .ERROR(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [pthread-glue] pthread refused its glue; failing waiters now instead of at timeout",
              ])),
          )
          .catching(n)
          .sendLogs("voip-pthread-glue-refused"));
      var r = function (n) {
        return t.kind === "build_mismatch" || n === "pthread_bootstrap";
      };
      for (var a of Array.from(p))
        if (r(a.scope)) {
          p.delete(a);
          try {
            a.reject(n);
          } catch (e) {
            o("WALogger").LOG(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [pthread-glue] listener threw: ",
                  "",
                ])),
              String(e),
            );
          }
        }
    }
    function g() {
      return m;
    }
    function h() {
      return m != null;
    }
    function y(e, t) {
      var a = m;
      return a != null
        ? (e.then(r("WAWebNoop"), function (e) {
            o("WALogger").LOG(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [pthread-glue] suppressed late rejection after latch: ",
                  "",
                ])),
              String(e),
            );
          }),
          (d || (d = n("Promise"))).reject(a))
        : new (d || (d = n("Promise")))(function (n, r) {
            var o = { reject: r, scope: t };
            (p.add(o),
              e.then(
                function (e) {
                  (p.delete(o), n(e));
                },
                function (e) {
                  (p.delete(o), r(e));
                },
              ));
          });
    }
    function C() {
      ((m = null), p.clear());
    }
    ((l.recordPthreadGlueFailure = f),
      (l.getLatchedPthreadGlueFailure = g),
      (l.hasTerminalPthreadGlueFailure = h),
      (l.failFastOnPthreadGlueFailure = y),
      (l.resetPthreadGlueFailureTracker = C));
  },
  98,
);
