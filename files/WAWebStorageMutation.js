__d(
  "WAWebStorageMutation",
  ["invariant", "err"],
  function (t, n, r, o, a, i, l, s) {
    var e = (function () {
      function e(e) {
        ((e == null ? void 0 : e.intentionallyUsePrivateConstructor) === !0 ||
          s(0, 69810),
          this.constructor.name !== "Mutation" || s(0, 56364));
      }
      var t = e.prototype;
      return (
        (t.validate = function (t) {
          throw r("err")("Subclasses of Mutation must implement `validate`");
        }),
        (t.apply = function (t) {
          throw r("err")("Subclasses of Mutation must implement `apply`");
        }),
        e
      );
    })();
    l.default = e;
  },
  98,
);
