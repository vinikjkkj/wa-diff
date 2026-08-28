__d(
  "AdsExperimentsCreativeTestModalSharedState",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
        function e() {
          ((this.$1 = !1),
            (this.$2 = !1),
            (this.$3 = null),
            (this.$4 = new Set()));
        }
        var t = e.prototype;
        return (
          (t.showModal = function (t, n) {
            (t === void 0 && (t = !1),
              (this.$1 = !0),
              (this.$2 = t),
              (this.$3 = n != null ? n : null),
              this.$5());
          }),
          (t.hideModal = function () {
            ((this.$1 = !1), (this.$2 = !1), (this.$3 = null), this.$5());
          }),
          (t.isModalVisible = function () {
            return this.$1;
          }),
          (t.isAnomalyDriven = function () {
            return this.$2;
          }),
          (t.getOriginalAdObjectIds = function () {
            return this.$3;
          }),
          (t.addListener = function (t) {
            var e = this;
            return (
              this.$4.add(t),
              {
                remove: function () {
                  e.$4.delete(t);
                },
              }
            );
          }),
          (t.$5 = function () {
            this.$4.forEach(function (e) {
              return e();
            });
          }),
          e
        );
      })(),
      l = new e(),
      s = l;
    i.default = s;
  },
  66,
);
