__d(
  "WAWebMenu.story",
  [
    "WAWebMenu.react",
    "WAWebMenuItems.react",
    "WAWebShowroomStory.react",
    "WAWebToast.react",
    "WAWebToastManager",
    "WDSIconIcArrowForward.react",
    "WDSIconIcBlock.react",
    "WDSIconIcNotifications.react",
    "WDSIconWdsIcChat.react",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = { flex: "1 1 75%" };
    function c() {
      o("WAWebToastManager").ToastManager.open(
        s.jsx(o("WAWebToast.react").Toast, {
          msg: "You clicked the button \uD83C\uDF89",
          id: o("WAWebToast.react").genId(),
        }),
      );
    }
    var d = {
      storyName: "WAWebMenu",
      section: o("WAWebShowroomStory.react").StorySectionType.MOLECULE,
      component: o("WAWebMenu.react").WAWebMenu,
      description:
        "\n    A barebones and unstyled framing component. This basic component makes no assumptions about your padding/margin/color/etc styling. You can apply those yourself per region using props.",
      examples: [
        {
          example: function () {
            return s.jsxs(o("WAWebMenu.react").WAWebMenu, {
              children: [
                s.jsx(o("WAWebMenuItems.react").ActionMenuItem, {
                  optionId: "1",
                  primary: "Action 1",
                  onSelect: c,
                }),
                s.jsx(o("WAWebMenuItems.react").ActionMenuItem, {
                  optionId: "2",
                  primary: "Action 2",
                  onSelect: c,
                }),
                s.jsx(o("WAWebMenuItems.react").ActionMenuItem, {
                  optionId: "3",
                  primary: "Action 3",
                  onSelect: c,
                }),
              ],
            });
          },
          title: "ActionMenuItem",
          description: "TODO",
          templateStyle: u,
        },
        {
          example: function () {
            var e;
            return s.jsx(o("WAWebMenu.react").WAWebMenu, {
              children: s.jsxs(
                (e = o("WAWebMenuItems.react")).SelectMenuItemGroup,
                {
                  initialSelection: "2",
                  children: [
                    s.jsx(e.SelectMenuItem, {
                      optionId: "1",
                      primary: "Choice 1",
                    }),
                    s.jsx(e.SelectMenuItem, {
                      optionId: "2",
                      primary: "Choice 2",
                    }),
                    s.jsx(e.SelectMenuItem, {
                      optionId: "3",
                      primary: "Choice 3",
                    }),
                  ],
                },
              ),
            });
          },
          title: "SelectMenuItem",
          description: "TODO",
          templateStyle: u,
        },
        {
          example: function () {
            var e;
            return s.jsx(o("WAWebMenu.react").WAWebMenu, {
              children: s.jsxs(
                (e = o("WAWebMenuItems.react")).SelectMenuItemGroup,
                {
                  multiselect: !0,
                  initialSelection: ["2", "3"],
                  children: [
                    s.jsx(e.SelectMenuItem, {
                      optionId: "1",
                      primary: "Multi choice 1",
                    }),
                    s.jsx(e.SelectMenuItem, {
                      optionId: "2",
                      primary: "Multi choice 2",
                    }),
                    s.jsx(e.SelectMenuItem, {
                      optionId: "3",
                      primary: "Multi choice 3",
                    }),
                  ],
                },
              ),
            });
          },
          title: "SelectMenuItem (multi-select)",
          description: "TODO",
          templateStyle: u,
        },
        {
          example: function () {
            return s.jsxs(o("WAWebMenu.react").WAWebMenu, {
              children: [
                s.jsx(o("WAWebMenuItems.react").SwitchMenuItem, {
                  optionId: "1",
                  primary: "Switch 1",
                }),
                s.jsx(o("WAWebMenuItems.react").SwitchMenuItem, {
                  optionId: "2",
                  primary: "Switch 2",
                }),
                s.jsx(o("WAWebMenuItems.react").SwitchMenuItem, {
                  optionId: "3",
                  primary: "Switch 3",
                }),
              ],
            });
          },
          title: "SwitchMenuItem",
          description: "TODO",
          templateStyle: u,
        },
        {
          example: function () {
            var e;
            return s.jsxs(o("WAWebMenu.react").WAWebMenu, {
              children: [
                s.jsx((e = o("WAWebMenuItems.react")).MenuSearchInput, {
                  focusOnMount: !1,
                }),
                s.jsx(e.ActionMenuItem, {
                  optionId: "1",
                  primary: "Apple",
                  onSelect: c,
                }),
                s.jsx(e.ActionMenuItem, {
                  optionId: "2",
                  primary: "Berry",
                  onSelect: c,
                }),
                s.jsx(e.ActionMenuItem, {
                  optionId: "3",
                  primary: "Carrot",
                  onSelect: c,
                }),
              ],
            });
          },
          title: "MenuSearchInput",
          description: "TODO",
          templateStyle: u,
        },
        {
          example: function () {
            var e;
            return s.jsxs(o("WAWebMenu.react").WAWebMenu, {
              children: [
                s.jsx((e = o("WAWebMenuItems.react")).MenuSearchInput, {
                  focusOnMount: !1,
                }),
                s.jsx(e.ActionMenuItem, {
                  optionId: "a-1",
                  primary: "Action 1",
                  onSelect: c,
                }),
                s.jsx(e.ActionMenuItem, {
                  optionId: "a-2",
                  primary: "Action 2",
                  onSelect: c,
                }),
                s.jsx(e.ActionMenuItem, {
                  optionId: "a-3",
                  primary: "Action 3",
                  onSelect: c,
                }),
                s.jsxs(e.SelectMenuItemGroup, {
                  initialSelection: "single-2",
                  children: [
                    s.jsx(e.SelectMenuItem, {
                      optionId: "single-1",
                      primary: "Choice 1",
                    }),
                    s.jsx(e.SelectMenuItem, {
                      optionId: "single-2",
                      primary: "Choice 2",
                    }),
                    s.jsx(e.SelectMenuItem, {
                      optionId: "single-3",
                      primary: "Choice 3",
                    }),
                  ],
                }),
                s.jsxs(e.SelectMenuItemGroup, {
                  multiselect: !0,
                  initialSelection: ["multi-2", "multi-3"],
                  children: [
                    s.jsx(e.SelectMenuItem, {
                      optionId: "multi-1",
                      primary: "Multi Choice 1",
                    }),
                    s.jsx(e.SelectMenuItem, {
                      optionId: "multi-2",
                      primary: "Multi Choice 2",
                    }),
                    s.jsx(e.SelectMenuItem, {
                      optionId: "multi-3",
                      primary: "Multi Choice 3",
                    }),
                  ],
                }),
                s.jsx(e.SwitchMenuItem, {
                  optionId: "switch-1",
                  primary: "Switch 1",
                }),
                s.jsx(e.SwitchMenuItem, {
                  optionId: "switch-2",
                  primary: "Switch 2",
                }),
              ],
            });
          },
          title: "Everything combined",
          description: "TODO",
          templateStyle: u,
        },
        {
          example: function () {
            return s.jsxs(o("WAWebMenu.react").WAWebMenu, {
              children: [
                s.jsx(o("WAWebMenuItems.react").ActionMenuItem, {
                  optionId: "message",
                  primary: "Message",
                  detailLeft: s.jsx(r("WDSIconWdsIcChat.react"), {
                    height: 20,
                  }),
                  onSelect: c,
                }),
                s.jsx(o("WAWebMenuItems.react").ActionMenuItem, {
                  optionId: "mute",
                  primary: "Mute",
                  detailLeft: s.jsx(r("WDSIconIcNotifications.react"), {
                    height: 18,
                    width: 18,
                  }),
                  onSelect: c,
                }),
                s.jsx(o("WAWebMenuItems.react").ActionMenuItem, {
                  optionId: "block",
                  primary: "Block",
                  detailLeft: s.jsx(r("WDSIconIcBlock.react"), {
                    height: 20,
                    width: 20,
                  }),
                  onSelect: c,
                }),
              ],
            });
          },
          title: "More detailed Cells",
          description: "TODO",
          templateStyle: u,
        },
        {
          example: function () {
            return s.jsxs(o("WAWebMenu.react").WAWebMenu, {
              children: [
                s.jsx(o("WAWebMenuItems.react").ActionMenuItem, {
                  optionId: "message",
                  primary: "Message",
                  secondary: "Start a chat",
                  detailLeft: s.jsx(r("WDSIconWdsIcChat.react"), {
                    height: 20,
                  }),
                  detailRight: s.jsx(r("WDSIconIcArrowForward.react"), {
                    height: 32,
                    width: 32,
                  }),
                  onSelect: c,
                }),
                s.jsx(o("WAWebMenuItems.react").SwitchMenuItem, {
                  optionId: "mute",
                  primary: "Mute",
                  secondary: "Mute this person",
                  detailLeft: s.jsx(r("WDSIconIcNotifications.react"), {
                    height: 18,
                    width: 18,
                  }),
                }),
                s.jsx(o("WAWebMenuItems.react").SwitchMenuItem, {
                  optionId: "block",
                  primary: "Block",
                  secondary: "Block this person",
                  detailLeft: s.jsx(r("WDSIconIcBlock.react"), {
                    height: 20,
                    width: 20,
                  }),
                }),
              ],
            });
          },
          title: "Very detailed Cells",
          description: "TODO",
          templateStyle: u,
        },
      ],
    };
    l.default = d;
  },
  98,
);
