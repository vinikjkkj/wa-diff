__d(
  "WAWebDrawerSection.react",
  [
    "WAWebClassnames",
    "WAWebDrawerSectionAnimation.stylex",
    "WAWebRow.react",
    "WDSText.react",
    "react",
    "stylex",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = s || (s = o("react")),
      c = {
        container: {
          position: "x1n2onr6",
          flexGrow: "x1c4vz4f",
          flexShrink: "x2lah0s",
          flexBasis: "xdl72j9",
          marginBottom: "xyorhqc",
          backgroundColor: "x1280gxy",
          $$css: !0,
        },
        containerRefreshed: {
          flex: "x3psx0u",
          marginBottom: "xat24cr",
          backgroundColor: "x1280gxy",
          $$css: !0,
        },
        paddingTop8: { paddingTop: "x16ovd2e", $$css: !0 },
      },
      d = {
        paddingLarge: {
          paddingTop: "x7sb2j6",
          paddingInlineEnd: "x5zjp28",
          paddingBottom: "x1i2zvha",
          paddingInlineStart: "x162tt16",
          $$css: !0,
        },
        paddingSmall: {
          paddingTop: "x7sb2j6",
          paddingInlineEnd: "x1ekh9h2",
          paddingBottom: "x1i2zvha",
          paddingInlineStart: "xsdj86q",
          $$css: !0,
        },
        paddingSmallRefreshed: {
          paddingTop: "x7sb2j6",
          paddingInlineEnd: "x1xnnf8n",
          paddingBottom: "x1i2zvha",
          paddingInlineStart: "x106a9eq",
          $$css: !0,
        },
        paddingNoMargin: {
          paddingTop: "xyinxu5",
          paddingInlineEnd: "x5zjp28",
          paddingBottom: "x1a8lsjc",
          paddingInlineStart: "x162tt16",
          marginBottom: "xat24cr",
          $$css: !0,
        },
        refresh: {
          paddingTop: "x1p5oq8j",
          paddingInlineEnd: "x5zjp28",
          paddingBottom: "xwxc41k",
          paddingInlineStart: "x162tt16",
          marginBottom: "x4n8cb0",
          $$css: !0,
        },
        refreshPaddingTitle: { marginBottom: "x4n8cb0", $$css: !0 },
        padding: {
          paddingTop: "xyinxu5",
          paddingInlineEnd: "x5zjp28",
          paddingBottom: "x1a8lsjc",
          paddingInlineStart: "x162tt16",
          $$css: !0,
        },
        paddingNoVertical: {
          paddingTop: "xexx8yu",
          paddingInlineEnd: "x5zjp28",
          paddingBottom: "x18d9i69",
          paddingInlineStart: "x162tt16",
          $$css: !0,
        },
        paddingSmallHorizontalNoVertical: {
          paddingTop: "xexx8yu",
          paddingInlineEnd: "x1pic42t",
          paddingBottom: "x18d9i69",
          paddingInlineStart: "x1onr9mi",
          $$css: !0,
        },
        groupDescriptionPadding: {
          paddingTop: "xyinxu5",
          paddingInlineEnd: "x5zjp28",
          paddingBottom: "x1a8lsjc",
          paddingInlineStart: "x162tt16",
          $$css: !0,
        },
        noPadding: {
          paddingTop: "xexx8yu",
          paddingInlineEnd: "xyri2b",
          paddingBottom: "x18d9i69",
          paddingInlineStart: "x1c1uobl",
          $$css: !0,
        },
        paddingProduct: {
          paddingTop: "x7sb2j6",
          paddingInlineEnd: "x5zjp28",
          paddingBottom: "x84yb8i",
          paddingInlineStart: "x162tt16",
          marginBottom: "xat24cr",
          $$css: !0,
        },
        centerColumnFixedWidth: {
          width: "x1l2rt3b",
          marginTop: "xdj266r",
          marginInlineEnd: "x11t971q",
          marginInlineStart: "xvc5jky",
          marginBottom: "xyorhqc",
          $$css: !0,
        },
        expandHeight: {
          flexGrow: "x1iyjqo2",
          flexShrink: "xs83m0k",
          flexBasis: "x1t1x2f9",
          $$css: !0,
        },
        listSection: { marginBottom: "xat24cr", $$css: !0 },
        titleLarger: { marginBottom: "xat24cr", $$css: !0 },
        stickyButtonSection: {
          zIndex: "x1rozsjd",
          boxSizing: "x9f619",
          paddingTop: "x109j2v6",
          paddingInlineEnd: "x64bnmy",
          paddingBottom: "x1hhzuzn",
          paddingInlineStart: "x13jy36j",
          marginBottom: "xat24cr",
          $$css: !0,
        },
        transparent: { backgroundColor: "xjbqb8w", $$css: !0 },
        fullHeight: {
          marginBottom: "xat24cr",
          flexGrow: "x1iyjqo2",
          flexShrink: "xs83m0k",
          flexBasis: "x1t1x2f9",
          $$css: !0,
        },
        refreshNew: {
          paddingTop: "x1h678fw",
          paddingInlineEnd: "xcldk2z",
          paddingBottom: "xv6tirj",
          paddingInlineStart: "x1phvje8",
          $$css: !0,
        },
      },
      m = {
        defaultTitle: {
          paddingTop: "xyinxu5",
          paddingInlineEnd: "x5zjp28",
          paddingBottom: "x1g2khh7",
          paddingInlineStart: "x162tt16",
          $$css: !0,
        },
        refreshTitle: {
          paddingTop: "xexx8yu",
          paddingInlineEnd: "xyri2b",
          paddingBottom: "x18d9i69",
          paddingInlineStart: "x1c1uobl",
          marginBottom: "x1ibc7va",
          $$css: !0,
        },
        refreshPaddingTitleTitle: {
          paddingTop: "x1p5oq8j",
          paddingInlineEnd: "x5zjp28",
          paddingBottom: "xwxc41k",
          paddingInlineStart: "x162tt16",
          $$css: !0,
        },
        groupDescriptionPaddingTitle: {
          paddingTop: "xexx8yu",
          paddingInlineEnd: "xyri2b",
          paddingBottom: "x18d9i69",
          paddingInlineStart: "x1c1uobl",
          marginBottom: "x12nagc",
          $$css: !0,
        },
        noPaddingTitle: {
          paddingTop: "xexx8yu",
          paddingInlineEnd: "xyri2b",
          paddingBottom: "x18d9i69",
          paddingInlineStart: "x1c1uobl",
          $$css: !0,
        },
        titleLargerTitle: {
          paddingTop: "x1stpksq",
          paddingInlineEnd: "x1a4sjiy",
          paddingBottom: "xr1496l",
          paddingInlineStart: "xvahy20",
          $$css: !0,
        },
        paddingTitle: {
          paddingTop: "xexx8yu",
          paddingInlineEnd: "xyri2b",
          paddingBottom: "x18d9i69",
          paddingInlineStart: "x1c1uobl",
          marginBottom: "x1u7kmwd",
          $$css: !0,
        },
        listSectionTitle: {
          paddingTop: "x9orja2",
          paddingInlineEnd: "xv54qhq",
          paddingBottom: "x1t4gjm",
          paddingInlineStart: "xf7dkkf",
          $$css: !0,
        },
      };
    function p(t) {
      var n = t.animation,
        a = n === void 0 ? !0 : n,
        i = t["aria-label"],
        l = t.children,
        s = t.className,
        d = t["data-list-scroll-offset"],
        m = t.ellipsify,
        p = m === void 0 ? !0 : m,
        g = t.ref,
        h = t.subtitle,
        y = t.testid,
        C = t.theme,
        b = t.title,
        v = t.titleOnClick,
        S = t.titleTestId,
        R = t.titleXStyle,
        L = t.xstyle,
        E = (e || (e = r("stylex")))(
          a && o("WAWebDrawerSectionAnimation.stylex").animateStyle.animate,
          !1,
          !1,
          C === "refresh-new" ? c.containerRefreshed : c.container,
          C && _(C),
          L,
        ),
        k;
      return (
        b != null &&
          (k = u.jsx(r("WAWebRow.react"), {
            side: h,
            onClick: v,
            ellipsify: p,
            "aria-label": i,
            xstyle: [f(C), c.paddingTop8, R],
            testid: void 0,
            children: u.jsx(r("WDSText.react"), {
              type: "Body2Emphasized",
              colorName: "contentDeemphasized",
              children: b,
            }),
          })),
        u.jsxs("div", {
          ref: g,
          className: o("WAWebClassnames").classnamesConvertMeToStylexPlease(
            s,
            E,
          ),
          "data-list-scroll-offset": d,
          "data-testid": void 0,
          children: [k, l],
        })
      );
    }
    p.displayName = p.name + " [from " + i.id + "]";
    function _(e) {
      switch (e) {
        case "refresh-new":
          return d.refreshNew;
        case "chat-info":
          return null;
        case "center-column-fixed-width":
          return d.centerColumnFixedWidth;
        case "padding":
          return d.padding;
        case "padding-large":
          return d.paddingLarge;
        case "padding-product":
          return d.paddingProduct;
        case "padding-small":
          return d.paddingSmall;
        case "padding-no-margin":
          return d.paddingNoMargin;
        case "padding-no-vertical":
          return d.paddingNoVertical;
        case "padding-small-horizontal-no-vertical":
          return d.paddingSmallHorizontalNoVertical;
        case "expand-height":
          return d.expandHeight;
        case "sticky-button-section":
          return d.stickyButtonSection;
        case "refresh":
          return d.refresh;
        case "refresh-padding-title":
          return d.refreshPaddingTitle;
        case "group-desc-padding":
          return d.groupDescriptionPadding;
        case "no-padding":
          return d.noPadding;
        case "list-section":
          return d.listSection;
        case "title-larger":
          return d.titleLarger;
        case "transparent":
          return d.transparent;
        case "full-height":
          return d.fullHeight;
        default:
          return d.paddingSmallRefreshed;
      }
    }
    function f(e) {
      switch (e) {
        case "padding-large":
        case "padding-product":
        case "padding-small":
        case "padding-no-margin":
        case "padding-no-vertical":
        case "expand-height":
        case "sticky-button-section":
        case "chat-info":
        case "center-column-fixed-width":
          return m.defaultTitle;
        case "refresh-new":
          return null;
        case "padding":
          return m.paddingTitle;
        case "refresh":
          return m.refreshTitle;
        case "refresh-padding-title":
          return m.refreshPaddingTitleTitle;
        case "group-desc-padding":
          return m.groupDescriptionPaddingTitle;
        case "no-padding":
          return m.noPaddingTitle;
        case "list-section":
          return m.listSectionTitle;
        case "title-larger":
          return m.titleLargerTitle;
        default:
          return m.defaultTitle;
      }
    }
    l.default = p;
  },
  98,
);
