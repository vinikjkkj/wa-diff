__d(
  "WAWebOrgAdminGroupMembers",
  [
    "fbt",
    "WAWebFbtCommon",
    "WAWebL10NAccentFold",
    "WAWebOrgAdminPersonName",
    "WAWebPhoneNumberSearch",
  ],
  function (t, n, r, o, a, i, l, s) {
    function e(e) {
      var t = e.participants;
      return (
        t != null && e.rosterPartial !== !0 && t.length >= e.participantCount
      );
    }
    function u(e, t) {
      return e
        .map(function (e, n) {
          return g(e, n, t);
        })
        .sort(function (e, t) {
          return c(e, t, d);
        });
    }
    function c(e, t, n) {
      var r = n(e) - n(t);
      return r !== 0 ? r : e.label.toString().localeCompare(t.label.toString());
    }
    function d(e) {
      return e.isViewer ? 0 : e.isAdmin ? 1 : 2;
    }
    function m(e, t) {
      var n = o("WAWebL10NAccentFold").accentFold(t.trim()),
        r = o("WAWebPhoneNumberSearch").numberSearch(n);
      return e
        .filter(function (e) {
          return p(e, n, r);
        })
        .sort(function (e, t) {
          return c(e, t, f);
        });
    }
    function p(e, t, n) {
      var r, o;
      if (_(e).includes(t)) return !0;
      var a =
        (r = (o = e.phoneNumber) == null ? void 0 : o.replace(/\D/g, "")) !=
        null
          ? r
          : "";
      return n != null && n !== "" && a.includes(n);
    }
    function _(e) {
      var t = e.isViewer ? e.label.toString() : "";
      return o("WAWebL10NAccentFold").accentFold(
        [t, e.name, e.memberTag, e.secondaryMemberTag].join(" "),
      );
    }
    function f(e) {
      return e.isViewer ? 0 : 1;
    }
    function g(e, t, n) {
      var a = e.lid,
        i = a == null ? null : n.directoryMemberByLID.get(a),
        l = a == null ? null : n.identityByLID.get(a),
        s = a == null ? null : n.rosterDetailsByLID.get(a),
        u = a != null && a === n.viewerLID,
        c = o("WAWebOrgAdminPersonName").getOrgAdminPersonName(i, s, l),
        d = c === "" ? null : c;
      return {
        isAdmin: e.role === "ADMIN" || e.role === "SUPERADMIN",
        isViewer: u,
        key: (a != null ? a : "") + ":" + t.toString(),
        label: u ? r("WAWebFbtCommon")("You") : y(a, d, n.identitiesLoading),
        memberTag: h(i, s),
        name: d,
        participant: e,
        phoneNumber: o("WAWebOrgAdminPersonName").getOrgAdminPersonPhoneNumber(
          i,
          s,
          l,
        ),
        secondaryMemberTag: s == null ? void 0 : s.secondaryMemberTag,
      };
    }
    function h(e, t) {
      var n;
      return (n = e == null ? void 0 : e.memberTag) != null
        ? n
        : t == null
          ? void 0
          : t.memberTag;
    }
    function y(e, t, n) {
      return e == null
        ? s._(/*BTDS*/ "Unknown member")
        : t != null
          ? t
          : n
            ? s._(/*BTDS*/ "Loading member\u2026")
            : s._(/*BTDS*/ "Unknown member");
    }
    ((l.isOrgAdminGroupMemberListComplete = e),
      (l.getOrgAdminGroupMembers = u),
      (l.searchOrgAdminGroupMembers = m));
  },
  226,
);
