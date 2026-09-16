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
      m,
      p,
      _,
      f = null,
      g = new Set(),
      h = null,
      y = !1;
    function C(e) {
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
    function b(t) {
      var n = C(t);
      if (f != null) {
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
      (t.kind === "build_mismatch" && (f = n),
        t.kind === "pinned_load_failed" &&
          (o(
            "WAWebCoreActionsODS",
          ).logCallVoipInitWasmArtifactWorkerGluePinnedLoadFailed(),
          R()),
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
      for (var a of Array.from(g))
        if (r(a.scope)) {
          g.delete(a);
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
      t.kind === "pinned_load_failed" && E(t.workerID);
    }
    function v() {
      return f;
    }
    function S(e) {
      ((h = {
        unpin: function () {
          Reflect.set(e, "pinWorkerGlue", !1);
        },
        terminateWorker: function (n) {
          return k(e.PThread, n);
        },
      }),
        y && h.unpin());
    }
    function R() {
      var e;
      y ||
        ((y = !0),
        o(
          "WAWebCoreActionsODS",
        ).logCallVoipInitWasmArtifactWorkerGlueRuntimeUnpinned(),
        o("WALogger").LOG(
          c ||
            (c = babelHelpers.taggedTemplateLiteralLoose([
              "voip: [pthread-glue] pinned worker glue unavailable; later pthreads load the unpinned bundle",
            ])),
        ),
        (e = h) == null || e.unpin());
    }
    function L() {
      return y;
    }
    function E(e) {
      var t = h;
      if (!(t == null || typeof e != "number")) {
        try {
          if (!t.terminateWorker(e)) return;
        } catch (t) {
          o("WALogger").LOG(
            d ||
              (d = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [pthread-glue] failed to terminate pthread worker ",
                ": ",
                "",
              ])),
            e,
            String(t),
          );
          return;
        }
        (o(
          "WAWebCoreActionsODS",
        ).logCallVoipInitWasmArtifactWorkerGlueStuckWorkerTerminated(),
          o("WALogger").LOG(
            m ||
              (m = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [pthread-glue] terminated pthread worker ",
                " that refused its glue",
              ])),
            e,
          ));
      }
    }
    function k(e, t) {
      var n = e.unusedWorkers.findIndex(function (e) {
        return Reflect.get(e, "workerID") === t;
      });
      return n < 0
        ? !1
        : (e.unusedWorkers[n].close(), e.unusedWorkers.splice(n, 1), !0);
    }
    function I() {
      return f != null;
    }
    function T(e, t) {
      var a = f;
      return a != null
        ? (e.then(r("WAWebNoop"), function (e) {
            o("WALogger").LOG(
              p ||
                (p = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [pthread-glue] suppressed late rejection after latch: ",
                  "",
                ])),
              String(e),
            );
          }),
          (_ || (_ = n("Promise"))).reject(a))
        : new (_ || (_ = n("Promise")))(function (n, r) {
            var o = { reject: r, scope: t };
            (g.add(o),
              e.then(
                function (e) {
                  (g.delete(o), n(e));
                },
                function (e) {
                  (g.delete(o), r(e));
                },
              ));
          });
    }
    function D() {
      ((f = null), g.clear(), (h = null), (y = !1));
    }
    ((l.recordPthreadGlueFailure = b),
      (l.getLatchedPthreadGlueFailure = v),
      (l.attachPthreadGlueFailureModule = S),
      (l.markPinnedWorkerGlueUnpinnedForPage = R),
      (l.isPinnedWorkerGlueUnpinnedForPage = L),
      (l.hasTerminalPthreadGlueFailure = I),
      (l.failFastOnPthreadGlueFailure = T),
      (l.resetPthreadGlueFailureTracker = D));
  },
  98,
);
