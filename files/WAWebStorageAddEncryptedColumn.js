__d(
  "WAWebStorageAddEncryptedColumn",
  ["invariant", "WAWebStorageMutation", "WAWebStorageSchema"],
  function (t, n, r, o, a, i, l, s) {
    var e = (function (e) {
      function t(t) {
        var n,
          r = t.dataType,
          o = t.name,
          a = t.opts,
          i = t.packedName;
        return (
          (n = e.call(this, a) || this),
          (n.name = o),
          (n.packedName = i),
          (n.dataType = r),
          n
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
