__d(
  "WASmaxOutPushConfigConfigMixins",
  [
    "WASmaxMixinGroupExhaustiveError",
    "WASmaxOutPushConfigAndroidClientMixin",
    "WASmaxOutPushConfigAppleClientMixin",
    "WASmaxOutPushConfigEnterpriseClientMixin",
    "WASmaxOutPushConfigFBClientMixin",
    "WASmaxOutPushConfigWNSClientMixin",
    "WASmaxOutPushConfigWebClientMixin",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      if (t.fBClient)
        return o("WASmaxOutPushConfigFBClientMixin").mergeFBClientMixin(
          e,
          t.fBClient,
        );
      if (t.androidClient)
        return o(
          "WASmaxOutPushConfigAndroidClientMixin",
        ).mergeAndroidClientMixin(e, t.androidClient);
      if (t.appleClient)
        return o("WASmaxOutPushConfigAppleClientMixin").mergeAppleClientMixin(
          e,
          t.appleClient,
        );
      if (t.wNSClient)
        return o("WASmaxOutPushConfigWNSClientMixin").mergeWNSClientMixin(
          e,
          t.wNSClient,
        );
      if (t.enterpriseClient)
        return o(
          "WASmaxOutPushConfigEnterpriseClientMixin",
        ).mergeEnterpriseClientMixin(e, t.enterpriseClient);
      if (t.webClient)
        return o("WASmaxOutPushConfigWebClientMixin").mergeWebClientMixin(
          e,
          t.webClient,
        );
      throw new (o(
        "WASmaxMixinGroupExhaustiveError",
      ).SmaxMixinGroupExhaustiveError)();
    }
    l.mergeConfigMixins = e;
  },
  98,
);
