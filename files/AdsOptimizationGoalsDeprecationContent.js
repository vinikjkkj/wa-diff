__d(
  "AdsOptimizationGoalsDeprecationContent",
  ["fbt", "AdsAPIObjectives", "AdsAPIOptimizationGoals", "react"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = "1957415901202348",
      d = {
        getVideoViewsObjectiveDURAdCreationError: function () {
          return {
            message: s._(
              /*BTDS*/ "The daily unique reach optimization is no longer supported in the video views objective. Try creating a new ad, or creating a similar ad set or campaign.",
            ),
            title: s._(/*BTDS*/ "Can't create similar video view ads"),
            learnMoreLink: c,
            noticeCode: r("AdsAPIObjectives").VIDEO_VIEWS + "_reach",
            noticeType: "error",
          };
        },
        getVideoViewsObjectiveDURAdsetConvertedWarning: function () {
          return {
            message: s._(
              /*BTDS*/ "Ad sets will now be optimized for video views instead of daily unique reach to help you get the best results. To optimize your ads for reach, create a new campaign with reach objective.",
            ),
            title: s._(
              /*BTDS*/ "The video views objective now optimizes for video views only",
            ),
            learnMoreLink: c,
            noticeCode: r("AdsAPIObjectives").VIDEO_VIEWS + "_reach",
            noticeType: "warning",
          };
        },
        getBrandAwarenessObjectiveReachAdCreationError: function () {
          return {
            message: s._(
              /*BTDS*/ "Reach optimization is no longer supported in the brand awareness objective. Try creating a new ad, or creating a similar ad set or campaign.",
            ),
            title: s._(/*BTDS*/ "Can't create similar brand awareness ads"),
            noticeCode: r("AdsAPIObjectives").BRAND_AWARENESS + "_reach",
            noticeType: "error",
          };
        },
        getBrandAwarenessObjectiveAdsetConvertedToAdRecallLiftInfo:
          function () {
            return {
              message: s._(/*BTDS*/ "{messages}", [
                s._param(
                  "messages",
                  u.jsxs("ul", {
                    style: {
                      listStyleType: "disc",
                      listStylePosition: "inside",
                    },
                    children: [
                      u.jsx("li", {
                        children: s._(
                          /*BTDS*/ "Your video ads will now reach a larger audience at a lower cost.",
                        ),
                      }),
                      u.jsx("li", {
                        children: s._(
                          /*BTDS*/ "You can use both videos and images within the same ad set.",
                        ),
                      }),
                    ],
                  }),
                ),
              ]),
              title: s._(
                /*BTDS*/ "The brand awareness objective has been updated",
              ),
              noticeCode:
                r("AdsAPIObjectives").BRAND_AWARENESS + "_brand_awareness",
              noticeType: "info",
            };
          },
      },
      m = [
        {
          objective: r("AdsAPIObjectives").VIDEO_VIEWS,
          optimizationGoal: r("AdsAPIOptimizationGoals").REACH,
          inL1CreationOrDuplicationFlow: !0,
          adsNotice: d.getVideoViewsObjectiveDURAdCreationError(),
        },
        {
          objective: r("AdsAPIObjectives").VIDEO_VIEWS,
          optimizationGoal: r("AdsAPIOptimizationGoals").REACH,
          inL1CreationOrDuplicationFlow: !1,
          adsNotice: d.getVideoViewsObjectiveDURAdsetConvertedWarning(),
        },
        {
          objective: r("AdsAPIObjectives").BRAND_AWARENESS,
          optimizationGoal: r("AdsAPIOptimizationGoals").REACH,
          inL1CreationOrDuplicationFlow: !0,
          adsNotice: d.getBrandAwarenessObjectiveReachAdCreationError(),
        },
        {
          objective: r("AdsAPIObjectives").BRAND_AWARENESS,
          optimizationGoal: r("AdsAPIOptimizationGoals").REACH,
          inL1CreationOrDuplicationFlow: !1,
          adsNotice:
            d.getBrandAwarenessObjectiveAdsetConvertedToAdRecallLiftInfo(),
        },
        {
          objective: r("AdsAPIObjectives").BRAND_AWARENESS,
          optimizationGoal: r("AdsAPIOptimizationGoals").BRAND_AWARENESS,
          inL1CreationOrDuplicationFlow: null,
          adsNotice:
            d.getBrandAwarenessObjectiveAdsetConvertedToAdRecallLiftInfo(),
        },
      ];
    function p(e, t, n) {
      return m.filter(function (r) {
        return (
          r.objective === e &&
          r.optimizationGoal === t &&
          (r.inL1CreationOrDuplicationFlow === null ||
            r.inL1CreationOrDuplicationFlow === n)
        );
      });
    }
    function _(e, t, n) {
      var r = p(e, t, n);
      return r.length > 0 ? r[0].adsNotice : null;
    }
    ((l.findNotices = p), (l.getNotice = _));
  },
  226,
);
