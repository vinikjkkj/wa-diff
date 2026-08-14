__d(
  "LSMetadata",
  [
    "LSClientSchemaType",
    "LSDbSchema",
    "LSVersionedSchemaProvider",
    "ReStoreHashSchemaProvider",
    "ReStoreMetadata",
    "ReStoreSchemaProvider",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return o("ReStoreSchemaProvider").mergeSchemaProviders(e, s);
    }
    var s = new (r("ReStoreHashSchemaProvider"))(
        o("LSClientSchemaType").MAW_SCHEMA_NAME,
        o("ReStoreMetadata").getBuildTableData({})([
          o("LSDbSchema").clientSchema,
        ]),
      ),
      u = e(o("LSVersionedSchemaProvider").schemaProvider);
    ((l.buildSchema = e), (l.schema = u));
  },
  98,
);
