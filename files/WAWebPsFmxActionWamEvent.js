__d(
  "WAWebPsFmxActionWamEvent",
  [
    "WAWebWamCodegenUtils",
    "WAWebWamEnumFmxEntryPoint",
    "WAWebWamEnumFmxEvent",
    "WAWebWamEnumHighlightGroupType",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          PsFmxAction: [
            7054,
            {
              commonGroupNum: [1, e.TYPES.INTEGER],
              countryShown: [2, e.TYPES.BOOLEAN],
              fmxEntryPoint: [
                3,
                o("WAWebWamEnumFmxEntryPoint").FMX_ENTRY_POINT,
              ],
              fmxEvent: [4, o("WAWebWamEnumFmxEvent").FMX_EVENT],
              highlightGroupType: [
                5,
                o("WAWebWamEnumHighlightGroupType").HIGHLIGHT_GROUP_TYPE,
              ],
              isSenderSmb: [6, e.TYPES.BOOLEAN],
              notAContactShown: [7, e.TYPES.BOOLEAN],
            },
            [1, 1, 1],
            "private",
            113760892,
          ],
        },
        { PsFmxAction: [] },
      );
    l.PsFmxActionWamEvent = s;
  },
  98,
);
