__d(
  "WAWebGroupHistoryMsgData.flow",
  ["$InternalEnum"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = n("$InternalEnum")({
      NONE: 0,
      DOWNLOADING: 1,
      DOWNLOADED: 2,
      PROCESSING: 3,
      INJECTED: 4,
      FAILED: 5,
      INJECTED_PARTIAL: 6,
      FAILED_NO_RETRY: 7,
      DEDUPED: 8,
    });
    l.MessageHistoryBundleProcessState = e;
  },
  98,
);
