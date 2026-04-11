__d(
  "ReactFbPropTypes",
  ["FbtResultBase", "warning"],
  function (t, n, r, o, a, i) {
    function e(e) {
      var t = function (r, o, a, i, l, s, u) {
          var t = o[a];
          return t instanceof n("FbtResultBase")
            ? null
            : r
              ? e.isRequired(o, a, i, l, s, u)
              : e(o, a, i, l, s, u);
        },
        r = t.bind(null, !1);
      return ((r.isRequired = t.bind(null, !0)), r);
    }
    i.wrapStringTypeChecker = e;
  },
  null,
);
