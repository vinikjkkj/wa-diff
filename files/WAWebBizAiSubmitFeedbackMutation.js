__d(
  "WAWebBizAiSubmitFeedbackMutation",
  [
    "WAWebBizAiSubmitFeedbackMutation.graphql",
    "WAWebLidMigrationUtils",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = { negative: "NEGATIVE", positive: "POSITIVE" },
      u =
        e !== void 0 ? e : (e = n("WAWebBizAiSubmitFeedbackMutation.graphql"));
    function c(e, t, n) {
      if (e == null) return { error: "missing_consumer" };
      if (t == null || t.trim() === "") return { error: "missing_message" };
      try {
        var o = d(e);
        return {
          input: {
            consumer_uid: { lid: o.lid, pn: o.phoneNumber },
            feedback: s[n],
            message_id: t,
          },
        };
      } catch (e) {
        return { cause: r("getErrorSafe")(e), error: "client_failed" };
      }
    }
    function d(e) {
      var t, n, r, a;
      return {
        lid:
          (t =
            (n = o("WAWebLidMigrationUtils").toLid(e)) == null
              ? void 0
              : n.user) != null
            ? t
            : null,
        phoneNumber:
          (r =
            (a = o("WAWebLidMigrationUtils").toPn(e)) == null
              ? void 0
              : a.user) != null
            ? r
            : null,
      };
    }
    ((l.MUTATION = u), (l.createBizAiFeedbackInput = c));
  },
  98,
);
