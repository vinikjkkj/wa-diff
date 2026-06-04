__d(
  "WAWebStatusPogImpressionWamEvent",
  [
    "WAWebWamCodegenUtils",
    "WAWebWamEnumStatusCategory",
    "WAWebWamEnumStatusRowSection",
    "WAWebWamEnumTsSurface",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          StatusPogImpression: [
            8302,
            {
              cid: [1, e.TYPES.STRING],
              pogIndex: [2, e.TYPES.INTEGER],
              statusCategory: [
                3,
                o("WAWebWamEnumStatusCategory").STATUS_CATEGORY,
              ],
              statusGroupId: [4, e.TYPES.STRING],
              statusPosterHashId: [5, e.TYPES.STRING],
              statusPosterId: [6, e.TYPES.STRING],
              statusViewEntrypoint: [
                7,
                o("WAWebWamEnumStatusRowSection").STATUS_ROW_SECTION,
              ],
              tsSurface: [8, o("WAWebWamEnumTsSurface").TS_SURFACE],
            },
            [1, 1, 1],
            "regular",
          ],
        },
        { StatusPogImpression: [] },
      );
    l.StatusPogImpressionWamEvent = s;
  },
  98,
);
