__d(
  "WAWebApiDeferredMessagesStorage",
  ["WAWebSchemaDeferredMessagesStorage", "WAWebWorkerStorageUtils"],
  function (t, n, r, o, a, i, l) {
    function e() {
      return o("WAWebSchemaDeferredMessagesStorage")
        .getTable()
        .all()
        .then(function (e) {
          return e.map(function (e) {
            return {
              id: e.id,
              type: e.type,
              plaintext: e.plaintext,
              info: e.info,
              paymentInfo: e.paymentInfo,
              bizInfo: e.bizInfo,
            };
          });
        });
    }
    function s(e) {
      var t = e.map(function (e) {
        return {
          id: e.id,
          type: e.type,
          plaintext: e.plaintext,
          info: e.info,
          paymentInfo: e.paymentInfo,
          bizInfo: e.bizInfo,
        };
      });
      return o("WAWebWorkerStorageUtils")
        .getStorage()
        .lock(["deferred_messages"], async function (e) {
          var n = e[0];
          await n.bulkCreateOrReplace(t);
        });
    }
    function u(e) {
      return o("WAWebSchemaDeferredMessagesStorage").getTable().remove(e);
    }
    function c() {
      return o("WAWebSchemaDeferredMessagesStorage").getTable().clear();
    }
    var d = {
      getDeferredMessages: e,
      updateDeferredMessages: s,
      deleteDeferredMessage: u,
      clearDeferredMessages: c,
    };
    l.default = d;
  },
  98,
);
