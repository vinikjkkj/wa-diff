__d(
  "WAWebBizBroadcastProOpenCampaignDetails",
  [
    "CometRelay",
    "WAWebBizBroadcastProCampaignDetailsFromMessage.react",
    "WAWebBizBroadcastProCampaignDetailsFromMessageQuery.graphql",
    "WAWebBizBroadcastProRelayEnvironment",
    "WAWebDrawerManager",
    "asyncToGeneratorRuntime",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield r("WAWebBizBroadcastProRelayEnvironment")(),
            n = o("CometRelay").loadQuery(
              t,
              r("WAWebBizBroadcastProCampaignDetailsFromMessageQuery.graphql"),
              { campaignId: e },
              { fetchPolicy: "network-only" },
            );
          o("WAWebDrawerManager").DrawerManager.openDrawerRight(
            s.jsx(o("CometRelay").RelayEnvironmentProvider, {
              environment: t,
              children: s.jsx(
                r("WAWebBizBroadcastProCampaignDetailsFromMessage.react"),
                {
                  onClose: o("WAWebDrawerManager").closeDrawerRight,
                  queryRef: n,
                },
              ),
            }),
            { transition: "slide-left" },
          );
        })),
        c.apply(this, arguments)
      );
    }
    l.default = u;
  },
  98,
);
