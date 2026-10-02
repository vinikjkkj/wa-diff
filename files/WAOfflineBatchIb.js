__d(
  "WAOfflineBatchIb",
  ["WADeprecatedSendIq", "WAWap"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      o("WADeprecatedSendIq").deprecatedCastStanza(
        o("WAWap").wap(
          "ib",
          null,
          o("WAWap").wap("offline_batch", { count: o("WAWap").INT(e) }),
        ),
      );
    }
    l.sendBatchRequestIb = e;
  },
  98,
);
