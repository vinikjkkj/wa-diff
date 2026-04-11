__d(
  "WAWebStorageAddIndex",
  ["invariant", "WAWebStorageMutation", "WAWebStorageSchema"],
  function (t, n, r, o, a, i, l, s) {
    var e = (function (e) {
      function t(t, n) {
        var r;
        return (
          (r = e.call(this, n) || this),
          (r.keyPath = t),
          (r.column = t.split(".")[0]),
          r
        );
      }
      babelHelpers.inheritsLoose(t, e);
      var n = t.prototype;
      return (
        (n.validate = function (t) {
          var e = this,
            n = t.columns.find(function (t) {
              return t.packedName === e.column;
            });
          (n || s(0, 75731, this.column, t.name),
            (n &&
              (!n.primaryKey ||
                n.primaryKey ===
                  o("WAWebStorageSchema").PrimaryKeyType.COMPOSITE)) ||
              s(0, 75732, t.name),
            !t.indexes.some(function (t) {
              return (
                (t.type === o("WAWebStorageSchema").INDEX_TYPE.ARRAY ||
                  t.type === o("WAWebStorageSchema").INDEX_TYPE.SIMPLE ||
                  t.type === o("WAWebStorageSchema").INDEX_TYPE.UNIQUE) &&
                o("WAWebStorageSchema").indexContainsColumn(t, e.column)
              );
            }) || s(0, 75733, this.column, t.name));
        }),
        (n.apply = function (t) {
          var e = o("WAWebStorageSchema").cloneSchema(t);
          return (e.indexes.push(this.$AddIndex$p_1()), e);
        }),
        (n.$AddIndex$p_1 = function () {
          return {
            type: o("WAWebStorageSchema").INDEX_TYPE.SIMPLE,
            column: this.keyPath,
          };
        }),
        t
      );
    })(r("WAWebStorageMutation"));
    l.default = e;
  },
  98,
);
