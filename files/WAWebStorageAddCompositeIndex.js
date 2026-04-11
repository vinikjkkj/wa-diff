__d(
  "WAWebStorageAddCompositeIndex",
  ["invariant", "WAWebStorageMutation", "WAWebStorageSchema"],
  function (t, n, r, o, a, i, l, s) {
    var e = (function (e) {
      function t(t, n) {
        var r;
        return ((r = e.call(this, n) || this), (r.columns = [].concat(t)), r);
      }
      babelHelpers.inheritsLoose(t, e);
      var n = t.prototype;
      return (
        (n.validate = function (t) {
          var e = this;
          (this.columns.forEach(function (e) {
            t.columns.find(function (t) {
              return t.packedName === e;
            }) || s(0, 75731, e, t.name);
          }),
            this.columns.length > 1 || s(0, 56264),
            o("WAWebStorageSchema").findIndex(
              t,
              this.$AddCompositeIndex$p_1(),
            ) === -1 || s(0, 75735, String(this.columns), t.name));
          var n = t.columns
            .filter(function (e) {
              return (
                e.primaryKey &&
                e.primaryKey ===
                  o("WAWebStorageSchema").PrimaryKeyType.COMPOSITE
              );
            })
            .map(function (e) {
              return e.name;
            });
          n.length !== this.columns.length ||
            n.some(function (t) {
              return !e.columns.includes(t);
            }) ||
            s(0, 75736, String(this.columns), t.name);
        }),
        (n.apply = function (t) {
          var e = o("WAWebStorageSchema").cloneSchema(t);
          return (e.indexes.push(this.$AddCompositeIndex$p_1()), e);
        }),
        (n.$AddCompositeIndex$p_1 = function () {
          return {
            type: o("WAWebStorageSchema").INDEX_TYPE.COMPOSITE,
            columns: this.columns,
          };
        }),
        t
      );
    })(r("WAWebStorageMutation"));
    l.default = e;
  },
  98,
);
