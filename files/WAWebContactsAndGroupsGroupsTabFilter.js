__d(
  "WAWebContactsAndGroupsGroupsTabFilter",
  [
    "WAWebChatGetters",
    "WAWebContactsAndGroupsGroupSetup",
    "WAWebContactsAndGroupsGroupsTableRows",
    "WAWebFrontendChatGetters",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      return e.some(function (e) {
        return s(e, t);
      })
        ? "admin"
        : "all";
    }
    function s(e, t) {
      var n = e.groupMetadata;
      return n == null ||
        o("WAWebFrontendChatGetters").getIsCommunity(e) ||
        o("WAWebChatGetters").getArchive(e) ||
        !o("WAWebContactsAndGroupsGroupsTableRows").isGroupAdmin(e)
        ? !1
        : n.membershipApprovalRequests.length > 0 ||
            o("WAWebContactsAndGroupsGroupSetup").needsGroupSetup(e, t);
    }
    l.getGroupsTabDefaultFilter = e;
  },
  98,
);
