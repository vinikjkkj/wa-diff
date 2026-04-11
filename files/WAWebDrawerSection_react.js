__d(
  "WAWebDrawerSection.react",
  [
    "WAWebClassnames",
    "WAWebDrawerSectionAnimation.stylex",
    "WAWebRow.react",
    "WDSText.react",
    "react",
    "react-compiler-runtime",
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
      var n = o("react-compiler-runtime").c(37),
        a = t.animation,
        i = t["aria-label"],
        l = t.children,
        s = t.className,
        d = t["data-list-scroll-offset"],
        m = t.ellipsify,
        p = t.ref,
        g = t.subtitle,
        h = t.testid,
        y = t.theme,
        C = t.title,
        b = t.titleOnClick,
        v = t.titleTestId,
        S = t.titleXStyle,
        R = t.xstyle,
        L = a === void 0 ? !0 : a,
        E = m === void 0 ? !0 : m,
        k,
        I,
        T;
      if (
        n[0] !== L ||
        n[1] !== i ||
        n[2] !== s ||
        n[3] !== E ||
        n[4] !== p ||
        n[5] !== g ||
        n[6] !== y ||
        n[7] !== C ||
        n[8] !== b ||
        n[9] !== v ||
        n[10] !== S ||
        n[11] !== R
      ) {
        var D = (e || (e = r("stylex")))(
          L && o("WAWebDrawerSectionAnimation.stylex").animateStyle.animate,
          !1,
          !1,
          y === "refresh-new" ? c.containerRefreshed : c.container,
          y && _(y),
          R,
        );
        if (C != null) {
          var x;
          n[15] !== y ? ((x = f(y)), (n[15] = y), (n[16] = x)) : (x = n[16]);
          var $;
          n[17] !== x || n[18] !== S
            ? (($ = [x, c.paddingTop8, S]),
              (n[17] = x),
              (n[18] = S),
              (n[19] = $))
            : ($ = n[19]);
          var P;
          n[20] !== C
            ? ((P = u.jsx(r("WDSText.react"), {
                type: "Body2Emphasized",
                colorName: "contentDeemphasized",
                children: C,
              })),
              (n[20] = C),
              (n[21] = P))
            : (P = n[21]);
          var N;
          (n[22] !== i ||
          n[23] !== E ||
          n[24] !== g ||
          n[25] !== $ ||
          n[26] !== P ||
          n[27] !== b ||
          n[28] !== v
            ? ((N = u.jsx(r("WAWebRow.react"), {
                side: g,
                onClick: b,
                ellipsify: E,
                "aria-label": i,
                xstyle: $,
                testid: void 0,
                children: P,
              })),
              (n[22] = i),
              (n[23] = E),
              (n[24] = g),
              (n[25] = $),
              (n[26] = P),
              (n[27] = b),
              (n[28] = v),
              (n[29] = N))
            : (N = n[29]),
            (T = N));
        }
        ((k = p),
          (I = o("WAWebClassnames").classnamesConvertMeToStylexPlease(s, D)),
          (n[0] = L),
          (n[1] = i),
          (n[2] = s),
          (n[3] = E),
          (n[4] = p),
          (n[5] = g),
          (n[6] = y),
          (n[7] = C),
          (n[8] = b),
          (n[9] = v),
          (n[10] = S),
          (n[11] = R),
          (n[12] = k),
          (n[13] = I),
          (n[14] = T));
      } else ((k = n[12]), (I = n[13]), (T = n[14]));
      var M;
      return (
        n[30] !== l ||
        n[31] !== d ||
        n[32] !== k ||
        n[33] !== I ||
        n[34] !== h ||
        n[35] !== T
          ? ((M = u.jsxs("div", {
              ref: k,
              className: I,
              "data-list-scroll-offset": d,
              "data-testid": void 0,
              children: [T, l],
            })),
            (n[30] = l),
            (n[31] = d),
            (n[32] = k),
            (n[33] = I),
            (n[34] = h),
            (n[35] = T),
            (n[36] = M))
          : (M = n[36]),
        M
      );
    }
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
