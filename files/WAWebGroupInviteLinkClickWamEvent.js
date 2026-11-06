__d(
  "WAWebGroupInviteLinkClickWamEvent",
  [
    "WAWebWamCodegenUtils",
    "WAWebWamEnumGroupInviteLinkClickActionType",
    "WAWebWamEnumGroupInviteLinkEntryPoint",
    "WAWebWamEnumGroupTypeClient",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          GroupInviteLinkClick: [
            3526,
            {
              dedupKey: [5, e.TYPES.INTEGER],
              groupInviteLinkClickAction: [
                3,
                o("WAWebWamEnumGroupInviteLinkClickActionType")
                  .GROUP_INVITE_LINK_CLICK_ACTION_TYPE,
              ],
              groupInviteLinkClickGroupId: [4, e.TYPES.STRING],
              groupInviteLinkEntryPoint: [
                1,
                o("WAWebWamEnumGroupInviteLinkEntryPoint")
                  .GROUP_INVITE_LINK_ENTRY_POINT,
              ],
              groupTypeClient: [
                2,
                o("WAWebWamEnumGroupTypeClient").GROUP_TYPE_CLIENT,
              ],
              orgId: [6, e.TYPES.STRING],
            },
            [1, 1, 1],
            "regular",
          ],
        },
        { GroupInviteLinkClick: [] },
      );
    l.GroupInviteLinkClickWamEvent = s;
  },
  98,
);
