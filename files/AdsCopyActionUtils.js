__d(
  "AdsCopyActionUtils",
  [
    "AdsCopyCopyCompletedDataActionFlux",
    "AdsPEAdgroupSelectors",
    "AdsPECampaignSelectors",
    "FBLogger",
    "immutable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n = e.campaignGroupIDs,
        a = e.campaignIDs;
      if (!a.count() && !n.count())
        return { campaignIDs: a, campaignGroupIDs: n };
      var l = o("AdsPEAdgroupSelectors").getByFieldsSelector()(
        t,
        { adset_id: null, campaign_id: null },
        i.id,
      );
      if (!l.hasValue())
        return (
          r("FBLogger")("ads").mustfix(
            "Duplication Error: duplicated adgroup (id %s) isn't loaded",
            t,
          ),
          { campaignIDs: a, campaignGroupIDs: n }
        );
      var s = l.getValueEnforcing(),
        u = s.adset_id,
        c = s.campaign_id,
        d = a,
        m = n;
      return (
        d.count() && (d = d.add(u)),
        m.count() && (m = m.add(c)),
        { campaignIDs: d, campaignGroupIDs: m }
      );
    }
    function s(e, t) {
      if (!e.count()) return e;
      var n = o("AdsPECampaignSelectors").getByFieldsSelector()(
        t,
        { campaign_id: null },
        i.id,
      );
      if (!n.hasValue())
        return (
          r("FBLogger")("ads").mustfix(
            "Duplication Error: duplicated campaign (id %s) isn't loaded",
            t,
          ),
          e
        );
      var a = n.getValueEnforcing(),
        l = a.campaign_id,
        s = e;
      return (s.count() && (s = s.add(l)), s);
    }
    function u(t, n, a) {
      var i = {
          campaignIDs: r("immutable").Set(),
          campaignGroupIDs: r("immutable").Set(),
        },
        l = t.ad,
        u = t.ad_set,
        c = t.campaign,
        d = c && c.length;
      return (
        !d && u && u.length
          ? (i.campaignGroupIDs = u.reduce(s, r("immutable").Set(a)))
          : !d &&
            l &&
            l.length &&
            (i = l.reduce(e, {
              campaignIDs: r("immutable").Set(n),
              campaignGroupIDs: r("immutable").Set(a),
            })),
        babelHelpers.extends({}, t, {
          adgroupIDs: l,
          campaignIDs: u,
          campaignGroupIDs: c,
          selectedCampaignIDs: i.campaignIDs.toArray(),
          selectedCampaignGroupIDs: i.campaignGroupIDs.toArray(),
          type: o("AdsCopyCopyCompletedDataActionFlux").actionType,
        })
      );
    }
    l.createCopyCompletedData = u;
  },
  98,
);
