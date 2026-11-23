__d(
  "WAWebCpuPressureStressWorker",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = !1,
      l = 0,
      s = { 0: 0, 1: 5e5, 2: 2e6, 3: 5e6, 4: 1e7 };
    function u(e) {
      for (var t = 1, n = 0; n < e; n++)
        ((t += Math.sqrt(n + t)),
          (t = Math.sin(t) * Math.cos(t) + 1.5),
          (t = Math.pow(Math.abs(t), 1.01)),
          (t = Math.atan2(t, n + 1) + Math.PI),
          t > 1e10 && (t = 1));
      return t;
    }
    function c() {
      for (var t = 0, n = 10; e && l > 0; ) {
        var r,
          o = (r = s[l]) != null ? r : 0,
          a = u(o);
        (t++,
          t >= n &&
            (globalThis.postMessage({
              type: "heartbeat",
              iterations: o,
              result: a,
            }),
            (t = 0)));
      }
    }
    function d(t) {
      var n,
        r = t.data,
        o = (n = r == null ? void 0 : r.message) != null ? n : r;
      o.type === "start"
        ? ((l = o.level),
          !e &&
            l > 0 &&
            ((e = !0),
            globalThis.postMessage({ type: "started", level: l }),
            c()))
        : o.type === "stop" &&
          ((e = !1), (l = 0), globalThis.postMessage({ type: "stopped" }));
    }
    function m() {
      self.onmessage = d;
    }
    i.default = m;
  },
  66,
);
