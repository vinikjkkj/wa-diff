__d(
  "WAWebGroupInviteLinkClickWamEvent",
  [
    "WAWebWamCodegenUtils",
    "WAWebWamEnumGroupInviteLinkClickActionType",
    "WAWebWamEnumGroupInviteLinkEntryPoint",
    "WAWebWamEnumGroupTypeClient",
  ],
  function (t, n, r, o, a, i, l) {
    var e = o("WAWebWamCodegenUtils").defineEvents(
      {
        GroupInviteLinkClick: [
          3526,
          {
            dedupKey: [5, o("WAWebWamCodegenUtils").TYPES.INTEGER],
            groupInviteLinkClickAction: [
              3,
              o("WAWebWamEnumGroupInviteLinkClickActionType")
                .GROUP_INVITE_LINK_CLICK_ACTION_TYPE,
            ],
            groupInviteLinkClickGroupId: [
              4,
              o("WAWebWamCodegenUtils").TYPES.STRING,
            ],
            groupInviteLinkEntryPoint: [
              1,
              o("WAWebWamEnumGroupInviteLinkEntryPoint")
                .GROUP_INVITE_LINK_ENTRY_POINT,
            ],
            groupTypeClient: [
              2,
              o("WAWebWamEnumGroupTypeClient").GROUP_TYPE_CLIENT,
            ],
          },
          [1, 1, 1],
          "regular",
        ],
      },
      { GroupInviteLinkClick: [] },
    );
    l.GroupInviteLinkClickWamEvent = e;
  },
  98,
);
