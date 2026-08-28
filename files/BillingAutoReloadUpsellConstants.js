__d(
  "BillingAutoReloadUpsellConstants",
  ["fbt"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = {
        addFundsAndAutoReloadFailedBody: s._(/*BTDS*/ "Please try again."),
        addFundsAndAutoReloadFailedHeadline: function (t) {
          return t
            ? s._(/*BTDS*/ "Couldn't add funds or turn on auto refill")
            : s._(/*BTDS*/ "Couldn't add funds or turn on auto reload");
        },
        addFundsAndAutoReloadSuccessBody: function (t) {
          return t
            ? s._(
                /*BTDS*/ "It may take a few minutes for the funds you added to show in your account. You can always turn auto refill off or adjust the refill amount in Payment settings.",
              )
            : s._(
                /*BTDS*/ "It may take a few minutes for the funds to show in your account. You can adjust or turn off auto reload in payment settings.",
              );
        },
        addFundsAndAutoReloadSuccessHeadline: function (t, n) {
          return n
            ? s._(
                /*BTDS*/ "{amount user added} successfully added and auto refill is on",
                [s._param("amount user added", t)],
              )
            : s._(
                /*BTDS*/ "{amount user added} successfully added and auto reload is on",
                [s._param("amount user added", t)],
              );
        },
        autoReloadSignupRowBody: function (t, n) {
          return s._(
            /*BTDS*/ "{reload amount} will be added to your account when funds are at or below {reload threshold}. You can always manage this from Payment settings.",
            [s._param("reload amount", t), s._param("reload threshold", n)],
          );
        },
        autoReloadSignupRowBodyDisabled: function (t) {
          return t
            ? s._(
                /*BTDS*/ "To set up auto refill, select a saved payment method that supports recurring payments.",
              )
            : s._(
                /*BTDS*/ "To set up auto reload, select a saved payment method that supports recurring payments.",
              );
        },
        autoReloadSignupRowHeadline: function (t) {
          return t
            ? s._(/*BTDS*/ "Set up auto refill")
            : s._(/*BTDS*/ "Set up auto reload");
        },
        editAutoReloadDescription: function (t) {
          return t
            ? s._(
                /*BTDS*/ "Auto refill can help you avoid ad pauses by adding funds to your account when they run low. You can manage auto refill at any time.",
              )
            : s._(
                /*BTDS*/ "Auto reload can help you avoid ad pauses by adding funds to your account when they run low. You can manage auto reload at any time.",
              );
        },
        editAutoReloadLinkLabel: s._(/*BTDS*/ "Edit amount"),
      },
      u = e;
    l.default = u;
  },
  226,
);
