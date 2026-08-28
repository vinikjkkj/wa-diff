__d(
  "AdsAdgroupCallToActionMutatorsAdapter",
  [
    "AdsAdgroupEditorStore",
    "AdsAdgroupSpecPathPluginResolver",
    "AdsAudienceDirectConfig",
    "AdsCampaignGroupPromotedPageIDSelector",
    "AdsDataAtom",
    "AdsUEditorCallToActionMutators",
    "adsCampaignDestinationTypeSelector",
    "adsObjectiveSelector",
    "adsPromotedObjectTypeSelector_LEGACY",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = function (a, i, l, s) {
        var t = n("AdsAdgroupEditorStore"),
          u = t.getCachedCallToActionLink(i.id, a),
          c = r("AdsAudienceDirectConfig").accountType,
          d = l ? l.objective : r("adsObjectiveSelector")({ adgroup: i }),
          m = i.adset_id;
        (e || (e = r("AdsDataAtom"))).isDispatching() &&
          (e || (e = r("AdsDataAtom"))).waitFor(
            r("adsPromotedObjectTypeSelector_LEGACY")
              .getStores()
              .map(function (e) {
                return e.getDispatchToken();
              }),
          );
        var p = l
            ? l.promotedObjectType
            : r("adsPromotedObjectTypeSelector_LEGACY")(m),
          _ = r("AdsAdgroupSpecPathPluginResolver").resolve({
            accountType: c,
            objective: d,
            promotedObjectType: p,
          }),
          f = i.campaign_id,
          g = l
            ? l.campaignGroupPromotedPageID
            : r("AdsCampaignGroupPromotedPageIDSelector")(f),
          h = r("adsCampaignDestinationTypeSelector")(m);
        return o("AdsUEditorCallToActionMutators").setCallToAction({
          adgroup: i,
          cachedCallToActionLink: u,
          callToActionType: a,
          campaignGroupPromotedPageID: g,
          objective: d,
          pages: s,
          promotedObjectType: p,
          specPlugin: _,
          destination: h,
        });
      },
      u = function (n, a) {
        var t = r("AdsAudienceDirectConfig").accountType,
          i = r("adsObjectiveSelector")({ adgroup: a }),
          l = a.adset_id;
        (e || (e = r("AdsDataAtom"))).isDispatching() &&
          (e || (e = r("AdsDataAtom"))).waitFor(
            r("adsPromotedObjectTypeSelector_LEGACY")
              .getStores()
              .map(function (e) {
                return e.getDispatchToken();
              }),
          );
        var s = r("adsPromotedObjectTypeSelector_LEGACY")(l),
          u = r("AdsAdgroupSpecPathPluginResolver").resolve({
            accountType: t,
            objective: i,
            promotedObjectType: s,
          });
        return o("AdsUEditorCallToActionMutators").setCallToActionLink({
          link: n,
          adgroup: a,
          promotedObjectType: s,
          specPlugin: u,
        });
      };
    ((l.setCallToAction = s), (l.setCallToActionLink = u));
  },
  98,
);
