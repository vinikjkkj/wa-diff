__d(
  "WAWebFlatListController",
  [],
  function (t, n, r, o, a, i) {
    var e = (function () {
      function e() {}
      var t = e.prototype;
      return (
        (t.registerContainer = function (t) {
          ((this.$1 = t), this.$2 && t.onRegisterList());
        }),
        (t.unregisterContainer = function () {
          this.$1 = null;
        }),
        (t.triggerScroll = function () {
          this.$2 && this.$2.handleScroll();
        }),
        (t.triggerLayout = function (t) {
          this.$2 && this.$2.handleLayout(t);
        }),
        (t.registerList = function (t) {
          ((this.$2 = t), this.$1 && this.$1.onRegisterList());
        }),
        (t.unregisterList = function () {
          this.$2 = null;
        }),
        (t.getScrollFromStart = function () {
          if (this.$1) return this.$1.getScrollFromStart();
        }),
        (t.setScrollFromStart = function (t) {
          this.$1 && this.$1.setScrollFromStart(t);
        }),
        e
      );
    })();
    i.default = e;
  },
  66,
);
