__d(
  "WAWebBroadcastRecipientCollection",
  ["WAWebBroadcastRecipientModel", "WAWebCollection"],
  function (t, n, r, o, a, i, l) {
    var e = (function (e) {
      function t() {
        return e.apply(this, arguments) || this;
      }
      babelHelpers.inheritsLoose(t, e);
      var n = t.prototype;
      return (
        (n.delete = function () {
          (this.forEach(function (e) {
            e.delete();
          }),
            this.stopListening(),
            this.reset());
        }),
        t
      );
    })(r("WAWebCollection"));
    ((e.model = r("WAWebBroadcastRecipientModel")), (l.default = e));
  },
  98,
);
