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
    "CTXAdvantageCatalogEligibilityUtils",
    "DeepRecordUtils",
    "adsCampaignBuildBulkPlacement",
    "adsGetUsingAdSequencing",
    "adsPlacementAPISpecReaderConvertCampaignRecordToPlacementSpec",
    "convertSoftOptOutPlacementsToPositionKeys",
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
        _ = i.isBusinessHighTrustForMM,
        f = i.messageMarketingActivationStatusLoadObject,
        g = i.messengerMessageMarketingActivationStatus,
        h = i.objectivePlacementExclusions;
      if (n.length === 0)
        return {
          accountBlockLists: t,
          capabilities: e,
          objective: r("AdsAPIObjectives").NONE,
          buyingType: r("AdsBuyingTypes").AUCTION,
          spec: {},
        };
      var y = n[0],
        C = y.campaign,
        b = y.campaignGroup,
        v = (l = C.promoted_object) == null ? void 0 : l.full_funnel_objective,
        S = v || b.objective,
        R = b.buying_type,
        L = b.buy_with_integration_partner,
        E = b.buy_with_prime_type,
        k = b.smart_promotion_type,
        I = Array.isArray(b.special_ad_categories)
          ? b.special_ad_categories
          : (s = b.special_ad_categories) == null
            ? void 0
            : s.toArray(),
        T = Array.isArray(b.special_ad_category_country)
          ? b.special_ad_category_country
          : (u = b.special_ad_category_country) == null
            ? void 0
            : u.toArray(),
        D = b.is_opted_into_experiments,
        x = C.promoted_object,
        $ = o(
          "AdsCampaignGroupCreationSourceForPlacement",
        ).normalizeCampaignGroupCreationSourceForPlacement(
          b.campaign_group_creation_source,
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
        M = C.destination_type,
        w = C.lightweight_split_test,
        A = (c = C.promoted_object) == null ? void 0 : c.object_store_url,
        F = C.optimization_goal,
        O = m(n),
        B = o("AdsAPICampaignRecordUtils").getPromotedObjectType(S, C),
        W = C.placement_soft_opt_out,
        q = C.conversion_locations,
        U = o(
          "adsPlacementAPISpecReaderConvertCampaignRecordToPlacementSpec",
        ).convertCampaignRecordToPlacementSpec(C),
        V = C == null || (d = C.targeting) == null ? void 0 : d.geo_locations,
        H = C.destination_type === r("AdCampaignDestination").FACEBOOK,
        G = C.destination_type === r("AdCampaignDestination").PHONE_CALL,
        z = f == null ? void 0 : f.getValue(),
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
        ).isMessageMarketingEnabledFromCampaign(C),
        Q = n.some(function (e) {
          var t,
            n = e.campaign;
          return (t = n.targeting) == null ? void 0 : t.custom_audiences;
        }),
        X = b.is_odax_campaign_group,
        Y = o(
          "CTXAdvantageCatalogEligibilityUtils",
        ).isEligibleForCTXAdvantageCatalog(C.destination_type, !1),
        J = x == null ? void 0 : x.product_set_id,
        Z = C.catalog_vertical,
        ee = r("adsGetUsingAdSequencing")(C.creative_sequence),
        te = {
          accountBlockLists: t,
          capabilities: e,
          messageMarketingActivationStatus: z,
          messengerMessageMarketingActivationStatus: g,
          isBusinessHighTrustForMM: _,
          isClickToMPAds: H,
          objective: S,
          buyWithIntegrationPartner: L,
          buyWithPrimeType: E,
          buyingType: R,
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
          smartPromotionType: k,
          isWhatsAppMarketingMessagesActiveByDefault: j,
          specialAdCategories: I,
          specialAdCategoryCountry: T,
          isOptedIntoExperiments: D,
          promotedObject: x,
          conversionLocations: q,
          campaignGroupCreationSource: $,
          targetingCustomAudience: Q,
          isODAXCampaignGroup: X,
          campaignID: C.id,
          isWhatsAppMarketingMessageEnabled: K,
          isCTXAdvantageCatalogEnabled: Y,
          usingAdSequencing: ee,
        },
        ne = o(
          "AdAccountBusinessConstraintsPerObjectivePlacementControlsGatingUtils",
        ).isPerObjectivePlacementControlsEnabled()
          ? r("getAccountLevelPlacementExclusionsForObjective")(h, S)
          : p;
      return (
        ne != null && (te.accountPlacementExclusions = ne),
        J != null && (te.productSetID = J),
        Z != null && (te.catalogVertical = Z),
        te
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
        x,
        $ = s.isBusinessHighTrustForMM,
        P = t.objective,
        N = t.buying_type,
        M = t.buy_with_prime_type,
        w = t.buy_with_integration_partner,
        A = e.targeting,
        F = e.is_dynamic_creative_optimization,
        O = t.smart_promotion_type,
        B = (u = e.targeting) == null ? void 0 : u.subscriber_universe,
        W = t.special_ad_categories,
        q = t.special_ad_category_country,
        U = t.is_opted_into_experiments,
        V = e.promoted_object,
        H = t.campaign_group_creation_source,
        G = !!F && F.getValues().includes(!0),
        z = (c = e.promoted_object) == null ? void 0 : c.offer_id,
        j = !(z == null || z instanceof r("AdsEmptyValue")),
        K = (m = e.destination_type) == null ? void 0 : m.getValues()[0],
        Q = (p = e.lightweight_split_test) == null ? void 0 : p.getValues()[0],
        X =
          (f = e.promoted_object) == null || (f = f.object_store_url) == null
            ? void 0
            : f.getValues()[0],
        Y = e.optimization_goal.getValues()[0],
        J =
          (g = t.promoted_object) == null || (g = g.page_id) == null
            ? void 0
            : g.getValues()[0],
        Z =
          i instanceof r("AdsUniformValue")
            ? i.getValue()
            : r("AdsPromotedObjectTypes").PIXEL,
        ee = (h = e.conversion_locations) == null ? void 0 : h.getValues()[0],
        te = (y = e.targeting) == null ? void 0 : y.direct_install_devices,
        ne = null;
      te &&
        te.getValues().length > 0 &&
        !(te instanceof r("AdsEmptyValue")) &&
        (ne = te.getValues()[0]);
      var re =
          ((C =
            (b = e.creative_sequence) == null ? void 0 : b.getValues()[0]) !=
          null
            ? C
            : []
          ).length > 0,
        oe = d(babelHelpers.extends({}, A)),
        ae = !!P && P.getValues(),
        ie = !!N && N.getValues(),
        le = (v = M == null ? void 0 : M.getValues()) != null ? v : [],
        se = (S = w == null ? void 0 : w.getValues()) != null ? S : [],
        ue = (R = W == null ? void 0 : W.getValues()) != null ? R : [],
        ce = (L = q == null ? void 0 : q.getValues()) != null ? L : [],
        de = (E = U == null ? void 0 : U.getValues()) != null ? E : [],
        me = V != null && typeof V.getValues == "function" ? V.getValues() : [],
        pe = ((k = H == null ? void 0 : H.getValues()) != null ? k : []).map(
          o("AdsCampaignGroupCreationSourceForPlacement")
            .normalizeCampaignGroupCreationSourceForPlacement,
        ),
        _e = o("AdsBulkValueUtils").getUniformValueOrDefault(
          (I = e.targeting) == null ? void 0 : I.geo_locations,
        ),
        fe =
          o("AdsBulkValueUtils").getUniformValueOrDefault(
            e.destination_type,
          ) === r("AdCampaignDestination").FACEBOOK,
        ge =
          o("AdsBulkValueUtils").getUniformValueOrDefault(
            e.destination_type,
          ) === r("AdCampaignDestination").PHONE_CALL,
        he = B != null && B.getValues().length > 0 && B.getValues().every(_);
      ae &&
        ae.length &&
        ie &&
        ie.length &&
        o("AdsPlacementRawSpecUtils").isRawPlacementSpecAutomatic(oe) &&
        (oe = r("AdsPlacementUtils").getDefaultCampaignPlacement({
          objective: r("firstx")(ae),
          buyingType: r("firstx")(ie),
          bulkBuyWithIntegrationPartner: se[0],
          bulkBuyWithPrimeType: le[0],
          bulkSpecialAdCategories: ue[0],
          bulkIsOptedIntoExperiments: de[0],
          bulkPromotedObject: me[0],
          bulkCampaignGroupCreationSource: pe[0],
          capabilities: n,
          isClickToMPAds: fe,
          promotedObjectType: Z,
          objectStoreURL: X,
          promotedPageID: J,
          containsOffer: j,
          optimizationGoal: Y,
          containsDCO: G,
          targetingDirectInstallDevices: ne,
          isClickToCallAds: ge,
          isWhatsAppMarketingMessagesActiveByDefault: he,
        }));
      var ye =
          (((T = o("AdsBulkValueUtils").getUniformValueOrDefault(
            (D = e.targeting) == null ? void 0 : D.custom_audiences,
          )) == null
            ? void 0
            : T.length) || 0) > 0,
        Ce = me[0],
        be =
          (x = e.promoted_object) == null || (x = x.product_set_id) == null
            ? void 0
            : x.getValues()[0],
        ve = {
          accountBlockLists: a,
          capabilities: n,
          isClickToMPAds: fe,
          objective: P.getValues()[0],
          buyingType: N.getValues()[0],
          buyWithIntegrationPartner: se[0],
          buyWithPrimeType: le[0],
          specialAdCategories: ue[0],
          specialAdCategoryCountry: ce[0],
          isOptedIntoExperiments: de[0],
          promotedObject: Ce,
          conversionLocations: ee,
          campaignGroupCreationSource: pe[0],
          spec: oe,
          objectStoreURL: X,
          promotedObjectType: Z,
          promotedPageID: J,
          optimizationGoal: Y,
          containsOffer: j,
          directInstallDevices: ne,
          containsDCO: G,
          targetingGeoLocations: _e,
          targetingCustomAudience: ye,
          account: l,
          isClickToCallAds: ge,
          destinationType: K,
          lightWeightSplitTest: Q,
          smartPromotionType: O.getValues()[0],
          isWhatsAppMarketingMessagesActiveByDefault: he,
          isBusinessHighTrustForMM: $,
          usingAdSequencing: re,
        };
      return (be != null && (ve.productSetID = be), ve);
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
    function h(e, t, n, a, i, l, s, u, c, d, m, p, _, f, g, h, C, b, v, S) {
      var R;
      u === void 0 && (u = !1);
      var L = y(e, a, c),
        E = L.containsDCO,
        k = L.containsOffer,
        I = L.destinationType,
        T = L.directInstallDevices,
        D = L.isClickToCallAds,
        x = L.isClickToMPAds,
        $ = L.isWhatsAppMarketingMessageEnabled,
        P = L.isWhatsAppMarketingMessagesActiveByDefault,
        N = L.lightWeightSplitTest,
        M = L.optimizationGoal,
        w = L.promotedObject,
        A = L.promotedObjectType,
        F = L.spec,
        O = L.targetingCustomAudience,
        B = L.targetingGeoLocations,
        W = e.placement_soft_opt_out,
        q = (R = e.promoted_object) == null ? void 0 : R.product_set_id,
        U = e.catalog_vertical,
        V = r("adsGetUsingAdSequencing")(e.creative_sequence),
        H = {
          accountBlockLists: i,
          areBlocklistsLoading: u,
          buyingType: t,
          capabilities: n,
          isClickToMPAds: x,
          buyWithIntegrationPartner: d,
          buyWithPrimeType: m,
          objective: a,
          spec: F,
          objectStoreURL: l,
          promotedPageID: s,
          promotedObjectType: A,
          conversionLocations: e.conversion_locations,
          optimizationGoal: M,
          containsOffer: k,
          containsDCO: E,
          directInstallDevices: T,
          targetingGeoLocations: B,
          targetingCustomAudience: O,
          account: c,
          isClickToCallAds: D,
          destinationType: I,
          lightWeightSplitTest: N,
          smartPromotionType: p,
          accountPlacementExclusions: h,
          isWhatsAppMarketingMessagesActiveByDefault: P,
          specialAdCategories: _,
          specialAdCategoryCountry: S,
          isOptedIntoExperiments: f,
          isODAXCampaignGroup: C,
          campaignGroupCreationSource: o(
            "AdsCampaignGroupCreationSourceForPlacement",
          ).normalizeCampaignGroupCreationSourceForPlacement(g),
          isWhatsAppMarketingMessageEnabled: $,
          campaignID: e.id,
          isTargetFrequencyInAuctionEnabled: b,
          promotedObject: w,
          softOptOutSpec: o("DeepRecordUtils").maybeToPlainObject(W),
          usingAdSequencing: V,
          messengerMessageMarketingActivationStatus: v,
        };
      return (
        q != null && (H.productSetID = q),
        U != null && (H.catalogVertical = U),
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
      var n = r("convertSoftOptOutPlacementsToPositionKeys")(e.softOptOutSpec);
      return t
        .toOrderedSet()
        .filter(function (t) {
          return (
            t.isActive(e.spec) && !t.getIneligibilityReason(e) && !n.has(t.key)
          );
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
