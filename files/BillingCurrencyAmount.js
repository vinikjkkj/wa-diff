__d(
  "BillingCurrencyAmount",
  [
    "$InternalEnum",
    "AdsCurrencyFormatter",
    "BillingCurrencyAmount_PBCurrencyQuantity.graphql",
    "BillingCurrencyAmount_amount.graphql",
    "BillingErrorUtils",
    "BillingLocaleUtil",
    "PECurrency",
    "RelayHooks",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = e !== void 0 ? e : (e = n("BillingCurrencyAmount_amount.graphql")),
      c =
        s !== void 0
          ? s
          : (s = n("BillingCurrencyAmount_PBCurrencyQuantity.graphql")),
      d = n("$InternalEnum").Mirrored(["HIDE", "PREFIX", "SUFFIX"]),
      m = (function () {
        function e() {
          ((this.$1 = 0), (this.currency = "USD"), (this.isInput = !1));
        }
        ((e.fromPECurrencyAmount = function (n) {
          var t,
            r = new e();
          return (
            r.$2(
              (t = n.amount_with_offset) != null ? t : "0",
              n.currency == null || n.currency === "" ? "USD" : n.currency,
            ),
            r
          );
        }),
          (e.fromZero = function (n) {
            var t = new e();
            return (t.$2("0", n), t);
          }),
          (e.fromInput = function (n, a) {
            var t = new e(),
              i =
                o("AdsCurrencyFormatter").parsePECurrency(a, n) *
                r("PECurrency").DEFAULT_AMOUNT_OFFSET,
              l = String(i.toFixed(0));
            return (t.$2(l, a), t);
          }),
          (e.fromWizardProp = function (t) {
            return t.do_not_use_amount_with_offset != null
              ? this.fromPECurrencyAmount({
                  amount_with_offset: t.do_not_use_amount_with_offset,
                  currency: t.do_not_use_currency,
                })
              : t.do_not_use_raw_amount != null
                ? this.fromInput(t.do_not_use_raw_amount, t.do_not_use_currency)
                : this.fromZero(t.do_not_use_currency);
          }),
          (e.fromUnitTest_DO_NOT_USE = function (n) {
            var t = n.amount,
              r = n.currency,
              o = new e();
            return (o.$2(t, r), o);
          }));
        var t = e.prototype;
        return (
          (t.$2 = function (t, n) {
            ((this.$1 = parseInt(t, 10)),
              (this.currency = n),
              isNaN(this.$1) && (this.$1 = 0));
          }),
          (t.getRawPBAmount_I_KNOW_WHAT_IM_DOING = function () {
            var e;
            return (
              (this.$1 / r("PECurrency").DEFAULT_AMOUNT_OFFSET) *
              ((e = r("PECurrency").getCurrencyOffset(this.currency)) != null
                ? e
                : 1)
            );
          }),
          (t.add = function (n) {
            L("add", this.currency, n);
            var t = new e();
            return ((t.$1 = this.$1 + n.$1), (t.currency = this.currency), t);
          }),
          (t.getRawAmountForLoggingOnly = function () {
            return this.$1 / r("PECurrency").DEFAULT_AMOUNT_OFFSET;
          }),
          (t.asGraphQLInput = function () {
            return {
              amount: String(this.$1 / r("PECurrency").DEFAULT_AMOUNT_OFFSET),
              currency: this.currency,
            };
          }),
          (t.getAmountWithPEOffset = function () {
            return String(this.$1);
          }),
          (t.compare = function (t) {
            return t == null
              ? 1
              : (L("compare", this.currency, t), this.$1 - t.$1);
          }),
          (t.format = function (t) {
            var e = t != null ? t : {},
              n = e.showCurrencyCode,
              o = n === void 0 ? !1 : n,
              a = e.showDecimals,
              i = a === void 0 ? !0 : a,
              l = e.showSymbol,
              s = l === void 0 ? !0 : l,
              u = e.showSymbolOption,
              c = u === void 0 ? d.PREFIX : u,
              m = e.stripZeros,
              p = m === void 0 ? !1 : m,
              _ = e.thousandSeparator,
              f = _ === void 0 ? !0 : _,
              g = e.withExtendedSymbol,
              h = g === void 0 ? !0 : g,
              y = "";
            if (
              (h && s
                ? (y = r("PECurrency").formatAmountWithExtendedSymbol(
                    this.currency,
                    this.$1,
                    o,
                    p,
                    f,
                  ))
                : (y = r("PECurrency").formatAmountX(this.currency, this.$1, {
                    showCurrencyCode: o,
                    showDecimals: i,
                    showSymbol: s,
                    stripZeros: p,
                    thousandSeparator: f,
                  })),
              c === d.SUFFIX)
            ) {
              var C = /^([^\s]+)\s+(.*)$/,
                b = y.match(C);
              if (Array.isArray(b) && b.length > 1) {
                var v = b[1],
                  S = b[2];
                return S + " " + v;
              }
              if (
                ((C = /^([^\d\-+\.,]+)+([0-9\.,]*)$/),
                (b = y.match(C)),
                Array.isArray(b) && b.length > 1)
              ) {
                var R = b[1],
                  L = b[2];
                return L + " " + R;
              }
            }
            return y;
          }),
          (t.isZero = function () {
            return this.$1 === 0;
          }),
          (t.percentageOf = function (t) {
            return (
              L("percentageOf", this.currency, t),
              this.$1 ? Math.ceil((t.$1 / this.$1) * 100) : 0
            );
          }),
          (t.exactPercentageOf = function (t) {
            return (
              L("percentageOf", this.currency, t),
              this.$1 ? (t.$1 / this.$1) * 100 : 0
            );
          }),
          (t.subtract = function (n) {
            L("subtract", this.currency, n);
            var t = new e();
            return ((t.$1 = this.$1 - n.$1), (t.currency = this.currency), t);
          }),
          (t.multiply = function (n) {
            var t = new e();
            return (
              (t.$1 = Math.ceil(this.$1 * n)),
              (t.currency = this.currency),
              t
            );
          }),
          (t.toString = function () {
            var e = ["es_ES"],
              t = o("BillingLocaleUtil").getCurrentLocale(),
              n = e.includes(t) ? d.SUFFIX : d.PREFIX;
            return this.format({ showSymbolOption: n });
          }),
          e
        );
      })();
    function p(e) {
      var t = o("RelayHooks").readInlineData(u, e);
      return t != null ? m.fromPECurrencyAmount(t) : null;
    }
    function _(e) {
      var t = p(e);
      return t != null && t.isZero() ? null : t;
    }
    function f(e) {
      var t = o("RelayHooks").readInlineData(c, e);
      return t != null ? S(t) : null;
    }
    function g(e) {
      return m.fromZero(e);
    }
    function h(e, t) {
      return m.fromInput(e, t);
    }
    var y = 9223372036854;
    function C(e) {
      return e == null ? null : m.fromInput(e.amount, e.currency);
    }
    function b(e) {
      return e != null ? (e instanceof m ? e : m.fromWizardProp(e)) : null;
    }
    function v(e) {
      return e != null ? m.fromPECurrencyAmount(e) : null;
    }
    function S(e) {
      if (e != null) {
        var t,
          n,
          o = (t = e == null ? void 0 : e.currency) != null ? t : "USD",
          a = (n = r("PECurrency").getCurrencyOffset(o)) != null ? n : 1,
          i =
            (Number(e == null ? void 0 : e.offset_amount) / a) *
            r("PECurrency").DEFAULT_AMOUNT_OFFSET;
        return m.fromPECurrencyAmount({
          amount_with_offset: i ? String(i) : void 0,
          currency: o,
        });
      }
      return null;
    }
    function R(e, t) {
      var n = o("RelayHooks").readInlineData(u, e);
      return n != null ? m.fromPECurrencyAmount(n) : g(t);
    }
    function L(e, t, n) {
      if (t !== (n == null ? void 0 : n.currency)) {
        var r = new Error(
          "[currency mismatch] unable to perform '" +
            e +
            "' with " +
            t +
            " and " +
            ((n == null ? void 0 : n.currency) || "undefined"),
        );
        throw (
          (r.code = o("BillingErrorUtils").BILLING_ERRORS__CURRENCY_MISMATCH),
          r.stack,
          r
        );
      }
    }
    var E = m;
    ((l.getFromPECurrencyAmountFragment = p),
      (l.getFromPECurrencyAmountFragmentNonZero = _),
      (l.getFromPBCurrencyQuantityFragment = f),
      (l.createZero = g),
      (l.getFromUserInput = h),
      (l.MAX_SAFE_ACCOUNT_SPEND_LIMIT = y),
      (l.getFromCurrencyAmountInput = C),
      (l.getFromPaymentAmountInput = b),
      (l.getFromPECurrencyAmount = v),
      (l.getFromPBCurrencyQuantity = S),
      (l.getFromPECurrencyAmountFragmentNonNull = R),
      (l.BILLING_CURRENCY_AMOUNT_FOR_TESTING_ONLY_DO_NOT_USE = E));
  },
  98,
);
