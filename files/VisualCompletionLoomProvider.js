__d(
  "VisualCompletionLoomProvider",
  ["vc-tracker"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function () {
        function e(e, t, n) {
          var o = this;
          ((this.$3 = function (e) {
            var t = o.$1;
            if (
              t != null &&
              e != null &&
              e.startTime + o.$2.appStart >= t.startTime
            ) {
              var n = new Map();
              (e.elements.forEach(function (e) {
                var t;
                n.set(
                  e.timestamp,
                  ((t = n.get(e.timestamp)) != null ? t : 0) + e.pixels,
                );
              }),
                Array.from(n.entries())
                  .sort(function (e, t) {
                    return e[0] - t[0];
                  })
                  .reduce(function (n, r) {
                    var a = r[0],
                      i = r[1],
                      l = n + i;
                    return (
                      t.buffer.addEvent(
                        {
                          progress: l / e.paintedPixels,
                          type: "VISUAL_COMPLETION_PROGRESS",
                        },
                        a + o.$2.appStart,
                      ),
                      l
                    );
                  }, 0),
                o.$4(
                  t,
                  e,
                  e.elements.filter(function (e) {
                    return e.parent == null;
                  }),
                  0,
                ));
            }
          }),
            (this.$1 = e),
            r("vc-tracker").VisualCompletionTraceObserver.subscribe(this.$3),
            (this.$2 = n));
        }
        e.isSupported = function () {
          return !0;
        };
        var t = e.prototype;
        return (
          (t.$4 = function (t, n, r, o, a) {
            var e = this;
            (a === void 0 && (a = null),
              r
                .slice()
                .sort(function (e, t) {
                  return e.timestamp - t.timestamp;
                })
                .forEach(function (r) {
                  var i = r.rectangle,
                    l =
                      r.type === "component" || a == null
                        ? r.timestamp
                        : Math.max(r.timestamp, a.timestamp);
                  (t.buffer.addEvent(
                    {
                      depth: o,
                      elementType: r.type,
                      height: Math.floor(i.bottom - i.top),
                      mutationType: r.mutationType,
                      lateMutationType: r.hadLateMutationUnexpected
                        ? "unexpected"
                        : r.hadLateMutationExpected
                          ? "expected"
                          : void 0,
                      type: "VISUAL_COMPLETION_RECT",
                      width: Math.floor(i.right - i.left),
                      x: Math.floor(i.left),
                      y: Math.floor(i.top),
                    },
                    l + e.$2.appStart,
                  ),
                    r.children.length && e.$4(t, n, r.children, o + 1, r));
                }));
          }),
          (t.loomTraceWillEnd = function () {
            (r("vc-tracker").VisualCompletionTraceObserver.unsubscribe(this.$3),
              (this.$1 = null));
          }),
          e
        );
      })(),
      s = {
        getInstance: function (n, r, o) {
          return new e(n, r, o);
        },
        isSupported: function () {
          return e.isSupported();
        },
        loomProviderId: "VisualCompletion",
      };
    l.default = s;
  },
  98,
);
