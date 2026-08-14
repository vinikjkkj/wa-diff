__d(
  "ReStorePersistedMetadata",
  [
    "JSONStringifyBigIntSafe",
    "ReStoreCommonUtils",
    "ReStoreHashMigration",
    "ReStorePersistenceIds",
    "hashString",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "_db_schema_meta",
      s = (function () {
        function t(e) {
          this.$1 = o("ReStorePersistenceIds").castPersistenceId(e);
        }
        var n = t.prototype;
        return (
          (n.read = async function (n) {
            var t = await o("ReStoreCommonUtils").gen(
              n.table(e).readData(new WeakMap(), this.$1),
            );
            return t;
          }),
          (n.write = function (n, r) {
            n.table(e).writeData(new WeakMap(), this.$1, r);
          }),
          (n.getId = function () {
            return this.$1;
          }),
          t
        );
      })(),
      u = (function (e) {
        function t(t) {
          return e.call(this, t + "_schema_version") || this;
        }
        return (
          babelHelpers.inheritsLoose(t, e),
          (t.hash = function (t) {
            return r("hashString")(
              o("ReStoreHashMigration").serializeTableData(t),
            );
          }),
          t
        );
      })(s),
      c = (function (e) {
        function t() {
          return e.call(this, "custom_migration_value_version") || this;
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(s),
      d = (function (e) {
        function t(t) {
          return e.call(this, t + "_default_value_version") || this;
        }
        return (
          babelHelpers.inheritsLoose(t, e),
          (t.hash = function (t) {
            return r("hashString")(r("JSONStringifyBigIntSafe")(t));
          }),
          t
        );
      })(s);
    ((l.schemaMetadataTableName = e),
      (l.ReStorePersistedSchemaVersion = u),
      (l.ReStorePersistedCustomMigrationVersion = c),
      (l.ReStorePersistedDefaultValuesVersion = d));
  },
  98,
);
