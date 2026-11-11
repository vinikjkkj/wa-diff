__d(
  "WAWebBizBroadcastProCampaignStatusGetters",
  ["WAWebGetters", "WAWebGettersCaches"],
  function (t, n, r, o, a, i, l) {
    var e = o("WAWebGetters").createGetterFactories({
        createCache:
          o("WAWebGettersCaches").createBizBroadcastProCampaignStatusCache,
      }),
      s = e.field,
      u = s("displayStatus");
    l.getDisplayStatus = u;
  },
  98,
);
