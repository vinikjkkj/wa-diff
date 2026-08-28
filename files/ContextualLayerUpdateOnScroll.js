__d(
  "ContextualLayerUpdateOnScroll",
  ["Event"],
  function (t, n, r, o, a, i, l) {
    var e = (function () {
      function e(e) {
        ((this.$3 = []), (this.$1 = e));
      }
      var t = e.prototype;
      return (
        (t.enable = function () {
          var e = this;
          this.$3 = [
            this.$1.subscribe("show", function () {
              return e.$4();
            }),
            this.$1.subscribe("hide", function () {
              return e.$5();
            }),
          ];
        }),
        (t.disable = function () {
          for (; this.$3.length; ) {
            var e;
            (e = this.$3.pop()) == null || e.unsubscribe();
          }
        }),
        (t.$4 = function () {
          var e = this,
            t = this.$1.getContextScrollParent(),
            n = this.$1.getInsertScrollParent();
          this.$2 != null ||
            t === n ||
            (this.$2 = r("Event").listen(t, "scroll", function () {
              e.$1.updatePosition();
            }));
        }),
        (t.$5 = function () {
          (this.$2 && this.$2.remove(), (this.$2 = null));
        }),
        e
      );
    })();
    l.default = e;
  },
  98,
);
