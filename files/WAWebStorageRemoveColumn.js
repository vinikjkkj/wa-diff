__d(
  "WAWebStorageRemoveColumn",
  ["invariant", "WAWebStorageMutation", "WAWebStorageSchema"],
  function (t, n, r, o, a, i, l, s) {
    var e = (function (e) {
      function t(t, n) {
        var r;
        return ((r = e.call(this, n) || this), (r.name = t), r);
      }
      babelHelpers.inheritsLoose(t, e);
      var n = t.prototype;
      return (
        (n.validate = function (t) {
          var e = this,
            n = t.columns.find(function (t) {
              return t.name === e.name;
            });
          (n || s(0, 75721, this.name, t.name),
            !n.primaryKey || s(0, 75722, this.name),
            !t.indexes.some(function (t) {
              return o("WAWebStorageSchema").indexContainsColumn(t, e.name);
            }) || s(0, 75723, this.name, t.name));
        }),
        (n.apply = function (t) {
          var e = this,
            n = o("WAWebStorageSchema").cloneSchema(t);
          return (
            n.columns.splice(
              n.columns.findIndex(function (t) {
                return t.name === e.name;
              }),
              1,
            ),
            n
          );
        }),
        t
      );
    })(r("WAWebStorageMutation"));
    l.default = e;
  },
  98,
);
