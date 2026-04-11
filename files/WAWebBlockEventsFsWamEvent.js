__d(
  "WAWebBlockEventsFsWamEvent",
  [
    "WAWebWamCodegenUtils",
    "WAWebWamEnumBlockEntryPoint",
    "WAWebWamEnumBlockEventActionType",
    "WAWebWamEnumCallResultType",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          BlockEventsFs: [
            4288,
            {
              blockEntryPoint: [
                1,
                o("WAWebWamEnumBlockEntryPoint").BLOCK_ENTRY_POINT,
              ],
              blockEventActionType: [
                2,
                o("WAWebWamEnumBlockEventActionType").BLOCK_EVENT_ACTION_TYPE,
              ],
              blockEventIsSuspicious: [3, e.TYPES.BOOLEAN],
              blockEventIsUnsub: [4, e.TYPES.BOOLEAN],
              pastCall: [5, e.TYPES.BOOLEAN],
              pastCallResult: [
                6,
                o("WAWebWamEnumCallResultType").CALL_RESULT_TYPE,
              ],
            },
            [1, 1, 1],
            "regular",
          ],
        },
        { BlockEventsFs: [] },
      );
    l.BlockEventsFsWamEvent = s;
  },
  98,
);
