__d(
  "adsMgmtAdgroupGetThumbnailSrcSelector",
  [
    "AdsAccountStore",
    "AdsAssetFeedUtils",
    "AdsImageForAdgroupUtils",
    "AdsImageIDClasses",
    "AdsImageInfoStore",
    "AdsMgmtQPLLogger",
    "AdsPEAdgroupSelectors",
    "AdsPECampaignGroupSelectors",
    "AdsPECampaignSelectors",
    "AdsSelectorUtils",
    "LoadObject",
    "adsCreateStoreSelector",
    "err",
    "isFalsey",
    "qpl",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = r("adsCreateStoreSelector")(
        [].concat(
          (e || (e = o("AdsSelectorUtils"))).getStores([
            r("AdsAccountStore").getSelectedAccountID,
            o("AdsPEAdgroupSelectors").getByFieldsSelector,
            o("AdsPEAdgroupSelectors").getRecordSelector_LEGACY,
            o("AdsPECampaignSelectors").getRecordSelector,
            o("AdsPECampaignGroupSelectors").getRecordSelector,
          ]),
          [r("AdsImageInfoStore")],
        ),
        function (t) {
          var e = r("AdsAccountStore").getSelectedAccountID();
          if (e == null)
            return r("LoadObject").withError(r("err")("Account ID is null"), {
              creatorModuleID: i.id,
            });
          var n = o("AdsPEAdgroupSelectors").getByFieldsSelector()(
            t,
            { creative: null },
            i.id,
          );
          if (n.isLoading())
            return r("LoadObject").loading({ creatorModuleID: i.id });
          if (!n.hasValue())
            return r("LoadObject").empty({ creatorModuleID: i.id });
          var a = n.getValueEnforcing().creative,
            l = a ? a.thumbnail_url : null,
            s = r("isFalsey")(l),
            u = o("AdsAssetFeedUtils").isPACAdgroup(
              a == null ? void 0 : a.asset_feed_spec,
            );
          if (s || u) {
            [
              r("qpl")._(41484318, "4248"),
              r("qpl")._(41484289, "3972"),
            ].forEach(function (e) {
              (o("AdsMgmtQPLLogger").markerAnnotate(e, {
                bool: { had_at_least_one_falsey_thumbnail_src: s },
              }),
                o("AdsMgmtQPLLogger").markerAnnotate(e, {
                  bool: { had_at_least_one_pac_adgroup: u },
                }));
            });
            var c = o("AdsPEAdgroupSelectors").getRecordSelector_LEGACY()(t);
            if (c.isLoading())
              return r("LoadObject").loading({ creatorModuleID: i.id });
            if (!c.hasValue())
              return r("LoadObject").empty({ creatorModuleID: i.id });
            var d = c.getValueEnforcing(),
              m = o("AdsPECampaignGroupSelectors").getRecordSelector()(
                d.campaign_id,
              ),
              p = o("AdsPECampaignSelectors").getRecordSelector()(d.adset_id);
            if (p.isLoading() || m.isLoading())
              return r("LoadObject").loading({ creatorModuleID: i.id });
            if (!p.hasValue() || !m.hasValue())
              return r("LoadObject").empty({ creatorModuleID: i.id });
            var _ = o("AdsImageForAdgroupUtils").getSingleImageIDForAdgroup({
              accountID: e,
              adgroup: d,
              parentCampaignGroup: m.getValueEnforcing(),
              parentCampaign: p.getValueEnforcing(),
            });
            if (_ instanceof o("AdsImageIDClasses").AdsExternalImageID)
              l = _.getUrl();
            else if (_) {
              var f = r("AdsImageInfoStore").getThumbnail(_);
              if (f.isLoading())
                return r("LoadObject").loading({ creatorModuleID: i.id });
              f.hasValue() && (l = f.getValueEnforcing().displayImage.url);
            }
          }
          return r("LoadObject").withValue(l, { creatorModuleID: i.id });
        },
        { name: i.id + ".adsMgmtAdgroupGetThumbnailSrcSelector" },
      ),
      u = s;
    l.default = u;
  },
  98,
);
