__d(
  "WAWebWebcWhatsNewImpressionWamEvent",
  [
    "WAWebWamCodegenUtils",
    "WAWebWamEnumWebcWhatsNewActionType",
    "WAWebWamEnumWebcWhatsNewSurfaceType",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          WebcWhatsNewImpression: [
            8200,
            {
              dedupKey: [5, e.TYPES.INTEGER],
              webcWhatsNewAction: [
                1,
                o("WAWebWamEnumWebcWhatsNewActionType")
                  .WEBC_WHATS_NEW_ACTION_TYPE,
              ],
              webcWhatsNewSurface: [
                2,
                o("WAWebWamEnumWebcWhatsNewSurfaceType")
                  .WEBC_WHATS_NEW_SURFACE_TYPE,
              ],
              webcWhatsNewTimeSpent: [3, e.TYPES.TIMER],
              webcWhatsNewVariant: [4, e.TYPES.INTEGER],
            },
            [1, 1, 1],
            "regular",
          ],
        },
        { WebcWhatsNewImpression: [] },
      );
    l.WebcWhatsNewImpressionWamEvent = s;
  },
  98,
);
