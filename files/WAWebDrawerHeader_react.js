__d(
  "WAWebDrawerHeader.react",
  [
    "fbt",
    "WAWebBackRefreshedIcon.react",
    "WAWebFocusTracer",
    "WAWebMenuBar.react",
    "WAWebSpinner.react",
    "WAWebStylesEnv",
    "WAWebTabOrder",
    "WAWebUISpacing",
    "WDSIconIcClose.react",
    "WDSMenuBarItem.react",
    "WDSText.react",
    "cr:23046",
    "react",
    "stylex",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e = ["ref"],
      u,
      c,
      d = c || (c = o("react")),
      m = c,
      p = m.useEffect,
      _ = m.useMemo,
      f = m.useRef,
      g = {
        SMALL: "small",
        POPUP: "popup",
        OFFSET: "offset",
        TAB: "tab",
        FLYOUT: "flyout",
        MODAL: "modal",
        SUBHEADER: "subheader",
      },
      h = {
        title: {
          display: "x78zum5",
          flex: "x1okw0bk",
          alignItems: "x6s0dn4",
          width: "xh8yej3",
          textAlign: "x14wi4xw",
          $$css: !0,
        },
        titleDrawerSmallRefreshed: {
          fontWeight: "xo1l8bm",
          color: "x14ug900",
          $$css: !0,
        },
        titleBodyRefreshed: {
          flexGrow: "x1iyjqo2",
          overflowX: "x6ikm8r",
          overflowY: "x10wlt62",
          overflowWrap: "x1mzt3pk",
          $$css: !0,
        },
        titleBodyDrawerSmallRefreshed: {
          fontSize: "x6prxxf",
          lineHeight: "x1o2sk6j",
          $$css: !0,
        },
        side: {
          display: "x78zum5",
          flex: "x1okw0bk",
          alignItems: "x6s0dn4",
          $$css: !0,
        },
        fontSmoothing: {
          "-webkit-font-smoothing": "xvmahel",
          "-moz-osx-font-smoothing": "xlh3980",
          $$css: !0,
        },
        fontWeight500: { fontWeight: "xk50ysn", $$css: !0 },
        headerPwa: {
          "@media (display-mode: standalone)_borderStartStartRadius": "x570efc",
          $$css: !0,
        },
        headerWindows: { borderStartStartRadius: "xyi3aci", $$css: !0 },
        headerSmallRefreshed: {
          boxSizing: "x9f619",
          display: "x78zum5",
          flex: "x1okw0bk",
          alignItems: "x6s0dn4",
          height: "x1peatla",
          color: "x14ug900",
          backgroundColor: "x1280gxy",
          $$css: !0,
        },
        headerOffset: {
          boxSizing: "x9f619",
          display: "x78zum5",
          flex: "x1okw0bk",
          alignItems: "x6s0dn4",
          height: "xl2dz39",
          color: "x14ug900",
          backgroundColor: "x1280gxy",
          $$css: !0,
        },
        headerPopup: {
          boxSizing: "x9f619",
          display: "x78zum5",
          flex: "x1okw0bk",
          alignItems: "x6s0dn4",
          height: "xdiz9cm",
          color: "x14ug900",
          backgroundColor: "x1280gxy",
          borderStartStartRadius: "x1fqc64z",
          borderStartEndRadius: "xs83zq4",
          $$css: !0,
        },
        boldTitle: { fontSize: "x1603h9y", fontWeight: "x1s688f", $$css: !0 },
        subHeaderHeader: { height: "xzpcc6d", $$css: !0 },
      },
      y = 500,
      C =
        (n("cr:23046") == null
          ? void 0
          : n("cr:23046").isWindowsHybridEnabled()) === !0;
    function b(t) {
      var n,
        a = t.ref,
        i = babelHelpers.objectWithoutPropertiesLoose(t, e),
        l = i.children,
        c = i.focusBackOrCancel,
        m = c === void 0 ? !1 : c,
        b = i.menu,
        v = i.onBack,
        S = i.onCancel,
        R = i.rightActionElement,
        L = R === void 0 ? null : R,
        E = i.spinner,
        k = E === void 0 ? !1 : E,
        I = i.title,
        T = i.titleStr,
        D = i.type,
        x = f(null);
      p(
        function () {
          m === !0 &&
            x.current != null &&
            self.setTimeout(function () {
              r("WAWebFocusTracer").focus(x.current);
            }, y);
        },
        [m],
      );
      var $ = _(
          function () {
            if (!((S && D !== g.MODAL) || !v))
              return d.jsx(r("WDSMenuBarItem.react"), {
                tabOrder: o("WAWebTabOrder").TAB_ORDER.CHATLIST_HEADER,
                testid: void 0,
                onClick: v,
                title: s._(/*BTDS*/ "Back"),
                ref: x,
                icon: o("WAWebBackRefreshedIcon.react").BackRefreshedIcon,
              });
          },
          [S, D, v],
        ),
        P = _(
          function () {
            if (S)
              return d.jsx(r("WDSMenuBarItem.react"), {
                testid: void 0,
                tabOrder: o("WAWebTabOrder").TAB_ORDER.CHATLIST_HEADER,
                onClick: S,
                title: s._(/*BTDS*/ "Close"),
                ref: x,
                icon: r("WDSIconIcClose.react"),
              });
          },
          [S],
        ),
        N = [g.SMALL, g.TAB, g.SUBHEADER].includes(D),
        M =
          b != null
            ? d.jsx("span", {
                className: "x1okw0bk",
                children: d.jsx(
                  o("WAWebMenuBar.react").MenuBar,
                  { theme: N ? null : "inverse", children: b },
                  "drawer-header",
                ),
              })
            : null,
        w = D === g.OFFSET || D === g.POPUP,
        A = I !== "" && I != null,
        F =
          A && l != null
            ? d.jsx(
                "div",
                babelHelpers.extends(
                  {},
                  (u || (u = r("stylex"))).props(
                    h.side,
                    o("WAWebUISpacing").uiMargin.start4,
                  ),
                  { children: l },
                ),
              )
            : null,
        O = o("WAWebStylesEnv").isOSMac,
        B = _(
          function () {
            return D === g.TAB || D === g.SUBHEADER
              ? null
              : d.jsxs(
                  "div",
                  babelHelpers.extends(
                    {},
                    {
                      0: { className: "x1okw0bk" },
                      1: { className: "x1okw0bk x14qfxbe x1ks1olk" },
                    }[!!w << 0],
                    { children: [$, D !== g.MODAL && P] },
                  ),
                );
          },
          [$, P, w, D],
        ),
        W = _(
          function () {
            return L != null
              ? L
              : D !== g.MODAL
                ? null
                : d.jsx("div", {
                    className: "x1okw0bk xpqajaz xvy4d1p",
                    children: P,
                  });
          },
          [P, D, L],
        ),
        q = D === g.FLYOUT || D === g.MODAL,
        U = (u || (u = r("stylex")))(
          C && h.headerWindows,
          h.headerPwa,
          N && [h.headerSmallRefreshed, o("WAWebUISpacing").uiPadding.all10],
          w && [
            h.headerOffset,
            o("WAWebUISpacing").uiPadding.vert0,
            o("WAWebUISpacing").uiPadding.end20,
            o("WAWebUISpacing").uiPadding.start10,
          ],
          D === g.POPUP && [
            h.headerPopup,
            o("WAWebUISpacing").uiPadding.vert0,
            o("WAWebUISpacing").uiPadding.end20,
            o("WAWebUISpacing").uiPadding.start10,
          ],
          D === g.TAB && o("WAWebUISpacing").uiPadding.horiz20,
          D === g.SUBHEADER && [
            o("WAWebUISpacing").uiPadding.horiz20,
            h.subHeaderHeader,
          ],
          q && [
            o("WAWebUISpacing").uiPadding.vert0,
            o("WAWebUISpacing").uiPadding.start10,
            o("WAWebUISpacing").uiPadding.top13,
            o("WAWebUISpacing").uiPadding.bottom13,
            o("WAWebUISpacing").uiPadding.end28,
          ],
        ),
        V = u(
          h.title,
          D === g.SMALL && h.titleDrawerSmallRefreshed,
          o("WAWebUISpacing").uiPadding.all0,
          q && h.boldTitle,
        ),
        H = [
          h.titleBodyRefreshed,
          D === g.SMALL && h.titleBodyDrawerSmallRefreshed,
          !1,
          w && h.fontWeight500,
          w && O && h.fontSmoothing,
        ],
        G = A ? I : l,
        z =
          D === g.TAB
            ? d.jsx(r("WDSText.react"), {
                type: "Headline2",
                maxLines: 1,
                isSemanticHeading: !0,
                colorName: "contentDefault",
                children: G,
              })
            : D === g.SUBHEADER
              ? d.jsx(r("WDSText.react"), {
                  type: "Body1Emphasized",
                  maxLines: 1,
                  isSemanticHeading: !0,
                  colorName: "contentDefault",
                  children: G,
                })
              : d.jsxs(d.Fragment, {
                  children: [
                    d.jsx(r("WDSText.react"), {
                      type: "Body1",
                      maxLines: 1,
                      isSemanticHeading: !0,
                      xstyle: o("WAWebUISpacing").uiMargin.start8,
                      colorName: "contentDefault",
                      children: G,
                    }),
                    k
                      ? d.jsx(
                          "span",
                          babelHelpers.extends(
                            {},
                            (u || (u = r("stylex"))).props(
                              o("WAWebUISpacing").uiMargin.start8,
                            ),
                            {
                              children: d.jsx(o("WAWebSpinner.react").Spinner, {
                                size: 16,
                              }),
                            },
                          ),
                        )
                      : null,
                  ],
                });
      return d.jsx("header", {
        ref: a,
        className: U,
        children: d.jsxs("div", {
          className: V,
          children: [
            B,
            d.jsx(
              "div",
              babelHelpers.extends(
                {
                  "data-testid": void 0,
                  title: T != null ? T : I == null ? void 0 : I.toString(),
                },
                u.props(H),
                { children: z },
              ),
            ),
            F,
            M,
            W,
          ],
        }),
      });
    }
    ((b.displayName = b.name + " [from " + i.id + "]"),
      (l.DRAWER_HEADER_TYPE = g),
      (l.DrawerHeader = b));
  },
  226,
);
