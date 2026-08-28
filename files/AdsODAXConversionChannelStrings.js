__d(
  "AdsODAXConversionChannelStrings",
  [
    "fbt",
    "AdsAPIObjectives",
    "AdsAccountStore",
    "AdsClickToCallFeatureGating",
    "AdsGroupUtils",
    "AdsLearnMore.react",
    "AdsManagerIGLoginUtils",
    "AdsPromotedObjectTypes",
    "AdsUnificationConversionContent",
    "ClickToCallStrings",
    "ClickToMessagingStrings",
    "ClickToWatchLiveStrings",
    "FBLogger",
    "adsPostInteractionUtils",
    "geoMargin",
    "igAccessAdsManagerUtils",
    "isAccountEligibleForThreeCOL2AdEx",
    "isAccountEligibleForThreeCOL2AdExWithL3DA",
    "isEligibleForFBClickToWatchLive",
    "isIABPInUPVMigration",
    "react",
    "stylex",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u,
      c = u || (u = o("react")),
      d = s._(/*BTDS*/ "Conversion location"),
      m = "2035196646663270";
    function p(e) {
      var t = s._(
        /*BTDS*/ "Select the location where you want the customer action to take place.",
      );
      switch (e) {
        case r("AdsAPIObjectives").OUTCOME_TRAFFIC:
          return c.jsxs("span", {
            children: [
              o(
                "AdsUnificationConversionContent",
              ).getConversionLocationTrafficDescriptionStringOrDefault(
                s._(/*BTDS*/ "Choose where you want to drive traffic."),
              ),
              " ",
              c.jsx(r("AdsLearnMore.react"), {
                cmsID: m,
                label: o(
                  "AdsUnificationConversionContent",
                ).getConversionLocationLearnMoreString(),
              }),
            ],
          });
        case r("AdsAPIObjectives").OUTCOME_ENGAGEMENT:
          return c.jsxs("span", {
            children: [
              o(
                "AdsUnificationConversionContent",
              ).getConversionLocationEngagementDescriptionStringOrDefault(
                s._(/*BTDS*/ "Choose where you want to drive engagement."),
              ),
              " ",
              c.jsx(r("AdsLearnMore.react"), {
                cmsID: m,
                label: o(
                  "AdsUnificationConversionContent",
                ).getConversionLocationLearnMoreString(),
              }),
            ],
          });
        case r("AdsAPIObjectives").OUTCOME_LEADS:
          return c.jsxs("span", {
            children: [
              o(
                "AdsUnificationConversionContent",
              ).getConversionLocationLeadsDescriptionStringOrDefault(
                s._(/*BTDS*/ "Choose where you want to generate leads."),
              ),
              " ",
              c.jsx(r("AdsLearnMore.react"), {
                cmsID: m,
                label: o(
                  "AdsUnificationConversionContent",
                ).getConversionLocationLearnMoreString(),
              }),
            ],
          });
        case r("AdsAPIObjectives").OUTCOME_SALES:
          return c.jsxs("span", {
            children: [
              o(
                "AdsUnificationConversionContent",
              ).getConversionLocationSalesDescriptionStringOrDefault(
                s._(/*BTDS*/ "Choose where you want to drive sales."),
              ),
              " ",
              c.jsx(r("AdsLearnMore.react"), {
                cmsID: m,
                label: o(
                  "AdsUnificationConversionContent",
                ).getConversionLocationLearnMoreString(),
              }),
            ],
          });
        default:
          return c.jsx("span", { children: t });
      }
    }
    p.displayName = p.name + " [from " + i.id + "]";
    var _ = s._(
        /*BTDS*/ "Get people to interact with your post or event, or to watch a video.",
      ),
      f = s._(
        /*BTDS*/ "Get people to interact with your post, event, or group, or to watch a video.",
      ),
      g = s._(/*BTDS*/ "Send traffic to your Instagram profile.");
    function h(e, t) {
      var n = o("AdsManagerIGLoginUtils").getIsIGLogin(t),
        a = o(
          "adsPostInteractionUtils",
        ).getIsEnabledForPostInteractionContent();
      switch (e) {
        case r("AdsPromotedObjectTypes").GROUP:
          return o("AdsGroupUtils").isGroupPromotionEligibleForH1(
            r("AdsAccountStore").getSelectedAccount().getValue(),
          )
            ? a
              ? f
              : s._(
                  /*BTDS*/ "Get people to watch a video or interact with your post, event or group.",
                )
            : null;
        case r("AdsPromotedObjectTypes").VIDEO:
        case r("AdsPromotedObjectTypes").POST:
        case r("AdsPromotedObjectTypes").EVENT:
        case r("AdsPromotedObjectTypes").REMINDER:
          return o("AdsGroupUtils").isGroupPromotionEligibleForH1(
            r("AdsAccountStore").getSelectedAccount().getValue(),
          )
            ? a
              ? f
              : s._(
                  /*BTDS*/ "Get people to watch a video or interact with your post, event or group.",
                )
            : a
              ? _
              : s._(
                  /*BTDS*/ "Get people to watch a video or interact with your post or event.",
                );
        case r("AdsPromotedObjectTypes").PIXEL:
          return s._(/*BTDS*/ "Get people to engage with your website.");
        case r("AdsPromotedObjectTypes").MESSENGER:
        case r("AdsPromotedObjectTypes").INSTAGRAM:
        case r("AdsPromotedObjectTypes").WHATSAPP:
          return n && !o("igAccessAdsManagerUtils").isIGAccessParityEnabled()
            ? o("ClickToMessagingStrings")
                .INSTAGRAM_DIRECT_ODAX_CONVERSION_CHANNEL_STRING_ENGAGEMENT
            : o("ClickToMessagingStrings")
                .MESSAGING_APPS_ODAX_CONVERSION_CHANNEL_STRING_ENGAGEMENT;
        case r("AdsPromotedObjectTypes").MOBILE_APP:
          return s._(/*BTDS*/ "Get people to engage with your app.");
        case r("AdsPromotedObjectTypes").PAGE:
          return s._(/*BTDS*/ "Get people to engage with your Facebook Page.");
        case r("AdsPromotedObjectTypes").PHONE_CALL:
          return o(
            "AdsClickToCallFeatureGating",
          ).isCallAdsWithWhatsAppCallEnabled(!0)
            ? o("ClickToCallStrings").CALL_ADS_MULTI_DESTINATION_DESCRIPTION
            : o("ClickToCallStrings").CALL_ADS_DEFAULT_DESCRIPTION;
        case r("AdsPromotedObjectTypes").WHATSAPP_CHANNEL:
          return s._(/*BTDS*/ "Get people to follow your WhatsApp channel.");
        case r("AdsPromotedObjectTypes").IG_PROFILE_AND_FB_PAGE:
          return s._(
            /*BTDS*/ "Get people to engage with your Instagram profile, Facebook Page or both.",
          );
        case r("AdsPromotedObjectTypes").LIVE_VIDEO:
          return r("isEligibleForFBClickToWatchLive")()
            ? o("ClickToWatchLiveStrings")
                .WATCH_LIVE_VIDEO_CONVERSION_CHANNEL_DESCRIPTION_ENGAGEMEN_GENERIC
            : o("ClickToWatchLiveStrings")
                .WATCH_LIVE_VIDEO_CONVERSION_CHANNEL_DESCRIPTION_ENGAGEMENT;
        default:
          return null;
      }
    }
    function y(e, t) {
      var n = o("AdsManagerIGLoginUtils").getIsIGLogin(t);
      switch (e) {
        case r("AdsPromotedObjectTypes").PIXEL:
        case "PRODUCT_SET_AND_WEBSITE":
          return s._(/*BTDS*/ "Drive sales and conversions on your website.");
        case r("AdsPromotedObjectTypes").MESSENGER:
        case r("AdsPromotedObjectTypes").WHATSAPP:
        case r("AdsPromotedObjectTypes").INSTAGRAM:
          return n && !o("igAccessAdsManagerUtils").isIGAccessParityEnabled()
            ? o("ClickToMessagingStrings")
                .INSTAGRAM_DIRECT_ODAX_CONVERSION_CHANNEL_STRING_SALES
            : o("ClickToMessagingStrings")
                .MESSAGING_APPS_ODAX_CONVERSION_CHANNEL_STRING_SALES;
        case r("AdsPromotedObjectTypes").MOBILE_APP:
        case "PRODUCT_SET_AND_APP":
          return s._(/*BTDS*/ "Drive sales and conversions on your app.");
        case r("AdsPromotedObjectTypes").IN_STORE:
          return s._(
            /*BTDS*/ "Drive sales and conversions in your physical stores.",
          );
        case r("AdsPromotedObjectTypes").WEBSITE_AND_IN_STORE:
        case "PRODUCT_SET_AND_IN_STORE":
          return s._(
            /*BTDS*/ "Drive sales and conversions on your website and in physical stores.",
          );
        case r("AdsPromotedObjectTypes").WEBSITE_APP_AND_IN_STORE:
        case "PRODUCT_SET_WEBSITE_APP_AND_INSTORE":
          return s._(
            /*BTDS*/ "Drive sales and conversions on your website, app and in physical stores.",
          );
        case r("AdsPromotedObjectTypes").WEB_AND_APP:
        case r("AdsPromotedObjectTypes").PRODUCT_SET:
        case "PRODUCT_SET_AND_OMNICHANNEL":
          return s._(
            /*BTDS*/ "Drive sales and conversions on your website or app.",
          );
        case r("AdsPromotedObjectTypes").DONATION:
          return s._(/*BTDS*/ "Allow people to make donations from ads.");
        case r("AdsPromotedObjectTypes").PHONE_CALL:
          return o(
            "AdsClickToCallFeatureGating",
          ).isCallAdsWithWhatsAppCallEnabled(!0)
            ? o("ClickToCallStrings").CALL_ADS_MULTI_DESTINATION_DESCRIPTION
            : o("ClickToCallStrings").CALL_ADS_PROMOTED_DEFAULT_DESCRIPTION;
        case r("AdsPromotedObjectTypes").WEBSITE_AND_PHONE_CALL:
        case "PRODUCT_SET_AND_WEBSITE_AND_PHONE_CALL":
          return s._(
            /*BTDS*/ "Drive sales and conversions on your website and through calls.",
          );
        case r("AdsPromotedObjectTypes").WEBSITE_AND_MESSAGES:
          return s._(
            /*BTDS*/ "Drive sales and conversions on your website and through messaging conversations.",
          );
        case r("AdsPromotedObjectTypes").WEBSITE_AND_INSTANT_FORM:
          return s._(
            /*BTDS*/ "Generate sales and leads through both your website and instant forms.",
          );
        case r("AdsPromotedObjectTypes").LIVE_VIDEO:
          return r("isEligibleForFBClickToWatchLive")()
            ? o("ClickToWatchLiveStrings")
                .WATCH_LIVE_VIDEO_CONVERSION_CHANNEL_DESCRIPTION_SALES_GENERIC
            : o("ClickToWatchLiveStrings")
                .WATCH_LIVE_VIDEO_CONVERSION_CHANNEL_DESCRIPTION_SALES;
        default:
          return null;
      }
    }
    function C(e) {
      switch (e) {
        case r("AdsPromotedObjectTypes").PIXEL:
          return s._(/*BTDS*/ "Generate leads through your website.");
        case r("AdsPromotedObjectTypes").PRODUCT_SET:
        case r("AdsPromotedObjectTypes").ON_AD:
          return s._(
            /*BTDS*/ "Generate leads by asking people to fill out a form.",
          );
        case r("AdsPromotedObjectTypes").MESSENGER:
          return s._(/*BTDS*/ "Generate leads by starting chats in Messenger.");
        case r("AdsPromotedObjectTypes").WHATSAPP:
          return s._(/*BTDS*/ "Generate leads by starting chats on WhatsApp.");
        case r("AdsPromotedObjectTypes").LEAD_FORM_MESSENGER:
          return s._(
            /*BTDS*/ "Generate leads by asking people to fill out a form or by starting chats in Messenger.",
          );
        case r("AdsPromotedObjectTypes").LEAD_FROM_IG_DIRECT:
          return s._(/*BTDS*/ "Generate leads by starting chats on Instagram.");
        case r("AdsPromotedObjectTypes").PHONE_CALL:
          return o(
            "AdsClickToCallFeatureGating",
          ).isCallAdsWithWhatsAppCallEnabled(!0)
            ? o("ClickToCallStrings")
                .CALL_ADS_LEAD_GEN_MULTI_DESTINATION_DESCRIPTION
            : o("ClickToCallStrings").CALL_ADS_LEAD_GEN_DEFAULT_DESCRIPTION;
        case r("AdsPromotedObjectTypes").MOBILE_APP:
          return s._(/*BTDS*/ "Generate leads through your app.");
        case r("AdsPromotedObjectTypes").WEBSITE_AND_PHONE_CALL:
        case "PRODUCT_SET_AND_WEBSITE_AND_PHONE_CALL":
          return s._(
            /*BTDS*/ "Generate leads through both your website and calls.",
          );
        case r("AdsPromotedObjectTypes").WEBSITE_AND_INSTANT_FORM:
          return s._(
            /*BTDS*/ "Generate leads through both your website and instant forms.",
          );
        case r("AdsPromotedObjectTypes").LIVE_VIDEO:
          return r("isEligibleForFBClickToWatchLive")()
            ? o("ClickToWatchLiveStrings")
                .WATCH_LIVE_VIDEO_CONVERSION_CHANNEL_DESCRIPTION_LEADS_GENERIC
            : o("ClickToWatchLiveStrings")
                .WATCH_LIVE_VIDEO_CONVERSION_CHANNEL_DESCRIPTION_LEADS;
        default:
          return null;
      }
    }
    function b(e, t, n) {
      n === void 0 && (n = !1);
      var a = o("AdsManagerIGLoginUtils").getIsIGLogin(t);
      switch (e) {
        case r("AdsPromotedObjectTypes").WEBSITE_AND_PHONE_CALL:
          return s._(
            /*BTDS*/ "Send traffic to your website and get people to call your business.",
          );
        case r("AdsPromotedObjectTypes").WEBSITE:
          return s._(/*BTDS*/ "Send traffic to your website.");
        case r("AdsPromotedObjectTypes").MOBILE_APP:
          return s._(/*BTDS*/ "Send traffic to your app.");
        case r("AdsPromotedObjectTypes").MESSENGER:
          return v(a);
        case r("AdsPromotedObjectTypes").WHATSAPP:
          return v(a);
        case r("AdsPromotedObjectTypes").WHATSAPP_CHANNEL:
          return s._(/*BTDS*/ "Send traffic to WhatsApp Channel.");
        case r("AdsPromotedObjectTypes").INSTAGRAM:
          return v(a);
        case r("AdsPromotedObjectTypes").INSTAGRAM_PROFILE:
          return g;
        case r("AdsPromotedObjectTypes").IG_PROFILE_AND_FB_PAGE:
          return r("isIABPInUPVMigration")(n)
            ? g
            : s._(
                /*BTDS*/ "Send traffic to an Instagram profile, Facebook Page or both.",
              );
        case r("AdsPromotedObjectTypes").PHONE_CALL:
          return o(
            "AdsClickToCallFeatureGating",
          ).isCallAdsWithWhatsAppCallEnabled(!0)
            ? o("ClickToCallStrings").CALL_ADS_MULTI_DESTINATION_DESCRIPTION
            : o("ClickToCallStrings").CALL_ADS_DEFAULT_DESCRIPTION;
        case r("AdsPromotedObjectTypes").LIVE_VIDEO:
          return r("isEligibleForFBClickToWatchLive")()
            ? o("ClickToWatchLiveStrings")
                .WATCH_LIVE_VIDEO_CONVERSION_CHANNEL_DESCRIPTION_TRAFFIC_GENERIC
            : o("ClickToWatchLiveStrings")
                .WATCH_LIVE_VIDEO_CONVERSION_CHANNEL_DESCRIPTION_TRAFFIC;
        default:
          return null;
      }
    }
    function v(e) {
      return e && !o("igAccessAdsManagerUtils").isIGAccessParityEnabled()
        ? o("ClickToMessagingStrings")
            .INSTAGRAM_DIRECT_ODAX_CONVERSION_CHANNEL_STRING_TRAFFIC
        : o("ClickToMessagingStrings")
            .MESSAGING_APPS_ODAX_CONVERSION_CHANNEL_STRING_TRAFFIC;
    }
    function S(e, t, n) {
      var o = null;
      return (
        t === r("AdsAPIObjectives").OUTCOME_ENGAGEMENT && (o = h(e, n)),
        t === r("AdsAPIObjectives").OUTCOME_SALES && (o = y(e, n)),
        t === r("AdsAPIObjectives").OUTCOME_LEADS && (o = C(e)),
        o == null
          ? (r("FBLogger")("odax", "unexpected_conversion_location").mustfix(
              "no description for %s, %s",
              e,
              t,
            ),
            "")
          : o
      );
    }
    function R(e) {
      switch (e) {
        case r("AdsPromotedObjectTypes").WEB_AND_APP:
        case r("AdsPromotedObjectTypes").PRODUCT_SET:
        case "PRODUCT_SET_AND_APP":
        case "PRODUCT_SET_AND_WEBSITE":
        case "PRODUCT_SET_AND_OMNICHANNEL":
        case "PRODUCT_SET_AND_IN_STORE":
          return s._(
            /*BTDS*/ "For your chosen conversion location, all data sources connected to your catalog are used to track conversions.",
          );
        default:
          return null;
      }
    }
    function L(t, n) {
      if (
        !t ||
        !o(
          "isAccountEligibleForThreeCOL2AdEx",
        ).isAccountEligibleForThreeCOL2AdEx(t)
      )
        return null;
      switch (t) {
        case r("AdsAPIObjectives").OUTCOME_SALES:
          return n === null ||
            !o(
              "isAccountEligibleForThreeCOL2AdExWithL3DA",
            ).isAccountEligibleForThreeCOL2AdExWithL3DA(t)
            ? s._(
                /*BTDS*/ "Choose where you want to drive sales. {learnMoreLink}",
                [
                  s._param(
                    "learnMoreLink",
                    c.jsx(
                      "div",
                      babelHelpers.extends(
                        {},
                        (e || (e = r("stylex"))).props(r("geoMargin").top8),
                        {
                          children: c.jsx(r("AdsLearnMore.react"), {
                            cmsID: m,
                            label: o(
                              "AdsUnificationConversionContent",
                            ).getConversionLocationLearnMoreString(),
                          }),
                        },
                      ),
                    ),
                  ),
                ],
              )
            : s._(
                /*BTDS*/ "For your chosen conversion location, all data sources connected to your catalog are used to track conversions.",
              );
        default:
          return null;
      }
    }
    ((l.CONVERSIONS_LABEL = d),
      (l.getConversionLocationSubheader = p),
      (l.getDescriptionsForTraffic = b),
      (l.getConversionLocationString = S),
      (l.getConversionLocationPCATooltip = R),
      (l.getConversionLocationTooltip = L));
  },
  226,
);
