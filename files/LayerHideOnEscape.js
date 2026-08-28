__d(
  "LayerHideOnEscape",
  ["CSS", "Event", "Keys", "LayerHideSources"],
  function (t, n, r, o, a, i, l) {
    var e = (function () {
      function e(e) {
        ((this.$2 = null), (this.$1 = e));
      }
      var t = e.prototype;
      return (
        (t.enable = function () {
          var e = this;
          this.$2 = this.$1.subscribe("key", function (t, n) {
            return e.handle(t, n);
          });
        }),
        (t.disable = function () {
          (this.$2 != null && this.$2.unsubscribe(), (this.$2 = null));
        }),
        (t.handle = function (t, n) {
          if (
            r("Event").getKeyCode(n) === r("Keys").ESC &&
            !o("CSS").hasClass(this.$1.getRoot(), "hidden_elem")
          )
            return (this.$1.hide(r("LayerHideSources").ESCAPE), !1);
        }),
        e
      );
    })();
    l.default = e;
  },
  98,
);
