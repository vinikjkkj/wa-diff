__d(
  "WAWebViewOnceScreenshotActionsWamEvent",
  [
    "WAWebWamCodegenUtils",
    "WAWebWamEnumVoMessageType",
    "WAWebWamEnumVoSsAction",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          ViewOnceScreenshotActions: [
            3606,
            {
              dedupKey: [5, e.TYPES.INTEGER],
              isAGroup: [1, e.TYPES.BOOLEAN],
              threadId: [2, e.TYPES.STRING],
              voMessageType: [
                3,
                o("WAWebWamEnumVoMessageType").VO_MESSAGE_TYPE,
              ],
              voSsAction: [4, o("WAWebWamEnumVoSsAction").VO_SS_ACTION],
            },
            [1, 1, 1],
            "regular",
          ],
        },
        { ViewOnceScreenshotActions: [] },
      );
    l.ViewOnceScreenshotActionsWamEvent = s;
  },
  98,
);
