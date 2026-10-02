__d(
  "WAHandleDirtyBitsProtocol",
  ["WASmaxDirtyBitsNotifyRPC"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = o("WASmaxDirtyBitsNotifyRPC").receiveNotifyRPC(e),
        n = t.parsedRequest,
        r = n.dirtyTimestamp,
        a = n.dirtyType;
      return { dirtyBitType: a, dirtyBitTimestamp: r };
    }
    l.parseDirtyBit = e;
  },
  98,
);
