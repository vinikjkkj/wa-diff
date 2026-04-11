__d(
  "WAWebPendingMessageKey",
  [],
  function (t, n, r, o, a, i) {
    function e(e, t, n) {
      var r = n
        .map(function (e) {
          return String(e.e2eType) + ":" + e.retryCount;
        })
        .join(",");
      return e.toString() + "_" + t.toString() + "_" + r;
    }
    i.createPendingMessageKey = e;
  },
  66,
);
