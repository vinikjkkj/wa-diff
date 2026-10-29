__d(
  "WAWebDrawerButton.story",
  [
    "WAWebCheckBox.react",
    "WAWebDrawer.react",
    "WAWebDrawerBody.react",
    "WAWebDrawerButton.react",
    "WAWebDrawerHeader.react",
    "WAWebDrawerSection.react",
    "WAWebNoop",
    "WAWebShowroomAlert",
    "WAWebShowroomUtils",
    "WDSIconIcBlock.react",
    "WDSIconIcDelete.react",
    "WDSSwitch.react",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = {
        storyName: "WAWebDrawerButton",
        component: o("WAWebDrawerButton.react").DrawerButtonSimple,
        description: "Action items in Drawers.",
        examples: [
          {
            example: function () {
              return s.jsx(o("WAWebDrawerButton.react").DrawerButtonSimple, {
                onClick: function () {
                  o("WAWebShowroomAlert").showroomAlert("do it");
                },
                children: "Do something",
              });
            },
            title: "Default",
            description:
              "DrawerButton does not render its own white block with a shade, so it usually needs to be wrapped in a DrawerSection",
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
                        children: "Content section inside a drawer",
                      }),
                      s.jsx(r("WAWebDrawerSection.react"), {
                        children: s.jsx(
                          o("WAWebDrawerButton.react").DrawerButtonSimple,
                          {
                            onClick: function () {
                              o("WAWebShowroomAlert").showroomAlert("add");
                            },
                            children: "Add item",
                          },
                        ),
                      }),
                      s.jsx(r("WAWebDrawerSection.react"), {
                        children: s.jsx(
                          o("WAWebDrawerButton.react").DrawerButtonSimple,
                          {
                            onClick: function () {
                              o("WAWebShowroomAlert").showroomAlert("delete");
                            },
                            color: "danger",
                            icon: s.jsx(r("WDSIconIcDelete.react"), {}),
                            children: "Delete all",
                          },
                        ),
                      }),
                    ],
                  }),
                ],
              });
            },
            title: "Full Drawer Example",
            description:
              "\n                Full drawer example, 'Add item' and 'Delete all' are example DrawerButtons\n            ",
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
                  s.jsx(r("WAWebDrawerBody.react"), {
                    children: s.jsxs(r("WAWebDrawerSection.react"), {
                      children: [
                        s.jsx(o("WAWebDrawerButton.react").DrawerButtonSimple, {
                          onClick: function () {
                            o("WAWebShowroomAlert").showroomAlert(
                              "button 1 clicked",
                            );
                          },
                          secondaryChildren:
                            "This label is a 'secondary child'.",
                          children: "This text is the main child node.",
                        }),
                        s.jsx(o("WAWebDrawerButton.react").DrawerButtonSimple, {
                          onClick: function () {
                            o("WAWebShowroomAlert").showroomAlert(
                              "button 2 clicked",
                            );
                          },
                          secondaryChildren:
                            "This label is a 'secondary child'.",
                          detail: s.jsx(r("WDSSwitch.react"), {
                            value: !0,
                            onChange: r("WAWebNoop"),
                          }),
                          children: "This button has detail (switch).",
                        }),
                        s.jsx(o("WAWebDrawerButton.react").DrawerButtonSimple, {
                          onClick: function () {
                            o("WAWebShowroomAlert").showroomAlert(
                              "button 3 clicked",
                            );
                          },
                          detail: s.jsx(o("WAWebCheckBox.react").CheckBox, {
                            checked: !0,
                            onChange: r("WAWebNoop"),
                          }),
                          children: "This button only has detail (checkbox).",
                        }),
                      ],
                    }),
                  }),
                ],
              });
            },
            title: "Drawer buttons with secondary children and detail",
          },
          {
            example: function () {
              return s.jsx(o("WAWebDrawerButton.react").DrawerButtonSimple, {
                onClick: function () {
                  o("WAWebShowroomAlert").showroomAlert("do it");
                },
                color: "success",
                icon: s.jsx(r("WDSIconIcBlock.react"), {
                  height: 24,
                  width: 24,
                }),
                children: "Unblock contact",
              });
            },
            title: 'color = "success"',
          },
        ],
      };
    l.default = u;
  },
  98,
);
