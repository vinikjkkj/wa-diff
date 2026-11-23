__d(
  "AdsPagePostIDUtils",
  ["invariant", "isFalsey"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = 2,
      u = 0,
      c = 1;
    function d(e) {
      return r("isFalsey")(e) ? null : typeof e != "string" ? e.toString() : e;
    }
    function m(t) {
      var n = d(t);
      if (r("isFalsey")(n)) return !1;
      var o = n.split("_");
      return o.length === e;
    }
    function p(t) {
      var n = d(t);
      if (r("isFalsey")(n)) return null;
      var o = n.split("_");
      return (o.length === e || s(0, 11830, t), o[c]);
    }
    function _(t) {
      var n = d(t);
      if (r("isFalsey")(n)) return null;
      var o = n.split("_");
      return (o.length === e || s(0, 11830, t), o[u]);
    }
    ((l.normalizePagePostID = d),
      (l.isPagePostId_BROKEN = m),
      (l.getPostIdFromPagePostId_BROKEN = p),
      (l.getPageIdFromPagePostId_BROKEN = _));
  },
  98,
);
