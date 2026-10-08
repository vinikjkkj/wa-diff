__d(
  "WAWebOrgAdminManagedRosterUtils",
  [
    "WAWebOrgAdminDirectoryMemberDisplay",
    "WAWebOrgAdminInviteMembersUtils",
    "WAWebPhoneUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t, n, r, o) {
      if (!e || (r === "" && o == null)) return t;
      var a = _(n);
      return t.filter(function (e) {
        var t;
        return f(e, (t = a.get(e.lid)) != null ? t : [], r, o);
      });
    }
    function s(e, t, n, r, o, a) {
      if (!t || (o === "" && a == null)) return [];
      var i = _(n),
        l = new Set(
          e.map(function (e) {
            return e.lid;
          }),
        );
      return r.filter(function (e) {
        var t;
        if (l.has(e.lid)) return !1;
        var n = (t = i.get(e.lid)) != null ? t : [];
        return f(e, n, o, a);
      });
    }
    function u(e, t, n, r, o) {
      if (!e) return [];
      var a = new Set(
        n.map(function (e) {
          return e.lid;
        }),
      );
      return t.filter(function (e) {
        return (
          (e.memberLID == null || !a.has(e.memberLID)) &&
          (o == null || e.memberTag === o) &&
          g(e, r)
        );
      });
    }
    function c(t, n, r, o, a, i) {
      (o === void 0 && (o = ""),
        a === void 0 && (a = null),
        i === void 0 && (i = "all"));
      var l = function (a) {
          return i === "not_joined" ? 0 : e(!0, t, n, o, a).length;
        },
        s = function (r) {
          return i === "member" ? 0 : u(!0, n, t, o, r).length;
        },
        c = new Map();
      for (var d of r) c.set(d, l(d) + s(d));
      return {
        memberCount: e(!0, t, n, o, a).length,
        memberTagCounts: c,
        notJoinedCount: u(!0, n, t, o, a).length,
      };
    }
    function d(e) {
      return e.flatMap(function (e) {
        var t = e.emailAddress;
        return t != null &&
          o("WAWebOrgAdminInviteMembersUtils").isValidInviteEmail(t)
          ? [t]
          : [];
      });
    }
    function m(e) {
      var t = new Map();
      for (var n of e)
        n.memberLID != null &&
          n.emailAddress != null &&
          t.set(n.memberLID, n.emailAddress);
      return t;
    }
    function p(e) {
      var t = new Map();
      for (var n of e)
        n.memberLID != null &&
          n.phoneNumber != null &&
          t.set(n.memberLID, n.phoneNumber);
      return t;
    }
    function _(e) {
      var t = new Map();
      for (var n of e) {
        var r,
          o = n.memberLID;
        if (o != null) {
          var a = (r = t.get(o)) != null ? r : [];
          (a.push(n), t.set(o, a));
        }
      }
      return t;
    }
    function f(e, t, n, r) {
      var a,
        i =
          o(
            "WAWebOrgAdminDirectoryMemberDisplay",
          ).orgAdminDirectoryMemberMatchesQuery(e, n) ||
          ((a = e.memberTag) == null
            ? void 0
            : a.toLocaleLowerCase().includes(n)) === !0 ||
          t.some(function (e) {
            return g(e, n);
          }),
        l =
          r == null ||
          e.memberTag === r ||
          t.some(function (e) {
            return e.memberTag === r;
          });
      return i && l;
    }
    function g(e, t) {
      return t === ""
        ? !0
        : [
            e.name,
            e.memberTag,
            e.emailAddress,
            e.phoneNumber,
            e.phoneNumber == null
              ? null
              : o("WAWebPhoneUtils").formatPhone(e.phoneNumber),
          ].some(function (e) {
            return (
              (e == null ? void 0 : e.toLocaleLowerCase().includes(t)) === !0
            );
          });
    }
    ((l.getWAWebOrgAdminManagedFilteredMembers = e),
      (l.getWAWebOrgAdminManagedSearchFallbackMembers = s),
      (l.getWAWebOrgAdminRosterOnlyEntries = u),
      (l.getWAWebOrgAdminPeopleCounts = c),
      (l.getWAWebOrgAdminRosterInviteEmails = d),
      (l.getWAWebOrgAdminRosterEmailsByMemberLID = m),
      (l.getWAWebOrgAdminRosterPhoneNumbersByMemberLID = p));
  },
  98,
);
