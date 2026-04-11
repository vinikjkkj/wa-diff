__d(
  "CurrentWebWorker",
  ["invariant", "WorkerBootstrap", "emptyFunction", "memoize"],
  function (t, n, r, o, a, i, l) {
    t.importScripts || l(0, 2398);
    var e = null,
      s = [],
      u = null,
      c = [];
    function d(t) {
      var r = t.data;
      switch (r.type) {
        case "message":
          e !== null ? e(r.message) : s.push(d.bind(this, t));
          break;
        case "port":
          if (u !== null) {
            var o = t.ports[0];
            (u(o, t.data.message), o.start());
          } else c.push(d.bind(this, t));
          break;
        case "ping":
          (r.args.push(Date.now()),
            r.args.unshift("pong"),
            m.apply(null, r.args));
          break;
        case "defineModules":
          var a = r.args[0];
          n("WorkerBootstrap").initDynamicModules(a);
          break;
      }
    }
    function m(e) {
      for (
        var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
        r < t;
        r++
      )
        n[r - 1] = arguments[r];
      self.postMessage({ type: e, args: n });
    }
    (!t.onmessage || l(0, 2399),
      t.console ||
        ((t.console = {}),
        ["log", "error", "info", "debug", "warn"].forEach(function (e) {
          t.console[e] = function () {
            for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
              n[r] = arguments[r];
            (n.unshift("console", e), m.apply(this, n));
          };
        })),
      t.addEventListener("message", d));
    var p = (a.exports = {
      postMessage: function (t, n) {
        var e = { type: "message", message: t };
        return (n ? self.postMessage(e, n) : self.postMessage(e), p);
      },
      setChannelHandler: function (t) {
        t = t || n("emptyFunction");
        var e = u === null;
        return (
          (u = t),
          e &&
            (c.forEach(function (e) {
              return e();
            }),
            (c = [])),
          p
        );
      },
      setMessageHandler: function (r) {
        r = r || n("emptyFunction");
        var t = e === null;
        return (
          (e = r),
          t &&
            (s.forEach(function (e) {
              return e();
            }),
            (s = [])),
          p
        );
      },
      terminate: function () {
        (m("terminate"), self.close());
      },
    });
    p.areTransferablesSupported = n("memoize")(function () {
      var e,
        t = new ArrayBuffer(0);
      try {
        (self.postMessage({ type: "ignore", buffer: t }, [t]), (e = !0));
      } catch (t) {
        e = !1;
      }
      return e;
    });
  },
  null,
);
