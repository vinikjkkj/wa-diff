__d(
  "BillingMIScheduleUpdateBillToPartyConstants",
  ["fbt", "formatDate"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = function () {
        var e = new Date();
        return (
          e.setMonth((e.getMonth() + 1) % 12),
          e.setDate(1),
          r("formatDate")(e, "F j, Y")
        );
      },
      u = {
        failureBody: function (t) {
          return s._(
            /*BTDS*/ "We weren't able to make updates to {account name}. Please try again.",
            [s._param("account name", t)],
          );
        },
        failureHeadlineBillingInfo: s._(
          /*BTDS*/ "Billing information wasn't updated",
        ),
        failureHeadlineMi: s._(/*BTDS*/ "Monthly invoice wasn't updated"),
        failureTitle: s._(/*BTDS*/ "Update unsuccessful"),
        successBodyBillTo: function (t, n) {
          return s._(
            /*BTDS*/ "{new bill-to party name} will be the bill-to party for {account name}",
            [
              s._param("new bill-to party name", t),
              s._param("account name", n),
            ],
          );
        },
        successBodyMi: function (t, n) {
          return s._(
            /*BTDS*/ "The monthly invoice for {account name} will be {new mi's org name}",
            [s._param("account name", n), s._param("new mi's org name", t)],
          );
        },
        successHeadlineBillingInfo: function () {
          return s._(
            /*BTDS*/ "Billing information will be updated on {first day of the month date}",
            [s._param("first day of the month date", e())],
          );
        },
        successHeadlineMi: function () {
          return s._(
            /*BTDS*/ "Monthly invoice will be updated on {first day of the month date}",
            [s._param("first day of the month date", e())],
          );
        },
        successTitle: s._(/*BTDS*/ "Success"),
      },
      c = u;
    l.default = c;
  },
  226,
);
