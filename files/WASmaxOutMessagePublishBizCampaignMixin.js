__d(
  "WASmaxOutMessagePublishBizCampaignMixin",
  ["WASmaxJsx", "WASmaxMixins", "WAWap"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.bizCampaignId,
        n = o("WASmaxJsx").smax(
          "message",
          null,
          o("WASmaxJsx").smax("biz", {
            campaign_id: o("WAWap").CUSTOM_STRING(t),
          }),
        );
      return n;
    }
    function s(t, n) {
      var r = e(n);
      return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergeBizCampaignMixin = s;
  },
  98,
);
