__d(
  "WAWebOrgAdminManagedRosterUtils",
  [
    "WATimeUtils",
    "WAWebOrgAdminDirectoryMemberDisplay",
    "WAWebOrgAdminInviteMembersUtils",
    "WAWebPhoneUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t, n, r, o, a) {
      if ((a === void 0 && (a = null), !e || E(r, o, a))) return t;
      var i = b(n);
      return t.filter(function (e) {
        var t;
        return v(e, (t = i.get(e.lid)) != null ? t : [], r, o, a);
      });
    }
    function s(e, t, n, r, o, a) {
      if (!t || (o === "" && a == null)) return [];
      var i = b(n),
        l = new Set(
          e.map(function (e) {
            return e.lid;
          }),
        );
      return r.filter(function (e) {
        var t;
        if (l.has(e.lid)) return !1;
        var n = (t = i.get(e.lid)) != null ? t : [];
        return v(e, n, o, a, null);
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
          (e.memberLID == null || !i.has(e.memberLID)) && L(e, o, a) && I(e, r)
        );
      });
    }
    function c(e, t) {
      return t === "all" || t === "member"
        ? !0
        : t === "not_joined" ||
            t === "invited" ||
            t === "invite_expired" ||
            t === "not_invited"
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
      var t;
      return e.memberLID != null
        ? null
        : e.status === "INVITED" || e.status === "EMAIL_SENT"
          ? ((t = e.inviteExpiry) != null ? t : 0) > o("WATimeUtils").unixTime()
            ? "invited"
            : "invite_expired"
          : "not_invited";
    }
    function p(e, t) {
      return e === "all" || e === "member" || e === "owner" || e === "admin"
        ? !0
        : e === "not_joined"
          ? !t
          : e === "invited" || e === "invite_expired" || e === "not_invited"
            ? t
            : (function () {
                throw Error(
                  "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                    e,
                );
              })();
    }
    function _(e, t) {
      return t === "all" || t === "not_joined"
        ? !0
        : t === "member" || t === "owner" || t === "admin"
          ? !1
          : t === "invited" || t === "invite_expired" || t === "not_invited"
            ? m(e) === t
            : (function () {
                throw Error(
                  "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                    t,
                );
              })();
    }
    function f(t, n, r, o, a, i, l, s) {
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
        m = function (r, a) {
          return u(!0, n, t, o, r, a).filter(function (e) {
            return _(e, i);
          }).length;
        },
        p = function (t, n) {
          return d(t, n) + m(t, n);
        },
        f = k(r, function (e) {
          return p(e, s);
        }),
        g = k(l, function (e) {
          return p(a, e);
        }),
        h = e(!0, t, n, o, a, s),
        y = u(!0, n, t, o, a, s),
        C = y.length,
        b = function (t) {
          return (
            h.filter(function (e) {
              return c(e, t);
            }).length +
            y.filter(function (e) {
              return _(e, t);
            }).length
          );
        };
      return {
        memberCount: h.length,
        memberTagCounts: f,
        notJoinedCount: C,
        secondaryMemberTagCounts: g,
        statusCounts: {
          admin: b("admin"),
          all: h.length + C,
          invite_expired: b("invite_expired"),
          invited: b("invited"),
          member: b("member"),
          not_invited: b("not_invited"),
          not_joined: C,
          owner: b("owner"),
        },
      };
    }
    function g(e) {
      return e.flatMap(function (e) {
        var t = e.emailAddress;
        return t != null &&
          o("WAWebOrgAdminInviteMembersUtils").isWellFormedOrgEmail(t)
          ? [t]
          : [];
      });
    }
    function h(e) {
      var t = new Map();
      for (var n of e)
        n.memberLID != null &&
          n.emailAddress != null &&
          t.set(n.memberLID, n.emailAddress);
      return t;
    }
    function y(e) {
      var t = new Map();
      for (var n of e)
        n.memberLID != null &&
          n.phoneNumber != null &&
          t.set(n.memberLID, n.phoneNumber);
      return t;
    }
    function C(e) {
      var t = new Map();
      for (var n of e)
        n.memberLID != null &&
          n.secondaryMemberTag != null &&
          t.set(n.memberLID, n.secondaryMemberTag);
      return t;
    }
    function b(e) {
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
    function v(e, t, n, r, a) {
      var i,
        l =
          o(
            "WAWebOrgAdminDirectoryMemberDisplay",
          ).orgAdminDirectoryMemberMatchesQuery(e, n) ||
          ((i = e.memberTag) == null
            ? void 0
            : i.toLocaleLowerCase().includes(n)) === !0 ||
          t.some(function (e) {
            return I(e, n);
          });
      return l && S(e, t, r) && R(t, a);
    }
    function S(e, t, n) {
      return (
        n == null ||
        e.memberTag === n ||
        t.some(function (e) {
          return e.memberTag === n;
        })
      );
    }
    function R(e, t) {
      return (
        t == null ||
        e.some(function (e) {
          return e.secondaryMemberTag === t;
        })
      );
    }
    function L(e, t, n) {
      return (
        (t == null || e.memberTag === t) &&
        (n == null || e.secondaryMemberTag === n)
      );
    }
    function E(e, t, n) {
      return e === "" && t == null && n == null;
    }
    function k(e, t) {
      return new Map(
        e.map(function (e) {
          return [e, t(e)];
        }),
      );
    }
    function I(e, t) {
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
      (l.getOrgAdminRosterInviteStatus = m),
      (l.isOrgAdminPeopleStatusOffered = p),
      (l.orgAdminRosterOnlyEntryMatchesStatus = _),
      (l.getWAWebOrgAdminPeopleCounts = f),
      (l.getWAWebOrgAdminRosterInviteEmails = g),
      (l.getWAWebOrgAdminRosterEmailsByMemberLID = h),
      (l.getWAWebOrgAdminRosterPhoneNumbersByMemberLID = y),
      (l.getWAWebOrgAdminRosterSecondaryMemberTagsByMemberLID = C));
  },
  98,
);
