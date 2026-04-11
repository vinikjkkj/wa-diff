__d(
  "WAWebStorageUserDefinedPrimaryKey",
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
            (this.columns && this.columns.length === 1) || s(0, 56293));
        }),
        (n.apply = function (t) {
          var e = o("WAWebStorageSchema").cloneSchema(t);
          return (
            e.columns.unshift({
              name: this.columns[0].name,
              packedName: this.columns[0].packedName,
              primaryKey: o("WAWebStorageSchema").PrimaryKeyType.USER_DEFINED,
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
