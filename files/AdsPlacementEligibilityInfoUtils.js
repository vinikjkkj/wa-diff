__d(
  "AdsPlacementEligibilityInfoUtils",
  [
    "AdAccountBusinessConstraintsPerObjectivePlacementControlsGatingUtils",
    "AdCampaignDestination",
    "AdsAPICampaignRecordUtils",
    "AdsAPICampaignRecordUtilsShared",
    "AdsAPIDevicePlatform",
    "AdsAPIObjectives",
    "AdsAppUrlUtils",
    "AdsAppUtils",
    "AdsBulkValueUtils",
    "AdsBuyingTypes",
    "AdsCampaignGroupCreationSourceForPlacement",
    "AdsEmptyValue",
    "AdsPlacementAPISpecReaderUtils",
    "AdsPlacementEligibilityInfoUtilsShared",
    "AdsPlacementPluginList",
    "AdsPlacementRawSpecUtils",
    "AdsPlacementUtils",
    "AdsPromotedObjectTypes",
    "AdsUniformValue",
    "ClickToWhatsAppFeatureGating",
    "DeepRecordUtils",
    "adsCampaignBuildBulkPlacement",
    "adsPlacementAPISpecReaderConvertCampaignRecordToPlacementSpec",
    "firstx",
    "getAccountLevelPlacementExclusionsForObjective",
    "isMessageMarketingEnabledFromCampaign",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      if (r("AdsAppUrlUtils").isFacebookDesktopURL(e.objectStoreURL)) {
        if (
          o("AdsPlacementAPISpecReaderUtils").isOnlyActiveDevicePlatform(
            e.spec,
            r("AdsAPIDevicePlatform").MOBILE,
          )
        )
          return !0;
        if (
          o("AdsPlacementAPISpecReaderUtils").isOnlyActiveDevicePlatform(
            e.spec,
            r("AdsAPIDevicePlatform").DESKTOP,
          )
        )
          return !1;
      }
      if (
        r("AdsAppUrlUtils").isOculusURL(e.objectStoreURL) ||
        (r("AdsAppUtils").isMobileAppObjective(
          e.objective,
          e.promotedObjectType,
        ) &&
          !r("AdsAppUrlUtils").isWindowsURL(e.objectStoreURL))
      )
        return !1;
      var t = r("AdsAppUtils").isAppObjective(
        e.objective,
        e.promotedObjectType,
      );
      return (
        t &&
        !!e.spec.device_platforms &&
        !e.spec.device_platforms.includes(r("AdsAPIDevicePlatform").DESKTOP)
      );
    }
    function s(e) {
      if (
        r("AdsAppUrlUtils").isWindowsURL(e.objectStoreURL) ||
        r("AdsAppUrlUtils").isInstantGameURL(e.objectStoreURL) ||
        r("AdsAppUrlUtils").isOculusURL(e.objectStoreURL)
      )
        return !1;
      if (r("AdsAppUrlUtils").isFacebookDesktopURL(e.objectStoreURL)) {
        if (
          o("AdsPlacementAPISpecReaderUtils").isOnlyActiveDevicePlatform(
            e.spec,
            r("AdsAPIDevicePlatform").MOBILE,
          )
        )
          return !0;
        if (
          o("AdsPlacementAPISpecReaderUtils").isOnlyActiveDevicePlatform(
            e.spec,
            r("AdsAPIDevicePlatform").DESKTOP,
          )
        )
          return !1;
      }
      var t = r("AdsAppUtils").isMobileAppObjective(
        e.objective,
        e.promotedObjectType,
      );
      return (
        t &&
        !!e.spec.device_platforms &&
        !e.spec.device_platforms.includes(r("AdsAPIDevicePlatform").MOBILE)
      );
    }
    function u(e) {
      return o("AdsPlacementPluginList")
        .getAllPlatforms()
        .toOrderedMap()
        .map(function (t) {
          var n = Array.from(t.positions);
          return n.filter(function (t) {
            return e.some(function (e) {
              return (
                t.isEnabled(e.capabilities, e.account) &&
                !t.getIneligibilityReason(e)
              );
            });
          });
        })
        .mapKeys(function (e) {
          return e.key;
        });
    }
    function c(e) {
      if (!(!e || e instanceof r("AdsEmptyValue"))) return e.getValues()[0];
    }
    function d(e) {
      var t = r("adsCampaignBuildBulkPlacement")(e);
      return {
        publisher_platforms: c(t.publisher_platforms),
        device_platforms: c(t.device_platforms),
        facebook_positions: c(t.facebook_positions),
        audience_network_positions: c(t.audience_network_positions),
        instagram_positions: c(t.instagram_positions),
        messenger_positions: c(t.messenger_positions),
        whatsapp_positions: c(t.whatsapp_positions),
        user_os: c(t.user_os),
        user_device: c(t.user_device),
        excluded_user_device: c(t.excluded_user_device),
        wireless_carrier: c(t.wireless_carrier),
        brand_safety_content_filter_levels: c(
          t.brand_safety_content_filter_levels,
        ),
        excluded_publisher_list_ids: c(t.excluded_publisher_list_ids),
        excluded_brand_safety_content_types: c(
          t.excluded_brand_safety_content_types,
        ),
        instream_video_skippable_excluded: c(
          t.instream_video_skippable_excluded,
        ),
        contextual_targeting_categories: c(t.contextual_targeting_categories),
      };
    }
    function m(e) {
      var t;
      return (t = e[0].campaign.promoted_object) == null ? void 0 : t.page_id;
    }
    function p(e, t, n, a, i) {
      var l,
        s,
        u,
        c,
        d,
        p = i.accountPlacementExclusions,
        _ = i.hasRecentMessengerStoryAdPlacement,
        f = i.isBusinessHighTrustForMM,
        g = i.messageMarketingActivationStatusLoadObject,
        h = i.messengerMessageMarketingActivationStatus,
        y = i.objectivePlacementExclusions;
      if (n.length === 0)
        return {
          accountBlockLists: t,
          capabilities: e,
          objective: r("AdsAPIObjectives").NONE,
          buyingType: r("AdsBuyingTypes").AUCTION,
          spec: {},
        };
      var C = n[0],
        b = C.campaign,
        v = C.campaignGroup,
        S = (l = b.promoted_object) == null ? void 0 : l.full_funnel_objective,
        R = S || v.objective,
        L = v.buying_type,
        E = v.buy_with_integration_partner,
        k = v.buy_with_prime_type,
        I = v.smart_promotion_type,
        T = Array.isArray(v.special_ad_categories)
          ? v.special_ad_categories
          : (s = v.special_ad_categories) == null
            ? void 0
            : s.toArray(),
        D = v.is_opted_into_experiments,
        x = b.promoted_object,
        $ = o(
          "AdsCampaignGroupCreationSourceForPlacement",
        ).normalizeCampaignGroupCreationSourceForPlacement(
          v.campaign_group_creation_source,
        ),
        P = n.some(function (e) {
          var t = e.campaign;
          return t.is_dynamic_creative_optimization;
        }),
        N = n.some(function (e) {
          var t,
            n = e.campaign;
          return (t = n.promoted_object) == null ? void 0 : t.offer_id;
        }),
        M = b.destination_type,
        w = b.lightweight_split_test,
        A = (u = b.promoted_object) == null ? void 0 : u.object_store_url,
        F = b.optimization_goal,
        O = m(n),
        B = o("AdsAPICampaignRecordUtils").getPromotedObjectType(R, b),
        W = b.placement_soft_opt_out,
        q = b.conversion_locations,
        U = o(
          "adsPlacementAPISpecReaderConvertCampaignRecordToPlacementSpec",
        ).convertCampaignRecordToPlacementSpec(b),
        V = b == null || (c = b.targeting) == null ? void 0 : c.geo_locations,
        H = b.destination_type === r("AdCampaignDestination").FACEBOOK,
        G = b.destination_type === r("AdCampaignDestination").PHONE_CALL,
        z = g == null ? void 0 : g.getValue(),
        j =
          n.length > 0 &&
          n.every(function (e) {
            var t = e.campaign;
            return o(
              "AdsAPICampaignRecordUtilsShared",
            ).getIsWhatsAppMarketingMessagesActiveByDefault(t);
          }),
        K = o(
          "isMessageMarketingEnabledFromCampaign",
        ).isMessageMarketingEnabledFromCampaign(b),
        Q = n.some(function (e) {
          var t,
            n = e.campaign;
          return (t = n.targeting) == null ? void 0 : t.custom_audiences;
        }),
        X = v.is_odax_campaign_group,
        Y = o("ClickToWhatsAppFeatureGating").isEligibleForCTXAdvantageCatalog(
          b.destination_type,
          !1,
        ),
        J = x == null ? void 0 : x.product_set_id,
        Z = b.catalog_vertical,
        ee = Array.isArray(b.creative_sequence)
          ? b.creative_sequence
          : (d = b.creative_sequence) == null
            ? void 0
            : d.toArray(),
        te = (ee != null ? ee : []).length > 0,
        ne = {
          accountBlockLists: t,
          capabilities: e,
          messageMarketingActivationStatus: z,
          messengerMessageMarketingActivationStatus: h,
          isBusinessHighTrustForMM: f,
          hasRecentMessengerStoryAdPlacement: _,
          isClickToMPAds: H,
          objective: R,
          buyWithIntegrationPartner: E,
          buyWithPrimeType: k,
          buyingType: L,
          spec: U,
          softOptOutSpec: o("DeepRecordUtils").maybeToPlainObject(W),
          objectStoreURL: A,
          promotedObjectType: B,
          promotedPageID: O,
          optimizationGoal: F,
          targetingGeoLocations: V,
          containsOffer: N,
          containsDCO: P,
          account: a,
          isClickToCallAds: G,
          destinationType: M,
          lightWeightSplitTest: w,
          smartPromotionType: I,
          isWhatsAppMarketingMessagesActiveByDefault: j,
          specialAdCategories: T,
          isOptedIntoExperiments: D,
          promotedObject: x,
          conversionLocations: q,
          campaignGroupCreationSource: $,
          targetingCustomAudience: Q,
          isODAXCampaignGroup: X,
          campaignID: b.id,
          isWhatsAppMarketingMessageEnabled: K,
          isCTXAdvantageCatalogEnabled: Y,
          usingAdSequencing: te,
        },
        re = o(
          "AdAccountBusinessConstraintsPerObjectivePlacementControlsGatingUtils",
        ).isAdAccountBusinessConstraintsPerObjectivePlacementControlsEnabled()
          ? r("getAccountLevelPlacementExclusionsForObjective")(y, R)
          : p;
      return (
        re != null && (ne.accountPlacementExclusions = re),
        J != null && (ne.productSetID = J),
        Z != null && (ne.catalogVertical = Z),
        ne
      );
    }
    function _(e) {
      var t, n;
      return e == null || e.whatsapp_subscriber_pool == null
        ? !1
        : ((t = e.whatsapp_subscriber_pool) == null ? void 0 : t.id) != null ||
            ((n = e.whatsapp_subscriber_source) == null ? void 0 : n.id) !=
              null;
    }
    function f(e, t, n, a, i, l, s) {
      var u,
        c,
        m,
        p,
        f,
        g,
        h,
        y,
        C,
        b,
        v,
        S,
        R,
        L,
        E,
        k,
        I,
        T,
        D,
        x = s.isBusinessHighTrustForMM,
        $ = t.objective,
        P = t.buying_type,
        N = t.buy_with_prime_type,
        M = t.buy_with_integration_partner,
        w = e.targeting,
        A = e.is_dynamic_creative_optimization,
        F = t.smart_promotion_type,
        O = (u = e.targeting) == null ? void 0 : u.subscriber_universe,
        B = t.special_ad_categories,
        W = t.is_opted_into_experiments,
        q = e.promoted_object,
        U = t.campaign_group_creation_source,
        V = !!A && A.getValues().includes(!0),
        H = (c = e.promoted_object) == null ? void 0 : c.offer_id,
        G = !(H == null || H instanceof r("AdsEmptyValue")),
        z = (m = e.destination_type) == null ? void 0 : m.getValues()[0],
        j = (p = e.lightweight_split_test) == null ? void 0 : p.getValues()[0],
        K =
          (f = e.promoted_object) == null || (f = f.object_store_url) == null
            ? void 0
            : f.getValues()[0],
        Q = e.optimization_goal.getValues()[0],
        X =
          (g = t.promoted_object) == null || (g = g.page_id) == null
            ? void 0
            : g.getValues()[0],
        Y =
          i instanceof r("AdsUniformValue")
            ? i.getValue()
            : r("AdsPromotedObjectTypes").PIXEL,
        J = (h = e.conversion_locations) == null ? void 0 : h.getValues()[0],
        Z = (y = e.targeting) == null ? void 0 : y.direct_install_devices,
        ee = null;
      Z &&
        Z.getValues().length > 0 &&
        !(Z instanceof r("AdsEmptyValue")) &&
        (ee = Z.getValues()[0]);
      var te =
          ((C =
            (b = e.creative_sequence) == null ? void 0 : b.getValues()[0]) !=
          null
            ? C
            : []
          ).length > 0,
        ne = d(babelHelpers.extends({}, w)),
        re = !!$ && $.getValues(),
        oe = !!P && P.getValues(),
        ae = (v = N == null ? void 0 : N.getValues()) != null ? v : [],
        ie = (S = M == null ? void 0 : M.getValues()) != null ? S : [],
        le = (R = B == null ? void 0 : B.getValues()) != null ? R : [],
        se = (L = W == null ? void 0 : W.getValues()) != null ? L : [],
        ue = q != null && typeof q.getValues == "function" ? q.getValues() : [],
        ce = ((E = U == null ? void 0 : U.getValues()) != null ? E : []).map(
          o("AdsCampaignGroupCreationSourceForPlacement")
            .normalizeCampaignGroupCreationSourceForPlacement,
        ),
        de = o("AdsBulkValueUtils").getUniformValueOrDefault(
          (k = e.targeting) == null ? void 0 : k.geo_locations,
        ),
        me =
          o("AdsBulkValueUtils").getUniformValueOrDefault(
            e.destination_type,
          ) === r("AdCampaignDestination").FACEBOOK,
        pe =
          o("AdsBulkValueUtils").getUniformValueOrDefault(
            e.destination_type,
          ) === r("AdCampaignDestination").PHONE_CALL,
        _e = O != null && O.getValues().length > 0 && O.getValues().every(_);
      re &&
        re.length &&
        oe &&
        oe.length &&
        o("AdsPlacementRawSpecUtils").isRawPlacementSpecAutomatic(ne) &&
        (ne = r("AdsPlacementUtils").getDefaultCampaignPlacement({
          objective: r("firstx")(re),
          buyingType: r("firstx")(oe),
          bulkBuyWithIntegrationPartner: ie[0],
          bulkBuyWithPrimeType: ae[0],
          bulkSpecialAdCategories: le[0],
          bulkIsOptedIntoExperiments: se[0],
          bulkPromotedObject: ue[0],
          bulkCampaignGroupCreationSource: ce[0],
          capabilities: n,
          isClickToMPAds: me,
          promotedObjectType: Y,
          objectStoreURL: K,
          promotedPageID: X,
          containsOffer: G,
          optimizationGoal: Q,
          containsDCO: V,
          targetingDirectInstallDevices: ee,
          isClickToCallAds: pe,
          isWhatsAppMarketingMessagesActiveByDefault: _e,
        }));
      var fe =
          (((I = o("AdsBulkValueUtils").getUniformValueOrDefault(
            (T = e.targeting) == null ? void 0 : T.custom_audiences,
          )) == null
            ? void 0
            : I.length) || 0) > 0,
        ge = ue[0],
        he =
          (D = e.promoted_object) == null || (D = D.product_set_id) == null
            ? void 0
            : D.getValues()[0],
        ye = {
          accountBlockLists: a,
          capabilities: n,
          isClickToMPAds: me,
          objective: $.getValues()[0],
          buyingType: P.getValues()[0],
          buyWithIntegrationPartner: ie[0],
          buyWithPrimeType: ae[0],
          specialAdCategories: le[0],
          isOptedIntoExperiments: se[0],
          promotedObject: ge,
          conversionLocations: J,
          campaignGroupCreationSource: ce[0],
          spec: ne,
          objectStoreURL: K,
          promotedObjectType: Y,
          promotedPageID: X,
          optimizationGoal: Q,
          containsOffer: G,
          directInstallDevices: ee,
          containsDCO: V,
          targetingGeoLocations: de,
          targetingCustomAudience: fe,
          account: l,
          isClickToCallAds: pe,
          destinationType: z,
          lightWeightSplitTest: j,
          smartPromotionType: F.getValues()[0],
          isWhatsAppMarketingMessagesActiveByDefault: _e,
          isBusinessHighTrustForMM: x,
          usingAdSequencing: te,
        };
      return (he != null && (ye.productSetID = he), ye);
    }
    function g(e, t, n, a, i, l) {
      var s,
        u,
        c,
        d,
        m,
        p,
        f = l.isBusinessHighTrustForMM,
        g = t.objective,
        h = t.buying_type,
        y = t.buy_with_integration_partner,
        C = t.buy_with_prime_type,
        b = t.smart_promotion_type,
        v = e.targeting,
        S = (s = e.targeting) == null ? void 0 : s.subscriber_universe,
        R = t.special_ad_categories,
        L = t.is_opted_into_experiments,
        E = e.promoted_object,
        k = e.conversion_locations,
        I = t.campaign_group_creation_source,
        T = e.destination_type,
        D = e.lightweight_split_test,
        x = (u = e.promoted_object) == null ? void 0 : u.object_store_url,
        $ = (c = t.promoted_object) == null ? void 0 : c.page_id,
        P = e.optimization_goal,
        N = (d = e.promoted_object) == null ? void 0 : d.offer_id,
        M = e.is_dynamic_creative_optimization,
        w = !!M && M.getValues().includes(!0),
        A = (m = e.targeting) == null ? void 0 : m.geo_locations,
        F =
          o("AdsBulkValueUtils").getUniformValueOrDefault(
            e.destination_type,
          ) === r("AdCampaignDestination").FACEBOOK,
        O =
          o("AdsBulkValueUtils").getUniformValueOrDefault(
            e.destination_type,
          ) === r("AdCampaignDestination").PHONE_CALL,
        B = S != null && S.getValues().length > 0 && S.getValues().every(_),
        W = {
          accountBlockLists: new (r("AdsUniformValue"))(a),
          capabilities: new (r("AdsUniformValue"))(n),
          objective: g,
          buyingType: h,
          buyWithIntegrationPartner: y,
          buyWithPrimeType: C,
          bulkSmartPromotionType: b,
          bulkSpecialAdCategories: R,
          bulkIsOptedIntoExperiments: L,
          bulkPromotedObject: E,
          bulkCampaignGroupCreationSource: I,
          spec: v,
          destinationType: T,
          lightWeightSplitTest: D,
          objectStoreURL: x,
          bulkPromotedObjectType: i,
          bulkConversionLocations: k,
          promotedPageID: $,
          optimizationGoal: P,
          containsOffer: N,
          geoLocations: A,
          isClickToMPAds: o("AdsBulkValueUtils").wrapValue(F),
          isClickToCallAds: o("AdsBulkValueUtils").wrapValue(O),
          isWhatsAppMarketingMessagesActiveByDefault:
            o("AdsBulkValueUtils").wrapValue(B),
          isBusinessHighTrustForMM: o("AdsBulkValueUtils").wrapValue(f),
        },
        q = o("AdsBulkValueUtils").deaggregateDeep(W, e.id.getValues().length),
        U = (p = e.promoted_object) == null ? void 0 : p.product_set_id;
      return q.map(function (e, t) {
        if (
          ((e.containsOffer = !!e.containsOffer),
          (e.containsDCO = w),
          (e.campaignGroupCreationSource = o(
            "AdsCampaignGroupCreationSourceForPlacement",
          ).normalizeCampaignGroupCreationSourceForPlacement(
            e.campaignGroupCreationSource,
          )),
          U != null)
        ) {
          var n = U.getValueForIndex(t);
          n != null && (e.productSetID = n);
        }
        return e;
      });
    }
    function h(e, t, n, r, a, i, l, s, u, c, d, m, p, _, f, g, h, C, b) {
      var v, S;
      s === void 0 && (s = !1);
      var R = y(e, r, u),
        L = R.containsDCO,
        E = R.containsOffer,
        k = R.destinationType,
        I = R.directInstallDevices,
        T = R.isClickToCallAds,
        D = R.isClickToMPAds,
        x = R.isWhatsAppMarketingMessageEnabled,
        $ = R.isWhatsAppMarketingMessagesActiveByDefault,
        P = R.lightWeightSplitTest,
        N = R.optimizationGoal,
        M = R.promotedObject,
        w = R.promotedObjectType,
        A = R.spec,
        F = R.targetingCustomAudience,
        O = R.targetingGeoLocations,
        B = e.placement_soft_opt_out,
        W = (v = e.promoted_object) == null ? void 0 : v.product_set_id,
        q = e.catalog_vertical,
        U = Array.isArray(e.creative_sequence)
          ? e.creative_sequence
          : (S = e.creative_sequence) == null
            ? void 0
            : S.toArray(),
        V = (U != null ? U : []).length > 0,
        H = {
          accountBlockLists: a,
          areBlocklistsLoading: s,
          buyingType: t,
          capabilities: n,
          isClickToMPAds: D,
          buyWithIntegrationPartner: c,
          buyWithPrimeType: d,
          objective: r,
          spec: A,
          objectStoreURL: i,
          promotedPageID: l,
          promotedObjectType: w,
          conversionLocations: e.conversion_locations,
          optimizationGoal: N,
          containsOffer: E,
          containsDCO: L,
          directInstallDevices: I,
          targetingGeoLocations: O,
          targetingCustomAudience: F,
          account: u,
          isClickToCallAds: T,
          destinationType: k,
          lightWeightSplitTest: P,
          smartPromotionType: m,
          accountPlacementExclusions: g,
          isWhatsAppMarketingMessagesActiveByDefault: $,
          specialAdCategories: p,
          isOptedIntoExperiments: _,
          isODAXCampaignGroup: h,
          campaignGroupCreationSource: o(
            "AdsCampaignGroupCreationSourceForPlacement",
          ).normalizeCampaignGroupCreationSourceForPlacement(f),
          isWhatsAppMarketingMessageEnabled: x,
          campaignID: e.id,
          isTargetFrequencyInAuctionEnabled: C,
          promotedObject: M,
          softOptOutSpec: o("DeepRecordUtils").maybeToPlainObject(B),
          usingAdSequencing: V,
          messengerMessageMarketingActivationStatus: b,
        };
      return (
        W != null && (H.productSetID = W),
        q != null && (H.catalogVertical = q),
        H
      );
    }
    function y(e, t, n) {
      var r = o(
          "AdsPlacementAPISpecReaderUtils",
        ).convertCampaignToPlacementSpec_LEGACY(e),
        a = o(
          "AdsPlacementEligibilityInfoUtilsShared",
        ).buildEligibilityInformationFromPlacementSpecClean(e, t, n),
        i = a.containsDCO,
        l = a.containsOffer,
        s = a.destinationType,
        u = a.directInstallDevices,
        c = a.isBaSkipDelayedEligible,
        d = a.isClickToCallAds,
        m = a.isClickToMPAds,
        p = a.isWhatsAppMarketingMessageEnabled,
        _ = a.isWhatsAppMarketingMessagesActiveByDefault,
        f = a.lightWeightSplitTest,
        g = a.optimizationGoal,
        h = a.promotedObject,
        y = a.promotedObjectType,
        C = a.targetingCustomAudience,
        b = a.targetingGeoLocations;
      return {
        isClickToMPAds: m,
        promotedObjectType: y,
        optimizationGoal: g,
        containsDCO: i,
        containsOffer: l,
        directInstallDevices: u,
        targetingGeoLocations: b,
        targetingCustomAudience: C,
        isClickToCallAds: d,
        destinationType: s,
        lightWeightSplitTest: f,
        spec: r,
        isWhatsAppMarketingMessagesActiveByDefault: _,
        isBaSkipDelayedEligible: c,
        isWhatsAppMarketingMessageEnabled: p,
        promotedObject: h,
      };
    }
    function C(e, t) {
      return t
        .toOrderedSet()
        .filter(function (t) {
          var n = t.getIneligibilityReason,
            r = t.isActive;
          return r(e.spec) && !n(e);
        })
        .map(function (t) {
          var n = t.getPreviews;
          return n && n(e);
        })
        .flatten();
    }
    function b(e) {
      return C(e, o("AdsPlacementPluginList").getPositions(e));
    }
    ((l.isIneligibleWithDesktopOnlyObjectives = e),
      (l.isIneligibleWithMobileOnlyObjectives = s),
      (l.getEligiblePlacementsForCampaigns = u),
      (l.buildEligibilityInformationFromAdObjectsList = p),
      (l.buildEligibilityInformationFromBulkValues = f),
      (l.buildEligibilityInformationArrayFromBulkValues = g),
      (l.buildEligibilityInformationFromCampaignSpec = h),
      (l.buildEligibilityInformationFromCampaignSpecClean = y),
      (l.getPreviewsFromPositions = C),
      (l.getPreviews = b));
  },
  98,
);
