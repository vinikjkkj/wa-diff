__d(
  "AdsOsmipChatMessageSyncQPLUtils",
  ["CSChatLSGraphQLServerReceivedSends", "I64"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(t) {
      return (
        (e || (e = o("I64"))).equal(
          t.sendStatusV2,
          (e || (e = o("I64"))).of_float(2),
        ) &&
        ((e || (e = o("I64"))).equal(
          t.authorityLevel,
          (e || (e = o("I64"))).zero,
        ) ||
          o(
            "CSChatLSGraphQLServerReceivedSends",
          ).isCSChatLSGraphQLServerReceivedSend(t.offlineThreadingId))
      );
    }
    l.isMessageServerReceivedByGraphQLAdapter = s;
  },
  98,
);
