__d(
  "AdsICPlacementWithCap",
  ["AHGLogUtils", "AdsICFilterIfNoLeftSpace", "AdsICPlacement", "immutable"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function (e) {
      function t(t, n, o, a) {
        var i;
        return (
          a === void 0 && (a = r("immutable").Map()),
          (i = e.call(this, t, n, Array.from(a.keys())) || this),
          (i.$AdsICPlacementWithCap1 = o),
          (i.$AdsICPlacementWithCap2 = o),
          (i.$AdsICPlacementWithCap3 = new (r("AdsICFilterIfNoLeftSpace"))(
            i.$AdsICPlacementWithCap2,
          )),
          (i.$AdsICPlacementWithCap4 = a),
          (i.$AdsICPlacementWithCap5 = a),
          (i.$AdsICPlacementWithCap6 = a.map(function (e) {
            return new (r("AdsICFilterIfNoLeftSpace"))(e);
          })),
          i
        );
      }
      babelHelpers.inheritsLoose(t, e);
      var n = t.prototype;
      return (
        (n.getAvailableCap = function () {
          return this.$AdsICPlacementWithCap2;
        }),
        (n.resetCap = function () {
          var e = this,
            t = this.$AdsICPlacementWithCap1,
            n = this.__visibleMessages.size;
          ((this.$AdsICPlacementWithCap2 = t - n),
            (this.$AdsICPlacementWithCap5 = this.$AdsICPlacementWithCap4.map(
              function (t, n) {
                var r,
                  o,
                  a =
                    (r =
                      (o = e.__visibleMessagesInMessageGroups.get(n)) == null
                        ? void 0
                        : o.size) != null
                      ? r
                      : 0;
                return t - a;
              },
            )),
            o("AHGLogUtils").logResetCap(
              this.getName(),
              this.$AdsICPlacementWithCap2,
            ));
        }),
        (n.__customLogicForShowingMessage = function (t, n, r) {
          var e = t.moveAllowlistedToFront();
          (this.$AdsICPlacementWithCap7(e, n, r),
            this.$AdsICPlacementWithCap8(e));
        }),
        (n.__updateCapIfNewVisibleMessageAdded = function (t, n, r) {
          (t || r) && this.__updateCap(n);
        }),
        (n.__showMessage = function (n, r) {
          var t = e.prototype.__showMessage.call(this, n, r);
          return (this.__updateCapIfNewVisibleMessageAdded(t, n, r), t);
        }),
        (n.__updateCap = function (t) {
          this.$AdsICPlacementWithCap2 = Math.max(
            0,
            this.$AdsICPlacementWithCap2 - 1,
          );
          var e = t.getMessageGroup();
          if (e != null) {
            var n;
            this.$AdsICPlacementWithCap5 = this.$AdsICPlacementWithCap5.set(
              e,
              Math.max(
                0,
                ((n = this.$AdsICPlacementWithCap5.get(e)) != null ? n : 0) - 1,
              ),
            );
          }
        }),
        (n.$AdsICPlacementWithCap7 = function (t, n, r) {
          var e = this;
          t.getAll().forEach(function (t) {
            var o = t.getMessageGroup(),
              a = null;
            (o != null &&
              ((a = e.$AdsICPlacementWithCap6.get(o)),
              a.setAvailableCap(e.$AdsICPlacementWithCap5.get(o))),
              e.$AdsICPlacementWithCap3.setAvailableCap(
                e.$AdsICPlacementWithCap2,
              ));
            var i = a == null || a.filter(t, n),
              l = e.$AdsICPlacementWithCap3.filter(t, n);
            i && l
              ? e.__checkQEAndShowMessage(t, n, r)
              : a != null && !i
                ? e.__updateInvalidMessage(a, t)
                : e.__updateInvalidMessage(e.$AdsICPlacementWithCap3, t);
          });
        }),
        (n.$AdsICPlacementWithCap8 = function (t) {
          var e = t.getAll();
          e.size == 0 ||
            this.__visibleMessages.size == 0 ||
            this.__visibleMessages.forEach(function (t) {
              o("AHGLogUtils").logEligibleMessages(e, t);
            });
        }),
        t
      );
    })(r("AdsICPlacement"));
    l.default = e;
  },
  98,
);
