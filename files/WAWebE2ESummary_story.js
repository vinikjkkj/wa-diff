__d(
  "WAWebE2ESummary.story",
  [
    "WAWebPrivacyNarrativeE2ESummary.react",
    "WDSIllustrationWdsPictoLock.react",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = {
        container: { width: "xh8yej3", $$css: !0 },
        textAlignStart: { textAlign: "x1yc453h", $$css: !0 },
      },
      c = {
        storyName: "WAWebE2ESummary",
        component: o("WAWebPrivacyNarrativeE2ESummary.react").E2eSummary,
        description:
          "The component <E2eSummary/> displays an icon, title, subtitle and a unordered list.",
        examples: [
          {
            example: function () {
              return s.jsx(
                o("WAWebPrivacyNarrativeE2ESummary.react").E2eSummary,
                {
                  icon: s.jsx(r("WDSIllustrationWdsPictoLock.react"), {}),
                  xstyle: u.container,
                  textAlignment: u.textAlignStart,
                  title: "Foo Bar",
                  subTitle:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pulvinar luctus leo nec fringilla. Donec vehicula mattis felis, eget consequat sapien dictum id. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                },
              );
            },
            title: "E2eSummary",
          },
          {
            example: function () {
              return s.jsx(
                o("WAWebPrivacyNarrativeE2ESummary.react")
                  .E2eSummarySecurityDrawer,
                {},
              );
            },
            title: "<E2eSummarySecurityDrawer/>, wrapper around E2eSummary.",
          },
        ],
      },
      d = c;
    l.default = d;
  },
  98,
);
