__d(
  "QPLLoomProvider",
  ["QPLEvent"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (function () {
        function t(t, n) {
          var r = this;
          ((this.$2 = {}),
            (this.$1 = n.QuickPerformanceLogger.addListener({
              onMarkerStart: function (a, i, l) {
                var n = (e || (e = o("QPLEvent"))).getMarkerId(a);
                (l >= t.startTime &&
                  t.buffer.addEvent(
                    { type: "QPL_START", markerId: n, instanceKey: i },
                    l,
                  ),
                  r.$2[n] || (r.$2[n] = {}),
                  (r.$2[n][i] = l));
              },
              onMarkerEnd: function (r, a, i, l) {
                var n = (e || (e = o("QPLEvent"))).getMarkerId(a);
                l >= t.startTime &&
                  t.buffer.addEvent(
                    { type: "QPL_END", action: r, markerId: n, instanceKey: i },
                    l,
                  );
              },
              onMarkerPoint: function (r, a, i, l, s) {
                var n = (e || (e = o("QPLEvent"))).getMarkerId(r);
                if (s >= t.startTime) {
                  var u;
                  t.buffer.addEvent(
                    {
                      type: "QPL_POINT",
                      markerId: n,
                      instanceKey: a,
                      name: i,
                      data:
                        l == null || (u = l.string) == null ? void 0 : u.__key,
                    },
                    s,
                  );
                }
              },
              onAnnotation: function (a, i, l, s) {
                var n = (e || (e = o("QPLEvent"))).getMarkerId(a),
                  u = r.$2[n],
                  c = u == null ? void 0 : u[i];
                c != null &&
                  c >= t.startTime &&
                  t.buffer.addEvent(
                    {
                      type: "QPL_ANNOTATION",
                      markerId: n,
                      instanceKey: i,
                      annotationKey: l,
                      annotationValue: s,
                    },
                    c,
                  );
              },
            })));
        }
        var n = t.prototype;
        return (
          (n.loomTraceWillEnd = function () {
            this.$1.dispose();
          }),
          t
        );
      })(),
      u = {
        loomProviderId: "QPL",
        isSupported: function () {
          return !0;
        },
        getInstance: function (t, n) {
          return new s(t, n);
        },
      };
    l.default = u;
  },
  98,
);
