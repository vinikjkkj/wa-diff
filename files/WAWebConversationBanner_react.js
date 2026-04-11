__d(
  "WAWebConversationBanner.react",
  [
    "fbt",
    "invariant",
    "WAWebConversationPanelStyleUtils",
    "WAWebDropdownItem.react",
    "WAWebFbtCommon",
    "WAWebKeyboardRotateFocusArrows.react",
    "WAWebNoop",
    "WAWebStopEvent",
    "WAWebTabOrder",
    "WAWebUimUie.react",
    "WAWebUimUieMenu.react",
    "WAWebUnstyledButton.react",
    "WAWebVelocityTransitionGroup",
    "WDSButton.react",
    "WDSFocusStateStyles",
    "WDSIconIcClose.react",
    "WDSIconIcExpandMore.react",
    "WDSMenuBarItem.react",
    "react",
    "stylex",
    "useHoverState",
    "useMergeRefs",
    "useWAWebFocusState",
    "useWAWebIsKeyboardUser",
    "useWDSMenu",
  ],
  function (t, n, r, o, a, i, l, s, u) {
    var e = ["ref"],
      c,
      d,
      m = d || (d = o("react")),
      p = d,
      _ = p.useRef,
      f = p.useState,
      g = {
        subheaderContainer: {
          position: "x1n2onr6",
          boxSizing: "x9f619",
          paddingTop: "x889kno",
          paddingInlineEnd: "xv54qhq",
          paddingBottom: "x1a8lsjc",
          paddingInlineStart: "xwn43p0",
          backgroundColor: "x1h3rtpe",
          $$css: !0,
        },
        subheaderContainerButton: { width: "xh8yej3", $$css: !0 },
        defaultCursor: { cursor: "xt0e3qv", $$css: !0 },
      };
    function h(t) {
      var n = t.ref,
        a = babelHelpers.objectWithoutPropertiesLoose(t, e),
        i = a.children,
        l = a["data-tab"],
        d = a.menuItems,
        p = a.onClick,
        h = a.onClose,
        C = a.onHoverChange,
        b = a.wdsMenuContent,
        v = a.xstyle;
      (h == null || (d == null && b == null) || u(0, 136182),
        d == null || b == null || u(0, 136181));
      var S = function (t) {
          (t == null || t.stopPropagation(), h == null || h());
        },
        R = f(null),
        L = R[0],
        E = R[1],
        k = _(null),
        I = r("useWAWebFocusState")(),
        T = I[0],
        D = I[1],
        x = r("useMergeRefs")(n, k, T),
        $ = r("useHoverState")(),
        P = $.isHovered,
        N = $.onMouseEnter,
        M = $.onMouseLeave,
        w = r("useWAWebIsKeyboardUser")(),
        A = w.isKeyboardUser,
        F = _(null),
        O = r("useWAWebFocusState")(),
        B = O[0],
        W = O[1],
        q = r("useMergeRefs")(F, B),
        U = r("useWDSMenu")({
          targetRef: F,
          menu: b,
          align: "end",
          position: "below",
        }),
        V = U.closeMenu,
        H = U.isMenuOpen,
        G = U.menuPortal,
        z = U.openMenu,
        j = d != null && d.length > 0,
        K = b != null,
        Q = (j || K) && (P || D || W || L != null || H);
      C == null || C(P);
      var X = function (t) {
          var e,
            n =
              (e =
                d == null
                  ? void 0
                  : d.map(function (e, t) {
                      var n = e.content,
                        r = e.icon,
                        a = e.onClick;
                      return m.jsx(
                        o("WAWebDropdownItem.react").DropdownItem,
                        { testid: void 0, action: a, icon: r, children: n },
                        "menu-item-" + t,
                      );
                    })) != null
                ? e
                : [];
          E(babelHelpers.extends({}, t, { autoFocus: A, menu: n }));
        },
        Y = function () {
          E(null);
        },
        J = function (t) {
          (t == null || t.preventDefault(),
            t == null || t.stopPropagation(),
            K ? (H ? V() : z()) : X(A ? { anchor: F.current } : { event: t }));
        },
        Z = function () {
          K ? (H ? V() : z()) : X({ anchor: F.current });
        },
        ee = m.jsx(
          "div",
          babelHelpers.extends(
            {},
            {
              0: {
                className:
                  "x10l6tqk x78zum5 x6s0dn4 xl56j7k x1useyqa xsdox4t x13vifvy xtijo5x xhslqc4 x9k9m9m xde1mab",
              },
              1: {
                className:
                  "x10l6tqk x78zum5 x6s0dn4 xl56j7k x1useyqa xsdox4t x13vifvy xtijo5x xhslqc4 x1go6c3n xde1mab",
              },
            }[!!P << 0],
            {
              children: m.jsx("span", {
                role: "none",
                onClick: o("WAWebStopEvent").stopPropagation,
                onKeyDown: y,
                onKeyUp: function (t) {
                  (t.key === "Enter" || t.key === " ") &&
                    (t.stopPropagation(),
                    t.nativeEvent.stopImmediatePropagation());
                },
                onKeyPress: function (t) {
                  (t.stopPropagation(),
                    t.nativeEvent.stopImmediatePropagation());
                },
                children: m.jsx(r("WDSButton.react"), {
                  ref: q,
                  variant: "borderless",
                  size: "medium",
                  Icon: r("WDSIconIcExpandMore.react"),
                  "aria-label": s._(/*BTDS*/ "Menu"),
                  testid: void 0,
                  onPress: Z,
                }),
              }),
            },
          ),
        ),
        te;
      L != null &&
        (te = m.jsx(o("WAWebUimUie.react").UIE, {
          displayName: "ConversationBannerContextMenu",
          escapable: !0,
          popable: !0,
          dismissOnWindowResize: !0,
          requestDismiss: Y,
          children: m.jsx(r("WAWebUimUieMenu.react"), { contextMenu: L }),
        }));
      var ne;
      (p != null && (ne = o("WAWebTabOrder").TAB_ORDER.CHAT_HEADER_BUTTON),
        l != null && (ne = l));
      var re = h
          ? m.jsx(r("WDSMenuBarItem.react"), {
              icon: r("WDSIconIcClose.react"),
              title: r("WAWebFbtCommon")("Close"),
              onClick: S,
              testid: void 0,
              tabOrder: ne,
            })
          : null,
        oe = m.jsxs("div", {
          className: "x78zum5 x6s0dn4",
          children: [
            m.jsx("div", {
              className: "x1iyjqo2 x6ikm8r x10wlt62 x1yc453h",
              children: i,
            }),
            re,
            m.jsx(r("WAWebVelocityTransitionGroup"), {
              transitionName: "pop-fast",
              children: Q ? ee : null,
            }),
          ],
        });
      return m.jsx(r("WAWebKeyboardRotateFocusArrows.react"), {
        children:
          p != null
            ? m.jsxs(r("WAWebUnstyledButton.react"), {
                ref: x,
                xstyle: [
                  r("WAWebConversationPanelStyleUtils").sharedShadow,
                  g.subheaderContainer,
                  g.subheaderContainerButton,
                  D &&
                    o("WDSFocusStateStyles").WDSFocusStateStyles
                      .genericFocusInner,
                  v,
                ],
                onClick: p,
                onContextMenu: Q ? J : r("WAWebNoop"),
                onMouseEnter: N,
                onMouseLeave: M,
                dataTab: ne,
                testid: void 0,
                children: [oe, te, G],
              })
            : m.jsxs(
                "div",
                babelHelpers.extends(
                  { ref: x },
                  (c || (c = r("stylex"))).props(
                    r("WAWebConversationPanelStyleUtils").sharedShadow,
                    g.subheaderContainer,
                    g.defaultCursor,
                    D &&
                      o("WDSFocusStateStyles").WDSFocusStateStyles
                        .genericFocusInner,
                    v,
                  ),
                  {
                    onContextMenu: Q ? J : r("WAWebNoop"),
                    onMouseEnter: N,
                    onMouseLeave: M,
                    "data-tab": ne,
                    "data-testid": void 0,
                    children: [oe, te, G],
                  },
                ),
              ),
      });
    }
    h.displayName = h.name + " [from " + i.id + "]";
    function y(e) {
      (e.key === "Enter" || e.key === " ") &&
        (e.stopPropagation(), e.nativeEvent.stopImmediatePropagation());
    }
    l.default = h;
  },
  226,
);
