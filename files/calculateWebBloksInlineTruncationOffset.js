__d(
  "calculateWebBloksInlineTruncationOffset",
  [],
  function (t, n, r, o, a, i) {
    function e(e, t, n, r) {
      var o = null;
      for (var a of e)
        a.width === 0 ||
          a.top >= n ||
          ((o == null ||
            a.top > o.top + 1 ||
            (Math.abs(a.top - o.top) <= 1 &&
              (r ? a.left < o.left : a.right > o.right))) &&
            (o = a));
      if (o == null) return 0;
      var i = r ? o.left - t.right : t.left - o.right;
      return Math.max(0, i);
    }
    i.default = e;
  },
  66,
);
