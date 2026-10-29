__d(
  "WAWebIconTabs.story",
  [
    "WAWebIconTabs.react",
    "WDSIconIcMood.react",
    "WDSIconWdsIcSticker.react",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useEffect,
      d = u.useRef,
      m = u.useState,
      p = {
        emojiIcon: { width: "x17z2i9w", height: "x17rw0jw", $$css: !0 },
        stickerIcon: { width: "x1ig0tib", height: "x1pwvq5b", $$css: !0 },
      };
    function _(e) {
      var t = e.moreTags,
        n = e.popupAtLaunch,
        o = e.showRef,
        a = m(null),
        i = a[0],
        l = a[1],
        u = d([]),
        _ = [
          { Icon: r("WDSIconIcMood.react"), iconStyle: p.emojiIcon },
          { Icon: r("WDSIconWdsIcSticker.react"), iconStyle: p.stickerIcon },
        ];
      return (
        c(
          function () {
            o && l(0);
          },
          [o],
        ),
        s.jsxs("div", {
          className: "xeq5yr9",
          children: [
            s.jsx(r("WAWebIconTabs.react"), {
              refs: u.current,
              selectedIndex: i,
              onSelect: function (t) {
                return l(t);
              },
              tabConfigs: t ? _.concat(_) : _,
              popupAtLaunch: n,
            }),
            s.jsx("button", {
              className: "x1anpbxc",
              onClick: function () {
                return l(null);
              },
              children: "Reset",
            }),
            s.jsx("div", {
              className: "x1anpbxc",
              children: "Selected tab: " + (i == null ? "null" : i.toString()),
            }),
            o
              ? s.jsx("div", {
                  className: "x1anpbxc x1pg5gke",
                  children: u.current
                    .map(function (e) {
                      var t, n;
                      return (t =
                        (n = e.current) == null ? void 0 : n.toString()) != null
                        ? t
                        : "null";
                    })
                    .join("\n"),
                })
              : void 0,
          ],
        })
      );
    }
    _.displayName = _.name + " [from " + i.id + "]";
    var f = {
      storyName: "WAWebIconTabs",
      component: r("WAWebIconTabs.react"),
      description:
        "Generic tabs component with keyboard support for switching tabs.",
      examples: [
        {
          example: function () {
            return s.jsx(_, {});
          },
          title: "Default tabs",
        },
        {
          example: function () {
            return s.jsx(_, { popupAtLaunch: !0 });
          },
          title: "Icons popup at launch",
          description: "popupAtLaunch=true",
        },
        {
          example: function () {
            return s.jsx(_, { moreTags: !0 });
          },
          title: "More icon tags",
          description: "tabConfig.length==4",
        },
        {
          example: function () {
            return s.jsx(_, { showRef: !0 });
          },
          title: "Get refs of icons",
          description:
            "iconRefs:Array of RefType \nPass iconRefs into IconTabs.props.refs\n(Tab 0 is selected intitially to trigger the rerender for showing refs)",
        },
      ],
    };
    l.default = f;
  },
  98,
);
