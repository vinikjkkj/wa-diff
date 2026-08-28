__d(
  "MAIBAOfflineThreadingIdUtils",
  ["OfflineThreadingId"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      var e = o("OfflineThreadingId").createForItemsInOrder([null, null]),
        t = e[0],
        n = t[0],
        r = t[1],
        a = e[1],
        i = a[0],
        l = a[1];
      return { botMessageOTID: l, userMessageOTID: r };
    }
    l.createUserAndBotOTIDPair = e;
  },
  98,
);
