__d(
  "WAWebOrgNetworkHomeStrings",
  ["fbt", "WAWebSchemaOrg"],
  function (t, n, r, o, a, i, l, s) {
    function e(e) {
      return e == null
        ? null
        : s._(/*BTDS*/ '_j{"*":"{count} members","_1":"1 member"}', [
            s._plural(e, "count"),
          ]);
    }
    function u(e) {
      return e === o("WAWebSchemaOrg").OrgMemberRole.Creator
        ? s._(/*BTDS*/ "Owner")
        : e === o("WAWebSchemaOrg").OrgMemberRole.Admin
          ? s._(/*BTDS*/ "Admin")
          : s._(/*BTDS*/ "Member");
    }
    ((l.getOrgMemberCountLabel = e), (l.getOrgMemberRoleLabel = u));
  },
  226,
);
