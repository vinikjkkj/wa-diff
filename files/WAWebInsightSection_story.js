__d(
  "WAWebInsightSection.story",
  [
    "WAWebBarChart.react",
    "WAWebInsightSection.react",
    "WAWebShowroomStory.react",
    "WAWebValueWithDeltaOverPeriod.react",
    "WAWebWamEnumActionTarget",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = [
        { label: "Columbia", percentage: 0.431, value: 25e5, key: "columbia" },
        { label: "Brazil", percentage: 0.201, value: 11e5, key: "brazil" },
        { label: "Peru", percentage: 0.153, value: 902e3, key: "peru" },
        {
          label: "United Kingdom",
          percentage: 0.102,
          value: 601e3,
          key: "united-kingdom",
        },
      ],
      c = {
        name: "Accounts Reached",
        description:
          "The number of people who have viewed any of your updates at least once. This does not include multiple views by the same people.",
        key: "accounts-reached",
      },
      d = {
        name: "Net Follows",
        description:
          "The number of people that followed your channel minus the number of people that unfollowed your channel or deleted their WhatsApp account in the last 30 days.",
        key: "net-follows",
      },
      m = {
        storyName: "WAWebInsightSection",
        section: o("WAWebShowroomStory.react").StorySectionType.MOLECULE,
        component: r("WAWebInsightSection.react"),
        description:
          "Component designed to encompass insight(s) with a title and consisten styling",
        examples: [
          {
            example: function () {
              return s.jsx(r("WAWebInsightSection.react"), {
                title: "Top countries",
                children: s.jsx(r("WAWebBarChart.react"), { barValues: u }),
              });
            },
            title: "InsightSection",
            description: "Section showing a bar chart",
          },
          {
            example: function () {
              return s.jsx(r("WAWebInsightSection.react"), {
                title: "Total followers",
                metricsInfo: {
                  infoIconLoggingId: o("WAWebWamEnumActionTarget").ACTION_TARGET
                    .ACCOUNTS_REACHED_INFO_ICON,
                  getMetrics: function () {
                    return [c, d];
                  },
                  tab: "followers",
                },
                children: s.jsx(r("WAWebValueWithDeltaOverPeriod.react"), {
                  days: 30,
                  delta: 0.017,
                  value: 6854382,
                }),
              });
            },
            title: "InsightSection",
            description: "Section showing follower count with change section",
          },
        ],
      };
    l.default = m;
  },
  98,
);
