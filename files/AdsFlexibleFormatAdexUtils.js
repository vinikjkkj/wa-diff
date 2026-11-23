__d(
  "AdsFlexibleFormatAdexUtils",
  [
    "AdCampaignDestination",
    "AdsAPIAdgroupRecordUtils",
    "AdsAPICampaignRecordUtils",
    "AdsAPIDevicePlatform",
    "AdsAPIObjectives",
    "AdsAdgroupCreativeAssetGroupsSpecOriginMutators",
    "AdsAssetFeedUtils",
    "AdsAutomaticFlowUtils",
    "AdsChildAttachmentsUtils",
    "AdsCreativeFlexAssetUtils",
    "AdsDynamicAdsFormatUtils",
    "AdsDynamicAdsUtils",
    "AdsFlexibleFormatCollageTemplateFitUtils",
    "AdsFlexibleFormatDAUtils",
    "AdsFlexibleFormatFDOGatingUtils",
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
    "PERelevanceUtils",
    "gkx",
    "justknobx",
    "observeRuntimeType",
    "qex",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 3,
      s = 10,
      u = 10,
      c = ["carousel", "collage", "sa_collection", "video_slideshow"],
      d = ["carousel", "collage", "sa_collection"];
    function m(e, t) {
      return t != null &&
        ((!o("AdsObjectTypeUtils").isDynamicProductAd(t) &&
          o("AdsAPIAdgroupRecordUtils").isExistingPostAd(t)) ||
          o("AdsAPIAdgroupRecordUtils").isExistingPostMultiPhotoAd(t))
        ? e.filter(function (e) {
            return e !== "collage";
          })
        : _e()
          ? e.filter(function (e) {
              return e !== "collage";
            })
          : fe(!0)
            ? [].concat(e)
            : e.filter(function (e) {
                return e !== "collage";
              });
    }
    var p = ["carousel", "video_slideshow"],
      _ = ["simplified_format", "simplified_format_v2"];
    function f(e, t) {
      return e.flatMap(function (e) {
        try {
          var n,
            r = t.adObjectsList.find(function (t) {
              return t.adgroup.id === e;
            });
          return [
            {
              adAccountID: String(
                (n = r == null ? void 0 : r.adgroup.account_id) != null
                  ? n
                  : t.account.account_id,
              ),
              adgroupID: String(e),
              campaignGroupID:
                (r == null ? void 0 : r.campaignGroup.id) == null
                  ? null
                  : String(r.campaignGroup.id),
              campaignID:
                (r == null ? void 0 : r.campaign.id) == null
                  ? null
                  : String(r.campaign.id),
            },
          ];
        } catch (e) {
          return [];
        }
      });
    }
    function g(e) {
      var t = e.creative;
      return t == null || Object.keys(t).length === 0;
    }
    function h(e) {
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
    function y(e, t) {
      return h(t) ? !1 : r("gkx")("12020") || O(e) || ve(t);
    }
    function C(e, t, n) {
      return h(n) ? !1 : O(t) || ve(n);
    }
    function b(e, t, n, a) {
      return o("AdsPCAUnifiedFormatEligibilityUtils").isEligiblePCAUnifiedL1(
        t,
        n,
      ) || R(n, a)
        ? "modal_format_preview"
        : o(
              "AdsMetadataConnectedSourcesUtils",
            ).isEligibleForCESCreativeSetupWithAppInfo(e, t, n) ||
            t.objective === r("AdsAPIObjectives").APP_INSTALLS
          ? "simplified_format"
          : v(n);
    }
    function v(e) {
      return o("AdsDynamicAdsUtils").isDynamicAd(e) &&
        o(
          "DAFlexibleFormatUtils",
        ).isAdgroupEligibleForDACarouselIntroCardRevamp(e, !1)
        ? "simplified_format"
        : "format";
    }
    var S = [
      "sa_single_image",
      "sa_carousel",
      "sa_pac_carousel",
      "da_carousel",
      "epa_single_media",
      "epa_multi_medias",
    ];
    function R(e, t) {
      if (r("justknobx")._("695") || !S.includes(t)) return !1;
      var n = !o("AdsDynamicAdsUtils").isDynamicAd(e),
        a =
          o("AdsDynamicAdsUtils").isDynamicAd(e) &&
          o("AdsDynamicAdsFormatUtils").getIsDynamicAdCarouselMediaFormat(e);
      return !n && !a
        ? !1
        : o("AdsSensitiveVerticalUtils").isAccountInSensitiveVerticals()
          ? !0
          : L();
    }
    function L(e) {
      return e === !0 ? r("gkx")("25281") : r("gkx")("13894");
    }
    function E(e) {
      return e === !0 ? r("gkx")("8565") : r("gkx")("8668");
    }
    function k(e) {
      return r("IGAdsSensitiveVerticalsUtils")
        .is_pharma_or_sensitive_vertical ||
        r("IGAdsSensitiveVerticalsUtils").is_luxury_vertical
        ? !1
        : e === !0
          ? r("gkx")("16555")
          : r("gkx")("16556");
    }
    function I(e) {
      var t;
      return (
        ((t = e.creative) == null ||
        (t = t.creative_sourcing_spec) == null ||
        (t = t.website_media_spec) == null
          ? void 0
          : t.enroll_status) === "OPT_IN"
      );
    }
    function T(e) {
      return !0;
    }
    function D(e) {
      var t;
      if (e == null || !o("AdsAPIAdgroupRecordUtils").isExistingPostAd(e))
        return !0;
      var n = (t = e.creative) == null ? void 0 : t.object_type,
        a =
          n === r("ApiAdObjectTypes").PHOTO ||
          n === r("ApiAdObjectTypes").VIDEO;
      return a;
    }
    function x(e) {
      return e === !0 ? r("gkx")("21512") : r("gkx")("22841");
    }
    function $(e) {
      var t,
        n,
        r,
        o,
        a =
          e == null || (t = e.creative) == null
            ? void 0
            : t.creative_sourcing_spec,
        i = a == null ? void 0 : a.site_links_spec,
        l = Array.isArray(i)
          ? i.length
          : (n = i == null ? void 0 : i.size) != null
            ? n
            : 0;
      return (
        e != null &&
        (a == null || (r = a.site_links_data_consented) == null
          ? void 0
          : r.enroll_status) !== "OPT_OUT" &&
        (l > 0 ||
          (a == null || (o = a.dynamic_site_links_spec) == null
            ? void 0
            : o.enroll_status) === "OPT_IN")
      );
    }
    function P(e) {
      return e == null || !D(e) ? !1 : k(!0) && I(e) && F(e) > 0;
    }
    function N(e) {
      return e == null || !T(e) ? !1 : k(!0) && I(e) && F(e) > 0;
    }
    function M(e, t) {
      var n = P(e),
        r = A(e),
        a = o(
          "AdsFlexibleFormatFDOGatingUtils",
        ).isFDOConsentBasedSourceLabelEnabled(t === !0 || !n || !r),
        i = [];
      return (
        n && i.push("website_highlights"),
        r && (!n || a) && i.push("site_links"),
        { isConsentBasedSourceUIEnabled: a, sources: i }
      );
    }
    function w(e, t) {
      return D(e)
        ? P(e)
          ? !0
          : x(!0) &&
            !o(
              "AdsFlexibleFormatFDOGatingUtils",
            ).isFDOConsentBasedSourceLabelEnabled(t)
        : !1;
    }
    function A(e) {
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
    function F(e) {
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
    function O(e) {
      return r("gkx")("12123")
        ? (o("AdsSensitiveVerticalUtils").isAccountInSensitiveVerticals(), !0)
        : !1;
    }
    function B() {
      return r("IGAdsSensitiveVerticalsUtils")
        .is_pharma_or_sensitive_vertical ||
        r("IGAdsSensitiveVerticalsUtils").is_luxury_vertical
        ? !1
        : r("qex")._("2525") === !0 || (r("gkx")("12123") && r("gkx")("10159"));
    }
    function W() {
      return !(
        r("IGAdsSensitiveVerticalsUtils").is_pharma_or_sensitive_vertical ||
        r("IGAdsSensitiveVerticalsUtils").is_luxury_vertical
      );
    }
    function q(e, t, n, a, i) {
      return U(e, n) ||
        (i !== !0 &&
          !o(
            "AdsMetadataConnectedSourcesUtils",
          ).isEligibleForCESCreativeSetupWithPE(e, t, n) &&
          !o(
            "AdsMetadataConnectedSourcesUtils",
          ).isEligibleForCESCreativeSetupWithSE(e, t, n) &&
          !H(e, t, n) &&
          !G(e, t, n)) ||
        h(n) ||
        (e.destination_type === r("AdCampaignDestination").WHATSAPP &&
          o("ClickToWhatsAppFeatureGating").isLegacyCTWAPETargetingEligible() &&
          !r("gkx")("8700")) ||
        (o("AdsUEditorMessagingDestinationUtils").isCTM(e.destination_type) &&
          o("AdsMetadataConnectedSourcesUtils").isEligibleAdAccount() &&
          !r("gkx")("20754"))
        ? !1
        : O(a);
    }
    function U(e, t) {
      return r("justknobx")._("6898")
        ? o("AdsAPICampaignRecordUtils").isScheduledLiveVideoAd(e) ||
            (t != null &&
              o("AdsAPIAdgroupRecordUtils").isScheduledLiveVideoAd(t))
        : !1;
    }
    function V(e, t) {
      return o("AdsPCAUnifiedFormatEligibilityUtils").isEligiblePCAUnifiedL1(
        e,
        t,
      );
    }
    function H(e, t, n) {
      return (
        !U(e, n) &&
        !V(t, n) &&
        o("AdsAutomaticFlowUtils").isStaticSingleImageOrVideoFormat(n) &&
        o(
          "AdsMetadataConnectedSourcesUtils",
        ).isEligibleForCatalogByCampaignAndAdgroup(e, t, n)
      );
    }
    function G(e, t, n) {
      return (
        !U(e, n) &&
        !V(t, n) &&
        o("AdsAutomaticFlowUtils").isStaticSingleImageOrVideoFormat(n) &&
        (o(
          "AdsMetadataConnectedSourcesUtils",
        ).isEligibleForSiteExtensionsByCampaignAndAdgroup(e, t, n) ||
          o(
            "AdsMetadataConnectedSourcesUtils",
          ).isEligibleForWebsiteMediaByCampaignAndAdgroup(e, t, n))
      );
    }
    function z(e, t, n, r) {
      return (
        !U(e, n) &&
        !V(t, n) &&
        o("AdsAutomaticFlowUtils").isStaticSingleImageOrVideoFormat(n) &&
        o(
          "AdsMetadataConnectedSourcesUtils",
        ).isEligibleForAppInformationByCampaignAndAdgroup(e, t, n) &&
        o("AdsMetadataConnectedSourcesUtils").isFFForAppInstallEnabled(r === !0)
      );
    }
    function j(e, t, n, o, a) {
      return (
        r("observeRuntimeType")(
          o,
          "AdsFlexibleFormatAdexUtils.hasFDOEligibleDataSourceForSingleMedia.mmuCarousel",
        ),
        U(e, n)
          ? !1
          : H(e, t, n) ||
            G(e, t, n) ||
            z(e, t, n, a) ||
            (!V(t, n) && Y(n, o, !0))
      );
    }
    function K(e, t, n, a, i, l) {
      return U(e, n) ||
        (l !== !0 &&
          !o(
            "AdsMetadataConnectedSourcesUtils",
          ).isEligibleForCESCreativeSetupWithPEOrSEOrAppInfo(e, t, n) &&
          !j(e, t, n, i, a)) ||
        h(n) ||
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
          : O(a);
    }
    function Q(e) {
      return e === !0 ? r("gkx")("27029") : r("gkx")("27030");
    }
    function X() {
      return r("gkx")("26887");
    }
    function Y(e, t, n) {
      return e == null ||
        t == null ||
        r("IGAdsSensitiveVerticalsUtils")
          .is_pharma_or_sensitive_vertical_by_ad ||
        r("IGAdsSensitiveVerticalsUtils")
          .is_pharma_or_sensitive_vertical_by_campaign_group ||
        r("IGAdsSensitiveVerticalsUtils").is_pharma_or_sensitive_vertical ||
        r("IGAdsSensitiveVerticalsUtils").is_luxury_vertical
        ? !1
        : !h(e) && Q(n);
    }
    function J(e, t, n, r, a) {
      var i;
      return U(e, n)
        ? !1
        : (!g(n) && K(e, t, n, void 0, a)) ||
            ((!g(n) ||
              ((i = n.creative) == null ||
              (i = i.creative_sourcing_spec) == null
                ? void 0
                : i.associated_product_set_id) != null) &&
              o("AdsPCAUnifiedFormatEligibilityUtils").isEligiblePCAUnifiedL1(
                t,
                n,
              )) ||
            (!g(n) &&
              o("AdsAPIAdgroupRecordUtils").isExistingPostAd(n) &&
              !be(n) &&
              (me(n, r) === "multi_photo" ||
                o(
                  "AdsMetadataConnectedSourcesUtils",
                ).isEligibleForSiteExtensionsByCampaignAndAdgroup(e, t, n) ||
                o(
                  "AdsMetadataConnectedSourcesUtils",
                ).isEligibleForCatalogByCampaignAndAdgroup(e, t, n) ||
                o(
                  "AdsMetadataConnectedSourcesUtils",
                ).isEligibleForWebsiteMediaByCampaignAndAdgroup(e, t, n)) &&
              De());
    }
    function Z(e, t, n) {
      return g(e) ||
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
            ? o("AdsChildAttachmentsUtils").isCarouseAdWithAtLeastXMedia(
                e,
                n,
                2,
              )
              ? ee()
              : !1
            : !o("AdsObjectTypeUtils").isDynamicProductAd(e) &&
                o("AdsAssetFeedUtils").hasPACCarouselFormat(e)
              ? !te(t) ||
                !o(
                  "AdsFlexibleFormatPacCarouselUtils",
                ).isPacCarouselWithAtLeastXMedia(e, 2)
                ? !1
                : o("AdsFlexibleFormatPacCarouselUtils").passGKForPACCarousel()
              : !1;
    }
    function ee() {
      return r("gkx")("12224")
        ? (o("AdsSensitiveVerticalUtils").isAccountInSensitiveVerticals(), !0)
        : !1;
    }
    function te(e) {
      var t = e.targeting.facebook_positions,
        n = e.targeting.instagram_positions,
        o = e.targeting.device_platforms,
        a =
          (t == null ? void 0 : t.includes("feed")) === !0 ||
          (n == null ? void 0 : n.includes("stream")) === !0,
        i = o == null || o.includes(r("AdsAPIDevicePlatform").MOBILE);
      return a && i;
    }
    function ne() {
      return r("IGAdsSensitiveVerticalsUtils")
        .is_pharma_or_sensitive_vertical ||
        r("IGAdsSensitiveVerticalsUtils").is_luxury_vertical
        ? !1
        : r("gkx")("21570");
    }
    function re() {
      return r("IGAdsSensitiveVerticalsUtils")
        .is_pharma_or_sensitive_vertical ||
        r("IGAdsSensitiveVerticalsUtils").is_luxury_vertical
        ? !1
        : r("gkx")("21573");
    }
    function oe(e) {
      return r("IGAdsSensitiveVerticalsUtils")
        .is_pharma_or_sensitive_vertical ||
        r("IGAdsSensitiveVerticalsUtils").is_luxury_vertical
        ? !1
        : e === !0
          ? r("gkx")("23676")
          : r("gkx")("21571");
    }
    function ae(e) {
      return r("IGAdsSensitiveVerticalsUtils")
        .is_pharma_or_sensitive_vertical ||
        r("IGAdsSensitiveVerticalsUtils").is_luxury_vertical
        ? !1
        : e === !0
          ? r("gkx")("23678")
          : r("gkx")("21574");
    }
    function ie() {
      return r("gkx")("7425") || r("gkx")("5171");
    }
    function le(e) {
      return r("IGAdsSensitiveVerticalsUtils")
        .is_pharma_or_sensitive_vertical ||
        r("IGAdsSensitiveVerticalsUtils").is_luxury_vertical
        ? !1
        : e === !0
          ? r("gkx")("23138")
          : r("gkx")("20180");
    }
    function se() {
      return r("gkx")("23571");
    }
    function ue(e) {
      return pe() ? !1 : ce(e);
    }
    function ce(e) {
      return e === !0 ? r("gkx")("19503") : r("gkx")("19551");
    }
    var de = 2;
    function me(e, t) {
      return ce(!0)
        ? !o("AdsAPIAdgroupRecordUtils").isExistingPostWithFacebookPost(e) ||
          o("AdsAPIAdgroupRecordUtils").getInstagramSourceMediaID(e) != null
          ? "not_multi_photo"
          : t == null
            ? "unresolved"
            : t >= de
              ? "multi_photo"
              : "not_multi_photo"
        : o("AdsAPIAdgroupRecordUtils").isExistingPostMultiPhotoAd(e)
          ? "multi_photo"
          : "not_multi_photo";
    }
    function pe() {
      return (
        o("AdsSensitiveVerticalUtils").isAdAccountOnBig6AgencyBlocklist() ||
        o("AdsSensitiveVerticalUtils").isAccountInSensitiveVerticals()
      );
    }
    function _e() {
      return (
        o("AdsSensitiveVerticalUtils").isAdAccountOnBig6AgencyBlocklist() ||
        o("AdsSensitiveVerticalUtils").isAccountInSensitiveVerticals()
      );
    }
    function fe(e) {
      return e === !0 ? r("gkx")("1642") : r("gkx")("2450");
    }
    var ge = e - 1;
    function he(t) {
      return t != null &&
        o("AdsAutomaticFlowUtils").isStaticSingleVideoFormat(t)
        ? e
        : ge;
    }
    var ye = "site_links";
    function Ce(e, t) {
      var n, r;
      if (e == null) return [];
      var a = !o("AdsAutomaticFlowUtils").isStaticSingleVideoFormat(e),
        i = [],
        l = (n = e.creative) == null ? void 0 : n.creative_sourcing_spec;
      (l == null || (r = l.catalog) == null ? void 0 : r.enroll_status) ===
        "OPT_IN" &&
        ((l == null ? void 0 : l.associated_product_set_id) != null ||
          o("PERelevanceUtils").hasLLMRelevanceStrategySelected(e)) &&
        o("AdsFlexibleFormatCollageTemplateFitUtils").canComposeCollagePreview({
          useCase: "catalog",
          hasHero: a,
          heroAspectRatio: t,
          candidateCount: null,
        }) &&
        i.push("catalog");
      var s = F(e);
      return (
        P(e) &&
          s >= he(e) &&
          o(
            "AdsFlexibleFormatCollageTemplateFitUtils",
          ).canComposeCollagePreview({
            useCase: "website_highlight",
            hasHero: a,
            heroAspectRatio: t,
            candidateCount: s,
          }) &&
          i.push("site_links"),
        i
      );
    }
    function be(e) {
      var t;
      if (e == null) return !1;
      var n =
        (t = o("DeepRecordUtils").maybeToPlainObject(
          e.creative_asset_groups_spec,
        )) == null
          ? void 0
          : t.groups;
      if (n == null) return !1;
      var r = 0;
      for (var a of n) {
        var i, l;
        if (
          ((r +=
            (i = a == null || (l = a.posts) == null ? void 0 : l.length) != null
              ? i
              : 0),
          r > 1)
        )
          return !0;
      }
      return !1;
    }
    function ve(e) {
      return e == null ||
        !o("AdsAPIAdgroupRecordUtils").isExistingPostAd(e) ||
        be(e)
        ? !1
        : ue(!0);
    }
    function Se(e) {
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
        : ue(!0);
    }
    function Re(e, t) {
      return (
        !o("AdsObjectTypeUtils").isDynamicProductAd(e) &&
        o("AdsAPIAdgroupRecordUtils").isExistingPostAd(e) &&
        me(e, t) === "not_multi_photo"
      );
    }
    function Le(e, t) {
      return e == null || !Re(e, t) || be(e) ? !1 : ue(!0);
    }
    function Ee(e, t) {
      return e == null || me(e, t) !== "multi_photo" || be(e) ? !1 : ue(!0);
    }
    function ke(e) {
      return (
        e === "sa_single_image" ||
        e === "epa_single_media" ||
        e === "epa_multi_medias"
      );
    }
    function Ie() {
      return r("gkx")("19787") && r("gkx")("17644");
    }
    function Te() {
      r("gkx")("19795");
    }
    function De() {
      return ue();
    }
    function xe() {
      return Ie() ? "photo_collage" : "collage";
    }
    function $e(e) {
      return e == null ||
        (!o("AdsObjectTypeUtils").isDynamicProductAd(e) &&
          (o("AdsChildAttachmentsUtils").isStaticCarouselAd(e) ||
            (o("AdsAssetFeedUtils").hasPACCarouselFormat(e) &&
              o("AdsFlexibleFormatPacCarouselUtils").passGKForPACCarousel(
                !0,
              )))) ||
        Le(e) ||
        Ee(e)
        ? !1
        : o("AdsAutomaticFlowUtils").isStaticSingleImageOrVideoFormat(e) &&
            !o("AdsAPIAdgroupRecordUtils").isFlexibleFormatAd(e);
    }
    function Pe(e, t) {
      return e != null && me(e, t) === "multi_photo" && ce(!0)
        ? "photo_collage"
        : xe();
    }
    function Ne(e, t, n, r, o) {
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
          updated_time: String(Math.floor(Date.now() / 1e3)),
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
    function Me(e) {
      return (
        e === void 0 && (e = !1),
        o("AdsSensitiveVerticalUtils").isAccountInSensitiveVerticals() ||
          e === !0
      );
    }
    function we(e, t, n) {
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
    function Ae(e, t, n, r) {
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
    function Fe(e) {
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
    function Oe(e, t) {
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
    function Be(e, t, n) {
      if (U(t, e)) return [];
      var r = [],
        a = ve(e);
      return (
        (o(
          "AdsMetadataConnectedSourcesUtils",
        ).isEligibleForCESCreativeSetupWithSE(t, n, e) ||
          o(
            "AdsMetadataConnectedSourcesUtils",
          ).isEligibleForCESCreativeSetupWithWebsiteMedia(t, n, e) ||
          G(t, n, e) ||
          a) &&
          r.push("site_links"),
        (o(
          "AdsMetadataConnectedSourcesUtils",
        ).isEligibleForCESCreativeSetupWithPE(t, n, e) ||
          H(t, n, e) ||
          a) &&
          r.push("catalog"),
        (o(
          "AdsMetadataConnectedSourcesUtils",
        ).isEligibleForCESCreativeSetupWithAppInfo(t, n, e) ||
          z(t, n, e, !0)) &&
          r.push("app_information"),
        r
      );
    }
    function We() {
      return r("gkx")("23611");
    }
    function qe(e, t) {
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
      (l.withSASingleCollageGate = m),
      (l.SA_SINGLE_APP_INFO_SUPPORTED_FORMATS = p),
      (l.SIMPLIFIED_FORMATS = _),
      (l.getSEFormatConsentAdgroupParentIDs = f),
      (l.isIneligibleForFDODueToMMU = h),
      (l.shouldShowSERevamp = y),
      (l.shouldRemovePEAPlusC = C),
      (l.getReactiveControlUXModel = b),
      (l.passGKForModalUX = L),
      (l.passGKForPEClawback = E),
      (l.passGKForWHAdexIntegration = k),
      (l.isWebsiteHighlightAdopted = I),
      (l.isWHAllowedForAdShape = T),
      (l.shouldShowWHForAdShape = D),
      (l.passGKForCombinedFeaturedOfferings = x),
      (l.hasSiteLinksDataForFDO = $),
      (l.isWHAdoptedWithMedia = P),
      (l.isWHConsentedWithMedia = N),
      (l.getFDOSiteLinksPreviewDecision = M),
      (l.shouldShowWHExperience = w),
      (l.isSiteLinksDataConsented = A),
      (l.countWebsiteMediaImageUrl = F),
      (l.passQEForReactiveControlPESE = O),
      (l.passSAPGDGating = B),
      (l.passDAPGDGating = W),
      (l.isEligibleForReactiveControlPESE = q),
      (l.isScheduledLiveVideoAdForFDO = U),
      (l.isPCAUnifiedForFDO = V),
      (l.isFDOCatalogSourceEligible = H),
      (l.isFDOSiteLinksSourceEligible = G),
      (l.isFDOAppInformationSourceEligible = z),
      (l.hasFDOEligibleDataSourceForSingleMedia = j),
      (l.isEligibleForReactiveControlPESEOrAppInfo = K),
      (l.passGKForMMUToCarousel = Q),
      (l.passGKForMultiMediaDAIntroCard = X),
      (l.isEligibleForMMUToCarousel = Y),
      (l.isFlexibleFormatEligibleForSingleMedia = J),
      (l.isFlexibleFormatEligibleForRichFormat = Z),
      (l.passSACarouselFFQE = ee),
      (l.passFormatSelectorMergeSAPrePhase1 = ne),
      (l.passFormatSelectorMergeDAPrePhase1 = re),
      (l.passFormatSelectorMergeSAPhase1 = oe),
      (l.passFormatSelectorMergeDAPhase1 = ae),
      (l.isInC2VBlocklist = ie),
      (l.passGKForC2V = le),
      (l.passGKForCollage = se),
      (l.passEPACollageGKOnly = ce),
      (l.EPA_MULTI_PHOTO_MIN_PHOTO_COUNT = de),
      (l.getExistingPostPhotoShape = me),
      (l.isExcludedFromEPACollageRollout = pe),
      (l.isExcludedFromSASingleCollageRollout = _e),
      (l.passGKForSASingleCollage = fe),
      (l.MIXED_COLLAGE_STICKY_DATA_SOURCE = ye),
      (l.getEligibleMixedCollageDataSources = Ce),
      (l.isMultiPostExistingPostAd = be),
      (l.isEligibleForEPAFDOSurface = ve),
      (l.isEPAFlowAwaitingPostSelection = Se),
      (l.isEligibleForEPASingleMediaSurface = Le),
      (l.isEligibleForEPAMultiMediaSurface = Ee),
      (l.usesPECarouselIntroCardSplit = ke),
      (l.logCarouselToCollageExposure = Te),
      (l.isSASingleCollageSurface = $e),
      (l.getCollageFtsFormatForAdgroup = Pe),
      (l.getUpdatedReactiveControlSettingsForSticky = Ne),
      (l.shouldBlockReactiveControlDefaultOn = Me),
      (l.getUpdatedReactiveControlSettingsForFeedbackSurvey = we),
      (l.getStickyStatusFromUserSettingsLoadObject = Ae),
      (l.coerceFeatureActionToSourceAction = Fe),
      (l.applyProfileCardMutationToPreviewConfig = Oe),
      (l.getEligibleDataSources = Be),
      (l.passGKForFDODebugger = We),
      (l.isAutoConvertedFfToMmuAd = qe));
  },
  98,
);
