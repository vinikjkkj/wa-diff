__d(
  "LayerDestroyOnHide",
  ["setTimeout"],
  function (t, n, r, o, a, i, l) {
    var e = (function () {
      function e(e) {
        ((this.$2 = null), (this.$1 = e));
      }
      var t = e.prototype;
      return (
        (t.enable = function () {
          var e = this,
            t = function () {
              return e.$1.destroy();
            };
          this.$2 = this.$1.subscribe("hide", function () {
            r("setTimeout")(t, 0);
          });
        }),
        (t.disable = function () {
          this.$2 && (this.$2.unsubscribe(), (this.$2 = null));
        }),
        e
      );
    })();
    l.default = e;
  },
  98,
);
