__d(
  "WAWebCompanionEmailInviteActionWamEvent",
  [
    "WAWebWamCodegenUtils",
    "WAWebWamEnumWebcEmailInviteActionType",
    "WAWebWamEnumWebcEmailInviteEntryPointType",
  ],
  function (t, n, r, o, a, i, l) {
    var e = o("WAWebWamCodegenUtils").defineEvents(
      {
        CompanionEmailInviteAction: [
          8576,
          {
            webcEmailInviteAction: [
              1,
              o("WAWebWamEnumWebcEmailInviteActionType")
                .WEBC_EMAIL_INVITE_ACTION_TYPE,
            ],
            webcEmailInviteCount: [2, o("WAWebWamCodegenUtils").TYPES.INTEGER],
            webcEmailInviteEntryPoint: [
              3,
              o("WAWebWamEnumWebcEmailInviteEntryPointType")
                .WEBC_EMAIL_INVITE_ENTRY_POINT_TYPE,
            ],
          },
          [1, 1, 1],
          "regular",
        ],
      },
      { CompanionEmailInviteAction: [] },
    );
    l.CompanionEmailInviteActionWamEvent = e;
  },
  98,
);
