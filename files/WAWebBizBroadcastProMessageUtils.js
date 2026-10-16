__d(
  "WAWebBizBroadcastProMessageUtils",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      var t = e.isBizBroadcastProChat,
        n = e.isSentByMe,
        r = e.pmCampaignId;
      return t && n && r != null;
    }
    i.isBizBroadcastProOutgoingMessage = e;
  },
  66,
);
