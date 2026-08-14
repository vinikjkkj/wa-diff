__d(
  "ReStoreDecryptionFailure",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = "ReStoreDecryptionFailure",
      l = (function (t) {
        function n(n, r) {
          var o,
            a =
              n +
              " - Encrypted Restore was unable to decrypt an entity for table " +
              r;
          return (
            (o = t.call(this, a) || this),
            (o.message = a),
            (o.name = e),
            (o.tableName = r),
            o
          );
        }
        babelHelpers.inheritsLoose(n, t);
        var r = n.prototype;
        return (
          (r.getTableName = function () {
            return this.tableName;
          }),
          n
        );
      })(babelHelpers.wrapNativeSuper(Error));
    i.ReStoreDecryptionFailure = l;
  },
  66,
);
