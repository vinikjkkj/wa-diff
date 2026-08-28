__d(
  "ZenonE2eeMandatedStateManager",
  ["$InternalEnum", "MultiwaySharedTypes"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = n("$InternalEnum").Mirrored(["NONE", "INFRA_AND_PRODUCT_MANDATED"]),
      s = null,
      u = (function () {
        function t() {
          this.$1 = e.NONE;
        }
        var n = t.prototype;
        return (
          (n.processE2eeMandatedStateFromProductAndRing = function (n) {
            this.$1 = n ? e.INFRA_AND_PRODUCT_MANDATED : e.NONE;
          }),
          (n.isInfraE2eeMandated = function () {
            return this.$1 === e.INFRA_AND_PRODUCT_MANDATED;
          }),
          (n.getE2eeInfraMandatedExpStatus = function () {
            return o("MultiwaySharedTypes").E2eeInfraMandatedExpStatus.NOT_SET;
          }),
          t
        );
      })();
    function c() {
      return (s == null && (s = new u()), s);
    }
    var d = c();
    l.default = d;
  },
  98,
);
