__d(
  "VideoPlayerNextgendashNetworkDiagnosticsUtils",
  ["VideoPlayerNextgendashBandwidthUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      return e == null
        ? function (e, t) {
            return 0;
          }
        : t
          ? function (t, n) {
              return e.bandwidthEstimate;
            }
          : function (t, n) {
              if (t === 0) return 0;
              var r = o(
                "VideoPlayerNextgendashBandwidthUtils",
              ).getEstimatedRequestTimeToLastByteMs(e, t, n);
              return (t / r) * 8e3;
            };
    }
    var s = 2e5,
      u = 2e5,
      c = 10,
      d = 1e8;
    function m(e, t, n) {
      var r = e.bytes + s,
        o = n >= r ? { bytes: n, clock: t } : e,
        a = t.perfMs - e.clock.perfMs,
        i = n - e.bytes,
        l = null;
      return (
        f(i, a) ||
          (l = {
            bandwidthSample: { bytes: i, timeInMs: a },
            clock: t,
            navigationTimingSample: void 0,
          }),
        { networkDiagnosticsSample: l, nextBandwidthSamplingState: o }
      );
    }
    function p(e, t, n, r, o) {
      var a = h(e.host.getPerformanceResourceTimingByName(t)),
        i = void 0;
      if (a) {
        var l = a.responseStart - a.requestStart,
          s = a.responseEnd - a.requestStart;
        i = { bytes: o, timeToFirstByteMs: l, timeToLastByteMs: s };
      }
      var c = r.perfMs - n.clock.perfMs,
        d = o - n.bytes,
        m = void 0;
      if (
        (n.bytes === 0 && o >= u && !f(d, c) && (m = { bytes: d, timeInMs: c }),
        i || m)
      ) {
        var p = { bandwidthSample: m, clock: r, navigationTimingSample: i };
        return p;
      }
      return null;
    }
    function _(e, t, n, r) {
      var o = e.host.getPerformanceResourceTimingByName(t).filter(function (e) {
        return e.responseEnd > r;
      });
      if (o.length === 0) return { status: "pending" };
      var a = g(o);
      if (a == null) return { status: "rejected" };
      var i = a.responseEnd - a.responseStart,
        l = a.transferSize;
      return i <= 0 || f(l, i) || l < u
        ? { status: "rejected" }
        : {
            sample: {
              bandwidthSample: { bytes: l, timeInMs: i },
              clock: n,
              navigationTimingSample: {
                bytes: l,
                timeToFirstByteMs: a.responseStart - a.requestStart,
                timeToLastByteMs: a.responseEnd - a.requestStart,
              },
            },
            status: "sampled",
          };
    }
    function f(e, t) {
      var n = (e * 8) / (t / 1e3);
      return t < c && n > d;
    }
    function g(e) {
      return h(
        e.filter(function (e) {
          return e.transferSize > 0;
        }),
      );
    }
    function h(e) {
      return e.reduce(function (e, t) {
        return e == null ? t : t.responseEnd < e.responseEnd ? e : t;
      }, null);
    }
    ((l.getBandwidthEstimateFn = e),
      (l.computeNetworkDiagnosticsSampleOnChunk = m),
      (l.computeNetworkDiagnosticsSampleOnDone = p),
      (l.computeNetworkDiagnosticsSampleFromResourceTiming = _));
  },
  98,
);
