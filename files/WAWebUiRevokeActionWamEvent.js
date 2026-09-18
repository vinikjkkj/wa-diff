__d(
  "WAWebUiRevokeActionWamEvent",
  ["WAWebWamCodegenUtils", "WAWebWamEnumUiRevokeActionType"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          UiRevokeAction: [
            3298,
            {
              dedupKey: [4, e.TYPES.INTEGER],
              messageAction: [
                1,
                o("WAWebWamEnumUiRevokeActionType").UI_REVOKE_ACTION_TYPE,
              ],
              uiRevokeActionDuration: [2, e.TYPES.INTEGER],
              uiRevokeActionSessionId: [3, e.TYPES.STRING],
            },
            [1, 1, 1],
            "regular",
          ],
        },
        { UiRevokeAction: [] },
      );
    l.UiRevokeActionWamEvent = s;
  },
  98,
);
