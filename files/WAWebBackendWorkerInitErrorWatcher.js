__d(
  "WAWebBackendWorkerInitErrorWatcher",
  ["Promise", "WALogger", "WAWebNoop", "err", "getSafeQplErrorMessage"],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = "backend-worker-init-failed";
    function d(e, t) {
      var o = r("WAWebNoop"),
        a = new (u || (u = n("Promise")))(function (e, t) {
          o = t;
        }),
        i = function (n) {
          n instanceof ErrorEvent
            ? (p(n, t), o(r("err")(c + ": uncaught")))
            : (m(t), o(r("err")(c + ": load")));
        };
      return (
        e.addEventListener("error", i),
        {
          initFailed: a,
          dispose: function () {
            e.removeEventListener("error", i);
          },
        }
      );
    }
    function m(t) {
      (t.addPoint("worker_load_error", {
        string: { worker_error_type: "load" },
      }),
        o("WALogger")
          .ERROR(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[backend-worker] worker script failed to load during init",
              ])),
          )
          .sendLogs("backend-worker-init-load-error"));
    }
    function p(e, t) {
      var n;
      (t.addPoint("worker_uncaught_error", {
        string: {
          worker_error_message: o(
            "getSafeQplErrorMessage",
          ).getSafeQPLErrorMessage((n = e.error) != null ? n : e.message),
          worker_error_type: "uncaught",
        },
      }),
        o("WALogger")
          .WARN(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "[backend-worker] uncaught error during init: ",
                " at ",
                ":",
                ":",
                "",
              ])),
            e.message,
            e.filename,
            e.lineno,
            e.colno,
          )
          .sendLogs("backend-worker-init-uncaught-error"));
    }
    ((l.BACKEND_WORKER_INIT_FAILED = c), (l.watchBackendWorkerInitErrors = d));
  },
  98,
);
