__d(
  "WebBloksArraySortedArray",
  [],
  function (t, n, r, o, a, i) {
    function e(e, t, n) {
      var r = Array.from(t);
      return (
        r.sort(function (t, r) {
          var o = n(e, t, r);
          return o;
        }),
        r
      );
    }
    i.default = e;
  },
  66,
);
