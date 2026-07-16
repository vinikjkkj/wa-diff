__d(
  "WAWebJSUsageDebug",
  ["__debug"],
  function (t, n, r, o, a, i) {
    "use strict";
    function e() {
      var e = n("__debug").modulesMap,
        t = new Set(),
        r = new Set(),
        o = new Set(),
        a = new Set();
      for (var i of Object.entries(e)) {
        var l = i[0],
          s = i[1];
        if (
          s != null &&
          (s.factoryFinished === !0 ? t.add(l) : r.add(l),
          !s.id.startsWith("rd:") && s.dependencies)
        )
          for (var u of s.dependencies) u && u.id && a.add(u.id);
      }
      for (var c of Object.entries(e)) {
        var d = c[0],
          m = c[1];
        m != null &&
          !m.id.startsWith("rd:") &&
          m.factoryFinished === !0 &&
          !a.has(d) &&
          o.add(d);
      }
      var p = Array.from(t).sort(),
        _ = Array.from(r).sort(),
        f = Array.from(o).sort();
      return {
        used: p,
        unused: _,
        roots: f,
        counts: {
          used: p.length,
          unused: _.length,
          roots: f.length,
          total: p.length + _.length,
        },
      };
    }
    ((e.doc =
      "Returns {used, unused, roots, counts} of runtime JS module usage (factoryFinished walk of __debug.modulesMap), mirroring CometJSUsage."),
      (e.paramsToExecute = []));
    function l() {
      return JSON.stringify(e());
    }
    ((l.doc =
      "Same as getJSUsageReport but returns a JSON string of {used, unused, roots}."),
      (l.paramsToExecute = []));
    var s = { getJSUsageReport: e, getJSUsageReportJSON: l },
      u = s;
    i.default = u;
  },
  66,
);
