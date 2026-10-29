__d(
  "WAWebDrawer.story",
  [
    "WAWebDrawer.react",
    "WAWebDrawerBody.react",
    "WAWebDrawerHeader.react",
    "WAWebDrawerSection.react",
    "WAWebShowroomAlert",
    "WAWebShowroomUtils",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = {
        storyName: "WAWebDrawer",
        component: r("WAWebDrawer.react"),
        description:
          "\n        A Drawer is essentially just a container that will display children as a column flexbox. For example, <code>Drawer</code> appears from the left via <i>Menu &rarr; New group</i>.\n\n        Drawer themes are currently used to change drawer background color according to context (e.g. <code>AttachMediaDrawer</code> is using dark gray background as opposed to defaul light gray).\n\n        Drawers can also be used inside popups/modals (For example, Group info &rarr; Click group photo &rarr; Upload photo. The UI inside is also a Drawer).\n\n        Standard drawer enter and exit animations are not a part of Drawer itself, but are applied by DrawerManager.\n    ",
        examples: [
          {
            templateStyle: o("WAWebShowroomUtils").mediumPreview,
            example: s.jsx(r("WAWebDrawer.react"), {
              children: "Empty drawer",
            }),
            title: "Default",
            description: "Drawer is basically just a box",
          },
          {
            templateStyle: o("WAWebShowroomUtils").bigPreview,
            example: function () {
              return s.jsxs(r("WAWebDrawer.react"), {
                children: [
                  s.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
                    title: "Drawer header",
                    type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
                    onBack: function () {
                      o("WAWebShowroomAlert").showroomAlert("close drawer");
                    },
                  }),
                  s.jsxs(r("WAWebDrawerBody.react"), {
                    children: [
                      s.jsx(r("WAWebDrawerSection.react"), {
                        theme: "padding-large",
                        children: "First section inside a drawer",
                      }),
                      s.jsx(r("WAWebDrawerSection.react"), {
                        theme: "padding-large",
                        children:
                          "Second section. Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
                      }),
                    ],
                  }),
                ],
              });
            },
            title: "Fully Built Drawer",
            description:
              "\n                This is an example of a fully built Drawer with DrawerHeader, DrawerBody and two DrawerSection's inside.\n            ",
          },
        ],
      };
    l.default = u;
  },
  98,
);
