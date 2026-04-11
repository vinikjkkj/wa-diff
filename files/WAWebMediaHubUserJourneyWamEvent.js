__d(
  "WAWebMediaHubUserJourneyWamEvent",
  [
    "WAWebWamCodegenUtils",
    "WAWebWamEnumActionCode",
    "WAWebWamEnumEntryPointType",
    "WAWebWamEnumSurfaceCode",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          MediaHubUserJourney: [
            7090,
            {
              customFields: [1, e.TYPES.STRING],
              mediaHubAction: [2, o("WAWebWamEnumActionCode").ACTION_CODE],
              mediaHubEntryPoint: [
                3,
                o("WAWebWamEnumEntryPointType").ENTRY_POINT_TYPE,
              ],
              mediaHubSequenceNumber: [4, e.TYPES.INTEGER],
              mediaHubSessionId: [5, e.TYPES.STRING],
              mediaHubSurface: [6, o("WAWebWamEnumSurfaceCode").SURFACE_CODE],
              unifiedSessionId: [7, e.TYPES.STRING],
            },
            [1, 1, 1],
            "regular",
          ],
        },
        { MediaHubUserJourney: [] },
      );
    l.MediaHubUserJourneyWamEvent = s;
  },
  98,
);
