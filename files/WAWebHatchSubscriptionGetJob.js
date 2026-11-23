__d(
  "WAWebHatchSubscriptionGetJob",
  ["WAWebHatchSubscriptionGetJobMutation.graphql", "WAWebRelayClient"],
  function (t, n, r, o, a, i, l) {
    var e,
      s =
        e !== void 0
          ? e
          : (e = n("WAWebHatchSubscriptionGetJobMutation.graphql"));
    async function u() {
      var e = await o("WAWebRelayClient").commitMutation(
        s,
        {},
        { environmentType: "whatsapp_web" },
      );
      return e == null ? void 0 : e.wa_genai_hatch_subscription_get;
    }
    l.commitHatchSubscriptionGet = u;
  },
  98,
);
