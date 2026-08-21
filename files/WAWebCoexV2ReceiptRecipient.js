__d(
  "WAWebCoexV2ReceiptRecipient",
  ["WAWebLidMigrationUtils", "WAWebWidFactory"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WAWebWidFactory").asUserWidOrThrow(e);
      return t.isFbidBot() ? t : o("WAWebLidMigrationUtils").toUserLid(t);
    }
    l.toCoexV2ReceiptRecipient = e;
  },
  98,
);
