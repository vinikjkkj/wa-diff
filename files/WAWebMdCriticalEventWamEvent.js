__d(
  "WAWebMdCriticalEventWamEvent",
  [
    "WAWebWamCodegenUtils",
    "WAWebWamEnumCollection",
    "WAWebWamEnumMdSyncdCriticalEventCode",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          MdCriticalEvent: [
            2746,
            {
              collection: [2, o("WAWebWamEnumCollection").COLLECTION],
              mdCriticalEventCode: [
                1,
                o("WAWebWamEnumMdSyncdCriticalEventCode")
                  .MD_SYNCD_CRITICAL_EVENT_CODE,
              ],
              mdCriticalEventErrorMessage: [4, e.TYPES.STRING],
              mdCriticalEventStage: [5, e.TYPES.STRING],
              mutationActionName: [3, e.TYPES.STRING],
            },
            [1, 1, 1],
            "regular",
          ],
        },
        { MdCriticalEvent: [] },
      );
    l.MdCriticalEventWamEvent = s;
  },
  98,
);
