__d(
  "WAWebOrgMemberPickerRows",
  [
    "WAWebMultiSelectChatListTypes",
    "WAWebOrgMemberSearchErrorRowLayout",
    "WAWebOrgMemberSearchLoadingRowLayout",
    "WAWebOrgMemberSearchRows",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      return e.flatMap(function (e) {
        var n = s(e, t);
        return n.length === 0
          ? []
          : [
              {
                itemKey: "org-members-header-" + e.orgId,
                status: { kind: "header" },
                type: o("WAWebMultiSelectChatListTypes").Row
                  .ROW_ORG_MEMBERS_STATUS,
              },
            ].concat(n);
      });
    }
    function s(e, t) {
      var n = e.failure,
        r = e.orgId;
      return e.loading
        ? [
            {
              height: o("WAWebOrgMemberSearchLoadingRowLayout")
                .ORG_MEMBER_SEARCH_LOADING_HEIGHT,
              itemKey: "org-members-loading-" + r,
              status: { kind: "loading" },
              type: o("WAWebMultiSelectChatListTypes").Row
                .ROW_ORG_MEMBERS_STATUS,
            },
          ]
        : n != null
          ? [
              {
                height: o(
                  "WAWebOrgMemberSearchErrorRowLayout",
                ).getOrgMemberSearchErrorHeight(n),
                itemKey: "org-members-error-" + r,
                status: { failure: n, kind: "error" },
                type: o("WAWebMultiSelectChatListTypes").Row
                  .ROW_ORG_MEMBERS_STATUS,
              },
            ]
          : e.members.flatMap(function (e) {
              var n = o("WAWebOrgMemberSearchRows").toOrgMemberLid(e);
              return n != null && t(n)
                ? [
                    {
                      data: e,
                      itemKey: "org-member-" + r + "-" + e.id,
                      lid: n,
                      type: o("WAWebMultiSelectChatListTypes").Row
                        .ROW_ORG_MEMBER,
                    },
                  ]
                : [];
            });
    }
    l.toOrgMemberPickerRows = e;
  },
  98,
);
