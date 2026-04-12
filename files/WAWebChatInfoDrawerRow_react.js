__d(
  "WAWebChatInfoDrawerRow.react",
  [
    "WAWebChatInfoDrawerBlock.react",
    "WAWebChevronIcon.react",
    "WAWebFlex.react",
    "WAWebText.react",
    "WAWebUISpacing",
    "react",
    "stylex",
  ],
  function (t, n, r, o, a, i, l) {
    var e = ["icon", "secondaryTitle", "side", "spaced", "title", "xstyle"],
      s = [
        "containerXstyle",
        "icon",
        "secondaryTitle",
        "side",
        "title",
        "xstyle",
      ],
      u,
      c,
      d = c || (c = o("react")),
      m = {
        iconContainer: {
          marginInlineEnd: "x1xegmmw",
          width: "x100vrsf",
          height: "xxk0z11",
          flexGrow: "x1c4vz4f",
          flexShrink: "x2lah0s",
          $$css: !0,
        },
        secondaryColor: { color: "xhslqc4", $$css: !0 },
        iconContainerRefreshed: {
          width: "x100vrsf",
          height: "x16wdlz0",
          flexGrow: "x1c4vz4f",
          flexShrink: "x2lah0s",
          color: "xhslqc4",
          $$css: !0,
        },
        contentRefreshed: {
          flexGrow: "x1iyjqo2",
          flexShrink: "xs83m0k",
          minWidth: "xeuugli",
          overflowWrap: "x1mzt3pk",
          $$css: !0,
        },
        drawerSide: {
          flexGrow: "x1c4vz4f",
          flexShrink: "x2lah0s",
          width: "x14qfxbe",
          $$css: !0,
        },
        drawerSideRefreshed: {
          flexGrow: "x1c4vz4f",
          flexShrink: "x2lah0s",
          $$css: !0,
        },
        hoverStateRefreshed: {
          borderStartStartRadius: "x7zqoo0",
          borderStartEndRadius: "xt1g1te",
          borderEndEndRadius: "x1iz9ej4",
          borderEndStartRadius: "x1ga13z8",
          ":hover_backgroundColor": "x1n67ipk",
          $$css: !0,
        },
      };
    function p(e) {
      var t = e.title;
      return d.jsx(o("WAWebText.react").WAWebTextTitleRefreshed, {
        children: t,
      });
    }
    p.displayName = p.name + " [from " + i.id + "]";
    function _(e) {
      var t = e.testid,
        n = e.title;
      return d.jsx(o("WAWebText.react").WAWebTextMutedRefreshed, {
        testid: void 0,
        children: n,
      });
    }
    _.displayName = _.name + " [from " + i.id + "]";
    function f(e) {
      var t = e.children,
        n = e.hasSecondaryTitle,
        r = e.isRefresh;
      return d.jsx(o("WAWebFlex.react").FlexRow, {
        align: "center",
        justify: "center",
        xstyle:
          r === !0
            ? [
                m.iconContainerRefreshed,
                n === !0 && o("WAWebUISpacing").uiPadding.top5,
                o("WAWebUISpacing").uiMargin.end14,
              ]
            : m.iconContainer,
        children: t,
      });
    }
    f.displayName = f.name + " [from " + i.id + "]";
    function g(t) {
      var n = t.icon,
        a = t.secondaryTitle,
        i = t.side,
        l = t.spaced,
        s = l === void 0 ? !1 : l,
        c = t.title,
        m = t.xstyle,
        p = babelHelpers.objectWithoutPropertiesLoose(t, e),
        _ = y({ icon: n, title: c, rightSide: i });
      return d.jsx(
        r("WAWebChatInfoDrawerBlock.react"),
        babelHelpers.extends({ xstyle: m }, p, {
          multiline: !0,
          children: d.jsxs(
            "div",
            babelHelpers.extends(
              {},
              (u || (u = r("stylex"))).props(
                s && o("WAWebUISpacing").uiMargin.horiz30,
              ),
              {
                children: [
                  _,
                  d.jsx(
                    "div",
                    babelHelpers.extends(
                      {},
                      { 0: {}, 1: { className: "x19wmrak x2pibh5" } }[
                        (_ != null) << 0
                      ],
                      { children: a },
                    ),
                  ),
                ],
              },
            ),
          ),
        }),
      );
    }
    g.displayName = g.name + " [from " + i.id + "]";
    function h(e) {
      var t = e.containerXstyle,
        n = e.icon,
        a = e.secondaryTitle,
        i = e.side,
        l = e.title,
        c = e.xstyle,
        p = babelHelpers.objectWithoutPropertiesLoose(e, s),
        _ = p.onClick != null;
      return d.jsx(
        r("WAWebChatInfoDrawerBlock.react"),
        babelHelpers.extends({ isRefresh: !0, multiline: !0, xstyle: c }, p, {
          children: d.jsx(
            "div",
            babelHelpers.extends(
              {},
              (u || (u = r("stylex"))).props(
                o("WAWebUISpacing").uiPadding.horiz20,
                o("WAWebUISpacing").uiPadding.vert10,
                o("WAWebUISpacing").uiMargin.horiz10,
                _ && m.hoverStateRefreshed,
                t,
              ),
              {
                children: d.jsxs(o("WAWebFlex.react").FlexRow, {
                  align: "stretch",
                  children: [
                    n != null
                      ? d.jsx(f, {
                          hasSecondaryTitle: a != null,
                          isRefresh: !0,
                          children: n,
                        })
                      : null,
                    d.jsxs(o("WAWebFlex.react").FlexColumn, {
                      grow: 1,
                      children: [
                        d.jsx(o("WAWebFlex.react").FlexRow, {
                          align: "center",
                          className: u([
                            m.contentRefreshed,
                            a == null && [
                              o("WAWebUISpacing").uiPadding.top8,
                              o("WAWebUISpacing").uiPadding.bottom10,
                            ],
                          ]),
                          grow: 1,
                          children: l,
                        }),
                        d.jsx(o("WAWebFlex.react").FlexRow, { children: a }),
                      ],
                    }),
                    d.jsx(o("WAWebFlex.react").FlexRow, {
                      align: "center",
                      justify: "end",
                      xstyle: [
                        m.drawerSideRefreshed,
                        o("WAWebUISpacing").uiMargin.start14,
                      ],
                      children: i,
                    }),
                  ],
                }),
              },
            ),
          ),
        }),
      );
    }
    h.displayName = h.name + " [from " + i.id + "]";
    function y(e) {
      var t = e.icon,
        n = e.rightSide,
        r = e.title;
      if (t == null && r == null && n == null) return null;
      var a = n != null ? n : "";
      a === "chevron" &&
        (a = d.jsx(o("WAWebChevronIcon.react").ChevronIcon, {
          iconXstyle: m.secondaryColor,
          directional: !0,
          height: 21,
        }));
      var i = t != null ? d.jsx(f, { children: t }) : null;
      return d.jsxs(o("WAWebFlex.react").FlexRow, {
        align: "center",
        justify: "start",
        children: [
          i,
          d.jsx("div", {
            className: "x1iyjqo2 xs83m0k xeuugli x1mzt3pk x1u7k74",
            children: r,
          }),
          d.jsx(o("WAWebFlex.react").FlexRow, {
            align: "center",
            justify: "end",
            xstyle: m.drawerSide,
            children: a,
          }),
        ],
      });
    }
    ((y.displayName = y.name + " [from " + i.id + "]"),
      (l.DrawerRowTitleRefreshed = p),
      (l.DrawerRowSecondaryTitleRefreshed = _),
      (l.ChatInfoDrawerRow = g),
      (l.ChatInfoDrawerRowRefreshed = h));
  },
  98,
);
