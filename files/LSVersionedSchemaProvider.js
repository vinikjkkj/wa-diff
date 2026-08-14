__d(
  "LSVersionedSchemaProvider",
  ["LSConstants", "LSDb", "LSDbForeignKeys", "ReStoreVersionedSchemaProvider"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = new (r("ReStoreVersionedSchemaProvider"))(
      o("LSConstants").LS_SCHEMA_NAME,
      o("LSDb").Versions,
      r("LSDbForeignKeys"),
    );
    l.schemaProvider = e;
  },
  98,
);
