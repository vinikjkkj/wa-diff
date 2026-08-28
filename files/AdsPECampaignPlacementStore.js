__d(
  "AdsPECampaignPlacementStore",
  [
    "AdsAPICampaignGroupRecord",
    "AdsAccountStore",
    "AdsCampaignGroupCombinedStore",
    "AdsDataAtom",
    "AdsPECampaignRawCombinedTableStore",
    "AdsPlacementStoreUtils",
    "FluxDerivedStore",
    "LoadObject",
    "MarketingMessagesHighTrustDataStore",
    "cr:11285",
    "cr:8858",
    "isFalsey",
    "shallowEqual",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(e) {
      return function (t) {
        var n = e
            ? r("AdsPECampaignRawCombinedTableStore").getRecord(t)
            : r("AdsPECampaignRawCombinedTableStore").getCachedRecord(t),
          o = n.map(function (t) {
            var n = t.campaign_id;
            if (r("isFalsey")(n)) {
              var o = new (r("AdsAPICampaignGroupRecord"))();
              return r("LoadObject").withValue(o, { creatorModuleID: i.id });
            }
            return e
              ? r("AdsCampaignGroupCombinedStore").getRecord(n)
              : r("AdsCampaignGroupCombinedStore").getCachedRecord(n);
          });
        return [n, o];
      };
    }
    function u(e) {
      return function (t) {
        var n = e
            ? r("AdsPECampaignRawCombinedTableStore").getObject(t)
            : r("AdsPECampaignRawCombinedTableStore").getCachedObject(t),
          o = n.map(function (t) {
            var n = t.campaign_id;
            if (r("isFalsey")(n)) {
              var o = {};
              return r("LoadObject").withValue(o, { creatorModuleID: i.id });
            }
            return e
              ? r("AdsCampaignGroupCombinedStore").getObject(n)
              : r("AdsCampaignGroupCombinedStore").getCachedObject(n);
          });
        return [n, o];
      };
    }
    function c(e) {
      var t,
        n = r("AdsAccountStore").getSelectedAccountID();
      if (n == null) return null;
      var o = e
        ? r("MarketingMessagesHighTrustDataStore").get(n)
        : r("MarketingMessagesHighTrustDataStore").getCached(n);
      return (t = o.getValue()) == null ? void 0 : t.isBusinessHighTrustForMM;
    }
    function d(e) {
      var t = r("AdsAccountStore").getSelectedAccountID();
      if (t == null || n("cr:8858") == null)
        return r("LoadObject").withValue(!1, { creatorModuleID: i.id });
      var o = e ? n("cr:8858").get(t) : n("cr:8858").getCached(t);
      return o.mapValue(function (e) {
        return (
          (e == null ? void 0 : e.hasRecentMessengerStoryAdPlacement) === !0
        );
      });
    }
    var m = (function (e) {
      function t() {
        for (var t, n = arguments.length, r = new Array(n), o = 0; o < n; o++)
          r[o] = arguments[o];
        return (
          (t = e.call.apply(e, [this].concat(r)) || this),
          (t.$AdsPECampaignPlacementStore$p_1 = s(!0)),
          (t.$AdsPECampaignPlacementStore$p_2 = s(!1)),
          babelHelpers.assertThisInitialized(t) ||
            babelHelpers.assertThisInitialized(t)
        );
      }
      babelHelpers.inheritsLoose(t, e);
      var a = t.prototype;
      return (
        (a.__getStores = function () {
          var e = [
            r("AdsAccountStore"),
            r("AdsCampaignGroupCombinedStore"),
            r("MarketingMessagesHighTrustDataStore"),
          ].concat(
            n("cr:8858") != null ? [n("cr:8858")] : [],
            [r("AdsPECampaignRawCombinedTableStore")],
            n("cr:11285") != null
              ? n("cr:11285").getAccountPlacementExclusionStores()
              : [],
          );
          return e;
        }),
        (a.__areEqual = function (t, n) {
          return r("shallowEqual")(t, n);
        }),
        (a.__getData = function (t) {
          var e = r("AdsAccountStore").getSelectedAccount(),
            a =
              n("cr:11285") != null
                ? n("cr:11285").getAccountPlacementExclusions()
                : void 0,
            i = a != null && a.length > 0 ? a : void 0;
          return babelHelpers.extends(
            {},
            o("AdsPlacementStoreUtils").getPlacementDependencyData(
              e,
              t,
              this.$AdsPECampaignPlacementStore$p_1,
            ),
            {
              accountPlacementExclusions: i,
              hasRecentMessengerStoryAdPlacementLoadObject: d(!0),
              isBusinessHighTrustForMM: c(!0),
            },
          );
        }),
        (a.__getCachedData = function (t) {
          var e = r("AdsAccountStore").getSelectedAccount(),
            a =
              n("cr:11285") != null
                ? n("cr:11285").getAccountPlacementExclusions()
                : void 0,
            i = a != null && a.length > 0 ? a : void 0;
          return babelHelpers.extends(
            {},
            o("AdsPlacementStoreUtils").getPlacementDependencyData(
              e,
              t,
              this.$AdsPECampaignPlacementStore$p_2,
            ),
            {
              accountPlacementExclusions: i,
              hasRecentMessengerStoryAdPlacementLoadObject: d(!1),
              isBusinessHighTrustForMM: c(!1),
            },
          );
        }),
        (a.__computeResult = function (t, n) {
          var e = o(
            "AdsPlacementStoreUtils",
          ).placementDependencyDataToDependency(n);
          return o(
            "AdsPlacementStoreUtils",
          ).getPlacementSpecLoadObjectFromDependency(e);
        }),
        t
      );
    })(r("FluxDerivedStore"));
    m.__moduleID = i.id;
    var p = new m(e || (e = r("AdsDataAtom")));
    l.default = p;
  },
  98,
);
