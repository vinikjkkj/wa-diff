__d(
  "AdsConversionsCampaignOptimizationPlugin",
  [
    "AccountAttributionEvent",
    "AdCampaignDestination",
    "AdsAPIObjectives",
    "AdsAPIOptimizationGoals",
    "AdsDefaultCampaignOptimizationPlugin",
    "AdsDeliveryAttributionUtils",
    "AdsLandingPageViewsUtils",
    "AdsOptimizationStrings",
    "AdsPromotedObjectTypes",
    "AdsSpinner.react",
    "CometPlaceholder.react",
    "JSResource",
    "isFalsey",
    "lazyLoadComponent",
    "nullthrows",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = 500,
      c = 378,
      d = 500,
      m = r("lazyLoadComponent")(
        r("JSResource")("AdsRoasInvalidCustomEventNotice.react").__setRef(
          "AdsConversionsCampaignOptimizationPlugin",
        ),
      ),
      p = r("lazyLoadComponent")(
        r("JSResource")(
          "AdsWebsiteOptimizationInfoBoxContainer.react",
        ).__setRef("AdsConversionsCampaignOptimizationPlugin"),
      ),
      _ = babelHelpers.extends({}, r("AdsDefaultCampaignOptimizationPlugin"), {
        type: "campaign/optimization",
        key: "conversions",
        pivots: { objective: r("AdsAPIObjectives").CONVERSIONS },
        getCanUseAveragePricePacing: function (t, n) {
          return t === r("AdsAPIOptimizationGoals").OFFSITE_CONVERSIONS;
        },
        getCanUseConversionWindow: function (t) {
          return (
            t === r("AdsAPIOptimizationGoals").OFFSITE_CONVERSIONS ||
            t === r("AdsAPIOptimizationGoals").VALUE ||
            t === r("AdsAPIOptimizationGoals").OFFLINE_CONVERSIONS ||
            t === r("AdsAPIOptimizationGoals").INCREMENTAL_OFFSITE_CONVERSIONS
          );
        },
        getShouldDefaultToAttributionSpec: function (t) {
          return (
            t === r("AdsAPIOptimizationGoals").OFFSITE_CONVERSIONS ||
            t === r("AdsAPIOptimizationGoals").MESSAGING_PURCHASE_CONVERSION
          );
        },
        getClickConversionWindowOptions: function (t, n, o) {
          var e = o == null ? void 0 : o.destination_type;
          switch (t) {
            case r("AdsAPIOptimizationGoals").OFFLINE_CONVERSIONS:
              return [7];
            case r("AdsAPIOptimizationGoals").VALUE:
            case r("AdsAPIOptimizationGoals").RETURN_ON_AD_SPEND:
              return e === r("AdCampaignDestination").MESSENGER ? [1] : [1, 7];
            default:
              return [1, 7];
          }
        },
        getViewConversionWindowOptions: function (t) {
          switch (t) {
            case r("AdsAPIOptimizationGoals").MESSAGING_PURCHASE_CONVERSION:
              return [0];
            case r("AdsAPIOptimizationGoals").OFFSITE_CONVERSIONS:
              return [1];
            case r("AdsAPIOptimizationGoals").OFFLINE_CONVERSIONS:
              return [7];
            default:
              return [];
          }
        },
        getEngagedVideoViewWindowOptions: function (t) {
          switch (t) {
            case r("AdsAPIOptimizationGoals").MESSAGING_PURCHASE_CONVERSION:
              return [0];
            default:
              return [0, 1];
          }
        },
        getDefaultConversionWindowLength: function (t, n, a) {
          var e, i;
          switch (t) {
            case r("AdsAPIOptimizationGoals").VALUE:
            case r("AdsAPIOptimizationGoals").OFFSITE_CONVERSIONS:
              if (
                ((e = n != null),
                (i = n == null ? void 0 : n.default_unified_attribution_spec),
                e && i)
              ) {
                var l = _.getClickConversionWindowOptions(
                    r("nullthrows")(t),
                    n,
                    a,
                  ),
                  s = i.find(function (e) {
                    return (
                      e.event_type ===
                      r("AccountAttributionEvent").CLICK_THROUGH
                    );
                  });
                if (s != null)
                  return o("AdsDeliveryAttributionUtils").findNearestWindowDays(
                    s.window_days,
                    l,
                  );
              }
              return 7;
            case r("AdsAPIOptimizationGoals").OFFLINE_CONVERSIONS:
              return 7;
            default:
              return 1;
          }
        },
        getDefaultViewConversionWindowLength: function (t, n) {
          var e = n != null,
            a = n == null ? void 0 : n.default_unified_attribution_spec;
          if (!t || !e || !a) return null;
          var i = a.find(function (e) {
            return e.event_type === r("AccountAttributionEvent").VIEW_THROUGH;
          });
          return i == null
            ? null
            : o("AdsDeliveryAttributionUtils").findNearestWindowDays(
                i.window_days,
                _.getViewConversionWindowOptions(r("nullthrows")(t)),
              );
        },
        getDefaultEngagedVideoViewWindowLength: function (t, n) {
          return n != null ? 0 : null;
        },
        getRecommendedViewThroughOption: function (t) {
          return null;
        },
        getRecommendedEngagedVideoViewOption: function (t) {
          return t != null ? 1 : null;
        },
        getDefaultBidAmount: function (t, n) {
          switch (t) {
            case r("AdsAPIOptimizationGoals").OFFSITE_CONVERSIONS:
              return u;
            case r("AdsAPIOptimizationGoals").LINK_CLICKS:
              return c;
            case r("AdsAPIOptimizationGoals").REPLIES:
            case r("AdsAPIOptimizationGoals").CONVERSATIONS:
              return d;
          }
          return r("AdsDefaultCampaignOptimizationPlugin").getDefaultBidAmount(
            t,
            n,
          );
        },
        getConversionWindowHelpText: function () {
          return o(
            "AdsOptimizationStrings",
          ).getConversionWindowHelpTextForOffsiteConversion();
        },
        getFullFunnelExplorationMode: function () {
          return "NONE_EXPLORATION";
        },
        getSupportedOptimizationGoals: function (t) {
          var e = t.disableLPVOptimization,
            n = t.hasOffer,
            a = t.objective,
            i = t.promotedObjectType,
            l = i === r("AdsPromotedObjectTypes").MESSENGER,
            s = o("AdsLandingPageViewsUtils").canSeeOptimizationGoalInDropdown(
              !!n,
              i,
              a,
            );
          return [r("AdsAPIOptimizationGoals").OFFSITE_CONVERSIONS].concat(
            l ? [r("AdsAPIOptimizationGoals").CONVERSATIONS] : [],
            s && r("isFalsey")(e)
              ? [r("AdsAPIOptimizationGoals").LANDING_PAGE_VIEWS]
              : [],
            [
              r("AdsAPIOptimizationGoals").LINK_CLICKS,
              r("AdsAPIOptimizationGoals").IMPRESSIONS,
              r("AdsAPIOptimizationGoals").REACH,
            ],
          );
        },
        getOptimizationGoalWarning: function (t, n, o, a, l, u, c) {
          var e = this.pivots.objective;
          return n &&
            (t === r("AdsAPIOptimizationGoals").VALUE ||
              t === r("AdsAPIOptimizationGoals").RETURN_ON_AD_SPEND)
            ? s.jsx(r("CometPlaceholder.react"), {
                fallback: s.jsx(r("AdsSpinner.react"), {}),
                name: i.id,
                children: s.jsx(
                  m,
                  { errorsByPath: a, offsiteCustomEvent: u },
                  "roas_warning",
                ),
              })
            : t === r("AdsAPIOptimizationGoals").OFFSITE_CONVERSIONS
              ? s.jsx(r("CometPlaceholder.react"), {
                  fallback: s.jsx(r("AdsSpinner.react"), {}),
                  name: i.id,
                  children: s.jsx(
                    p,
                    { conversionChoice: l, objective: e, optimizationGoal: t },
                    "pixel_warning",
                  ),
                })
              : null;
        },
      }),
      f = _;
    l.default = f;
  },
  98,
);
