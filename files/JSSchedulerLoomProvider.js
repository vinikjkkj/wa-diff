__d(
  "JSSchedulerLoomProvider",
  ["FBLogger", "JSScheduler", "performanceNavigationStart"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = r("performanceNavigationStart")(),
      u = 1,
      c = 2,
      d = 3,
      m = 4,
      p = 5,
      _ = 6,
      f = 7,
      g = 8,
      h = !0,
      y = (function () {
        function t(t) {
          t.sequenceNumber === 1
            ? (this.$1 = t)
            : h ||
              ((e || (e = o("JSScheduler"))).startEventProfiling(),
              (h = !0),
              (this.$1 = t));
        }
        var n = t.prototype;
        return (
          (n.loomTraceWillEnd = function () {
            var t = this.$1;
            if (t != null) {
              h = !1;
              var n = (e || (e = o("JSScheduler"))).stopEventProfiling();
              if (n != null) {
                for (
                  var a = new Int32Array(n),
                    i = new Map(),
                    l = new Map(),
                    y = 0;
                  y <= 5;
                  y++
                ) {
                  var C = 0;
                  (l.set(y, C),
                    t.buffer.addEvent(
                      { type: "JS_SCHEDULER_QUEUE", priority: y, queueSize: C },
                      t.startTime,
                    ));
                }
                for (var b = 0; b < a.length; ) {
                  var v = a[b],
                    S = s + a[b + 1] / 1e3;
                  if (v === 0) break;
                  if (v > 8) {
                    r("FBLogger")("web_loom").warn(
                      "Unknown JS Scheduler profiling event: " + v,
                    );
                    break;
                  }
                  var R = void 0;
                  switch (v) {
                    case u: {
                      var L = a[b + 2],
                        E = a[b + 3];
                      i.set(L, E);
                      var k = l.get(E);
                      (k != null &&
                        ((k += 1),
                        l.set(E, k),
                        (R = {
                          type: "JS_SCHEDULER_QUEUE",
                          priority: E,
                          queueSize: k,
                        })),
                        (b += 4));
                      break;
                    }
                    case c:
                    case d:
                    case m: {
                      var I = a[b + 2],
                        T = i.get(I);
                      if (T != null) {
                        var D = l.get(T);
                        (D != null &&
                          ((D -= 1),
                          l.set(T, D),
                          (R = {
                            type: "JS_SCHEDULER_QUEUE",
                            priority: T,
                            queueSize: D,
                          })),
                          i.delete(I));
                      }
                      b += 3;
                      break;
                    }
                    case f: {
                      ((R = {
                        type: "JS_SCHEDULER_QUEUE",
                        priority: 0,
                        queueSize: 1,
                      }),
                        (b += 3));
                      break;
                    }
                    case g: {
                      ((R = {
                        type: "JS_SCHEDULER_QUEUE",
                        priority: 0,
                        queueSize: 0,
                      }),
                        (b += 3));
                      break;
                    }
                    case p:
                    case _: {
                      b += 4;
                      break;
                    }
                  }
                  R && t.buffer.addEvent(R, S);
                }
                this.$1 = null;
              }
            }
          }),
          t
        );
      })(),
      C = {
        loomProviderId: "JSScheduler",
        isSupported: function () {
          return !0;
        },
        getInstance: function (t) {
          return new y(t);
        },
      };
    l.default = C;
  },
  98,
);
