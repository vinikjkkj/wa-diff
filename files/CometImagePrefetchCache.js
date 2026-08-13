__d(
  "CometImagePrefetchCache",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = 5e3,
      l = new Map(),
      s = "\0";
    function u(e, t) {
      return "" + (t != null ? t : "") + s + e;
    }
    function c(e, t) {
      var n = u(e, t),
        r = l.get(n);
      return r == null ? null : (l.delete(n), l.set(n, r), r);
    }
    function d(t, n, r) {
      var o = u(t, n);
      if ((l.delete(o), l.set(o, r), l.size > e)) {
        var a = l.keys().next();
        a.done || l.delete(a.value);
      }
    }
    ((i.getPrefetchedURI = c), (i.recordPrefetchedURI = d));
  },
  66,
);
