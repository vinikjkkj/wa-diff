__d(
  "CometDevToolsMemoryInterop",
  ["FBLogger", "LiveObjectMonitorTable"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = new Set(),
      s = "memory";
    function u(t) {
      (e.add(t),
        p(),
        t.onDisconnected(function () {
          e.delete(t);
        }),
        t.onMessage(_));
    }
    var c = function (t) {
        return { type: "report", data: t };
      },
      d = function (t) {
        return { type: "probe", data: { isRunning: t } };
      };
    function m() {
      var t = r("LiveObjectMonitorTable").report();
      e.forEach(function (e) {
        e.postMessage(s, c({ report: t }));
      });
    }
    function p() {
      e.forEach(function (e) {
        e.postMessage(s, d(r("LiveObjectMonitorTable").isStarted));
      });
    }
    function _(e, t) {
      if (e === s) {
        if (typeof t != "object" || t == null || t.type == null) {
          r("FBLogger")("Comet Dev Tools: Memory").mustfix(
            "Invalid payload when performing Memory Dev Tool Action",
          );
          return;
        }
        var n = t.data,
          o = t.type;
        switch (o) {
          case "init": {
            p();
            return;
          }
          case "start": {
            (r("LiveObjectMonitorTable").start(), p());
            return;
          }
          case "stop": {
            (r("LiveObjectMonitorTable").stop(), p());
            return;
          }
          case "request_report": {
            m();
            return;
          }
          case "probe":
            return;
          case "trace_request": {
            var a = n == null ? void 0 : n.id;
            if (a == null) return;
            var i = r("LiveObjectMonitorTable").refByID(a);
            i != null && r("LiveObjectMonitorTable").stackForRef(i);
            return;
          }
          case "log_string": {
            var l = n == null ? void 0 : n.stringToLog;
            if (l == null) return;
            break;
          }
          case "log_object": {
            var u = n == null ? void 0 : n.id;
            if (u == null) return;
            var c = r("LiveObjectMonitorTable").refByID(u);
            c != null && c.deref();
            return;
          }
          default:
            r("FBLogger")("Comet Dev Tools: Memory").mustfix(
              "Invalid payload action when performing Memory Dev Tool Action",
            );
        }
      }
    }
    ((l.namespace = s), (l.onConnection = u));
  },
  98,
);
