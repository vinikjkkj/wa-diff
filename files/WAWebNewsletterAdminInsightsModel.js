__d(
  "WAWebNewsletterAdminInsightsModel",
  [
    "fbt",
    "WAWebBaseModel",
    "WAWebClock",
    "WAWebModelUtils",
    "WAWebNewsletterInsightUtils",
    "WAWebWid",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = (function (e) {
      function t() {
        for (var t, n = arguments.length, r = new Array(n), a = 0; a < n; a++)
          r[a] = arguments[a];
        return (
          (t = e.call.apply(e, [this].concat(r)) || this),
          (t.rangeStart = o("WAWebModelUtils").prop()),
          (t.rangeEnd = o("WAWebModelUtils").prop()),
          (t.dataStatus = o("WAWebModelUtils").prop(function () {
            return o("WAWebNewsletterInsightUtils").NewsletterInsightDataStatus
              .Available;
          })),
          (t.accountsReached = o("WAWebModelUtils").prop()),
          (t.reachDelta = o("WAWebModelUtils").prop()),
          (t.followersReached = o("WAWebModelUtils").prop()),
          (t.nonFollowersReached = o("WAWebModelUtils").prop()),
          (t.reachByCountry = o("WAWebModelUtils").prop(function () {
            return [];
          })),
          (t.followers = o("WAWebModelUtils").prop()),
          (t.followersDelta = o("WAWebModelUtils").prop()),
          (t.followersByCountry = o("WAWebModelUtils").prop(function () {
            return [];
          })),
          (t.netFollows = o("WAWebModelUtils").prop()),
          (t.growthChartData = o("WAWebModelUtils").prop(function () {
            return [];
          })),
          (t.growthChart = o("WAWebModelUtils").derived(
            function () {
              var e = this.growthChartData;
              return e.length === 0
                ? []
                : [
                    {
                      data: e,
                      dataLabels: [
                        {
                          label: s._(/*BTDS*/ "Net follows"),
                          key: "net-follows",
                        },
                        { label: s._(/*BTDS*/ "Follows"), key: "follows" },
                        { label: s._(/*BTDS*/ "Unfollows"), key: "unfollows" },
                      ],
                      dataSetLabel: {
                        label: s._(/*BTDS*/ "Growth"),
                        key: "growth",
                      },
                    },
                  ];
            },
            ["growthChartData"],
          )),
          (t.rangeInDays = o("WAWebModelUtils").derived(
            function () {
              var e = this.rangeEnd,
                t = this.rangeStart;
              return t == null || e == null
                ? 0
                : o("WAWebClock").Clock.daysDeltaAbs(t, e) + 1;
            },
            ["rangeStart", "rangeEnd"],
          )),
          babelHelpers.assertThisInitialized(t) ||
            babelHelpers.assertThisInitialized(t)
        );
      }
      return (babelHelpers.inheritsLoose(t, e), t);
    })(o("WAWebBaseModel").BaseModel);
    ((e.Proxy = "newsletterInsights"), (e.idClass = r("WAWebWid")));
    var u = o("WAWebBaseModel").defineModel(e);
    l.NewsletterAdminInsights = u;
  },
  226,
);
