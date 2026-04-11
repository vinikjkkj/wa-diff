__d(
  "WAWebStorageAbstractPrimaryKey",
  ["invariant", "WAWebStorageMutation", "err"],
  function (t, n, r, o, a, i, l, s) {
    var e = (function (e) {
      function t(t, n) {
        var r;
        return (
          (r = e.call(this, n) || this),
          r.constructor.name !== "AbstractPrimaryKey" || s(0, 56321),
          Array.isArray(t) ? (r.columns = [].concat(t)) : (r.columns = [t]),
          r
        );
      }
      babelHelpers.inheritsLoose(t, e);
      var n = t.prototype;
      return (
        (n.validate = function (t) {
          t.columns.length === 0 || s(0, 56320);
        }),
        (n.apply = function (t) {
          throw r("err")(
            "Subclass of `AbstractPrimaryKey` must implement `apply` method",
          );
        }),
        t
      );
    })(r("WAWebStorageMutation"));
    l.default = e;
  },
  98,
);
