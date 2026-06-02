__d(
  "WAWebConsumerQuickPromotionActionGraphQL",
  [
    "WAWebConsumerQuickPromotionActionGraphQLMutation.graphql",
    "WAWebRelayClient",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    async function s(t) {
      var r = await o("WAWebRelayClient").commitMutation(
        e !== void 0
          ? e
          : (e = n("WAWebConsumerQuickPromotionActionGraphQLMutation.graphql")),
        { input: t },
        { environmentType: "whatsapp_web" },
      );
      return (
        (r == null ? void 0 : r.wa_consumer_quick_promotion_log_event) != null
      );
    }
    l.executeConsumerQuickPromotionActionGraphQL = s;
  },
  98,
);
