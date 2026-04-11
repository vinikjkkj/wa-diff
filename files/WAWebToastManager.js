__d(
  "WAWebToastManager",
  ["$InternalEnum", "WAWebEventEmitter"],
  function (t, n, r, o, a, i, l) {
    var e = n("$InternalEnum").Mirrored(["LEFT", "CENTER", "RIGHT"]),
      s = (function (e) {
        function t() {
          return e.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(t, e);
        var n = t.prototype;
        return (
          (n.open = function (t, n) {
            this.trigger("open_toast", t, n);
          }),
          (n.close = function (t) {
            this.trigger("close_toast", t);
          }),
          t
        );
      })(r("WAWebEventEmitter")),
      u = new s();
    ((l.ToastPosition = e), (l.ToastManager = u));
  },
  98,
);
