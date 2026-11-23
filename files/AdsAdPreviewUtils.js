__d(
  "AdsAdPreviewUtils",
  [
    "errorCode",
    "errorDesc",
    "fbt",
    "AdCampaignDestination",
    "AdImageSpecs",
    "AdPreview.react",
    "AdsAPIAdgroupRecordUtils",
    "AdsAPIObjectives",
    "AdsAdgroupMessageMarketingButtonBlockerUtils",
    "AdsAdgroupMessageMarketingValidationUtils",
    "AdsAdgroupTypeUtils",
    "AdsAdgroupUtils",
    "AdsAppUtils",
    "AdsArLinkUtils",
    "AdsAssetFeedUtils",
    "AdsAutomaticFlowUtils",
    "AdsCallToActionTypesUtils",
    "AdsCampaignLiveVideoAdsUtils",
    "AdsCanvasAdUtils",
    "AdsChildAttachmentsUtils",
    "AdsCollectionsAdUtils",
    "AdsDLOConstantUtils",
    "AdsDynamicAdsFormatUtils",
    "AdsDynamicAdsUtils",
    "AdsError",
    "AdsGetTextWidth",
    "AdsInstagramSearchAdsUtils",
    "AdsInstagramSearchGridAdPreviewUtils",
    "AdsInstreamCapabilityUtils",
    "AdsInstreamVideoErrorUtils",
    "AdsInstreamVideoLengthUtil",
    "AdsLanguageDialectConverter",
    "AdsLocalAwarenessUtils",
    "AdsMessengerDynamicAdsUtils",
    "AdsMessengerMarketingMessagesCatalogPreviewUtils",
    "AdsMessengerVisualEditorCustomerActionType",
    "AdsPageLikeUtils",
    "AdsPlacementAssetCustomizationTypes",
    "AdsPlacementAssetEligibilityUtils",
    "AdsPlacementAssetPluginUtils",
    "AdsPlacementAssetUtils",
    "AdsPlacementPluginList",
    "AdsPreviewsPlugins",
    "AdsPromotedObjectTypes",
    "AdsSphericalPhotoErrorUtils",
    "AdsThreadsCarouselVideoStoreUtils",
    "AdsUEditorAdgroupMessageMarketingLiquidityUtils",
    "AdsUEditorMessagingDestinationUtils",
    "AdsUEditorUnifiedCreationAwarenessUtils",
    "AdsWebsiteAdUtils",
    "AdsWhatsappDynamicAdsUtils",
    "MessageMarketingIntegrityValidationCallsites",
    "ODS",
    "WAMOLabelStrings",
    "WAMOStatusAdsManagerUtils",
    "WAMOStatusMediaValidationUtils",
    "ads-lib-urllib",
    "adsGetCarouselCardFormatsForPreviewFormat",
    "adsGetMediaFormatByAssetGroup",
    "adsInteractivePollHasFbFeedVideoPollSpec",
    "adsPreviewGetPositionFromFormat",
    "getMessageMarketingIntegrityValidationResults",
    "gkx",
    "immutable",
    "isEmpty",
    "isTruthy",
    "react",
    "vulture",
  ],
  function (t, n, r, o, a, i, l, s, u, c) {
    "use strict";
    var e,
      d,
      m,
      p = m || (m = o("react")),
      _ = new Set([
        "USER_ENROLLED_NON_DCO",
        "DISABLED",
        "USER_ENROLLED_AUTOFLOW",
      ]);
    function f(e, t, n, a, i, l) {
      var s,
        u = [];
      o("AdsDynamicAdsUtils").isDynamicAd(e) &&
        !o("WAMOStatusAdsManagerUtils").isAdAccountEligibleForDPACreation() &&
        u.push(dt());
      var c = a == null ? void 0 : a.catalogVertical;
      if (
        (((s = e.creative) == null ? void 0 : s.product_set_id) != null &&
          o("WAMOStatusAdsManagerUtils").isAdAccountEligibleForDPACreation() &&
          c != null &&
          !o(
            "WAMOStatusAdsManagerUtils",
          ).isCatalogVerticalSupportedForDPACreation(c) &&
          u.push(mt()),
        o("AdsCollectionsAdUtils").isCollectionsAd(e.creative) && u.push(st()),
        n != null &&
          !o("AdsUEditorMessagingDestinationUtils").destinationIncludesWhatsApp(
            r("AdCampaignDestination")[n],
          ) &&
          u.push(i === !0 ? bt() : Ct()),
        !l && Oe(e, t))
      ) {
        var d = o("AdsDynamicAdsUtils").isDynamicAd(e);
        if (
          d &&
          (a == null ? void 0 : a.objective) ===
            r("AdsAPIObjectives").OUTCOME_TRAFFIC
        )
          u.push(yt());
        else {
          var m,
            p =
              (m = a == null ? void 0 : a.conversionLocations) != null
                ? m
                : a == null
                  ? void 0
                  : a.promotedObjectType,
            _ = !(
              d ||
              ((a == null ? void 0 : a.objective) ===
                r("AdsAPIObjectives").OUTCOME_ENGAGEMENT &&
                (p === r("AdsPromotedObjectTypes").WEBSITE ||
                  p === r("AdsPromotedObjectTypes").PIXEL))
            );
          u.push(gt(_));
        }
      }
      return u;
    }
    function g(e, t, n, a, i, l, s, u, c, d) {
      var m,
        p = [];
      if (!o("WAMOStatusAdsManagerUtils").isAdAccountEligibleForWAMOStatus())
        return p;
      d != null &&
        p.push(
          r("AdsError").createError(
            2016099,
            d,
            r("AdPreview.react").PREVIEW_MESSAGE_FIELD_NAME,
          ),
        );
      var _ = o(
        "AdsUEditorUnifiedCreationAwarenessUtils",
      ).getSelectedMessagingType(t);
      (o("AdsSphericalPhotoErrorUtils").isAnySphericalPhotoAd(e, n) &&
        p.push(nt(i)),
        Ae(e) &&
          (o(
            "WAMOStatusAdsManagerUtils",
          ).isAdAccountEligibleForCarouselExpansion()
            ? Fe(e) && p.push(lt())
            : p.push(at())),
        o(
          "AdsAPIAdgroupRecordUtils",
        ).isExistingPostMultiPhotoAdsOrPublishedStatus(e) &&
          !o(
            "WAMOStatusAdsManagerUtils",
          ).isAdAccountEligibleForCarouselExpansion() &&
          p.push(it()),
        o("AdsAPIAdgroupRecordUtils").isFlexibleFormatAdOrCreativeAssetGroup(
          e,
        ) && p.push(ut()));
      var g =
          (m = u == null ? void 0 : u.conversionLocations) != null
            ? m
            : u == null
              ? void 0
              : u.promotedObjectType,
        y =
          g === r("AdsPromotedObjectTypes").MOBILE_APP &&
          r("AdsAppUtils").isAppEngagementObjective(
            u == null ? void 0 : u.objective,
            g,
          ) &&
          !o("AdsDynamicAdsUtils").isDynamicAd(e) &&
          o("AdsCanvasAdUtils").isCanvasAd(e) &&
          r("gkx")("25014");
      return (
        o("WAMOStatusAdsManagerUtils").isAdAccountEligibleForCTWEBExpansion() &&
          p.push.apply(p, f(e, t, _, u, c, y)),
        y && p.push(ht()),
        Be(e) && p.push(pt()),
        o("AdsAutomaticFlowUtils").isStaticSingleImageOrVideoFormat(e) &&
          p.push.apply(p, h(e, a, l, s, u)),
        o("AdsAdgroupUtils").isPartnershipAd(e) &&
          !o(
            "WAMOStatusAdsManagerUtils",
          ).isAdAccountEligibleForPartnershipAdsExpansion() &&
          p.push(ft()),
        p
      );
    }
    function h(e, t, n, r, a) {
      var i = Ve(e);
      return i === "video" &&
        !o(
          "WAMOStatusMediaValidationUtils",
        ).isSingleVideoValidForStatusFromPlacementAssetSpec(r)
        ? [
            o("WAMOStatusAdsManagerUtils").isAdAccountEligibleForLPVExpansion()
              ? ot()
              : rt(),
          ]
        : i === "image" && !qe(n, t, a)
          ? [_t()]
          : [];
    }
    function y(t, n, a, i, l, s, u) {
      var c = [],
        d = null,
        m = o(
          "AdsUEditorAdgroupMessageMarketingLiquidityUtils",
        ).isAdAccountEligibleForMessageMarketingLiquidity(),
        p =
          l != null &&
          o(
            "AdsUEditorAdgroupMessageMarketingLiquidityUtils",
          ).isAdAccountEligibleForMessengerMarketingLiquidity(),
        _ = m ? n : null,
        f = m ? a : null,
        g = m ? i : null,
        h = p ? l : null;
      if (
        ((g != null || _ != null || h != null) &&
          (d = o(
            "getMessageMarketingIntegrityValidationResults",
          ).getMessageMarketingIntegrityHighestPriorityValidationResult({
            callsite: r("MessageMarketingIntegrityValidationCallsites")
              .AdgroupRHRIntegrityError,
            adgroupIntegrityData: _,
            adgroupWABAIntegrityData: g,
            messengerPageIntegrityData: h,
          })),
        f != null && d === null)
      ) {
        var y, C;
        ((d = o(
          "getMessageMarketingIntegrityValidationResults",
        ).getMessageMarketingIntegrityHighestPriorityValidationResult({
          callsite: r("MessageMarketingIntegrityValidationCallsites")
            .AdgroupRHRIntegrityError,
          adgroupIntegrityData: f,
        })),
          (d =
            ((y = d) == null ? void 0 : y.errorEnum) ===
              o("getMessageMarketingIntegrityValidationResults")
                .MessageMarketingIntegrityErrorEnum.TEMPLATE_PAUSED ||
            ((C = d) == null ? void 0 : C.errorEnum) ===
              o("getMessageMarketingIntegrityValidationResults")
                .MessageMarketingIntegrityErrorEnum.TEMPLATE_DISABLED
              ? d
              : null));
      }
      var b = s;
      return (
        b == null &&
          (o("AdsDynamicAdsUtils").isDynamicAd(t)
            ? (b = o(
                "AdsAdgroupMessageMarketingValidationUtils",
              ).validateDynamicProductMessage({ adgroup: t }, !0))
            : o("AdsChildAttachmentsUtils").isCarouselAd(t)
              ? (b = o(
                  "AdsAdgroupMessageMarketingValidationUtils",
                ).validateCarouselFormatMessage({ adgroup: t }, !0))
              : (b = o(
                  "AdsAdgroupMessageMarketingValidationUtils",
                ).validateSingleMediaFormatMessage({ adgroup: t }, !0))),
        (b = [].concat(b != null ? b : [], u != null ? u : [])),
        d != null && d.error.level === r("AdsError").Level.WARN
          ? c.push(d.error)
          : (e || (e = r("isEmpty")))(b)
            ? d != null && c.push(d.error)
            : c.push(b[0]),
        c
      );
    }
    function C(e, t, n, r) {
      return y(
        e,
        t,
        n,
        r,
        null,
        null,
        o(
          "AdsAdgroupMessageMarketingButtonBlockerUtils",
        ).getMarketingMessageButtonBlockerErrors(e),
      );
    }
    function b(e, t) {
      if (
        !o(
          "AdsUEditorAdgroupMessageMarketingLiquidityUtils",
        ).isAdAccountEligibleForMessengerMarketingLiquidity()
      )
        return [];
      var n = o(
        "AdsMessengerMarketingMessagesCatalogPreviewUtils",
      ).getMessengerMarketingMessagesCatalogUnsupportedErrors(e, t);
      return (o("AdsAdgroupUtils").isPartnershipAd(e) && n.push(ct()), n);
    }
    function v(e, t, n, o, a, i) {
      var l,
        s = [];
      if (
        be(e, {
          format: n,
          hasIGArEffect:
            (l = i == null ? void 0 : i.effectSupportsIG) != null ? l : !1,
        })
      )
        s.push(nt(o));
      else if (Je(t, n, "video")) {
        if (n === "INSTAGRAM_REELS") return s;
        s.push(Rt(2238167, a));
      } else
        Ze(e) &&
          s.push(
            new (r("AdsError"))(
              1443431,
              u._(function (e, t) {
                return e._(/*BTDS*/ "");
              }, {}),
            ),
          );
      return s;
    }
    function S(e, t, n, o, a, i, l) {
      var s,
        c = [];
      return (
        Me(e, o, (s = l == null ? void 0 : l.effectSupportsFB) != null ? s : !1)
          ? Ze(e) &&
            c.push(
              new (r("AdsError"))(
                1443426,
                u._(function (e, t) {
                  return e._(/*BTDS*/ "");
                }, {}),
              ),
            )
          : c.push(nt(a)),
        c
      );
    }
    function R(e, t, n, a, i, l, s, c) {
      var d = [],
        m =
          a === "INSTREAM_VIDEO_DESKTOP"
            ? n === r("AdsAPIObjectives").VIDEO_VIEWS
            : o("AdsInstreamCapabilityUtils").isEligibleForInstreamLongVideoAds(
                !0,
                n,
              );
      return (
        Ie(e, a, i, n)
          ? Te(e, i, c)
            ? Je(t, a, "video") && d.push(Rt(1699053, s))
            : d.push(
                o("AdsInstreamVideoErrorUtils").getWrongLengthError(
                  r("AdsError").Level.WARN,
                  m,
                  l,
                ),
              )
          : d.push(
              r("AdsError").createError(
                2016145,
                u._(function (e, t) {
                  return e._(/*BTDS*/ "");
                }, {}),
                r("AdPreview.react").PREVIEW_MESSAGE_FIELD_NAME,
              ),
            ),
        d
      );
    }
    function L(e) {
      return pe(e.adgroup, e.effectiveObjective, e.accountID)
        ? []
        : [nt(e.apiFormatLabel)];
    }
    function E(e) {
      var t, n;
      return _e(
        e.adgroup,
        (t = (n = e.arEffectInfo) == null ? void 0 : n.effectSupportsFB) != null
          ? t
          : !0,
      )
        ? []
        : [nt(e.apiFormatLabel)];
    }
    function k(e) {
      return fe(e.adgroup, e.accountID) ? [] : [nt(e.apiFormatLabel)];
    }
    function I(e) {
      return ge(e.adgroup, e.accountID) ? [] : [nt(e.apiFormatLabel)];
    }
    function T(e) {
      var t;
      return he(
        e.format,
        e.adgroup,
        e.effectiveObjective,
        e.accountID,
        (t = e.eligibilityInformation) == null
          ? void 0
          : t.isCTXAdvantageCatalogEnabled,
      )
        ? []
        : [nt(e.apiFormatLabel)];
    }
    function D(e) {
      return e.assetType ===
        o("AdsPlacementAssetCustomizationTypes")
          .AdsPlacementCustomizationMediaFormatVideo
        ? [St(e.apiFormatLabel)]
        : ye(e.adgroup, e.previewMedia, e.accountID)
          ? []
          : [nt(e.apiFormatLabel)];
    }
    function x(e) {
      var t, n, r;
      return Ce(
        e.adgroup,
        e.accountID,
        {
          format: e.format,
          hasIGArEffect:
            (t = (n = e.arEffectInfo) == null ? void 0 : n.effectSupportsIG) !=
            null
              ? t
              : !0,
        },
        (r = e.eligibilityInformation) == null
          ? void 0
          : r.isCTXAdvantageCatalogEnabled,
      )
        ? []
        : [nt(e.apiFormatLabel)];
    }
    function $(e) {
      var t, n;
      if (
        o(
          "AdsInstagramSearchAdsUtils",
        ).shouldEnableIGSearchFeedAdsInReelsChainCreation()
      ) {
        var r,
          a = Se(
            e.adgroup,
            e.adgroupRecord,
            e.format,
            (r = e.arEffectInfo) != null ? r : void 0,
            e.apiFormatLabel,
            e.positionNameLabel,
          );
        return a != null ? [a] : [];
      }
      return ve(e.adgroup, e.accountID, {
        format: e.format,
        hasIGArEffect:
          (t = (n = e.arEffectInfo) == null ? void 0 : n.effectSupportsIG) !=
          null
            ? t
            : !0,
      })
        ? []
        : [nt(e.apiFormatLabel)];
    }
    function P(e) {
      var t, n, r;
      return ve(
        e.adgroup,
        e.accountID,
        {
          format: e.format,
          hasIGArEffect:
            (t = (n = e.arEffectInfo) == null ? void 0 : n.effectSupportsIG) !=
            null
              ? t
              : !0,
        },
        (r = e.eligibilityInformation) == null
          ? void 0
          : r.isCTXAdvantageCatalogEnabled,
      )
        ? []
        : [nt(e.apiFormatLabel)];
    }
    function N(e) {
      var t, n;
      return Re(e.adgroup, e.accountID, {
        format: e.format,
        hasIGArEffect:
          (t = (n = e.arEffectInfo) == null ? void 0 : n.effectSupportsIG) !=
          null
            ? t
            : !0,
      })
        ? []
        : [nt(e.apiFormatLabel)];
    }
    function M(e) {
      var t,
        n,
        o,
        a,
        i = [];
      return (
        Le(
          e.adgroup,
          e.accountID,
          {
            format: e.format,
            hasIGArEffect:
              (t =
                (n = e.arEffectInfo) == null ? void 0 : n.effectSupportsIG) !=
              null
                ? t
                : !1,
          },
          (o =
            (a = e.eligibilityInformation) == null
              ? void 0
              : a.isCTXAdvantageCatalogEnabled) != null
            ? o
            : !1,
        )
          ? e.eligibilityInformation != null &&
            r("adsInteractivePollHasFbFeedVideoPollSpec")(
              e.adgroup,
              e.eligibilityInformation.spec,
            ) &&
            !r("gkx")("21492") &&
            i.push(
              r("AdsError").createError(
                2446286,
                u._(function (e, t) {
                  return e._(/*BTDS*/ "");
                }, {}),
                r("AdPreview.react").PREVIEW_MESSAGE_FIELD_NAME,
              ),
            )
          : i.push(nt(e.apiFormatLabel)),
        i
      );
    }
    function w(e) {
      return o("AdsArLinkUtils").isArAdCreative(e.adgroup)
        ? [nt(e.apiFormatLabel)]
        : [];
    }
    function A(e) {
      var t = [];
      return (
        e.assetType ===
          o("AdsPlacementAssetCustomizationTypes")
            .AdsPlacementCustomizationMediaFormatVideo &&
          !o(
            "AdsInstagramSearchGridAdPreviewUtils",
          ).passSearchGridVideoAdsGK() &&
          t.push(Lt()),
        o("AdsArLinkUtils").isArAdCreative(e.adgroup) &&
          t.push(nt(e.apiFormatLabel)),
        t
      );
    }
    function F(e) {
      var t = [];
      return (
        e.assetType ===
          o("AdsPlacementAssetCustomizationTypes")
            .AdsPlacementCustomizationMediaFormatVideo &&
          t.push(St(e.apiFormatLabel)),
        o("AdsArLinkUtils").isArAdCreative(e.adgroup) &&
          t.push(nt(e.apiFormatLabel)),
        t
      );
    }
    function O(e) {
      var t;
      return Je(e.adgroupRecord, e.format, "video") &&
        !((t = e.isThreadsCarouselVideoEnabled) != null
          ? t
          : o(
              "AdsThreadsCarouselVideoStoreUtils",
            ).isThreadsCarouselVideoEnabled())
        ? [
            r("AdsError").createError(
              4588039,
              u._(function (e, t) {
                return e._(/*BTDS*/ "");
              }, {}),
            ),
          ]
        : [];
    }
    function B(e) {
      var t;
      return v(
        e.adgroup,
        e.adgroupRecord,
        e.format,
        e.apiFormatLabel,
        e.positionNameLabel,
        (t = e.arEffectInfo) != null ? t : void 0,
      );
    }
    function W(e) {
      return Ee(e.adgroup, e.accountID) ? [] : [nt(e.apiFormatLabel)];
    }
    function q(e) {
      return ke(e.adgroup, e.format, e.effectiveObjective)
        ? []
        : [
            r("AdsError").createError(
              2016118,
              u._(function (e, t) {
                return e._(/*BTDS*/ "");
              }, {}),
              r("AdPreview.react").PREVIEW_MESSAGE_FIELD_NAME,
            ),
          ];
    }
    function U(e) {
      return R(
        e.adgroup,
        e.adgroupRecord,
        e.effectiveObjective,
        e.format,
        e.assetType,
        e.apiFormatLabel,
        e.positionNameLabel,
        e.instreamVideoLength,
      );
    }
    function V(e) {
      if (
        e.assetType !==
          o("AdsPlacementAssetCustomizationTypes")
            .AdsPlacementCustomizationMediaFormatVideo &&
        e.assetType !==
          o("AdsPlacementAssetCustomizationTypes")
            .AdsPlacementCustomizationMediaFormatCarousel
      ) {
        var t = r("gkx")("8857");
        return t ? [] : [vt(e.apiFormatLabel)];
      }
      return De(e.adgroup, e.assetType) ? [] : [nt(e.apiFormatLabel)];
    }
    function H(e) {
      return $e(e.adgroup, e.assetType, e.effectiveObjective)
        ? []
        : [nt(e.apiFormatLabel)];
    }
    function G(e) {
      return Pe(e.adgroup, e.assetType, e.effectiveObjective)
        ? []
        : [nt(e.apiFormatLabel)];
    }
    function z(e) {
      return je(e.adgroup, e.accountID) ? [] : [nt(e.apiFormatLabel)];
    }
    function j(e) {
      var t;
      return Ke(
        e.adgroup,
        e.accountID,
        (t = e.eligibilityInformation) == null
          ? void 0
          : t.isCTXAdvantageCatalogEnabled,
      )
        ? []
        : [nt(e.apiFormatLabel)];
    }
    function K(e) {
      return Qe(e.adgroup, e.accountID) ? [] : [nt(e.apiFormatLabel)];
    }
    function Q(e) {
      return Xe(e.adgroup, e.accountID) ? [] : [nt(e.apiFormatLabel)];
    }
    function X(e) {
      var t,
        n,
        o,
        a = [];
      return (
        Ne(
          e.adgroup,
          e.accountID,
          (t = (n = e.arEffectInfo) == null ? void 0 : n.effectSupportsFB) !=
            null
            ? t
            : !1,
          (o = e.eligibilityInformation) == null
            ? void 0
            : o.isCTXAdvantageCatalogEnabled,
        )
          ? Je(e.adgroupRecord, e.format, "video") &&
            !r("gkx")("21303") &&
            a.push(Rt(2490122, e.positionNameLabel))
          : a.push(nt(e.apiFormatLabel)),
        a
      );
    }
    function Y(e) {
      return e.assetType ===
        o("AdsPlacementAssetCustomizationTypes")
          .AdsPlacementCustomizationMediaFormatVideo
        ? [St(e.apiFormatLabel)]
        : we(e.adgroup, e.accountID)
          ? []
          : [nt(e.apiFormatLabel)];
    }
    function J(e) {
      return Ye(e.adgroup, e.accountID) ? [] : [nt(e.apiFormatLabel)];
    }
    function Z(e) {
      return g(
        e.adgroup,
        e.adgroupRecord,
        e.accountID,
        e.format,
        e.apiFormatLabel,
        e.placementAssetSelectorProps,
        e.videoPlacementAssetInfo,
        e.eligibilityInformation,
        e.hasWhatsAppNumberAvailable,
        e.leadGenWAMOUnsupportedMessage,
      );
    }
    function ee(e) {
      var t;
      return He(
        e.adgroup,
        (t = e.eligibilityInformation) == null
          ? void 0
          : t.isCTXAdvantageCatalogEnabled,
      )
        ? []
        : [nt(e.apiFormatLabel)];
    }
    function te(e) {
      return Ge(e.adgroup) ? [] : [nt(e.apiFormatLabel)];
    }
    function ne(e) {
      return ze(e.adgroup) ? [] : [nt(e.apiFormatLabel)];
    }
    function re(e) {
      return xe(e.adgroup) ? [] : [nt(e.apiFormatLabel)];
    }
    function oe(e) {
      var t;
      return S(
        e.adgroup,
        e.adgroupRecord,
        e.format,
        e.assetType,
        e.apiFormatLabel,
        e.positionNameLabel,
        (t = e.arEffectInfo) != null ? t : void 0,
      );
    }
    function ae(e) {
      return e.effectiveObjective === r("AdsAPIObjectives").VIDEO_VIEWS ||
        e.effectiveObjective === r("AdsAPIObjectives").REACH ||
        e.effectiveObjective === r("AdsAPIObjectives").BRAND_AWARENESS ||
        e.effectiveObjective === r("AdsAPIObjectives").LEAD_GENERATION ||
        o("AdsArLinkUtils").isArAdCreative(e.adgroup)
        ? [nt(e.apiFormatLabel)]
        : [];
    }
    function ie(e) {
      return o("AdsArLinkUtils").isArAdCreative(e.adgroup)
        ? [nt(e.apiFormatLabel)]
        : Je(e.adgroupRecord, e.format, "video")
          ? [Rt(1699096, e.positionNameLabel)]
          : [];
    }
    function le(e) {
      return C(
        e.adgroup,
        e.messageMarketingAdgroupIntegrityData,
        e.messageMarketingSourceAdgroupIntegrityData,
        e.messageMarketingAdgroupWABAIntegrityData,
      );
    }
    function se(e) {
      var t = b(e.adgroup, e.eligibilityInformation);
      return y(
        e.adgroup,
        null,
        null,
        null,
        e.messengerPageIntegrityData,
        t.length > 0 ? t : null,
      );
    }
    var ue = new Map([
      ["DESKTOP_FEED_STANDARD", L],
      ["MOBILE_FEED_STANDARD", E],
      ["FACEBOOK_PROFILE_FEED_MOBILE", k],
      ["FACEBOOK_PROFILE_REELS_MOBILE", I],
      ["MOBILE_BANNER", T],
      ["MOBILE_INTERSTITIAL", T],
      ["MOBILE_MEDIUM_RECTANGLE", T],
      ["MOBILE_NATIVE", T],
      ["AUDIENCE_NETWORK_MEDIUM_RECTANGLE_DESKTOP", T],
      ["RIGHT_COLUMN_STANDARD", D],
      ["INSTAGRAM_STANDARD", x],
      ["INSTAGRAM_SEARCH_CHAIN", $],
      ["INSTAGRAM_PROFILE_FEED", P],
      ["INSTAGRAM_EXPLORE_CONTEXTUAL", P],
      ["INSTAGRAM_EXPLORE_IMMERSIVE", N],
      ["INSTAGRAM_STORY", M],
      ["INSTAGRAM_EXPLORE_GRID_HOME", w],
      ["INSTAGRAM_SEARCH_GRID", A],
      ["INSTAGRAM_SHOP", F],
      ["THREADS_STREAM", O],
      ["INSTAGRAM_REELS", B],
      ["INSTAGRAM_PROFILE_REELS", B],
      ["MESSENGER_MOBILE_INBOX_MEDIA", W],
      ["INSTREAM_BANNER_DESKTOP", q],
      ["INSTREAM_BANNER_MOBILE", q],
      ["INSTREAM_BANNER_FULLSCREEN_MOBILE", q],
      ["INSTREAM_BANNER_FULLSCREEN_IOS", q],
      ["INSTREAM_VIDEO_MOBILE", U],
      ["INSTREAM_VIDEO_FULLSCREEN_IOS", U],
      ["INSTREAM_VIDEO_FULLSCREEN_MOBILE", U],
      ["INSTREAM_VIDEO_IMAGE", U],
      ["INSTREAM_VIDEO_DESKTOP", U],
      ["AUDIENCE_NETWORK_REWARDED_VIDEO", V],
      ["SUGGESTED_VIDEO_MOBILE", H],
      ["SUGGESTED_VIDEO_DESKTOP", H],
      ["WATCH_FEED_MOBILE", G],
      ["MARKETPLACE_SEARCH_ADS_DESKTOP", z],
      ["MARKETPLACE_SEARCH_ADS_MOBILE", j],
      ["SEARCH_SERP_ADS_MOBILE", K],
      ["SEARCH_SERP_ADS_DESKTOP", Q],
      ["FACEBOOK_STORY_MOBILE", X],
      ["FACEBOOK_GROUP_TAB", Y],
      ["MESSENGER_MOBILE_STORY_MEDIA", J],
      ["WHATSAPP_STATUS_MEDIA", Z],
      ["MARKETPLACE_MOBILE", ee],
      ["MARKETPLACE_DESKTOP", te],
      ["MARKETPLACE_MOBILE_PDP", ne],
      ["MARKETPLACE_DESKTOP_PDP", ne],
      ["BIZ_DISCO_FEED_MOBILE", re],
      ["FACEBOOK_REELS_MOBILE", oe],
      ["FACEBOOK_REELS_STICKER", ae],
      ["FACEBOOK_REELS_BANNER", ie],
      ["WHATSAPP_MARKETING_MESSAGES_MEDIA", le],
      ["MESSENGER_MARKETING_MESSAGES_MEDIA", se],
    ]);
    function ce(
      e,
      t,
      n,
      a,
      i,
      l,
      s,
      c,
      m,
      p,
      _,
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
    ) {
      var D,
        x = [],
        $ = r("adsPreviewGetPositionFromFormat")(i),
        P = tt(t, i, l),
        N = {
          accountCapabilities: e,
          accountID: m,
          adgroup: t,
          adgroupRecord: n,
          apiFormatLabel: s,
          arEffectInfo: y != null ? y : null,
          assetType: P,
          effectiveObjective: a,
          eligibilityInformation: f,
          format: i,
          hasWhatsAppNumberAvailable: E != null ? E : null,
          instreamVideoLength: h,
          isThreadsCarouselVideoEnabled: T,
          leadGenWAMOUnsupportedMessage: I != null ? I : null,
          messageMarketingAdgroupIntegrityData: b,
          messageMarketingAdgroupWABAIntegrityData: S,
          messageMarketingSourceAdgroupIntegrityData: v,
          messengerPageIntegrityData: k,
          optimizationGoal: L != null ? L : null,
          placementAssetSelectorProps: p,
          positionNameLabel: c,
          previewMedia: l,
          studiesByAdObject: R != null ? R : null,
          videoPlacementAssetInfo: _,
        },
        M = ue.get(i);
      if (
        (M != null && x.push.apply(x, M(N)),
        o("AdsAssetFeedUtils").isPACAdgroupFromRecord(t) &&
          $ &&
          e &&
          !o(
            "AdsPlacementAssetEligibilityUtils",
          ).isEligiblePlacementForPlacementAssetCustomizationPhase2(
            { platform: $.platform, position: $.position },
            e,
          ) &&
          ((d || (d = o("ODS"))).bumpEntityKey(
            2966,
            "ads_pac_preview_warning",
            "ad_wont_be_delivered_to_placement",
          ),
          x.push(
            r("AdsError").createError(
              2016099,
              u._(
                function (e, t) {
                  return e._(/*BTDS*/ "", [e._param("placement", t.placement)]);
                },
                { placement: s },
              ),
              {
                field: r("AdPreview.react").PREVIEW_MESSAGE_FIELD_NAME,
                title: "This Ad Won't Be Delivered to This Placement.",
              },
            ),
          )),
        g != null &&
          de(t, g, i) &&
          x.push(
            r("AdsError").createError(
              2016104,
              u._(
                function (e, t) {
                  return e._(/*BTDS*/ "", [
                    e._param("language", t.language),
                    e._param("placement", t.placement),
                  ]);
                },
                {
                  language: r("AdsLanguageDialectConverter")
                    .localizedNamesForDialects[g],
                  placement: s,
                },
              ),
              {
                field: r("AdPreview.react").PREVIEW_MESSAGE_FIELD_NAME,
                title: "Automatic Translations Not Supported",
              },
            ),
          ),
        C === r("AdsPromotedObjectTypes").REMINDER &&
          i !== "INSTAGRAM_STANDARD" &&
          i !== "INSTAGRAM_STORY" &&
          i !== "INSTAGRAM_REELS" &&
          x.push(
            r("AdsError").createError(
              1699100,
              u._(function (e, t) {
                return e._(/*BTDS*/ "");
              }, {}),
            ),
          ),
        ((D = t.creative) == null ? void 0 : D.media_type) ===
          "SCHEDULED_LIVE_VIDEO" &&
          o("AdsCampaignLiveVideoAdsUtils").isSLVAEligible())
      ) {
        var w = [
          "WATCH_FEED_HOME",
          "WATCH_FEED_MOBILE",
          "MOBILE_FEED_STANDARD",
          "DESKTOP_FEED_STANDARD",
          "FACEBOOK_REELS_MOBILE",
        ];
        w.find(function (e) {
          return e === i;
        }) == null &&
          x.push(
            r("AdsError").createError(
              3858469,
              u._(function (e, t) {
                return e._(/*BTDS*/ "");
              }, {}),
            ),
          );
      }
      return x;
    }
    function de(e, t, n) {
      var r,
        a =
          (r = e.creative) == null || (r = r.asset_feed_spec) == null
            ? void 0
            : r.autotranslate;
      return (
        a != null &&
        !o("AdsDLOConstantUtils").isSupportedAutotranslatedPreviewFormat(n) &&
        a.includes(t)
      );
    }
    function me(e, t) {
      var n,
        r =
          (n = e.creative) == null || (n = n.asset_feed_spec) == null
            ? void 0
            : n.autotranslate;
      return r == null ? !1 : t != null && r.includes(t);
    }
    function pe(e, t, n) {
      return (
        !o("AdsLocalAwarenessUtils").isLocalAwarenessAndHasCallNowCallToAction(
          e,
          t,
        ) &&
        !o("AdsCanvasAdUtils").isCanvasAd(e) &&
        !o("AdsCollectionsAdUtils").isCollectionsAd(e.creative) &&
        !o("AdsSphericalPhotoErrorUtils").isSphericalPhotoLinkAd(e, n) &&
        !o("AdsArLinkUtils").isArAdCreative(e)
      );
    }
    function _e(e, t) {
      return !o("AdsArLinkUtils").isArAdCreative(e) || t;
    }
    function fe(e, t) {
      return o("AdsCanvasAdUtils").isCanvasAd(e) ||
        o("AdsCollectionsAdUtils").isCollectionsAd(e.creative) ||
        o("AdsAdgroupTypeUtils").isDPA(e)
        ? !0
        : !o("AdsAdgroupUtils").isPoliticalAd(e) &&
            !o("AdsAdgroupUtils").isPartnershipAd(e) &&
            !o("AdsArLinkUtils").isArAdCreative(e) &&
            !o("AdsSphericalPhotoErrorUtils").isAnySphericalPhotoAd(e, t);
    }
    function ge(e, t) {
      return (
        !o("AdsChildAttachmentsUtils").isStaticCarouselAd(e) &&
        !o("AdsChildAttachmentsUtils").isCarouselAd(e) &&
        !o("AdsDynamicAdsUtils").isDynamicAd(e) &&
        !o("AdsCanvasAdUtils").isCanvasAd(e) &&
        !o("AdsCollectionsAdUtils").isCollectionsAd(e.creative) &&
        !o("AdsAdgroupUtils").isPoliticalAd(e) &&
        !o("AdsAdgroupUtils").isPartnershipAd(e) &&
        !o("AdsArLinkUtils").isArAdCreative(e) &&
        !o("AdsSphericalPhotoErrorUtils").isAnySphericalPhotoAd(e, t)
      );
    }
    function he(e, t, n, a, i) {
      return n === r("AdsAPIObjectives").BRAND_AWARENESS &&
        !o("AdsAdgroupTypeUtils").isVideoAd(t)
        ? !1
        : !o("AdsCanvasAdUtils").isCanvasAd(t) &&
            !o("AdsCollectionsAdUtils").isCollectionsAd(t.creative) &&
            (e === "MOBILE_BANNER"
              ? !o("AdsAdgroupTypeUtils").isVideoAd(t) &&
                !o("AdsChildAttachmentsUtils").isStaticCarouselAd(t)
              : e === "MOBILE_INTERSTITIAL" ||
                !(o("AdsWebsiteAdUtils").getMultiVideoProductCount(t) > 0)) &&
            !o("AdsSphericalPhotoErrorUtils").isAnySphericalPhotoAd(t, a) &&
            !o("AdsArLinkUtils").isArAdCreative(t) &&
            !(
              o("AdsMessengerDynamicAdsUtils").isMessengerDynamicAds(t) &&
              i !== !0
            ) &&
            !(
              o("AdsWhatsappDynamicAdsUtils").isWhatsAppDynamicAds(t) &&
              i !== !0
            );
    }
    function ye(e, t, n, a) {
      var i =
          r("isTruthy")(a) &&
          o("AdsSphericalPhotoErrorUtils").isAnySphericalPhotoAd(e, a),
        l = tt(e, "RIGHT_COLUMN_STANDARD", t);
      return (
        !o("AdsPageLikeUtils").isPageLikeVideo(e, n) &&
        !o("AdsCanvasAdUtils").isCanvasAd(e) &&
        !o("AdsCollectionsAdUtils").isCollectionsAd(e.creative) &&
        i !== !0 &&
        (l ===
          o("AdsPlacementAssetCustomizationTypes")
            .AdsPlacementCustomizationMediaFormatImage ||
          l ===
            o("AdsPlacementAssetCustomizationTypes")
              .AdsPlacementCustomizationMediaFormatCarousel) &&
        !o("AdsArLinkUtils").isArAdCreative(e) &&
        !o("AdsMessengerDynamicAdsUtils").isMessengerDynamicAds(e) &&
        !o("AdsWhatsappDynamicAdsUtils").isWhatsAppDynamicAds(e)
      );
    }
    function Ce(e, t, n, a) {
      var i =
          r("isTruthy")(t) &&
          o("AdsSphericalPhotoErrorUtils").isAnySphericalPhotoAd(e, t),
        l = be(e, n);
      return (
        !i &&
        !l &&
        !(o("AdsMessengerDynamicAdsUtils").isMessengerDynamicAds(e) && !a)
      );
    }
    function be(e, t) {
      if (t == null || !o("AdsArLinkUtils").isArAdCreative(e)) return !1;
      if (t.hasIGArEffect === !1) return !0;
      var n =
        t.format !== "INSTAGRAM_STANDARD" &&
        t.format !== "INSTAGRAM_STORY" &&
        t.format !== "INSTAGRAM_REELS";
      return n;
    }
    function ve(e, t, n, r) {
      return Ce(e, t, n, r);
    }
    function Se(e, t, n, o, a, i) {
      var l;
      return be(e, {
        format: n,
        hasIGArEffect:
          (l = o == null ? void 0 : o.effectSupportsIG) != null ? l : !1,
      })
        ? nt(a)
        : Je(t, n, "video")
          ? Rt(2238286, i)
          : Ze(e)
            ? new (r("AdsError"))(
                1443478,
                u._(function (e, t) {
                  return e._(/*BTDS*/ "");
                }, {}),
              )
            : null;
    }
    function Re(e, t, n) {
      return (
        !o("AdsCollectionsAdUtils").isCollectionsAd(e.creative) && Ce(e, t, n)
      );
    }
    function Le(e, t, n, r) {
      var a = o("AdsWhatsappDynamicAdsUtils").isWhatsAppDynamicAds(e);
      return (
        (!o("AdsCollectionsAdUtils").isCollectionsAd(e.creative) &&
          Ce(e, t, n, r) &&
          !(a && r !== !0)) ||
        o("AdsCollectionsAdUtils").isCollectionsAd(e.creative)
      );
    }
    function Ee(e, t) {
      return (
        !o("AdsCanvasAdUtils").isCanvasAd(e) &&
        !o("AdsSphericalPhotoErrorUtils").isAnySphericalPhotoAd(e, t) &&
        !o("AdsArLinkUtils").isArAdCreative(e) &&
        !o("AdsMessengerDynamicAdsUtils").isMessengerDynamicAds(e) &&
        !o("AdsWhatsappDynamicAdsUtils").isWhatsAppDynamicAds(e)
      );
    }
    function ke(e, t, n) {
      return (
        !o("AdsCanvasAdUtils").isCanvasAd(e) &&
        !o("AdsCollectionsAdUtils").isCollectionsAd(e.creative) &&
        (!o("AdsChildAttachmentsUtils").isCarouselAd(e) ||
          (t !== "INSTREAM_BANNER_DESKTOP" &&
            o(
              "AdsInstreamCapabilityUtils",
            ).isEligibleForInstreamImageCarouselAds(n))) &&
        !o("AdsArLinkUtils").isArAdCreative(e) &&
        (t === "INSTREAM_BANNER_DESKTOP"
          ? o(
              "AdsInstreamCapabilityUtils",
            ).isEligibleForDesktopInstreamNonInterruptiveAds(n)
          : o(
              "AdsInstreamCapabilityUtils",
            ).isEligibleForMobileInstreamNonInterruptiveAds(n))
      );
    }
    function Ie(e, t, n, r) {
      var a = o(
          "AdsInstreamCapabilityUtils",
        ).isEligibleForInstreamCollectionAds(r),
        i = o("AdsCollectionsAdUtils").isCollectionsAd(e.creative);
      return (
        (!o("AdsCanvasAdUtils").isCanvasAd(e) || i) &&
        (!i || (a && t !== "INSTREAM_VIDEO_DESKTOP")) &&
        (t === "INSTREAM_VIDEO_DESKTOP"
          ? o(
              "AdsInstreamCapabilityUtils",
            ).isEligibleForDesktopInstreamInPlayerAds(n, r)
          : o(
              "AdsInstreamCapabilityUtils",
            ).isEligibleForMobileInstreamInPlayerAds(n, r)) &&
        !o("AdsArLinkUtils").isArAdCreative(e)
      );
    }
    function Te(e, t, n) {
      if (
        (o("AdsAdgroupTypeUtils").isVideoAd(e) ||
          t ===
            o("AdsPlacementAssetCustomizationTypes")
              .AdsPlacementCustomizationMediaFormatVideo) &&
        n !== null &&
        n !== void 0
      ) {
        var r;
        return o("AdsInstreamVideoLengthUtil").isEligibleInstreamAdsLength(
          n,
          o("AdsInstreamCapabilityUtils").isEligibleForLiveVideoAds(
            (r = e.creative) == null ? void 0 : r.object_story_id,
          ),
        );
      }
      return !0;
    }
    function De(e, t) {
      return (
        (t ===
          o("AdsPlacementAssetCustomizationTypes")
            .AdsPlacementCustomizationMediaFormatVideo ||
          t ===
            o("AdsPlacementAssetCustomizationTypes")
              .AdsPlacementCustomizationMediaFormatCarousel) &&
        !o("AdsCanvasAdUtils").isCanvasAd(e) &&
        !o("AdsArLinkUtils").isArAdCreative(e) &&
        !o("AdsMessengerDynamicAdsUtils").isMessengerDynamicAds(e) &&
        !o("AdsWhatsappDynamicAdsUtils").isWhatsAppDynamicAds(e)
      );
    }
    function xe(e) {
      var t,
        n,
        r = !1,
        a =
          o("AdsChildAttachmentsUtils").isStaticCarouselAd(e) ||
          o("AdsChildAttachmentsUtils").isCarouselAd(e),
        i = o("AdsChildAttachmentsUtils").isStaticCarouselAd(e),
        l = ((t = e.creative) == null ? void 0 : t.object_story_spec) == null,
        s = ["SHARE", "STATUS", "VIDEO"],
        u = o("AdsDynamicAdsUtils").isDynamicAd(e);
      r = r && s.includes((n = e.creative) == null ? void 0 : n.object_type);
      var c = a && !i,
        d = o("AdsAssetFeedUtils").isDynamicCreativeAdgroup(e),
        m =
          d &&
          !o("AdsAssetFeedUtils").doesAdgroupHaveImages(e) &&
          !o("AdsAssetFeedUtils").doesAdgroupHaveVideos(e),
        p = l && !r,
        _ = u,
        f = !m || l || u;
      return (
        !c &&
        !o("AdsCanvasAdUtils").isCanvasAd(e) &&
        !o("AdsArLinkUtils").isArAdCreative(e) &&
        !o("AdsCollectionsAdUtils").isCollectionsAd(e.creative) &&
        !p &&
        !_ &&
        f
      );
    }
    function $e(e, t, n) {
      var a = n === r("AdsAPIObjectives").LEAD_GENERATION,
        i =
          t ===
          o("AdsPlacementAssetCustomizationTypes")
            .AdsPlacementCustomizationMediaFormatVideo,
        l =
          t ===
          o("AdsPlacementAssetCustomizationTypes")
            .AdsPlacementCustomizationMediaFormatImage,
        s = o("AdsCollectionsAdUtils").isCollectionsAd(e.creative),
        u =
          o("AdsChildAttachmentsUtils").isStaticCarouselAd(e) ||
          o("AdsChildAttachmentsUtils").isCarouselAd(e),
        c = l || i || a || u,
        d = s;
      return (
        (c &&
          !o("AdsCanvasAdUtils").isCanvasAd(e) &&
          !o("AdsArLinkUtils").isArAdCreative(e) &&
          !o("AdsMessengerDynamicAdsUtils").isMessengerDynamicAds(e) &&
          !o("AdsWhatsappDynamicAdsUtils").isWhatsAppDynamicAds(e)) ||
        (d && o("AdsCanvasAdUtils").isCanvasAd(e))
      );
    }
    function Pe(e, t, n) {
      var a = n === r("AdsAPIObjectives").LEAD_GENERATION,
        i =
          o("AdsChildAttachmentsUtils").isStaticCarouselAd(e) ||
          o("AdsChildAttachmentsUtils").isCarouselAd(e),
        l =
          t ===
          o("AdsPlacementAssetCustomizationTypes")
            .AdsPlacementCustomizationMediaFormatVideo,
        s = o("AdsCollectionsAdUtils").isCollectionsAd(e.creative),
        u = l || a || i || !s,
        c = s;
      return (
        (u &&
          !o("AdsCanvasAdUtils").isCanvasAd(e) &&
          !o("AdsArLinkUtils").isArAdCreative(e)) ||
        (o("AdsCanvasAdUtils").isCanvasAd(e) && c)
      );
    }
    function Ne(e, t, n, r) {
      var a = o("AdsArLinkUtils").isArAdCreative(e) && !n;
      return (
        !o("AdsSphericalPhotoErrorUtils").isAnySphericalPhotoAd(e, t) &&
        !a &&
        !(o("AdsMessengerDynamicAdsUtils").isMessengerDynamicAds(e) && r !== !0)
      );
    }
    function Me(e, t, n) {
      var r =
          t ===
          o("AdsPlacementAssetCustomizationTypes")
            .AdsPlacementCustomizationMediaFormatVideo,
        a =
          t ===
          o("AdsPlacementAssetCustomizationTypes")
            .AdsPlacementCustomizationMediaFormatImage,
        i =
          t ===
          o("AdsPlacementAssetCustomizationTypes")
            .AdsPlacementCustomizationMediaFormatCarousel,
        l = o("AdsChildAttachmentsUtils").isDynamicAdCarouselMediaFormat(e),
        s = a || (i && !l) || l,
        u = o("AdsArLinkUtils").isArAdCreative(e) && !n;
      return (r || s) && !u;
    }
    function we(e, t) {
      return (
        !o("AdsCollectionsAdUtils").isCollectionsAd(e.creative) &&
        !o("AdsSphericalPhotoErrorUtils").isAnySphericalPhotoAd(e, t) &&
        !o("AdsArLinkUtils").isArAdCreative(e) &&
        !o("AdsDynamicAdsUtils").isDynamicAd(e)
      );
    }
    function Ae(e) {
      return (
        o("AdsChildAttachmentsUtils").isStaticCarouselAd(e) ||
        o("AdsChildAttachmentsUtils").isCarouselAd(e)
      );
    }
    function Fe(e) {
      var t = o("AdsChildAttachmentsUtils").getChildAttachments(e);
      return t == null
        ? !1
        : t.some(function (e) {
            return e.video_id != null;
          });
    }
    function Oe(e, t) {
      if (o("AdsCanvasAdUtils").isCanvasAd(e)) return !0;
      var n = o("AdsCallToActionTypesUtils").getCTATypeFromAdgroup(t);
      return n === "BUY_TICKETS" || n === "CALL_NOW";
    }
    function Be(e) {
      var t = We(e);
      if (t == null) return !1;
      var n = JSON.parse(t),
        o = n == null ? void 0 : n.text_format;
      if (o == null) return !0;
      var a = o.customer_action_type;
      return (
        a === r("AdsMessengerVisualEditorCustomerActionType").WHATSAPP_FLOW
      );
    }
    function We(e) {
      var t,
        n = e.creative;
      if (!n) return null;
      if (n.page_welcome_message != null) return n.page_welcome_message;
      var r = n.object_story_spec;
      if (r) {
        var o,
          a,
          i,
          l,
          s = [
            (o = r.template_data) == null ? void 0 : o.page_welcome_message,
            (a = r.link_data) == null ? void 0 : a.page_welcome_message,
            (i = r.photo_data) == null ? void 0 : i.page_welcome_message,
            (l = r.video_data) == null ? void 0 : l.page_welcome_message,
          ];
        for (var u of s) if (u != null) return u;
      }
      return (t = n.asset_feed_spec) == null || (t = t.additional_data) == null
        ? void 0
        : t.page_welcome_message;
    }
    function qe(e, t, n) {
      if (e == null) return !0;
      var a = e.assetGroupsByAsset,
        i = e.assets,
        l = e.cropsByAsset;
      if (i == null || n == null || a == null) return !0;
      var s = a.map(function (e) {
          return e.flatMap(function (e) {
            return o("AdsPlacementAssetUtils").getPlacementsFromAssetGroup(e);
          });
        }),
        u = o("AdsPlacementPluginList").getPositions(n),
        c = u
          .filter(function (e) {
            var o = e.getPreviews;
            return (
              o &&
              r("AdsPreviewsPlugins")
                .keys(o(n).toArray())
                .getList()
                .some(function (e) {
                  var n = e.apiFormat;
                  return n === t;
                })
            );
          })
          .first();
      if (c == null) return !0;
      var d = o("AdsPlacementAssetPluginUtils").getPlatformKeyFromPositionKey(
          c.key,
        ),
        m = o(
          "AdsPlacementAssetPluginUtils",
        ).getAPIPositionForPlacementPosition(c.key),
        p = s.findEntry(function (e) {
          return (
            e.findIndex(function (e) {
              return e.platform === d && e.position === m;
            }) !== -1
          );
        });
      if (p == null) {
        var _ = s.findEntry(function (e) {
          return e.size === 0;
        });
        if (_ == null) return !0;
        p = _;
      }
      var f = p[0],
        g = i.get(f);
      return g && g.format === "image"
        ? Ue(g, l == null ? void 0 : l.get(f))
        : !0;
    }
    function Ue(e, t) {
      var n = 0,
        o = 0;
      if (t != null) {
        var a = Object.values(t),
          i = a.find(function (e) {
            return (
              e != null &&
              Array.isArray(e) &&
              e.length >= 2 &&
              Array.isArray(e[0]) &&
              Array.isArray(e[1]) &&
              e[0].length >= 2 &&
              e[1].length >= 2
            );
          });
        if (i != null) {
          var l = i;
          ((n = l[1][1] - l[0][1]), (o = l[1][0] - l[0][0]));
        }
      } else e.format === "image" && ((n = e.height || 0), (o = e.width || 0));
      if (n === 0 || o === 0) return !1;
      var s = o / n,
        u = r("AdImageSpecs").WHATSAPP_STATUS.maxWarningAspectRatio,
        c = r("AdImageSpecs").WHATSAPP_STATUS_CROP.aspectRatioTolerance;
      return u == null || c == null ? !0 : s < u + c;
    }
    function Ve(e) {
      var t,
        n = o("AdsAutomaticFlowUtils").isStaticSingleVideoFormat(e),
        r = o("AdsAutomaticFlowUtils").isSingleImageFormat(e);
      if (!n && !r) return null;
      var a =
        e == null || (t = e.creative) == null || (t = t.asset_feed_spec) == null
          ? void 0
          : t.asset_customization_rules;
      if (a != null && a.length > 0) {
        var i = a.some(function (e) {
          var t,
            n,
            r = e.customization_spec;
          return (
            (r == null || (t = r.publisher_platforms) == null
              ? void 0
              : t.includes("whatsapp")) &&
            (r == null || (n = r.whatsapp_positions) == null
              ? void 0
              : n.includes("status")) &&
            e.video_label != null
          );
        });
        if (i && n) return "video";
        if (!i && r) return "image";
      }
      return n ? "video" : r ? "image" : null;
    }
    function He(e, t) {
      return (
        !o("AdsDynamicAdsUtils").isDynamicAdForRetail(e) &&
        !o("AdsArLinkUtils").isArAdCreative(e) &&
        !(o("AdsMessengerDynamicAdsUtils").isMessengerDynamicAds(e) && t !== !0)
      );
    }
    function Ge(e) {
      return (
        !o("AdsArLinkUtils").isArAdCreative(e) &&
        !o("AdsMessengerDynamicAdsUtils").isMessengerDynamicAds(e) &&
        !o("AdsWhatsappDynamicAdsUtils").isWhatsAppDynamicAds(e)
      );
    }
    function ze(e) {
      return !o("AdsArLinkUtils").isArAdCreative(e);
    }
    function je(e, t) {
      return (
        !o("AdsCollectionsAdUtils").isCollectionsAd(e.creative) &&
        !o("AdsSphericalPhotoErrorUtils").isAnySphericalPhotoAd(e, t) &&
        !o("AdsCanvasAdUtils").isCanvasAd(e) &&
        !o("AdsArLinkUtils").isArAdCreative(e) &&
        !o("AdsMessengerDynamicAdsUtils").isMessengerDynamicAds(e) &&
        !o("AdsWhatsappDynamicAdsUtils").isWhatsAppDynamicAds(e)
      );
    }
    function Ke(e, t, n) {
      return (
        !o("AdsCollectionsAdUtils").isCollectionsAd(e.creative) &&
        !o("AdsSphericalPhotoErrorUtils").isAnySphericalPhotoAd(e, t) &&
        !o("AdsArLinkUtils").isArAdCreative(e) &&
        !(
          o("AdsMessengerDynamicAdsUtils").isMessengerDynamicAds(e) && n !== !0
        ) &&
        !(o("AdsWhatsappDynamicAdsUtils").isWhatsAppDynamicAds(e) && n !== !0)
      );
    }
    function Qe(e, t) {
      return (
        !o("AdsCollectionsAdUtils").isCollectionsAd(e.creative) &&
        !o("AdsSphericalPhotoErrorUtils").isAnySphericalPhotoAd(e, t) &&
        !o("AdsArLinkUtils").isArAdCreative(e) &&
        !o("AdsMessengerDynamicAdsUtils").isMessengerDynamicAds(e) &&
        !o("AdsWhatsappDynamicAdsUtils").isWhatsAppDynamicAds(e)
      );
    }
    function Xe(e, t) {
      return (
        !o("AdsCollectionsAdUtils").isCollectionsAd(e.creative) &&
        !o("AdsSphericalPhotoErrorUtils").isAnySphericalPhotoAd(e, t) &&
        !o("AdsCanvasAdUtils").isCanvasAd(e) &&
        !o("AdsArLinkUtils").isArAdCreative(e) &&
        !o("AdsMessengerDynamicAdsUtils").isMessengerDynamicAds(e) &&
        !o("AdsWhatsappDynamicAdsUtils").isWhatsAppDynamicAds(e)
      );
    }
    function Ye(e, t) {
      return (
        !o("AdsCollectionsAdUtils").isCollectionsAd(e.creative) &&
        !o("AdsChildAttachmentsUtils").isStaticCarouselAd(e) &&
        !o("AdsSphericalPhotoErrorUtils").isAnySphericalPhotoAd(e, t) &&
        !o("AdsChildAttachmentsUtils").isCarouselAd(e) &&
        !o("AdsCanvasAdUtils").isCanvasAd(e) &&
        !o("AdsArLinkUtils").isArAdCreative(e) &&
        !o("AdsMessengerDynamicAdsUtils").isMessengerDynamicAds(e) &&
        !o("AdsWhatsappDynamicAdsUtils").isWhatsAppDynamicAds(e) &&
        !o("AdsDynamicAdsFormatUtils").getIsDynamicAdSingleMediaFormat(e)
      );
    }
    function Je(e, t) {
      if (!o("AdsChildAttachmentsUtils").isCarouselAd(e)) return !1;
      for (
        var n = r("adsGetCarouselCardFormatsForPreviewFormat")(e, t),
          a = arguments.length,
          i = new Array(a > 2 ? a - 2 : 0),
          l = 2;
        l < a;
        l++
      )
        i[l - 2] = arguments[l];
      return (
        !n.has("dynamic") &&
        i.every(function (e) {
          return n.has(e);
        })
      );
    }
    function Ze(e) {
      var t;
      if (!o("AdsDynamicAdsUtils").isDynamicAd(e)) return !1;
      var n =
        e == null ||
        (t = e.creative) == null ||
        (t = t.object_story_spec) == null ||
        (t = t.template_data) == null ||
        (t = t.call_to_action) == null
          ? void 0
          : t.type;
      return n === "NO_BUTTON";
    }
    function et(e) {
      if (e == null) return null;
      var t = r("ads-lib-urllib").getDomain(e);
      return t != null && t.startsWith("www.") && t.lastIndexOf(".") > 4
        ? t.substring(4)
        : t;
    }
    function tt(e, t, n) {
      if (n != null)
        return n.assetType === "image"
          ? o("AdsPlacementAssetCustomizationTypes")
              .AdsPlacementCustomizationMediaFormatImage
          : n.assetType === "video"
            ? o("AdsPlacementAssetCustomizationTypes")
                .AdsPlacementCustomizationMediaFormatVideo
            : n.assetType === "playable"
              ? o("AdsPlacementAssetCustomizationTypes")
                  .AdsPlacementCustomizationMediaFormatImage
              : (function () {
                  throw Error(
                    "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                      n.assetType,
                  );
                })();
      if (o("AdsChildAttachmentsUtils").isCarouselAd(e))
        return o("AdsPlacementAssetCustomizationTypes")
          .AdsPlacementCustomizationMediaFormatCarousel;
      if (o("AdsAdgroupTypeUtils").isAutomaticFormatAd(e)) {
        var a = o("AdsPlacementAssetUtils").getAssetGroupsFromFormats(
          r("immutable").List([t]),
        );
        return a == null || a.first() == null
          ? o("AdsPlacementAssetCustomizationTypes")
              .AdsPlacementCustomizationMediaFormatImage
          : r("adsGetMediaFormatByAssetGroup")(e, a.first());
      }
      return o("AdsAdgroupTypeUtils").isVideoAd(e)
        ? o("AdsPlacementAssetCustomizationTypes")
            .AdsPlacementCustomizationMediaFormatVideo
        : o("AdsPlacementAssetCustomizationTypes")
            .AdsPlacementCustomizationMediaFormatImage;
    }
    function nt(e) {
      return r("AdsError").createError(
        1699032,
        u._(
          function (e, t) {
            return e._(/*BTDS*/ "", [e._param("placement", t.placement)]);
          },
          { placement: e },
        ),
        r("AdPreview.react").PREVIEW_MESSAGE_FIELD_NAME,
      );
    }
    function rt() {
      return r("AdsError").createError(
        4829018,
        c._(/*BTDS*/ "", [
          c._param("lineBreak1", p.jsx("div", { children: p.jsx("br", {}) })),
          c._param("lineBreak3", p.jsx("br", {})),
        ]),
        r("AdPreview.react").PREVIEW_MESSAGE_FIELD_NAME,
      );
    }
    function ot() {
      return r("AdsError").createError(
        4829057,
        c._(/*BTDS*/ "", [
          c._param("lineBreak1", p.jsx("div", { children: p.jsx("br", {}) })),
          c._param("lineBreak3", p.jsx("br", {})),
        ]),
        r("AdPreview.react").PREVIEW_MESSAGE_FIELD_NAME,
      );
    }
    function at() {
      return r("AdsError").createError(
        4829002,
        c._(/*BTDS*/ "", [
          c._implicitParam(
            "=m1",
            p.jsx("strong", { children: c._(/*BTDS*/ "") }),
          ),
        ]),
        r("AdPreview.react").PREVIEW_MESSAGE_FIELD_NAME,
      );
    }
    function it() {
      return r("AdsError").createError(
        4829074,
        c._(/*BTDS*/ ""),
        r("AdPreview.react").PREVIEW_MESSAGE_FIELD_NAME,
      );
    }
    function lt() {
      return r("AdsError").createError(
        4829060,
        c._(/*BTDS*/ ""),
        r("AdPreview.react").PREVIEW_MESSAGE_FIELD_NAME,
      );
    }
    function st() {
      return r("AdsError").createError(
        4829003,
        c._(/*BTDS*/ "", [
          c._param(
            "Single image or video",
            p.jsx("strong", { children: "Single image or video" }),
          ),
        ]),
        r("AdPreview.react").PREVIEW_MESSAGE_FIELD_NAME,
      );
    }
    function ut() {
      return r("AdsError").createError(
        4829034,
        c._(/*BTDS*/ "", [
          c._implicitParam(
            "=m1",
            p.jsx("strong", { children: c._(/*BTDS*/ "") }),
          ),
        ]),
        r("AdPreview.react").PREVIEW_MESSAGE_FIELD_NAME,
      );
    }
    function ct() {
      return r("AdsError").createError(
        4017184,
        c._(/*BTDS*/ ""),
        r("AdPreview.react").PREVIEW_MESSAGE_FIELD_NAME,
      );
    }
    function dt() {
      return (
        r("vulture")("SXhydJd4sBC5ENg_WWbvM9FfgJk="),
        r("AdsError").createError(
          4829010,
          c._(/*BTDS*/ "", [
            c._param(
              "Manual upload",
              p.jsx("strong", {
                children: o("WAMOLabelStrings").MANUAL_UPLOAD,
              }),
            ),
          ]),
          r("AdPreview.react").PREVIEW_MESSAGE_FIELD_NAME,
        )
      );
    }
    function mt() {
      return r("AdsError").createError(
        4829055,
        c._(/*BTDS*/ "", [
          c._param(
            "supported catalog types",
            p.jsx("strong", {
              children: o("WAMOLabelStrings").ECOMMERCE_TRAVEL_AND_VEHICLE,
            }),
          ),
        ]),
        r("AdPreview.react").PREVIEW_MESSAGE_FIELD_NAME,
      );
    }
    function pt() {
      return r("AdsError").createError(
        4829021,
        c._(/*BTDS*/ "", [
          c._param(
            "whatsapp",
            p.jsx("strong", {
              children: o("WAMOLabelStrings").START_CONVERSATIONS,
            }),
          ),
        ]),
        r("AdPreview.react").PREVIEW_MESSAGE_FIELD_NAME,
      );
    }
    function _t() {
      return r("AdsError").createError(
        4829019,
        c._(/*BTDS*/ "", [
          c._param("lineBreak1", p.jsx("div", { children: p.jsx("br", {}) })),
          c._param("lineBreak2", p.jsx("br", {})),
        ]),
        r("AdPreview.react").PREVIEW_MESSAGE_FIELD_NAME,
      );
    }
    function ft() {
      return r("AdsError").createError(
        4829022,
        c._(/*BTDS*/ "", [
          c._implicitParam(
            "=m1",
            p.jsx("strong", { children: c._(/*BTDS*/ "") }),
          ),
        ]),
        r("AdPreview.react").PREVIEW_MESSAGE_FIELD_NAME,
      );
    }
    function gt(e) {
      return r("AdsError").createError(
        4829051,
        e
          ? c._(/*BTDS*/ "", [
              c._param(
                "Website",
                p.jsx("strong", { children: o("WAMOLabelStrings").WEBSITE }),
              ),
              c._param(
                "Messaging apps",
                p.jsx("strong", {
                  children: o("WAMOLabelStrings").MESSAGING_APPS,
                }),
              ),
            ])
          : c._(/*BTDS*/ "", [
              c._param(
                "Website",
                p.jsx("strong", { children: o("WAMOLabelStrings").WEBSITE }),
              ),
            ]),
        r("AdPreview.react").PREVIEW_MESSAGE_FIELD_NAME,
      );
    }
    function ht() {
      return r("AdsError").createError(
        4829051,
        c._(/*BTDS*/ "", [
          c._param(
            "App",
            p.jsx("strong", { children: o("WAMOLabelStrings").APP }),
          ),
          c._param(
            "Website",
            p.jsx("strong", { children: o("WAMOLabelStrings").WEBSITE }),
          ),
        ]),
        r("AdPreview.react").PREVIEW_MESSAGE_FIELD_NAME,
      );
    }
    function yt() {
      return r("AdsError").createError(
        4829051,
        c._(/*BTDS*/ "", [
          c._param(
            "Add an Instant Experience",
            p.jsx("strong", {
              children: o("WAMOLabelStrings").ADD_AN_INSTANT_EXPERIENCE,
            }),
          ),
        ]),
        r("AdPreview.react").PREVIEW_MESSAGE_FIELD_NAME,
      );
    }
    function Ct() {
      return r("AdsError").createError(
        4829051,
        c._(/*BTDS*/ "", [
          c._param(
            "Destination",
            p.jsx("strong", { children: o("WAMOLabelStrings").DESTINATION }),
          ),
          c._param(
            "Connect account",
            p.jsx("strong", {
              children: o("WAMOLabelStrings").CONNECT_ACCOUNT,
            }),
          ),
        ]),
        r("AdPreview.react").PREVIEW_MESSAGE_FIELD_NAME,
      );
    }
    function bt() {
      return r("AdsError").createError(
        4829051,
        c._(/*BTDS*/ "", [
          c._param(
            "Destination",
            p.jsx("strong", { children: o("WAMOLabelStrings").DESTINATION }),
          ),
        ]),
        r("AdPreview.react").PREVIEW_MESSAGE_FIELD_NAME,
      );
    }
    function vt(e) {
      return r("AdsError").createError(
        1699043,
        u._(
          function (e, t) {
            return e._(/*BTDS*/ "", [e._param("placement", t.placement)]);
          },
          { placement: e },
        ),
        r("AdPreview.react").PREVIEW_MESSAGE_FIELD_NAME,
      );
    }
    function St(e) {
      return r("AdsError").createError(
        1699042,
        u._(
          function (e, t) {
            return e._(/*BTDS*/ "", [e._param("placement", t.placement)]);
          },
          { placement: e },
        ),
        r("AdPreview.react").PREVIEW_MESSAGE_FIELD_NAME,
      );
    }
    function Rt(e, t) {
      return r("AdsError").createError(
        e,
        c._(/*BTDS*/ "", [c._param("placement", t)]),
        r("AdPreview.react").PREVIEW_MESSAGE_FIELD_NAME,
      );
    }
    function Lt() {
      return r("AdsError").createError(
        1699042,
        u._(function (e, t) {
          return e._(/*BTDS*/ "");
        }, {}),
        r("AdPreview.react").PREVIEW_MESSAGE_FIELD_NAME,
      );
    }
    function Et(e, t) {
      var n,
        r = e != null && e.length > 0 ? e : [null];
      return (n = r.reduce(function (e, n) {
        if (e != null && e.length === 0) return e;
        var r = t(n);
        return e == null || r.length === 0
          ? r
          : e.filter(function (e) {
              return r.some(function (t) {
                var n = t.key;
                return e.key === n;
              });
            });
      }, null)) != null
        ? n
        : [];
    }
    ((l.getErrorsForAdgroup = ce),
      (l.shouldRenderAutotranslateInfoCard = me),
      (l.adgroupSupportsRightColumn = ye),
      (l.getPageWelcomeMessage = We),
      (l.sanitiseUrl = et),
      (l.getAssetTypeForFormat = tt),
      (l.getTextWidth = o("AdsGetTextWidth").getTextWidth),
      (l.getConsistentErrorsForPreviewMediaList = Et));
  },
  226,
);
