__d(
  "AdFLEXSelectRowCheckboxHeaderMessageMarketingConfigPlugin",
  [
    "AdsObjectTypes",
    "adsCreateSelector",
    "adsMgmtAdgroupSelectedIdsSelector",
    "adsMgmtCampaignGroupSelectedIdsSelector",
    "adsMgmtCampaignSelectedIdsSelector",
    "immutable",
    "isMarketingMessageDirectSendCampaign",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = [
        r("AdsObjectTypes").CAMPAIGN_GROUP,
        r("AdsObjectTypes").CAMPAIGN,
        r("AdsObjectTypes").ADGROUP,
      ],
      s = {
        type: "flexSelectRowCheckboxHeaderConfig",
        key: "marketingMessages",
        tool: "MANAGE_MESSAGES",
        getEligibleSelectAllAdObjects: u,
        getNavTabSelectionDetails: r("adsCreateSelector")(
          [
            o("adsMgmtCampaignGroupSelectedIdsSelector")
              .adsMgmtCampaignGroupSelectedIdsSelector,
            o("adsMgmtCampaignSelectedIdsSelector")
              .adsMgmtCampaignSelectedIdsSelector,
            o("adsMgmtAdgroupSelectedIdsSelector")
              .adsMgmtAdgroupSelectedIdsSelector,
          ],
          function (n, o, a) {
            var t,
              i = new Map();
            e.forEach(function (e) {
              return i.set(e, {
                selectionCount: 0,
                selectionLevel: r("AdsObjectTypes").CAMPAIGN_GROUP,
              });
            });
            var l = u((t = r("AdsObjectTypes")).CAMPAIGN_GROUP, n),
              s = u(t.CAMPAIGN, o),
              c = u(t.ADGROUP, a),
              d = i.get(t.CAMPAIGN_GROUP);
            d && (d.selectionCount = l.length);
            var m = i.get(r("AdsObjectTypes").ADGROUP);
            m &&
              (c.length
                ? ((m.selectionLevel = r("AdsObjectTypes").ADGROUP),
                  (m.selectionCount = c.length))
                : s.length
                  ? ((m.selectionLevel = r("AdsObjectTypes").CAMPAIGN),
                    (m.selectionCount = s.length))
                  : l.length &&
                    ((m.selectionLevel = r("AdsObjectTypes").CAMPAIGN_GROUP),
                    (m.selectionCount = l.length)));
            var p = i.get(r("AdsObjectTypes").CAMPAIGN);
            return (
              p &&
                (s.length
                  ? ((p.selectionLevel = r("AdsObjectTypes").CAMPAIGN),
                    (p.selectionCount = s.length))
                  : l.length &&
                    ((p.selectionLevel = r("AdsObjectTypes").CAMPAIGN_GROUP),
                    (p.selectionCount = l.length))),
              r("immutable").Map(i)
            );
          },
          { name: i.id + ".getNavTabSelectionDetails" },
        ),
      };
    function u(e, t) {
      var n = t.filter(function (t) {
        var n = r("isMarketingMessageDirectSendCampaign")(e, t);
        return !n;
      });
      return n;
    }
    var c = s;
    l.default = c;
  },
  98,
);
