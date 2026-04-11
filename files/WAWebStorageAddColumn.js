__d(
  "WAWebStorageAddColumn",
  ["invariant", "WAWebStorageMutation", "WAWebStorageSchema"],
  function (t, n, r, o, a, i, l, s) {
    var e = (function (e) {
      function t(t, n, r) {
        var o;
        return (
          (o = e.call(this, r) || this),
          (o.name = t),
          (o.packedName = n),
          o
        );
      }
      babelHelpers.inheritsLoose(t, e);
      var n = t.prototype;
      return (
        (n.validate = function (t) {
          var e = this;
          !t.columns.find(function (t) {
            return t.name === e.name;
          }) || s(0, 75717, this.name, t.name);
        }),
        (n.apply = function (t) {
          var e = o("WAWebStorageSchema").cloneSchema(t);
          return (
            e.columns.push({ name: this.name, packedName: this.packedName }),
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
