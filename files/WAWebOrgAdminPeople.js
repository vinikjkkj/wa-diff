__d(
  "WAWebOrgAdminPeople",
  [],
  function (t, n, r, o, a, i) {
    var e = "member:",
      l = "roster:";
    function s(t) {
      return "" + e + t;
    }
    function u(e) {
      return "" + l + e;
    }
    function c(t, n, r) {
      if (t.startsWith(e)) {
        var o = t.slice(e.length),
          a = n.find(function (e) {
            return e.lid === o;
          });
        if (a == null) return null;
        var i = r.filter(function (e) {
          return e.memberLID === a.lid;
        });
        return d(
          a,
          _(i, function (e) {
            return e.emailAddress;
          }),
          _(i, function (e) {
            return e.phoneNumber;
          }),
        );
      }
      if (t.startsWith(l)) {
        var s = t.slice(l.length),
          u = r.find(function (e) {
            return e.id === s;
          });
        return u == null ? null : m(u);
      }
      return null;
    }
    function d(e, t, n) {
      return {
        emailAddress: t,
        key: s(e.lid),
        lid: e.lid,
        member: e,
        memberRole: e.role,
        memberTag: e.memberTag,
        name: e.displayName,
        phoneNumber: n != null ? n : e.phoneNumber,
        username: e.username,
      };
    }
    function m(e) {
      var t;
      return {
        emailAddress: e.emailAddress,
        key: u(e.id),
        lid: (t = e.memberLID) != null ? t : null,
        member: null,
        memberRole: null,
        memberTag: e.memberTag,
        name: e.name,
        phoneNumber: e.phoneNumber,
        username: null,
      };
    }
    function p(e, t) {
      var n = e.member;
      return n == null
        ? e
        : babelHelpers.extends({}, e, {
            member: babelHelpers.extends({}, n, { role: t }),
            memberRole: t,
          });
    }
    function _(e, t) {
      for (var n = e.length - 1; n >= 0; n--) {
        var r = t(e[n]);
        if (r != null) return r;
      }
      return null;
    }
    ((i.getOrgAdminMemberPersonKey = s),
      (i.getOrgAdminRosterPersonKey = u),
      (i.getOrgAdminPerson = c),
      (i.getOrgAdminMemberPerson = d),
      (i.getOrgAdminRosterPerson = m),
      (i.withOrgAdminPersonRole = p));
  },
  66,
);
