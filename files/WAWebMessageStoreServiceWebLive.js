__d(
  "WAWebMessageStoreServiceWebLive",
  [
    "WAWebDBEphemeralMessage",
    "WAWebDBMessageDelete",
    "WAWebDBMsgUtils",
    "WAWebDBProcessMessage",
    "WAWebDBProcessRevokeMsgs",
    "WAWebDBThreadMetadataBulkHelper",
    "WAWebDBUpdateMessageTable",
    "WAWebMessageStoreService",
    "WAWebRequestDeleteAddOns",
    "WebDi.Async",
  ],
  function (t, n, r, o, a, i, l) {
    var e = o("WAWebMessageStoreService").MessageStoreService.make(
      function* () {
        var e = {
          storeMessages: function (t, n, r) {
            return o("WebDi.Async").fromPromise(function () {
              return o("WAWebDBProcessMessage").storeMessages(t, n, r);
            });
          },
          persistThreadMetadata: function (t) {
            return o("WebDi.Async").fromPromise(function () {
              return o(
                "WAWebDBThreadMetadataBulkHelper",
              ).persistNewMessagesThreadMetadataInBulk(t);
            });
          },
          processRevokes: function (t) {
            return o("WebDi.Async").fromPromise(function () {
              return o(
                "WAWebDBProcessRevokeMsgs",
              ).processRevokeMsgsAndGetCleanupEligibleKeys(t);
            });
          },
          deleteAddOns: function (t, n) {
            return o("WebDi.Async").fromPromise(function () {
              return o("WAWebRequestDeleteAddOns").requestDeleteAddOns(t, n);
            });
          },
          updateMessageTable: function (t, n) {
            return o("WebDi.Async").fromPromise(function () {
              return o("WAWebDBUpdateMessageTable").updateMessageTable(t, n);
            });
          },
          getMsgsByMsgKey: function (t, n) {
            return o("WebDi.Async").fromPromise(function () {
              return o("WAWebDBMsgUtils").getMsgsByMsgKey(t, n);
            });
          },
          removeStatusMessage: function (t) {
            return o("WebDi.Async").fromPromise(function () {
              return o("WAWebDBMessageDelete").removeStatusMessage(t);
            });
          },
          removeExpiredMessagesFromHistory: function (t) {
            return o("WebDi.Async").fromPromise(function () {
              return o(
                "WAWebDBEphemeralMessage",
              ).removeExpiredMessagesFromHistory(t);
            });
          },
        };
        return e;
      },
    );
    l.MessageStoreServiceWebLive = e;
  },
  98,
);
