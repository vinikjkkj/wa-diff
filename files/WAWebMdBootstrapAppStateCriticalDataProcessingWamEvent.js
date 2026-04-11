__d(
  "WAWebMdBootstrapAppStateCriticalDataProcessingWamEvent",
  [
    "WAWebWamCodegenUtils",
    "WAWebWamEnumBootstrapAppStateDataStageCode",
    "WAWebWamEnumMdBootstrapPayloadType",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          MdBootstrapAppStateCriticalDataProcessing: [
            3164,
            {
              bootstrapAppStateDataStage: [
                1,
                o("WAWebWamEnumBootstrapAppStateDataStageCode")
                  .BOOTSTRAP_APP_STATE_DATA_STAGE_CODE,
              ],
              mdBootstrapPayloadType: [
                2,
                o("WAWebWamEnumMdBootstrapPayloadType")
                  .MD_BOOTSTRAP_PAYLOAD_TYPE,
              ],
              mdRegAttemptId: [3, e.TYPES.STRING],
              mdSessionId: [4, e.TYPES.STRING],
              mdTimestamp: [5, e.TYPES.INTEGER],
            },
            [1, 1, 1],
            "regular",
          ],
        },
        { MdBootstrapAppStateCriticalDataProcessing: [] },
      );
    l.MdBootstrapAppStateCriticalDataProcessingWamEvent = s;
  },
  98,
);
