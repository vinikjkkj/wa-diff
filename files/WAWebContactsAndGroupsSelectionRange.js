__d(
  "WAWebContactsAndGroupsSelectionRange",
  [],
  function (t, n, r, o, a, i) {
    function e(e, t, n) {
      var r = [t == null ? -1 : e.indexOf(t), e.indexOf(n)];
      return r.includes(-1)
        ? null
        : e.slice(Math.min.apply(Math, r), Math.max.apply(Math, r) + 1);
    }
    i.getSelectionRange = e;
  },
  66,
);
