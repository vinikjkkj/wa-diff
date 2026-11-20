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
    function l(e, t, n) {
      var r = new Set(e);
      return (
        n != null
          ? n.forEach(function (e) {
              return r.add(e);
            })
          : r.has(t)
            ? r.delete(t)
            : r.add(t),
        r
      );
    }
    function s(e, t, n) {
      var r = new Set(e);
      return (
        t.forEach(function (e) {
          n ? r.add(e) : r.delete(e);
        }),
        r
      );
    }
    function u(e, t) {
      return e === 0 ? !1 : e === t ? !0 : "indeterminate";
    }
    ((i.getSelectionRange = e),
      (i.getToggledSelection = l),
      (i.getUpdatedSelection = s),
      (i.getSelectAllValue = u));
  },
  66,
);
