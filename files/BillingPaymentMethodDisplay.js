__d(
  "BillingPaymentMethodDisplay",
  ["fbt"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = s._(/*BTDS*/ "");
    function u(t) {
      return t != null && t !== ""
        ? s._(/*BTDS*/ "Ad credit: {currentBalance}", [
            s._param("currentBalance", t),
          ])
        : e;
    }
    function c(e, t, n) {
      var r = s._(/*BTDS*/ "Bank account"),
        o = function (t) {
          return (
            t.charAt(0).toLocaleUpperCase() + t.substring(1).toLocaleLowerCase()
          );
        },
        a = e != null ? e : "",
        i = n != null && n !== "" ? n : "****",
        l = "",
        u = "";
      return (
        t != null && t !== ""
          ? ((l = C(t)), a !== "" && (u = " "))
          : a === "" && (l = r.toLocaleString()),
        s._(/*BTDS*/ "{bank name}", [
          s._param("bank name", o("" + a + u + l + " \xB7 " + i)),
        ])
      );
    }
    function d(e, t) {
      if (!(t == null || t === "")) {
        var n = t.split("").join(" "),
          r = e;
        return (
          (r == null || r === "") && (r = s._(/*BTDS*/ "Card").toString()),
          s._(/*BTDS*/ "{Card Network} \u00b7 {last 4}", [
            s._param("Card Network", r),
            s._param("last 4", n),
          ])
        );
      }
    }
    function m(e, t, n) {
      n === void 0 && (n = !1);
      var r = e;
      (r == null || r === "" || r === "Unknown") &&
        (r = s._(/*BTDS*/ "Card").toString());
      var o = t;
      return (
        (o == null || o === "") && (o = "****"),
        n
          ? s._(/*BTDS*/ "{Card Network} **** {last 4}", [
              s._param("Card Network", r),
              s._param("last 4", o),
            ])
          : s._(/*BTDS*/ "{Card Network} \u00b7\u00b7\u00b7\u00b7 {last 4}", [
              s._param("Card Network", r),
              s._param("last 4", o),
            ])
      );
    }
    function p(t, n) {
      return t != null && t !== "" && n != null && n !== ""
        ? s._(
            /*BTDS*/ "{legal entity name} {name of businesss which shared credit line}",
            [
              s._param("legal entity name", t),
              s._param("name of businesss which shared credit line", n),
            ],
          )
        : t != null && t !== ""
          ? s._(/*BTDS*/ "{display name}", [s._param("display name", t)])
          : e;
    }
    function _(e) {
      var t = s._(/*BTDS*/ "PayPal"),
        n = t.toString(),
        r = s._(/*BTDS*/ "{Paypal}", [s._param("Paypal", n)]);
      if (e == null || e === "") return r;
      var o = f(e);
      return o === ""
        ? r
        : s._(/*BTDS*/ "{Paypal display}", [
            s._param("Paypal display", n + " " + o),
          ]);
    }
    function f(e) {
      var t = "";
      if (e == null || e === "") return t;
      var n = e.split("@"),
        r = "";
      return (
        n[1].indexOf(".") !== -1 && (r = n[1].substr(n[1].indexOf(".") + 1)),
        (t = n[0][0] + "****@" + n[1][0] + "****"),
        r !== "" && (t = t + "." + r),
        t
      );
    }
    function g(e) {
      return s._(/*BTDS*/ "Prepaid Balance: {prepaidBalance}", [
        s._param("prepaidBalance", e),
      ]);
    }
    function h(e) {
      return s._(/*BTDS*/ "{currency} funds", [s._param("currency", e)]);
    }
    function y(e) {
      return s._(/*BTDS*/ "Available shared funds ({currency})", [
        s._param("currency", e),
      ]);
    }
    function C(e) {
      var t = e;
      switch (e) {
        case "CHECKING":
          t = s._(/*BTDS*/ "checking").toString();
          break;
        case "SAVINGS":
          t = s._(/*BTDS*/ "savings").toString();
          break;
        case "REGULAR":
          t = s._(/*BTDS*/ "regular").toString();
          break;
        case "IBAN":
          t = s._(/*BTDS*/ "IBAN").toString();
      }
      return t;
    }
    function b(t, n, r) {
      if (r == null) return e;
      switch (t) {
        case "UPI":
          return s._(/*BTDS*/ "{UPI display}", [
            s._param(
              "UPI display",
              (r != null ? r : "") + " " + (n != null ? n : ""),
            ),
          ]);
        default:
          return s._(/*BTDS*/ "{Default LPM display}", [
            s._param("Default LPM display", r),
          ]);
      }
    }
    ((l.EMPTY_FBT = e),
      (l.getAdCreditDisplay = u),
      (l.getBankDisplay = c),
      (l.getCreditCardAccessibilityHint = d),
      (l.getCreditCardDisplay = m),
      (l.getMonthlyInvoicingDisplay = p),
      (l.getPayPalDisplay = _),
      (l.getStoredBalanceDisplay = g),
      (l.getSharedStoredBalanceDisplayAbbreviated = h),
      (l.getSharedStoredBalanceDisplay = y),
      (l.getLPMDisplayText = b));
  },
  226,
);
