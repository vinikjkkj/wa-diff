__d(
  "WAWebSchemaStatus",
  [
    "WAWebStatusStorageUtils",
    "WAWebStatusStorageVersions",
    "WAWebStorageMutationBuilder",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = o("WAWebStorageMutationBuilder").columnBuilder(),
      s = e.addAutoIncrementingPrimaryKey,
      u = e.addColumn,
      c = e.addUniqueIndex;
    function d() {
      var e = o("WAWebStatusStorageUtils").getStorage();
      e.add("status").version(
        o("WAWebStatusStorageVersions").statusCreateTable(),
        [
          s("id"),
          u("status_uuid"),
          c("status_uuid"),
          u("sender_user_jid"),
          u("type"),
          u("timestamp"),
          u("state"),
          u("is_archived"),
          u("media_row_id"),
          u("secret"),
        ],
      );
    }
    l.addTable = d;
  },
  98,
);
