__d(
  "WAMemoizeConditionally",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(t, n) {
      var r = function () {
        for (var e = arguments.length, o = new Array(e), a = 0; a < e; a++)
          o[a] = arguments[a];
        var i = n ? n.apply(this, o) : o[0];
        if (i == null) return t.apply(this, o);
        var l = r.cache;
        if (l.has(i)) return l.get(i);
        var s = t.apply(this, o);
        return ((r.cache = l.set(i, s) || l), s);
      };
      return ((r.cache = new (e.Cache || Map)()), r);
    }
    ((e.Cache = Map), (i.default = e));
  },
  66,
);
