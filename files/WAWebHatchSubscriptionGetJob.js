__d(
  "WAWebHatchSubscriptionGetJob",
  [
    "WAWebHatchSubscriptionGetJobMutation.graphql",
    "WAWebRelayClient",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s =
        e !== void 0
          ? e
          : (e = n("WAWebHatchSubscriptionGetJobMutation.graphql"));
    function u() {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield o("WAWebRelayClient").commitMutation(
            s,
            {},
            { environmentType: "whatsapp_web" },
          );
          return e == null ? void 0 : e.wa_genai_hatch_subscription_get;
        })),
        c.apply(this, arguments)
      );
    }
    l.commitHatchSubscriptionGet = u;
  },
  98,
);
