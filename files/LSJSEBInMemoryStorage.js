__d(
  "LSJSEBInMemoryStorage",
  [
    "EBSMProperties",
    "createLSReStoreEphemeralPersistence",
    "createReStoreEBSMTablesPersistence",
    "createReStoreTableNameAllowListPersistence",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = r("createReStoreTableNameAllowListPersistence")(
        o(
          "createLSReStoreEphemeralPersistence",
        ).createLSReStoreEphemeralPersistence(),
        r("createReStoreEBSMTablesPersistence")(e),
        r("EBSMProperties").persistedTables,
      );
      return t;
    }
    l.makeReStorePersistence = e;
  },
  98,
);
