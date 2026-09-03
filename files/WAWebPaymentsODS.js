__d(
  "WAWebPaymentsODS",
  ["WAWebBackendApi"],
  function (t, n, r, o, a, i, l) {
    function e() {
      o("WAWebBackendApi").frontendFireAndForget(
        "logPaymentsDehydratedOdsCounter",
        { type: "pay" },
      );
    }
    function s() {
      o("WAWebBackendApi").frontendFireAndForget(
        "logPaymentsDehydratedOdsCounter",
        { type: "transaction" },
      );
    }
    function u() {
      o("WAWebBackendApi").frontendFireAndForget(
        "logPaymentsDehydratedOdsCounter",
        { type: "transaction_notification" },
      );
    }
    ((l.logDehydratedPayNodeFutureproofed = e),
      (l.logDehydratedTransactionNodeSkipped = s),
      (l.logDehydratedTransactionNotificationSkipped = u));
  },
  98,
);
