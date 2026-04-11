__d(
  "WAWebUiRevokeActionWamEvent",
  ["WAWebWamCodegenUtils", "WAWebWamEnumUiRevokeActionType"],
  function (t, n, r, o, a, i, l) {
    var e = o("WAWebWamCodegenUtils").defineEvents(
      {
        UiRevokeAction: [
          3298,
          {
            messageAction: [
              1,
              o("WAWebWamEnumUiRevokeActionType").UI_REVOKE_ACTION_TYPE,
            ],
            uiRevokeActionDuration: [
              2,
              o("WAWebWamCodegenUtils").TYPES.INTEGER,
            ],
            uiRevokeActionSessionId: [
              3,
              o("WAWebWamCodegenUtils").TYPES.STRING,
            ],
          },
          [1, 1, 1],
          "regular",
        ],
      },
      { UiRevokeAction: [] },
    );
    l.UiRevokeActionWamEvent = e;
  },
  98,
);
