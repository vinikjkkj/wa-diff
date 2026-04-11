__d(
  "WAWebStorageAddEncryptedColumn",
  ["invariant", "WAWebStorageMutation", "WAWebStorageSchema"],
  function (t, n, r, o, a, i, l, s) {
    var e = (function (e) {
      function t(t, n, r, o) {
        var a;
        return (
          (a = e.call(this, o) || this),
          (a.name = t),
          (a.packedName = n),
          (a.dataType = r),
          a
        );
      }
      babelHelpers.inheritsLoose(t, e);
      var n = t.prototype;
      return (
        (n.validate = function (t) {
          var e = this;
          !t.columns.find(function (t) {
            return t.name === e.name;
          }) || s(0, 75738, this.name, t.name);
        }),
        (n.apply = function (t) {
          var e = o("WAWebStorageSchema").cloneSchema(t);
          return (
            e.columns.push({ name: this.name, packedName: this.packedName }),
            (e.encryptedColumns[this.name] = this.dataType),
            e
          );
        }),
        t
      );
    })(r("WAWebStorageMutation"));
    l.default = e;
  },
  98,
);
