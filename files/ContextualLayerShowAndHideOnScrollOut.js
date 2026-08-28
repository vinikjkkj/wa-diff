__d(
  "ContextualLayerShowAndHideOnScrollOut",
  ["Event", "SubscriptionsHandler"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function () {
      function e(e) {
        this.$1 = e;
      }
      var t = e.prototype;
      return (
        (t.enable = function () {
          var e = this;
          (this.$2 ||
            ((this.$2 = new (r("SubscriptionsHandler"))()),
            this.$2.addSubscriptions(
              this.$1.subscribe("contextchange", function () {
                return e.$5();
              }),
            )),
            this.attach());
        }),
        (t.disable = function () {
          if (this.$2)
            for (; this.$2.length; ) {
              var e;
              (e = this.$2.pop()) == null || e.unsubscribe();
            }
          this.detach();
        }),
        (t.attach = function () {
          var e = this;
          this.$3 ||
            ((this.$4 = this.$1.getContextScrollParent()),
            this.$4 !== window &&
              (this.$3 = r("Event").listen(this.$4, "scroll", function () {
                return e.$6();
              })));
        }),
        (t.detach = function () {
          (this.$3 && this.$3.remove(), (this.$3 = null));
        }),
        (t.$6 = function () {
          var e = this.$1.getContext().getBoundingClientRect(),
            t = this.$4.getBoundingClientRect(),
            n = e.bottom <= t.top || e.top >= t.bottom,
            r = e.right <= t.left || e.left >= t.right;
          n || r ? this.$1.hide() : this.$1.show();
        }),
        (t.$5 = function () {
          (this.detach(), this.$1.isShown() && this.attach());
        }),
        e
      );
    })();
    l.default = e;
  },
  98,
);
