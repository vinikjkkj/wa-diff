__d(
  "AdsPromotedObjectUtils",
  [
    "fbt",
    "AHGLink.react",
    "AdsAPIBidStrategies",
    "AdsAPICampaignRecordUtils",
    "AdsAPIObjectives",
    "AdsAccountStore",
    "AdsAccountUtils",
    "AdsAppUrlUtils",
    "AdsAppUtils",
    "AdsBulkValueUtils",
    "AdsCampaignRecordAccessors",
    "AdsCampaignUnifiedMessagesEditorSectionStrings",
    "AdsDeliveryOmnichannelStrings",
    "AdsGetHelpStrings",
    "AdsGroupUtils",
    "AdsLeadGenDestinationStrings",
    "AdsManagerIGLoginUtils",
    "AdsMultiDestinationLeadGenDestinationStrings",
    "AdsMutators",
    "AdsODAXConversionChannelStrings",
    "AdsODAXConversionChannelsUtils",
    "AdsODAXUtils",
    "AdsPromotedObjectAppUtils",
    "AdsPromotedObjectTypes",
    "AdsUnifiedProfileVisitUtils",
    "CPASCommonStrings",
    "ClickToMessageCTWAFeatureGating",
    "ClickToMessageCTXMDFeatureGating",
    "ClickToWatchLiveStrings",
    "CrossChannelShopsAdsStrings",
    "PromoChannelAdsManagerUtils",
    "adsCampaignIsMobileAppEngagementSupportedObjective",
    "igAccessAdsManagerUtils",
    "immutable",
    "isIABPInUPVMigration",
    "qex",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = s._(/*BTDS*/ ""),
      d = s._(/*BTDS*/ ""),
      m = s._(/*BTDS*/ ""),
      p = s._(/*BTDS*/ ""),
      _ = s._(/*BTDS*/ ""),
      f = s._(/*BTDS*/ ""),
      g = s._(/*BTDS*/ ""),
      h = s._(/*BTDS*/ ""),
      y = s._(/*BTDS*/ ""),
      C = s._(/*BTDS*/ "");
    function b(e, t) {
      return e === r("AdsPromotedObjectTypes").CANVAS_APP ||
        e === r("AdsPromotedObjectTypes").MOBILE_APP
        ? r("AdsAppUrlUtils").isFacebookDesktopURL(t)
          ? r("AdsPromotedObjectTypes").CANVAS_APP
          : r("AdsPromotedObjectTypes").MOBILE_APP
        : e;
    }
    function v(e, t, n) {
      var a = r("adsCampaignIsMobileAppEngagementSupportedObjective")(t),
        i = o("AdsAPICampaignRecordUtils").getPromotedObjectType(t, e);
      if (a && o("AdsPromotedObjectAppUtils").isAppType(i)) {
        var l = "installed";
        return (
          r("AdsAppUtils").storeUrlRequiresUserLevelEntitledTargeting(n) &&
            (l = "entitled"),
          r("AdsCampaignRecordAccessors").targeting.app_install_state.set(l, e)
        );
      } else
        return r("AdsCampaignRecordAccessors").targeting.app_install_state.set(
          void 0,
          e,
        );
    }
    function S(e, t, n, a, i) {
      var l = o("AdsMutators").chain(
        r("AdsCampaignRecordAccessors").promoted_object.application_id.set(t),
        r("AdsCampaignRecordAccessors").promoted_object.object_store_url.set(n),
        r("AdsCampaignRecordAccessors").promoted_object.object_store_urls.set(
          i,
        ),
        function (e) {
          return v(e, a, n);
        },
      );
      return l(e);
    }
    var R = s._(/*BTDS*/ ""),
      L = s._(/*BTDS*/ ""),
      E = [
        r("AdsAPIBidStrategies").LOWEST_COST_WITHOUT_CAP,
        r("AdsAPIBidStrategies").LOWEST_COST_WITH_BID_CAP,
        r("AdsAPIBidStrategies").LOWEST_COST_WITH_MIN_ROAS,
      ];
    function k(e) {
      return s._(/*BTDS*/ "", [
        s._param("label for promoted object type", u.jsx("b", { children: e })),
        s._implicitParam("=m7", u.jsx("b", { children: s._(/*BTDS*/ "") })),
      ]);
    }
    k.displayName = k.name + " [from " + i.id + "]";
    function I(e, t, n, a, i) {
      switch (e) {
        case r("AdsPromotedObjectTypes").PRODUCT_SET:
          return t === r("AdsAPIObjectives").OUTCOME_LEADS
            ? o("AdsLeadGenDestinationStrings").INSTANT_FORM_LABEL
            : i
              ? o("AdsDeliveryOmnichannelStrings")
                  .OMNICHANNEL_RADIO_BUTTON_LABEL
              : s._(/*BTDS*/ "");
        case r("AdsPromotedObjectTypes").WHATSAPP:
          return t === r("AdsAPIObjectives").OUTCOME_ENGAGEMENT ||
            t === r("AdsAPIObjectives").OUTCOME_SALES ||
            (t === r("AdsAPIObjectives").OUTCOME_LEADS &&
              o(
                "ClickToMessageCTXMDFeatureGating",
              ).isCtxmdLeadsObjectiveEnabled(!1)) ||
            o("AdsODAXUtils").isODAXTrafficCampaignGroup(a, t)
            ? o("AdsCampaignUnifiedMessagesEditorSectionStrings")
                .MESSAGING_APP_DESTINATION_LABEL
            : n
              ? s._(/*BTDS*/ "")
              : s._(/*BTDS*/ "");
        default:
          return null;
      }
    }
    function T(e) {
      switch (e) {
        case r("AdsPromotedObjectTypes").MOBILE_APP:
        case r("AdsPromotedObjectTypes").CANVAS_APP:
        case "PRODUCT_SET_AND_APP":
          return s._(/*BTDS*/ "");
        case r("AdsPromotedObjectTypes").DONATION:
          return s._(/*BTDS*/ "");
        case r("AdsPromotedObjectTypes").WEBSITE:
          return s._(/*BTDS*/ "");
        case r("AdsPromotedObjectTypes").OFFLINE_EVENT_SET:
          return s._(/*BTDS*/ "");
        case r("AdsPromotedObjectTypes").WHATSAPP_CHANNEL:
          return s._(/*BTDS*/ "");
        case r("AdsPromotedObjectTypes").PLACE_PAGE_SET_ID:
          return s._(/*BTDS*/ "");
        case r("AdsPromotedObjectTypes").ONSITE:
          return s._(/*BTDS*/ "");
        case r("AdsPromotedObjectTypes").BROADCAST_CHANNEL:
          return s._(/*BTDS*/ "");
        case r("AdsPromotedObjectTypes").IN_STORE:
          return s._(/*BTDS*/ "");
        case r("AdsPromotedObjectTypes").WEBSITE_AND_IN_STORE:
        case "PRODUCT_SET_AND_IN_STORE":
          return s._(/*BTDS*/ "");
        case r("AdsPromotedObjectTypes").WEBSITE_APP_AND_IN_STORE:
        case "PRODUCT_SET_WEBSITE_APP_AND_INSTORE":
          return s._(/*BTDS*/ "");
        case r("AdsPromotedObjectTypes").WEBSITE_AND_PHONE_CALL:
        case "PRODUCT_SET_AND_WEBSITE_AND_PHONE_CALL":
          return s._(/*BTDS*/ "");
        case r("AdsPromotedObjectTypes").WEBSITE_AND_MESSAGES:
          return s._(/*BTDS*/ "");
        case r("AdsPromotedObjectTypes").WEBSITE_AND_INSTANT_FORM:
          return o("AdsMultiDestinationLeadGenDestinationStrings")
            .MULTI_DESTINATION_WEB_AND_INSTANT_FORM_LABEL;
        case r("AdsPromotedObjectTypes").INSTAGRAM_PROFILE:
          return m;
        case "OMNI_CHANNEL_SHOP_AUTOMATIC_DATA_COLLECTION":
        case r("AdsPromotedObjectTypes").SHOP_AUTOMATIC:
        case r("AdsPromotedObjectTypes").WEB_AND_SHOP:
          return o("CrossChannelShopsAdsStrings").CrossChannelShopsAdsFbt(
            "SHOP_AUTOMATIC_DESTINATION_TYPE_LABEL",
          );
        case r("AdsPromotedObjectTypes").LIVE_VIDEO:
        case r("AdsPromotedObjectTypes").FACEBOOK_LIVE:
          return o("ClickToWatchLiveStrings")
            .WATCH_LIVE_VIDEO_CONVERSION_CHANNEL_LABEL;
        case r("AdsPromotedObjectTypes").INSTAGRAM_SHORT_FORM_DRAMA:
          return p;
        default:
          return null;
      }
    }
    function D(e, t, n, a, i) {
      switch (e) {
        case r("AdsPromotedObjectTypes").MESSENGER:
        case r("AdsPromotedObjectTypes").MESSAGING_INSTAGRAM_DIRECT_MESSENGER:
        case r("AdsPromotedObjectTypes").MESSAGING_MESSENGER_WHATSAPP:
        case r("AdsPromotedObjectTypes")
          .MESSAGING_INSTAGRAM_DIRECT_MESSENGER_WHATSAPP:
        case r("AdsPromotedObjectTypes").MESSAGING_INSTAGRAM_DIRECT_WHATSAPP:
          return t === r("AdsAPIObjectives").OUTCOME_ENGAGEMENT ||
            t === r("AdsAPIObjectives").OUTCOME_SALES ||
            (t === r("AdsAPIObjectives").OUTCOME_LEADS &&
              o(
                "ClickToMessageCTXMDFeatureGating",
              ).isCtxmdLeadsObjectiveEnabled(!1)) ||
            o("AdsODAXUtils").isODAXTrafficCampaignGroup(a, t)
            ? z(i)
            : s._(/*BTDS*/ "");
        case r("AdsPromotedObjectTypes").INSTAGRAM:
          return n || o("AdsODAXUtils").isODAXTrafficCampaignGroup(a, t)
            ? z(i)
            : s._(/*BTDS*/ "");
        case r("AdsPromotedObjectTypes").INSTAGRAM_DIRECT:
          return i
            ? s._(/*BTDS*/ "")
            : o("AdsLeadGenDestinationStrings").LEAD_FROM_IG_DIRECT_LABEL;
        default:
          return null;
      }
    }
    function x(e, t, n, a, i, l, u, c, d, p, _) {
      (t === void 0 && (t = !1),
        n === void 0 && (n = !1),
        a === void 0 && (a = !1),
        i === void 0 && (i = !1),
        u === void 0 && (u = !1),
        d === void 0 && (d = !1),
        p === void 0 && (p = !1),
        _ === void 0 && (_ = !1));
      var f = o("AdsManagerIGLoginUtils").getIsIGLogin(c),
        g = s._(/*BTDS*/ ""),
        h = s._(/*BTDS*/ ""),
        y = I(e, l, a, d, p);
      if (y != null) return y;
      var C = T(e);
      if (C != null) return C;
      var b = D(e, l, i, d, f);
      if (b != null) return b;
      switch (e) {
        case r("AdsPromotedObjectTypes").PIXEL:
        case "PRODUCT_SET_AND_WEBSITE":
          return !n && t && !u ? h : g;
        case r("AdsPromotedObjectTypes").IG_PROFILE_AND_FB_PAGE:
          return r("isIABPInUPVMigration")(_) ? m : s._(/*BTDS*/ "");
        case r("AdsPromotedObjectTypes").WEB_AND_APP:
        case "PRODUCT_SET_AND_OMNICHANNEL":
          return o("AdsDeliveryOmnichannelStrings")
            .OMNICHANNEL_RADIO_BUTTON_LABEL;
        case r("AdsPromotedObjectTypes").PHONE_CALL:
        case "PRODUCT_SET_AND_PHONE_CALL":
          return o("AdsLeadGenDestinationStrings").PHONE_CALL_LABEL;
        case r("AdsPromotedObjectTypes").ON_AD:
          return o("AdsLeadGenDestinationStrings").INSTANT_FORM_LABEL;
        case r("AdsPromotedObjectTypes").VIDEO:
        case r("AdsPromotedObjectTypes").REMINDER:
        case r("AdsPromotedObjectTypes").POST:
        case r("AdsPromotedObjectTypes").EVENT:
          return s._(/*BTDS*/ "");
        case r("AdsPromotedObjectTypes").FACEBOOK_PAGE:
        case r("AdsPromotedObjectTypes").FACEBOOK:
        case r("AdsPromotedObjectTypes").PAGE:
          return s._(/*BTDS*/ "");
        case r("AdsPromotedObjectTypes").LEAD_FORM_MESSENGER:
          return o("AdsMultiDestinationLeadGenDestinationStrings")
            .MULTI_DESTINATION_FORM_MESSENGER_ODAX_LABEL;
        case r("AdsPromotedObjectTypes").LEAD_FROM_IG_DIRECT:
          return l === r("AdsAPIObjectives").OUTCOME_LEADS &&
            o("ClickToMessageCTXMDFeatureGating").isCtxmdLeadsObjectiveEnabled(
              !1,
            )
            ? z(f)
            : f
              ? s._(/*BTDS*/ "")
              : o("AdsLeadGenDestinationStrings").LEAD_FROM_IG_DIRECT_LABEL;
        case r("AdsPromotedObjectTypes").PARTNER_EVENT:
          return o("AdsCampaignUnifiedMessagesEditorSectionStrings")
            .MESSAGING_APP_DESTINATION_LABEL;
        case r("AdsPromotedObjectTypes").GROUP:
          return o("AdsGroupUtils").isGroupPromotionEligibleForH1(
            r("AdsAccountStore").getSelectedAccount().getValue(),
          )
            ? s._(/*BTDS*/ "")
            : s._(/*BTDS*/ "");
        default:
          return null;
      }
    }
    function $(e, t, n, r) {
      return x(e, !1, !1, !1, !0, t, !1, n, !1, r);
    }
    function P(e, t, n, a, i, l, c, d) {
      if (
        (n === void 0 && (n = !1),
        a === void 0 && (a = !1),
        i === void 0 && (i = !1),
        l === void 0 && (l = !1),
        d === void 0 && (d = !1),
        e === r("AdsAPIObjectives").CONVERSIONS &&
          t === r("AdsPromotedObjectTypes").OFFLINE_EVENT_SET &&
          a === !0)
      )
        return L;
      if (
        t === r("AdsPromotedObjectTypes").WEB_AND_APP &&
        e === r("AdsAPIObjectives").CONVERSIONS
      )
        return s._(/*BTDS*/ "");
      if (e === r("AdsAPIObjectives").LINK_CLICKS && l)
        return o("AdsODAXConversionChannelStrings").getDescriptionsForTraffic(
          t,
          c,
          d,
        );
      if (
        o("AdsPromotedObjectAppUtils").isAppType(t) &&
        e === r("AdsAPIObjectives").LINK_CLICKS &&
        !i
      ) {
        var m = "https://developers.facebook.com/docs/app-ads",
          p = u.jsx(r("AHGLink.react"), {
            href: m,
            label: o("AdsGetHelpStrings").GET_HELP_FOR_APP_INSTALL_ADS,
          });
        return s._(/*BTDS*/ "", [s._param("=Get Help", p)]);
      }
      if (
        t === r("AdsPromotedObjectTypes").MESSENGER &&
        (e === r("AdsAPIObjectives").LINK_CLICKS ||
          e === r("AdsAPIObjectives").CONVERSIONS ||
          e === r("AdsAPIObjectives").MESSAGES)
      )
        return n && e === r("AdsAPIObjectives").CONVERSIONS
          ? s._(/*BTDS*/ "")
          : s._(/*BTDS*/ "");
      if (
        t === r("AdsPromotedObjectTypes").INSTAGRAM &&
        e === r("AdsAPIObjectives").MESSAGES
      )
        return s._(/*BTDS*/ "");
      if (t === r("AdsPromotedObjectTypes").DONATION)
        switch (e) {
          case r("AdsAPIObjectives").CONVERSIONS:
            return s._(/*BTDS*/ "");
        }
      if (t === r("AdsPromotedObjectTypes").WHATSAPP)
        switch (e) {
          case r("AdsAPIObjectives").MESSAGES:
            return s._(/*BTDS*/ "");
          case r("AdsAPIObjectives").LINK_CLICKS:
            return s._(/*BTDS*/ "");
          case r("AdsAPIObjectives").CONVERSIONS:
            return s._(/*BTDS*/ "");
        }
      return t === r("AdsPromotedObjectTypes").PHONE_CALL
        ? s._(/*BTDS*/ "")
        : e === r("AdsAPIObjectives").STORE_VISITS
          ? t === r("AdsPromotedObjectTypes").OFFLINE_EVENT_SET
            ? s._(/*BTDS*/ "", [
                s._param(
                  "help center Meta Accounts link",
                  o("CPASCommonStrings").metaAccountsLink(),
                ),
              ])
            : s._(/*BTDS*/ "", [
                s._param(
                  "help center Meta Accounts link",
                  o("CPASCommonStrings").metaAccountsLink(),
                ),
              ])
          : t === r("AdsPromotedObjectTypes").WEB_AND_SHOP
            ? o("CrossChannelShopsAdsStrings").CrossChannelShopsAdsFbt(
                "SHOP_AUTOMATIC_DESTINATION_TYPE_DESCRIPTION",
              )
            : null;
    }
    function N(e) {
      return e === r("AdsPromotedObjectTypes").CANVAS_APP
        ? r("AdsPromotedObjectTypes").MOBILE_APP
        : e;
    }
    function M(e) {
      var t,
        n,
        r,
        o = (t = e.promoted_object) == null ? void 0 : t.custom_event_type,
        a = (n = e.promoted_object) == null ? void 0 : n.pixel_id,
        i = (r = e.promoted_object) == null ? void 0 : r.product_set_id;
      return i != null && a != null && o != null;
    }
    function w(e, t, n, a, i, l) {
      l === void 0 && (l = !1);
      var s = !a && !t && !n && e !== r("AdsAPIObjectives").STORE_VISITS;
      return s
        ? o("AdsODAXUtils").isODAXTrafficCampaignGroup(l, e)
          ? o(
              "AdsODAXConversionChannelsUtils",
            ).supportsMessengerPromotedObjectType(i)
          : !0
        : !1;
    }
    function A(e, t, n, o, a) {
      return !a && !t && !n && !o && e !== r("AdsAPIObjectives").STORE_VISITS;
    }
    function F(e) {
      return e === r("AdsAPIObjectives").LINK_CLICKS;
    }
    function O(e, t) {
      return t ? !1 : e === r("AdsAPIObjectives").CONVERSIONS;
    }
    function B(e, t, n) {
      return n ? !1 : !t && e === r("AdsAPIObjectives").STORE_VISITS;
    }
    function W(e, t, n) {
      return (
        !t &&
        e === r("AdsAPIObjectives").LINK_CLICKS &&
        !o("AdsUnifiedProfileVisitUtils").getIsEligibleForUnifiedProfileVisits(
          n,
        )
      );
    }
    function q(e, t, n) {
      return (
        !t &&
        e === r("AdsAPIObjectives").LINK_CLICKS &&
        o("AdsUnifiedProfileVisitUtils").getIsEligibleForUnifiedProfileVisits(n)
      );
    }
    function U(e) {
      return (
        e === r("AdsAPIObjectives").OUTCOME_ENGAGEMENT &&
        o("PromoChannelAdsManagerUtils").isAdAccountEligibleForPromoChannel()
      );
    }
    function V(e, t, n, a, i, l) {
      var s = o("AdsManagerIGLoginUtils").getIsIGLogin(l),
        u = o("ClickToMessageCTWAFeatureGating").isCTWAForIGLoginEnabled(s, !1);
      return n || a || i || (s && !u)
        ? !1
        : (r("AdsAccountUtils").hasCapabilityFromList(
            t,
            "WHATSAPP_DESTINATION_ADS",
          ) &&
            (e === r("AdsAPIObjectives").MESSAGES ||
              e === r("AdsAPIObjectives").OUTCOME_LEADS)) ||
            (r("AdsAccountUtils").hasCapabilityFromList(
              t,
              "CAN_USE_WHATSAPP_DESTINATION_ON_LINK_CLICKS_AND_CONVERSIONS",
            ) &&
              e === r("AdsAPIObjectives").LINK_CLICKS) ||
            (r("AdsAccountUtils").hasCapabilityFromList(
              t,
              "CAN_USE_WHATSAPP_DESTINATION_ON_CONVERSIONS",
            ) &&
              (e === r("AdsAPIObjectives").CONVERSIONS ||
                e === r("AdsAPIObjectives").OUTCOME_SALES));
    }
    function H(e, t, n, o, a) {
      return a ||
        n ||
        o ||
        !r("AdsAccountUtils").hasCapabilityFromList(
          t,
          "PASS_OFFLINE_CONVERSION_OPT_GOAL_GK",
        )
        ? !1
        : e === r("AdsAPIObjectives").CONVERSIONS ||
            e === r("AdsAPIObjectives").STORE_VISITS;
    }
    function G(e) {
      return e === r("AdsAPIObjectives").OUTCOME_SALES;
    }
    function z(e) {
      return e && !o("igAccessAdsManagerUtils").isIGAccessParityEnabled()
        ? s._(/*BTDS*/ "")
        : o("AdsCampaignUnifiedMessagesEditorSectionStrings")
            .MESSAGING_APP_DESTINATION_LABEL;
    }
    function j(e, t) {
      return (
        !t &&
        (e === r("AdsAPIObjectives").LINK_CLICKS ||
          e === r("AdsAPIObjectives").CONVERSIONS ||
          e === r("AdsAPIObjectives").OUTCOME_SALES)
      );
    }
    function K(e, t) {
      return t
        ? !1
        : e === r("AdsAPIObjectives").LINK_CLICKS
          ? r("qex")._("2233") === !0
          : !1;
    }
    function Q(e) {
      return (
        e === r("AdsAPIObjectives").LINK_CLICKS ||
        e === r("AdsAPIObjectives").OUTCOME_ENGAGEMENT ||
        e === r("AdsAPIObjectives").OUTCOME_SALES ||
        e === r("AdsAPIObjectives").OUTCOME_LEADS
      );
    }
    function X(e) {
      var t = e.omnichannel_object;
      return t ? (Y(t) ? e : void 0) : e;
    }
    function Y(e) {
      var t = e.app,
        n = e.offline,
        r = e.onsite,
        o = e.pixel,
        a = !!(o != null && o.length),
        i = !!(t != null && t.length),
        l = !!(r != null && r.length),
        s = !!(n != null && n.length);
      return (!l && !a) ||
        (a &&
          !(
            o != null &&
            o.every(function (e) {
              return e.custom_event_type;
            })
          ))
        ? !1
        : l
          ? !i
          : s
            ? !(
                i ||
                !(
                  n != null &&
                  n.every(function (e) {
                    return e.custom_event_type;
                  })
                )
              )
            : !(
                !i ||
                !(
                  t != null &&
                  t.every(function (e) {
                    return e.custom_event_type;
                  })
                )
              );
    }
    var J = function (t) {
        return o("AdsBulkValueUtils").aggregate(
          t.map(function (e) {
            var t;
            return (t = e.promoted_object) == null
              ? void 0
              : t.object_store_url;
          }),
        );
      },
      Z = function (t) {
        return o("AdsBulkValueUtils").aggregate(
          t.map(function (e) {
            var t;
            return (t = e.promoted_object) == null ? void 0 : t.application_id;
          }),
        );
      },
      ee = function (t) {
        return t.some(function (e) {
          return (
            e === r("AdsPromotedObjectTypes").MOBILE_APP ||
            e === r("AdsPromotedObjectTypes").CANVAS_APP
          );
        });
      };
    function te(e, t) {
      var n = e instanceof r("immutable").Map ? e.get(t) : void 0,
        a = o("AdsBulkValueUtils").getUniformValueOrDefault(n, null);
      return typeof a == "string" ? a : null;
    }
    ((l.PCA_FORMAT_LIQUIDITY_READ_ONLY_TOOLTIP = c),
      (l.READ_ONLY_TOOLTIP = d),
      (l.READ_ONLY_TOOLTIP_FOR_INSTAGRAM_LIVE = _),
      (l.READ_ONLY_TOOLTIP_FOR_DISABLE_PCO_BULK_EDIT = f),
      (l.MIXED_LABEL = g),
      (l.READ_ONLY_TOOLTIP_FOR_BULK_EDIT_WEB_AND_APP = h),
      (l.READ_ONLY_TOOLTIP_FOR_L2F_CAMPAIGN = y),
      (l.READ_ONLY_TOOLTIP_FOR_L2_CONVERSION_LOCATION_DROPDOWN_WHEN_SELECTING_WEB_AND_APP =
        C),
      (l.getNewAppPromotedObjectType = b),
      (l.setPromotedObjectForAppObjectives = S),
      (l.DISABLED_FOR_DCO_TOOLTIP = R),
      (l.WEB_AND_SHOP_SUPPORTED_BID_STRATEGIES = E),
      (l.getTooltipForDisabledOptionsInCBOMinRoas = k),
      (l.getLabel = x),
      (l.getLabelForODAXConversionChannelSection = $),
      (l.getHelpText = P),
      (l.getTypeForUI = N),
      (l.shouldDisableMultiShareEndCardForCollaborativeAdsPixelConversion = M),
      (l.supportsMessengerPromotedObjectType = w),
      (l.supportsMobileAppPromotedObjectType = A),
      (l.supportsWebsitePromotedObjectType = F),
      (l.supportsPixelPromotedObjectType = O),
      (l.supportsPlacePageSetIDPromotedObjectType = B),
      (l.supportsInstagramProfilePromotedObjectType = W),
      (l.supportsIGProfileAndFBPagePromotedObjectType = q),
      (l.supportsPromoChannelPromotedObjectType = U),
      (l.supportsWhatsAppPromotedObjectType = V),
      (l.supportsOfflineEventSetPromotedObjectType = H),
      (l.supportWebsiteAndInStorePromotedObjectType = G),
      (l.supportsPhoneCallPromotedObjectType = j),
      (l.supportsWebsiteAndPhoneCallPromotedObjectType = K),
      (l.supportsLiveVideoPromotedObjectType = Q),
      (l.withoutIncompleteOmnichannelObject = X),
      (l.getBulkAppStoreURL = J),
      (l.getBulkAppID = Z),
      (l.getShouldAppSectionRender = ee),
      (l.getUniformPromotedObjectStringField = te));
  },
  226,
);
