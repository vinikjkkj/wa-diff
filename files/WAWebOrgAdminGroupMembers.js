__d(
  "WAWebOrgAdminGroupMembers",
  [
    "fbt",
    "WAWebL10NAccentFold",
    "WAWebPhoneNumberSearch",
    "WAWebPhoneUtils",
    "WAWebUsernameTypes",
  ],
  function (t, n, r, o, a, i, l, s) {
    function e(e, t) {
      return e
        .map(function (e, n) {
          return f(e, n, t);
        })
        .sort(function (e, t) {
          return u(e, t, c);
        });
    }
    function u(e, t, n) {
      var r = n(e) - n(t);
      return r !== 0 ? r : e.label.toString().localeCompare(t.label.toString());
    }
    function c(e) {
      return e.isViewer ? 0 : e.isAdmin ? 1 : 2;
    }
    function d(e, t) {
      var n = o("WAWebL10NAccentFold").accentFold(t.trim()),
        r = o("WAWebPhoneNumberSearch").numberSearch(n);
      return e
        .filter(function (e) {
          return m(e, n, r);
        })
        .sort(function (e, t) {
          return u(e, t, _);
        });
    }
    function m(e, t, n) {
      var r, o;
      if (p(e).includes(t)) return !0;
      var a =
        (r = (o = e.phoneNumber) == null ? void 0 : o.replace(/\D/g, "")) !=
        null
          ? r
          : "";
      return n != null && n !== "" && a.includes(n);
    }
    function p(e) {
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
    function _(e) {
      return e.isViewer ? 0 : 1;
    }
    function f(e, t, n) {
      var r,
        o = e.lid,
        a = o == null ? null : n.directoryMemberByLID.get(o),
        i = o == null ? null : n.identityByLID.get(o),
        l = o != null && o === n.viewerLID,
        u = g(a, i, n.usernamesEnabled);
      return {
        isAdmin: e.role === "ADMIN" || e.role === "SUPERADMIN",
        isViewer: l,
        key: (o != null ? o : "") + ":" + t.toString(),
        label: l ? s._(/*BTDS*/ "You") : h(o, u, n.identitiesLoading),
        memberTag: a == null ? void 0 : a.memberTag,
        name: u,
        participant: e,
        phoneNumber:
          (r = i == null ? void 0 : i.phoneNumber) != null
            ? r
            : a == null
              ? void 0
              : a.phoneNumber,
      };
    }
    function g(e, t, n) {
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
    function h(e, t, n) {
      return e == null
        ? s._(/*BTDS*/ "Unknown member")
        : t != null
          ? t
          : n
            ? s._(/*BTDS*/ "Loading member\u2026")
            : s._(/*BTDS*/ "Unknown member");
    }
    ((l.getOrgAdminGroupMembers = e), (l.searchOrgAdminGroupMembers = d));
  },
  226,
);
