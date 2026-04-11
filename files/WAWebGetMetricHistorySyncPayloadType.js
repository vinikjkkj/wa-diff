__d(
  "WAWebGetMetricHistorySyncPayloadType",
  ["WAWebWamEnumMdBootstrapHistoryPayloadType"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return e === 0
        ? o("WAWebWamEnumMdBootstrapHistoryPayloadType")
            .MD_BOOTSTRAP_HISTORY_PAYLOAD_TYPE.INITIAL
        : e === 1
          ? o("WAWebWamEnumMdBootstrapHistoryPayloadType")
              .MD_BOOTSTRAP_HISTORY_PAYLOAD_TYPE.STATUS_V3
          : e === 2
            ? o("WAWebWamEnumMdBootstrapHistoryPayloadType")
                .MD_BOOTSTRAP_HISTORY_PAYLOAD_TYPE.FULL_HISTORY
            : e === 3
              ? o("WAWebWamEnumMdBootstrapHistoryPayloadType")
                  .MD_BOOTSTRAP_HISTORY_PAYLOAD_TYPE.RECENT_HISTORY
              : e === 4
                ? o("WAWebWamEnumMdBootstrapHistoryPayloadType")
                    .MD_BOOTSTRAP_HISTORY_PAYLOAD_TYPE.PUSHNAME
                : e === 5
                  ? o("WAWebWamEnumMdBootstrapHistoryPayloadType")
                      .MD_BOOTSTRAP_HISTORY_PAYLOAD_TYPE.NON_BLOCKING_DATA
                  : e === 6
                    ? o("WAWebWamEnumMdBootstrapHistoryPayloadType")
                        .MD_BOOTSTRAP_HISTORY_PAYLOAD_TYPE.ON_DEMAND
                    : o("WAWebWamEnumMdBootstrapHistoryPayloadType")
                        .MD_BOOTSTRAP_HISTORY_PAYLOAD_TYPE.PUSHNAME;
    }
    l.getMetricHistorySyncPayloadType = e;
  },
  98,
);
