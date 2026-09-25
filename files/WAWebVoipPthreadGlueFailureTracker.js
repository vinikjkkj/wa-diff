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
      L = new Set(),
      E = 0.1;
    function k(e) {
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
    function I(t) {
      var n = k(t);
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
          ? (t.cause !== "timed_out" &&
              o(
                "WAWebCoreActionsODS",
              ).logCallVoipInitWasmArtifactWorkerGluePinnedLoadFailed(),
            w(),
            F(t.workerID))
          : o("WALogger")
              .ERROR(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [pthread-glue] pthread refused its glue; failing waiters now instead of at timeout",
                  ])),
              )
              .catching(n)
              .sendLogs("voip-pthread-glue-refused"));
      var r = T(t);
      if ((D(t, n), t.kind === "pinned_load_failed")) {
        var a = B(t.workerID);
        x(n, a === "bound" && r ? "bootstrap" : a, t.cause === "timed_out");
      }
    }
    function T(e) {
      if (e.kind !== "pinned_load_failed" || e.workerID == null) return !1;
      for (var t of b) if (t.ownsThread && t.workerID === e.workerID) return !0;
      return !1;
    }
    function D(e, t) {
      var n = 0;
      for (var r of Array.from(b)) {
        var a = $(e, r);
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
    function x(e, t, n) {
      if (t === "unused" || t === "bootstrap") {
        t === "bootstrap" &&
          o(
            "WAWebCoreActionsODS",
          ).logCallVoipInitWasmArtifactWorkerGluePinnedLoadFailedBootstrap();
        var r = P(t, n),
          a = n ? "did not load its glue in time" : "refused its glue";
        if (R.has(r)) {
          o("WALogger").LOG(
            d ||
              (d = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [pthread-glue] ",
                " pthread worker ",
                "; page unpinned: ",
                "",
              ])),
            t,
            a,
            e.message,
          );
          return;
        }
        (R.add(r),
          o("WALogger")
            .LOG(
              m ||
                (m = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [pthread-glue] ",
                  " pthread worker ",
                  "; page unpinned",
                ])),
              t,
              a,
            )
            .catching(e)
            .tags("non-sad")
            .sendLogs(r, {
              sendLogsType: o("WALogger").SendLogsType.INVESTIGATION,
              sampling: E,
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
    function $(e, t) {
      if (e.kind === "build_mismatch") return "build_mismatch";
      if (t.scope !== "pthread_bootstrap") return null;
      var n = e.workerID;
      return n == null || t.workerID == null
        ? "no_worker_id"
        : n === t.workerID
          ? "worker_match"
          : null;
    }
    function P(e, t) {
      var n =
        e === "bootstrap"
          ? "voip-pthread-glue-refused-recovered-bootstrap"
          : "voip-pthread-glue-refused-recovered";
      return t ? n + "-timeout" : n;
    }
    function N() {
      return C;
    }
    function M(e) {
      ((v = {
        unpin: function () {
          Reflect.set(e, "pinWorkerGlue", !1);
        },
        terminateWorker: function (n) {
          return W(e.PThread, n);
        },
      }),
        S && v.unpin());
    }
    function w() {
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
    function A() {
      return S;
    }
    function F(e) {
      e != null && L.add(e);
    }
    function O(e) {
      return e != null && L.has(e);
    }
    function B(e) {
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
    function W(e, t) {
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
    function q() {
      return C != null;
    }
    function U(e, t, a) {
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
    function V() {
      ((C = null), b.clear(), (v = null), (S = !1), R.clear(), L.clear());
    }
    ((l.recordPthreadGlueFailure = I),
      (l.getLatchedPthreadGlueFailure = N),
      (l.attachPthreadGlueFailureModule = M),
      (l.markPinnedWorkerGlueUnpinnedForPage = w),
      (l.isPinnedWorkerGlueUnpinnedForPage = A),
      (l.hasPinnedGlueFailedForWorker = O),
      (l.hasTerminalPthreadGlueFailure = q),
      (l.failFastOnPthreadGlueFailure = U),
      (l.resetPthreadGlueFailureTracker = V));
  },
  98,
);
