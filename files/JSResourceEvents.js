__d(
  "JSResourceEvents",
  ["performanceAbsoluteNow"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = 50,
      u = new Map();
    function c(t, n, o) {
      var a = t,
        i = n != null ? n : "",
        l = u.get(a);
      l || u.set(a, (l = new Map()));
      var c = l.get(i);
      c || l.set(i, (c = new Map()));
      var d = c.get(o);
      (d || c.set(o, (d = [0, []])),
        (d[1][d[0]++ % s] = (e || (e = r("performanceAbsoluteNow")))()));
    }
    function d(e, t, n) {
      var r = u.get(e);
      if (!r) return [];
      var o = [];
      for (var a of r) {
        var i = a[0],
          l = a[1];
        for (var s of l) {
          var c = s[0],
            d = s[1];
          for (var m of d[1])
            m >= t &&
              m <= n &&
              o.push({ module: e, ref: i || null, type: c, time: m });
        }
      }
      return o.sort(function (e, t) {
        return e.time - t.time;
      });
    }
    function m(e, t) {
      var n = new Map();
      for (var r of u.keys()) {
        var o = d(r, e, t);
        o.length && n.set(r, o);
      }
      return n;
    }
    ((l.notify = c), (l.getEvents = d), (l.getAllModuleEvents = m));
  },
  98,
);
