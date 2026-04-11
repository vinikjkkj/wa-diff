__d(
  "WAWamChannelManager",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
        function e() {
          ((this.$1 = new Map()), (this.$2 = new Map()));
        }
        var t = e.prototype;
        return (
          (t.getChannelInitialized = function (t) {
            return this.$2.get(t) || !1;
          }),
          (t.setChannelInitialized = function (t) {
            this.$2.set(t, !0);
          }),
          (t.isSinkBusy = function (t) {
            return this.$1.get(t) || !1;
          }),
          (t.setSinkBusy = function (t, n) {
            this.$1.set(t, n);
          }),
          (t.close = function () {
            var e = this;
            (this.$1.forEach(function (t, n) {
              e.$1.set(n, !1);
            }),
              this.$2.forEach(function (t, n) {
                e.$2.set(n, !1);
              }));
          }),
          e
        );
      })(),
      l;
    function s() {
      return (l == null && (l = new e()), l);
    }
    function u() {
      l != null && l.close();
    }
    ((i.getChannelManager = s), (i.closeChannelManager = u));
  },
  66,
);
