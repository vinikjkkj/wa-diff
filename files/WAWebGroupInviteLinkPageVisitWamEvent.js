__d(
  "WAWebGroupInviteLinkPageVisitWamEvent",
  ["WAWebWamCodegenUtils", "WAWebWamEnumInviteLinkEntryPointType"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          GroupInviteLinkPageVisit: [
            7380,
            {
              dedupKey: [4, e.TYPES.INTEGER],
              groupId: [1, e.TYPES.STRING],
              inviteLinkEntryPoint: [
                2,
                o("WAWebWamEnumInviteLinkEntryPointType")
                  .INVITE_LINK_ENTRY_POINT_TYPE,
              ],
              userJourneyEventMs: [3, e.TYPES.INTEGER],
            },
            [1, 1, 1],
            "regular",
          ],
        },
        { GroupInviteLinkPageVisit: [] },
      );
    l.GroupInviteLinkPageVisitWamEvent = s;
  },
  98,
);
