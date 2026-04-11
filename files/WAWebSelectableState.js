__d(
  "WAWebSelectableState",
  ["WAWebEventEmitter"],
  function (t, n, r, o, a, i, l) {
    var e = (function (e) {
      function t(t) {
        var n;
        return ((n = e.call(this) || this), (n.isSelectable = t), n);
      }
      babelHelpers.inheritsLoose(t, e);
      var n = t.prototype;
      return (
        (n.setSelectable = function (t) {
          return (
            (this.isSelectable = t),
            this.trigger("update-selectable", t),
            this.isSelectable
          );
        }),
        t
      );
    })(r("WAWebEventEmitter"));
    l.default = e;
  },
  98,
);
