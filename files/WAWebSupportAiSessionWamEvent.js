__d(
  "WAWebSupportAiSessionWamEvent",
  ["WAWebWamCodegenUtils", "WAWebWamEnumSupportAiEventType"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          SupportAiSession: [
            4970,
            {
              citationCmsId: [5, e.TYPES.STRING],
              supportAiErrorCode: [3, e.TYPES.INTEGER],
              supportAiErrorMessage: [4, e.TYPES.STRING],
              supportAiEventType: [
                1,
                o("WAWebWamEnumSupportAiEventType").SUPPORT_AI_EVENT_TYPE,
              ],
            },
            [1, 1, 1],
            "regular",
          ],
        },
        { SupportAiSession: [] },
      );
    l.SupportAiSessionWamEvent = s;
  },
  98,
);
