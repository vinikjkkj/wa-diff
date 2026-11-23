__d(
  "WAWebSearchInput",
  [
    "fbt",
    "Lexical",
    "LexicalExtensionComposer",
    "WAWebClickable.react",
    "WAWebEditorRefPlugin",
    "WAWebEditorStatePlugin.react",
    "WAWebFlex.react",
    "WAWebKeyboardConstants",
    "WAWebL10N",
    "WAWebLexicalUtils",
    "WAWebNoop",
    "WAWebOnKeyDownPlugin",
    "WAWebRichTextInput.react",
    "WAWebSearchFilterChip.react",
    "WAWebSpinner.react",
    "WDSIconIcArrowBack.react",
    "WDSIconIcClose.react",
    "WDSIconIcSearch.react",
    "WDSPaddings.stylex",
    "nullthrows",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e,
      d = c.useRef,
      m = c.useState,
      p = {
        container: {
          position: "x1n2onr6",
          width: "xh8yej3",
          boxSizing: "x9f619",
          $$css: !0,
        },
        containerRefreshed: {
          height: "xdd8jsf",
          alignItems: "x7a106z",
          $$css: !0,
        },
        iconCloseSearch: {
          insetInlineEnd: "x11dcrhx",
          left: null,
          right: null,
          borderStartStartRadius: "xt8t1vi",
          borderStartEndRadius: "x1xc408v",
          borderEndEndRadius: "x129tdwq",
          borderEndStartRadius: "x15urzxu",
          $$css: !0,
        },
        inputWrapper: {
          position: "x1n2onr6",
          boxSizing: "x9f619",
          display: "x78zum5",
          flexDirection: "x1q0g3np",
          alignItems: "x6s0dn4",
          height: "x1s1d1n7",
          borderStartStartRadius: "xyi3aci",
          borderStartEndRadius: "xwf5gio",
          borderEndEndRadius: "x1p453bz",
          borderEndStartRadius: "x1suzm8a",
          $$css: !0,
        },
        inputWrapperRefreshed: {
          color: "x14ug900",
          caretColor: "xjdcl3y",
          borderStartStartRadius: "x1ekkm8c",
          borderStartEndRadius: "x1143rjc",
          borderEndEndRadius: "xum4auv",
          borderEndStartRadius: "xj21bgg",
          height: "x1vqgdyp",
          boxShadow: "x1gnnqk1 x19qpdui",
          paddingInlineStart: "x1p4gyq8",
          $$css: !0,
        },
        inputWrapperFocusRefreshed: {
          borderTopColor: "xlze6vy",
          borderInlineEndColor: "x47fsot",
          borderBottomColor: "x1rrvw3c",
          borderInlineStartColor: "x18djku1",
          boxShadow: "xu8d7ss",
          ":hover_borderTopColor": "x1lfjbn8",
          ":hover_borderInlineEndColor": "xwj740h",
          ":hover_borderBottomColor": "xdeyfa3",
          ":hover_borderInlineStartColor": "x1pig4h2",
          $$css: !0,
        },
        inputWrapperMaterial: {
          borderStartStartRadius: "xlr9sxt",
          borderStartEndRadius: "xvvg52n",
          borderEndEndRadius: "xwd4zgb",
          borderEndStartRadius: "xq8v1ta",
          $$css: !0,
        },
        fullWidth: { width: "xh8yej3", $$css: !0 },
        iconColorRefreshed: { color: "x14ug900", $$css: !0 },
        searchIconDeemphasized: { color: "xhslqc4", $$css: !0 },
        startIconRefreshed: {
          height: "x1qx5ct2",
          width: "xw4jnvo",
          flexShrink: "x2lah0s",
          position: "x10l6tqk",
          top: "x1eu8d0j",
          insetInlineStart: "x9p6ekw",
          left: null,
          right: null,
          $$css: !0,
        },
        backIconRefreshed: {
          position: "x10l6tqk",
          insetInlineStart: "xl3v32j",
          left: null,
          right: null,
          top: "x1qiirwl",
          color: "x14ug900",
          $$css: !0,
        },
        tealLighterColor: { color: "x1v5yvga", $$css: !0 },
        placeholderTruncate: {
          maxWidth: "x193iq5w",
          overflowX: "x6ikm8r",
          overflowY: "x10wlt62",
          textOverflow: "xlyipyv",
          whiteSpace: "xuxw1ft",
          $$css: !0,
        },
      },
      _ = {
        inputWrapper: { backgroundColor: "x1od0jb8", $$css: !0 },
        inputWrapperRefreshed: {
          backgroundColor: "x4wrhlh x1l0ey4t",
          $$css: !0,
        },
        inputPlaceholder: { color: "xhslqc4", $$css: !0 },
        iconSearch: { color: "xhslqc4", $$css: !0 },
        iconCloseSearch: { color: "xhslqc4", $$css: !0 },
      },
      f = {
        inputWrapper: { backgroundColor: "x1od0jb8", $$css: !0 },
        inputWrapperRefreshed: {
          backgroundColor: "x4wrhlh x1l0ey4t",
          $$css: !0,
        },
        inputPlaceholder: { color: "xhslqc4", $$css: !0 },
        iconSearch: { color: "xhslqc4", $$css: !0 },
        iconCloseSearch: { color: "xhslqc4", $$css: !0 },
      };
    function g(e) {
      var t = e.children,
        n = e.colorScheme,
        a = e.containerXStyle,
        i = e.detailLeft,
        l = e.detailRight,
        c = e.filter,
        g = e.focusOnMount,
        h = g === void 0 ? !0 : g,
        y = e.loading,
        C = e.onArrowDown,
        b = e.onCancel,
        v = e.onClearFilter,
        S = e.onClick,
        R = e.onSearch,
        L = e.padding,
        E = e.placeholder,
        k = e.searchIconColor,
        I = k === void 0 ? "default" : k,
        T = e.searchInputA11yLabel,
        D = e.showBackButton,
        x = D === void 0 ? !1 : D,
        $ = e.showCloseButton,
        P = $ === void 0 ? !1 : $,
        N = e.tabOrder,
        M = m(""),
        w = M[0],
        A = M[1],
        F = d(),
        O = d(),
        B = w || c != null,
        W = m(!1),
        q = W[0],
        U = W[1],
        V = function (t) {
          var e = t.text;
          (A(e), R == null || R(e));
        },
        H = function () {
          F.current &&
            (o("WAWebLexicalUtils").setTextContent(F.current, ""),
            V({ text: "", parsableText: "", data: {} }));
        },
        G = function () {
          v == null || v();
        },
        z = function () {
          var e;
          ((e = O.current) == null || e.blur(),
            r("nullthrows")(F.current).focus(),
            U(!0));
        },
        j = function () {
          var e;
          ((e = O.current) == null || e.blur(),
            r("nullthrows")(F.current).blur(),
            U(!1));
        },
        K = function () {
          (H(), G());
        },
        Q = function (n) {
          (z(), e.onFocus != null && e.onFocus(n));
        },
        X = function () {
          (K(), z(), b == null || b());
        },
        Y = function () {
          (j(), K());
        },
        J = function (n) {
          (j(), e.onBlur != null && e.onBlur(n));
        },
        Z;
      switch (n) {
        case "darker":
          Z = f;
          break;
        case "default":
        default:
          Z = _;
          break;
      }
      var ee = null,
        te = u.jsx(r("WDSIconIcSearch.react"), {
          testid: "search-refreshed-thin",
          height: 20,
          width: 20,
          iconXstyle:
            I === "deemphasized"
              ? p.searchIconDeemphasized
              : p.iconColorRefreshed,
        }),
        ne = x
          ? u.jsxs("button", {
              "aria-label": s._(/*BTDS*/ ""),
              onClick: Y,
              children: [
                u.jsx(
                  "div",
                  babelHelpers.extends(
                    {},
                    {
                      0: { className: "x47corl xg01cxk x1hzlkrz x1eppysm" },
                      1: { className: "x1hc1fzr x7a90jq x1nb0u29" },
                    }[!!(q || B) << 0],
                    {
                      children: u.jsx(r("WDSIconIcArrowBack.react"), {
                        iconXstyle: p.tealLighterColor,
                        height: 24,
                        overrideDirection: r("WAWebL10N").isRTL()
                          ? "rtl"
                          : "ltr",
                        width: 24,
                        xstyle: p.backIconRefreshed,
                      }),
                    },
                  ),
                ),
                u.jsx(
                  "div",
                  babelHelpers.extends(
                    {},
                    {
                      0: { className: "x1sazirq x165colc" },
                      1: { className: "xg01cxk x7a90jq x11t6m9b" },
                    }[!!(q || B) << 0],
                    { children: te },
                  ),
                ),
              ],
            })
          : te;
      y === !0
        ? (ee = u.jsx(o("WAWebFlex.react").FlexRow, {
            marginEnd: 16,
            children: u.jsx(o("WAWebSpinner.react").Spinner, {
              color: "highlight",
              size: 20,
              stroke: 6,
            }),
          }))
        : (B || P) &&
          (ee = u.jsx(o("WAWebFlex.react").FlexRow, {
            paddingEnd: 20,
            children: u.jsx(
              o("WAWebClickable.react").Clickable,
              {
                ariaLabel: s._(/*BTDS*/ ""),
                dataTestId: "clear-search-input",
                onClick: X,
                xstyle: [p.iconCloseSearch, Z.iconCloseSearch],
                children: u.jsx(r("WDSIconIcClose.react"), {}),
              },
              "icon-clear-search",
            ),
          }));
      var re = m(function () {
          return o("Lexical").defineExtension({
            name: "[root]",
            namespace: "CommandPaletteInput",
            onError: r("WAWebNoop"),
          });
        }),
        oe = re[0],
        ae = function () {
          (G(), z());
        },
        ie = function (t) {
          e: {
            if (
              t.key ===
              o("WAWebKeyboardConstants").KEYBOARD_EVENT_KEY_VALUE.BACKSPACE
            ) {
              le();
              break e;
            }
            if (
              t.key ===
              o("WAWebKeyboardConstants").KEYBOARD_EVENT_KEY_VALUE.ARROW_DOWN
            ) {
              (t.preventDefault(), C == null || C());
              break e;
            }
            break e;
          }
        },
        le = function () {
          if (w.length === 0) {
            var e;
            (e = O.current) == null || e.focus();
          }
        },
        se =
          c != null &&
          u.jsx(r("WAWebSearchFilterChip.react"), {
            onClearFilter: ae,
            ref: O,
            text: c,
            xstyle: o("WDSPaddings.stylex").wdsPaddings.paddingHor4,
          });
      return u.jsxs(o("LexicalExtensionComposer").LexicalExtensionComposer, {
        contentEditable: null,
        extension: oe,
        children: [
          u.jsxs(o("WAWebFlex.react").FlexRow, {
            align: "center",
            basis: "auto",
            grow: 0,
            padding: L != null ? L : [0, 20, 12, 20],
            shrink: 0,
            xstyle: [p.container, p.containerRefreshed, a],
            children: [
              i,
              u.jsxs(o("WAWebFlex.react").FlexRow, {
                align: "center",
                grow: 1,
                padding: 0,
                xstyle: [
                  p.inputWrapper,
                  p.inputWrapperMaterial,
                  [p.inputWrapperRefreshed],
                  !(w.length > 0) &&
                    o("WDSPaddings.stylex").wdsPaddings.paddingEnd0,
                  Z.inputWrapperRefreshed,
                  q && p.inputWrapperFocusRefreshed,
                ],
                children: [
                  u.jsx(o("WAWebFlex.react").FlexRow, {
                    marginStart: 0,
                    xstyle: p.startIconRefreshed,
                    children: ne,
                  }),
                  se,
                  u.jsx(o("WAWebFlex.react").FlexRow, {
                    paddingEnd: 8,
                    xstyle: p.fullWidth,
                    children: u.jsx(r("WAWebRichTextInput.react"), {
                      children: u.jsxs(u.Fragment, {
                        children: [
                          u.jsx(r("WAWebOnKeyDownPlugin"), { onKeyDown: ie }),
                          u.jsx(r("WAWebEditorStatePlugin.react"), {
                            onBlur: J,
                            onChange: V,
                            onFocus: Q,
                          }),
                          u.jsx(r("WAWebEditorRefPlugin"), { editorRef: F }),
                        ],
                      }),
                      focusOnMount: h,
                      lineWrap: !1,
                      multiline: !1,
                      onClick: S,
                      placeholder: E,
                      placeholderTextXStyle: p.placeholderTruncate,
                      tabOrder: N,
                      testid: "search-input",
                      title: T,
                      xstyle: !1,
                    }),
                  }),
                  ee,
                ],
              }),
              l,
            ],
          }),
          t,
        ],
      });
    }
    g.displayName = g.name + " [from " + i.id + "]";
    function h(e) {
      return u.jsx(o("WAWebFlex.react").FlexColumn, {
        align: "stretch",
        children: u.jsx(g, babelHelpers.extends({}, e, { padding: [0, 20] })),
      });
    }
    ((h.displayName = h.name + " [from " + i.id + "]"),
      (l.SearchInput = g),
      (l.DrawerSearchInput = h));
  },
  226,
);
