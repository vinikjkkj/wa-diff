__d(
  "WAWebBizBroadcastProChatUtils",
  [
    "WAWebBizBroadcastProListUtils",
    "WAWebBroadcastMetadataGetters",
    "WAWebFrontendChatGetters",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WAWebFrontendChatGetters").getBroadcastMetadata(e);
      return (
        t != null &&
        o("WAWebBizBroadcastProListUtils").isBizBroadcastProList(
          o("WAWebBroadcastMetadataGetters").getCustomAudienceFbid(t),
        )
      );
    }
    l.getIsBizBroadcastProChat = e;
  },
  98,
);
