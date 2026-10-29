__d(
  "WAWebDrawerItem.story",
  [
    "WAWebDrawer.react",
    "WAWebDrawerBody.react",
    "WAWebDrawerHeader.react",
    "WAWebDrawerItem.react",
    "WAWebDrawerSection.react",
    "WAWebShowroomAlert",
    "WAWebShowroomUtils",
    "WDSIconWdsIcChat.react",
    "WDSVars.stylex",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = {
        storyName: "WAWebDrawerItem",
        component: r("WAWebDrawerItem.react"),
        description:
          "\n        A block with a sub-title (title below content), content and an optional icon on the right.\n\n        Currently only used when displaying contact (Vcard) content.\n    ",
        examples: [
          {
            example: function () {
              return s.jsx(r("WAWebDrawerItem.react"), {
                title: "Content",
                icon: s.jsx(r("WDSIconWdsIcChat.react"), {}),
                isLastItem: !0,
                children: "Title",
              });
            },
            title: "Default",
            description:
              "Note: the child component of DrawerItem is actully the sub-title. The <code>title</code> prop is the main content.",
          },
          {
            templateStyle: o("WAWebShowroomUtils").bigPreview,
            example: function () {
              return s.jsxs(r("WAWebDrawer.react"), {
                children: [
                  s.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
                    title: "View contact",
                    type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.POPUP,
                    onBack: function () {
                      o("WAWebShowroomAlert").showroomAlert("close drawer");
                    },
                  }),
                  s.jsx(r("WAWebDrawerBody.react"), {
                    children: s.jsxs(r("WAWebDrawerSection.react"), {
                      theme: "padding",
                      children: [
                        s.jsx("div", {
                          style: {
                            padding:
                              o("WDSVars.stylex").WDSVars.spacingSinglePlus +
                              " 0",
                          },
                          children: "Contact name and user photo",
                        }),
                        s.jsx(r("WAWebDrawerItem.react"), {
                          isLastItem: !0,
                          title: "+1 (650) 555-1234",
                          icon: s.jsx(r("WDSIconWdsIcChat.react"), {}),
                          children: "Mobile",
                        }),
                      ],
                    }),
                  }),
                ],
              });
            },
            title: "Example with mock data",
          },
        ],
      };
    l.default = u;
  },
  98,
);
