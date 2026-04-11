__d(
  "WAWebSupportMessageFeedbackSubmitMutation",
  [
    "WAWebRelayClient",
    "WAWebSupportMessageFeedbackSubmitMutation.graphql",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = {
        positive: "POSITIVE",
        negative_harmful: "NEGATIVE_HARMFUL",
        negative_inaccurate: "NEGATIVE_INACCURATE",
        negative_irrelevant: "NEGATIVE_IRRELEVANT",
        negative_other: "NEGATIVE_OTHER",
        negative_repetitive: "NEGATIVE_REPETITIVE",
      };
    function u(e) {
      return s[e];
    }
    function c(e) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var r = yield o("WAWebRelayClient").commitMutation(
              e !== void 0
                ? e
                : (e = n("WAWebSupportMessageFeedbackSubmitMutation.graphql")),
              { input: t },
              { environmentType: "whatsapp_web" },
            ),
            a = r == null ? void 0 : r.xwa_wa_support_message_feedback_submit;
          return a == null
            ? {
                success: !1,
                error_code: "500",
                error_message:
                  "Empty response from support message feedback mutation",
              }
            : {
                success: a.success,
                error_code: a.error_code,
                error_message: a.error_message,
              };
        })),
        d.apply(this, arguments)
      );
    }
    ((l.feedbackKindForGraphQL = u),
      (l.submitSupportMessageFeedbackGraphQL = c));
  },
  98,
);
