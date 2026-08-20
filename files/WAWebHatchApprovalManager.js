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
          (t.hasCheckoutPaymentOption = function (t, n) {
            var e,
              r = (e = this.$1.get(t)) == null ? void 0 : e.browserCheckout;
            return (
              r != null &&
              r.paymentOptions.some(function (e) {
                return e.paymentId === n;
              })
            );
          }),
          (t.applyCheckoutPaymentOption = function (t, n) {
            var e = this.$1.get(t),
              r = e == null ? void 0 : e.browserCheckout;
            if (e == null || r == null) return !1;
            var o = r.paymentOptions.find(function (e) {
              return e.paymentId === n;
            });
            return o == null
              ? !1
              : (this.$1.set(
                  t,
                  babelHelpers.extends({}, e, {
                    browserCheckout: babelHelpers.extends({}, r, {
                      paymentId: o.paymentId,
                      paymentMethodLabel: o.paymentMethodLabel,
                      cardBrand: o.cardBrand,
                      cardLast4: o.cardLast4,
                    }),
                  }),
                ),
                this.$5(),
                !0);
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
    i.default = s;
  },
  66,
);
