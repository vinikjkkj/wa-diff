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
      if ((a === void 0 && (a = null), !e || I(r, o, a))) return t;
      var i = S(n);
      return t.filter(function (e) {
        var t;
        return R(e, (t = i.get(e.lid)) != null ? t : [], r, o, a);
      });
    }
    function s(e, t, n, r, o, a) {
      if (!t || (o === "" && a == null)) return [];
      var i = S(n),
        l = new Set(
          e.map(function (e) {
            return e.lid;
          }),
        );
      return r.filter(function (e) {
        var t;
        if (l.has(e.lid)) return !1;
        var n = (t = i.get(e.lid)) != null ? t : [];
        return R(e, n, o, a, null);
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
          (e.memberLID == null || !i.has(e.memberLID)) && k(e, o, a) && D(e, r)
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
    function p(e) {
      return m(e) === "not_invited" && e.status !== "JOINED";
    }
    function _(e, t) {
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
    function f(e, t) {
      return t === "all" || t === "not_joined"
        ? !0
        : t === "member" || t === "owner" || t === "admin"
          ? !1
          : t === "not_invited"
            ? p(e)
            : t === "invited" || t === "invite_expired"
              ? m(e) === t
              : (function () {
                  throw Error(
                    "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                      t,
                  );
                })();
    }
    function g(t, n, r, o, a, i, l, s) {
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
            return f(e, i);
          }).length;
        },
        p = function (t, n) {
          return d(t, n) + m(t, n);
        },
        _ = T(r, function (e) {
          return p(e, s);
        }),
        g = T(l, function (e) {
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
              return f(e, t);
            }).length
          );
        };
      return {
        memberCount: h.length,
        memberTagCounts: _,
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
    function h(e) {
      return e.filter(function (e) {
        return (
          p(e) &&
          e.emailAddress != null &&
          o("WAWebOrgAdminInviteMembersUtils").isWellFormedOrgEmail(
            e.emailAddress,
          )
        );
      });
    }
    function y(e) {
      var t = m(e);
      return (
        (t === "invite_expired" || t === "invited") &&
        e.emailAddress != null &&
        o("WAWebOrgAdminInviteMembersUtils").isWellFormedOrgEmail(
          e.emailAddress,
        )
      );
    }
    function C(e) {
      var t = new Map();
      for (var n of e)
        n.memberLID != null &&
          n.emailAddress != null &&
          t.set(n.memberLID, n.emailAddress);
      return t;
    }
    function b(e) {
      var t = new Map();
      for (var n of e)
        n.memberLID != null &&
          n.phoneNumber != null &&
          t.set(n.memberLID, n.phoneNumber);
      return t;
    }
    function v(e) {
      var t = new Map();
      for (var n of e)
        n.memberLID != null &&
          n.secondaryMemberTag != null &&
          t.set(n.memberLID, n.secondaryMemberTag);
      return t;
    }
    function S(e) {
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
    function R(e, t, n, r, a) {
      var i,
        l =
          o(
            "WAWebOrgAdminDirectoryMemberDisplay",
          ).orgAdminDirectoryMemberMatchesQuery(e, n) ||
          ((i = e.memberTag) == null
            ? void 0
            : i.toLocaleLowerCase().includes(n)) === !0 ||
          t.some(function (e) {
            return D(e, n);
          });
      return l && L(e, t, r) && E(t, a);
    }
    function L(e, t, n) {
      return (
        n == null ||
        e.memberTag === n ||
        t.some(function (e) {
          return e.memberTag === n;
        })
      );
    }
    function E(e, t) {
      return (
        t == null ||
        e.some(function (e) {
          return e.secondaryMemberTag === t;
        })
      );
    }
    function k(e, t, n) {
      return (
        (t == null || e.memberTag === t) &&
        (n == null || e.secondaryMemberTag === n)
      );
    }
    function I(e, t, n) {
      return e === "" && t == null && n == null;
    }
    function T(e, t) {
      return new Map(
        e.map(function (e) {
          return [e, t(e)];
        }),
      );
    }
    function D(e, t) {
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
      (l.isOrgAdminRosterEntryNeverInvited = p),
      (l.isOrgAdminPeopleStatusOffered = _),
      (l.orgAdminRosterOnlyEntryMatchesStatus = f),
      (l.getWAWebOrgAdminPeopleCounts = g),
      (l.getWAWebOrgAdminRosterInvitees = h),
      (l.canResendOrgAdminRosterInvite = y),
      (l.getWAWebOrgAdminRosterEmailsByMemberLID = C),
      (l.getWAWebOrgAdminRosterPhoneNumbersByMemberLID = b),
      (l.getWAWebOrgAdminRosterSecondaryMemberTagsByMemberLID = v));
  },
  98,
);
