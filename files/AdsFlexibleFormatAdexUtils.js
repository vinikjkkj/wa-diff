__d(
  "AdsFlexibleFormatAdexUtils",
  [
    "AdCampaignDestination",
    "AdsAPIAdgroupRecordUtils",
    "AdsAPIDevicePlatform",
    "AdsAPIObjectives",
    "AdsAdgroupCreativeAssetGroupsSpecOriginMutators",
    "AdsAssetFeedUtils",
    "AdsChildAttachmentsUtils",
    "AdsCreativeFlexAssetUtils",
    "AdsDynamicAdsFormatUtils",
    "AdsDynamicAdsUtils",
    "AdsFlexibleFormatDAUtils",
    "AdsFlexibleFormatPacCarouselUtils",
    "AdsMetadataConnectedSourcesUtils",
    "AdsObjectTypeUtils",
    "AdsPCAUnifiedFormatEligibilityUtils",
    "AdsSensitiveVerticalUtils",
    "AdsUEditorMessagingDestinationUtils",
    "AdsWizardMediaPickerMultiUploadUtils",
    "ApiAdObjectTypes",
    "ClickToWhatsAppFeatureGating",
    "DAFlexibleFormatUtils",
    "DeepRecordUtils",
    "IGAdsSensitiveVerticalsUtils",
    "gkx",
    "justknobx",
    "qex",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 3,
      s = 10,
      u = 10,
      c = ["carousel", "sa_collection", "video_slideshow"],
      d = ["carousel", "sa_collection"],
      m = ["carousel", "video_slideshow"],
      p = ["simplified_format", "simplified_format_v2"];
    function _(e) {
      var t = e.creative;
      return t == null || Object.keys(t).length === 0;
    }
    function f(e) {
      return (
        (o("AdsWizardMediaPickerMultiUploadUtils").isEligibleForMultiUpload(
          "silent",
        ) ||
          (e != null &&
            o("AdsCreativeFlexAssetUtils").hasMultiMediaAssetsOfSource(
              e,
              "multi_media",
            ))) &&
        !r("gkx")("22874")
      );
    }
    function g(e, t) {
      return f(t) ? !1 : r("gkx")("12020") || P(e) || Q(t);
    }
    function h(e, t, n) {
      return f(n) ? !1 : P(t) || Q(n);
    }
    function y(e, t, n, a) {
      return o("AdsPCAUnifiedFormatEligibilityUtils").isEligiblePCAUnifiedL1(
        t,
        n,
      ) || v(n, a)
        ? "modal_format_preview"
        : o(
              "AdsMetadataConnectedSourcesUtils",
            ).isEligibleForCESCreativeSetupWithAppInfo(e, t, n) ||
            t.objective === r("AdsAPIObjectives").APP_INSTALLS
          ? "simplified_format"
          : C(e, t, n);
    }
    function C(e, t, n) {
      return o("AdsDynamicAdsUtils").isDynamicAd(n) &&
        o(
          "DAFlexibleFormatUtils",
        ).isAdgroupEligibleForDACarouselIntroCardRevamp(n, !1)
        ? "simplified_format"
        : "format";
    }
    var b = [
      "sa_single_image",
      "sa_carousel",
      "da_carousel",
      "epa_single_media",
      "epa_multi_medias",
    ];
    function v(e, t) {
      if (r("justknobx")._("695") || !b.includes(t)) return !1;
      var n = !o("AdsDynamicAdsUtils").isDynamicAd(e),
        a =
          o("AdsDynamicAdsUtils").isDynamicAd(e) &&
          o("AdsDynamicAdsFormatUtils").getIsDynamicAdCarouselMediaFormat(e);
      return !n && !a
        ? !1
        : o("AdsSensitiveVerticalUtils").isAccountInSensitiveVerticals()
          ? !0
          : S();
    }
    function S(e) {
      return e === !0 ? r("gkx")("25281") : r("gkx")("13894");
    }
    function R(e) {
      return e === !0 ? r("gkx")("8565") : r("gkx")("8668");
    }
    function L(e) {
      return r("IGAdsSensitiveVerticalsUtils")
        .is_pharma_or_sensitive_vertical ||
        r("IGAdsSensitiveVerticalsUtils").is_luxury_vertical
        ? !1
        : e === !0
          ? r("gkx")("16555")
          : r("gkx")("16556");
    }
    function E(e) {
      var t;
      return (
        ((t = e.creative) == null ||
        (t = t.creative_sourcing_spec) == null ||
        (t = t.website_media_spec) == null
          ? void 0
          : t.enroll_status) === "OPT_IN"
      );
    }
    function k(e) {
      return e === !0 ? r("gkx")("21512") : r("gkx")("22841");
    }
    function I(e) {
      return e == null ? !1 : L(!0) && E(e) && x(e) > 0;
    }
    function T(e) {
      return k(!0) || I(e);
    }
    function D(e) {
      var t,
        n =
          e == null ||
          (t = e.creative) == null ||
          (t = t.creative_sourcing_spec) == null ||
          (t = t.site_links_data_consented) == null
            ? void 0
            : t.enroll_status;
      return n != null ? n === "OPT_IN" : !1;
    }
    function x(e) {
      var t,
        n = o("DeepRecordUtils").maybeToPlainObject(
          (t = e.creative) == null || (t = t.creative_sourcing_spec) == null
            ? void 0
            : t.website_media_spec,
        ),
        r = n == null ? void 0 : n.media;
      if (r == null) return 0;
      var a = 0;
      return (
        r.forEach(function (e) {
          (e == null ? void 0 : e.image_url) != null && a++;
        }),
        a
      );
    }
    function $(e) {
      var t,
        n,
        r,
        o,
        a =
          (t = e.creative) == null ||
          (t = t.creative_sourcing_spec) == null ||
          (t = t.site_links_data_consented) == null
            ? void 0
            : t.enroll_status,
        i =
          (n =
            (r = e.creative) == null ||
            (r = r.creative_sourcing_spec) == null ||
            (r = r.site_links_spec) == null
              ? void 0
              : r.size) != null
            ? n
            : 0,
        l =
          (o = e.creative) == null ||
          (o = o.creative_sourcing_spec) == null ||
          (o = o.dynamic_site_links_spec) == null
            ? void 0
            : o.enroll_status,
        s = (a !== "OPT_OUT" && i > 0) || l === "OPT_IN";
      return s ? !0 : L(!0) ? E(e) && x(e) > 0 : !1;
    }
    function P(e) {
      return r("gkx")("12123")
        ? (o("AdsSensitiveVerticalUtils").isAccountInSensitiveVerticals(), !0)
        : !1;
    }
    function N(e) {
      return r("IGAdsSensitiveVerticalsUtils")
        .is_pharma_or_sensitive_vertical ||
        r("IGAdsSensitiveVerticalsUtils").is_luxury_vertical
        ? !1
        : e === !0
          ? r("qex")._("2524") === !0 ||
            (r("gkx")("12123") && r("gkx")("10141"))
          : r("qex")._("2525") === !0 ||
            (r("gkx")("12123") && r("gkx")("10159"));
    }
    function M(e) {
      return !(
        r("IGAdsSensitiveVerticalsUtils").is_pharma_or_sensitive_vertical ||
        r("IGAdsSensitiveVerticalsUtils").is_luxury_vertical
      );
    }
    function w(e, t, n, a) {
      return (!o(
        "AdsMetadataConnectedSourcesUtils",
      ).isEligibleForCESCreativeSetupWithPE(e, t, n) &&
        !o(
          "AdsMetadataConnectedSourcesUtils",
        ).isEligibleForCESCreativeSetupWithSE(e, t, n)) ||
        f(n) ||
        (e.destination_type === r("AdCampaignDestination").WHATSAPP &&
          o("ClickToWhatsAppFeatureGating").isLegacyCTWAPETargetingEligible() &&
          !r("gkx")("8700")) ||
        (o("AdsUEditorMessagingDestinationUtils").isCTM(e.destination_type) &&
          o("AdsMetadataConnectedSourcesUtils").isEligibleAdAccount() &&
          !r("gkx")("20754"))
        ? !1
        : P(a);
    }
    function A(e, t, n, a) {
      return !o(
        "AdsMetadataConnectedSourcesUtils",
      ).isEligibleForCESCreativeSetupWithPEOrSEOrAppInfo(e, t, n) ||
        f(n) ||
        (e.destination_type === r("AdCampaignDestination").WHATSAPP &&
          o("ClickToWhatsAppFeatureGating").isLegacyCTWAPETargetingEligible() &&
          !r("gkx")("8700")) ||
        (o("AdsUEditorMessagingDestinationUtils").isCTM(e.destination_type) &&
          o("AdsMetadataConnectedSourcesUtils").isEligibleAdAccount() &&
          !r("gkx")("20754"))
        ? !1
        : o(
              "AdsMetadataConnectedSourcesUtils",
            ).isEligibleForCESCreativeSetupWithAppInfo(e, t, n) &&
            !r("IGAdsSensitiveVerticalsUtils")
              .is_pharma_or_sensitive_vertical &&
            !r("IGAdsSensitiveVerticalsUtils").is_luxury_vertical
          ? !0
          : P(a);
    }
    function F(e, t, n) {
      var r;
      return (
        (!_(n) && A(e, t, n)) ||
        ((!_(n) ||
          ((r = n.creative) == null || (r = r.creative_sourcing_spec) == null
            ? void 0
            : r.associated_product_set_id) != null) &&
          o("AdsPCAUnifiedFormatEligibilityUtils").isEligiblePCAUnifiedL1(
            t,
            n,
          )) ||
        (!_(n) && Q(n))
      );
    }
    function O(e, t, n) {
      return _(e) ||
        (o("AdsObjectTypeUtils").isDynamicProductAd(e) &&
          o("ClickToWhatsAppFeatureGating").isEligibleForCTXAdvantageCatalog(
            t.destination_type,
            !1,
          ))
        ? !1
        : o("AdsFlexibleFormatDAUtils").isReactiveControlCardVisibleForDA(e)
          ? !0
          : !o("AdsObjectTypeUtils").isDynamicProductAd(e) &&
              o("AdsChildAttachmentsUtils").isStaticCarouselAd(e)
            ? !o("AdsChildAttachmentsUtils").isCarouseAdWithAtLeastXMedia(
                e,
                n,
                2,
              ) ||
              !o("AdsChildAttachmentsUtils").isCarouseAdWithAtLeastXImages(
                e,
                n,
                1,
              )
              ? !1
              : B()
            : !o("AdsObjectTypeUtils").isDynamicProductAd(e) &&
                o("AdsAssetFeedUtils").hasPACCarouselFormat(e)
              ? !W(t) ||
                !o(
                  "AdsFlexibleFormatPacCarouselUtils",
                ).isPacCarouselWithAtLeastXMedia(e, 2) ||
                !o(
                  "AdsFlexibleFormatPacCarouselUtils",
                ).isPacCarouselWithAtLeastXImages(e, 1)
                ? !1
                : o("AdsFlexibleFormatPacCarouselUtils").passGKForPACCarousel()
              : !1;
    }
    function B() {
      return r("gkx")("12224")
        ? (o("AdsSensitiveVerticalUtils").isAccountInSensitiveVerticals(), !0)
        : !1;
    }
    function W(e) {
      var t = e.targeting.facebook_positions,
        n = e.targeting.instagram_positions,
        o = e.targeting.device_platforms,
        a =
          (t == null ? void 0 : t.includes("feed")) === !0 ||
          (n == null ? void 0 : n.includes("stream")) === !0,
        i = o == null || o.includes(r("AdsAPIDevicePlatform").MOBILE);
      return a && i;
    }
    function q() {
      return r("IGAdsSensitiveVerticalsUtils")
        .is_pharma_or_sensitive_vertical ||
        r("IGAdsSensitiveVerticalsUtils").is_luxury_vertical
        ? !1
        : r("gkx")("21570");
    }
    function U() {
      return r("IGAdsSensitiveVerticalsUtils")
        .is_pharma_or_sensitive_vertical ||
        r("IGAdsSensitiveVerticalsUtils").is_luxury_vertical
        ? !1
        : r("gkx")("21573");
    }
    function V(e) {
      return r("IGAdsSensitiveVerticalsUtils")
        .is_pharma_or_sensitive_vertical ||
        r("IGAdsSensitiveVerticalsUtils").is_luxury_vertical
        ? !1
        : e === !0
          ? r("gkx")("23676")
          : r("gkx")("21571");
    }
    function H(e) {
      return r("IGAdsSensitiveVerticalsUtils")
        .is_pharma_or_sensitive_vertical ||
        r("IGAdsSensitiveVerticalsUtils").is_luxury_vertical
        ? !1
        : e === !0
          ? r("gkx")("23678")
          : r("gkx")("21574");
    }
    function G() {
      return r("gkx")("7425") || r("gkx")("5171");
    }
    function z(e) {
      return r("IGAdsSensitiveVerticalsUtils")
        .is_pharma_or_sensitive_vertical ||
        r("IGAdsSensitiveVerticalsUtils").is_luxury_vertical
        ? !1
        : e === !0
          ? r("gkx")("23138")
          : r("gkx")("20180");
    }
    function j(e) {
      return e === !0 ? r("gkx")("6354") : r("gkx")("23571");
    }
    function K(e) {
      return e === !0 ? r("gkx")("19503") : r("gkx")("19551");
    }
    function Q(e) {
      return e == null || !o("AdsAPIAdgroupRecordUtils").isExistingPostAd(e)
        ? !1
        : K(!0);
    }
    function X(e) {
      var t = e == null ? void 0 : e.creative;
      return e == null ||
        t == null ||
        t.object_story_spec != null ||
        t.object_story_id != null ||
        t.source_instagram_media_id != null ||
        t.source_facebook_post_id != null ||
        t.object_type !== r("ApiAdObjectTypes").SHARE ||
        t.object_id == null
        ? !1
        : K(!0);
    }
    function Y(e) {
      return e == null ||
        !o("AdsAPIAdgroupRecordUtils").isExistingPostAdSingleImageOrVideo(e)
        ? !1
        : K(!0);
    }
    function J(e) {
      return e == null ||
        !o("AdsAPIAdgroupRecordUtils").isExistingPostMultiPhotoAd(e)
        ? !1
        : K(!0);
    }
    function Z() {
      return r("gkx")("19787") && r("gkx")("17644");
    }
    function ee() {
      r("gkx")("19795");
    }
    function te() {
      return Z() ? "photo_collage" : "collage";
    }
    function ne(e) {
      return J(e) ? "photo_collage" : te();
    }
    function re(e, t, n, r, o) {
      var a = e.originalFormat;
      if (a == null) return null;
      var i =
          o == null
            ? void 0
            : o.findIndex(function (t) {
                return t.original_format === e.originalFormat;
              }),
        l = 0,
        s = null,
        c = null;
      if (o != null && i != null && i !== -1) {
        var d, m, p, _;
        ((s = (d = o[i].sticky_settings) != null ? d : []),
          (c =
            (m = s) == null ||
            (m = m.find(function (e) {
              return e.key === t;
            })) == null
              ? void 0
              : m.value),
          (l =
            (p =
              (_ = c) == null ||
              (_ = _.find(function (e) {
                return e.data_source === n;
              })) == null
                ? void 0
                : _.opt_out_count) != null
              ? p
              : 0));
      }
      var f = {
          data_source: n,
          opt_out_count: r ? (l > u ? l : l + 1) : 0,
          updated_time: Date.now().toString(),
          status: r ? "OPT_OUT" : "OPT_IN",
        },
        g = {
          impression_count: 1,
          original_format: a,
          sticky_settings: [{ key: t, value: [f] }],
          feedback_impression_count: 0,
        };
      return o == null
        ? [babelHelpers.extends({}, g)]
        : i === -1
          ? [].concat(o != null ? o : [], [babelHelpers.extends({}, g)])
          : o == null
            ? void 0
            : o.map(function (e) {
                var r, o;
                if (e.original_format !== a) return e;
                var i =
                    (r = c) == null
                      ? void 0
                      : r.find(function (e) {
                          return e.data_source === n;
                        }),
                  l =
                    (o = s) == null
                      ? void 0
                      : o.findIndex(function (e) {
                          return e.key === t;
                        }),
                  u = s != null ? s : [];
                if (l == null || l === -1 || l > u.length - 1)
                  u = [].concat(u, [{ key: t, value: [f] }]);
                else {
                  var d, m;
                  u[l].value = i
                    ? (d =
                        (m = c) == null
                          ? void 0
                          : m.map(function (e) {
                              return e.data_source === n ? f : e;
                            })) != null
                      ? d
                      : []
                    : [].concat(c != null ? c : [], [f]);
                }
                return babelHelpers.extends({}, e, { sticky_settings: u });
              });
    }
    function oe(e) {
      return (
        e === void 0 && (e = !1),
        o("AdsSensitiveVerticalUtils").isAccountInSensitiveVerticals() ||
          e === !0
      );
    }
    function ae(e, t, n) {
      var r = e.originalFormat;
      if (r == null) return null;
      var o =
        t == null
          ? void 0
          : t.findIndex(function (t) {
              return t.original_format === e.originalFormat;
            });
      return t == null || o === -1
        ? null
        : t == null
          ? void 0
          : t.map(function (e) {
              var t;
              return e.original_format !== r
                ? e
                : babelHelpers.extends({}, e, {
                    feedback_impression_count:
                      ((t = e.feedback_impression_count) != null ? t : 0) + 1,
                    feedback_last_impression_timestamp: Date.now().toString(),
                    feedback_last_response_timestamp: n
                      ? Date.now().toString()
                      : e.feedback_last_response_timestamp,
                  });
            });
    }
    function ie(e, t, n, r) {
      if (e.hasValue()) {
        var o,
          a = e.getValue(),
          i = a == null ? void 0 : a.reactive_control_settings;
        return i == null ||
          (o = i.find(function (e) {
            return e.original_format === t;
          })) == null ||
          (o = o.sticky_settings) == null ||
          (o = o.find(function (e) {
            return e.key === n;
          })) == null ||
          (o = o.value) == null ||
          (o = o.find(function (e) {
            return e.data_source === r;
          })) == null
          ? void 0
          : o.status;
      }
      return null;
    }
    function le(e) {
      switch (e) {
        case "DEFAULT":
          return "DEFAULT";
        case "STICKY":
          return "STICKY";
        case "MANUAL":
          return "MANUAL";
        default:
          return null;
      }
    }
    function se(e, t) {
      var n, r;
      if (e == null || !t.isPCAUnifiedScaledAlpha) return e;
      var o =
          (n = t.adObjectsList) == null || (n = n[0]) == null
            ? void 0
            : n.adgroup,
        a =
          o == null ||
          (r = o.creative) == null ||
          (r = r.creative_sourcing_spec) == null ||
          (r = r.product_media_metadata_spec) == null
            ? void 0
            : r.multi_share_end_card;
      if (a == null) return e;
      var i = e.applyAdgroupMutationsForPage;
      return babelHelpers.extends({}, e, {
        applyAdgroupMutationsForPage: function (t, n, r) {
          var e = i != null ? i(t, n, r) : t;
          return e.setIn(
            [
              "creative",
              "creative_sourcing_spec",
              "product_media_metadata_spec",
              "multi_share_end_card",
            ],
            a,
          );
        },
      });
    }
    function ue(e, t, n) {
      var r = [];
      return (
        o(
          "AdsMetadataConnectedSourcesUtils",
        ).isEligibleForCESCreativeSetupWithSE(t, n, e) && r.push("site_links"),
        o(
          "AdsMetadataConnectedSourcesUtils",
        ).isEligibleForCESCreativeSetupWithPE(t, n, e) && r.push("catalog"),
        o(
          "AdsMetadataConnectedSourcesUtils",
        ).isEligibleForCESCreativeSetupWithAppInfo(t, n, e) &&
          r.push("app_information"),
        r
      );
    }
    function ce() {
      return r("gkx")("23611");
    }
    function de(e, t) {
      return !(
        e == null ||
        t == null ||
        !o("AdsCreativeFlexAssetUtils").hasMultiMediaAssetsOfSource(
          e,
          "multi_media",
        ) ||
        !o("AdsAdgroupCreativeAssetGroupsSpecOriginMutators").hasAnyOrigins(t, [
          "flexible_format",
          "creative_asset_groups",
        ])
      );
    }
    ((l.COLLAGE_MIN_IMAGE_COUNT = e),
      (l.MAXIUM_IMPRESSION_COUNT_IN_RECORD = s),
      (l.SA_SINGLE_SE_SUPPORTED_FORMATS = c),
      (l.SA_SINGLE_PE_SUPPORTED_FORMATS = d),
      (l.SA_SINGLE_APP_INFO_SUPPORTED_FORMATS = m),
      (l.SIMPLIFIED_FORMATS = p),
      (l.isEmptyCreative = _),
      (l.isIneligibleForFDODueToMMU = f),
      (l.shouldShowSERevamp = g),
      (l.shouldRemovePEAPlusC = h),
      (l.getReactiveControlUXModel = y),
      (l.isNonPCAUEligibleForModalPreview = v),
      (l.passGKForModalUX = S),
      (l.passGKForPEClawback = R),
      (l.passGKForWHAdexIntegration = L),
      (l.isWebsiteHighlightAdopted = E),
      (l.passGKForCombinedFeaturedOfferings = k),
      (l.isWHAdoptedWithMedia = I),
      (l.shouldShowWHExperience = T),
      (l.isSiteLinksDataConsented = D),
      (l.countWebsiteMediaImageUrl = x),
      (l.isSiteLinksOrWHConsented = $),
      (l.passQEForReactiveControlPESE = P),
      (l.passSAPGDGating = N),
      (l.passDAPGDGating = M),
      (l.isEligibleForReactiveControlPESE = w),
      (l.isEligibleForReactiveControlPESEOrAppInfo = A),
      (l.isFlexibleFormatEligibleForSingleMedia = F),
      (l.isFlexibleFormatEligibleForRichFormat = O),
      (l.passSACarouselFFQE = B),
      (l.isMobileFeedPlacementTargeted = W),
      (l.passFormatSelectorMergeSAPrePhase1 = q),
      (l.passFormatSelectorMergeDAPrePhase1 = U),
      (l.passFormatSelectorMergeSAPhase1 = V),
      (l.passFormatSelectorMergeDAPhase1 = H),
      (l.isInC2VBlocklist = G),
      (l.passGKForC2V = z),
      (l.passGKForCollage = j),
      (l.passGKForEPACollage = K),
      (l.isEligibleForEPAFDOSurface = Q),
      (l.isEPAFlowAwaitingPostSelection = X),
      (l.isEligibleForEPASingleMediaSurface = Y),
      (l.isEligibleForEPAMultiMediaSurface = J),
      (l.passGKForCarouselToCollage = Z),
      (l.logCarouselToCollageExposure = ee),
      (l.getCollageFtsFormat = te),
      (l.getCollageFtsFormatForAdgroup = ne),
      (l.getUpdatedReactiveControlSettingsForSticky = re),
      (l.shouldBlockReactiveControlDefaultOn = oe),
      (l.getUpdatedReactiveControlSettingsForFeedbackSurvey = ae),
      (l.getStickyStatusFromUserSettingsLoadObject = ie),
      (l.coerceFeatureActionToSourceAction = le),
      (l.applyProfileCardMutationToPreviewConfig = se),
      (l.getEligibleDataSources = ue),
      (l.passGKForFDODebugger = ce),
      (l.isAutoConvertedFfToMmuAd = de));
  },
  98,
);
