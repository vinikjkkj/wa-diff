__d(
  "AdsPlacementIneligibilityReason",
  [
    "fbt",
    "invariant",
    "AHGHelpTrayLink2.react",
    "AdAccountBusinessConstraintsPerObjectivePlacementControlsGatingUtils",
    "AdsAPIDevicePlatform",
    "AdsAPIObjectiveStringsStatic",
    "AdsAPIObjectives",
    "AdsBuyingTypeNames",
    "AdsBwIConstants",
    "AdsODAXObjectiveStrings",
    "AdsODAXUtils",
    "AdsPlacementParentPositionTooltipUtils",
    "AdsPlacementsFacebookReelsOverlayPositionPlugin",
    "AdsPromotedObjectTypes",
    "AdsTargetingAccountPlacementControlInfoConstants",
    "AdsUniqueMetricsID",
    "WAMOLabelStrings",
    "adsGetObjectiveName",
    "react",
  ],
  function (t, n, r, o, a, i, l, s, u) {
    "use strict";
    var e,
      c,
      d = c || (c = o("react")),
      m =
        ((e = {}),
        (e.PREMIUM_FACEBOOK_INSTREAM_VIDEO_TRP = s._(
          /*BTDS*/ "Premium instream video TRP",
        )),
        (e.REACH_AND_FREQUENCY = s._(/*BTDS*/ "Reservation")),
        (e.REACH_AND_FREQUENCY_INSERTION_ORDER = s._(
          /*BTDS*/ "Reservation IO",
        )),
        (e.REACH_AND_FREQUENCY_INSERTION_ORDER_GENERAL = s._(
          /*BTDS*/ "Reservation IO",
        )),
        (e.TRP = s._(/*BTDS*/ "TRP")),
        (e.META_MOMENT_MAKER = s._(/*BTDS*/ "Ads burst")),
        e);
    function p() {
      return { type: "AD_SEQUENCING" };
    }
    function _() {
      return { type: "REELS_TRENDING_ADS" };
    }
    function f() {
      return { type: "MM_NOT_HIGH_TRUST" };
    }
    function g() {
      return { type: "META_MOMENT_MAKER" };
    }
    function h() {
      return { type: "APP" };
    }
    function y() {
      return { type: "MOBILE_APP" };
    }
    function C() {
      return { type: "CANVAS_APP" };
    }
    function b(e) {
      return { type: "MESSENGER", objective: e };
    }
    function v(e) {
      return { type: "INSTAGRAM", objective: e };
    }
    function S(e) {
      return { type: "INSTAGRAM_DIRECT_LEAD_GEN", objective: e };
    }
    function R(e, t, n) {
      return (
        t === void 0 && (t = null),
        { type: "OBJECTIVE", objectiveName: r("adsGetObjectiveName")(e, t, n) }
      );
    }
    function L() {
      return { type: "WAMO_STATUS_DESTINATION" };
    }
    function E(e) {
      return { objective: e, type: "WAMO_STATUS_CONVERSION_LOCATION" };
    }
    function k() {
      return { type: "WAMO_STATUS_DESTINATION_IN_LEAD_OBJECTIVE" };
    }
    function I() {
      return { type: "PROMO_CHANNEL_DESTINATION" };
    }
    function T() {
      return { type: "WAMO_STATUS_SAC" };
    }
    function D() {
      return { type: "WAMO_STATUS_AB_TEST" };
    }
    function x() {
      return { type: "WAMO_STATUS_CREATION_PACKAGE" };
    }
    function $() {
      return { type: "WAMO_STATUS_PRODUCT_CATALOG" };
    }
    function P() {
      return { type: "WAMO_STATUS_CUSTOM_AUDIENCE" };
    }
    function N() {
      return { type: "WAMO_STATUS_EU_OBJECTIVE" };
    }
    function M(e, t, n, r, o, a) {
      return (
        a === void 0 && (a = !1),
        {
          isEUAdvertiser: r,
          isLPVEligible: o,
          isValueOptimizationGoal: a,
          objective: e,
          onlyShowCTWAReason: n,
          promotedObjectType: t,
          type: "WAMO_STATUS_OPTIMIZATION_GOAL",
        }
      );
    }
    function w(e) {
      return { type: "DEVICE_PLATFORM", devicePlatform: e };
    }
    function A(e, t) {
      return { type: "BUYING_TYPE", buyingType: e, placementPlugin: t };
    }
    function F() {
      return { type: "WINDOWS_APP" };
    }
    function O() {
      return { type: "OPTIMIZATION_GOAL" };
    }
    function B() {
      return { type: "SPECIAL_ADS_CATEGORY" };
    }
    function W(e) {
      return { type: "OFFER_OPTION", objective: e };
    }
    function q() {
      return { type: "AD_ACCOUNT_TRUST_TIER" };
    }
    function U() {
      return { type: "GENERIC" };
    }
    function V(e) {
      return { type: "CUSTOM", message: e };
    }
    function H() {
      return V(
        s._(/*BTDS*/ "This placement isn't available for iOS 14 ad accounts."),
      );
    }
    function G() {
      return V(
        s._(
          /*BTDS*/ "The placement isn't available because you asked to be opted out of it. Please contact your Meta Sales team if you would like to opt back in.",
        ),
      );
    }
    function z() {
      return { type: "DIRECT_INSTALL" };
    }
    function j() {
      return { type: "DCO" };
    }
    function K() {
      return { type: "OMNICHANNEL" };
    }
    function Q(e) {
      return { type: "WHATSAPP", objective: e };
    }
    function X(e) {
      return { type: "PLAN_TYPE", planType: e };
    }
    function Y() {
      return { type: "IG_LOGIN" };
    }
    function J() {
      return { type: "INSTANT_GAME" };
    }
    function Z() {
      return { type: "PHONE_CALL_LEAD" };
    }
    function ee() {
      return { type: "PHONE_CALL_TRAFFIC" };
    }
    function te() {
      return { type: "IG_PROFILE_VISIT_TRAFFIC" };
    }
    function ne() {
      return { type: "IG_PROFILE_AND_FB_PAGE_VISIT_TRAFFIC" };
    }
    function re() {
      return { type: "FB_PAGE_VISIT_TRAFFIC" };
    }
    function oe() {
      return { type: "PHONE_CALL_CONVERSIONS_OR_SALES" };
    }
    function ae() {
      return { type: "DONATION" };
    }
    function ie() {
      return { type: "GROUP" };
    }
    function le() {
      return { type: "REMINDER" };
    }
    function se() {
      return { type: "IMAGINATION" };
    }
    function ue() {
      return { type: "GROWTH_APP_STORE" };
    }
    function ce() {
      return { type: "INSTAGRAM_LIVE" };
    }
    function de() {
      return { type: "FACEBOOK_LIVE" };
    }
    function me(e, t) {
      return {
        type: "ACCOUNT_CONTROL_PLACEMENT_EXCLUSION",
        ad_account_id: e,
        objective: t,
      };
    }
    function pe(e, t, n, r, o) {
      return {
        type: "OCULUS",
        placementPlugin: e,
        objective: t,
        promotedObjType: n,
        devicePlatforms: r,
        objectStoreURL: o,
      };
    }
    function _e() {
      return { type: "LEAD_FORM_MESSENGER" };
    }
    function fe(e) {
      return { publisherPlatform: e, type: "PUBLISHER_PLATFORM" };
    }
    function ge() {
      return { type: "TARGET_FREQUENCY_AUCTION" };
    }
    function he(e) {
      switch (e) {
        case "GROUP":
          return s._(
            /*BTDS*/ "This placement isn't available for pageless CTWA ads.",
          );
        case "PLATFORM":
          return s._(
            /*BTDS*/ "This platform isn't available for pageless CTWA ads.",
          );
      }
      u(0, 159);
    }
    function ye(e) {
      switch (e) {
        case "GROUP":
          return s._(
            /*BTDS*/ "This placement isn't available with the phone call lead method.",
          );
        case "PLATFORM":
          return s._(
            /*BTDS*/ "This placement isn't available with the phone call lead method.",
          );
      }
      u(0, 159);
    }
    function Ce(e) {
      switch (e) {
        case "GROUP":
          return s._(
            /*BTDS*/ "This placement isn't available for phone call traffic.",
          );
        case "PLATFORM":
          return s._(
            /*BTDS*/ "This placement isn't available for phone call traffic.",
          );
      }
      u(0, 159);
    }
    function be(e) {
      switch (e) {
        case "GROUP":
          return s._(
            /*BTDS*/ "This placement isn't available for phone call conversions and sales.",
          );
        case "PLATFORM":
          return s._(
            /*BTDS*/ "This placement isn't available for phone call conversions and sales.",
          );
      }
      u(0, 159);
    }
    function ve(e) {
      switch (e) {
        case "GROUP":
          return s._(
            /*BTDS*/ "This placement isn't available with an Instagram profile as a conversion location.",
          );
        case "PLATFORM":
          return s._(
            /*BTDS*/ "This platform isn't available with an Instagram profile as a conversion location.",
          );
      }
      u(0, 159);
    }
    function Se(e) {
      switch (e) {
        case "GROUP":
          return s._(
            /*BTDS*/ "This placement isn't available with a Facebook Page as a destination.",
          );
        case "PLATFORM":
          return s._(
            /*BTDS*/ "This platform isn't available with a Facebook Page as a destination.",
          );
      }
      u(0, 159);
    }
    function Re(e) {
      switch (e) {
        case "GROUP":
          return s._(
            /*BTDS*/ "This placement isn't available with an Instagram profile or Facebook Page as a destination.",
          );
        case "PLATFORM":
          return s._(
            /*BTDS*/ "This platform isn't available with an Instagram profile or Facebook Page as a destination.",
          );
      }
      u(0, 159);
    }
    function Le(e) {
      switch (e) {
        case "GROUP":
          return s._(
            /*BTDS*/ "This placement isn't available when logging in with your Instagram account.",
          );
        case "PLATFORM":
          return s._(
            /*BTDS*/ "This platform isn't available when logging in with your Instagram account.",
          );
      }
      u(0, 159);
    }
    function Ee(e) {
      switch (e) {
        case "GROUP":
          return s._(
            /*BTDS*/ "This placement isn't available for Facebook donations.",
          );
        case "PLATFORM":
          return s._(
            /*BTDS*/ "This platform isn't available for Facebook donations.",
          );
      }
      u(0, 159);
    }
    function ke(e) {
      switch (e) {
        case "GROUP":
          return s._(
            /*BTDS*/ "This placement isn't available for Facebook Group promotion.",
          );
        case "PLATFORM":
          return s._(
            /*BTDS*/ "This platform isn't available for Facebook Group promotion.",
          );
      }
      u(0, 159);
    }
    function Ie(e) {
      switch (e) {
        case "GROUP":
          return s._(
            /*BTDS*/ "This placement isn't available for Imagine Ads.",
          );
        case "PLATFORM":
          return s._(/*BTDS*/ "This platform isn't available for Imagine Ads.");
      }
      u(0, 159);
    }
    function Te(e) {
      switch (e) {
        case "GROUP":
          return s._(
            /*BTDS*/ "This placement isn\u2019t available for the selected mobile app store.",
          );
        case "PLATFORM":
          return s._(
            /*BTDS*/ "This platform isn\u2019t available for the selected mobile app store.",
          );
      }
      u(0, 159);
    }
    function De(e) {
      switch (e) {
        case "GROUP":
          return s._(
            /*BTDS*/ "This placement isn\u2019t available for reminder ads.",
          );
        case "PLATFORM":
          return s._(
            /*BTDS*/ "This placement isn\u2019t available for reminder ads.",
          );
      }
      u(0, 159);
    }
    function xe(e) {
      switch (e) {
        case "GROUP":
          return s._(
            /*BTDS*/ "This placement isn't available when promoting an app.",
          );
        case "PLATFORM":
          return s._(
            /*BTDS*/ "This platform isn't available when promoting an app.",
          );
      }
      u(0, 159);
    }
    function $e(e) {
      switch (e) {
        case "GROUP":
          return s._(
            /*BTDS*/ "This placement isn't available with omnichannel ads",
          );
        case "PLATFORM":
          return s._(
            /*BTDS*/ "This platform isn't available with omnichannel ads",
          );
      }
      u(0, 159);
    }
    function Pe(e) {
      switch (e) {
        case "GROUP":
          return s._(
            /*BTDS*/ "This placement isn't available when promoting a mobile app.",
          );
        case "PLATFORM":
          return s._(
            /*BTDS*/ "This platform isn't available when promoting a mobile app.",
          );
      }
      u(0, 159);
    }
    function Ne(e) {
      switch (e) {
        case "GROUP":
          return s._(
            /*BTDS*/ "This placement isn't available when promoting a canvas app.",
          );
        case "PLATFORM":
          return s._(
            /*BTDS*/ "This platform isn't available when promoting a canvas app.",
          );
      }
      u(0, 159);
    }
    function Me(e, t) {
      var n = null;
      switch (
        (t.objective === r("AdsAPIObjectives").LINK_CLICKS
          ? (n = "traffic")
          : t.objective === r("AdsAPIObjectives").CONVERSIONS
            ? (n = "conversion")
            : t.objective === r("AdsAPIObjectives").MESSAGES
              ? (n = "messages")
              : t.objective === r("AdsAPIObjectives").PRODUCT_CATALOG_SALES
                ? (n = "product_catalog_sales")
                : t.objective === r("AdsAPIObjectives").LEAD_GENERATION
                  ? (n = "lead_generation")
                  : t.objective === r("AdsAPIObjectives").STORE_VISITS
                    ? (n = "store_visits")
                    : o("AdsODAXUtils").isODAXSpecificObjective(t.objective) &&
                      (n = o(
                        "AdsODAXObjectiveStrings",
                      ).getObjectiveNameLowerCase(t.objective)),
        n !== null || u(0, 160),
        e)
      ) {
        case "GROUP":
          return s._(
            /*BTDS*/ "This placement isn't available for Messenger {label}.",
            [s._param("label", n)],
          );
        case "PLATFORM":
          return s._(
            /*BTDS*/ "This platform isn't available for Messenger {label} .",
            [s._param("label", n)],
          );
      }
      u(0, 159);
    }
    function we(e, t) {
      switch (e) {
        case "GROUP":
          return s._(
            /*BTDS*/ "This placement is not available with the {objective} objective.",
            [s._param("objective", t.objectiveName)],
          );
        case "PLATFORM":
          return s._(
            /*BTDS*/ "This platform is not available with the {objective} objective.",
            [s._param("objective", t.objectiveName)],
          );
      }
      u(0, 159);
    }
    function Ae(e) {
      switch (e) {
        case r("AdsAPIDevicePlatform").MOBILE:
          return s._(/*BTDS*/ "mobile");
        case r("AdsAPIDevicePlatform").DESKTOP:
          return s._(/*BTDS*/ "desktop");
        case r("AdsAPIDevicePlatform").CONNECTED_TV:
          return s._(/*BTDS*/ "TV");
        default:
          return e;
      }
    }
    function Fe(e, t) {
      var n = Ae(t.devicePlatform);
      switch (e) {
        case "GROUP":
          return s._(
            /*BTDS*/ "This placement isn't available with the {device platform} device type.",
            [s._param("device platform", n)],
          );
        case "PLATFORM":
          return s._(
            /*BTDS*/ "This platform isn't available with the {device platform} device type.",
            [s._param("device platform", n)],
          );
      }
      u(0, 159);
    }
    function Oe(e, t) {
      var n = r("AdsBuyingTypeNames")[t.buyingType],
        o =
          t.placementPlugin ===
          r("AdsPlacementsFacebookReelsOverlayPositionPlugin").key;
      switch (e) {
        case "GROUP":
          return o
            ? s._(
                /*BTDS*/ "This option is not yet available for the {buying type} buying type.",
                [s._param("buying type", n)],
              )
            : s._(
                /*BTDS*/ "This placement isn't available with the {buying type} buying type.",
                [s._param("buying type", n)],
              );
        case "PLATFORM":
          return s._(
            /*BTDS*/ "This platform isn't available with the {buying type} buying type.",
            [s._param("buying type", n)],
          );
      }
      u(0, 159);
    }
    function Be(e) {
      switch (e) {
        case "GROUP":
          return s._(
            /*BTDS*/ "This placement isn't available with a Windows app.",
          );
        case "PLATFORM":
          return s._(
            /*BTDS*/ "This platform isn't available with a Windows app.",
          );
      }
      u(0, 159);
    }
    function We(e) {
      switch (e) {
        case "GROUP":
          return s._(
            /*BTDS*/ "This placement isn't available with the selected performance goal.",
          );
        case "PLATFORM":
          return s._(
            /*BTDS*/ "This placement isn't available with the selected optimization goal.",
          );
      }
      u(0, 159);
    }
    var qe = s._(
      /*BTDS*/ "This placement isn't available with the Special Ads Categories you selected.",
    );
    function Ue(e) {
      switch (e) {
        case "GROUP":
          return qe;
        case "PLATFORM":
          return s._(
            /*BTDS*/ "This placement isn't available with the Special Ads Categories you selected.",
          );
      }
      u(0, 159);
    }
    function Ve(e, t) {
      var n = r("AdsAPIObjectiveStringsStatic").result[t.objective].name;
      switch (e) {
        case "GROUP":
          return s._(
            /*BTDS*/ "This placement isn't available when using an offer with the {objective} objective.",
            [s._param("objective", n)],
          );
        case "PLATFORM":
          return s._(
            /*BTDS*/ "This platform isn't available when using an offer with the {objective} objective.",
            [s._param("objective", n)],
          );
      }
      u(0, 159);
    }
    function He(e, t) {
      switch (e) {
        case "GROUP":
          return s._(
            /*BTDS*/ "This placement is available once you've consistently run ads that comply with our Advertising Policies.",
          );
        case "PLATFORM":
          return s._(
            /*BTDS*/ "This platform is available once you've consistently run ads that comply with our Advertising Policies.",
          );
      }
      u(0, 159);
    }
    function Ge(e, t) {
      switch (e) {
        case "GROUP":
          return s._(/*BTDS*/ "This placement isn't available.");
        case "PLATFORM":
          return s._(/*BTDS*/ "This platform isn't available.");
      }
      u(0, 159);
    }
    function ze(e, t) {
      return t.message;
    }
    function je(e, t) {
      switch (e) {
        case "GROUP":
          return s._(
            /*BTDS*/ "Marketing messages aren't available for this campaign. This placement is available to businesses that meet WhatsApp's requirements for marketing messages.",
          );
        case "PLATFORM":
          return s._(
            /*BTDS*/ "Marketing messages aren't available for this campaign. This platform is available to businesses that meet WhatsApp's requirements for marketing messages.",
          );
      }
      u(0, 159);
    }
    function Ke(e, t) {
      switch (e) {
        case "GROUP":
          return s._(
            /*BTDS*/ "This placement isn't available for direct install.",
          );
        case "PLATFORM":
          return s._(
            /*BTDS*/ "This platform isn't available for direct install.",
          );
      }
      u(0, 159);
    }
    function Qe(e) {
      switch (e) {
        case "GROUP":
          return s._(
            /*BTDS*/ "This placement is not available when using dynamic creative.",
          );
        case "PLATFORM":
          return s._(
            /*BTDS*/ "This platform is not available when using dynamic creative.",
          );
      }
      u(0, 159);
    }
    function Xe() {
      return s._(
        /*BTDS*/ "This placement is only available when your {conversion_location} is set to {messaging_apps} and using {whatsapp} as a destination.",
        [
          s._param(
            "conversion_location",
            d.jsx("strong", {
              children: o("WAMOLabelStrings").CONVERSION_LOCATION,
            }),
          ),
          s._param(
            "messaging_apps",
            d.jsx("strong", {
              children: o("WAMOLabelStrings").MESSAGING_APPS_LOWERCASE,
            }),
          ),
          s._param("whatsapp", o("WAMOLabelStrings").WHATSAPP),
        ],
      );
    }
    Xe.displayName = Xe.name + " [from " + i.id + "]";
    function Ye(e) {
      var t = e.objective;
      switch (t) {
        case r("AdsAPIObjectives").OUTCOME_ENGAGEMENT:
          return s._(
            /*BTDS*/ "This placement is only available when your {conversion_location} is set to {message_destinations}, {onYourAd} or {website}.",
            [
              s._param(
                "conversion_location",
                d.jsx("strong", {
                  children: o("WAMOLabelStrings").CONVERSION_LOCATION,
                }),
              ),
              s._param(
                "message_destinations",
                d.jsx("strong", {
                  children: o("WAMOLabelStrings").MESSAGE_DESTINATIONS,
                }),
              ),
              s._param(
                "onYourAd",
                d.jsx("strong", { children: o("WAMOLabelStrings").ON_YOUR_AD }),
              ),
              s._param(
                "website",
                d.jsx("strong", {
                  children: o("WAMOLabelStrings").WEBSITE_LOWERCASE,
                }),
              ),
            ],
          );
        case r("AdsAPIObjectives").OUTCOME_LEADS:
          return s._(
            /*BTDS*/ "This placement is only available when your {conversion_location} is set to {website} or {whatsapp}.",
            [
              s._param(
                "conversion_location",
                d.jsx("strong", {
                  children: o("WAMOLabelStrings").CONVERSION_LOCATION,
                }),
              ),
              s._param(
                "website",
                d.jsx("strong", {
                  children: o("WAMOLabelStrings").WEBSITE_LOWERCASE,
                }),
              ),
              s._param(
                "whatsapp",
                d.jsx("strong", { children: o("WAMOLabelStrings").WHATSAPP }),
              ),
            ],
          );
        case r("AdsAPIObjectives").OUTCOME_TRAFFIC:
        case r("AdsAPIObjectives").OUTCOME_SALES:
        default:
          return s._(
            /*BTDS*/ "This placement is only available when your {conversion_location} is set to {website} or {message_destinations} and using WhatsApp as a destination.",
            [
              s._param(
                "conversion_location",
                d.jsx("strong", {
                  children: o("WAMOLabelStrings").CONVERSION_LOCATION,
                }),
              ),
              s._param(
                "website",
                d.jsx("strong", {
                  children: o("WAMOLabelStrings").WEBSITE_LOWERCASE,
                }),
              ),
              s._param(
                "message_destinations",
                d.jsx("strong", {
                  children: o("WAMOLabelStrings").MESSAGE_DESTINATIONS,
                }),
              ),
            ],
          );
      }
    }
    function Je() {
      return s._(
        /*BTDS*/ "This placement is only available when using {whatsapp} as your {conversion_location}.",
        [
          s._param(
            "whatsapp",
            d.jsx("strong", { children: o("WAMOLabelStrings").WHATSAPP }),
          ),
          s._param(
            "conversion_location",
            d.jsx("strong", {
              children: o("WAMOLabelStrings").CONVERSION_LOCATION,
            }),
          ),
        ],
      );
    }
    Je.displayName = Je.name + " [from " + i.id + "]";
    function Ze() {
      return s._(
        /*BTDS*/ "Placeholder for placement destination ineligibility reason",
      );
    }
    Ze.displayName = Ze.name + " [from " + i.id + "]";
    function et() {
      return s._(
        /*BTDS*/ "This placement is not available when running a campaign with a Special Ad Category. {=m2}",
        [
          s._implicitParam(
            "=m2",
            d.jsx(r("AHGHelpTrayLink2.react"), {
              helpCenterID:
                o("AdsUniqueMetricsID").ABOUT_SPECIAL_AD_CATEGORY_CMS_ID,
              children: s._(/*BTDS*/ "About choosing a Special Ad Category"),
            }),
          ),
        ],
      );
    }
    et.displayName = et.name + " [from " + i.id + "]";
    function tt() {
      return s._(
        /*BTDS*/ "This placement is not available while using A\/B Testing.",
      );
    }
    tt.displayName = tt.name + " [from " + i.id + "]";
    function nt() {
      return s._(
        /*BTDS*/ "This placement is only available for e-commerce, travel and vehicle catalogs.",
      );
    }
    nt.displayName = nt.name + " [from " + i.id + "]";
    function rt() {
      return s._(
        /*BTDS*/ "This placement is only available when using a manual campaign setup.",
      );
    }
    rt.displayName = rt.name + " [from " + i.id + "]";
    function ot() {
      return s._(/*BTDS*/ "This placement is not available.");
    }
    ot.displayName = ot.name + " [from " + i.id + "]";
    function at() {
      return s._(
        /*BTDS*/ "This placement is only available for the {traffic} objective.",
        [
          s._param(
            "traffic",
            d.jsx("strong", {
              children: o("AdsODAXObjectiveStrings").getObjectiveNameLowerCase(
                r("AdsAPIObjectives").LINK_CLICKS,
              ),
            }),
          ),
        ],
      );
    }
    at.displayName = at.name + " [from " + i.id + "]";
    function it(e) {
      var t = e.isEUAdvertiser,
        n = e.isLPVEligible,
        a = e.isValueOptimizationGoal,
        i = e.objective,
        l = e.onlyShowCTWAReason,
        u = e.promotedObjectType;
      if (a)
        return s._(
          /*BTDS*/ "This placement is not available when your {performance goal} is set to {maximize value of conversions}.",
          [
            s._param(
              "performance goal",
              d.jsx("strong", {
                children: o("WAMOLabelStrings").PERFORMANCE_GOAL,
              }),
            ),
            s._param(
              "maximize value of conversions",
              d.jsx("strong", {
                children: o("WAMOLabelStrings").MAXIMIZE_VALUE_OF_CONVERSIONS,
              }),
            ),
          ],
        );
      if (t)
        return s._(
          /*BTDS*/ "This placement is only available when your {performance goal} is set to {daily unique reach} or {impressions}.",
          [
            s._param(
              "performance goal",
              d.jsx("strong", {
                children: o("WAMOLabelStrings").PERFORMANCE_GOAL,
              }),
            ),
            s._param(
              "daily unique reach",
              d.jsx("strong", {
                children: o("WAMOLabelStrings").DAILY_UNIQUE_REACH,
              }),
            ),
            s._param(
              "impressions",
              d.jsx("strong", { children: o("WAMOLabelStrings").IMPRESSIONS }),
            ),
          ],
        );
      if (l)
        return s._(
          /*BTDS*/ "This placement is only available when your {=m2} is set to {=m4}.",
          [
            s._implicitParam(
              "=m2",
              d.jsx("strong", { children: s._(/*BTDS*/ "performance goal") }),
            ),
            s._implicitParam(
              "=m4",
              d.jsx("strong", {
                children: s._(/*BTDS*/ "maximize number of conversations"),
              }),
            ),
          ],
        );
      var c =
        u === r("AdsPromotedObjectTypes").WEBSITE ||
        u === r("AdsPromotedObjectTypes").PIXEL;
      switch (i) {
        case r("AdsAPIObjectives").LINK_CLICKS:
          if (n) {
            var m;
            return s._(
              /*BTDS*/ "This placement is only available when your {performance goal} is set to {link clicks}, {landing page views}, {daily unique reach} or {number of impressions}.",
              [
                s._param(
                  "performance goal",
                  d.jsx("strong", {
                    children: (m = o("WAMOLabelStrings")).PERFORMANCE_GOAL,
                  }),
                ),
                s._param(
                  "link clicks",
                  d.jsx("strong", { children: m.LINK_CLICKS }),
                ),
                s._param(
                  "landing page views",
                  d.jsx("strong", { children: m.LANDING_PAGE_VIEWS }),
                ),
                s._param(
                  "daily unique reach",
                  d.jsx("strong", { children: m.DAILY_UNIQUE_REACH }),
                ),
                s._param(
                  "number of impressions",
                  d.jsx("strong", { children: m.NUMBER_OF_IMPRESSIONS }),
                ),
              ],
            );
          }
          return s._(
            /*BTDS*/ "This placement isn't available when your {performance goal} is set to {landing page views}.",
            [
              s._param(
                "performance goal",
                d.jsx("strong", {
                  children: o("WAMOLabelStrings").PERFORMANCE_GOAL,
                }),
              ),
              s._param(
                "landing page views",
                d.jsx("strong", {
                  children: o("WAMOLabelStrings").LANDING_PAGE_VIEWS,
                }),
              ),
            ],
          );
        case r("AdsAPIObjectives").OUTCOME_AWARENESS:
          return s._(
            /*BTDS*/ "This placement is only available when your {performance goal} is set to {reach of ads}, {number of impressions} or {ThruPlay views}.",
            [
              s._param(
                "performance goal",
                d.jsx("strong", {
                  children: o("WAMOLabelStrings").PERFORMANCE_GOAL,
                }),
              ),
              s._param(
                "reach of ads",
                d.jsx("strong", {
                  children: o("WAMOLabelStrings").REACH_OF_ADS,
                }),
              ),
              s._param(
                "number of impressions",
                d.jsx("strong", {
                  children: o("WAMOLabelStrings").NUMBER_OF_IMPRESSIONS,
                }),
              ),
              s._param(
                "ThruPlay views",
                d.jsx("strong", {
                  children: o("WAMOLabelStrings").THRUPLAY_VIEWS,
                }),
              ),
            ],
          );
        case r("AdsAPIObjectives").OUTCOME_ENGAGEMENT:
          return c
            ? n
              ? s._(
                  /*BTDS*/ "This placement isn't available when your {performance goal} is set to {maximize number of conversions}.",
                  [
                    s._param(
                      "performance goal",
                      d.jsx("strong", {
                        children: o("WAMOLabelStrings").PERFORMANCE_GOAL,
                      }),
                    ),
                    s._param(
                      "maximize number of conversions",
                      d.jsx("strong", {
                        children:
                          o("WAMOLabelStrings").MAXIMIZE_NUMBER_OF_CONVERSIONS,
                      }),
                    ),
                  ],
                )
              : s._(
                  /*BTDS*/ "This placement is only available when your {performance goal} is set to {link clicks}, {daily unique reach} or {number of impressions}.",
                  [
                    s._param(
                      "performance goal",
                      d.jsx("strong", {
                        children: o("WAMOLabelStrings").PERFORMANCE_GOAL,
                      }),
                    ),
                    s._param(
                      "link clicks",
                      d.jsx("strong", {
                        children: o("WAMOLabelStrings").LINK_CLICKS,
                      }),
                    ),
                    s._param(
                      "daily unique reach",
                      d.jsx("strong", {
                        children: o("WAMOLabelStrings").DAILY_UNIQUE_REACH,
                      }),
                    ),
                    s._param(
                      "number of impressions",
                      d.jsx("strong", {
                        children: o("WAMOLabelStrings").NUMBER_OF_IMPRESSIONS,
                      }),
                    ),
                  ],
                )
            : s._(
                /*BTDS*/ "This placement is only available when your {performance goal} is set to {maximize ThruPlay views}.",
                [
                  s._param(
                    "performance goal",
                    d.jsx("strong", {
                      children: o("WAMOLabelStrings").PERFORMANCE_GOAL,
                    }),
                  ),
                  s._param(
                    "maximize ThruPlay views",
                    d.jsx("strong", {
                      children: o("WAMOLabelStrings").MAXIMIZE_THRUPLAY_VIEWS,
                    }),
                  ),
                ],
              );
        case r("AdsAPIObjectives").OUTCOME_LEADS:
          if (n) {
            var m;
            return s._(
              /*BTDS*/ "This placement is only available when your {performance goal} is set to {landing page views}, {link clicks}, {daily unique reach} or {number of impressions}.",
              [
                s._param(
                  "performance goal",
                  d.jsx("strong", {
                    children: (m = o("WAMOLabelStrings")).PERFORMANCE_GOAL,
                  }),
                ),
                s._param(
                  "landing page views",
                  d.jsx("strong", { children: m.LANDING_PAGE_VIEWS }),
                ),
                s._param(
                  "link clicks",
                  d.jsx("strong", { children: m.LINK_CLICKS }),
                ),
                s._param(
                  "daily unique reach",
                  d.jsx("strong", { children: m.DAILY_UNIQUE_REACH }),
                ),
                s._param(
                  "number of impressions",
                  d.jsx("strong", { children: m.NUMBER_OF_IMPRESSIONS }),
                ),
              ],
            );
          }
          return s._(
            /*BTDS*/ "This placement is only available when your {performance goal} is set to {link clicks}, {daily unique reach} or {number of impressions}.",
            [
              s._param(
                "performance goal",
                d.jsx("strong", {
                  children: o("WAMOLabelStrings").PERFORMANCE_GOAL,
                }),
              ),
              s._param(
                "link clicks",
                d.jsx("strong", {
                  children: o("WAMOLabelStrings").LINK_CLICKS,
                }),
              ),
              s._param(
                "daily unique reach",
                d.jsx("strong", {
                  children: o("WAMOLabelStrings").DAILY_UNIQUE_REACH,
                }),
              ),
              s._param(
                "number of impressions",
                d.jsx("strong", {
                  children: o("WAMOLabelStrings").NUMBER_OF_IMPRESSIONS,
                }),
              ),
            ],
          );
        case r("AdsAPIObjectives").OUTCOME_SALES:
          if (c) {
            if (n) {
              var m;
              return s._(
                /*BTDS*/ "This placement is only available when your {performance goal} is set to {landing page views}, {link clicks}, {daily unique reach} or {number of impressions}.",
                [
                  s._param(
                    "performance goal",
                    d.jsx("strong", {
                      children: (m = o("WAMOLabelStrings")).PERFORMANCE_GOAL,
                    }),
                  ),
                  s._param(
                    "landing page views",
                    d.jsx("strong", { children: m.LANDING_PAGE_VIEWS }),
                  ),
                  s._param(
                    "link clicks",
                    d.jsx("strong", { children: m.LINK_CLICKS }),
                  ),
                  s._param(
                    "daily unique reach",
                    d.jsx("strong", { children: m.DAILY_UNIQUE_REACH }),
                  ),
                  s._param(
                    "number of impressions",
                    d.jsx("strong", { children: m.NUMBER_OF_IMPRESSIONS }),
                  ),
                ],
              );
            }
            return s._(
              /*BTDS*/ "This placement is only available when your {performance goal} is set to {number of link clicks}, {daily unique reach} or {number of impressions}.",
              [
                s._param(
                  "performance goal",
                  d.jsx("strong", {
                    children: o("WAMOLabelStrings").PERFORMANCE_GOAL,
                  }),
                ),
                s._param(
                  "number of link clicks",
                  d.jsx("strong", {
                    children: o("WAMOLabelStrings").NUMBER_OF_LINK_CLICKS,
                  }),
                ),
                s._param(
                  "daily unique reach",
                  d.jsx("strong", {
                    children: o("WAMOLabelStrings").DAILY_UNIQUE_REACH,
                  }),
                ),
                s._param(
                  "number of impressions",
                  d.jsx("strong", {
                    children: o("WAMOLabelStrings").NUMBER_OF_IMPRESSIONS,
                  }),
                ),
              ],
            );
          }
          return s._(
            /*BTDS*/ "This placement isn't available when your {performance goal} is set to {maximize number of conversions}.",
            [
              s._param(
                "performance goal",
                d.jsx("strong", {
                  children: o("WAMOLabelStrings").PERFORMANCE_GOAL,
                }),
              ),
              s._param(
                "maximize number of conversions",
                d.jsx("strong", {
                  children:
                    o("WAMOLabelStrings").MAXIMIZE_NUMBER_OF_CONVERSIONS,
                }),
              ),
            ],
          );
        default:
          if (n) {
            var m;
            return s._(
              /*BTDS*/ "This placement is only available when your {performance goal} is set to {link clicks}, {landing page views}, {daily unique reach} or {number of impressions}.",
              [
                s._param(
                  "performance goal",
                  d.jsx("strong", {
                    children: (m = o("WAMOLabelStrings")).PERFORMANCE_GOAL,
                  }),
                ),
                s._param(
                  "link clicks",
                  d.jsx("strong", { children: m.LINK_CLICKS }),
                ),
                s._param(
                  "landing page views",
                  d.jsx("strong", { children: m.LANDING_PAGE_VIEWS }),
                ),
                s._param(
                  "daily unique reach",
                  d.jsx("strong", { children: m.DAILY_UNIQUE_REACH }),
                ),
                s._param(
                  "number of impressions",
                  d.jsx("strong", { children: m.NUMBER_OF_IMPRESSIONS }),
                ),
              ],
            );
          }
          return s._(
            /*BTDS*/ "This placement is only available when your {performance goal} is set to {link clicks}, {daily unique reach} or {number of impressions}.",
            [
              s._param(
                "performance goal",
                d.jsx("strong", {
                  children: o("WAMOLabelStrings").PERFORMANCE_GOAL,
                }),
              ),
              s._param(
                "link clicks",
                d.jsx("strong", {
                  children: o("WAMOLabelStrings").LINK_CLICKS,
                }),
              ),
              s._param(
                "daily unique reach",
                d.jsx("strong", {
                  children: o("WAMOLabelStrings").DAILY_UNIQUE_REACH,
                }),
              ),
              s._param(
                "number of impressions",
                d.jsx("strong", {
                  children: o("WAMOLabelStrings").NUMBER_OF_IMPRESSIONS,
                }),
              ),
            ],
          );
      }
    }
    function lt(e, t) {
      var n = null;
      switch (
        (t.objective === r("AdsAPIObjectives").LINK_CLICKS
          ? (n = "traffic")
          : t.objective === r("AdsAPIObjectives").CONVERSIONS
            ? (n = "conversion")
            : t.objective === r("AdsAPIObjectives").MESSAGES
              ? (n = "messages")
              : o("AdsODAXUtils").isODAXSpecificObjective(t.objective) &&
                (n = o("AdsODAXObjectiveStrings").getObjectiveNameLowerCase(
                  t.objective,
                )),
        n !== null || u(0, 161),
        e)
      ) {
        case "GROUP":
          return s._(
            /*BTDS*/ "This placement isn't available for WhatsApp {label}.",
            [s._param("label", n)],
          );
        case "PLATFORM":
          return s._(
            /*BTDS*/ "This platform isn't available for WhatsApp {label} .",
            [s._param("label", n)],
          );
      }
      u(0, 159);
    }
    function st(e, t) {
      var n = null;
      switch (
        (t.objective === r("AdsAPIObjectives").MESSAGES ||
        t.objective === r("AdsAPIObjectives").CONVERSIONS
          ? (n = "messages")
          : t.objective === r("AdsAPIObjectives").LINK_CLICKS
            ? (n = "traffic")
            : o("AdsODAXUtils").isODAXSpecificObjective(t.objective) &&
              (n = o("AdsODAXObjectiveStrings").getObjectiveNameLowerCase(
                t.objective,
              )),
        n !== null || u(0, 19516),
        e)
      ) {
        case "GROUP":
          return s._(
            /*BTDS*/ "This placement isn't available for Instagram {label}.",
            [s._param("label", n)],
          );
        case "PLATFORM":
          return s._(
            /*BTDS*/ "This platform isn't available for Instagram {label} .",
            [s._param("label", n)],
          );
      }
      u(0, 159);
    }
    function ut(e, t) {
      var n = null;
      switch (
        ((t.objective === r("AdsAPIObjectives").OUTCOME_LEADS ||
          t.objective === r("AdsAPIObjectives").LEAD_GENERATION) &&
          (n = "lead generation"),
        n !== null || u(0, 65214),
        e)
      ) {
        case "GROUP":
          return s._(
            /*BTDS*/ "This placement isn't available for Instagram {label}.",
            [s._param("label", n)],
          );
        case "PLATFORM":
          return s._(
            /*BTDS*/ "This platform isn't available for Instagram {label}.",
            [s._param("label", n)],
          );
      }
      u(0, 159);
    }
    function ct(e, t) {
      var n = m[t.planType];
      switch (e) {
        case "GROUP":
          return s._(
            /*BTDS*/ "This placement isn't available with the {plan type} plan type.",
            [s._param("plan type", n)],
          );
        case "PLATFORM":
          return s._(
            /*BTDS*/ "This platform isn't available with the {plan type} plan type.",
            [s._param("plan type", n)],
          );
      }
      u(0, 159);
    }
    function dt(e) {
      switch (e) {
        case "GROUP":
          return s._(
            /*BTDS*/ "This placement isn't available when promoting an Instant Game.",
          );
        case "PLATFORM":
          return s._(
            /*BTDS*/ "This platform isn't available when promoting an Instant Game.",
          );
      }
      u(0, 159);
    }
    function mt(e, t) {
      switch (e) {
        case "GROUP":
          switch (t.placementPlugin) {
            case "oculus/vr_apps":
            case "oculus/rewarded_video":
              return s._(
                /*BTDS*/ "This placement is only available for the web conversions, link clicks, reach, video views and brand awareness objectives.",
              );
            default:
              return s._(
                /*BTDS*/ "This placement isn't available with the current ad setup.",
              );
          }
        case "PLATFORM":
          switch (t.placementPlugin) {
            case "oculus/vr_apps":
              return s._(
                /*BTDS*/ "This placement is only available when advertising a website, brand or Oculus app.",
              );
            case "oculus/rewarded_video":
              return s._(
                /*BTDS*/ "This placement is only available when advertising a website, brand, video or Oculus app.",
              );
            default:
              return s._(
                /*BTDS*/ "This placement isn't available with the current ad setup.",
              );
          }
      }
      u(0, 159);
    }
    function pt(e, t) {
      var n;
      switch (e) {
        case "GROUP":
          n = o("AdsBwIConstants").inelligiblePlacementGroupLevelReasonBwI(t);
          break;
        case "PLATFORM":
          n =
            o("AdsBwIConstants").inelligiblePlacementPlatformLevelReasonBwI(t);
          break;
      }
      if (n != null) return n;
      u(0, 159);
    }
    function _t(e, t) {
      switch (e) {
        case "GROUP":
        case "PLATFORM":
          return o(
            "AdAccountBusinessConstraintsPerObjectivePlacementControlsGatingUtils",
          ).isAdAccountBusinessConstraintsPerObjectivePlacementControlsEnabled() &&
            t.objective != null
            ? o(
                "AdsTargetingAccountPlacementControlInfoConstants",
              ).accountControlInfoPlacementPositionObjectiveIneligibilityReason(
                t.ad_account_id,
                t.objective,
              )
            : o(
                "AdsTargetingAccountPlacementControlInfoConstants",
              ).accountControlInfoPlacementPositionIneligibilityReason(
                t.ad_account_id,
              );
      }
      u(0, 159);
    }
    function ft(e) {
      switch (e) {
        case "GROUP":
        case "PLATFORM":
          return s._(
            /*BTDS*/ "This placement isn't available with the Instant forms and Messenger conversion location.",
          );
      }
      u(0, 159);
    }
    function gt(e) {
      switch (e) {
        case "GROUP":
        case "PLATFORM":
          return s._(
            /*BTDS*/ "This placement selection cannot be edited because of your placement selection for your ad set.",
          );
      }
      u(0, 159);
    }
    function ht(e) {
      switch (e) {
        case "GROUP":
        case "PLATFORM":
          return s._(
            /*BTDS*/ "This platform isn't available with an Instagram live video as a conversion location.",
          );
      }
      u(0, 159);
    }
    function yt(e) {
      switch (e) {
        case "GROUP":
        case "PLATFORM":
          return s._(
            /*BTDS*/ "This placement isn't available for a Facebook live video destination.",
          );
      }
      u(0, 159);
    }
    function Ct(e) {
      switch (e) {
        case "GROUP":
          return s._(
            /*BTDS*/ "This placement isn't available when using Target Frequency.",
          );
        case "PLATFORM":
          return s._(
            /*BTDS*/ "This platform isn't available when using Target Frequency.",
          );
      }
      u(0, 159);
    }
    function bt(e) {
      switch (e) {
        case "GROUP":
          return s._(
            /*BTDS*/ "This placement isn't available for Reels trending ads.",
          );
        case "PLATFORM":
          return s._(
            /*BTDS*/ "This platform isn't available for Reels trending ads.",
          );
      }
      u(0, 159);
    }
    function vt() {
      return s._(
        /*BTDS*/ "This placement isn't available for Ads burst campaigns.",
      );
    }
    vt.displayName = vt.name + " [from " + i.id + "]";
    function St() {
      return s._(
        /*BTDS*/ "This placement is not available when using {Ad sequencing}.",
        [
          s._param(
            "Ad sequencing",
            d.jsx("strong", { children: "Ad sequencing" }),
          ),
        ],
      );
    }
    St.displayName = St.name + " [from " + i.id + "]";
    function Rt(e) {
      switch (e) {
        case "GROUP":
        case "PLATFORM":
          return s._(
            /*BTDS*/ "The ad has multiple media and some with placement customizations. Please delete the placement customizations to modify this.",
          );
      }
      u(0, 159);
    }
    function Lt(e, t) {
      var n = t.parentPositionPluginKey;
      return n == null
        ? o("AdsPlacementParentPositionTooltipUtils")
            .defaultTextForNoParentPlacements
        : e === "GROUP" || e === "PLATFORM"
          ? o(
              "AdsPlacementParentPositionTooltipUtils",
            ).getParentPlacementRequirementTooltip(n)
          : (function () {
              throw Error(
                "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                  e,
              );
            })();
    }
    function Et(e, t, n) {
      switch (t.type) {
        case "M2_MMC_PRESENT_IN_ADGROUP":
          return Rt(e);
        case "PARENT_NOT_IN_TARGET_SPEC_OR_SOFT_OPT_OUT_SPEC":
          return Lt(e, t);
        case "APP":
          return xe(e);
        case "MOBILE_APP":
          return Pe(e);
        case "CANVAS_APP":
          return Ne(e);
        case "MESSENGER":
          return Me(e, t);
        case "OBJECTIVE":
          return we(e, t);
        case "DEVICE_PLATFORM":
          return Fe(e, t);
        case "BUYING_TYPE":
          return Oe(e, t);
        case "WINDOWS_APP":
          return Be(e);
        case "OPTIMIZATION_GOAL":
          return We(e);
        case "SPECIAL_ADS_CATEGORY":
          return Ue(e);
        case "OFFER_OPTION":
          return Ve(e, t);
        case "AD_ACCOUNT_TRUST_TIER":
          return He(e, t);
        case "GENERIC":
          return Ge(e, t);
        case "GROUP":
          return ke(e);
        case "REMINDER":
          return De(e);
        case "IMAGINATION":
          return Ie(e);
        case "CUSTOM":
          return ze(e, t);
        case "DIRECT_INSTALL":
          return Ke(e, t);
        case "DCO":
          return Qe(e);
        case "WHATSAPP":
          return lt(e, t);
        case "PLAN_TYPE":
          return ct(e, t);
        case "INSTANT_GAME":
          return dt(e);
        case "OMNICHANNEL":
          return $e(e);
        case "INSTAGRAM":
          return st(e, t);
        case "INSTAGRAM_DIRECT_LEAD_GEN":
          return ut(e, t);
        case "IG_LOGIN":
          return Le(e);
        case "IG_PROFILE_VISIT_TRAFFIC":
          return ve(e);
        case "FB_PAGE_VISIT_TRAFFIC":
          return Se(e);
        case "IG_PROFILE_AND_FB_PAGE_VISIT_TRAFFIC":
          return Re(e);
        case "PHONE_CALL_LEAD":
          return ye(e);
        case "PHONE_CALL_TRAFFIC":
          return Ce(e);
        case "PHONE_CALL_CONVERSIONS_OR_SALES":
          return be(e);
        case "OCULUS":
          return mt(e, t);
        case "DONATION":
          return Ee(e);
        case "GROWTH_APP_STORE":
          return Te(e);
        case "BWI":
          return pt(e, n);
        case "ACCOUNT_CONTROL_PLACEMENT_EXCLUSION":
          return _t(e, t);
        case "WAMO_STATUS_DESTINATION":
          return Xe();
        case "WAMO_STATUS_CONVERSION_LOCATION":
          return Ye(t);
        case "WAMO_STATUS_DESTINATION_IN_LEAD_OBJECTIVE":
          return Je();
        case "PROMO_CHANNEL_DESTINATION":
          return Ze();
        case "WAMO_STATUS_SAC":
          return et();
        case "WAMO_STATUS_AB_TEST":
          return tt();
        case "WAMO_STATUS_PRODUCT_CATALOG":
          return nt();
        case "WAMO_STATUS_CREATION_PACKAGE":
          return rt();
        case "WAMO_STATUS_CUSTOM_AUDIENCE":
          return ot();
        case "WAMO_STATUS_EU_OBJECTIVE":
          return at();
        case "WAMO_STATUS_OPTIMIZATION_GOAL":
          return it(t);
        case "PAGELESS_CTWA_ADS":
          return he(e);
        case "LEAD_FORM_MESSENGER":
          return ft(e);
        case "PUBLISHER_PLATFORM":
          return gt(e);
        case "INSTAGRAM_LIVE":
          return ht(e);
        case "FACEBOOK_LIVE":
          return yt(e);
        case "MM_ACTIVATION_INELIGIBLE":
          return t.message;
        case "MM_NOT_HIGH_TRUST":
          return je(e, t);
        case "TARGET_FREQUENCY_AUCTION":
          return Ct(e);
        case "REELS_TRENDING_ADS":
          return bt(e);
        case "AD_SEQUENCING":
          return St();
        case "META_MOMENT_MAKER":
          return vt();
      }
      u(0, 22846);
    }
    ((l.createAdSequencingReason = p),
      (l.createReelsTrendingAdsReason = _),
      (l.createMMNotHighTrustReason = f),
      (l.createMetaMomentMakerReason = g),
      (l.createAppReason = h),
      (l.createMobileAppReason = y),
      (l.createCanvasAppReason = C),
      (l.createMessengerReason = b),
      (l.createInstagramDirectReason = v),
      (l.createInstagramLeadGenReason = S),
      (l.createObjectiveReason = R),
      (l.createWAMOStatusDestinationReason = L),
      (l.createWAMOStatusConversionLocationReason = E),
      (l.createWAMOStatusDestinationInLeadObjectiveReason = k),
      (l.createPromoChannelDestinationReason = I),
      (l.createWAMOStatusSACReason = T),
      (l.createWAMOStatusABTestReason = D),
      (l.createWAMOStatusCreationPackageReason = x),
      (l.createWAMOStatusProductCatalogReason = $),
      (l.createWAMOStatusCustomAudienceReason = P),
      (l.createWAMOStatusEUObjectiveReason = N),
      (l.createWAMOIneligibilityOptimizationGoalReason = M),
      (l.createDevicePlatformReason = w),
      (l.createBuyingTypeReason = A),
      (l.createWindowsAppReason = F),
      (l.createOptimizationGoalReason = O),
      (l.createSACReason = B),
      (l.createOfferOptionReason = W),
      (l.createAdAccountTrustTierReason = q),
      (l.createGenericReason = U),
      (l.createCustomReason = V),
      (l.createIOS14Reason = H),
      (l.createOptOutReason = G),
      (l.createDirectInstallReason = z),
      (l.createDCOReason = j),
      (l.createOmnichannelReason = K),
      (l.createWhatsAppReason = Q),
      (l.createPlanTypeReason = X),
      (l.createIGLoginReason = Y),
      (l.createInstantGameReason = J),
      (l.createPhoneCallLeadReason = Z),
      (l.createPhoneCallTrafficReason = ee),
      (l.createIGProfileVisitTrafficReason = te),
      (l.createIGProfileAndFBPageVisitTrafficReason = ne),
      (l.createFBPageVisitTrafficReason = re),
      (l.createPhoneCallConversionsOrSalesReason = oe),
      (l.createDonationReason = ae),
      (l.createGroupPromotionReason = ie),
      (l.createReminderPromotionReason = le),
      (l.createImaginationReason = se),
      (l.createGrowthAppStoreReason = ue),
      (l.createInstagramLiveReason = ce),
      (l.createFacebookLiveReason = de),
      (l.createAccountControlPlacementExclusionReason = me),
      (l.createOculusReason = pe),
      (l.createLeadFormMessengerReason = _e),
      (l.createPublisherPlatformReason = fe),
      (l.createTargetFrequencyAuctionReason = ge),
      (l.contentForSpecialAdsCategoryReason = qe),
      (l.renderWAMOStatusDestinationInLeadObjectiveReason = Je),
      (l.renderWAMOEUObjectiveReason = at),
      (l.renderReelsTrendingAdsReason = bt),
      (l.renderM2MMCINAdgroup = Rt),
      (l.renderPlacementParentNotInTargetSpecOrSoftOptOutSpec = Lt),
      (l.renderReason = Et));
  },
  226,
);
