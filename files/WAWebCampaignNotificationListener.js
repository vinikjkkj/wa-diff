__d(
  "WAWebCampaignNotificationListener",
  [
    "JSResourceForInteraction",
    "WALogger",
    "WAWebBizBroadcastMarketingCampaignNotificationEmitter",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = r("JSResourceForInteraction")(
        "WAWebProcessCampaignNotificationAction",
      ).__setRef("WAWebCampaignNotificationListener");
    function c() {
      (o("WALogger").LOG(
        e ||
          (e = babelHelpers.taggedTemplateLiteralLoose([
            "[broadcast:notification-listener] registering default handler",
          ])),
      ),
        o(
          "WAWebBizBroadcastMarketingCampaignNotificationEmitter",
        ).marketingCampaignNotificationEmitter.registerDefaultHandler(
          function (e) {
            return (
              o("WALogger").LOG(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[broadcast:notification-listener] campaign adGroup=",
                    " ad=",
                    "",
                  ])),
                e.adGroupId,
                e.adId,
              ),
              u.load().then(function (t) {
                t.processCampaignNotification({
                  adCreativeId: e.adCreativeId,
                  adGroupId: e.adGroupId,
                  adId: e.adId,
                  backgroundSendHandling: e.backgroundSendHandling,
                  status: e.status,
                  timestamp: e.timestamp,
                });
              }),
              !0
            );
          },
        ));
    }
    l.businessBroadcastCampaignNotificationRegistration = c;
  },
  98,
);
