__d(
  "WAWebOrgAdminMemberTagNames",
  ["fbt", "WAWebOrgAdminMemberTagOptions"],
  function (t, n, r, o, a, i, l, s) {
    var e = {
      changed: !1,
      changes: {},
      errors: { memberTagName: null, secondaryMemberTagName: null },
      invalid: !1,
    };
    function u(e) {
      var t, n;
      return {
        memberTagName: (t = e.memberTagName) != null ? t : "",
        secondaryMemberTagName: (n = e.secondaryMemberTagName) != null ? n : "",
      };
    }
    function c(t, n) {
      var r,
        a = o("WAWebOrgAdminMemberTagOptions").normalizeMemberTagOption(
          t.memberTagName,
        ),
        i = o("WAWebOrgAdminMemberTagOptions").normalizeMemberTagOption(
          t.secondaryMemberTagName,
        ),
        l = u(n),
        s = {};
      if (
        (a !== l.memberTagName && (s.memberTagName = a),
        i !== l.secondaryMemberTagName && (s.secondaryMemberTagName = i),
        Object.keys(s).length === 0)
      )
        return e;
      var c = {
        memberTagName: p(a),
        secondaryMemberTagName: (r = p(i)) != null ? r : _(a, i),
      };
      return {
        changed: !0,
        changes: s,
        errors: c,
        invalid: c.memberTagName != null || c.secondaryMemberTagName != null,
      };
    }
    function d(e) {
      var t = {};
      return (
        e.memberTagName != null && (t.memberTagName = m(e.memberTagName)),
        e.secondaryMemberTagName != null &&
          (t.secondaryMemberTagName = m(e.secondaryMemberTagName)),
        t
      );
    }
    function m(e) {
      return e === "" ? null : e;
    }
    function p(e) {
      return o("WAWebOrgAdminMemberTagOptions").hasBlockedMemberTagCharacters(e)
        ? s._(
            /*BTDS*/ "Remove unsupported or invisible characters from this name.",
          )
        : o("WAWebOrgAdminMemberTagOptions").isMemberTagOptionTooLong(e)
          ? s._(/*BTDS*/ "Member tag names can be up to 100 characters.")
          : null;
    }
    function _(e, t) {
      return t === "" ||
        o("WAWebOrgAdminMemberTagOptions").getCanonicalMemberTagOption(e) !==
          o("WAWebOrgAdminMemberTagOptions").getCanonicalMemberTagOption(t)
        ? null
        : s._(/*BTDS*/ "Use a different name for each member tag.");
    }
    ((l.createOrgAdminMemberTagNameDrafts = u),
      (l.getOrgAdminMemberTagNameEdit = c),
      (l.getSavedOrgAdminMemberTagNames = d));
  },
  226,
);
