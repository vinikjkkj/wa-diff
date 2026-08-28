__d(
  "BillingHubInvoicingMonthEndStrings",
  ["fbt", "DateConsts", "DateTime"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = s._(/*BTDS*/ "add an address"),
      u = s._(/*BTDS*/ "modify this address"),
      c = s._(/*BTDS*/ "delete this address"),
      d = s._(/*BTDS*/ "create a new invoice group"),
      m = s._(/*BTDS*/ "edit this invoice group"),
      p = s._(/*BTDS*/ "remove this invoice group"),
      _ = s._(/*BTDS*/ "edit billing information");
    function f(e) {
      return (
        e === void 0 && (e = !1),
        e
          ? s._(/*BTDS*/ "add an email address")
          : s._(/*BTDS*/ "add an invoice email")
      );
    }
    function g(e) {
      return (
        e === void 0 && (e = !1),
        e
          ? s._(/*BTDS*/ "delete this email address")
          : s._(/*BTDS*/ "delete this invoice email")
      );
    }
    function h() {
      var e = 5,
        t = r("DateTime").localNow(),
        n = t.getDayOfMonth(),
        a = t.set({ day: e }).addMonths(n <= e ? 0 : 1),
        i = a.instant - t.instant;
      return Math.ceil(i / o("DateConsts").SEC_PER_DAY);
    }
    function y(e, t) {
      var n = h();
      return t
        ? s._(
            /*BTDS*/ "We\u2019re processing invoices for this billing cycle, so it\u2019ll take up to {days_until_fifth} days before you can {action and object label}.",
            [
              s._param("days_until_fifth", n),
              s._param("action and object label", e),
            ],
          )
        : null;
    }
    ((l.ADD_ADDRESS = e),
      (l.MODIFY_THIS_ADDRESS = u),
      (l.DELETE_THIS_ADDRESS = c),
      (l.CREATE_NEW_INVOICE_GROUP = d),
      (l.EDIT_THIS_INVOICE_GROUP = m),
      (l.REMOVE_INVOICE_GROUP = p),
      (l.EDIT_BILLING_INFORMATION = _),
      (l.getAddInvoiceEmailsLabel = f),
      (l.getDeleteInvoiceEmailsLabel = g),
      (l.getDaysToCompleteInvoicing = h),
      (l.getDisabledMessageIfBlockedForMonthEnd = y));
  },
  226,
);
