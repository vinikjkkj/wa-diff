__d(
  "WAWebOrgContactIdentity",
  ["WAWebOrgMemberContactName"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WAWebOrgMemberContactName").getKnownOrgMember(e),
        n = t == null ? void 0 : t.primaryOrgId;
      return t == null || n == null
        ? null
        : {
            firstName: t.firstName.trim(),
            fullName: t.memberName.trim(),
            primaryOrgId: n,
            primaryOrgMemberTag: t.primaryOrgMemberTag,
          };
    }
    l.getOrgContactIdentity = e;
  },
  98,
);
