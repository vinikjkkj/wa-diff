__d(
  "WAWebDrawerBody.story",
  [
    "WAWebDrawer.react",
    "WAWebDrawerBody.react",
    "WAWebDrawerHeader.react",
    "WAWebShowroomAlert",
    "WAWebShowroomUtils",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = {
        storyName: "WAWebDrawerBody",
        component: r("WAWebDrawerBody.react"),
        description:
          "\n        Main part of a Drawer that hosts main content. Will occupy all available space and have vertical scrolling if the content is overflowing. Is a column flexbox, so children can use\n            <code>flex-grow</code> and <code>flex-shrink</code>.\n    ",
        examples: [
          {
            templateStyle: o("WAWebShowroomUtils").mediumPreview,
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
                  s.jsx(r("WAWebDrawerBody.react"), {
                    children: s.jsx("div", {
                      style: { padding: 15 },
                      children:
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                    }),
                  }),
                ],
              });
            },
            title: "Full drawer",
            description:
              "Drawer with a lot of content. DrawerBody becomes scrollable.",
          },
          {
            templateStyle: o("WAWebShowroomUtils").mediumPreview,
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
                  s.jsx(r("WAWebDrawerBody.react"), {
                    theme: "center-content",
                    children:
                      "Content inside this drawer will be vertically centered.",
                  }),
                ],
              });
            },
            title: 'theme = "center-content"',
            description: "Center content vertically",
          },
          {
            templateStyle: o("WAWebShowroomUtils").mediumPreview,
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
                  s.jsx(r("WAWebDrawerBody.react"), {
                    theme: "padding",
                    children:
                      "Content inside this drawer will have additional top and bottom padding.",
                  }),
                ],
              });
            },
            title: 'theme = "padding"',
            description: "Add padding at the top and bottom of content",
          },
        ],
      };
    l.default = u;
  },
  98,
);
