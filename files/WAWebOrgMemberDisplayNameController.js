__d(
  "WAWebOrgMemberDisplayNameController",
  [
    "WAJids",
    "WAWebOrgCollection",
    "WAWebOrgContactCollection",
    "WAWebOrgDirectoryRepositoryState",
    "WAWebOrgMembershipSelector",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      var n = o("WAWebOrgMembershipSelector").getPrimaryOrgContact(
        o("WAWebOrgContactCollection").OrgContactCollection.getByLid(
          o("WAJids").toLidUserJid(e),
        ),
        o(
          "WAWebOrgDirectoryRepositoryState",
        ).getOrgDirectoryRepositorySnapshot().orderedOrgIDs,
      );
      return n != null &&
        o("WAWebOrgCollection").OrgCollection.get(n.orgId) != null
        ? n.memberName
        : null;
    }
    l.getOrgMemberName = e;
  },
  98,
);
