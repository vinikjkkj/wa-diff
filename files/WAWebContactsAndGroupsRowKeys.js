__d(
  "WAWebContactsAndGroupsRowKeys",
  [],
  function (t, n, r, o, a, i) {
    function e(e, t, n) {
      var r = e.target === e.currentTarget || e.target === t;
      n != null &&
        r &&
        e.key === " " &&
        (e.preventDefault(), e.stopPropagation(), n());
    }
    i.toggleRowOnSpace = e;
  },
  66,
);
