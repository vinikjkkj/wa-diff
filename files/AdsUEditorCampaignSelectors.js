__d(
  "AdsUEditorCampaignSelectors",
  [
    "AdAccountBusinessConstraintsPerObjectivePlacementControlsGatingUtils",
    "AdsAuctionFrequencyControlProvider",
    "AdsFrequencyControlEditorConstants",
    "AdsPlacementEligibilityInfoUtils",
    "AdsTargetFrequencyInAuctionUtils",
    "LoadObject",
    "VultureJSDeadSelector",
    "adAccountAccountControlInfoSelector",
    "adsAdvertiserProfileMessageMarketingActivationStatusSelector",
    "adsCreateSelector",
    "adsCreateStoreSelector",
    "adsMarketingMessagesHighTrustSelector",
    "adsPlacementAPISpecReaderConvertCampaignRecordToPlacementSpec",
    "adsUEditorAccountSelector",
    "adsUEditorAdObjectsForSelectedCampaignsSelector",
    "adsUEditorAdPlainObjectsForSelectedCampaignsSelector",
    "adsUEditorBlockListAccountListSelector",
    "adsUEditorSelectedCampaignPlainObjectsSelector",
    "adsUEditorSelectedCampaignsSelector",
    "adsUEditorSelectedRawCampaignsSelector",
    "cr:8788",
    "getAccountLevelPlacementExclusionsForObjective",
    "immutable",
    "memoizeByReference",
    "placementSpecsLogic",
    "whatsAppMarketingMessageTOSBootloadedSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e =
        n("cr:8788") != null
          ? n("cr:8788")
          : r("adsCreateSelector")(
              [],
              function () {
                return r("LoadObject").withValue(!1, { creatorModuleID: i.id });
              },
              { name: i.id },
            ),
      s = [
        r("adsUEditorAccountSelector"),
        r("adsUEditorBlockListAccountListSelector"),
        r("adsUEditorAdObjectsForSelectedCampaignsSelector"),
      ],
      u = r("adsCreateStoreSelector")(
        function (e) {
          return s.flatMap(function (t) {
            return t.getStores(e);
          });
        },
        function (t) {
          var e = r("adsUEditorAccountSelector")(t),
            n = r("adsUEditorBlockListAccountListSelector")(t),
            o = r("adsUEditorAdObjectsForSelectedCampaignsSelector")(t);
          return { account: e, accountBlockLists: n, adObjectsList: o };
        },
        {
          isGetStoresPure: s.every(function (e) {
            return e.isGetStoresPure;
          }),
          name: i.id + ".eligibilityInformationDependencies",
        },
      ),
      c = r("adsCreateSelector")(
        [
          u,
          o("adAccountAccountControlInfoSelector")
            .adAccountPlacementExclusionSelector,
          r("adsAdvertiserProfileMessageMarketingActivationStatusSelector"),
          o("adAccountAccountControlInfoSelector")
            .adAccountObjectivePlacementExclusionSelector,
          r("adsMarketingMessagesHighTrustSelector"),
          e,
        ],
        function (t, n, r, a, i, l) {
          var e,
            s,
            u = t.account,
            c = t.accountBlockLists,
            d = t.adObjectsList;
          return o(
            "AdsPlacementEligibilityInfoUtils",
          ).buildEligibilityInformationFromAdObjectsList(
            u.capabilities,
            c,
            d,
            u,
            {
              accountPlacementExclusions: n != null ? n : [],
              hasRecentMessengerStoryAdPlacement:
                (e = l.getValue()) != null ? e : !1,
              isBusinessHighTrustForMM: i == null ? void 0 : i.getValue(),
              messageMarketingActivationStatusLoadObject: r,
              messengerMessageMarketingActivationStatus:
                (s = u.marketing_messages_account_settings) == null
                  ? void 0
                  : s.messenger_activation_status,
              objectivePlacementExclusions: a,
            },
          );
        },
        { name: i.id + ".eligibilityInformationSelector" },
      ),
      d = r("adsCreateSelector")(
        [
          u,
          o("adAccountAccountControlInfoSelector")
            .adAccountPlacementExclusionSelector,
          r("adsAdvertiserProfileMessageMarketingActivationStatusSelector"),
          r("whatsAppMarketingMessageTOSBootloadedSelector"),
          r("AdsAuctionFrequencyControlProvider").toFluxSelector(),
          o("adAccountAccountControlInfoSelector")
            .adAccountObjectivePlacementExclusionSelector,
          r("adsMarketingMessagesHighTrustSelector"),
          e,
        ],
        function (t, n, r, o, a, i, l, s) {
          var e,
            u,
            c = t.account,
            d = t.accountBlockLists,
            p = t.adObjectsList;
          return m(c, d, p, n != null ? n : [], r.getValue(), o, a, {
            hasRecentMessengerStoryAdPlacement:
              (e = s.getValue()) != null ? e : !1,
            isBusinessHighTrustForMM: l == null ? void 0 : l.getValue(),
            messengerMessageMarketingActivationStatus:
              (u = c.marketing_messages_account_settings) == null
                ? void 0
                : u.messenger_activation_status,
            objectivePlacementExclusions: i,
          });
        },
        { name: i.id + ".eligibilityInformationMap" },
      );
    function m(e, t, n, a, i, l, s, u) {
      var c = u.hasRecentMessengerStoryAdPlacement,
        d = u.isBusinessHighTrustForMM,
        m = u.messengerMessageMarketingActivationStatus,
        p = u.objectivePlacementExclusions;
      return r("immutable").Map(
        n == null
          ? void 0
          : n.map(function (n) {
              var u,
                _,
                f,
                g,
                h,
                y = n.campaignGroup.buying_type,
                C =
                  (u = n.campaign.promoted_object) == null
                    ? void 0
                    : u.full_funnel_objective,
                b = C || n.campaignGroup.objective,
                v = o(
                  "AdAccountBusinessConstraintsPerObjectivePlacementControlsGatingUtils",
                ).isAdAccountBusinessConstraintsPerObjectivePlacementControlsEnabled()
                  ? (_ = r("getAccountLevelPlacementExclusionsForObjective")(
                      p,
                      b,
                    )) != null
                    ? _
                    : []
                  : a,
                S =
                  (f = n.campaign.promoted_object) == null
                    ? void 0
                    : f.object_store_url,
                R = n.campaignGroup.special_ad_categories,
                L = n.campaignGroup.is_opted_into_experiments,
                E = n.campaignGroup.campaign_group_creation_source,
                k =
                  (g = n.campaign.promoted_object) == null ? void 0 : g.page_id,
                I =
                  o(
                    "AdsTargetFrequencyInAuctionUtils",
                  ).isCompatibleWithTargetFrequencyInAuction(
                    y,
                    b,
                    n.campaign.optimization_goal,
                  ) &&
                  (s == null ? void 0 : s.get(n.campaign.id)) ===
                    o("AdsFrequencyControlEditorConstants")
                      .TARGET_FREQUENCY_SELECTOR_OPTION_INDEX,
                T = o(
                  "AdsPlacementEligibilityInfoUtils",
                ).buildEligibilityInformationFromCampaignSpec(
                  n.campaign,
                  y,
                  e == null ? void 0 : e.capabilities,
                  b,
                  t,
                  S,
                  k,
                  void 0,
                  e,
                  n.campaignGroup.buy_with_integration_partner,
                  n.campaignGroup.buy_with_prime_type,
                  void 0,
                  Array.isArray(R) ? R : R == null ? void 0 : R.toArray(),
                  L,
                  E,
                  v,
                  n.campaignGroup.is_odax_campaign_group,
                  I,
                );
              return (
                (T.isBaSkipDelayedEligible =
                  (h = n.campaign.is_ba_skip_delayed_eligible) != null
                    ? h
                    : !0),
                (T.messageMarketingActivationStatus = i),
                (T.messengerMessageMarketingActivationStatus = m),
                (T.isBusinessHighTrustForMM = d),
                (T.hasRecentMessengerStoryAdPlacement = c),
                l != null && (T.isWhatsAppMarketingMessageTOSAccepted = l),
                n.campaignGroup.is_reels_trending_ads_enabled === !0 &&
                  (T.isReelsTrendingAds = !0),
                n.campaignGroup.is_meta_moment_maker_enabled === !0 &&
                  (T.isMetaMomentMaker = !0),
                [n.campaign.id, T]
              );
            }),
      );
    }
    var p = r("adsCreateSelector")(
        [d],
        function (t) {
          return t.toArray();
        },
        { name: i.id + ".eligibilityInformationArray" },
      ),
      _ = r("adsCreateSelector")(
        [p],
        function (t) {
          return o("placementSpecsLogic").placementSpecsLogic(t);
        },
        { name: i.id + ".placementSpecs" },
      ),
      f = r("adsCreateSelector")(
        [r("adsUEditorSelectedRawCampaignsSelector")],
        function (t) {
          return g(
            t.map(function (e) {
              return e.toJSCached();
            }),
          );
        },
        { name: i.id + ".rawPlacementSpecs" },
      );
    function g(e) {
      var t;
      return (t =
        e == null
          ? void 0
          : e.map(function (e) {
              return o(
                "adsPlacementAPISpecReaderConvertCampaignRecordToPlacementSpec",
              ).convertCampaignRecordToPlacementSpec(e);
            })) != null
        ? t
        : [];
    }
    var h = r("adsCreateSelector")(
      [r("adsUEditorSelectedRawCampaignsSelector")],
      function (t) {
        return y(t);
      },
      { name: i.id + ".rawPlacementSpecsMap" },
    );
    function y(e) {
      return r("immutable").Map(
        e == null
          ? void 0
          : e.map(function (e) {
              return [
                e.id,
                o(
                  "adsPlacementAPISpecReaderConvertCampaignRecordToPlacementSpec",
                ).convertCampaignRecordToPlacementSpec(e),
              ];
            }),
      );
    }
    var C = r("adsCreateSelector")(
      [d, h],
      function (t, n) {
        return b(t, n);
      },
      { name: i.id + ".rawEligibilityInformationMap" },
    );
    function b(e, t) {
      return e.map(function (e, n) {
        var r = t.get(n);
        return babelHelpers.extends({}, e, { spec: r });
      });
    }
    var v = function (t) {
        return r("adsCreateSelector")(
          [r("adsUEditorAdObjectsForSelectedCampaignsSelector")],
          function (n) {
            return n.some(t);
          },
          { name: i.id },
        );
      },
      S = function (t) {
        return r("adsCreateSelector")(
          [r("adsUEditorAdObjectsForSelectedCampaignsSelector")],
          function (n) {
            return n.map(t);
          },
          { name: i.id },
        );
      },
      R = function (t) {
        return r("adsCreateSelector")(
          [r("adsUEditorAdObjectsForSelectedCampaignsSelector")],
          function (n) {
            return r("immutable").Map(
              n.map(function (e, n, r) {
                return [e.campaign.id, t(e, n, r)];
              }),
            );
          },
          { name: i.id },
        );
      },
      L = function (t) {
        return r("adsCreateSelector")(
          [r("adsUEditorAdPlainObjectsForSelectedCampaignsSelector")],
          function (n) {
            return new Map(
              n.map(function (e, n, r) {
                return [e.campaign.id, t(e, n, r)];
              }),
            );
          },
          { name: i.id },
        );
      },
      E = function (t) {
        return r("adsCreateSelector")(
          [r("adsUEditorSelectedCampaignsSelector")],
          function (n) {
            return n.some(t);
          },
          { name: i.id },
        );
      },
      k = function (t) {
        return r("adsCreateSelector")(
          [r("adsUEditorSelectedCampaignPlainObjectsSelector")],
          function (n) {
            return n.some(t);
          },
          { name: i.id },
        );
      },
      I = function (t) {
        return r("adsCreateSelector")(
          [r("adsUEditorSelectedCampaignsSelector")],
          function (n) {
            return n.every(t);
          },
          { name: i.id },
        );
      },
      T = function (t) {
        return r("adsCreateSelector")(
          [r("adsUEditorSelectedCampaignPlainObjectsSelector")],
          function (n) {
            return n.every(t);
          },
          { name: i.id },
        );
      },
      D = function (t) {
        return r("VultureJSDeadSelector")(i.id, "campaignsNoneSelector");
      },
      x = function (t) {
        return r("VultureJSDeadSelector")(i.id, "campaignsFilterSelector");
      },
      $ = function (t) {
        return r("adsCreateSelector")(
          [r("adsUEditorSelectedCampaignPlainObjectsSelector")],
          function (n) {
            return n.filter(t);
          },
          { name: i.id },
        );
      },
      P = function (t) {
        return r("adsCreateSelector")(
          [r("adsUEditorSelectedCampaignsSelector")],
          function (n) {
            return n.map(t);
          },
          { name: i.id },
        );
      },
      N = function (t) {
        return r("adsCreateSelector")(
          [r("adsUEditorSelectedCampaignPlainObjectsSelector")],
          function (n) {
            return n.map(t);
          },
          { name: i.id },
        );
      },
      M = function (t) {
        return r("adsCreateSelector")(
          [r("adsUEditorSelectedCampaignsSelector")],
          function (n) {
            return r("immutable").Map(
              n.map(function (e, n, r) {
                return [e.id, t(e, n, r)];
              }),
            );
          },
          { name: i.id },
        );
      },
      w = function (t) {
        return r("adsCreateSelector")(
          [r("adsUEditorSelectedCampaignPlainObjectsSelector")],
          function (n) {
            return r("immutable").Map(
              n.map(function (e, n, r) {
                return [e.id, t(e, n, r)];
              }),
            );
          },
          { name: i.id },
        );
      },
      A = {
        some: r("memoizeByReference")(v),
        map: r("memoizeByReference")(S),
        mapTransform: r("memoizeByReference")(R),
        mapTransformPlainObject: r("memoizeByReference")(L),
      },
      F = {
        some: r("memoizeByReference")(E),
        somePlainObject: r("memoizeByReference")(k),
        every: r("memoizeByReference")(I),
        everyPlainObject: r("memoizeByReference")(T),
        none: r("memoizeByReference")(D),
        filter: r("memoizeByReference")(x),
        filterPlainObject: r("memoizeByReference")($),
        map: r("memoizeByReference")(P),
        mapPlainObject: r("memoizeByReference")(N),
        mapTransform: r("memoizeByReference")(M),
        mapTransformPlainObject: r("memoizeByReference")(w),
      };
    ((l.eligibilityInformationDependencies = u),
      (l.eligibilityInformationSelector = c),
      (l.eligibilityInformationMap = d),
      (l.getEligibilityInformationMap = m),
      (l.eligibilityInformationArray = p),
      (l.placementSpecs = _),
      (l.rawPlacementSpecs = f),
      (l.getRawPlacementSpecs = g),
      (l.rawPlacementSpecsMap = h),
      (l.getRawPlacementSpecsMap = y),
      (l.rawEligibilityInformationMap = C),
      (l.getRawEligibilityInformationMap = b),
      (l.adObjectsList = A),
      (l.campaigns = F));
  },
  98,
);
