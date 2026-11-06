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
    function c(e) {
      var t = e.expired,
        n = e.overCap;
      o("WAWebBackendApi").frontendFireAndForget(
        "logOrphanPaymentNotificationsEvictedOdsCounter",
        { expired: t, overCap: n },
      );
    }
    ((l.logDehydratedPayNodeFutureproofed = e),
      (l.logDehydratedTransactionNodeSkipped = s),
      (l.logDehydratedTransactionNotificationSkipped = u),
      (l.logOrphanPaymentNotificationsEvicted = c));
  },
  98,
);
