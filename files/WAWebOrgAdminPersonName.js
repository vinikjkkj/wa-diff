__d(
  "WAWebOrgAdminPersonName",
  [
    "WAWebOrgAdminDirectoryMemberDisplay",
    "WAWebOrgMemberDisplayName",
    "WAWebPhoneUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t, n) {
      var r,
        a,
        i =
          (r = o("WAWebOrgMemberDisplayName").resolveWAWebOrgMemberDisplayName({
            memberName: e == null ? void 0 : e.displayName.trim(),
            pushName: null,
            savedName: o("WAWebOrgMemberDisplayName")
              .getOrgMemberFullName(
                (a = t == null ? void 0 : t.name) != null ? a : "",
                t == null ? void 0 : t.lastName,
              )
              .trim(),
          })) != null
            ? r
            : "",
        l = s(e, t, n);
      return o(
        "WAWebOrgMemberDisplayName",
      ).getOrgMemberNameWithUsernameFallback(
        i,
        (e == null ? void 0 : e.username) != null && e.username !== ""
          ? e.username
          : n == null
            ? void 0
            : n.username,
        l == null ? null : o("WAWebPhoneUtils").formatPhone(l),
      );
    }
    function s(e, t, n) {
      var r, a, i;
      return (r =
        (a =
          (i = t == null ? void 0 : t.phoneNumber) != null
            ? i
            : e == null
              ? void 0
              : e.phoneNumber) != null
          ? a
          : n == null
            ? void 0
            : n.phoneNumber) != null
        ? r
        : e == null
          ? null
          : o(
              "WAWebOrgAdminDirectoryMemberDisplay",
            ).getOrgAdminDirectoryMemberMappedPhoneNumber(e);
    }
    ((l.getOrgAdminPersonName = e), (l.getOrgAdminPersonPhoneNumber = s));
  },
  98,
);
