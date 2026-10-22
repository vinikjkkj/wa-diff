__d(
  "WAWebOrgAdminGroupCandidate",
  [
    "fbt",
    "WAPhoneFindCC",
    "WAWebApiContact",
    "WAWebLinkDevicePhoneNumberEntryInputFormatUtils",
    "WAWebOrgAdminDirectoryMemberDisplay",
    "WAWebOrgMemberDisplayName",
    "WAWebPhoneUtils",
    "WAWebWidFactory",
  ],
  function (t, n, r, o, a, i, l, s) {
    function e(e) {
      return {
        directoryMember: e,
        displayName: e.displayName,
        key: "directory:" + e.lid,
        memberTag: e.memberTag,
        source: "directory",
      };
    }
    function u(e) {
      return {
        displayName: e.name,
        key: "roster:" + e.id,
        memberTag: e.memberTag,
        rosterEntry: e,
        source: "roster",
      };
    }
    function c(e) {
      return e.source === "directory"
        ? o("WAWebOrgMemberDisplayName").getOrgMemberNameWithUsernameFallback(
            e.displayName,
            e.directoryMember.username,
            e.directoryMember.phoneNumber == null
              ? null
              : o("WAWebPhoneUtils").formatPhone(e.directoryMember.phoneNumber),
          )
        : e.displayName;
    }
    function d(e) {
      if (e.source === "directory")
        return o(
          "WAWebOrgAdminDirectoryMemberDisplay",
        ).getOrgAdminDirectoryMemberIdentityLabel(e.directoryMember);
      var t = e.rosterEntry,
        n = t.emailAddress,
        r = t.phoneNumber,
        a = C(r);
      return n != null && n !== ""
        ? a == null
          ? n
          : n + " \xB7 " + o("WAWebPhoneUtils").formatPhone(a)
        : a == null
          ? null
          : o("WAWebPhoneUtils").formatPhone(a);
    }
    function m(e) {
      return e.memberTag != null && e.memberTag !== ""
        ? e.memberTag
        : e.source === "directory"
          ? o(
              "WAWebOrgAdminDirectoryMemberDisplay",
            ).getOrgAdminDirectoryMemberRoleLabel(e.directoryMember.role)
          : s._(/*BTDS*/ "Uploaded");
    }
    function p(e) {
      return e.source === "directory" ? e.directoryMember.lid : null;
    }
    function _(e) {
      return e.source === "directory"
        ? e.directoryMember.lid
        : e.rosterEntry.memberLID;
    }
    function f(e) {
      if (e.source !== "roster") return null;
      var t = e.rosterEntry,
        n = t.emailAddress,
        r = t.id;
      return n == null || n === "" ? null : r;
    }
    function g(e, t) {
      if (e.source === "directory")
        return o(
          "WAWebOrgAdminDirectoryMemberDisplay",
        ).orgAdminDirectoryMemberMatchesQuery(e.directoryMember, t);
      if (t === "") return !0;
      var n = e.rosterEntry;
      if (
        [n.name, n.memberTag, n.emailAddress].some(function (e) {
          return (
            (e == null ? void 0 : e.toLocaleLowerCase().includes(t)) === !0
          );
        })
      )
        return !0;
      var r = o(
          "WAWebOrgAdminDirectoryMemberDisplay",
        ).normalizeOrgAdminPhoneSearchValue(t),
        a = C(n.phoneNumber);
      return (
        a != null &&
        r !== "" &&
        /^[\t-\r \(\)\+\x2D\.0-9\xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]+$/.test(
          t,
        ) &&
        a.includes(r)
      );
    }
    function h(e) {
      return _(e) != null || f(e) != null;
    }
    function y(e, t, n) {
      if (e.memberLID != null) return e.memberLID === t;
      var r = C(e.phoneNumber);
      if (r == null) return !1;
      if (r === n) return !0;
      try {
        var a;
        return (
          ((a = o("WAWebApiContact").getCurrentLid(
            o("WAWebWidFactory").createUserWidOrThrow(r),
          )) == null
            ? void 0
            : a.user) === t
        );
      } catch (e) {
        return !1;
      }
    }
    function C(e) {
      if (e == null) return null;
      var t = e
        .trim()
        .replace(/[\s().-]/g, "")
        .replace(/^(?:\+|00)/, "");
      if (!/^[1-9][0-9]{6,14}$/.test(t)) return null;
      var n = o("WAPhoneFindCC").findCC(t);
      if (n === "") return null;
      var r = t.substring(n.length);
      return o(
        "WAWebLinkDevicePhoneNumberEntryInputFormatUtils",
      ).isPhoneNumberValid(Number(n), r)
        ? t
        : null;
    }
    ((l.directoryMemberToGroupCandidate = e),
      (l.rosterEntryToGroupCandidate = u),
      (l.getOrgAdminGroupCandidateDisplayName = c),
      (l.getOrgAdminGroupCandidateIdentityLabel = d),
      (l.getOrgAdminGroupCandidateLabel = m),
      (l.getOrgAdminGroupCandidateProfileLID = p),
      (l.getOrgAdminGroupCandidateLID = _),
      (l.getOrgAdminGroupCandidateEmailInviteID = f),
      (l.orgAdminGroupCandidateMatchesQuery = g),
      (l.canAddOrgAdminGroupCandidate = h),
      (l.isCurrentUserOrgAdminRosterEntry = y),
      (l.normalizeOrgAdminRosterPhoneNumber = C));
  },
  226,
);
