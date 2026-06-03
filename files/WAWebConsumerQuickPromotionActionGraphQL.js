__d(
  "WAWebConsumerQuickPromotionActionGraphQL",
  [
    "WAWebConsumerQuickPromotionActionGraphQLMutation.graphql",
    "WAWebRelayClient",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(e) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var r = yield o("WAWebRelayClient").commitMutation(
            e !== void 0
              ? e
              : (e = n(
                  "WAWebConsumerQuickPromotionActionGraphQLMutation.graphql",
                )),
            { input: t },
            { environmentType: "whatsapp_web" },
          );
          return (
            (r == null ? void 0 : r.wa_consumer_quick_promotion_log_event) !=
            null
          );
        })),
        u.apply(this, arguments)
      );
    }
    l.executeConsumerQuickPromotionActionGraphQL = s;
  },
  98,
);
