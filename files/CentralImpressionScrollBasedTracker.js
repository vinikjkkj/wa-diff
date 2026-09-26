__d(
  "CentralImpressionScrollBasedTracker",
  [
    "CentralImpressionRecord",
    "CometThrottle",
    "ImpressionLoggingTimerThreshold.experimental",
    "Visibility",
    "calcNextImpressionSnapshotRecord",
    "setTimeout",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function () {
      function e(e, t, n, a) {
        var i = this;
        (n === void 0 && (n = null),
          a === void 0 && (a = {}),
          (this.THROTTLE_TIMEOUT = r(
            "ImpressionLoggingTimerThreshold.experimental",
          ).THROTTLE_TIMEOUT),
          (this.takeSnapshot = r("CometThrottle")(function () {
            if (!(i.$3 == null || i.$8 === !0)) {
              var e = i.$7,
                t = e.isCometHiddenSubtree,
                n = e.viewportMargin,
                o = r("calcNextImpressionSnapshotRecord")(i.$3, i.$2, {
                  isCometHiddenSubtree: t,
                  viewportMargin: n,
                });
              i.$9(o);
            }
          }, this.THROTTLE_TIMEOUT)),
          (this.takeSnapshotWithDoubleRaf = r("CometThrottle")(function () {
            if (!(i.$3 == null || i.$8 === !0)) {
              var e = i.$7,
                t = e.isCometHiddenSubtree,
                n = e.viewportMargin,
                o = r("calcNextImpressionSnapshotRecord")(i.$3, i.$2, {
                  isCometHiddenSubtree: t,
                  viewportMargin: n,
                });
              i.$9(o);
            }
          }, this.THROTTLE_TIMEOUT)),
          (this.$5 = n),
          (this.$2 = o("CentralImpressionRecord").initImpressionRecord(e)),
          (this.$1 = t),
          (this.$3 = e),
          (this.$7 = a),
          (this.$8 = !1),
          r("setTimeout")(this.takeSnapshotWithDoubleRaf, 0),
          document.addEventListener("scroll", this.takeSnapshotWithDoubleRaf, {
            capture: !0,
            passive: !0,
          }),
          window.addEventListener("resize", this.takeSnapshotWithDoubleRaf, {
            capture: !0,
            passive: !0,
          }),
          "MutationObserver" in window &&
            ((this.$6 = new MutationObserver(this.takeSnapshotWithDoubleRaf)),
            this.$6.observe(document, {
              attributes: !0,
              characterData: !0,
              childList: !0,
              subtree: !0,
            })),
          (this.$4 = [
            r("Visibility").addListener(
              r("Visibility").HIDDEN,
              this.takeSnapshot,
            ),
            r("Visibility").addListener(
              r("Visibility").VISIBLE,
              this.takeSnapshot,
            ),
          ]));
      }
      var t = e.prototype;
      return (
        (t.getOptionalUniqueID = function () {
          return this.$5;
        }),
        (t.peek = function () {
          return this.$2;
        }),
        (t.setIsCometHiddenInSubtree = function (t) {
          this.$7.isCometHiddenSubtree = t;
        }),
        (t.remove = function () {
          (document.removeEventListener(
            "scroll",
            this.takeSnapshotWithDoubleRaf,
            { capture: !0 },
          ),
            window.removeEventListener(
              "resize",
              this.takeSnapshotWithDoubleRaf,
              { capture: !0 },
            ),
            this.$6 && this.$6.disconnect(),
            this.$4.forEach(function (e) {
              return e.remove();
            }),
            (this.$8 = !0));
        }),
        (t.unmount = function () {
          var e = o("CentralImpressionRecord").calcExitRecordOnUnmount(this.$2);
          (e != null && this.$9(e), this.remove());
        }),
        (t.update = function (t, n, r) {
          (r === void 0 && (r = {}),
            (this.$1 = n),
            (this.$3 = t),
            (this.$7 = babelHelpers.extends({}, this.$7, r)));
        }),
        (t.$9 = function (t) {
          var e = this.$2;
          ((this.$2 = t),
            t.status != null && this.$1(t, this, e, this.$7.isAdRefresh || !1));
        }),
        e
      );
    })();
    l.default = e;
  },
  98,
);
