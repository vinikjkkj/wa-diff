__d(
  "WAWebSchemaDeferredMessagesStorage",
  [
    "WAWebStorageMutationBuilder",
    "WAWebStorageSchema",
    "WAWebWorkerStorageUtils",
    "WAWebWorkerStorageVersions",
  ],
  function (t, n, r, o, a, i, l) {
    var e = o("WAWebStorageMutationBuilder").columnBuilder(),
      s = e.addColumn,
      u = e.addEncryptedColumn,
      c = e.addUserDefinedPrimaryKey;
    function d() {
      o("WAWebWorkerStorageUtils")
        .getStorage()
        .add("deferred_messages")
        .version(
          o("WAWebWorkerStorageVersions").deferredMessagesStorageCreateTable(),
          [
            c("id"),
            s("type"),
            u(
              "plaintext",
              o("WAWebStorageSchema").EncryptedValueType.ARRAY_BUFFER,
            ),
            s("info"),
            s("paymentInfo"),
            s("bizInfo"),
          ],
        )
        .view(function (e) {
          return {
            id: e.id,
            type: e.type,
            plaintext: e.plaintext,
            info: e.info,
            paymentInfo: e.paymentInfo,
            bizInfo: e.bizInfo,
          };
        })
        .useDbMsgEncKeyForEncryptedCol(!0);
    }
    function m() {
      return o("WAWebWorkerStorageUtils")
        .getStorage()
        .table("deferred_messages");
    }
    ((l.addTable = d), (l.getTable = m));
  },
  98,
);
