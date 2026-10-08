__d(
  "WAWebOrgAdminDirectoryMemberDisplay",
  [
    "fbt",
    "WALogger",
    "WAWebApiContact",
    "WAWebInitialsFromNameUtils",
    "WAWebUsernameTypes",
    "WAWebWidFactory",
    "WAWebWidFormat",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = 25,
      c = 20,
      d = new WeakMap();
    function m(e, t) {
      return e.slice(0, t ? 0 : c);
    }
    function p(e) {
      var t = y(e);
      return t != null
        ? t.formatted
        : e.username == null || e.username === ""
          ? null
          : o("WAWebUsernameTypes").displayUsername(
              o("WAWebUsernameTypes").asUsername(e.username),
            );
    }
    function _(e, t) {
      var n;
      if (t === "" || e.displayName.toLocaleLowerCase().includes(t)) return !0;
      var r = e.username;
      if (r != null && r !== "") {
        var a = r.toLocaleLowerCase(),
          i = o("WAWebUsernameTypes")
            .displayUsername(o("WAWebUsernameTypes").asUsername(r))
            .toLocaleLowerCase();
        if (a.includes(t) || i.includes(t)) return !0;
      }
      var l = C(t);
      return l === "" ||
        !/^[\t-\r \(\)\+\x2D\.0-9\xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]+$/.test(
          t,
        )
        ? !1
        : [(n = y(e)) == null ? void 0 : n.user, e.phoneNumber].some(
            function (e) {
              return e != null && C(e).includes(l);
            },
          );
    }
    function f(e, t) {
      return e ? !0 : t > 0 ? "indeterminate" : !1;
    }
    function g(e) {
      var t = o("WAWebInitialsFromNameUtils").getInitialsFromNames({
          name: e,
          pushname: null,
          shortName: e.split(" ")[0],
        }),
        n = t.firstInitial,
        r = t.secondInitial;
      return "" + (n != null ? n : "") + (r != null ? r : "");
    }
    function h(e) {
      return e === "CREATOR"
        ? s._(/*BTDS*/ "Owner")
        : e === "ADMIN"
          ? s._(/*BTDS*/ "Admin")
          : s._(/*BTDS*/ "Member");
    }
    function y(t) {
      if (d.has(t)) return d.get(t);
      try {
        var n = o("WAWebApiContact").getPnIfLidIsLatestMapping(
          o("WAWebWidFactory").createUserLidOrThrow(t.lid, "lid"),
        );
        if (n == null) return null;
        var a = {
          formatted: o("WAWebWidFormat").widToFormattedUser(n),
          user: n.user,
        };
        return (d.set(t, a), a);
      } catch (n) {
        return (
          d.set(t, null),
          o("WALogger")
            .WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "Org admin directory member phone lookup failed",
                ])),
            )
            .catching(r("getErrorSafe")(n))
            .sendLogs("org-admin-directory-member-phone-lookup-failed"),
          null
        );
      }
    }
    function C(e) {
      return e.replace(/\D/g, "");
    }
    ((l.ORG_ADMIN_MEMBER_PAGE_SIZE = u),
      (l.getOrgAdminDirectoryMemberTagsForDisplay = m),
      (l.getOrgAdminDirectoryMemberIdentityLabel = p),
      (l.orgAdminDirectoryMemberMatchesQuery = _),
      (l.getOrgAdminDirectoryMemberSelectionState = f),
      (l.getOrgAdminDirectoryMemberInitials = g),
      (l.getOrgAdminDirectoryMemberRoleLabel = h),
      (l.normalizeOrgAdminPhoneSearchValue = C));
  },
  226,
);
