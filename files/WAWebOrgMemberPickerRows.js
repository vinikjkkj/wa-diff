__d(
  "WAWebOrgMemberPickerRows",
  [
    "WAWebBoolFunc",
    "WAWebLidMigrationUtils",
    "WAWebMultiSelectChatListTypes",
    "WAWebNetworkStatus",
    "WAWebOrgMemberSearchErrorRowLayout",
    "WAWebOrgMemberSearchLoadingRowLayout",
    "WAWebOrgMemberSearchRows",
    "WAWebOrgTimelock",
    "WAWebReachoutTimelockUtils",
    "WAWebUsernameTypes",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.members,
        n = e.status;
      return n === "hidden"
        ? []
        : c(
            [
              {
                failure: n === "error" ? m() : null,
                loading: n === "loading",
                members: t,
                orgId: "primary",
                orgName: "",
              },
            ],
            o("WAWebBoolFunc").returnTrue,
          );
    }
    function s(e) {
      var t = e[0],
        n = t == null ? null : o("WAWebOrgMemberSearchRows").toOrgMemberLid(t);
      return t == null ||
        n == null ||
        (o("WAWebReachoutTimelockUtils").isUserReachoutTimelockedAndVisible() &&
          !o("WAWebOrgTimelock").canMessageOrgMemberWhileTimelocked(n))
        ? null
        : { lid: n, member: t };
    }
    function u(e, t) {
      var n = t.wid == null ? null : o("WAWebLidMigrationUtils").toLid(t.wid),
        r = t.username;
      return e.some(function (e) {
        return (
          e.id === (n == null ? void 0 : n.user) ||
          (r != null &&
            o("WAWebUsernameTypes").serializeMaybeUsername(e.username) === r)
        );
      });
    }
    function c(e, t) {
      return e.flatMap(function (e) {
        var n = d(e, t);
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
    function d(e, t) {
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
    function m() {
      return r("WAWebNetworkStatus").online ? "unavailable" : "offline";
    }
    ((l.toPrimaryOrgMemberPickerRows = e),
      (l.getOrgMemberToOpenOnEnter = s),
      (l.isListedOrgMember = u),
      (l.toOrgMemberPickerRows = c));
  },
  98,
);
