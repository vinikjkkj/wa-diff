__d(
  "EBMinosSaveNewMessageEncryptionKey",
  ["EBMinosDb"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = async function (t) {
      if (t.length !== 0) {
        var e = await o("EBMinosDb").getEBMinosDb();
        await e.runInTransaction(
          ["secure_minos_thread_message_encryption_keys_v2"],
          "readwrite",
          function (e) {
            return e.stores.secure_minos_thread_message_encryption_keys_v2.bulkPut(
              t,
            );
          },
          "BulkSaveMessageEncryptionKeys",
        );
      }
    };
    l.saveNewMessageEncryptionKey = e;
  },
  98,
);
