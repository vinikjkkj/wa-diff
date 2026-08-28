__d(
  "AdsAdObjectLevelToPESelectors",
  [
    "AdsAdgroupDraftFragmentStore",
    "AdsCampaignDraftFragmentStore",
    "AdsCampaignGroupDraftFragmentStore",
    "AdsPEAdgroupSelectors",
    "AdsPECampaignGroupSelectors",
    "AdsPECampaignSelectors",
    "immutable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d,
      m,
      p,
      _,
      f,
      g,
      h = (g = r("immutable")).Map(
        ((e = {}),
        (e.campaign = (p = o(
          "AdsPECampaignGroupSelectors",
        )).getAllByFieldsSelector),
        (e.ad_set = (_ = o("AdsPECampaignSelectors")).getAllByFieldsSelector),
        (e.ad = (f = o("AdsPEAdgroupSelectors")).getAllByFieldsSelector),
        e),
      ),
      y = g.Map(
        ((s = {}),
        (s.campaign = p.getAllCachedSelector),
        (s.ad_set = _.getAllCachedSelector),
        (s.ad = f.getAllCachedSelector_LEGACY),
        s),
      ),
      C = g.Map(
        ((u = {}),
        (u.campaign = p.getByFieldsSelector),
        (u.ad_set = _.getByFieldsSelector),
        (u.ad = f.getByFieldsSelector),
        u),
      ),
      b = g.Map(
        ((c = {}),
        (c.campaign = p.getCachedSelector),
        (c.ad_set = _.getCachedSelector),
        (c.ad = f.getCachedSelector_LEGACY),
        c),
      ),
      v = g.Map(
        ((d = {}),
        (d.campaign = r(
          "AdsCampaignGroupDraftFragmentStore",
        ).getHasDraftSelector),
        (d.ad_set = r("AdsCampaignDraftFragmentStore").getHasDraftSelector),
        (d.ad = r("AdsAdgroupDraftFragmentStore").getHasDraftSelector),
        d),
      ),
      S = g.Map(
        ((m = {}),
        (m.campaign = r("AdsCampaignGroupDraftFragmentStore").getIsNewSelector),
        (m.ad_set = r("AdsCampaignDraftFragmentStore").getIsNewSelector),
        (m.ad = r("AdsAdgroupDraftFragmentStore").getIsNewSelector),
        m),
      );
    ((l.getAllByFieldsSelectorMap = h),
      (l.getAllCachedSelectorMap = y),
      (l.getByFieldsSelectorMap = C),
      (l.getCachedSelectorMap = b),
      (l.getHasDraftSelectorMap = v),
      (l.getIsNewSelectorMap = S));
  },
  98,
);
