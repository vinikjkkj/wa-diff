__d(
  "WAWebViewOnceScreenshotActionsWamEvent",
  [
    "WAWebWamCodegenUtils",
    "WAWebWamEnumVoMessageType",
    "WAWebWamEnumVoSsAction",
  ],
  function (t, n, r, o, a, i, l) {
    var e = o("WAWebWamCodegenUtils").defineEvents(
      {
        ViewOnceScreenshotActions: [
          3606,
          {
            isAGroup: [1, o("WAWebWamCodegenUtils").TYPES.BOOLEAN],
            threadId: [2, o("WAWebWamCodegenUtils").TYPES.STRING],
            voMessageType: [3, o("WAWebWamEnumVoMessageType").VO_MESSAGE_TYPE],
            voSsAction: [4, o("WAWebWamEnumVoSsAction").VO_SS_ACTION],
          },
          [1, 1, 1],
          "regular",
        ],
      },
      { ViewOnceScreenshotActions: [] },
    );
    l.ViewOnceScreenshotActionsWamEvent = e;
  },
  98,
);
