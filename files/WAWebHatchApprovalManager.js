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
            (this.$4 = new Map()),
            (this.$5 = new Map()),
            (this.$6 = new Set()),
            (this.$7 = new Map()),
            (this.$8 = []));
        }
        var t = e.prototype;
        return (
          (t.getPendingApprovals = function () {
            return this.$2;
          }),
          (t.getApproval = function (t) {
            return this.$1.get(t);
          }),
          (t.isSettled = function (t) {
            return this.$3.has(t);
          }),
          (t.upsertApproval = function (t) {
            if (!this.$3.has(t.approvalId)) {
              if (this.$4.has(t.approvalId)) {
                this.$4.set(t.approvalId, t);
                return;
              }
              (this.$1.set(t.approvalId, t), this.$9());
            }
          }),
          (t.resolveApproval = function (t) {
            if (this.$4.has(t)) {
              this.$4.set(t, null);
              return;
            }
            this.$1.delete(t) && this.$9();
          }),
          (t.beginDecision = function (t) {
            var e = this.$1.get(t);
            e != null && (this.$4.set(t, e), this.$1.delete(t), this.$9());
          }),
          (t.watchOutcome = function (t, n) {
            this.$5.set(t, n);
          }),
          (t.endDecision = function (t) {
            if ((this.$4.delete(t), !!this.$5.has(t))) {
              if (this.$7.has(t)) {
                this.$10(t, this.$7.get(t));
                return;
              }
              this.$6.add(t);
            }
          }),
          (t.restoreDecision = function (t) {
            var e = this.$4.get(t);
            return (
              this.$4.delete(t),
              this.$6.has(t) || (this.$5.delete(t), this.$7.delete(t)),
              e == null || this.$3.has(t)
                ? !1
                : (this.$1.set(t, e), this.$9(), !0)
            );
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
            return a == null ? !1 : (this.$1.set(t, a), this.$9(), !0);
          }),
          (t.settleApproval = function (t, n) {
            var e = !this.$3.has(t);
            (this.$3.add(t),
              this.$4.delete(t),
              (this.$1.delete(t) || e) && this.$9(),
              this.$6.has(t)
                ? this.$10(t, n)
                : this.$5.has(t) && !this.$7.has(t) && this.$7.set(t, n));
          }),
          (t.$10 = function (t, n) {
            var e = this.$5.get(t);
            (this.$5.delete(t),
              this.$6.delete(t),
              this.$7.delete(t),
              e == null || e(n));
          }),
          (t.subscribe = function (t) {
            var e = this;
            this.$8.push(t);
            var n = !1;
            return function () {
              if (!n) {
                n = !0;
                var r = e.$8.indexOf(t);
                r !== -1 && e.$8.splice(r, 1);
              }
            };
          }),
          (t.$9 = function () {
            this.$2 = Array.from(this.$1.values());
            for (var e of [].concat(this.$8)) e();
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
