__d(
  "WAWebBackendWorkerInitErrorWatcher",
  ["WALogger", "getSafeQplErrorMessage"],
  function (t, n, r, o, a, i, l) {
    var e, s, u;
    function c(e, t) {
      var n = function (n) {
          n instanceof ErrorEvent ? m(n, t) : d(t);
        },
        r = function () {
          p(t);
        };
      return (
        e.addEventListener("error", n),
        e.addEventListener("messageerror", r),
        function () {
          (e.removeEventListener("error", n),
            e.removeEventListener("messageerror", r));
        }
      );
    }
    function d(t) {
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
    function m(e, t) {
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
    function p(e) {
      (e.addPoint("worker_messageerror", {
        string: { worker_error_type: "messageerror" },
      }),
        o("WALogger")
          .ERROR(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "[backend-worker] messageerror during init",
              ])),
          )
          .sendLogs("backend-worker-init-messageerror"));
    }
    l.watchBackendWorkerInitErrors = c;
  },
  98,
);
