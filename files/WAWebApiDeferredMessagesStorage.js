__d(
  "WAWebApiDeferredMessagesStorage",
  [
    "WAWebSchemaDeferredMessagesStorage",
    "WAWebWorkerStorageUtils",
    "asyncToGeneratorRuntime",
  ],
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
        .lock(
          ["deferred_messages"],
          (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var n = e[0];
                yield n.bulkCreateOrReplace(t);
              },
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })(),
        );
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
