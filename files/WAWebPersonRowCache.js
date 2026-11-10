__d(
  "WAWebPersonRowCache",
  ["WAWebPersonRowPolicy"],
  function (t, n, r, o, a, i, l) {
    var e = new Map();
    function s(t, n, r) {
      var o = t == null ? n : t + ":" + n,
        a = e.get(o);
      if (a != null && a.member === r) return a;
      var i = { key: o, lid: n, member: r, orgId: t };
      return (e.set(o, i), i);
    }
    function u() {
      e = new Map();
    }
    function c(e) {
      var t = e[0];
      return t == null || o("WAWebPersonRowPolicy").isPersonTimelocked(t)
        ? null
        : t;
    }
    ((l.getPersonRow = s),
      (l.resetPersonRows = u),
      (l.getPersonRowToOpenOnEnter = c));
  },
  98,
);
