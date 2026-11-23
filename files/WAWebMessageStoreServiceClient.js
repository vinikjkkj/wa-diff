__d(
  "WAWebMessageStoreServiceClient",
  ["WAWebMessageStoreService"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return {
        storeMessages: function (n, r, a) {
          return e(
            o("WAWebMessageStoreService").MessageStoreService,
            function (e) {
              return e.storeMessages(n, r, a);
            },
          );
        },
        persistThreadMetadata: function (n) {
          return e(
            o("WAWebMessageStoreService").MessageStoreService,
            function (e) {
              return e.persistThreadMetadata(n);
            },
          );
        },
        processRevokes: function (n) {
          return e(
            o("WAWebMessageStoreService").MessageStoreService,
            function (e) {
              return e.processRevokes(n);
            },
          );
        },
        deleteAddOns: function (n, r) {
          return e(
            o("WAWebMessageStoreService").MessageStoreService,
            function (e) {
              return e.deleteAddOns(n, r);
            },
          );
        },
        updateMessageTable: function (n, r) {
          return e(
            o("WAWebMessageStoreService").MessageStoreService,
            function (e) {
              return e.updateMessageTable(n, r);
            },
          );
        },
        getMsgsByMsgKey: function (n, r) {
          return e(
            o("WAWebMessageStoreService").MessageStoreService,
            function (e) {
              return e.getMsgsByMsgKey(n, r);
            },
          );
        },
        removeStatusMessage: function (n) {
          return e(
            o("WAWebMessageStoreService").MessageStoreService,
            function (e) {
              return e.removeStatusMessage(n);
            },
          );
        },
        removeExpiredMessagesFromHistory: function (n) {
          return e(
            o("WAWebMessageStoreService").MessageStoreService,
            function (e) {
              return e.removeExpiredMessagesFromHistory(n);
            },
          );
        },
      };
    }
    l.messageStoreServiceClient = e;
  },
  98,
);
