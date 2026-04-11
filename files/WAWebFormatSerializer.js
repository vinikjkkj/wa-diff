__d(
  "WAWebFormatSerializer",
  ["err"],
  function (t, n, r, o, a, i, l) {
    var e = (function () {
      function e() {}
      return (
        (e.onMutator = function (t, n, o, a, i) {
          throw r("err")(
            "Subclasses of `Serializer` must override `onMutator()`",
          );
        }),
        (e.onRoot = function (t, n) {
          throw r("err")("Subclasses of `Serializer` must override `onRoot()`");
        }),
        (e.onText = function (t, n) {
          throw r("err")("Subclasses of `Serializer` must override `onText()`");
        }),
        (e.onDelimiter = function (t, n) {
          throw r("err")(
            "Subclasses of `Serializer` must override `onDelimiter()`",
          );
        }),
        e
      );
    })();
    l.default = e;
  },
  98,
);
