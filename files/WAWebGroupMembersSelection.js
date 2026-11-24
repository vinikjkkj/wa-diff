__d(
  "WAWebGroupMembersSelection",
  [],
  function (t, n, r, o, a, i) {
    function e(e, t, n, r, o, a) {
      if (!t.includes(n)) return e;
      var i = a ? u(t, r, n) : [n],
        l = new Set(e);
      for (var s of i) o ? l.add(s) : l.delete(s);
      return l;
    }
    function l(e, t, n) {
      return e.includes(t) && u(e, n, t).length > 1;
    }
    function s(e, t) {
      var n = new Set(
          t.map(function (e) {
            return e.id;
          }),
        ),
        r = Array.from(e).filter(function (e) {
          return n.has(e);
        });
      return r.length === e.size ? e : new Set(r);
    }
    function u(e, t, n) {
      var r = t == null ? -1 : e.indexOf(t),
        o = e.indexOf(n);
      return r < 0 ? [n] : e.slice(Math.min(r, o), Math.max(r, o) + 1);
    }
    ((i.updateGroupMemberSelection = e),
      (i.selectsGroupMemberRange = l),
      (i.keepCurrentGroupMembers = s));
  },
  66,
);
