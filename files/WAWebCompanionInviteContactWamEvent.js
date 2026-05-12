__d(
  "WAWebCompanionInviteContactWamEvent",
  [
    "WAWebWamCodegenUtils",
    "WAWebWamEnumCompanionInviteMethodType",
    "WAWebWamEnumCompanionInviteOriginType",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          CompanionInviteContact: [
            8230,
            {
              companionInviteCodeError: [1, e.TYPES.STRING],
              companionInviteMethod: [
                2,
                o("WAWebWamEnumCompanionInviteMethodType")
                  .COMPANION_INVITE_METHOD_TYPE,
              ],
              companionInviteNumContactsAddressBook: [3, e.TYPES.INTEGER],
              companionInviteNumContactsWa: [4, e.TYPES.INTEGER],
              companionInviteOrigin: [
                5,
                o("WAWebWamEnumCompanionInviteOriginType")
                  .COMPANION_INVITE_ORIGIN_TYPE,
              ],
              companionInviteSessionId: [6, e.TYPES.INTEGER],
              companionValidInviteCode: [7, e.TYPES.BOOLEAN],
            },
            [1, 1, 1],
            "regular",
          ],
        },
        { CompanionInviteContact: [] },
      );
    l.CompanionInviteContactWamEvent = s;
  },
  98,
);
