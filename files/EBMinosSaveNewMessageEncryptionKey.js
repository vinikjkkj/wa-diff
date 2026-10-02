__d(
  "EBMinosSaveNewMessageEncryptionKey",
  ["EBMinosDb", "asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function () {
      var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
        if (e.length !== 0) {
          var t = yield o("EBMinosDb").getEBMinosDb();
          yield t.runInTransaction(
            ["secure_minos_thread_message_encryption_keys_v2"],
            "readwrite",
            function (t) {
              return t.stores.secure_minos_thread_message_encryption_keys_v2.bulkPut(
                e,
              );
            },
            "BulkSaveMessageEncryptionKeys",
          );
        }
      });
      return function (n) {
        return e.apply(this, arguments);
      };
    })();
    l.saveNewMessageEncryptionKey = e;
  },
  98,
);
