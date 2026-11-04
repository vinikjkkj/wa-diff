__d(
  "WAWebOrgAdminPeopleTableSort",
  [
    "WAWebOrgAdminManagedRosterUtils",
    "WAWebOrgAdminPeople",
    "WAWebOrgAdminPersonName",
    "WAWebOrgAdminTableSort",
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
          return h(e, t, n);
        },
        function (e) {
          return g(e, n);
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
    function f(e) {
      return e == null ? null : o("WAWebPhoneUtils").formatPhone(e);
    }
    function g(e, t) {
      return (function (e) {
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          e.type === "member" &&
          "member" in e
        ) {
          var n = e.member;
          return o("WAWebOrgAdminPersonName").getOrgAdminPersonName(
            n,
            t.rosterDetailsByMemberLID.get(n.lid),
          );
        }
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          e.type === "roster" &&
          "entry" in e
        ) {
          var r = e.entry;
          return o("WAWebOrgAdminPersonName").getOrgAdminPersonName(null, r);
        }
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            e,
        );
      })(e);
    }
    function h(e, t, n) {
      var r,
        o = y(e, n);
      return t === "name"
        ? g(e, n)
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
    function y(e, t) {
      return (function (e) {
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          e.type === "member" &&
          "member" in e
        ) {
          var n = e.member;
          return C(n, t.rosterDetailsByMemberLID.get(n.lid));
        }
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          e.type === "roster" &&
          "entry" in e
        ) {
          var r = e.entry;
          return {
            email: r.emailAddress,
            lid: r.memberLID,
            memberTag: r.memberTag,
            phoneNumber: r.phoneNumber,
            secondaryMemberTag: r.secondaryMemberTag,
            status: b(r, t.showInviteStatus),
          };
        }
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            e,
        );
      })(e);
    }
    function C(e, t) {
      var n = o("WAWebOrgAdminPeople").getOrgAdminMemberPerson(e, t);
      return {
        email: n.emailAddress,
        lid: e.lid,
        memberTag: n.memberTag,
        phoneNumber: n.phoneNumber,
        secondaryMemberTag: n.secondaryMemberTag,
        status: v(e.role),
      };
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
      (l.formatOrgAdminPhoneNumber = f));
  },
  98,
);
