__d(
  "WAWebOrgAdminManagedRosterUtils",
  [
    "WAWebOrgAdminDirectoryMemberDisplay",
    "WAWebOrgAdminInviteMembersUtils",
    "WAWebPhoneUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t, n, r, o, a) {
      if ((a === void 0 && (a = null), !e || R(r, o, a))) return t;
      var i = y(n);
      return t.filter(function (e) {
        var t;
        return C(e, (t = i.get(e.lid)) != null ? t : [], r, o, a);
      });
    }
    function s(e, t, n, r, o, a) {
      if (!t || (o === "" && a == null)) return [];
      var i = y(n),
        l = new Set(
          e.map(function (e) {
            return e.lid;
          }),
        );
      return r.filter(function (e) {
        var t;
        if (l.has(e.lid)) return !1;
        var n = (t = i.get(e.lid)) != null ? t : [];
        return C(e, n, o, a, null);
      });
    }
    function u(e, t, n, r, o, a) {
      if ((a === void 0 && (a = null), !e)) return [];
      var i = new Set(
        n.map(function (e) {
          return e.lid;
        }),
      );
      return t.filter(function (e) {
        return (
          (e.memberLID == null || !i.has(e.memberLID)) && S(e, o, a) && E(e, r)
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
    function p(t, n, r, o, a, i, l, s) {
      (o === void 0 && (o = ""),
        a === void 0 && (a = null),
        i === void 0 && (i = "all"),
        l === void 0 && (l = []),
        s === void 0 && (s = null));
      var d = function (a, l) {
          return e(!0, t, n, o, a, l).filter(function (e) {
            return c(e, i);
          }).length;
        },
        p = function (r, a) {
          return m(i) ? u(!0, n, t, o, r, a).length : 0;
        },
        _ = function (t, n) {
          return d(t, n) + p(t, n);
        },
        f = L(r, function (e) {
          return _(e, s);
        }),
        g = L(l, function (e) {
          return _(a, e);
        }),
        h = e(!0, t, n, o, a, s),
        y = u(!0, n, t, o, a, s).length,
        C = function (t) {
          return h.filter(function (e) {
            return c(e, t);
          }).length;
        };
      return {
        memberCount: h.length,
        memberTagCounts: f,
        notJoinedCount: y,
        secondaryMemberTagCounts: g,
        statusCounts: {
          admin: C("admin"),
          all: h.length + y,
          member: C("member"),
          not_joined: y,
          owner: C("owner"),
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
      for (var n of e)
        n.memberLID != null &&
          n.secondaryMemberTag != null &&
          t.set(n.memberLID, n.secondaryMemberTag);
      return t;
    }
    function y(e) {
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
    function C(e, t, n, r, a) {
      var i,
        l =
          o(
            "WAWebOrgAdminDirectoryMemberDisplay",
          ).orgAdminDirectoryMemberMatchesQuery(e, n) ||
          ((i = e.memberTag) == null
            ? void 0
            : i.toLocaleLowerCase().includes(n)) === !0 ||
          t.some(function (e) {
            return E(e, n);
          });
      return l && b(e, t, r) && v(t, a);
    }
    function b(e, t, n) {
      return (
        n == null ||
        e.memberTag === n ||
        t.some(function (e) {
          return e.memberTag === n;
        })
      );
    }
    function v(e, t) {
      return (
        t == null ||
        e.some(function (e) {
          return e.secondaryMemberTag === t;
        })
      );
    }
    function S(e, t, n) {
      return (
        (t == null || e.memberTag === t) &&
        (n == null || e.secondaryMemberTag === n)
      );
    }
    function R(e, t, n) {
      return e === "" && t == null && n == null;
    }
    function L(e, t) {
      return new Map(
        e.map(function (e) {
          return [e, t(e)];
        }),
      );
    }
    function E(e, t) {
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
      (l.getWAWebOrgAdminRosterPhoneNumbersByMemberLID = g),
      (l.getWAWebOrgAdminRosterSecondaryMemberTagsByMemberLID = h));
  },
  98,
);
