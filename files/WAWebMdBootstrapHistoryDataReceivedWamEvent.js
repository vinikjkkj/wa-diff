__d(
  "WAWebMdBootstrapHistoryDataReceivedWamEvent",
  [
    "WAWebWamCodegenUtils",
    "WAWebWamEnumMdBootstrapHistoryPayloadType",
    "WAWebWamEnumMdBootstrapPayloadType",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          MdBootstrapHistoryDataReceived: [
            2998,
            {
              historySyncChunkOrder: [6, e.TYPES.INTEGER],
              historySyncRetryRequestId: [7, e.TYPES.STRING],
              historySyncStageProgress: [5, e.TYPES.INTEGER],
              mdBootstrapHistoryPayloadType: [
                3,
                o("WAWebWamEnumMdBootstrapHistoryPayloadType")
                  .MD_BOOTSTRAP_HISTORY_PAYLOAD_TYPE,
              ],
              mdBootstrapPayloadType: [
                2,
                o("WAWebWamEnumMdBootstrapPayloadType")
                  .MD_BOOTSTRAP_PAYLOAD_TYPE,
              ],
              mdSessionId: [1, e.TYPES.STRING],
              mdSyncFailureReason: [8, e.TYPES.STRING],
              mdTimestamp: [4, e.TYPES.INTEGER],
            },
            [1, 1, 1],
            "regular",
          ],
        },
        { MdBootstrapHistoryDataReceived: [] },
      );
    l.MdBootstrapHistoryDataReceivedWamEvent = s;
  },
  98,
);
