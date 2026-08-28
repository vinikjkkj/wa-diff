__d(
  "AdsPEDerivedSelectionStore",
  [
    "invariant",
    "AdsAccountStore",
    "AdsBaseDerivedSelectionStore",
    "AdsCampaignCombinedStore",
    "AdsCampaignGroupCombinedStore",
    "AdsDataAtom",
    "AdsPEAdgroupSelectors",
    "AdsPENavSectionToSelectionSelectorMap",
    "AdsSelectionLevelSelectors",
    "FBLogger",
    "adsCreateStoreThunkSelector",
    "adsPENavStateSelector",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = (function (e) {
        function t() {
          for (var t, n = arguments.length, o = new Array(n), a = 0; a < n; a++)
            o[a] = arguments[a];
          return (
            (t = e.call.apply(e, [this].concat(o)) || this),
            (t.getSelector = r("adsCreateStoreThunkSelector")(
              babelHelpers.assertThisInitialized(t),
              t.get.bind(babelHelpers.assertThisInitialized(t)),
            )),
            babelHelpers.assertThisInitialized(t) ||
              babelHelpers.assertThisInitialized(t)
          );
        }
        babelHelpers.inheritsLoose(t, e);
        var n = t.prototype;
        return (
          (n.__getStores = function () {
            return [
              r("AdsAccountStore"),
              r("AdsCampaignCombinedStore"),
              r("AdsCampaignGroupCombinedStore"),
            ].concat(
              o("AdsPEAdgroupSelectors").getAllSelector_LEGACY.getStores(),
              r("adsPENavStateSelector").getStores(),
              o(
                "AdsPENavSectionToSelectionSelectorMap",
              ).selectedIDsSelector.getStores(),
              o(
                "AdsSelectionLevelSelectors",
              ).adsSelectionLevelSelector.getStores(),
            );
          }),
          (n.__getCurrentSection = function () {
            return r("adsPENavStateSelector")().section;
          }),
          (n.__getCurrentAdObjectLevel = function () {
            var e = r("adsPENavStateSelector")().section;
            return o("AdsSelectionLevelSelectors").adsSelectionLevelSelector(e);
          }),
          (n.__getSelectedIDs = function (t) {
            return o(
              "AdsPENavSectionToSelectionSelectorMap",
            ).selectedIDsSelector(t);
          }),
          (n.__getSelectedObjects = function (t, n) {
            var e = null;
            e: {
              if (
                t === "L1" ||
                t === "L2" ||
                t === "L3" ||
                t === "PACKAGE_AD_CREATION" ||
                t === "CAMPAIGN_OVERVIEW"
              ) {
                e = this.__getCurrentAdObjectLevel();
                break e;
              }
              if (
                t === "ACCOUNT" ||
                t === "AD_SCRIPTS" ||
                t === "BUSINESS_VIEW_REPORT" ||
                t === "CREATIVES" ||
                t === "MANAGE_REPORTS" ||
                t === "OPPORTUNITIES" ||
                t === "VIEW_REPORT" ||
                t === "VIEW_SHARED_REPORT" ||
                t === "MCR_VIEW_REPORT" ||
                t === "PARTNER_TOOL_EXAMPLE" ||
                t === "PT_AUTO_ROUTING_EXAMPLE"
              ) {
                e = "campaign";
                break e;
              }
              {
                (r("FBLogger")("ads").mustfix(
                  "Unexpected nav section %s, defaulting to using the CAMPAIGN_GROUP level to compute the selected objects. This is probably not the behavior that you want.",
                  t,
                ),
                  (e = "campaign"));
                break e;
              }
            }
            var a = o("AdsPEAdgroupSelectors").getAllSelector_LEGACY;
            return e === "ad"
              ? a()(n)
              : e === "ad_set"
                ? r("AdsCampaignCombinedStore").getAllObjects(n)
                : e === "campaign"
                  ? r("AdsCampaignGroupCombinedStore").getAllObjects(n)
                  : s(!1, "level %s not supported", e);
          }),
          t
        );
      })(r("AdsBaseDerivedSelectionStore")),
      c = new u(e || (e = r("AdsDataAtom")));
    l.default = c;
  },
  98,
);
