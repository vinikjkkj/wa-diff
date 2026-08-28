__d(
  "LayerTabIsolation",
  ["TabIsolation"],
  function (t, n, r, o, a, i, l) {
    var e = (function () {
      function e(e) {
        ((this.$1 = e), (this.$2 = null), (this.$3 = null));
      }
      var t = e.prototype;
      return (
        (t.enable = function () {
          var e = this.$1.getRoot();
          if (e != null) {
            var t = new (r("TabIsolation"))(e);
            ((this.$2 = t),
              (this.$3 = [
                this.$1.subscribe("show", t.enable.bind(t)),
                this.$1.subscribe("hide", t.disable.bind(t)),
              ]));
          }
        }),
        (t.disable = function () {
          for (; this.$3 && this.$3.length; ) this.$3.pop().unsubscribe();
          (this.$2 && this.$2.disable(), (this.$2 = null));
        }),
        e
      );
    })();
    l.default = e;
  },
  98,
);
