__d(
  "SharedWorkerLoggingUtils",
  [
    "ErrorSerializer",
    "FBLogger",
    "ODS",
    "QPLUserFlow",
    "getErrorSafe",
    "pageID",
    "qpl",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(t, n, r, a) {
      ((e || (e = o("ODS"))).bumpEntityKey(
        6653,
        "shared_worker_infra",
        "worker_self_termination." + n + "." + t,
      ),
        u(t, n, r, a, !0));
    }
    function u(e, t, n, o, a) {
      a === void 0 && (a = !1);
      var i = r("qpl")._(931600201, "1438");
      (r("QPLUserFlow").start(i),
        r("QPLUserFlow").endSuccess(i, {
          annotations: {
            string: {
              workerName: e,
              workerID: o,
              reason: n,
              location: t,
              pageID: r("pageID"),
            },
            bool: { isSelfTermination: a },
          },
        }));
    }
    function c(e, t, n, r, o, a) {
      (e == null || e.markEventEnd("execute_worker"),
        e == null ||
          e.addAnnotations({
            int: {
              runningWorkerRev: o,
              runningWorkerSpinTime: t,
              runningWorkerSpinMode: a,
            },
            string: { executeWorkerErr: n },
            bool: { isFirstInit: r },
          }));
    }
    function d(e, t, n) {
      var o,
        a,
        i,
        l,
        s,
        u,
        c = r("getErrorSafe")(
          (o = t instanceof ErrorEvent && (t == null ? void 0 : t.error)) !=
            null
            ? o
            : t,
        );
      (r("FBLogger")("worker")
        .catching(c)
        .warn(
          "Worker %s onerror: %s type, %s message",
          n,
          String(t.type),
          r("ErrorSerializer").toReadableMessage(c),
        ),
        e == null ||
          e.addAnnotations({
            string_array: {
              onErrorHandler: [
                (a = JSON.stringify(
                  (i = c == null ? void 0 : c.message) != null
                    ? i
                    : t == null
                      ? void 0
                      : t.message,
                )) != null
                  ? a
                  : "undefined",
                String(
                  (l = t == null ? void 0 : t.lineno) != null
                    ? l
                    : c == null
                      ? void 0
                      : c.lineno,
                ),
                String(
                  (s = t == null ? void 0 : t.colno) != null
                    ? s
                    : c == null
                      ? void 0
                      : c.colno,
                ),
                String(
                  (u = t == null ? void 0 : t.filename) != null
                    ? u
                    : c == null
                      ? void 0
                      : c.filename,
                ),
              ],
            },
          }));
    }
    ((l.logSelfTermination = s),
      (l.logShutdown = u),
      (l.logExecuteAck = c),
      (l.logSharedWorkerError = d));
  },
  98,
);
