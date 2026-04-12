__d(
  "WAWebContextualBanner.react",
  [
    "WAWebActionLinkButterbar.react",
    "WAWebExperimentIcon.react",
    "WAWebFbtCommon",
    "WAWebFlex.react",
    "WAWebIcLightbulbIcon.react",
    "WAWebUISpacing",
    "WAWebXIcon.react",
    "WDSButton.react",
    "react",
    "stylex",
  ],
  function (t, n, r, o, a, i, l) {
    var e = ["ref"],
      s,
      u,
      c = u || (u = o("react")),
      d = 30,
      m = {
        action: { cursor: "x1ypdohk", $$css: !0 },
        icon: { minWidth: "x17s4nb9", $$css: !0 },
        bannerWrapper: {
          flex: "x1okw0bk",
          overflowX: "x6ikm8r",
          overflowY: "x10wlt62",
          transformOrigin: "x1dp6rp6",
          backgroundColor: "x1280gxy",
          $$css: !0,
        },
        banner: {
          minHeight: "x1wjjzik",
          borderTopWidth: "x178xt8z",
          borderInlineEndWidth: "x1lun4ml",
          borderBottomWidth: "xso031l",
          borderInlineStartWidth: "xpilrb4",
          borderTopStyle: "x13fuv20",
          borderInlineEndStyle: "x18b5jzi",
          borderBottomStyle: "x1q0q8m5",
          borderInlineStartStyle: "x1t7ytsu",
          borderTopColor: "xk1nh2v",
          borderInlineEndColor: "xjm5g7b",
          borderBottomColor: "xsbzixq",
          borderInlineStartColor: "x134z7cn",
          backgroundColor: "xjp690a",
          borderStartStartRadius: "x16qb05n",
          borderStartEndRadius: "xi7iut8",
          borderEndEndRadius: "x1dm3dyd",
          borderEndStartRadius: "x1pv694p",
          $$css: !0,
        },
        dismiss: { color: "x197um1m", minWidth: "xnei2rj", $$css: !0 },
        text: {
          fontSize: "x1f6kntn",
          lineHeight: "x17fgdl5",
          color: "x14ug900",
          $$css: !0,
        },
      };
    function p(e) {
      var t = e.name;
      switch (t) {
        case "experiment":
          return c.jsx(o("WAWebExperimentIcon.react").ExperimentIcon, {
            width: d,
          });
        default:
          return c.jsx(o("WAWebIcLightbulbIcon.react").IcLightbulbIcon, {
            width: d,
            height: d,
          });
      }
    }
    p.displayName = p.name + " [from " + i.id + "]";
    function _(t) {
      var n = t.ref,
        a = babelHelpers.objectWithoutPropertiesLoose(t, e),
        i = a.canShow,
        l = a.config,
        u = a.onClick,
        d = a.onDismiss,
        _ = l.actionText,
        f = l.dismissable,
        g = l.iconName,
        h = l.showIcon,
        y = l.title,
        C = function () {
          u();
        },
        b = function () {
          d();
        },
        v = c.jsx(r("WDSButton.react"), {
          "aria-label": r("WAWebFbtCommon")("Close"),
          Icon: o("WAWebXIcon.react").XIcon,
          onPress: b,
          variant: "borderless",
        }),
        S = h ? c.jsx(p, { name: g }) : null,
        R =
          y != null
            ? c.jsx("div", {
                className: "x6prxxf xdod15v x14ug900",
                children: y,
              })
            : null,
        L =
          _ != null
            ? c.jsx(
                "div",
                babelHelpers.extends(
                  {},
                  (s || (s = r("stylex"))).props(
                    m.text,
                    o("WAWebUISpacing").uiMargin.top5,
                  ),
                  {
                    children: c.jsx(r("WAWebActionLinkButterbar.react"), {
                      children: _,
                    }),
                  },
                ),
              )
            : null;
      return i
        ? c.jsx(
            "div",
            babelHelpers.extends(
              { ref: n },
              (s || (s = r("stylex"))).props(
                m.bannerWrapper,
                o("WAWebUISpacing").uiPadding.horiz25,
                o("WAWebUISpacing").uiPadding.vert10,
              ),
              {
                children: c.jsxs(o("WAWebFlex.react").FlexRow, {
                  xstyle: [m.banner, o("WAWebUISpacing").uiPadding.all12],
                  children: [
                    c.jsx(o("WAWebFlex.react").FlexItem, {
                      grow: 0,
                      xstyle: [
                        m.action,
                        h && m.icon,
                        o("WAWebUISpacing").uiPadding.end10,
                      ],
                      children:
                        S &&
                        c.jsx("div", {
                          onClick: C,
                          "aria-hidden": !0,
                          children: S,
                        }),
                    }),
                    c.jsx(o("WAWebFlex.react").FlexItem, {
                      grow: 1,
                      xstyle: [m.action, o("WAWebUISpacing").uiMargin.end10],
                      children: c.jsxs("div", {
                        onClick: C,
                        tabIndex: 0,
                        role: "button",
                        children: [R, L],
                      }),
                    }),
                    f &&
                      c.jsx(o("WAWebFlex.react").FlexItem, {
                        grow: 0,
                        xstyle: m.dismiss,
                        children: v,
                      }),
                  ],
                }),
              },
            ),
          )
        : null;
    }
    ((_.displayName = _.name + " [from " + i.id + "]"), (l.default = _));
  },
  98,
);
