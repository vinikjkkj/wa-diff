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
    "AdsPlacementIneligibilityTrafficReasons",
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
        (e.PREMIUM_FACEBOOK_INSTREAM_VIDEO_TRP = s._(/*BTDS*/ "")),
        (e.REACH_AND_FREQUENCY = s._(/*BTDS*/ "")),
        (e.REACH_AND_FREQUENCY_INSERTION_ORDER = s._(/*BTDS*/ "")),
        (e.REACH_AND_FREQUENCY_INSERTION_ORDER_GENERAL = s._(/*BTDS*/ "")),
        (e.TRP = s._(/*BTDS*/ "")),
        (e.META_MOMENT_MAKER = s._(/*BTDS*/ "")),
        (e.REELS_TRENDING_ADS = s._(/*BTDS*/ "")),
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
      return { type: "WAMO_STATUS_SIEP" };
    }
    function x() {
      return { type: "WAMO_STATUS_PRODUCT_CATALOG" };
    }
    function $() {
      return { type: "WAMO_STATUS_EU_OBJECTIVE" };
    }
    function P(e, t, n, r, o, a, i, l) {
      return (
        a === void 0 && (a = !1),
        i === void 0 && (i = !1),
        l === void 0 && (l = !1),
        babelHelpers.extends({}, l ? { isAppPromotionLinkClicks: l } : {}, {
          isEUAdvertiser: r,
          isLPVEligible: o,
          isQualityLeadOptimizationGoal: i,
          isValueOptimizationGoal: a,
          objective: e,
          onlyShowCTWAReason: n,
          promotedObjectType: t,
          type: "WAMO_STATUS_OPTIMIZATION_GOAL",
        })
      );
    }
    function N(e) {
      return { type: "DEVICE_PLATFORM", devicePlatform: e };
    }
    function M(e, t) {
      return { type: "BUYING_TYPE", buyingType: e, placementPlugin: t };
    }
    function w() {
      return { type: "WINDOWS_APP" };
    }
    function A() {
      return { type: "OPTIMIZATION_GOAL" };
    }
    function F() {
      return { type: "SPECIAL_ADS_CATEGORY" };
    }
    function O(e) {
      return { type: "OFFER_OPTION", objective: e };
    }
    function B() {
      return { type: "AD_ACCOUNT_TRUST_TIER" };
    }
    function W(e) {
      return { type: "CUSTOM", message: e };
    }
    function q() {
      return W(s._(/*BTDS*/ ""));
    }
    function U() {
      return { type: "DIRECT_INSTALL" };
    }
    function V() {
      return { type: "DCO" };
    }
    function H() {
      return { type: "OMNICHANNEL" };
    }
    function G(e) {
      return { type: "WHATSAPP", objective: e };
    }
    function z() {
      return { type: "IG_LOGIN" };
    }
    function j() {
      return { type: "INSTANT_GAME" };
    }
    function K() {
      return { type: "PHONE_CALL_LEAD" };
    }
    function Q() {
      return { type: "PHONE_CALL_TRAFFIC" };
    }
    function X() {
      return { type: "PHONE_CALL_CONVERSIONS_OR_SALES" };
    }
    function Y() {
      return { type: "DONATION" };
    }
    function J() {
      return { type: "GROUP" };
    }
    function Z() {
      return { type: "REMINDER" };
    }
    function ee() {
      return { type: "IMAGINATION" };
    }
    function te() {
      return { type: "GROWTH_APP_STORE" };
    }
    function ne() {
      return { type: "INSTAGRAM_LIVE" };
    }
    function re() {
      return { type: "FACEBOOK_LIVE" };
    }
    function oe(e, t) {
      return {
        type: "ACCOUNT_CONTROL_PLACEMENT_EXCLUSION",
        ad_account_id: e,
        objective: t,
      };
    }
    function ae(e, t, n, r, o) {
      return {
        type: "OCULUS",
        placementPlugin: e,
        objective: t,
        promotedObjType: n,
        devicePlatforms: r,
        objectStoreURL: o,
      };
    }
    function ie() {
      return { type: "LEAD_FORM_MESSENGER" };
    }
    function le() {
      return { type: "TARGET_FREQUENCY_AUCTION" };
    }
    function se(e) {
      switch (e) {
        case "GROUP":
          return s._(/*BTDS*/ "");
        case "PLATFORM":
          return s._(/*BTDS*/ "");
      }
      u(0, 159);
    }
    function ue(e) {
      switch (e) {
        case "GROUP":
          return s._(/*BTDS*/ "");
        case "PLATFORM":
          return s._(/*BTDS*/ "");
      }
      u(0, 159);
    }
    function ce(e) {
      switch (e) {
        case "GROUP":
          return s._(/*BTDS*/ "");
        case "PLATFORM":
          return s._(/*BTDS*/ "");
      }
      u(0, 159);
    }
    function de(e) {
      switch (e) {
        case "GROUP":
          return s._(/*BTDS*/ "");
        case "PLATFORM":
          return s._(/*BTDS*/ "");
      }
      u(0, 159);
    }
    function me(e) {
      switch (e) {
        case "GROUP":
          return s._(/*BTDS*/ "");
        case "PLATFORM":
          return s._(/*BTDS*/ "");
      }
      u(0, 159);
    }
    function pe(e) {
      switch (e) {
        case "GROUP":
          return s._(/*BTDS*/ "");
        case "PLATFORM":
          return s._(/*BTDS*/ "");
      }
      u(0, 159);
    }
    function _e(e) {
      switch (e) {
        case "GROUP":
          return s._(/*BTDS*/ "");
        case "PLATFORM":
          return s._(/*BTDS*/ "");
      }
      u(0, 159);
    }
    function fe(e) {
      switch (e) {
        case "GROUP":
          return s._(/*BTDS*/ "");
        case "PLATFORM":
          return s._(/*BTDS*/ "");
      }
      u(0, 159);
    }
    function ge(e) {
      switch (e) {
        case "GROUP":
          return s._(/*BTDS*/ "");
        case "PLATFORM":
          return s._(/*BTDS*/ "");
      }
      u(0, 159);
    }
    function he(e) {
      switch (e) {
        case "GROUP":
          return s._(/*BTDS*/ "");
        case "PLATFORM":
          return s._(/*BTDS*/ "");
      }
      u(0, 159);
    }
    function ye(e) {
      switch (e) {
        case "GROUP":
          return s._(/*BTDS*/ "");
        case "PLATFORM":
          return s._(/*BTDS*/ "");
      }
      u(0, 159);
    }
    function Ce(e) {
      switch (e) {
        case "GROUP":
          return s._(/*BTDS*/ "");
        case "PLATFORM":
          return s._(/*BTDS*/ "");
      }
      u(0, 159);
    }
    function be(e) {
      switch (e) {
        case "GROUP":
          return s._(/*BTDS*/ "");
        case "PLATFORM":
          return s._(/*BTDS*/ "");
      }
      u(0, 159);
    }
    function ve(e) {
      switch (e) {
        case "GROUP":
          return s._(/*BTDS*/ "");
        case "PLATFORM":
          return s._(/*BTDS*/ "");
      }
      u(0, 159);
    }
    function Se(e) {
      switch (e) {
        case "GROUP":
          return s._(/*BTDS*/ "");
        case "PLATFORM":
          return s._(/*BTDS*/ "");
      }
      u(0, 159);
    }
    function Re(e) {
      switch (e) {
        case "GROUP":
          return s._(/*BTDS*/ "");
        case "PLATFORM":
          return s._(/*BTDS*/ "");
      }
      u(0, 159);
    }
    function Le(e) {
      switch (e) {
        case "GROUP":
          return s._(/*BTDS*/ "");
        case "PLATFORM":
          return s._(/*BTDS*/ "");
      }
      u(0, 159);
    }
    function Ee(e, t) {
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
          return s._(/*BTDS*/ "", [s._param("label", n)]);
        case "PLATFORM":
          return s._(/*BTDS*/ "", [s._param("label", n)]);
      }
      u(0, 159);
    }
    function ke(e, t) {
      switch (e) {
        case "GROUP":
          return s._(/*BTDS*/ "", [s._param("objective", t.objectiveName)]);
        case "PLATFORM":
          return s._(/*BTDS*/ "", [s._param("objective", t.objectiveName)]);
      }
      u(0, 159);
    }
    function Ie(e) {
      switch (e) {
        case r("AdsAPIDevicePlatform").MOBILE:
          return s._(/*BTDS*/ "");
        case r("AdsAPIDevicePlatform").DESKTOP:
          return s._(/*BTDS*/ "");
        case r("AdsAPIDevicePlatform").CONNECTED_TV:
          return s._(/*BTDS*/ "");
        default:
          return e;
      }
    }
    function Te(e, t) {
      var n = Ie(t.devicePlatform);
      switch (e) {
        case "GROUP":
          return s._(/*BTDS*/ "", [s._param("device platform", n)]);
        case "PLATFORM":
          return s._(/*BTDS*/ "", [s._param("device platform", n)]);
      }
      u(0, 159);
    }
    function De(e, t) {
      var n = r("AdsBuyingTypeNames")[t.buyingType],
        o =
          t.placementPlugin ===
          r("AdsPlacementsFacebookReelsOverlayPositionPlugin").key;
      switch (e) {
        case "GROUP":
          return o
            ? s._(/*BTDS*/ "", [s._param("buying type", n)])
            : s._(/*BTDS*/ "", [s._param("buying type", n)]);
        case "PLATFORM":
          return s._(/*BTDS*/ "", [s._param("buying type", n)]);
      }
      u(0, 159);
    }
    function xe(e) {
      switch (e) {
        case "GROUP":
          return s._(/*BTDS*/ "");
        case "PLATFORM":
          return s._(/*BTDS*/ "");
      }
      u(0, 159);
    }
    function $e(e) {
      switch (e) {
        case "GROUP":
          return s._(/*BTDS*/ "");
        case "PLATFORM":
          return s._(/*BTDS*/ "");
      }
      u(0, 159);
    }
    var Pe = s._(/*BTDS*/ "");
    function Ne(e) {
      switch (e) {
        case "GROUP":
          return Pe;
        case "PLATFORM":
          return s._(/*BTDS*/ "");
      }
      u(0, 159);
    }
    function Me(e, t) {
      var n = r("AdsAPIObjectiveStringsStatic").result[t.objective].name;
      switch (e) {
        case "GROUP":
          return s._(/*BTDS*/ "", [s._param("objective", n)]);
        case "PLATFORM":
          return s._(/*BTDS*/ "", [s._param("objective", n)]);
      }
      u(0, 159);
    }
    function we(e, t) {
      switch (e) {
        case "GROUP":
          return s._(/*BTDS*/ "");
        case "PLATFORM":
          return s._(/*BTDS*/ "");
      }
      u(0, 159);
    }
    function Ae(e, t) {
      switch (e) {
        case "GROUP":
          return s._(/*BTDS*/ "");
        case "PLATFORM":
          return s._(/*BTDS*/ "");
      }
      u(0, 159);
    }
    function Fe(e, t) {
      return t.message;
    }
    function Oe(e, t) {
      switch (e) {
        case "GROUP":
          return s._(/*BTDS*/ "");
        case "PLATFORM":
          return s._(/*BTDS*/ "");
      }
      u(0, 159);
    }
    function Be(e, t) {
      switch (e) {
        case "GROUP":
          return s._(/*BTDS*/ "");
        case "PLATFORM":
          return s._(/*BTDS*/ "");
      }
      u(0, 159);
    }
    function We(e) {
      switch (e) {
        case "GROUP":
          return s._(/*BTDS*/ "");
        case "PLATFORM":
          return s._(/*BTDS*/ "");
      }
      u(0, 159);
    }
    function qe() {
      return s._(/*BTDS*/ "", [
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
      ]);
    }
    qe.displayName = qe.name + " [from " + i.id + "]";
    function Ue(e) {
      var t = e.objective;
      switch (t) {
        case r("AdsAPIObjectives").OUTCOME_ENGAGEMENT:
          return s._(/*BTDS*/ "", [
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
          ]);
        case r("AdsAPIObjectives").OUTCOME_LEADS:
          return s._(/*BTDS*/ "", [
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
          ]);
        case r("AdsAPIObjectives").OUTCOME_TRAFFIC:
        case r("AdsAPIObjectives").OUTCOME_SALES:
        default:
          return s._(/*BTDS*/ "", [
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
          ]);
      }
    }
    function Ve() {
      return s._(/*BTDS*/ "", [
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
      ]);
    }
    Ve.displayName = Ve.name + " [from " + i.id + "]";
    function He() {
      return s._(/*BTDS*/ "");
    }
    He.displayName = He.name + " [from " + i.id + "]";
    function Ge() {
      return s._(/*BTDS*/ "", [
        s._implicitParam(
          "=m2",
          d.jsx(r("AHGHelpTrayLink2.react"), {
            helpCenterID:
              o("AdsUniqueMetricsID").ABOUT_SPECIAL_AD_CATEGORY_CMS_ID,
            children: s._(/*BTDS*/ ""),
          }),
        ),
      ]);
    }
    Ge.displayName = Ge.name + " [from " + i.id + "]";
    function ze() {
      return s._(/*BTDS*/ "", [
        s._implicitParam(
          "=m2",
          d.jsx(r("AHGHelpTrayLink2.react"), {
            helpCenterID:
              o("AdsUniqueMetricsID").ABOUT_SPECIAL_AD_CATEGORY_CMS_ID,
            children: s._(/*BTDS*/ ""),
          }),
        ),
      ]);
    }
    ze.displayName = ze.name + " [from " + i.id + "]";
    function je() {
      return s._(/*BTDS*/ "");
    }
    je.displayName = je.name + " [from " + i.id + "]";
    function Ke() {
      return s._(/*BTDS*/ "");
    }
    Ke.displayName = Ke.name + " [from " + i.id + "]";
    function Qe() {
      return s._(/*BTDS*/ "");
    }
    Qe.displayName = Qe.name + " [from " + i.id + "]";
    function Xe() {
      return s._(/*BTDS*/ "");
    }
    Xe.displayName = Xe.name + " [from " + i.id + "]";
    function Ye() {
      return s._(/*BTDS*/ "", [
        s._param(
          "traffic",
          d.jsx("strong", {
            children: o("AdsODAXObjectiveStrings").getObjectiveNameLowerCase(
              r("AdsAPIObjectives").LINK_CLICKS,
            ),
          }),
        ),
      ]);
    }
    Ye.displayName = Ye.name + " [from " + i.id + "]";
    function Je(e) {
      var t = e.isAppPromotionLinkClicks,
        n = e.isEUAdvertiser,
        a = e.isLPVEligible,
        i = e.isQualityLeadOptimizationGoal,
        l = e.isValueOptimizationGoal,
        u = e.objective,
        c = e.onlyShowCTWAReason,
        m = e.promotedObjectType;
      if (u === r("AdsAPIObjectives").APP_INSTALLS && !n && t === !0)
        return s._(/*BTDS*/ "", [
          s._implicitParam(
            "=m2",
            d.jsx("strong", { children: s._(/*BTDS*/ "") }),
          ),
          s._implicitParam(
            "=m5",
            d.jsx("strong", { children: s._(/*BTDS*/ "") }),
          ),
          s._implicitParam(
            "=m7",
            d.jsx("strong", { children: s._(/*BTDS*/ "") }),
          ),
          s._implicitParam(
            "=m10",
            d.jsx("strong", { children: s._(/*BTDS*/ "") }),
          ),
        ]);
      if (i)
        return s._(/*BTDS*/ "", [
          s._param(
            "performance goal",
            d.jsx("strong", {
              children: o("WAMOLabelStrings").PERFORMANCE_GOAL,
            }),
          ),
          s._param(
            "maximize number of qualified leads",
            d.jsx("strong", {
              children:
                o("WAMOLabelStrings").MAXIMIZE_NUMBER_OF_QUALIFIED_LEADS,
            }),
          ),
        ]);
      if (l)
        return s._(/*BTDS*/ "", [
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
        ]);
      if (n)
        return s._(/*BTDS*/ "", [
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
        ]);
      if (c)
        return s._(/*BTDS*/ "", [
          s._implicitParam(
            "=m2",
            d.jsx("strong", { children: s._(/*BTDS*/ "") }),
          ),
          s._implicitParam(
            "=m4",
            d.jsx("strong", { children: s._(/*BTDS*/ "") }),
          ),
        ]);
      var p =
        m === r("AdsPromotedObjectTypes").WEBSITE ||
        m === r("AdsPromotedObjectTypes").PIXEL;
      switch (u) {
        case r("AdsAPIObjectives").LINK_CLICKS:
          if (a) {
            var _;
            return s._(/*BTDS*/ "", [
              s._param(
                "performance goal",
                d.jsx("strong", {
                  children: (_ = o("WAMOLabelStrings")).PERFORMANCE_GOAL,
                }),
              ),
              s._param(
                "link clicks",
                d.jsx("strong", { children: _.LINK_CLICKS }),
              ),
              s._param(
                "landing page views",
                d.jsx("strong", { children: _.LANDING_PAGE_VIEWS }),
              ),
              s._param(
                "daily unique reach",
                d.jsx("strong", { children: _.DAILY_UNIQUE_REACH }),
              ),
              s._param(
                "number of impressions",
                d.jsx("strong", { children: _.NUMBER_OF_IMPRESSIONS }),
              ),
            ]);
          }
          return s._(/*BTDS*/ "", [
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
          ]);
        case r("AdsAPIObjectives").OUTCOME_AWARENESS:
          return s._(/*BTDS*/ "", [
            s._param(
              "performance goal",
              d.jsx("strong", {
                children: o("WAMOLabelStrings").PERFORMANCE_GOAL,
              }),
            ),
            s._param(
              "reach of ads",
              d.jsx("strong", { children: o("WAMOLabelStrings").REACH_OF_ADS }),
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
          ]);
        case r("AdsAPIObjectives").OUTCOME_ENGAGEMENT:
          return p
            ? a
              ? s._(/*BTDS*/ "", [
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
                ])
              : s._(/*BTDS*/ "", [
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
                ])
            : s._(/*BTDS*/ "", [
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
              ]);
        case r("AdsAPIObjectives").OUTCOME_LEADS:
          if (a) {
            var _;
            return s._(/*BTDS*/ "", [
              s._param(
                "performance goal",
                d.jsx("strong", {
                  children: (_ = o("WAMOLabelStrings")).PERFORMANCE_GOAL,
                }),
              ),
              s._param(
                "landing page views",
                d.jsx("strong", { children: _.LANDING_PAGE_VIEWS }),
              ),
              s._param(
                "link clicks",
                d.jsx("strong", { children: _.LINK_CLICKS }),
              ),
              s._param(
                "daily unique reach",
                d.jsx("strong", { children: _.DAILY_UNIQUE_REACH }),
              ),
              s._param(
                "number of impressions",
                d.jsx("strong", { children: _.NUMBER_OF_IMPRESSIONS }),
              ),
            ]);
          }
          return s._(/*BTDS*/ "", [
            s._param(
              "performance goal",
              d.jsx("strong", {
                children: o("WAMOLabelStrings").PERFORMANCE_GOAL,
              }),
            ),
            s._param(
              "link clicks",
              d.jsx("strong", { children: o("WAMOLabelStrings").LINK_CLICKS }),
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
          ]);
        case r("AdsAPIObjectives").OUTCOME_SALES:
          if (p) {
            if (a) {
              var _;
              return s._(/*BTDS*/ "", [
                s._param(
                  "performance goal",
                  d.jsx("strong", {
                    children: (_ = o("WAMOLabelStrings")).PERFORMANCE_GOAL,
                  }),
                ),
                s._param(
                  "landing page views",
                  d.jsx("strong", { children: _.LANDING_PAGE_VIEWS }),
                ),
                s._param(
                  "link clicks",
                  d.jsx("strong", { children: _.LINK_CLICKS }),
                ),
                s._param(
                  "daily unique reach",
                  d.jsx("strong", { children: _.DAILY_UNIQUE_REACH }),
                ),
                s._param(
                  "number of impressions",
                  d.jsx("strong", { children: _.NUMBER_OF_IMPRESSIONS }),
                ),
              ]);
            }
            return s._(/*BTDS*/ "", [
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
            ]);
          }
          return s._(/*BTDS*/ "", [
            s._param(
              "performance goal",
              d.jsx("strong", {
                children: o("WAMOLabelStrings").PERFORMANCE_GOAL,
              }),
            ),
            s._param(
              "maximize number of conversions",
              d.jsx("strong", {
                children: o("WAMOLabelStrings").MAXIMIZE_NUMBER_OF_CONVERSIONS,
              }),
            ),
          ]);
        default:
          if (a) {
            var _;
            return s._(/*BTDS*/ "", [
              s._param(
                "performance goal",
                d.jsx("strong", {
                  children: (_ = o("WAMOLabelStrings")).PERFORMANCE_GOAL,
                }),
              ),
              s._param(
                "link clicks",
                d.jsx("strong", { children: _.LINK_CLICKS }),
              ),
              s._param(
                "landing page views",
                d.jsx("strong", { children: _.LANDING_PAGE_VIEWS }),
              ),
              s._param(
                "daily unique reach",
                d.jsx("strong", { children: _.DAILY_UNIQUE_REACH }),
              ),
              s._param(
                "number of impressions",
                d.jsx("strong", { children: _.NUMBER_OF_IMPRESSIONS }),
              ),
            ]);
          }
          return s._(/*BTDS*/ "", [
            s._param(
              "performance goal",
              d.jsx("strong", {
                children: o("WAMOLabelStrings").PERFORMANCE_GOAL,
              }),
            ),
            s._param(
              "link clicks",
              d.jsx("strong", { children: o("WAMOLabelStrings").LINK_CLICKS }),
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
          ]);
      }
    }
    function Ze(e, t) {
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
          return s._(/*BTDS*/ "", [s._param("label", n)]);
        case "PLATFORM":
          return s._(/*BTDS*/ "", [s._param("label", n)]);
      }
      u(0, 159);
    }
    function et(e, t) {
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
          return s._(/*BTDS*/ "", [s._param("label", n)]);
        case "PLATFORM":
          return s._(/*BTDS*/ "", [s._param("label", n)]);
      }
      u(0, 159);
    }
    function tt(e, t) {
      var n = null;
      switch (
        ((t.objective === r("AdsAPIObjectives").OUTCOME_LEADS ||
          t.objective === r("AdsAPIObjectives").LEAD_GENERATION) &&
          (n = "lead generation"),
        n !== null || u(0, 65214),
        e)
      ) {
        case "GROUP":
          return s._(/*BTDS*/ "", [s._param("label", n)]);
        case "PLATFORM":
          return s._(/*BTDS*/ "", [s._param("label", n)]);
      }
      u(0, 159);
    }
    function nt(e, t) {
      var n = m[t.planType];
      switch (e) {
        case "GROUP":
          return s._(/*BTDS*/ "", [s._param("plan type", n)]);
        case "PLATFORM":
          return s._(/*BTDS*/ "", [s._param("plan type", n)]);
      }
      u(0, 159);
    }
    function rt(e) {
      switch (e) {
        case "GROUP":
          return s._(/*BTDS*/ "");
        case "PLATFORM":
          return s._(/*BTDS*/ "");
      }
      u(0, 159);
    }
    function ot(e, t) {
      switch (e) {
        case "GROUP":
          switch (t.placementPlugin) {
            case "oculus/vr_apps":
            case "oculus/rewarded_video":
              return s._(/*BTDS*/ "");
            default:
              return s._(/*BTDS*/ "");
          }
        case "PLATFORM":
          switch (t.placementPlugin) {
            case "oculus/vr_apps":
              return s._(/*BTDS*/ "");
            case "oculus/rewarded_video":
              return s._(/*BTDS*/ "");
            default:
              return s._(/*BTDS*/ "");
          }
      }
      u(0, 159);
    }
    function at(e, t) {
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
      return n != null
        ? n
        : Ae(
            e,
            o("AdsPlacementIneligibilityTrafficReasons").createGenericReason(),
          );
    }
    function it(e, t) {
      switch (e) {
        case "GROUP":
        case "PLATFORM":
          return o(
            "AdAccountBusinessConstraintsPerObjectivePlacementControlsGatingUtils",
          ).isPerObjectivePlacementControlsEnabled() && t.objective != null
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
    function lt(e) {
      switch (e) {
        case "GROUP":
        case "PLATFORM":
          return s._(/*BTDS*/ "");
      }
      u(0, 159);
    }
    function st(e) {
      switch (e) {
        case "GROUP":
        case "PLATFORM":
          return s._(/*BTDS*/ "");
      }
      u(0, 159);
    }
    function ut(e) {
      switch (e) {
        case "GROUP":
        case "PLATFORM":
          return s._(/*BTDS*/ "");
      }
      u(0, 159);
    }
    function ct(e) {
      switch (e) {
        case "GROUP":
        case "PLATFORM":
          return s._(/*BTDS*/ "");
      }
      u(0, 159);
    }
    function dt(e) {
      switch (e) {
        case "GROUP":
          return s._(/*BTDS*/ "");
        case "PLATFORM":
          return s._(/*BTDS*/ "");
      }
      u(0, 159);
    }
    function mt(e) {
      switch (e) {
        case "GROUP":
          return s._(/*BTDS*/ "");
        case "PLATFORM":
          return s._(/*BTDS*/ "");
      }
      u(0, 159);
    }
    function pt() {
      return s._(/*BTDS*/ "");
    }
    pt.displayName = pt.name + " [from " + i.id + "]";
    function _t() {
      return s._(/*BTDS*/ "", [
        s._param(
          "Ad sequencing",
          d.jsx("strong", { children: "Ad sequencing" }),
        ),
      ]);
    }
    _t.displayName = _t.name + " [from " + i.id + "]";
    function ft(e) {
      switch (e) {
        case "GROUP":
        case "PLATFORM":
          return s._(/*BTDS*/ "");
      }
      u(0, 159);
    }
    function gt(e, t) {
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
    function ht(e, t, n) {
      switch (t.type) {
        case "M2_MMC_PRESENT_IN_ADGROUP":
          return ft(e);
        case "PARENT_NOT_IN_TARGET_SPEC_OR_SOFT_OPT_OUT_SPEC":
          return gt(e, t);
        case "APP":
          return ve(e);
        case "MOBILE_APP":
          return Re(e);
        case "CANVAS_APP":
          return Le(e);
        case "MESSENGER":
          return Ee(e, t);
        case "OBJECTIVE":
          return ke(e, t);
        case "DEVICE_PLATFORM":
          return Te(e, t);
        case "BUYING_TYPE":
          return De(e, t);
        case "WINDOWS_APP":
          return xe(e);
        case "OPTIMIZATION_GOAL":
          return $e(e);
        case "SPECIAL_ADS_CATEGORY":
          return Ne(e);
        case "OFFER_OPTION":
          return Me(e, t);
        case "AD_ACCOUNT_TRUST_TIER":
          return we(e, t);
        case "GENERIC":
          return Ae(e, t);
        case "GROUP":
          return he(e);
        case "REMINDER":
          return be(e);
        case "IMAGINATION":
          return ye(e);
        case "CUSTOM":
          return Fe(e, t);
        case "DIRECT_INSTALL":
          return Be(e, t);
        case "DCO":
          return We(e);
        case "WHATSAPP":
          return Ze(e, t);
        case "PLAN_TYPE":
          return nt(e, t);
        case "INSTANT_GAME":
          return rt(e);
        case "OMNICHANNEL":
          return Se(e);
        case "INSTAGRAM":
          return et(e, t);
        case "INSTAGRAM_DIRECT_LEAD_GEN":
          return tt(e, t);
        case "IG_LOGIN":
          return fe(e);
        case "IG_PROFILE_VISIT_TRAFFIC":
          return me(e);
        case "FB_PAGE_VISIT_TRAFFIC":
          return pe(e);
        case "IG_PROFILE_AND_FB_PAGE_VISIT_TRAFFIC":
          return _e(e);
        case "PHONE_CALL_LEAD":
          return ue(e);
        case "PHONE_CALL_TRAFFIC":
          return ce(e);
        case "PHONE_CALL_CONVERSIONS_OR_SALES":
          return de(e);
        case "OCULUS":
          return ot(e, t);
        case "DONATION":
          return ge(e);
        case "GROWTH_APP_STORE":
          return Ce(e);
        case "BWI":
          return at(e, n);
        case "ACCOUNT_CONTROL_PLACEMENT_EXCLUSION":
          return it(e, t);
        case "WAMO_STATUS_DESTINATION":
          return qe();
        case "WAMO_STATUS_CONVERSION_LOCATION":
          return Ue(t);
        case "WAMO_STATUS_DESTINATION_IN_LEAD_OBJECTIVE":
          return Ve();
        case "PROMO_CHANNEL_DESTINATION":
          return He();
        case "WAMO_STATUS_SAC":
          return Ge();
        case "WAMO_STATUS_SIEP":
          return ze();
        case "WAMO_STATUS_AB_TEST":
          return je();
        case "WAMO_STATUS_PRODUCT_CATALOG":
          return Ke();
        case "WAMO_STATUS_CREATION_PACKAGE":
          return Qe();
        case "WAMO_STATUS_CUSTOM_AUDIENCE":
          return Xe();
        case "WAMO_STATUS_EU_OBJECTIVE":
          return Ye();
        case "WAMO_STATUS_OPTIMIZATION_GOAL":
          return Je(t);
        case "PAGELESS_CTWA_ADS":
          return se(e);
        case "LEAD_FORM_MESSENGER":
          return lt(e);
        case "PUBLISHER_PLATFORM":
          return st(e);
        case "INSTAGRAM_LIVE":
          return ut(e);
        case "FACEBOOK_LIVE":
          return ct(e);
        case "MM_ACTIVATION_INELIGIBLE":
          return t.message;
        case "MM_NOT_HIGH_TRUST":
          return Oe(e, t);
        case "TARGET_FREQUENCY_AUCTION":
          return dt(e);
        case "REELS_TRENDING_ADS":
          return mt(e);
        case "AD_SEQUENCING":
          return _t();
        case "META_MOMENT_MAKER":
          return pt();
      }
      u(0, 22846);
    }
    ((l.createFBPageVisitTrafficReason = o(
      "AdsPlacementIneligibilityTrafficReasons",
    ).createFBPageVisitTrafficReason),
      (l.createGenericReason = o(
        "AdsPlacementIneligibilityTrafficReasons",
      ).createGenericReason),
      (l.createIGProfileAndFBPageVisitTrafficReason = o(
        "AdsPlacementIneligibilityTrafficReasons",
      ).createIGProfileAndFBPageVisitTrafficReason),
      (l.createIGProfileVisitTrafficReason = o(
        "AdsPlacementIneligibilityTrafficReasons",
      ).createIGProfileVisitTrafficReason),
      (l.createAdSequencingReason = p),
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
      (l.createWAMOStatusSIEPReason = D),
      (l.createWAMOStatusProductCatalogReason = x),
      (l.createWAMOStatusEUObjectiveReason = $),
      (l.createWAMOIneligibilityOptimizationGoalReason = P),
      (l.createDevicePlatformReason = N),
      (l.createBuyingTypeReason = M),
      (l.createWindowsAppReason = w),
      (l.createOptimizationGoalReason = A),
      (l.createSACReason = F),
      (l.createOfferOptionReason = O),
      (l.createAdAccountTrustTierReason = B),
      (l.createCustomReason = W),
      (l.createIOS14Reason = q),
      (l.createDirectInstallReason = U),
      (l.createDCOReason = V),
      (l.createOmnichannelReason = H),
      (l.createWhatsAppReason = G),
      (l.createIGLoginReason = z),
      (l.createInstantGameReason = j),
      (l.createPhoneCallLeadReason = K),
      (l.createPhoneCallTrafficReason = Q),
      (l.createPhoneCallConversionsOrSalesReason = X),
      (l.createDonationReason = Y),
      (l.createGroupPromotionReason = J),
      (l.createReminderPromotionReason = Z),
      (l.createImaginationReason = ee),
      (l.createGrowthAppStoreReason = te),
      (l.createInstagramLiveReason = ne),
      (l.createFacebookLiveReason = re),
      (l.createAccountControlPlacementExclusionReason = oe),
      (l.createOculusReason = ae),
      (l.createLeadFormMessengerReason = ie),
      (l.createTargetFrequencyAuctionReason = le),
      (l.contentForSpecialAdsCategoryReason = Pe),
      (l.renderReelsTrendingAdsReason = mt),
      (l.renderM2MMCINAdgroup = ft),
      (l.renderReason = ht));
  },
  226,
);
