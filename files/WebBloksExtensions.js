__d(
  "WebBloksExtensions",
  [],
  function (t, n, r, o, a, i) {
    function e(e, t) {
      if (e == null) return null;
      var n = [],
        r = {};
      for (var o of e) {
        var a = o.styleId,
          i = t.get(a);
        if (i && i.reduce) {
          var l = r[a],
            s = i.reduce(l, o);
          r[a] = s;
        } else n.push(o);
      }
      return (n.push.apply(n, Object.values(r)), n);
    }
    i.processExtensions = e;
  },
  66,
);
