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
      var a = h(n);
      return t.filter(function (e) {
        var t;
        return y(e, (t = a.get(e.lid)) != null ? t : [], r, o);
      });
    }
    function s(e, t, n, r, o, a) {
      if (!t || (o === "" && a == null)) return [];
      var i = h(n),
        l = new Set(
          e.map(function (e) {
            return e.lid;
          }),
        );
      return r.filter(function (e) {
        var t;
        if (l.has(e.lid)) return !1;
        var n = (t = i.get(e.lid)) != null ? t : [];
        return y(e, n, o, a);
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
          C(e, r)
        );
      });
    }
    function c(e, t) {
      return t === "all" || t === "member"
        ? !0
        : t === "not_joined"
          ? !1
          : t === "owner" || t === "admin"
            ? d(e.role) === t
            : (function () {
                throw Error(
                  "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                    t,
                );
              })();
    }
    function d(e) {
      return e === "CREATOR" ? "owner" : e === "ADMIN" ? "admin" : "member";
    }
    function m(e) {
      return e === "all" || e === "not_joined";
    }
    function p(t, n, r, o, a, i) {
      (o === void 0 && (o = ""),
        a === void 0 && (a = null),
        i === void 0 && (i = "all"));
      var l = function (a) {
          return e(!0, t, n, o, a).filter(function (e) {
            return c(e, i);
          }).length;
        },
        s = function (r) {
          return m(i) ? u(!0, n, t, o, r).length : 0;
        },
        d = new Map();
      for (var p of r) d.set(p, l(p) + s(p));
      var _ = e(!0, t, n, o, a),
        f = u(!0, n, t, o, a).length,
        g = function (t) {
          return _.filter(function (e) {
            return c(e, t);
          }).length;
        };
      return {
        memberCount: _.length,
        memberTagCounts: d,
        notJoinedCount: f,
        statusCounts: {
          admin: g("admin"),
          all: _.length + f,
          member: g("member"),
          not_joined: f,
          owner: g("owner"),
        },
      };
    }
    function _(e) {
      return e.flatMap(function (e) {
        var t = e.emailAddress;
        return t != null &&
          o("WAWebOrgAdminInviteMembersUtils").isWellFormedOrgEmail(t)
          ? [t]
          : [];
      });
    }
    function f(e) {
      var t = new Map();
      for (var n of e)
        n.memberLID != null &&
          n.emailAddress != null &&
          t.set(n.memberLID, n.emailAddress);
      return t;
    }
    function g(e) {
      var t = new Map();
      for (var n of e)
        n.memberLID != null &&
          n.phoneNumber != null &&
          t.set(n.memberLID, n.phoneNumber);
      return t;
    }
    function h(e) {
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
    function y(e, t, n, r) {
      var a,
        i =
          o(
            "WAWebOrgAdminDirectoryMemberDisplay",
          ).orgAdminDirectoryMemberMatchesQuery(e, n) ||
          ((a = e.memberTag) == null
            ? void 0
            : a.toLocaleLowerCase().includes(n)) === !0 ||
          t.some(function (e) {
            return C(e, n);
          }),
        l =
          r == null ||
          e.memberTag === r ||
          t.some(function (e) {
            return e.memberTag === r;
          });
      return i && l;
    }
    function C(e, t) {
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
      (l.orgAdminMemberMatchesStatus = c),
      (l.getOrgAdminMemberStatus = d),
      (l.orgAdminRosterOnlyEntriesMatchStatus = m),
      (l.getWAWebOrgAdminPeopleCounts = p),
      (l.getWAWebOrgAdminRosterInviteEmails = _),
      (l.getWAWebOrgAdminRosterEmailsByMemberLID = f),
      (l.getWAWebOrgAdminRosterPhoneNumbersByMemberLID = g));
  },
  98,
);
