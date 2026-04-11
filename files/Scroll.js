__d(
  "Scroll",
  [],
  function (t, n, r, o, a, i) {
    function e(e, t) {
      return !!t && (e === t.documentElement || e === t.body);
    }
    function l(t) {
      var n, r;
      if (t == null) return 0;
      var o = t.ownerDocument;
      return e(t, o)
        ? (o == null || (n = o.body) == null ? void 0 : n.scrollTop) ||
            (o == null || (r = o.documentElement) == null
              ? void 0
              : r.scrollTop) ||
            0
        : t.scrollTop || 0;
    }
    function s(t, n) {
      if (t != null) {
        var r = t.ownerDocument;
        e(t, r)
          ? (r != null && r.body && (r.body.scrollTop = n || 0),
            r != null &&
              r.documentElement &&
              (r.documentElement.scrollTop = n || 0))
          : (t.scrollTop = n || 0);
      }
    }
    function u(t) {
      var n,
        r,
        o = t.ownerDocument;
      return e(t, o)
        ? (o == null || (n = o.body) == null ? void 0 : n.scrollLeft) ||
            (o == null || (r = o.documentElement) == null
              ? void 0
              : r.scrollLeft) ||
            0
        : t.scrollLeft || 0;
    }
    function c(t, n) {
      var r = t.ownerDocument;
      e(t, r)
        ? (r != null && r.body && (r.body.scrollLeft = n || 0),
          r != null &&
            r.documentElement &&
            (r.documentElement.scrollLeft = n || 0))
        : (t.scrollLeft = n || 0);
    }
    ((i.getTop = l), (i.setTop = s), (i.getLeft = u), (i.setLeft = c));
  },
  66,
);
