__d(
  "WAWebOrgMemberSearchRows",
  [
    "WAWebChatlistTypes",
    "WAWebNetworkStatus",
    "WAWebOrgMemberSearchErrorRowLayout",
    "WAWebOrgMemberSearchLoadingRowLayout",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t, n) {
      if (t === "loading")
        return {
          height: o("WAWebOrgMemberSearchLoadingRowLayout")
            .ORG_MEMBER_SEARCH_LOADING_HEIGHT,
          itemKey: e,
          type: o("WAWebChatlistTypes").WAWebChatlistRow
            .ROW_ORG_MEMBERS_LOADING,
        };
      var a = r("WAWebNetworkStatus").online ? "unavailable" : "offline";
      return {
        failure: a,
        height: o(
          "WAWebOrgMemberSearchErrorRowLayout",
        ).getOrgMemberSearchErrorHeight(a),
        itemKey: e,
        retry: n,
        type: o("WAWebChatlistTypes").WAWebChatlistRow.ROW_ORG_MEMBERS_ERROR,
      };
    }
    l.toOrgMemberStatusRow = e;
  },
  98,
);
