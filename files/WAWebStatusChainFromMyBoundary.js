__d(
  "WAWebStatusChainFromMyBoundary",
  [
    "WAWebContactGetters",
    "WAWebStatusGatingUtils",
    "WAWebWamEnumStatusRowSection",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t, n, r) {
      return (
        e != null &&
        t != null &&
        n === o("WAWebWamEnumStatusRowSection").STATUS_ROW_SECTION.MY_STATUS &&
        !r &&
        e.statuses[t.statusIdx] != null &&
        o("WAWebContactGetters").getIsMe(
          e.statuses[t.statusIdx].status.contact,
        ) &&
        e.getChainableContactStatuses().length > 0 &&
        o("WAWebStatusGatingUtils").isChainingFromMyStatusEnabled()
      );
    }
    l.canChainFromMyStatus = e;
  },
  98,
);
