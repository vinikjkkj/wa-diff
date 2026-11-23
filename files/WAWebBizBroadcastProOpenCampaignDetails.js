__d(
  "WAWebBizBroadcastProOpenCampaignDetails",
  [
    "CometRelay",
    "WAWebBizBroadcastProCampaignDetailsFromMessage.react",
    "WAWebBizBroadcastProCampaignDetailsFromMessageQuery.graphql",
    "WAWebBizBroadcastProRelayEnvironment",
    "WAWebDrawerManager",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    async function u(e) {
      var t = await r("WAWebBizBroadcastProRelayEnvironment")(),
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
            { onClose: o("WAWebDrawerManager").closeDrawerRight, queryRef: n },
          ),
        }),
        { transition: "slide-left" },
      );
    }
    l.default = u;
  },
  98,
);
