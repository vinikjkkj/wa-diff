__d(
  "HasteBitMap",
  ["BitMap"],
  function (t, n, r, o, a, i, l) {
    var e = new Map();
    function s(t, n) {
      var o;
      (e.has(t) || e.set(t, new (r("BitMap"))()),
        (o = e.get(t)) == null || o.set(n));
    }
    function u(t) {
      var n, r;
      return (n = (r = e.get(t)) == null ? void 0 : r.toCompressedString()) !=
        null
        ? n
        : "";
    }
    ((l.add = s), (l.toCompressedString = u));
  },
  98,
);
