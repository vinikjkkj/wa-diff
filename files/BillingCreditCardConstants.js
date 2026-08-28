__d(
  "BillingCreditCardConstants",
  ["fbt", "BillingWizardLink.react", "getURLForBillingWizard", "react"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = s._(/*BTDS*/ "Card"),
      d = {
        activationTimeoutBody: function (t, n, r) {
          return function (e, o, a) {
            return o === "WORKPLACE"
              ? s._(/*BTDS*/ "You can try again in {wait time} minutes.", [
                  s._param("wait time", r),
                ])
              : s._(
                  /*BTDS*/ "You can try to verify {card display} again in {wait time} minutes from {payment settings link}.",
                  [
                    s._param("card display", t),
                    s._param("wait time", r),
                    s._param(
                      "payment settings link",
                      u.jsx(e, {
                        href: n,
                        inline: !0,
                        label: s._(/*BTDS*/ "Payment settings"),
                      }),
                    ),
                  ],
                );
          };
        },
        activationTimeoutHeadline: s._(
          /*BTDS*/ "This is taking longer than usual",
        ),
        awaitActivationBody: function (t) {
          return s._(
            /*BTDS*/ "Card verification takes up to {wait time} minutes. Keep this screen open to verify your card.",
            [s._param("wait time", t)],
          );
        },
        awaitActivationHeadline: s._(/*BTDS*/ "In progress"),
        awaitActivationTitle: s._(/*BTDS*/ "Verifying credit card"),
        cardholderNameLabel: s._(/*BTDS*/ "Name on card"),
        cardNumberLabel: s._(/*BTDS*/ "Card number"),
        checkboxTokenizationINLabel: s._(
          /*BTDS*/ "I authorize Meta or its service providers to tokenize my card information in accordance with the Reserve Bank of India's requirements. {RBI learn more link}",
          [
            s._param(
              "RBI learn more link",
              u.jsx(r("BillingWizardLink.react"), {
                href: "https://www.facebook.com/business/help/430882478614578",
                inline: !0,
                label: s._(/*BTDS*/ "Learn more"),
                type: "headline",
              }),
            ),
          ],
        ),
        credentialSharabilityAllAccountsDescription: function (t) {
          return s._(
            /*BTDS*/ "People with full control of {business name} can set this card as a payment method for any account in the business.",
            [s._param("business name", t)],
          );
        },
        credentialSharabilityAllAccountsLabel: s._(
          /*BTDS*/ "All accounts in this business portfolio",
        ),
        credentialSharabilityHeadline: s._(
          /*BTDS*/ "Which accounts can use this card?",
        ),
        credentialSharabilityOnlyThisAccountLabel: s._(
          /*BTDS*/ "Only this account",
        ),
        emptySecurityCodeError: s._(
          /*BTDS*/ "Enter your card's 3 or 4 digit security code.",
        ),
        expirationDateLabel: s._(/*BTDS*/ "MM\/YY"),
        formHeadline: s._(/*BTDS*/ "Card details"),
        headline: s._(/*BTDS*/ "Debit or credit card"),
        inlineFormHeadline: s._(/*BTDS*/ "Card info"),
        postalCodeLabel: s._(/*BTDS*/ "ZIP code"),
        primaryButtonLabel: s._(/*BTDS*/ "Save"),
        recurringCheckboxLabel: s._(
          /*BTDS*/ "I agree that Meta can charge this card on a recurring basis.",
        ),
        securityCodeLabel: s._(/*BTDS*/ "CVV"),
        successBody: function (t, n) {
          var e = n != null ? n : c;
          return s._(
            /*BTDS*/ "{card association e.g. Visa, or just 'Card' if we don't know}\u00a0\u00b7\u00a0{last four} has been added to your account.",
            [
              s._param(
                "card association e.g. Visa, or just 'Card' if we don't know",
                e,
              ),
              s._param("last four", t),
            ],
          );
        },
        successBodyBusinessUpsell: function (t, n, r) {
          var e = n != null ? n : c;
          return r == null
            ? s._(
                /*BTDS*/ "{card association e.g. Visa, or just 'Card' if we don't know}\u00a0\u00b7\u00a0{last four} was saved to your business portfolio.",
                [
                  s._param(
                    "card association e.g. Visa, or just 'Card' if we don't know",
                    e,
                  ),
                  s._param("last four", t),
                ],
              )
            : s._(
                /*BTDS*/ "{card association e.g. Visa, or just 'Card' if we don't know}\u00a0\u00b7\u00a0{last four} was saved to your business portfolio, {business name}.",
                [
                  s._param(
                    "card association e.g. Visa, or just 'Card' if we don't know",
                    e,
                  ),
                  s._param("last four", t),
                  s._param("business name", r),
                ],
              );
        },
        successBodyBusinessWithLinking: function (t, n, r, o, a) {
          var e = n != null ? n : c;
          return r != null && o != null && a != null
            ? s._(
                /*BTDS*/ "{card association e.g. Visa, or just 'Card' if we don't know}\u00a0\u00b7\u00a0{last four} was saved to your business portfolio, {business name}, and linked to your account, {account name} ID:{account number}.",
                [
                  s._param(
                    "card association e.g. Visa, or just 'Card' if we don't know",
                    e,
                  ),
                  s._param("last four", t),
                  s._param("business name", r),
                  s._param("account name", o),
                  s._param("account number", a),
                ],
              )
            : r == null && o != null && a != null
              ? s._(
                  /*BTDS*/ "{card association e.g. Visa, or just 'Card' if we don't know}\u00a0\u00b7\u00a0{last four} was saved to your business portfolio and linked to your account, {account name} ID:{account number}.",
                  [
                    s._param(
                      "card association e.g. Visa, or just 'Card' if we don't know",
                      e,
                    ),
                    s._param("last four", t),
                    s._param("account name", o),
                    s._param("account number", a),
                  ],
                )
              : r != null && (o == null || a == null)
                ? s._(
                    /*BTDS*/ "{card association e.g. Visa, or just 'Card' if we don't know}\u00a0\u00b7\u00a0{last four} was saved to your business portfolio, {business name}, and linked to your account.",
                    [
                      s._param(
                        "card association e.g. Visa, or just 'Card' if we don't know",
                        e,
                      ),
                      s._param("last four", t),
                      s._param("business name", r),
                    ],
                  )
                : s._(
                    /*BTDS*/ "{card association e.g. Visa, or just 'Card' if we don't know}\u00a0\u00b7\u00a0{last four} was saved to your business portfolio and linked to your account.",
                    [
                      s._param(
                        "card association e.g. Visa, or just 'Card' if we don't know",
                        e,
                      ),
                      s._param("last four", t),
                    ],
                  );
        },
        successBodyForBizCredentialSave: function (t, n, o) {
          return function (e) {
            if (t === "BUSINESS_SHARABLE")
              return n != null
                ? s._(
                    /*BTDS*/ "This card is also now available to add to all accounts in {business portfolio name} . People with full access can add it to each account separately.",
                    [s._param("business portfolio name", n)],
                  )
                : s._(
                    /*BTDS*/ "This card is also now available to add to all accounts in your business portfolio. People with full access can add it to each account separately.",
                  );
            var a =
              o != null
                ? u.jsx(e, {
                    href: r("getURLForBillingWizard")("PAYMENT_SETTINGS", o),
                    inline: !0,
                    label: s._(/*BTDS*/ "Billing & payments"),
                  })
                : s._(/*BTDS*/ "Billing & payments");
            return s._(
              /*BTDS*/ "You can change card availability anytime in {billing and payments link}.",
              [s._param("billing and payments link", a)],
            );
          };
        },
        successBodyNonRecurringInPostpayUpgrade: function (t, n, r) {
          var e,
            o = n != null ? n : c;
          return r != null &&
            (e = r.billing_terms_automatic_payments) != null &&
            (e = e.use_automatic_payments) != null &&
            e.read()
            ? s._(
                /*BTDS*/ "{card association e.g. Visa, or just 'Card' if we don't know}\u00a0\u00b7\u00a0{last four} was added to your account, but this payment method doesn't support recurring payments. To turn on automatic payments, add a payment method that supports recurring payments.",
                [
                  s._param(
                    "card association e.g. Visa, or just 'Card' if we don't know",
                    o,
                  ),
                  s._param("last four", t),
                ],
              )
            : s._(
                /*BTDS*/ "{card association e.g. Visa, or just 'Card' if we don't know}\u00a0\u00b7\u00a0{last four} was added to your account, but this payment method doesn't support recurring payments. To turn on automatic billing, add a payment method that supports recurring payments.",
                [
                  s._param(
                    "card association e.g. Visa, or just 'Card' if we don't know",
                    o,
                  ),
                  s._param("last four", t),
                ],
              );
        },
        successBodyRecurring: function (t, n) {
          var e = n != null ? n : c;
          return s._(
            /*BTDS*/ "{card association e.g. Visa, or just 'Card' if we don't know}\u00a0\u00b7\u00a0{last four} was successfully added to your account. It can be automatically charged as your ads run.",
            [
              s._param(
                "card association e.g. Visa, or just 'Card' if we don't know",
                e,
              ),
              s._param("last four", t),
            ],
          );
        },
        successBodyRecurringFourDots: function (t, n) {
          var e = n != null ? n : c;
          return s._(
            /*BTDS*/ "{card association e.g. Visa, or just 'Card' if we don't know}\u00a0\u00b7\u00b7\u00b7\u00b7\u00a0{last four} was successfully added to your account. It can be automatically charged as your ads run.",
            [
              s._param(
                "card association e.g. Visa, or just 'Card' if we don't know",
                e,
              ),
              s._param("last four", t),
            ],
          );
        },
        successBodyRecurringWithFunds: function (t, n) {
          var e = n != null ? n : c;
          return s._(
            /*BTDS*/ "{card association e.g. Visa, or just 'Card' if we don't know}\u00a0\u00b7\u00a0{last four} was successfully added to your account. It may be automatically charged as your ads run if you use all of your prepaid funds.",
            [
              s._param(
                "card association e.g. Visa, or just 'Card' if we don't know",
                e,
              ),
              s._param("last four", t),
            ],
          );
        },
        successBodyRecurringWithFundsFourDots: function (t, n) {
          var e = n != null ? n : c;
          return s._(
            /*BTDS*/ "{card association e.g. Visa, or just 'Card' if we don't know}\u00a0\u00b7\u00b7\u00b7\u00b7\u00a0{last four} was successfully added to your account. It may be automatically charged as your ads run if you use all of your prepaid funds.",
            [
              s._param(
                "card association e.g. Visa, or just 'Card' if we don't know",
                e,
              ),
              s._param("last four", t),
            ],
          );
        },
        successBodyRecurringWithFundsUpdated: function () {
          return s._(
            /*BTDS*/ "It may be automatically charged as your ads run if you use all of your funds.",
          );
        },
        successHeadline: s._(/*BTDS*/ "Card successfully saved"),
        successHeadlineForBizCredentialSave: function (t) {
          return s._(/*BTDS*/ "{card display} added to account", [
            s._param("card display", t),
          ]);
        },
        successHeadlineRecurring: function (t, n) {
          var e = n != null ? n : c;
          return s._(
            /*BTDS*/ "{card association e.g. Visa, or just 'Card' if we don't know}\u00a0\u00b7\u00a0{last four} added",
            [
              s._param(
                "card association e.g. Visa, or just 'Card' if we don't know",
                e,
              ),
              s._param("last four", t),
            ],
          );
        },
        successHeadlineRecurringFourDots: function (t, n) {
          var e = n != null ? n : c;
          return s._(
            /*BTDS*/ "{card association e.g. Visa, or just 'Card' if we don't know}\u00a0\u00b7\u00b7\u00b7\u00b7\u00a0{last four} added",
            [
              s._param(
                "card association e.g. Visa, or just 'Card' if we don't know",
                e,
              ),
              s._param("last four", t),
            ],
          );
        },
        unsupportedCardErrorMessage: s._(
          /*BTDS*/ "The card type you entered isn't supported. Try a different card.",
        ),
      },
      m = d;
    l.default = m;
  },
  226,
);
