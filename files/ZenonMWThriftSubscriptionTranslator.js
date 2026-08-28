__d(
  "ZenonMWThriftSubscriptionTranslator",
  [
    "MultiwayCommonTypes",
    "MultiwaySharedTypes",
    "ZenonMWThriftTranslatorUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n = t.subscriptions,
        r = {
          subscriptions: n.map(function (e) {
            var t;
            return {
              cname: "",
              options: {
                videoQuality: o("MultiwaySharedTypes").VideoQuality.cast(
                  (t = e.options) == null ? void 0 : t.videoQuality,
                ),
              },
              trackId: e.trackId,
              type: o("MultiwaySharedTypes").SubscriptionType.cast(e.type),
            };
          }),
        };
      return o("ZenonMWThriftTranslatorUtils").createMWThriftRequest({
        header: e,
        rtcMessageBody: { subscriptionRequest: r },
        type: o("MultiwayCommonTypes").MessageType.SUBSCRIPTION,
      });
    }
    l.toThriftSubscriptionRequest = e;
  },
  98,
);
