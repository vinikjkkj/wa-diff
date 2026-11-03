__d(
  "VideoPlayerNextgendashBandwidthUtils",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = [
      0.03, 0.06, 0.08, 0.1, 0.13, 0.16, 0.18, 0.2, 0.23, 0.26, 0.28, 0.31,
      0.33, 0.36, 0.39, 0.42, 0.44, 0.47, 0.5, 0.53, 0.56, 0.59, 0.62, 0.65,
      0.68, 0.71, 0.74, 0.78, 0.81, 0.85, 0.88, 0.92, 0.96, 1, 1.04, 1.08, 1.13,
      1.18, 1.23, 1.28, 1.34, 1.41, 1.48, 1.56, 1.65, 1.76, 1.89, 2.06, 2.33,
    ];
    function l(e) {
      var t =
          e.reduce(function (e, t) {
            return e + t;
          }, 0) / e.length,
        n = e.reduce(function (e, n) {
          return e + Math.pow(n - t, 2);
        }, 0);
      return Math.round(Math.sqrt(n / e.length));
    }
    function s(e) {
      return (
        Number.isFinite(e.bytes) &&
        e.bytes >= 0 &&
        Number.isFinite(e.timeInMs) &&
        e.timeInMs > 0 &&
        Number.isFinite((e.bytes * 8e3) / e.timeInMs)
      );
    }
    function u(e, t) {
      var n = Math.exp(Math.log(0.5) / t),
        r = 0,
        o = 0;
      for (var a of e) {
        var i = Math.pow(n, a.weight);
        ((r = a.value * (1 - i) + r * i), (o += a.weight));
      }
      return {
        average: o === 0 ? 0 : Math.round(r / (1 - Math.pow(n, o))),
        totalWeight: o,
      };
    }
    function c(e, t) {
      return u(
        e.map(function (e) {
          return {
            value: (e.bytes * 8e3) / e.timeInMs,
            weight: e.timeInMs / 1e3,
          };
        }),
        t,
      );
    }
    function d(e) {
      return {
        bandwidthEstimate: e,
        bandwidthStandardDeviation: 1,
        bandwidthTotalWeight: 1,
        timeToFirstByteMsEstimate: 50,
        timeToFirstByteMsStandardDeviation: 10,
        timeToFirstByteMsTotalWeight: 5,
      };
    }
    function m(e, t, n, r) {
      var o,
        a,
        i = e.filter(s);
      if (i.length === 0) return null;
      var m = c(i, t),
        p = d(m.average),
        _ =
          n.length > 0
            ? u(
                n.map(function (e) {
                  return { value: e.timeToFirstByteMs, weight: 1 };
                }),
                r,
              )
            : null;
      return {
        bandwidthEstimate: m.average,
        bandwidthStandardDeviation: l(
          i.map(function (e) {
            return (e.bytes * 8e3) / e.timeInMs;
          }),
        ),
        bandwidthTotalWeight: m.totalWeight,
        timeToFirstByteMsEstimate:
          (o = _ == null ? void 0 : _.average) != null
            ? o
            : p.timeToFirstByteMsEstimate,
        timeToFirstByteMsStandardDeviation:
          _ != null
            ? l(
                n.map(function (e) {
                  return e.timeToFirstByteMs;
                }),
              )
            : p.timeToFirstByteMsStandardDeviation,
        timeToFirstByteMsTotalWeight:
          (a = _ == null ? void 0 : _.totalWeight) != null
            ? a
            : p.timeToFirstByteMsTotalWeight,
      };
    }
    function p(e, t, n, r) {
      var o = e.filter(s);
      if (o.length === 0) return 0;
      var a = o.map(function (e) {
          return (e.bytes * 8e3) / e.timeInMs;
        }),
        i = l(a);
      if (i === 0) return c(o, t).average;
      var u =
          a.reduce(function (e, t) {
            return e + t;
          }, 0) / a.length,
        d = o.filter(function (e) {
          return Math.abs(u - (e.bytes * 8e3) / e.timeInMs) < i * n;
        });
      return c(d, t).average - i * r;
    }
    function _(t, n, r) {
      var o = Number.isInteger(r) && r >= 51 && r <= 99 ? e[r - 51] : void 0,
        a = 1,
        i = 1;
      (o != null &&
        t.bandwidthEstimate > 0 &&
        ((a = 1 - (o * t.bandwidthStandardDeviation) / t.bandwidthEstimate),
        (a = Number.isNaN(a) ? 1 : Math.max(a, 0.3))),
        o != null &&
          t.timeToFirstByteMsEstimate > 0 &&
          ((i =
            1 +
            (o * t.timeToFirstByteMsStandardDeviation) /
              t.timeToFirstByteMsEstimate),
          (i = Number.isNaN(i) ? 1 : Math.min(i, 3))));
      var l = t.timeToFirstByteMsEstimate * i;
      return n === 0
        ? l
        : t.bandwidthEstimate === 0
          ? 1 / 0
          : (8e3 * n) / (t.bandwidthEstimate * a) + l;
    }
    ((i.createFallbackBandwidthDiagnostics = d),
      (i.getBandwidthDiagnostics = m),
      (i.getBandwidthEstimate = p),
      (i.getEstimatedRequestTimeToLastByteMs = _));
  },
  66,
);
