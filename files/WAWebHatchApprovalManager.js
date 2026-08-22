__d(
  "WAWebHatchApprovalManager",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
        function e() {
          ((this.$1 = new Map()),
            (this.$2 = []),
            (this.$3 = new Set()),
            (this.$4 = []));
        }
        var t = e.prototype;
        return (
          (t.getPendingApprovals = function () {
            return this.$2;
          }),
          (t.getApproval = function (t) {
            return this.$1.get(t);
          }),
          (t.upsertApproval = function (t) {
            this.$3.has(t.approvalId) ||
              (this.$1.set(t.approvalId, t), this.$5());
          }),
          (t.resolveApproval = function (t) {
            this.$1.delete(t) && this.$5();
          }),
          (t.getFundedCheckout = function (t) {
            return u(this.$1.get(t));
          }),
          (t.hasCheckoutPaymentOption = function (t, n) {
            var e;
            return (
              ((e = u(this.$1.get(t))) == null
                ? void 0
                : e.paymentOptions.some(function (e) {
                    return e.paymentId === n;
                  })) === !0
            );
          }),
          (t.applyCheckoutPaymentOption = function (t, n) {
            var e = this.$1.get(t),
              r = u(e);
            if (e == null || r == null) return !1;
            var o = r.paymentOptions.find(function (e) {
              return e.paymentId === n;
            });
            if (o == null) return !1;
            var a = c(e, o);
            return a == null ? !1 : (this.$1.set(t, a), this.$5(), !0);
          }),
          (t.settleApproval = function (t) {
            (this.$3.add(t), this.resolveApproval(t));
          }),
          (t.subscribe = function (t) {
            var e = this;
            this.$4.push(t);
            var n = !1;
            return function () {
              if (!n) {
                n = !0;
                var r = e.$4.indexOf(t);
                r !== -1 && e.$4.splice(r, 1);
              }
            };
          }),
          (t.__resetForTesting = function () {
            ((this.$1 = new Map()),
              (this.$2 = []),
              (this.$3 = new Set()),
              (this.$4 = []));
          }),
          (t.$5 = function () {
            this.$2 = Array.from(this.$1.values());
            for (var e of [].concat(this.$4)) e();
          }),
          e
        );
      })(),
      l = new e(),
      s = l;
    function u(e) {
      var t;
      return (t = e == null ? void 0 : e.shopifyCheckout) != null
        ? t
        : e == null
          ? void 0
          : e.browserCheckout;
    }
    function c(e, t) {
      var n = e.browserCheckout,
        r = e.shopifyCheckout,
        o = {
          paymentId: t.paymentId,
          paymentMethodLabel: t.paymentMethodLabel,
          cardBrand: t.cardBrand,
          cardLast4: t.cardLast4,
        };
      return r != null
        ? babelHelpers.extends({}, e, {
            shopifyCheckout: babelHelpers.extends({}, r, o),
          })
        : n != null
          ? babelHelpers.extends({}, e, {
              browserCheckout: babelHelpers.extends({}, n, o),
            })
          : null;
    }
    i.default = s;
  },
  66,
);
