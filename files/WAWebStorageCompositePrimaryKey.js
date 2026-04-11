__d(
  "WAWebStorageCompositePrimaryKey",
  ["invariant", "WAWebStorageAbstractPrimaryKey", "WAWebStorageSchema"],
  function (t, n, r, o, a, i, l, s) {
    var e = (function (e) {
      function t() {
        return e.apply(this, arguments) || this;
      }
      babelHelpers.inheritsLoose(t, e);
      var n = t.prototype;
      return (
        (n.validate = function (n) {
          (e.prototype.validate.call(this, n),
            (this.columns && this.columns.length > 1) || s(0, 56266));
        }),
        (n.apply = function (t) {
          var e = o("WAWebStorageSchema").cloneSchema(t);
          return (
            this.columns.forEach(function (t) {
              e.columns.push({
                name: t.name,
                packedName: t.packedName,
                primaryKey: o("WAWebStorageSchema").PrimaryKeyType.COMPOSITE,
              });
            }),
            e
          );
        }),
        t
      );
    })(r("WAWebStorageAbstractPrimaryKey"));
    l.default = e;
  },
  98,
);
