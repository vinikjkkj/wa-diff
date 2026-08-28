__d(
  "AdsVideoViewsCampaignOptimizationPlugin",
  [
    "AdsAPIObjectives",
    "AdsAPIOptimizationGoals",
    "AdsCampaignVideoBuyingValidatorConfig",
    "AdsDefaultCampaignOptimizationPlugin",
    "AdsSpinner.react",
    "CometPlaceholder.react",
    "JSResource",
    "isSixSecondVideoViewsEnabledForAccount",
    "lazyLoadComponent",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = 400,
      c = 218,
      d = r("lazyLoadComponent")(
        r("JSResource")("AdsVideoBuyingWarning.react").__setRef(
          "AdsVideoViewsCampaignOptimizationPlugin",
        ),
      ),
      m = babelHelpers.extends({}, r("AdsDefaultCampaignOptimizationPlugin"), {
        type: "campaign/optimization",
        key: "video_views",
        pivots: { objective: r("AdsAPIObjectives").VIDEO_VIEWS },
        getDefaultBidAmount: function (t, n) {
          switch (t) {
            case r("AdsAPIOptimizationGoals").VIDEO_VIEWS:
            case r("AdsAPIOptimizationGoals").THRUPLAY:
            case r("AdsAPIOptimizationGoals").SIX_SECOND_VIDEO_VIEWS:
              return u;
            case r("AdsAPIOptimizationGoals").REACH:
              return c;
          }
          return r("AdsDefaultCampaignOptimizationPlugin").getDefaultBidAmount(
            t,
            n,
          );
        },
        getSupportedOptimizationGoals: function () {
          return [r("AdsAPIOptimizationGoals").THRUPLAY].concat(
            r("isSixSecondVideoViewsEnabledForAccount")()
              ? [r("AdsAPIOptimizationGoals").SIX_SECOND_VIDEO_VIEWS]
              : [],
            [r("AdsAPIOptimizationGoals").TWO_SECOND_CONTINUOUS_VIDEO_VIEWS],
          );
        },
        getDefaultOptimizationGoal: function (t) {
          return r("AdsAPIOptimizationGoals").THRUPLAY;
        },
        getOptimizationGoalWarning: function (t, n, o, a, l, u, c) {
          return Object.prototype.hasOwnProperty.call(
            r("AdsCampaignVideoBuyingValidatorConfig"),
            t,
          )
            ? s.jsx(r("CometPlaceholder.react"), {
                fallback: s.jsx(r("AdsSpinner.react"), {}),
                name: i.id,
                children: s.jsx(d, { errorsByPath: a }, "video_buying_error"),
              })
            : null;
        },
      }),
      p = m;
    l.default = p;
  },
  98,
);
