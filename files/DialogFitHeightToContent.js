__d(
  "DialogFitHeightToContent",
  ["AbstractDialogFitHeight"],
  function (t, n, r, o, a, i, l) {
    var e = (function (e) {
      function t() {
        return e.apply(this, arguments) || this;
      }
      babelHelpers.inheritsLoose(t, e);
      var n = t.prototype;
      return (
        (n.getHeightProperty = function () {
          return "max-height";
        }),
        t
      );
    })(r("AbstractDialogFitHeight"));
    l.default = e;
  },
  98,
);
