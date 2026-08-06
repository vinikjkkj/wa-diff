__d(
  "CometDevToolsErrorConsoleInterop",
  [
    "CometDevToolsErrorConsoleUtil",
    "ErrorPubSub",
    "FBLogger",
    "fetchErrorDetails",
    "promiseDone",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(e) {
      (console.group(e.name), console.groupEnd());
    }
    var u = [],
      c = !0;
    function d(e) {
      return typeof e != "number"
        ? (r("FBLogger")("CDT: Error Console").mustfix(
            "Invalid error id payload type.",
          ),
          null)
        : e < 0 || e > u.length
          ? (r("FBLogger")("CDT: Error Console").mustfix(
              "No error for id: " + e,
            ),
            null)
          : u[e];
    }
    var m = "error_console";
    function p(t) {
      function n(e, n) {
        u.push(e);
        var a = o("CometDevToolsErrorConsoleUtil").toSerializableError(e);
        t.postMessage("on_error", a);
        var i = a.id;
        r("promiseDone")(
          r("fetchErrorDetails")(e)
            .catch(function (e) {
              t.postMessage("error_details_failed", i);
            })
            .then(function (e) {
              t.postMessage("error_details_loaded", { errorDetails: e, id: i });
            }),
        );
      }
      t.onMessage(function (t, o) {
        switch (t) {
          case "init": {
            (c || (e || (e = r("ErrorPubSub"))).removeListener(n),
              (e || (e = r("ErrorPubSub"))).addListener(n),
              (c = !1));
            break;
          }
          case "log_error": {
            var a = d(o);
            if (!a) return;
            s(a);
            break;
          }
          case "show_dialog": {
            var i = d(o);
            if (!i) return;
            break;
          }
        }
      });
    }
    var _ = { namespace: m, onConnection: p };
    l.default = _;
  },
  98,
);
