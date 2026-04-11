__d(
  "WAWebMdBootstrapHistoryDataStartDownloadingWamEvent",
  [
    "WAWebWamCodegenUtils",
    "WAWebWamEnumMdBootstrapHistoryPayloadType",
    "WAWebWamEnumMdBootstrapPayloadType",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          MdBootstrapHistoryDataStartDownloading: [
            4650,
            {
              historySyncChunkOrder: [1, e.TYPES.INTEGER],
              historySyncRetryRequestId: [9, e.TYPES.STRING],
              historySyncStageProgress: [2, e.TYPES.INTEGER],
              mdBootstrapHistoryPayloadType: [
                3,
                o("WAWebWamEnumMdBootstrapHistoryPayloadType")
                  .MD_BOOTSTRAP_HISTORY_PAYLOAD_TYPE,
              ],
              mdBootstrapPayloadSize: [4, e.TYPES.INTEGER],
              mdBootstrapPayloadType: [
                5,
                o("WAWebWamEnumMdBootstrapPayloadType")
                  .MD_BOOTSTRAP_PAYLOAD_TYPE,
              ],
              mdBootstrapStepDuration: [6, e.TYPES.INTEGER],
              mdSessionId: [7, e.TYPES.STRING],
              mdTimestamp: [8, e.TYPES.INTEGER],
            },
            [1, 1, 1],
            "regular",
          ],
        },
        { MdBootstrapHistoryDataStartDownloading: [] },
      );
    l.MdBootstrapHistoryDataStartDownloadingWamEvent = s;
  },
  98,
);
