__d(
  "WAWebDrawerBlock.react",
  [
    "cx",
    "WAWebClassnames",
    "WAWebStylesEnv",
    "WAWebUISpacing",
    "react",
    "stylex",
    "useMergeRefs",
    "useWAWebFocusState",
    "useWAWebStaticButtonA11y",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react")),
      d = {
        container: { paddingInlineStart: "x162tt16", $$css: !0 },
        block: {
          display: "x78zum5",
          alignItems: "x6s0dn4",
          height: "xng8ra",
          paddingInlineEnd: "x5zjp28",
          $$css: !0,
        },
        blockMultiline: { height: "xt7dq6l", $$css: !0 },
        main: {
          flexGrow: "x1iyjqo2",
          flexShrink: "xs83m0k",
          flexBasis: "xdl72j9",
          marginTop: "x1rdy4ex",
          overflowX: "x6ikm8r",
          overflowY: "x10wlt62",
          textOverflow: "xlyipyv",
          whiteSpace: "xuxw1ft",
          $$css: !0,
        },
        mainMultiline: {
          paddingTop: "x134lwj9",
          paddingBottom: "x1i2zvha",
          whiteSpace: "xeaf4i8",
          $$css: !0,
        },
        mainMultilineRefreshed: { whiteSpace: "xeaf4i8", $$css: !0 },
        mainMac: { marginTop: "xdj266r", $$css: !0 },
        mainRestrictSpacing: {
          paddingTop: "xexx8yu",
          paddingBottom: "x18d9i69",
          whiteSpace: "xuxw1ft",
          $$css: !0,
        },
        active: { backgroundColor: "x4wrhlh", $$css: !0 },
      };
    function m(t) {
      var n,
        a = t.ariaLabel,
        i = t.blockXstyle,
        l = t.children,
        s = t.className,
        u = t.focusable,
        m = t.isRefresh,
        p = m === void 0 ? !1 : m,
        _ = t.multiline,
        f = t.onClick,
        g = t.restrictSpacing,
        h = t.separator,
        y = t.side,
        C = t.tabOrder,
        b = t.testid,
        v = t.xstyle,
        S = r("useWAWebStaticButtonA11y")(f),
        R = S[0],
        L = S[1],
        E = r("useWAWebFocusState")(),
        k = E[0],
        I = E[1],
        T = r("useMergeRefs")(R, k),
        D =
          y != null
            ? c.jsx("div", {
                className: "x1c4vz4f x2lah0s xdl72j9 x1fkuohi",
                children: y,
              })
            : null,
        x = h != null ? h : !0,
        $ = o("WAWebClassnames").classnamesConvertMeToStylexPlease(
          (e || (e = r("stylex")))(d.container, v, I && d.active),
          s,
          ((n = {}), (n._ajxt = x), n),
        ),
        P = babelHelpers.extends({}, L, {
          onClick: f,
          role: f ? "button" : null,
          tabIndex: f || u === !0 ? 0 : -1,
        }),
        N = b != null ? b : x ? "container_with_separator" : "container";
      return c.jsx(
        "div",
        babelHelpers.extends({ "data-tab": C }, P, {
          "aria-label": a,
          ref: T,
          className: $,
          "data-testid": void 0,
          children: c.jsxs("div", {
            className: o("WAWebClassnames").classnamesConvertMeToStylexPlease(
              "_ajxu",
              e(d.block, i, _ && d.blockMultiline),
            ),
            children: [
              c.jsx("div", {
                className: o(
                  "WAWebClassnames",
                ).classnamesConvertMeToStylexPlease(
                  e(
                    d.main,
                    _ &&
                      (p
                        ? [
                            d.mainMultilineRefreshed,
                            o("WAWebUISpacing").uiPadding.all0,
                          ]
                        : d.mainMultiline),
                    g && d.mainRestrictSpacing,
                    o("WAWebStylesEnv").isOSMac && d.mainMac,
                  ),
                ),
                children: l,
              }),
              D,
            ],
          }),
        }),
      );
    }
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.default = m));
  },
  98,
);
