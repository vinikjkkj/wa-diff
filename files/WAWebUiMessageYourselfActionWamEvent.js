__d(
  "WAWebUiMessageYourselfActionWamEvent",
  [
    "WAWebWamCodegenUtils",
    "WAWebWamEnumUiMessageYourselfActionType",
    "WAWebWamEnumUiMessageYourselfFunnelName",
  ],
  function (t, n, r, o, a, i, l) {
    var e = o("WAWebWamCodegenUtils").defineEvents(
      {
        UiMessageYourselfAction: [
          3780,
          {
            uiMessageYourselfActionSessionId: [
              1,
              o("WAWebWamCodegenUtils").TYPES.STRING,
            ],
            uiMessageYourselfActionType: [
              2,
              o("WAWebWamEnumUiMessageYourselfActionType")
                .UI_MESSAGE_YOURSELF_ACTION_TYPE,
            ],
            uiMessageYourselfFunnelName: [
              3,
              o("WAWebWamEnumUiMessageYourselfFunnelName")
                .UI_MESSAGE_YOURSELF_FUNNEL_NAME,
            ],
          },
          [1, 1, 1],
          "regular",
        ],
      },
      { UiMessageYourselfAction: [] },
    );
    l.UiMessageYourselfActionWamEvent = e;
  },
  98,
);
