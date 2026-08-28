__d(
  "convertCTLTimeSeriesData",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e, t) {
      var n,
        r,
        o = (n = e == null ? void 0 : e.readings) != null ? n : [],
        a = (r = t == null ? void 0 : t.readings) != null ? r : [],
        i = new Set(),
        l = null;
      for (var s of a)
        if (s != null) {
          var u = s.timestamp;
          u != null && (i.add(u), (l == null || u < l) && (l = u));
        }
      var c = new Map(),
        d = [];
      for (var m of o)
        if (m != null) {
          var p = m.timestamp;
          if (p != null) {
            var _, f;
            (d.push([p, (_ = m.value) != null ? _ : null]),
              c.set(p, (f = m.value) != null ? f : null));
          }
        }
      var g = new Map();
      for (var h of a)
        if (h != null) {
          var y = h.timestamp;
          if (y != null) {
            var C;
            g.set(y, (C = h.value) != null ? C : null);
          }
        }
      var b = d.map(function (e) {
        var t = e[0];
        if (typeof t == "number" && i.has(t)) {
          var n;
          if (t === l) {
            var r;
            return [t, (r = c.get(t)) != null ? r : null];
          }
          return [t, (n = g.get(t)) != null ? n : null];
        }
        return [t, null];
      });
      return [
        { name: "Actual", labels: ["datetime", "cost_per_result"], value: d },
        {
          name: "Without recommendation",
          labels: ["datetime", "cost_per_result"],
          isPrediction: !0,
          value: b,
        },
      ];
    }
    i.default = e;
  },
  66,
);
