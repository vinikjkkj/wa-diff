__d(
  "WAWebCompanionEmailInviteActionWamEvent",
  [
    "WAWebWamCodegenUtils",
    "WAWebWamEnumWebcEmailInviteActionType",
    "WAWebWamEnumWebcEmailInviteEntryPointType",
    "WAWebWamEnumWebcEmailInviteServerSendResultType",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          CompanionEmailInviteAction: [
            8576,
            {
              dedupKey: [4, e.TYPES.INTEGER],
              webcEmailInviteAction: [
                1,
                o("WAWebWamEnumWebcEmailInviteActionType")
                  .WEBC_EMAIL_INVITE_ACTION_TYPE,
              ],
              webcEmailInviteCount: [2, e.TYPES.INTEGER],
              webcEmailInviteEntryPoint: [
                3,
                o("WAWebWamEnumWebcEmailInviteEntryPointType")
                  .WEBC_EMAIL_INVITE_ENTRY_POINT_TYPE,
              ],
              webcEmailInviteFailedCount: [5, e.TYPES.INTEGER],
              webcEmailInviteSentCount: [6, e.TYPES.INTEGER],
              webcEmailInviteServerSendResult: [
                7,
                o("WAWebWamEnumWebcEmailInviteServerSendResultType")
                  .WEBC_EMAIL_INVITE_SERVER_SEND_RESULT_TYPE,
              ],
            },
            [1, 1, 1],
            "regular",
          ],
        },
        { CompanionEmailInviteAction: [] },
      );
    l.CompanionEmailInviteActionWamEvent = s;
  },
  98,
);
