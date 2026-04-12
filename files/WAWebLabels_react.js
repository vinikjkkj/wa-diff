__d(
  "WAWebLabels.react",
  [
    "WAWebABProps",
    "WAWebBizGatingUtils",
    "WAWebCompactMapString",
    "WAWebEmojiText.react",
    "WAWebIcLabelFilledIcon.react",
    "WAWebLabelCollection",
    "WAWebLabelFilledIcon.react",
    "WAWebLabelGetters",
    "WAWebLabelStackIcon.react",
    "WAWebListIcon.react",
    "WAWebListIconStacked.react",
    "WAWebListsGatingUtils",
    "WAWebUISpacing",
    "WDSText.react",
    "react",
    "stylex",
    "useWAWebForceUpdate",
    "useWAWebListener",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = s || (s = o("react")),
      c = s.useMemo,
      d = {
        container: {
          display: "x1rg5ohu",
          flexShrink: "x2lah0s",
          verticalAlign: "x16dsc37",
          $$css: !0,
        },
        name: {
          flexShrink: "x2lah0s",
          fontSize: "x1f6kntn",
          lineHeight: "xggjnk3",
          color: "x14ug900",
          $$css: !0,
        },
        labelFilter: {
          maxWidth: "x193iq5w",
          overflowX: "x6ikm8r",
          overflowY: "x10wlt62",
          $$css: !0,
        },
        labelFilterWithCount: {
          display: "x78zum5",
          width: "xh8yej3",
          alignItems: "x6s0dn4",
          $$css: !0,
        },
        labelFilterIconContainer: {
          display: "x78zum5",
          flexShrink: "x2lah0s",
          alignItems: "x6s0dn4",
          justifyContent: "xl56j7k",
          width: "xvy4d1p",
          height: "xxk0z11",
          $$css: !0,
        },
        labelFilterPillIconContainer: {
          width: "xw4jnvo",
          height: "x1qx5ct2",
          $$css: !0,
        },
        labelFilterName: {
          flexGrow: "x1iyjqo2",
          flexShrink: "xs83m0k",
          flexBasis: "xdl72j9",
          overflowX: "x6ikm8r",
          overflowY: "x10wlt62",
          lineHeight: "x1o2sk6j",
          textOverflow: "xlyipyv",
          whiteSpace: "xuxw1ft",
          $$css: !0,
        },
        labelFilterPillName: {
          color: "xk4n5i7",
          lineHeight: "x1fc57z9",
          maxWidth: "x18tx2qf",
          $$css: !0,
        },
        drawerTitle: { maxWidth: "x193iq5w", $$css: !0 },
        drawerTitleIconContainer: { flexShrink: "x2lah0s", $$css: !0 },
        drawerTitleName: {
          flexGrow: "x1iyjqo2",
          flexShrink: "xs83m0k",
          flexBasis: "xdl72j9",
          overflowX: "x6ikm8r",
          overflowY: "x10wlt62",
          fontSize: "x1jchvi3",
          textOverflow: "xlyipyv",
          whiteSpace: "xuxw1ft",
          $$css: !0,
        },
        containerFull: { display: "x3nfvp2", alignItems: "x6s0dn4", $$css: !0 },
        containerFullCircleIcon: {
          display: "x1rg5ohu",
          flexShrink: "x2lah0s",
          marginTop: "x1y332i5",
          color: "xhslqc4",
          $$css: !0,
        },
        circleIconContainer: {
          display: "x78zum5",
          alignItems: "x6s0dn4",
          justifyContent: "xl56j7k",
          width: "x100vrsf",
          height: "x1vqgdyp",
          borderStartStartRadius: "x1c9tyrk",
          borderStartEndRadius: "xeusxvb",
          borderEndEndRadius: "x1pahc9y",
          borderEndStartRadius: "x1ertn4p",
          $$css: !0,
        },
        listIconCircleContainer: {
          display: "x78zum5",
          alignItems: "x6s0dn4",
          justifyContent: "xl56j7k",
          marginTop: "xav9cv8",
          $$css: !0,
        },
        circleIcon: { color: "x17t9dm2", $$css: !0 },
        circleIconSVG: { width: "xw4jnvo", height: "x1qx5ct2", $$css: !0 },
        elipsifyName: {
          overflowX: "x6ikm8r",
          overflowY: "x10wlt62",
          whiteSpace: "xuxw1ft",
          textOverflow: "xlyipyv",
          maxWidth: "xw5ewwj",
          $$css: !0,
        },
        labelStackIcon: { position: "x10l6tqk", top: "xxk6nc9", $$css: !0 },
        listIcon: { marginInlineStart: "x1wbi8v6", $$css: !0 },
        listIconStacked: {
          position: "x10l6tqk",
          top: "x1atx4j1",
          marginInlineStart: "x1wbi8v6",
          $$css: !0,
        },
        nameWdsChip: { marginInlineStart: "x150mmf0", $$css: !0 },
        unreadCount: { paddingInlineStart: "xdx6fka", $$css: !0 },
      };
    function m(e) {
      if (e.length !== 0) {
        var t = Math.max.apply(
          Math,
          e.map(function (e) {
            return parseInt(e, 10);
          }),
        );
        return Number.isNaN(t) ? e[0] : t.toString();
      }
    }
    function p(e) {
      var t = m(e);
      return t == null
        ? null
        : o("WAWebLabelCollection").LabelCollection.get(t);
    }
    function _(t) {
      var n = t.color,
        a = t.iconXstyle,
        i = t.isListsFeatureEnabled,
        l = t.name,
        s = t.renderAsCircle,
        c = s === void 0 ? !1 : s,
        m = t.theme,
        p = t.unreadCount;
      if (
        o("WAWebABProps").getABPropConfigValue("wds_web_chip") &&
        m === "label-pill"
      )
        return u.jsxs("div", {
          className: "x2lah0s x16dsc37 x3nfvp2 x6s0dn4",
          children: [
            u.jsx("span", {
              className: "x78zum5 x2lah0s x6s0dn4 xl56j7k xw4jnvo x1qx5ct2",
              children:
                i === !0
                  ? u.jsx(r("WAWebListIcon.react"), {
                      color: n,
                      xstyle: d.listIcon,
                    })
                  : u.jsx(o("WAWebIcLabelFilledIcon.react").IcLabelFilledIcon, {
                      width: 18,
                      height: 18,
                      style: n != null ? { color: n } : {},
                      iconXstyle: a,
                      xstyle: l != null && d.containerFullCircleIcon,
                    }),
            }),
            u.jsx(r("WDSText.react"), {
              type: "Body2Emphasized",
              colorName: "accentEmphasized",
              xstyle: d.nameWdsChip,
              children: l,
            }),
          ],
        });
      var _ =
          l != null
            ? u.jsx(
                "span",
                babelHelpers.extends(
                  {},
                  (e || (e = r("stylex"))).props(
                    d.name,
                    o("WAWebUISpacing").uiMargin.start3,
                    (t.theme === "label-filter" || t.theme === "label-pill") &&
                      d.labelFilterName,
                    t.theme === "label-pill" && d.labelFilterPillName,
                    (t.theme === "label-filter" || t.theme === "label-pill") &&
                      o("WAWebUISpacing").uiMargin.start8,
                    t.theme === "drawer-title" && d.drawerTitleName,
                    t.theme === "drawer-title" &&
                      o("WAWebUISpacing").uiMargin.start0,
                    t.theme === "user-profile" && d.elipsifyName,
                    i === !0 && o("WAWebUISpacing").uiMargin.start8,
                  ),
                  {
                    children: u.jsx(o("WAWebEmojiText.react").EmojiText, {
                      text: l,
                    }),
                  },
                ),
              )
            : null,
        f = m === "label-filter" && i === !0 && p != null && p > 0,
        g = (e || (e = r("stylex")))(
          l == null && !c && d.container,
          c && d.containerFull,
          l != null && !c && d.containerFull,
          m === "label-filter" && d.labelFilter,
          m === "drawer-title" && d.drawerTitle,
          f && d.labelFilterWithCount,
        ),
        h = c && n != null ? { backgroundColor: n } : {},
        y =
          i === !0
            ? u.jsx(r("WAWebListIcon.react"), { color: n, xstyle: d.listIcon })
            : u.jsx(o("WAWebIcLabelFilledIcon.react").IcLabelFilledIcon, {
                width: 18,
                height: 18,
                style: n != null ? { color: n } : {},
                iconXstyle: a,
                xstyle: l != null && d.containerFullCircleIcon,
              }),
        C =
          i === !0
            ? u.jsx(r("WAWebListIcon.react"), {
                color: n,
                xstyle: d.listIcon,
                size: 16,
              })
            : u.jsx(o("WAWebLabelFilledIcon.react").LabelFilledIcon, {
                xstyle: d.circleIcon,
                iconXstyle: d.circleIconSVG,
              }),
        b = c ? C : y;
      return u.jsxs("div", {
        className: g,
        children: [
          u.jsx("div", {
            "data-testid": void 0,
            className: e(
              c && i !== !0 && d.circleIconContainer,
              c && i === !0 && d.listIconCircleContainer,
              m === "drawer-title" && d.drawerTitleIconContainer,
              m === "drawer-title" && o("WAWebUISpacing").uiMargin.end20,
              m === "drawer-title" && o("WAWebUISpacing").uiMargin.start4,
              (m === "label-filter" || m === "label-pill") &&
                d.labelFilterIconContainer,
              m === "label-pill" && d.labelFilterPillIconContainer,
            ),
            style: i === !0 ? void 0 : h,
            children: b,
          }),
          _,
          f &&
            u.jsx(r("WDSText.react"), {
              type: "Body2Emphasized",
              colorName: "accentEmphasized",
              xstyle: d.unreadCount,
              children: p,
            }),
        ],
      });
    }
    _.displayName = _.name + " [from " + i.id + "]";
    function f(e) {
      "use no forget";
      var t = e.iconXstyle,
        n = e.isListsFeatureEnabled,
        a = e.labels,
        i = e.renderAsCircle,
        l = i === void 0 ? !1 : i,
        s = e.showName,
        f = s === void 0 ? !1 : s,
        g = e.theme,
        h = e.unreadCount,
        y = o("useWAWebForceUpdate").useForceUpdateDONOTUSE(),
        C = c(
          function () {
            return m(a);
          },
          [a],
        );
      if (
        (o("useWAWebListener").useListener(
          C != null ? o("WAWebLabelCollection").LabelCollection : null,
          "label_updated_" + (C != null ? C : ""),
          y,
        ),
        !o("WAWebBizGatingUtils").canDisplayLabel() &&
          !o("WAWebListsGatingUtils").isListsEnabled())
      )
        return null;
      var b = p(a);
      if (!b || !b.name) return null;
      if (a.length === 1) {
        var v = o("WAWebLabelGetters").getHexColor(b),
          S = f ? b.name : null;
        return u.jsx(_, {
          color: v,
          name: S,
          renderAsCircle: l,
          theme: g,
          iconXstyle: t,
          unreadCount: h,
          isListsFeatureEnabled: n,
        });
      }
      if (n === !0) {
        var R = r("WAWebCompactMapString")(a, function (e) {
          var t = o("WAWebLabelCollection").LabelCollection.get(e);
          return t != null ? o("WAWebLabelGetters").getHexColor(t) : null;
        });
        return u.jsx("div", {
          className: "x1rg5ohu x2lah0s x16dsc37 x1n2onr6 xgd8bvy xxk0z11",
          children: u.jsx(r("WAWebListIconStacked.react"), {
            colors: R,
            xstyle: d.listIconStacked,
          }),
        });
      }
      var L = o("WAWebLabelGetters").getHexColor(b);
      return u.jsxs("div", {
        className: "x1rg5ohu x2lah0s x16dsc37 x1n2onr6 xgd8bvy xxk0z11",
        "data-testid": void 0,
        children: [
          u.jsx(o("WAWebIcLabelFilledIcon.react").IcLabelFilledIcon, {
            width: 18,
            height: 18,
            style: L != null ? { color: L } : {},
            iconXstyle: t,
            xstyle: d.labelStackIcon,
          }),
          u.jsx(o("WAWebLabelStackIcon.react").LabelStackIcon, {
            width: 18,
            height: 18,
            iconXstyle: t,
            xstyle: d.labelStackIcon,
          }),
        ],
      });
    }
    ((f.displayName = f.name + " [from " + i.id + "]"),
      (l.getVisibleLabelId = m),
      (l.Label = _),
      (l.Labels = f));
  },
  98,
);
