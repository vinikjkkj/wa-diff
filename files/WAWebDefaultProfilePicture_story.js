__d(
  "WAWebDefaultProfilePicture.story",
  [
    "WAWebDefaultProfilePicture.react",
    "WAWebFlexBox.react",
    "WAWebShowroomStory.react",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = {
        backgroundColorGreen: { backgroundColor: "x1u857p9", $$css: !0 },
        foregroundColorGreen: { color: "x169kx9", $$css: !0 },
      },
      c = {
        storyName: "WAWebDefaultProfilePicture",
        section: o("WAWebShowroomStory.react").StorySectionType.OTHER,
        component: r("WAWebDefaultProfilePicture.react"),
        description: "Component for rendering default images for chat threads",
        examples: [
          {
            title: "Medium (64px)",
            example: function () {
              var e;
              return s.jsxs(o("WAWebFlexBox.react").FlexColumn, {
                gap: 8,
                children: [
                  s.jsx((e = r("WAWebDefaultProfilePicture.react")), {
                    type: "1-1",
                    size: 64,
                  }),
                  s.jsx(e, { type: "group", size: 64 }),
                  s.jsx(e, { type: "community", size: 64 }),
                  s.jsx(e, { type: "1-1", size: 64, shape: "squircle" }),
                  s.jsx(e, { type: "group", size: 64, shape: "squircle" }),
                  s.jsx(e, { type: "community", size: 64, shape: "squircle" }),
                ],
              });
            },
          },
          {
            title: "Large (128px)",
            example: function () {
              var e;
              return s.jsxs(o("WAWebFlexBox.react").FlexColumn, {
                gap: 8,
                children: [
                  s.jsx((e = r("WAWebDefaultProfilePicture.react")), {
                    type: "1-1",
                    size: 128,
                  }),
                  s.jsx(e, { type: "group", size: 128 }),
                  s.jsx(e, { type: "community", size: 128 }),
                  s.jsx(e, { type: "1-1", size: 128, shape: "squircle" }),
                  s.jsx(e, { type: "group", size: 128, shape: "squircle" }),
                  s.jsx(e, { type: "community", size: 128, shape: "squircle" }),
                ],
              });
            },
          },
          {
            title: "Color overrides",
            example: function () {
              var e;
              return s.jsxs(o("WAWebFlexBox.react").FlexColumn, {
                gap: 8,
                children: [
                  s.jsx((e = r("WAWebDefaultProfilePicture.react")), {
                    type: "1-1",
                    size: 64,
                    backgroundStyles: u.backgroundColorGreen,
                    foregroundStyles: u.foregroundColorGreen,
                  }),
                  s.jsx(e, {
                    type: "group",
                    size: 64,
                    backgroundStyles: u.backgroundColorGreen,
                    foregroundStyles: u.foregroundColorGreen,
                  }),
                  s.jsx(e, {
                    type: "community",
                    size: 64,
                    backgroundStyles: u.backgroundColorGreen,
                    foregroundStyles: u.foregroundColorGreen,
                  }),
                  s.jsx(e, {
                    type: "1-1",
                    size: 64,
                    shape: "squircle",
                    backgroundStyles: u.backgroundColorGreen,
                    foregroundStyles: u.foregroundColorGreen,
                  }),
                  s.jsx(e, {
                    type: "group",
                    size: 64,
                    shape: "squircle",
                    backgroundStyles: u.backgroundColorGreen,
                    foregroundStyles: u.foregroundColorGreen,
                  }),
                  s.jsx(e, {
                    type: "community",
                    size: 64,
                    shape: "squircle",
                    backgroundStyles: u.backgroundColorGreen,
                    foregroundStyles: u.foregroundColorGreen,
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
