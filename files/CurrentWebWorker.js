__d(
  "CurrentWebWorker",
  ["invariant", "WorkerBootstrap", "emptyFunction", "memoize"],
  function (t, n, r, o, a, i, l, s) {
    t.importScripts || s(0, 2398);
    var e = null,
      u = [],
      c = null,
      d = [];
    function m(t) {
      var n = t.data;
      switch (n.type) {
        case "message":
          e !== null ? e(n.message) : u.push(m.bind(this, t));
          break;
        case "port":
          if (c !== null) {
            var r = t.ports[0];
            (c(r, t.data.message), r.start());
          } else d.push(m.bind(this, t));
          break;
        case "ping":
          (n.args.push(Date.now()),
            n.args.unshift("pong"),
            p.apply(null, n.args));
          break;
        case "defineModules":
          var a = n.args[0];
          o("WorkerBootstrap").initDynamicModules(a);
          break;
      }
    }
    function p(e) {
      for (
        var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
        r < t;
        r++
      )
        n[r - 1] = arguments[r];
      self.postMessage({ type: e, args: n });
    }
    (!t.onmessage || s(0, 2399),
      t.console ||
        ((t.console = {}),
        ["log", "error", "info", "debug", "warn"].forEach(function (e) {
          t.console[e] = function () {
            for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
              n[r] = arguments[r];
            (n.unshift("console", e), p.apply(this, n));
          };
        })),
      t.addEventListener("message", m));
    var _ = r("memoize")(function () {
        var e,
          t = new ArrayBuffer(0);
        try {
          (self.postMessage({ type: "ignore", buffer: t }, [t]), (e = !0));
        } catch (t) {
          e = !1;
        }
        return e;
      }),
      f = (i.exports = {
        postMessage: function (t, n) {
          var e = { type: "message", message: t };
          return (n ? self.postMessage(e, n) : self.postMessage(e), f);
        },
        setChannelHandler: function (t) {
          var e = t || r("emptyFunction"),
            n = c === null;
          return (
            (c = e),
            n &&
              (d.forEach(function (e) {
                return e();
              }),
              (d = [])),
            f
          );
        },
        setMessageHandler: function (n) {
          var t = n || r("emptyFunction"),
            o = e === null;
          return (
            (e = t),
            o &&
              (u.forEach(function (e) {
                return e();
              }),
              (u = [])),
            f
          );
        },
        terminate: function () {
          (p("terminate"), self.close());
        },
        areTransferablesSupported: _,
      });
  },
  34,
);
