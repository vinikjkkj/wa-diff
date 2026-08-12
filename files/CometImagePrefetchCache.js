__d(
  "CometImagePrefetchCache",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = 5e3,
      l = new Map();
    function s(e) {
      var t = l.get(e);
      return t == null ? null : (l.delete(e), l.set(e, t), t);
    }
    function u(t, n) {
      if ((l.delete(t), l.set(t, n), l.size > e)) {
        var r = l.keys().next();
        r.done || l.delete(r.value);
      }
    }
    ((i.getPrefetchedURI = s), (i.recordPrefetchedURI = u));
  },
  66,
);
