__d(
  "WAWebStorageRemoveUniqueIndex",
  ["invariant", "WAWebStorageMutation", "WAWebStorageSchema"],
  function (t, n, r, o, a, i, l, s) {
    var e = (function (e) {
      function t(t, n) {
        var r;
        return ((r = e.call(this, n) || this), (r.column = t), r);
      }
      babelHelpers.inheritsLoose(t, e);
      var n = t.prototype;
      return (
        (n.validate = function (t) {
          o("WAWebStorageSchema").findIndex(
            t,
            this.$RemoveUniqueIndex$p_1(),
          ) !== -1 || s(0, 75718, this.column, t.name);
        }),
        (n.apply = function (t) {
          var e = o("WAWebStorageSchema").cloneSchema(t),
            n = o("WAWebStorageSchema").findIndex(
              t,
              this.$RemoveUniqueIndex$p_1(),
            );
          return (e.indexes.splice(n, 1), e);
        }),
        (n.$RemoveUniqueIndex$p_1 = function () {
          return {
            type: o("WAWebStorageSchema").INDEX_TYPE.UNIQUE,
            column: this.column,
          };
        }),
        t
      );
    })(r("WAWebStorageMutation"));
    l.default = e;
  },
  98,
);
