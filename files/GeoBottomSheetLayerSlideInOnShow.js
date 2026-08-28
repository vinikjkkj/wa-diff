__d(
  "GeoBottomSheetLayerSlideInOnShow",
  ["csx", "cx", "Style", "SubscriptionsHandler", "autoFlipStyleProps"],
  function (t, n, r, o, a, i, l, s, u) {
    "use strict";
    var e = 600,
      c = (function () {
        function t(e) {
          var t = this;
          ((this.$6 = function () {
            var e = t.$1.getContentRoot();
            (e == null || e.classList.remove("_8t58"),
              e == null || e.classList.add("_8t5b"),
              t.$8());
          }),
            (this.$7 = function () {
              (t.$9(), t.$10());
            }),
            (this.$1 = e),
            (this.$2 = null),
            (this.$3 = null));
        }
        var n = t.prototype;
        return (
          (n.enable = function () {
            (this.$4(),
              this.$5(),
              (this.$2 = new (r("SubscriptionsHandler"))()),
              this.$2.addSubscriptions(
                this.$1.subscribe("beforeshow", this.$6),
                this.$1.subscribe("show", this.$7),
              ));
          }),
          (n.disable = function () {
            this.$2 != null && (this.$2.release(), (this.$2 = null));
          }),
          (n.$11 = function () {
            var e = this.$1.getContentRoot();
            return (
              this.$3 == null &&
                (this.$3 = e == null ? void 0 : e.querySelector("._t3m")),
              this.$3
            );
          }),
          (n.$9 = function () {
            var e = this.$11();
            e != null && r("Style").set(e, "visibility", "hidden");
          }),
          (n.$12 = function () {
            var e = this.$1.getContentRoot(),
              t = this.$11();
            (e == null || e.classList.remove("_8t5b"),
              r("Style").set(t, "visibility", "visible"));
          }),
          (n.$13 = function () {
            var e,
              t = this.$1.getRoot();
            if (t) {
              var n = t.querySelector("._3ixn");
              n == null || (e = n.classList) == null || e.remove("_8t5c");
            }
          }),
          (n.$10 = function () {
            var e,
              t,
              n = this.$1.getRoot();
            if (n) {
              var r = n.querySelector("._3ixn");
              (r == null || (e = r.classList) == null || e.remove("_8t5a"),
                r == null || (t = r.classList) == null || t.add("_8t5c"));
            }
          }),
          (n.$4 = function () {
            var e = 8,
              t = 40,
              n = this.$1.getContentRoot(),
              o = this.$1.getWidth(),
              a = r("autoFlipStyleProps")({
                borderRadius: "8px 8px 0px 0px",
                bottom: "0px",
                height: "calc(100% - " + t + "px)",
                position: "fixed",
                left: e + "px",
                margin: "0 auto",
                right: e + "px",
                width: "calc(100% - " + e * 2 + "px)",
              }),
              i = { maxWidth: o + "px" };
            n != null &&
              a != null &&
              (r("Style").apply(n, a), o != null && r("Style").apply(n, i));
          }),
          (n.$5 = function () {
            var e = this.$1.getContentRoot();
            if (e) {
              var t = e.querySelector("._4t2a");
              t != null &&
                r("Style").apply(t, {
                  borderRadius: "8px 8px 0px 0px",
                  height: "100%",
                  position: "relative",
                });
            }
          }),
          (n.$8 = function () {
            var t = this;
            window.setTimeout(function () {
              (t.$12(), t.$13());
            }, e);
          }),
          t
        );
      })();
    l.default = c;
  },
  98,
);
