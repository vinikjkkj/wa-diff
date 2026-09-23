__d(
  "WAWebVoipPthreadGlueFailureTracker",
  [
    "Promise",
    "WALogger",
    "WAWebCoreActionsODS",
    "WAWebNoop",
    "WAWebVoipPthreadWorkerFields",
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
      m,
      p,
      _,
      f,
      g,
      h,
      y,
      C = null,
      b = new Set(),
      v = null,
      S = !1,
      R = new Set(),
      L = 0.1;
    function E(e) {
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
    function k(t) {
      var n = E(t);
      if (C != null) {
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
      (t.kind === "build_mismatch" && (C = n),
        t.kind === "pinned_load_failed"
          ? (o(
              "WAWebCoreActionsODS",
            ).logCallVoipInitWasmArtifactWorkerGluePinnedLoadFailed(),
            N())
          : o("WALogger")
              .ERROR(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [pthread-glue] pthread refused its glue; failing waiters now instead of at timeout",
                  ])),
              )
              .catching(n)
              .sendLogs("voip-pthread-glue-refused"));
      var r = I(t);
      if ((T(t, n), t.kind === "pinned_load_failed")) {
        var a = w(t.workerID);
        D(n, a === "bound" && r ? "bootstrap" : a);
      }
    }
    function I(e) {
      if (e.kind !== "pinned_load_failed" || e.workerID == null) return !1;
      for (var t of b) if (t.ownsThread && t.workerID === e.workerID) return !0;
      return !1;
    }
    function T(e, t) {
      var n = 0;
      for (var r of Array.from(b)) {
        var a = x(e, r);
        if (a != null) {
          (a === "no_worker_id" && n++, b.delete(r));
          try {
            r.reject(t);
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
      n > 0 &&
        (o(
          "WAWebCoreActionsODS",
        ).logCallVoipInitWasmArtifactWorkerGlueBootstrapWaitFailedUnmatched(),
        o("WALogger").WARN(
          c ||
            (c = babelHelpers.taggedTemplateLiteralLoose([
              "voip: [pthread-glue] failed ",
              " bootstrap wait(s) without a worker match (failure worker=",
              ")",
            ])),
          n,
          String(e.workerID),
        ));
    }
    function D(e, t) {
      if (t === "unused" || t === "bootstrap") {
        t === "bootstrap" &&
          o(
            "WAWebCoreActionsODS",
          ).logCallVoipInitWasmArtifactWorkerGluePinnedLoadFailedBootstrap();
        var n =
          t === "bootstrap"
            ? "voip-pthread-glue-refused-recovered-bootstrap"
            : "voip-pthread-glue-refused-recovered";
        if (R.has(n)) {
          o("WALogger").LOG(
            d ||
              (d = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [pthread-glue] ",
                " pthread worker refused its glue; page unpinned: ",
                "",
              ])),
            t,
            e.message,
          );
          return;
        }
        (R.add(n),
          o("WALogger")
            .LOG(
              m ||
                (m = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [pthread-glue] ",
                  " pthread worker refused its glue; page unpinned",
                ])),
              t,
            )
            .catching(e)
            .tags("non-sad")
            .sendLogs(n, {
              sendLogsType: o("WALogger").SendLogsType.INVESTIGATION,
              sampling: L,
            }));
        return;
      }
      (t === "bound"
        ? o(
            "WAWebCoreActionsODS",
          ).logCallVoipInitWasmArtifactWorkerGluePinnedLoadFailedBound()
        : o(
            "WAWebCoreActionsODS",
          ).logCallVoipInitWasmArtifactWorkerGluePinnedLoadFailedUnattributed(),
        o("WALogger")
          .ERROR(
            p ||
              (p = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [pthread-glue] pthread refused its glue (worker ",
                "); failing waiters now instead of at timeout",
              ])),
            t,
          )
          .catching(e)
          .sendLogs("voip-pthread-glue-refused"));
    }
    function x(e, t) {
      if (e.kind === "build_mismatch") return "build_mismatch";
      if (t.scope !== "pthread_bootstrap") return null;
      var n = e.workerID;
      return n == null || t.workerID == null
        ? "no_worker_id"
        : n === t.workerID
          ? "worker_match"
          : null;
    }
    function $() {
      return C;
    }
    function P(e) {
      ((v = {
        unpin: function () {
          Reflect.set(e, "pinWorkerGlue", !1);
        },
        terminateWorker: function (n) {
          return A(e.PThread, n);
        },
      }),
        S && v.unpin());
    }
    function N() {
      var e;
      S ||
        ((S = !0),
        o(
          "WAWebCoreActionsODS",
        ).logCallVoipInitWasmArtifactWorkerGlueRuntimeUnpinned(),
        o("WALogger").LOG(
          _ ||
            (_ = babelHelpers.taggedTemplateLiteralLoose([
              "voip: [pthread-glue] pinned worker glue unavailable; later pthreads load the unpinned bundle",
            ])),
        ),
        (e = v) == null || e.unpin());
    }
    function M() {
      return S;
    }
    function w(e) {
      var t = v;
      if (t == null || typeof e != "number") return "unknown";
      var n;
      try {
        n = t.terminateWorker(e);
      } catch (t) {
        return (
          o("WALogger").LOG(
            f ||
              (f = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [pthread-glue] failed to terminate pthread worker ",
                ": ",
                "",
              ])),
            e,
            String(t),
          ),
          "unknown"
        );
      }
      return (
        n === "unused" &&
          (o(
            "WAWebCoreActionsODS",
          ).logCallVoipInitWasmArtifactWorkerGlueStuckWorkerTerminated(),
          o("WALogger").LOG(
            g ||
              (g = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [pthread-glue] terminated pthread worker ",
                " that refused its glue",
              ])),
            e,
          )),
        n
      );
    }
    function A(e, t) {
      var n = function (n) {
          return o("WAWebVoipPthreadWorkerFields").getPthreadWorkerID(n) === t;
        },
        r = e.unusedWorkers.findIndex(n);
      return r < 0
        ? e.runningWorkers.some(n)
          ? "bound"
          : "unknown"
        : (e.unusedWorkers[r].close(), e.unusedWorkers.splice(r, 1), "unused");
    }
    function F() {
      return C != null;
    }
    function O(e, t, a) {
      var i = C;
      return i != null
        ? (e.then(r("WAWebNoop"), function (e) {
            o("WALogger").LOG(
              h ||
                (h = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [pthread-glue] suppressed late rejection after latch: ",
                  "",
                ])),
              String(e),
            );
          }),
          (y || (y = n("Promise"))).reject(i))
        : new (y || (y = n("Promise")))(function (n, r) {
            var o = {
              reject: r,
              scope: t,
              workerID: a == null ? void 0 : a.workerID,
              ownsThread: (a == null ? void 0 : a.ownsThread) === !0,
            };
            (b.add(o),
              e.then(
                function (e) {
                  (b.delete(o), n(e));
                },
                function (e) {
                  (b.delete(o), r(e));
                },
              ));
          });
    }
    function B() {
      ((C = null), b.clear(), (v = null), (S = !1), R.clear());
    }
    ((l.recordPthreadGlueFailure = k),
      (l.getLatchedPthreadGlueFailure = $),
      (l.attachPthreadGlueFailureModule = P),
      (l.markPinnedWorkerGlueUnpinnedForPage = N),
      (l.isPinnedWorkerGlueUnpinnedForPage = M),
      (l.hasTerminalPthreadGlueFailure = F),
      (l.failFastOnPthreadGlueFailure = O),
      (l.resetPthreadGlueFailureTracker = B));
  },
  98,
);
