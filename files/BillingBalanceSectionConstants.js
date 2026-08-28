__d(
  "BillingBalanceSectionConstants",
  ["fbt", "react"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = {
        amexOverpaymentError: s._(
          /*BTDS*/ "If you use an AMEX card, you can't pay more than your balance.",
        ),
        amount: function (t, n) {
          return s._(/*BTDS*/ "Amount");
        },
        amountError: s._(
          /*BTDS*/ "Enter an amount less than or equal to the amount due.",
        ),
        chooseAmountHeadline: function (t, n) {
          return s._(/*BTDS*/ "Choose amount");
        },
        currentBalance: function (t) {
          var e;
          return t != null &&
            (e = t.billing_terms_outstanding_balance) != null &&
            (e = e.use_outstanding_balance) != null &&
            e.read()
            ? s._(/*BTDS*/ "Total outstanding balance")
            : s._(/*BTDS*/ "Total current balance");
        },
        currentPrepaidBalance: s._(/*BTDS*/ "Current prepaid balance"),
        customAmount: s._(/*BTDS*/ "Custom amount"),
        customAmountError: function (t) {
          return s._(
            /*BTDS*/ "Please enter an amount greater than {minimumAmount}",
            [s._param("minimumAmount", t.toString())],
          );
        },
        emandateProcessingOffsetDefaultHeadline: s._(
          /*BTDS*/ "Add funds to run new or existing ads",
        ),
        emandateProcessingOffsetHeadlineAdCreation: s._(
          /*BTDS*/ "To publish this ad, you\u2019ll have to add funds first",
        ),
        emandateProcessingOffsetReactiveBody: s._(
          /*BTDS*/ "Your ads are paused while your previous payments process. They may take up to 2 days to process. To run new or existing ads immediately, add funds to your account.",
        ),
        emandateProcessingOffsetReactiveBodyRevamp: s._(
          /*BTDS*/ "Ads are paused while your previous payments process. This may take up to 2 days. Add funds now to run new or existing ads immediately.",
        ),
        learnMoreLink: function (t) {
          return u.jsx(t, {
            href: "https://www.facebook.com/business/help/350519228479855",
            inline: !0,
            label: s._(/*BTDS*/ "Learn more"),
          });
        },
        maximumAmount: function (t, n) {
          return s._(
            /*BTDS*/ "Maximum amount you can currently add to your available funds.",
          );
        },
        minimumBoostAmount: s._(
          /*BTDS*/ "This amount plus your available funds will cover your total budget.",
        ),
        newFundsAfterPaymentDescription: function (t, n, r, o) {
          return t
            ? o
              ? s._(
                  /*BTDS*/ "You'll have {newFundsAmount} in funds. After your next balance payment, you'll have {newFundsAmountAfterPayment} left to spend.",
                  [
                    s._param("newFundsAmount", n.toString()),
                    s._param("newFundsAmountAfterPayment", r.toString()),
                  ],
                )
              : s._(
                  /*BTDS*/ "You'll have {newFundsAmount} in funds. After your next balance payment, you'll have {newFundsAmountAfterPayment} left to spend.",
                  [
                    s._param("newFundsAmount", n.toString()),
                    s._param("newFundsAmountAfterPayment", r.toString()),
                  ],
                )
            : o
              ? s._(/*BTDS*/ "You'll have {newFundsAmount} in funds.", [
                  s._param("newFundsAmount", n.toString()),
                ])
              : s._(/*BTDS*/ "You'll have {newFundsAmount} in funds.", [
                  s._param("newFundsAmount", n.toString()),
                ]);
        },
        next14DaySpendAmount: s._(
          /*BTDS*/ "Amount needed to cover your next 14 days of ad spend, based on your campaign budget.",
        ),
        next7DaySpendAmount: s._(
          /*BTDS*/ "Amount needed to cover your next 7 days of ad spend, based on your campaign budget.",
        ),
        otherAmount: s._(/*BTDS*/ "Other"),
        otherAmountDescription: function (t, n, r) {
          var e = t.maxAmt,
            o = t.minAmt;
          return n
            ? s._(
                /*BTDS*/ "Enter an amount between {Minimum allowed amount} and {Maximum allowed amount}.",
                [
                  s._param("Minimum allowed amount", o),
                  s._param("Maximum allowed amount", e),
                ],
              )
            : r
              ? s._(
                  /*BTDS*/ "Enter an amount between {Minimum allowed amount} and {Maximum allowed amount}.",
                  [
                    s._param("Minimum allowed amount", o),
                    s._param("Maximum allowed amount", e),
                  ],
                )
              : s._(
                  /*BTDS*/ "Enter an amount between {Minimum allowed amount} and {Maximum allowed amount}.",
                  [
                    s._param("Minimum allowed amount", o),
                    s._param("Maximum allowed amount", e),
                  ],
                );
        },
        otherAmountMaxOnlyDescription: function (t) {
          var e = t.amt;
          return s._(
            /*BTDS*/ "Please enter an amount of {payment amount} or less.",
            [s._param("payment amount", e)],
          );
        },
        otherAmountMinOnlyDescription: function (t) {
          var e = t.amt;
          return s._(
            /*BTDS*/ "Please enter an amount of {payment amount} or greater.",
            [s._param("payment amount", e)],
          );
        },
        overdueStatementBalance: s._(/*BTDS*/ "Overdue statement balance"),
        overpaymentInfo: s._(
          /*BTDS*/ "The amount exceeding your balance due will be added to your stored balance.",
        ),
        paynowHeadline: function (t) {
          return s._(/*BTDS*/ "Amount to pay");
        },
        prepayBodySpecificPM: function (t) {
          return s._(
            /*BTDS*/ "Use this payment method to add funds. We'll deduct from these funds as your ads run. {link (Learn more about prepaid funds)}",
            [
              s._param(
                "link (Learn more about prepaid funds)",
                u.jsx(t, {
                  href: "https://www.facebook.com/business/help/350519228479855",
                  inline: !0,
                  label: s._(/*BTDS*/ "Learn more about available funds"),
                }),
              ),
            ],
          );
        },
        prepayHeadline: function (t, n) {
          return s._(/*BTDS*/ "Amount to add");
        },
        prepayHeadlineSpecificPM: function (t) {
          return s._(/*BTDS*/ "Add funds with {payment method}", [
            s._param("payment method", t),
          ]);
        },
        secureBillingUpperBoundAmountOneDescription: s._(
          /*BTDS*/ "Estimated amount needed to run current ad campaigns based on recent spend.",
        ),
        secureBillingUpperBoundAmountTwoDescription: s._(
          /*BTDS*/ "Amount to cover current ads and to run additional campaigns.",
        ),
        secureBillingUpperBoundBody: s._(
          /*BTDS*/ "Make sure you add enough funds to cover all of your ads. We'll deduct from your funds about once a day.",
        ),
        secureBillingUpperBoundBodyRevamp: s._(
          /*BTDS*/ "Add enough funds to cover all of your ads. We deduct from funds about once a day.",
        ),
        secureBillingUpperBoundHeadline: s._(
          /*BTDS*/ "Next, add funds to resume ads",
        ),
        secureBillingUpperBoundHeadlineWithoutSteps: s._(
          /*BTDS*/ "Add funds to resume ads",
        ),
        secureBillingUpperBoundOtherAmountDescription: function (t) {
          var e = t.minimumAmount;
          return s._(
            /*BTDS*/ "Add at least {minimum amount} to cover your ads.",
            [s._param("minimum amount", e)],
          );
        },
        selectAmountHeadline: s._(/*BTDS*/ "Select amount to pay"),
        statementBalanceDescription: function (t) {
          var e = t.billingEndDate,
            n = t.billingStartDate;
          return s._(
            /*BTDS*/ "{start date of period} - {end date of period} statement balance",
            [
              s._param("start date of period", n),
              s._param("end date of period", e),
            ],
          );
        },
        totalAmountDue: function (t) {
          return s._(/*BTDS*/ "Total amount due");
        },
        totalAmountOverdue: s._(/*BTDS*/ "Total amount overdue"),
        totalBoostBudgetDescription: s._(
          /*BTDS*/ "The total budget you set to run your ad.",
        ),
        zeroAmountError: s._(
          /*BTDS*/ "Please enter an amount greater than zero",
        ),
      },
      d = c;
    l.default = d;
  },
  226,
);
