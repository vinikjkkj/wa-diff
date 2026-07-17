__d(
  "WAWebGroupHistoryPostJoinTypes",
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
    function s(t) {
      return t === !0 || t === "true"
        ? e.HISTORY_SENT
        : t === !1 || t === "false"
          ? e.HISTORY_NOT_SENT
          : void 0;
    }
    ((i.GroupHistorySentState = e),
      (i.parseGroupHistorySentState = l),
      (i.groupHistorySentToState = s));
  },
  66,
);
