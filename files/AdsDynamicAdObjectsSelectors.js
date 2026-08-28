__d(
  "AdsDynamicAdObjectsSelectors",
  [
    "AdsAdgroupDraftFragmentStore",
    "AdsCampaignDraftFragmentStore",
    "AdsCampaignGroupDraftFragmentStore",
    "AdsDMLQueryHandler_DerivedDataBase",
    "AdsMgmtAdgroupDynamicStore",
    "AdsMgmtCampaignDynamicStore",
    "AdsMgmtCampaignGroupDynamicStore",
    "AdsTypedID",
    "FBLogger",
    "LoadObject",
    "adsCreateStoreSelector",
    "err",
    "filterNulls",
    "memoizeStringOnly",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (e = r("memoizeStringOnly"))(function (e) {
        return r("adsCreateStoreSelector")(
          [
            r("AdsMgmtCampaignGroupDynamicStore"),
            r("AdsCampaignGroupDraftFragmentStore"),
          ],
          function (n) {
            return r("AdsCampaignGroupDraftFragmentStore").isNew(n)
              ? r("LoadObject").withValue(void 0, { creatorModuleID: i.id })
              : r("AdsMgmtCampaignGroupDynamicStore").getSingleField(n, e);
          },
          { name: i.id },
        );
      });
    function u(e) {
      var t = s(e);
      return o("AdsDMLQueryHandler_DerivedDataBase").modularLoader(function () {
        return t.getStores();
      }, t);
    }
    var c = e(function (e) {
      return r("adsCreateStoreSelector")(
        r("filterNulls")([
          r("AdsMgmtCampaignDynamicStore"),
          r("AdsCampaignDraftFragmentStore"),
        ]),
        function (n) {
          return r("AdsCampaignDraftFragmentStore").isNew(n)
            ? r("LoadObject").withValue(void 0, { creatorModuleID: i.id })
            : r("AdsMgmtCampaignDynamicStore").getSingleField(n, e);
        },
        { name: i.id },
      );
    });
    function d(e) {
      var t = c(e);
      return o("AdsDMLQueryHandler_DerivedDataBase").modularLoader(function () {
        return t.getStores();
      }, t);
    }
    var m = e(function (e) {
        return r("adsCreateStoreSelector")(
          [r("AdsMgmtAdgroupDynamicStore"), r("AdsAdgroupDraftFragmentStore")],
          function (n) {
            return r("AdsAdgroupDraftFragmentStore").isNew(n)
              ? r("LoadObject").withValue(void 0, { creatorModuleID: i.id })
              : r("AdsMgmtAdgroupDynamicStore").getSingleField(n, e);
          },
          { name: i.id },
        );
      }),
      p = e(function (e) {
        return r("adsCreateStoreSelector")(
          [r("AdsMgmtAdgroupDynamicStore"), r("AdsAdgroupDraftFragmentStore")],
          function (n) {
            if (!o("AdsTypedID").isAdgroupTypedID(n))
              return (
                f([n]),
                r("LoadObject").withError(r("err")("Invalid ID type"), {
                  creatorModuleID: i.id,
                })
              );
            var t = o("AdsTypedID").adgroupTypedIDToFBID(n);
            return r("AdsAdgroupDraftFragmentStore").isNew(t)
              ? r("LoadObject").withValue(void 0, { creatorModuleID: i.id })
              : r("AdsMgmtAdgroupDynamicStore").getSingleField(t, e);
          },
          { name: i.id },
        );
      });
    function _(e) {
      var t = m(e);
      return o("AdsDMLQueryHandler_DerivedDataBase").modularLoader(function () {
        return t.getStores();
      }, t);
    }
    function f(e) {
      r("FBLogger")("ads").warn(
        "Wrong ID type received in %s for ids %s",
        i.id,
        e.join(","),
      );
    }
    ((l.getAdsDynamicCampaignGroupSelector = s),
      (l.dmlGetAdsDynamicCampaignGroupSelector = u),
      (l.getAdsDynamicCampaignSelector = c),
      (l.dmlGetAdsDynamicCampaignSelector = d),
      (l.getAdsDynamicAdgroupSelector = m),
      (l.getAdsDynamicAdgroupTypedSelector = p),
      (l.dmlGetAdsDynamicAdgroupSelector = _));
  },
  98,
);
