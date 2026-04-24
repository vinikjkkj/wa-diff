__d(
  "WAWebGroupHistoryPostJoinTypes.flow",
  ["$InternalEnum"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("$InternalEnum")({
      UNDEFINED: 0,
      HISTORY_NOT_SENT: 1,
      HISTORY_SENT: 2,
      NOTICE_SENT: 3,
    });
    function l(t) {
      return t === "HISTORY_NOT_SENT"
        ? e.HISTORY_NOT_SENT
        : t === "HISTORY_SENT"
          ? e.HISTORY_SENT
          : t === "NOTICE_SENT"
            ? e.NOTICE_SENT
            : null;
    }
    ((i.GroupHistorySentState = e), (i.parseGroupHistorySentState = l));
  },
  66,
);
