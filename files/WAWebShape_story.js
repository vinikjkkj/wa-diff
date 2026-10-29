__d(
  "WAWebShape.story",
  [
    "WAWebFlexBox.react",
    "WAWebShape.react",
    "WAWebShapeIcon.react",
    "WAWebShowroomStory.react",
    "WDSIconIcCampaignMegaphoneFilled.react",
    "WDSIconIcLink.react",
    "WDSIconIcNotifications.react",
    "WDSIconWdsIcCommunitiesFilled.react",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = {
        backgroundColorGreen: { backgroundColor: "x1u857p9", $$css: !0 },
        foregroundColorGreen: { color: "x169kx9", $$css: !0 },
        backgroundColorBlue: { backgroundColor: "x1t391ir", $$css: !0 },
        foregroundColorBlue: { color: "xcghrsn", $$css: !0 },
        backgroundColorRed: { backgroundColor: "xrkmrrc", $$css: !0 },
        foregroundColorRed: { color: null, $$css: !0 },
      },
      c = {
        storyName: "WAWebShape",
        section: o("WAWebShowroomStory.react").StorySectionType.UTIL,
        component: r("WAWebShape.react"),
        description: "Component for rendering various simple shapes",
        examples: [
          {
            title: "Empty shapes, colored green",
            example: function () {
              var e;
              return s.jsxs(o("WAWebFlexBox.react").FlexColumn, {
                gap: 8,
                children: [
                  s.jsx((e = r("WAWebShape.react")), {
                    shape: "circle",
                    size: 32,
                    xstyle: u.backgroundColorGreen,
                  }),
                  s.jsx(e, {
                    shape: "squircle",
                    size: 32,
                    xstyle: u.backgroundColorGreen,
                  }),
                  s.jsx(e, {
                    shape: "circle",
                    size: 64,
                    xstyle: u.backgroundColorGreen,
                  }),
                  s.jsx(e, {
                    shape: "squircle",
                    size: 64,
                    xstyle: u.backgroundColorGreen,
                  }),
                  s.jsx(e, {
                    shape: "circle",
                    size: 128,
                    xstyle: u.backgroundColorGreen,
                  }),
                  s.jsx(e, {
                    shape: "squircle",
                    size: 128,
                    xstyle: u.backgroundColorGreen,
                  }),
                ],
              });
            },
          },
          {
            title: "ShapeIcon, custom icons and colors",
            example: function () {
              var e, t, n, a, i;
              return s.jsxs((a = o("WAWebFlexBox.react")).FlexColumn, {
                gap: 8,
                children: [
                  s.jsxs(a.FlexRow, {
                    gap: 8,
                    wrap: "wrap",
                    children: [
                      s.jsx((i = o("WAWebShapeIcon.react")).ShapeIcon, {
                        shape: "circle",
                        size: 32,
                        Icon: (e = r("WDSIconIcNotifications.react")),
                        backgroundStyles: u.backgroundColorGreen,
                        iconStyles: u.foregroundColorGreen,
                      }),
                      s.jsx(i.ShapeIcon, {
                        shape: "circle",
                        size: 32,
                        Icon: (t = r("WDSIconIcLink.react")),
                        backgroundStyles: u.backgroundColorBlue,
                        iconStyles: u.foregroundColorBlue,
                      }),
                      s.jsx(i.ShapeIcon, {
                        shape: "circle",
                        size: 32,
                        Icon: (n = r("WDSIconWdsIcCommunitiesFilled.react")),
                        backgroundStyles: u.backgroundColorRed,
                        iconStyles: u.foregroundColorRed,
                      }),
                    ],
                  }),
                  s.jsxs(a.FlexRow, {
                    gap: 8,
                    wrap: "wrap",
                    children: [
                      s.jsx(i.ShapeIcon, {
                        shape: "squircle",
                        size: 32,
                        Icon: e,
                        backgroundStyles: u.backgroundColorGreen,
                        iconStyles: u.foregroundColorGreen,
                      }),
                      s.jsx(i.ShapeIcon, {
                        shape: "squircle",
                        size: 32,
                        Icon: t,
                        backgroundStyles: u.backgroundColorBlue,
                        iconStyles: u.foregroundColorBlue,
                      }),
                      s.jsx(i.ShapeIcon, {
                        shape: "squircle",
                        size: 32,
                        Icon: n,
                        backgroundStyles: u.backgroundColorRed,
                        iconStyles: u.foregroundColorRed,
                      }),
                    ],
                  }),
                  s.jsxs(a.FlexRow, {
                    gap: 8,
                    wrap: "wrap",
                    children: [
                      s.jsx(i.ShapeIcon, {
                        shape: "circle",
                        size: 64,
                        Icon: e,
                        backgroundStyles: u.backgroundColorGreen,
                        iconStyles: u.foregroundColorGreen,
                      }),
                      s.jsx(i.ShapeIcon, {
                        shape: "circle",
                        size: 64,
                        Icon: t,
                        backgroundStyles: u.backgroundColorBlue,
                        iconStyles: u.foregroundColorBlue,
                      }),
                      s.jsx(i.ShapeIcon, {
                        shape: "circle",
                        size: 64,
                        Icon: n,
                        backgroundStyles: u.backgroundColorRed,
                        iconStyles: u.foregroundColorRed,
                      }),
                    ],
                  }),
                  s.jsxs(a.FlexRow, {
                    gap: 8,
                    wrap: "wrap",
                    children: [
                      s.jsx(i.ShapeIcon, {
                        shape: "squircle",
                        size: 64,
                        Icon: e,
                        backgroundStyles: u.backgroundColorGreen,
                        iconStyles: u.foregroundColorGreen,
                      }),
                      s.jsx(i.ShapeIcon, {
                        shape: "squircle",
                        size: 64,
                        Icon: t,
                        backgroundStyles: u.backgroundColorBlue,
                        iconStyles: u.foregroundColorBlue,
                      }),
                      s.jsx(i.ShapeIcon, {
                        shape: "squircle",
                        size: 64,
                        Icon: n,
                        backgroundStyles: u.backgroundColorRed,
                        iconStyles: u.foregroundColorRed,
                      }),
                    ],
                  }),
                  s.jsxs(a.FlexRow, {
                    gap: 8,
                    wrap: "wrap",
                    children: [
                      s.jsx(i.ShapeIcon, {
                        shape: "circle",
                        size: 128,
                        Icon: e,
                        backgroundStyles: u.backgroundColorGreen,
                        iconStyles: u.foregroundColorGreen,
                      }),
                      s.jsx(i.ShapeIcon, {
                        shape: "circle",
                        size: 128,
                        Icon: t,
                        backgroundStyles: u.backgroundColorBlue,
                        iconStyles: u.foregroundColorBlue,
                      }),
                      s.jsx(i.ShapeIcon, {
                        shape: "circle",
                        size: 128,
                        Icon: n,
                        backgroundStyles: u.backgroundColorRed,
                        iconStyles: u.foregroundColorRed,
                      }),
                    ],
                  }),
                  s.jsxs(a.FlexRow, {
                    gap: 8,
                    wrap: "wrap",
                    children: [
                      s.jsx(i.ShapeIcon, {
                        shape: "squircle",
                        size: 128,
                        Icon: e,
                        backgroundStyles: u.backgroundColorGreen,
                        iconStyles: u.foregroundColorGreen,
                      }),
                      s.jsx(i.ShapeIcon, {
                        shape: "squircle",
                        size: 128,
                        Icon: t,
                        backgroundStyles: u.backgroundColorBlue,
                        iconStyles: u.foregroundColorBlue,
                      }),
                      s.jsx(i.ShapeIcon, {
                        shape: "squircle",
                        size: 128,
                        Icon: n,
                        backgroundStyles: u.backgroundColorRed,
                        iconStyles: u.foregroundColorRed,
                      }),
                    ],
                  }),
                ],
              });
            },
          },
          {
            title: "Muted Theme",
            example: function () {
              var e;
              return s.jsxs(o("WAWebFlexBox.react").FlexColumn, {
                gap: 8,
                children: [
                  s.jsx((e = o("WAWebShapeIcon.react")).ShapeIcon, {
                    theme: e.ShapeIconTheme.Muted,
                    shape: "circle",
                    size: 64,
                    Icon: r("WDSIconIcNotifications.react"),
                  }),
                  s.jsx(e.ShapeIcon, {
                    theme: e.ShapeIconTheme.Muted,
                    shape: "squircle",
                    size: 64,
                    Icon: r("WDSIconIcNotifications.react"),
                  }),
                ],
              });
            },
          },
          {
            title: "Primary Theme",
            example: function () {
              var e;
              return s.jsxs(o("WAWebFlexBox.react").FlexColumn, {
                gap: 8,
                children: [
                  s.jsx((e = o("WAWebShapeIcon.react")).ShapeIcon, {
                    theme: e.ShapeIconTheme.Primary,
                    shape: "circle",
                    size: 64,
                    Icon: r("WDSIconIcNotifications.react"),
                  }),
                  s.jsx(e.ShapeIcon, {
                    theme: e.ShapeIconTheme.Primary,
                    shape: "squircle",
                    size: 64,
                    Icon: r("WDSIconIcNotifications.react"),
                  }),
                ],
              });
            },
          },
          {
            title: "Community Theme",
            example: function () {
              var e;
              return s.jsxs(o("WAWebFlexBox.react").FlexColumn, {
                gap: 8,
                children: [
                  s.jsx((e = o("WAWebShapeIcon.react")).ShapeIcon, {
                    theme: e.ShapeIconTheme.Community,
                    shape: "circle",
                    size: 64,
                    Icon: r("WDSIconIcCampaignMegaphoneFilled.react"),
                  }),
                  s.jsx(e.ShapeIcon, {
                    theme: e.ShapeIconTheme.Community,
                    shape: "squircle",
                    size: 64,
                    Icon: r("WDSIconIcCampaignMegaphoneFilled.react"),
                  }),
                ],
              });
            },
          },
        ],
      };
    l.default = c;
  },
  98,
);
