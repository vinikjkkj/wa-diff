__d(
  "WAWebOrgAdminPeopleTableSort",
  [
    "WAWebOrgAdminManagedRosterUtils",
    "WAWebOrgAdminPeople",
    "WAWebOrgAdminTableSort",
    "WAWebOrgMemberDisplayName",
    "WAWebPhoneUtils",
  ],
  function (t, n, r, o, a, i, l) {
    var e = -2,
      s = -1,
      u = 0,
      c = 1,
      d = 2,
      m = 3;
    function p(e, t, n) {
      return o("WAWebOrgAdminTableSort").sortOrgAdminTableRows(
        e,
        t,
        function (e, t) {
          return y(e, t, n);
        },
        function (e) {
          return h(e, n);
        },
      );
    }
    function _(e) {
      return (function (e) {
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          e.type === "member" &&
          "member" in e
        ) {
          var t = e.member;
          return o("WAWebOrgAdminPeople").getOrgAdminMemberPersonKey(t.lid);
        }
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          e.type === "roster" &&
          "entry" in e
        ) {
          var n = e.entry;
          return o("WAWebOrgAdminPeople").getOrgAdminRosterPersonKey(n.id);
        }
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            e,
        );
      })(e);
    }
    function f(e, t) {
      return o(
        "WAWebOrgMemberDisplayName",
      ).getOrgMemberNameWithUsernameFallback(
        e.displayName,
        e.username,
        g(t != null ? t : e.phoneNumber),
      );
    }
    function g(e) {
      return e == null ? null : o("WAWebPhoneUtils").formatPhone(e);
    }
    function h(e, t) {
      return (function (e) {
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          e.type === "member" &&
          "member" in e
        ) {
          var n = e.member;
          return f(n, t.phoneNumbersByMemberLID.get(n.lid));
        }
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          e.type === "roster" &&
          "entry" in e
        ) {
          var r = e.entry;
          return r.name;
        }
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            e,
        );
      })(e);
    }
    function y(e, t, n) {
      var r,
        o = C(e, n);
      return t === "name"
        ? h(e, n)
        : t === "phone"
          ? o.phoneNumber
          : t === "email"
            ? o.email
            : t === "member_tag"
              ? o.memberTag
              : t === "secondary_member_tag"
                ? o.secondaryMemberTag
                : t === "status"
                  ? o.status
                  : t === "groups"
                    ? o.lid == null
                      ? null
                      : (r = n.groupsByMemberLID) == null ||
                          (r = r.get(o.lid)) == null ||
                          (r = r[0]) == null
                        ? void 0
                        : r.subject
                    : (function () {
                        throw Error(
                          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                            t,
                        );
                      })();
    }
    function C(e, t) {
      return (function (e) {
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          e.type === "member" &&
          "member" in e
        ) {
          var n,
            r,
            o = e.member;
          return {
            email: t.emailsByMemberLID.get(o.lid),
            lid: o.lid,
            memberTag: o.memberTag,
            phoneNumber:
              (n = t.phoneNumbersByMemberLID.get(o.lid)) != null
                ? n
                : o.phoneNumber,
            secondaryMemberTag:
              (r = t.secondaryMemberTagsByMemberLID) == null
                ? void 0
                : r.get(o.lid),
            status: v(o.role),
          };
        }
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          e.type === "roster" &&
          "entry" in e
        ) {
          var a = e.entry;
          return {
            email: a.emailAddress,
            lid: a.memberLID,
            memberTag: a.memberTag,
            phoneNumber: a.phoneNumber,
            secondaryMemberTag: a.secondaryMemberTag,
            status: b(a, t.showInviteStatus),
          };
        }
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            e,
        );
      })(e);
    }
    function b(t, n) {
      return t.memberLID != null
        ? null
        : (function (t) {
            return t === "invite_expired" ? e : t === "invited" ? s : u;
          })(
            n
              ? o(
                  "WAWebOrgAdminManagedRosterUtils",
                ).getOrgAdminRosterInviteStatus(t)
              : null,
          );
    }
    function v(e) {
      return e === "CREATOR" ? m : e === "ADMIN" ? d : c;
    }
    ((l.sortOrgAdminPeopleRows = p),
      (l.getOrgAdminPeopleRowKey = _),
      (l.getOrgAdminMemberName = f),
      (l.formatOrgAdminPhoneNumber = g));
  },
  98,
);
