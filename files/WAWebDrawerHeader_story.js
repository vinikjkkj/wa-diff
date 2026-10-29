__d(
  "WAWebDrawerHeader.story",
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
      u = { padding: 0 },
      c = {
        storyName: "WAWebDrawerHeader",
        component: o("WAWebDrawerHeader.react").DrawerHeader,
        description:
          "\n        Header part of a Drawer that hosts drawer title and close/back button. Sometimes can contain just arbitrary children, like list controls etc.\n    ",
        examples: [
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
            title: "Default",
            description: "Default DrawerHeader has a title and back button.",
          },
          {
            templateStyle: u,
            example: function () {
              return s.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
                title: "Drawer header",
                type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
                onCancel: function () {
                  o("WAWebShowroomAlert").showroomAlert("close drawer");
                },
              });
            },
            title: "Alternative close button",
            description:
              "\n                When <code>onCancel</code> handler is provided, DrawerHeader will display an X (Close) button. Otherwise an arrow (Back) button will be used (see previous example).\n            ",
          },
          {
            templateStyle: u,
            example: function () {
              return s.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
                title: "Drawer header",
                type: "offset",
                onCancel: function () {
                  o("WAWebShowroomAlert").showroomAlert("close drawer");
                },
              });
            },
            title: 'type = "offset"',
            description:
              "\n                Example: Group info &rarr; Click group photo &rarr; Upload photo. The UI inside the popup is also a Drawer, that is using this type of DrawerHeader.\n            ",
          },
          {
            templateStyle: u,
            example: function () {
              return s.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
                title: "Drawer header",
                type: "popup",
                onCancel: function () {
                  o("WAWebShowroomAlert").showroomAlert("close drawer");
                },
              });
            },
            title: 'type = "popup"',
            description: "Another variation for drawers inside popups.",
          },
        ],
      };
    l.default = c;
  },
  98,
);
