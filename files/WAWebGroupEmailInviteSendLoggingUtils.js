__d(
  "WAWebGroupEmailInviteSendLoggingUtils",
  ["WAWebEmailInviteLoggingUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.numRecipients,
        n = e.origin,
        r = e.outcome,
        a = e.payload,
        i =
          (a == null ? void 0 : a.status) === "FAILURE"
            ? t
            : r.invalid.length +
              r.retry.length +
              r.skipped.length +
              r.unconfirmed.length;
      o("WAWebEmailInviteLoggingUtils").logEmailInviteServerSendResult({
        failedCount: i,
        numRecipients: t,
        origin: n,
        result: s(r, a),
        sentCount: t - i,
      });
    }
    function s(e, t) {
      return t == null || e.unconfirmed.length > 0
        ? "uncertain"
        : t.status === "FAILURE"
          ? t.error_reason === "NOT_AUTHORIZED"
            ? "not_authorized"
            : t.error_reason === "INVALID_EMAIL_BATCH"
              ? "invalid_batch"
              : "unavailable"
          : e.skipped.length > 0
            ? "skipped"
            : e.invalid.length > 0 || e.retry.length > 0
              ? "partial"
              : "success";
    }
    l.logGroupEmailInviteSendOutcome = e;
  },
  98,
);
