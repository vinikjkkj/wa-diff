__d(
  "WATestBenchmark",
  [],
  function (t, n, r, o, a, i) {
    var e = function () {
      return performance.now();
    };
    async function l(t, n, r) {
      var o = {},
        a = [],
        i = async function (i, l) {
          (a.push(i), (o[i] = []));
          for (var r = 0; r < t; r++) {
            for (var s = e(), u = 0; u < n; u++) await l(r, u);
            var c = e();
            o[i].push((c - s) / n);
          }
        };
      return (
        await r(i),
        a.map(function (e) {
          var t = o[e].sort(function (e, t) {
              return e - t;
            }),
            n = t.length;
          return {
            name: e,
            min: t[0],
            p50: t[Math.floor(n / 2)],
            avg:
              t.reduce(function (e, t) {
                return e + t;
              }, 0) / n,
          };
        })
      );
    }
    function s(e) {
      if (e < 1) {
        var t = Math.round(e * 1e4);
        return t + "\u03BCs";
      }
      var n = Math.round(e);
      return n + "ms";
    }
    function u(e, t) {
      t.forEach(function (t) {
        var n = t.avg,
          r = t.min,
          o = t.name,
          a = t.p50;
        e("[" + o + "] min: " + s(r) + ", avg: " + s(n) + ", p50: " + s(a));
      });
    }
    function c(e, t) {
      var n = `
`;
      (t.forEach(function (e) {
        var t = e.avg,
          r = e.min,
          o = e.name,
          a = e.p50;
        n +=
          o +
          "," +
          Math.round(r) +
          "," +
          Math.round(t) +
          "," +
          Math.round(a) +
          `
`;
      }),
        e(n));
    }
    ((i.createBenchmark = l), (i.printReport = u), (i.printAsCSVInMS = c));
  },
  66,
);
