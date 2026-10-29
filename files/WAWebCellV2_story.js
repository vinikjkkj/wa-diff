__d(
  "WAWebCellV2.story",
  [
    "WAWebCellFrameV2.react",
    "WAWebCellV2.react",
    "WAWebShowroomStory.react",
    "WAWebText.react",
    "WDSIconIcCheck.react",
    "WDSIconIcDescriptionFilled.react",
    "WDSIconIcGroup.react",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = { flex: "1 1 75%" },
      c = {
        blue: { color: "x14ug900", backgroundColor: "xc0hbaw", $$css: !0 },
        green: { color: "x14ug900", backgroundColor: "x1em4guc", $$css: !0 },
        orange: { color: "x14ug900", backgroundColor: "x1cjtxrm", $$css: !0 },
        yellow: { color: "x14ug900", backgroundColor: "xlpurfj", $$css: !0 },
        gray: { color: "x14ug900", backgroundColor: "xn25fpx", $$css: !0 },
        teal: { color: "x14ug900", backgroundColor: "xhw09ix", $$css: !0 },
        container: {
          borderStartStartRadius: "xyi3aci",
          borderStartEndRadius: "xwf5gio",
          borderEndEndRadius: "x1p453bz",
          borderEndStartRadius: "x1suzm8a",
          $$css: !0,
        },
        marginBottom16: { marginBottom: "x1ua1l7f", $$css: !0 },
        marginBottom8: { marginBottom: "xefnzgg", $$css: !0 },
      },
      d = {
        storyName: "WAWebCellV2",
        section: o("WAWebShowroomStory.react").StorySectionType.UTIL,
        component: r("WAWebCellV2.react"),
        description:
          "\n    A barebones and unstyled framing component. This basic component makes no assumptions about your padding/margin/color/etc styling. You can apply those yourself per region using props.\n\n    The CellV2Frame is the most barebones component that does very little besides position your content in the right place and provide some minor structure details. The frame assumes that content in the primary/secondary regions are meant for the longest content. The detail and primaryRight/secondaryRight regions are meant for shorter bits of content. Therefore, those smaller regions will actually NOT shrink (as-in, flexbox shrink). If you provide large bits of content to those regions, their region will grow with the content. The primary/secondary regions grow to their content, but will shrink also. This helps with things like text overflow.\n\n    Again, you'll only run into weird structure/overflow issues if you provide very long content to the detail or \"right\" regions, which, by-design, you shouldn't do",
        examples: [
          {
            example: function () {
              var e;
              return s.jsxs(s.Fragment, {
                children: [
                  s.jsx((e = r("WAWebCellFrameV2.react")), {
                    containerXStyle: c.marginBottom16,
                    detailLeft: "Left",
                    detailLeftXStyle: c.blue,
                    primary: "Primary",
                    primaryXStyle: c.green,
                    primaryRight: "PrimaryRight",
                    primaryRightXStyle: c.orange,
                    secondary: "Secondary",
                    secondaryXStyle: c.yellow,
                    secondaryRight: "SecondaryRight",
                    secondaryRightXStyle: c.gray,
                    detailRight: "Right",
                    detailRightXStyle: c.teal,
                  }),
                  s.jsx(e, {
                    containerXStyle: c.marginBottom16,
                    primary: "Primary",
                    primaryXStyle: c.green,
                    primaryRight: "PrimaryRight",
                    primaryRightXStyle: c.orange,
                    secondary: "Secondary",
                    secondaryXStyle: c.yellow,
                    secondaryRight: "SecondaryRight",
                    secondaryRightXStyle: c.gray,
                    detailRight: "Right",
                    detailRightXStyle: c.teal,
                  }),
                  s.jsx(e, {
                    containerXStyle: c.marginBottom16,
                    detailLeft: "Left",
                    detailLeftXStyle: c.blue,
                    primary: "Primary",
                    primaryXStyle: c.green,
                    primaryRight: "PrimaryRight",
                    primaryRightXStyle: c.orange,
                    secondary: "Secondary",
                    secondaryXStyle: c.yellow,
                    secondaryRight: "SecondaryRight",
                    secondaryRightXStyle: c.gray,
                  }),
                  s.jsx(e, {
                    containerXStyle: c.marginBottom16,
                    primary: "Primary",
                    primaryXStyle: c.green,
                    primaryRight: "PrimaryRight",
                    primaryRightXStyle: c.orange,
                    secondary: "Secondary",
                    secondaryXStyle: c.yellow,
                    secondaryRight: "SecondaryRight",
                    secondaryRightXStyle: c.gray,
                  }),
                  s.jsx(e, {
                    containerXStyle: c.marginBottom16,
                    detailLeft: "Left",
                    detailLeftXStyle: c.blue,
                    primary: "Primary",
                    primaryXStyle: c.green,
                    primaryRight: "PrimaryRight",
                    primaryRightXStyle: c.orange,
                    detailRight: "Right",
                    detailRightXStyle: c.teal,
                  }),
                  s.jsx(e, {
                    containerXStyle: c.marginBottom16,
                    primary: "Primary",
                    primaryXStyle: c.green,
                    primaryRight: "PrimaryRight",
                    primaryRightXStyle: c.orange,
                  }),
                  s.jsx(e, {
                    containerXStyle: c.marginBottom16,
                    primary: "Primary",
                    primaryXStyle: c.green,
                  }),
                  s.jsx(e, {
                    containerXStyle: c.marginBottom16,
                    detailLeft: "Left",
                    detailLeftXStyle: c.blue,
                    primary:
                      "Primary with much more content to show overflow and stuff",
                    primaryXStyle: c.green,
                    primaryRight: "PrimaryRight",
                    primaryRightXStyle: c.orange,
                    secondary:
                      "Secondary with much more content to show overflow and stuff",
                    secondaryXStyle: c.yellow,
                    secondaryRight: "SecondaryRight",
                    secondaryRightXStyle: c.gray,
                    detailRight: "Right",
                    detailRightXStyle: c.teal,
                  }),
                ],
              });
            },
            title: "CellV2Frame",
            description:
              "Examples of the barebones CellV2Frame with various content regions omitted. Colors are added to these examples as a visual aid.\n\nThe CellV2Frame makes no assumptions on how to style your content. You should almost never use `CellV2Frame` outside of creating atomic, common, reusable Cell components.",
            templateStyle: u,
          },
          {
            example: function () {
              var e, t;
              return s.jsxs(s.Fragment, {
                children: [
                  s.jsx((t = r("WAWebCellV2.react")), {
                    size: "small",
                    containerXStyle: [c.container, c.marginBottom8],
                    detailLeft: s.jsx(r("WDSIconIcDescriptionFilled.react"), {
                      height: 20,
                      width: 20,
                    }),
                    primary: s.jsx((e = o("WAWebText.react")).WAWebTextTitle, {
                      children: "Primary",
                    }),
                    primaryRight: s.jsx(e.WAWebTextMuted, {
                      children: "PRight",
                    }),
                    secondary: s.jsx(e.WAWebTextMuted, {
                      children: "Secondary",
                    }),
                    secondaryRight: s.jsx(e.WAWebTextMuted, {
                      children: "SRight",
                    }),
                    detailRight: s.jsx(r("WDSIconIcCheck.react"), {}),
                  }),
                  s.jsx(t, {
                    size: "small",
                    containerXStyle: [c.container, c.marginBottom8],
                    detailLeft: s.jsx(r("WDSIconIcDescriptionFilled.react"), {
                      height: 20,
                      width: 20,
                    }),
                    primary: s.jsx(e.WAWebTextTitle, { children: "Primary" }),
                    primaryRight: s.jsx(e.WAWebTextMuted, {
                      children: "PRight",
                    }),
                    detailRight: s.jsx(r("WDSIconIcCheck.react"), {}),
                  }),
                  s.jsx(t, {
                    size: "small",
                    containerXStyle: [c.container, c.marginBottom8],
                    primary: s.jsx(e.WAWebTextTitle, { children: "Primary" }),
                    primaryRight: s.jsx(e.WAWebTextMuted, {
                      children: "PRight",
                    }),
                    detailRight: s.jsx(r("WDSIconIcCheck.react"), {}),
                  }),
                  s.jsx(t, {
                    size: "small",
                    containerXStyle: [c.container, c.marginBottom8],
                    primary: s.jsx(e.WAWebTextTitle, { children: "Primary" }),
                    primaryRight: s.jsx(e.WAWebTextMuted, {
                      children: "PRight",
                    }),
                  }),
                ],
              });
            },
            title: 'CellV2 (size="small")',
            description:
              "A common stylized version of CellV2Frame with tighter content regions and a smaller size, especially when only one row of content is provided. This is used in our menu components, such as the context-menu and select dropdown menus.",
            templateStyle: u,
          },
          {
            example: function () {
              var e, t, n;
              return s.jsxs(s.Fragment, {
                children: [
                  s.jsx((n = r("WAWebCellV2.react")), {
                    size: "medium",
                    containerXStyle: [c.container, c.marginBottom8],
                    detailLeft: s.jsx(r("WDSIconIcGroup.react"), {
                      height: 24,
                      width: 24,
                    }),
                    primary: s.jsx((e = o("WAWebText.react")).WAWebTextTitle, {
                      children: "Primary",
                    }),
                    primaryRight: s.jsx(e.WAWebTextMuted, {
                      children: "PRight",
                    }),
                    secondary: s.jsx(e.WAWebTextMuted, {
                      children: "Secondary",
                    }),
                    secondaryRight: s.jsx(e.WAWebTextMuted, {
                      children: "SRight",
                    }),
                    detailRight: s.jsx((t = r("WDSIconIcCheck.react")), {}),
                  }),
                  s.jsx(n, {
                    size: "medium",
                    containerXStyle: [c.container, c.marginBottom8],
                    detailLeft: s.jsx(r("WDSIconIcGroup.react"), {
                      height: 24,
                      width: 24,
                    }),
                    primary: s.jsx(e.WAWebTextTitle, { children: "Primary" }),
                    primaryRight: s.jsx(e.WAWebTextMuted, {
                      children: "PRight",
                    }),
                    detailRight: s.jsx(t, {}),
                  }),
                  s.jsx(n, {
                    size: "medium",
                    containerXStyle: [c.container, c.marginBottom8],
                    primary: s.jsx(e.WAWebTextTitle, { children: "Primary" }),
                    primaryRight: s.jsx(e.WAWebTextMuted, {
                      children: "PRight",
                    }),
                    detailRight: s.jsx(t, {}),
                  }),
                  s.jsx(n, {
                    size: "medium",
                    containerXStyle: [c.container, c.marginBottom8],
                    primary: s.jsx(e.WAWebTextTitle, { children: "Primary" }),
                    primaryRight: s.jsx(e.WAWebTextMuted, {
                      children: "PRight",
                    }),
                  }),
                  s.jsx(n, {
                    size: "medium",
                    containerXStyle: [c.container, c.marginBottom8],
                    primary: s.jsx(e.WAWebTextTitle, {
                      textWrap: "ellipsis",
                      children:
                        "Primary with much more content to show off ellipsis",
                    }),
                    primaryRight: s.jsx(e.WAWebTextMuted, {
                      children: "PRight",
                    }),
                    secondary: s.jsx(e.WAWebTextMuted, {
                      textWrap: "ellipsis",
                      children:
                        "Secondary with much more content to show off ellipsis",
                    }),
                    secondaryRight: s.jsx(e.WAWebTextMuted, {
                      children: "SRight",
                    }),
                    detailRight: s.jsx(t, {}),
                  }),
                  s.jsx(n, {
                    size: "medium",
                    containerXStyle: [c.container, c.marginBottom8],
                    primary: s.jsx(e.WAWebTextTitle, { children: "Primary" }),
                    primaryRight: s.jsx(e.WAWebTextMuted, {
                      children: "PRight",
                    }),
                    secondary: s.jsx(e.WAWebTextMuted, {
                      textWrap: "wrap",
                      children:
                        "Secondary with much more content to show off text wrapping",
                    }),
                    secondaryRight: s.jsx(e.WAWebTextMuted, {
                      children: "SRight",
                    }),
                    detailRight: s.jsx(t, {}),
                  }),
                ],
              });
            },
            title: 'CellV2 (size="medium")',
            description:
              "A common stylized version of CellV2Frame that has slightly more room for the content regions. The left and right detail are a bit wider and the base height is taller. This is used often in our drawers as rows or buttons",
            templateStyle: u,
          },
          {
            example: function () {
              var e, t;
              return s.jsxs(s.Fragment, {
                children: [
                  s.jsx((t = r("WAWebCellV2.react")), {
                    size: "large",
                    containerXStyle: [c.container, c.marginBottom8],
                    detailLeft: s.jsx(r("WDSIconIcGroup.react"), {
                      height: 48,
                      width: 48,
                    }),
                    primary: s.jsx((e = o("WAWebText.react")).WAWebTextTitle, {
                      children: "Primary",
                    }),
                    primaryRight: s.jsx(e.WAWebTextMuted, {
                      children: "PRight",
                    }),
                    secondary: s.jsx(e.WAWebTextMuted, {
                      children: "Secondary",
                    }),
                    secondaryRight: s.jsx(e.WAWebTextMuted, {
                      children: "SRight",
                    }),
                    detailRight: s.jsx(r("WDSIconIcCheck.react"), {}),
                  }),
                  s.jsx(t, {
                    size: "large",
                    containerXStyle: [c.container, c.marginBottom8],
                    detailLeft: s.jsx(r("WDSIconIcGroup.react"), {
                      height: 48,
                      width: 48,
                    }),
                    primary: s.jsx(e.WAWebTextTitle, { children: "Primary" }),
                    primaryRight: s.jsx(e.WAWebTextMuted, {
                      children: "PRight",
                    }),
                    detailRight: s.jsx(r("WDSIconIcCheck.react"), {}),
                  }),
                  s.jsx(t, {
                    size: "large",
                    containerXStyle: [c.container, c.marginBottom8],
                    primary: s.jsx(e.WAWebTextTitle, { children: "Primary" }),
                    primaryRight: s.jsx(e.WAWebTextMuted, {
                      children: "PRight",
                    }),
                    detailRight: s.jsx(r("WDSIconIcCheck.react"), {}),
                  }),
                  s.jsx(t, {
                    size: "large",
                    containerXStyle: [c.container, c.marginBottom8],
                    primary: s.jsx(e.WAWebTextTitle, { children: "Primary" }),
                    primaryRight: s.jsx(e.WAWebTextMuted, {
                      children: "PRight",
                    }),
                  }),
                ],
              });
            },
            title: 'CellV2 (size="large")',
            description:
              'A common stylized version of CellV2Frame that has even more room for the content regions. The left and right detail are a wider and the base height is tall. This is mostly used as our "chatlist" cell. In general, the "small" and "medium" sizes are most often used.',
            templateStyle: u,
          },
        ],
      };
    l.default = d;
  },
  98,
);
