__d(
  "oz-player/networks/OzBandwidthUtils",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = 0.3,
      l = 3,
      s = 50,
      u = 10,
      c = 5,
      d = new Map([
        ["51", 0.03],
        ["52", 0.06],
        ["53", 0.08],
        ["54", 0.1],
        ["55", 0.13],
        ["56", 0.16],
        ["57", 0.18],
        ["58", 0.2],
        ["59", 0.23],
        ["60", 0.26],
        ["61", 0.28],
        ["62", 0.31],
        ["63", 0.33],
        ["64", 0.36],
        ["65", 0.39],
        ["66", 0.42],
        ["67", 0.44],
        ["68", 0.47],
        ["69", 0.5],
        ["70", 0.53],
        ["71", 0.56],
        ["72", 0.59],
        ["73", 0.62],
        ["74", 0.65],
        ["75", 0.68],
        ["76", 0.71],
        ["77", 0.74],
        ["78", 0.78],
        ["79", 0.81],
        ["80", 0.85],
        ["81", 0.88],
        ["82", 0.92],
        ["83", 0.96],
        ["84", 1],
        ["85", 1.04],
        ["86", 1.08],
        ["87", 1.13],
        ["88", 1.18],
        ["89", 1.23],
        ["90", 1.28],
        ["91", 1.34],
        ["92", 1.41],
        ["93", 1.48],
        ["94", 1.56],
        ["95", 1.65],
        ["96", 1.76],
        ["97", 1.89],
        ["98", 2.06],
        ["99", 2.33],
      ]);
    function m(e, t, n, r) {
      if (e.length === 0) return null;
      var o = _(e),
        a = h(e, t),
        i = a.average,
        l = a.totalWeight,
        d = u,
        m = c,
        p = s;
      if (n.length > 0) {
        d = f(
          n.map(function (e) {
            return e.timeToFirstByteMs;
          }),
        );
        var y = g(
          n.map(function (e) {
            return { value: e.timeToFirstByteMs, weight: 1 };
          }),
          r,
        );
        ((p = y.average), (m = y.totalWeight));
      }
      return {
        bandwidthEstimate: i,
        bandwidthStandardDeviation: o,
        bandwidthTotalWeight: l,
        timeToFirstByteMsEstimate: p,
        timeToFirstByteMsStandardDeviation: d,
        timeToFirstByteMsTotalWeight: m,
      };
    }
    function p(e) {
      for (var t = 0, n = 0; n < e.length; n++)
        t += (e[n].bytes * 8e3) / e[n].timeInMs;
      return t / e.length;
    }
    function _(e) {
      return f(
        e.map(function (e) {
          return (e.bytes * 8e3) / e.timeInMs;
        }),
      );
    }
    function f(e) {
      for (
        var t =
            e.reduce(function (e, t) {
              return e + t;
            }, 0) / e.length,
          n = 0,
          r = 0;
        r < e.length;
        r++
      )
        n += Math.pow(e[r] - t, 2);
      return Math.round(Math.sqrt(n / e.length));
    }
    function g(e, t) {
      for (
        var n = Math.exp(Math.log(0.5) / t), r = 0, o = 0, a = 0;
        a < e.length;
        a++
      ) {
        var i = Math.pow(n, e[a].weight);
        ((r = e[a].value * (1 - i) + r * i), (o += e[a].weight));
      }
      var l = Math.round(r / (1 - Math.pow(n, o)));
      return { average: l, totalWeight: o };
    }
    function h(e, t) {
      return g(
        e.map(function (e) {
          return {
            value: (e.bytes * 8e3) / e.timeInMs,
            weight: e.timeInMs / 1e3,
          };
        }),
        t,
      );
    }
    function y(e, t) {
      for (var n = p(e), r = [], o = 0; o < e.length; o++)
        Math.abs(n - (e[o].bytes * 8e3) / e[o].timeInMs) < t && r.push(e[o]);
      return r;
    }
    function C(e, t, n, r) {
      var o = _(e),
        a = y(e, o * n),
        i = h(a, t);
      return i.average - o * r;
    }
    function b(t, n, r) {
      var o = d.get(String(r)),
        a = t.bandwidthEstimate,
        i = t.bandwidthStandardDeviation,
        s = t.timeToFirstByteMsEstimate,
        u = t.timeToFirstByteMsStandardDeviation,
        c = 1,
        m = 1;
      return (
        o != null &&
          ((c = 1 - (o * i) / a),
          (c = isNaN(c) ? 1 : Math.max(c, e)),
          (m = 1 + (o * u) / s),
          (m = isNaN(m) ? 1 : m),
          (m = Math.min(m, l))),
        (8e3 * n) / (a * c) + s * m
      );
    }
    function v(e) {
      return {
        bandwidthEstimate: e,
        bandwidthStandardDeviation: 1,
        bandwidthTotalWeight: 1,
        timeToFirstByteMsEstimate: s,
        timeToFirstByteMsStandardDeviation: u,
        timeToFirstByteMsTotalWeight: c,
      };
    }
    ((i.getBandwidthDiagnostics = m),
      (i.getMeanBandwidth = p),
      (i.getStandardDeviationOfBandwidth = _),
      (i.getExponentiallyWeightedMovingAverage = g),
      (i.getExponentiallyWeightedMovingAverageOfBandwidth = h),
      (i.getBandwidthSamplesWithinRangeOfMean = y),
      (i.getBandwidthEstimate = C),
      (i.getEstimatedRequestTimeToLastByteMs = b),
      (i.createFallbackBandwidthDiagnostics = v));
  },
  66,
);
