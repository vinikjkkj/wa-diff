__d(
  "WAWebOrgAdminPeopleTableSort",
  [
    "WAWebOrgAdminPeople",
    "WAWebOrgAdminTableSort",
    "WAWebOrgMemberDisplayName",
    "WAWebPhoneUtils",
  ],
  function (t, n, r, o, a, i, l) {
    var e = 0,
      s = 1,
      u = 2,
      c = 3;
    function d(e, t, n) {
      return o("WAWebOrgAdminTableSort").sortOrgAdminTableRows(
        e,
        t,
        function (e, t) {
          return g(e, t, n);
        },
        function (e) {
          return f(e, n);
        },
      );
    }
    function m(e) {
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
    function p(e, t) {
      return o(
        "WAWebOrgMemberDisplayName",
      ).getOrgMemberNameWithUsernameFallback(
        e.displayName,
        e.username,
        _(t != null ? t : e.phoneNumber),
      );
    }
    function _(e) {
      return e == null ? null : o("WAWebPhoneUtils").formatPhone(e);
    }
    function f(e, t) {
      return (function (e) {
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          e.type === "member" &&
          "member" in e
        ) {
          var n = e.member;
          return p(n, t.phoneNumbersByMemberLID.get(n.lid));
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
    function g(e, t, n) {
      var r,
        o = h(e, n);
      return t === "name"
        ? f(e, n)
        : t === "phone"
          ? o.phoneNumber
          : t === "email"
            ? o.email
            : t === "member_tag"
              ? o.memberTag
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
    function h(t, n) {
      return (function (t) {
        if (
          ((typeof t == "object" && t !== null) || typeof t == "function") &&
          t.type === "member" &&
          "member" in t
        ) {
          var r,
            o = t.member;
          return {
            email: n.emailsByMemberLID.get(o.lid),
            lid: o.lid,
            memberTag: o.memberTag,
            phoneNumber:
              (r = n.phoneNumbersByMemberLID.get(o.lid)) != null
                ? r
                : o.phoneNumber,
            status: y(o.role),
          };
        }
        if (
          ((typeof t == "object" && t !== null) || typeof t == "function") &&
          t.type === "roster" &&
          "entry" in t
        ) {
          var a = t.entry;
          return {
            email: a.emailAddress,
            lid: a.memberLID,
            memberTag: a.memberTag,
            phoneNumber: a.phoneNumber,
            status: a.memberLID == null ? e : null,
          };
        }
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            t,
        );
      })(t);
    }
    function y(e) {
      return e === "CREATOR" ? c : e === "ADMIN" ? u : s;
    }
    ((l.sortOrgAdminPeopleRows = d),
      (l.getOrgAdminPeopleRowKey = m),
      (l.getOrgAdminMemberName = p),
      (l.formatOrgAdminPhoneNumber = _));
  },
  98,
);
