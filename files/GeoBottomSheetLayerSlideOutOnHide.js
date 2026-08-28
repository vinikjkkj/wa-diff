__d(
  "GeoBottomSheetLayerSlideOutOnHide",
  ["csx", "cx", "Style", "SubscriptionsHandler", "setTimeoutAcrossTransitions"],
  function (t, n, r, o, a, i, l, s, u) {
    "use strict";
    var e = 600,
      c = (function () {
        function t(e) {
          var t = this;
          ((this.$3 = function () {
            return (
              r("setTimeoutAcrossTransitions")(function () {
                return t.$4(t.$7);
              }, 0),
              !1
            );
          }),
            (this.$7 = function () {
              (t.$5("unset"), t.$1.finishHide());
            }),
            (this.$1 = e),
            (this.$2 = null));
        }
        var n = t.prototype;
        return (
          (n.enable = function () {
            ((this.$2 = new (r("SubscriptionsHandler"))()),
              this.$2.addSubscriptions(
                this.$1.subscribe("beforehide", this.$3),
              ));
          }),
          (n.disable = function () {
            this.$2 != null && (this.$2.release(), (this.$2 = null));
          }),
          (n.$4 = function (n) {
            var t = this.$1.getContentRoot();
            (this.$5("hidden"),
              t == null || t.classList.add("_8t58"),
              this.$6(),
              window.setTimeout(function () {
                n();
              }, e));
          }),
          (n.$6 = function () {
            var e = this.$1.getRoot(),
              t = e == null ? void 0 : e.querySelector("._3ixn");
            t == null || t.classList.add("_8t5a");
          }),
          (n.$5 = function (t) {
            var e = this.$1.getContentRoot(),
              n = e == null ? void 0 : e.querySelector("._t3m");
            n != null && r("Style").set(n, "visibility", t);
          }),
          t
        );
      })();
    l.default = c;
  },
  98,
);
