__d(
  "WAWebOrgMemberSearchMatch",
  ["WAWebSearchUtils", "WAWebSimpleSearch", "WAWebUsernameTypes"],
  function (t, n, r, o, a, i, l) {
    var e = 3,
      s = 25;
    function u(t) {
      return t.replace(/\s/g, "").length >= e;
    }
    function c(e) {
      var t = o("WAWebSearchUtils").normalizeString(e.trim());
      return t.startsWith("@") ? t.slice(1).trim() : t;
    }
    function d(e, t) {
      if (t === "") return !1;
      var n = o("WAWebUsernameTypes").serializeMaybeUsername(e.username);
      return (
        o("WAWebSimpleSearch").simpleSearch(t, [e.memberName]) ||
        (n != null && o("WAWebSearchUtils").normalizeString(n).startsWith(t))
      );
    }
    function m(t, n) {
      return n.length >= e && o("WAWebSimpleSearch").simpleSearch(n, [t]);
    }
    function p(e, t, n) {
      var r = c(n),
        o = e.filter(function (e) {
          return d(e, r);
        });
      if (!m(t, r)) return o;
      var a = new Set(o),
        i = e.filter(function (e) {
          return !a.has(e);
        });
      return [].concat(o, i.slice(0, Math.max(0, s - o.length)));
    }
    ((l.isOrgMemberQueryLongEnough = u),
      (l.toOrgMemberQuery = c),
      (l.matchesOrgMember = d),
      (l.matchesOrgName = m),
      (l.findOrgMembers = p));
  },
  98,
);
