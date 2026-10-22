__d(
  "WAWebOrgAdminGroupMembers",
  [
    "fbt",
    "WAWebFbtCommon",
    "WAWebL10NAccentFold",
    "WAWebPhoneNumberSearch",
    "WAWebPhoneUtils",
    "WAWebUsernameTypes",
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
      var t,
        n,
        r = e.isViewer ? e.label.toString() : "";
      return o("WAWebL10NAccentFold").accentFold(
        r +
          " " +
          ((t = e.name) != null ? t : "") +
          " " +
          ((n = e.memberTag) != null ? n : ""),
      );
    }
    function f(e) {
      return e.isViewer ? 0 : 1;
    }
    function g(e, t, n) {
      var o,
        a = e.lid,
        i = a == null ? null : n.directoryMemberByLID.get(a),
        l = a == null ? null : n.identityByLID.get(a),
        s = a != null && a === n.viewerLID,
        u = h(i, l, n.usernamesEnabled);
      return {
        isAdmin: e.role === "ADMIN" || e.role === "SUPERADMIN",
        isViewer: s,
        key: (a != null ? a : "") + ":" + t.toString(),
        label: s ? r("WAWebFbtCommon")("You") : y(a, u, n.identitiesLoading),
        memberTag: i == null ? void 0 : i.memberTag,
        name: u,
        participant: e,
        phoneNumber:
          (o = l == null ? void 0 : l.phoneNumber) != null
            ? o
            : i == null
              ? void 0
              : i.phoneNumber,
      };
    }
    function h(e, t, n) {
      var r,
        a = e == null ? void 0 : e.displayName;
      if (a != null && a !== "") return a;
      var i = n
        ? (r = o("WAWebUsernameTypes").asMaybeUsername(
            e == null ? void 0 : e.username,
          )) != null
          ? r
          : o("WAWebUsernameTypes").asMaybeUsername(
              t == null ? void 0 : t.username,
            )
        : null;
      return i != null
        ? o("WAWebUsernameTypes").displayUsername(i)
        : (t == null ? void 0 : t.phoneNumber) == null
          ? null
          : o("WAWebPhoneUtils").formatPhone(t.phoneNumber);
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
