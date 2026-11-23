__d(
  "JSSPSampleDurationMarker",
  ["JSSPTraceBaseTransformer"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function (e) {
      function t() {
        return e.apply(this, arguments) || this;
      }
      babelHelpers.inheritsLoose(t, e);
      var n = t.prototype;
      return (
        (n.transform = async function (t) {
          for (
            var e,
              n,
              r = this.isSamplesInOrder(t)
                ? t.samples
                : (t.samples = [].concat(t.samples).sort(function (e, t) {
                    return e.timestamp - t.timestamp;
                  })),
              o = 0,
              a =
                (e = (n = r[0]) == null ? void 0 : n.stackId) != null ? e : -1,
              i = 0;
            i < r.length - 1;
            ++i
          ) {
            var l = r[i],
              s = r[i + 1],
              u = s.timestamp - l.timestamp;
            if (((l.duration = u), (o += u), a !== s.stackId)) {
              var c;
              ((l.cumulativeDuration = o),
                (o = 0),
                (a = (c = s.stackId) != null ? c : -1));
            }
            i === r.length - 2 && (l.cumulativeDuration = o);
          }
          return t;
        }),
        (n.isSamplesInOrder = function (t) {
          for (var e = t.samples, n = 1; n < e.length; ++n)
            if (e[n].timestamp > e[n - 1].timestamp) return !1;
          return !0;
        }),
        t
      );
    })(r("JSSPTraceBaseTransformer"));
    l.default = e;
  },
  98,
);
