__d(
  "WAWebOrgMemberOrder",
  ["WAWebOrgOrder"],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      var n = o("WAWebOrgOrder").compareNamesCaseInsensitive(u(e), u(t));
      if (n !== 0) return n;
      var r = o("WAWebOrgOrder").compareNamesCaseInsensitive(
        e.lastName,
        t.lastName,
      );
      return r !== 0
        ? r
        : o("WAWebOrgOrder").compareUnsignedDecimalStrings(e.id, t.id);
    }
    function s(t, n) {
      for (var r = 0, o = t.length; r < o; ) {
        var a = Math.floor((r + o) / 2);
        e(t[a], n) <= 0 ? (r = a + 1) : (o = a);
      }
      return r;
    }
    function u(e) {
      return e.firstName !== ""
        ? e.firstName
        : e.memberName !== ""
          ? e.memberName
          : e.id;
    }
    ((l.compareOrgMembers = e), (l.findOrgMemberInsertIndex = s));
  },
  98,
);
