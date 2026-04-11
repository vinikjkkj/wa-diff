__d(
  "WAWebFormatMutator",
  ["WAWebBoolFunc", "err"],
  function (t, n, r, o, a, i, l) {
    var e = (function () {
      function e() {}
      return (
        (e.match = function (t, n, o) {
          throw r("err")("Subclasses of `Mutator` must override `match()`");
        }),
        (e.mutate = function (t, n, r) {
          return t;
        }),
        e
      );
    })();
    ((e.nestable = o("WAWebBoolFunc").returnTrue),
      (e.format = !0),
      (e.fragment = !1),
      (e.compatibility = !1),
      (e.mutates = !1),
      (l.default = e));
  },
  98,
);
