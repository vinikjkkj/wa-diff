__d(
  "WAWebDrawerBlock.story",
  [
    "WAWebDrawerBlock.react",
    "WAWebDrawerSection.react",
    "WAWebShowroomAlert",
    "WAWebText.react",
    "WDSIconIcChevronRight.react",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = {
        storyName: "WAWebDrawerBlock",
        component: r("WAWebDrawerBlock.react"),
        description:
          "\n        Action item in drawers. This mainly creates an empty frame for text and side element, but does not provide visual properties. Usually appears inside <code>DrawerSection</code>\n    ",
        examples: [
          {
            example: function () {
              return s.jsx(r("WAWebDrawerBlock.react"), {
                side: s.jsx(r("WDSIconIcChevronRight.react"), { height: 21 }),
                children: "Label here",
              });
            },
            title: "Default",
            description:
              "Has almost no formatting. Main part expands to take the whole width, side element (icon) will stay on the right.",
          },
          {
            example: function () {
              return s.jsxs(r("WAWebDrawerSection.react"), {
                children: [
                  s.jsx(r("WAWebDrawerBlock.react"), {
                    side: s.jsx(r("WDSIconIcChevronRight.react"), {
                      height: 21,
                    }),
                    onClick: function () {
                      o("WAWebShowroomAlert").showroomAlert("hey");
                    },
                    children: s.jsx(o("WAWebText.react").WAWebTextTitle, {
                      as: "span",
                      children: "Starred messages",
                    }),
                  }),
                  s.jsx(r("WAWebDrawerBlock.react"), {
                    side: s.jsx(r("WDSIconIcChevronRight.react"), {
                      height: 21,
                    }),
                    onClick: function () {
                      o("WAWebShowroomAlert").showroomAlert("hey");
                    },
                    children: s.jsx(o("WAWebText.react").WAWebTextTitle, {
                      as: "span",
                      children: "Another block",
                    }),
                  }),
                ],
              });
            },
            title: "DrawerBlock inside DrawerSection",
            description:
              "Note that adjacent DrawerBlocks will automagically insert a separating line between them.",
          },
        ],
      };
    l.default = u;
  },
  98,
);
