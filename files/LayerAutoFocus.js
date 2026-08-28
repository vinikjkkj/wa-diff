__d(
  "LayerAutoFocus",
  ["focusWithinLayer"],
  function (t, n, r, o, a, i, l) {
    var e = (function () {
      function e(e) {
        ((this.$2 = null), (this.$1 = e), (this.$2 = null));
      }
      var t = e.prototype;
      return (
        (t.enable = function () {
          var e = this;
          this.$2 = this.$1.subscribe("aftershow", function () {
            return e.$3();
          });
        }),
        (t.disable = function () {
          (this.$2 && this.$2.unsubscribe(), (this.$2 = null));
        }),
        (t.$3 = function () {
          var e = this.$1.getRoot();
          e && r("focusWithinLayer")(e, !0);
        }),
        e
      );
    })();
    l.default = e;
  },
  98,
);
