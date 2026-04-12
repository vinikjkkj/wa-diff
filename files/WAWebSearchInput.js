__d(
  "WAWebSearchInput",
  [
    "fbt",
    "LexicalComposer",
    "WANullthrows",
    "WAWebBackIcon.react",
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
    "WAWebSearchRefreshedThinIcon.react",
    "WAWebSpinner.react",
    "WAWebUISpacing",
    "WDSIconIcClose.react",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e,
      d = c.useMemo,
      m = c.useRef,
      p = c.useState,
      _ = {
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
          boxShadow: "x19qpdui",
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
      },
      g = {
        inputWrapper: { backgroundColor: "x1od0jb8", $$css: !0 },
        inputWrapperRefreshed: {
          backgroundColor: "x4wrhlh x1l0ey4t",
          $$css: !0,
        },
        inputPlaceholder: { color: "xhslqc4", $$css: !0 },
        iconSearch: { color: "xhslqc4", $$css: !0 },
        iconCloseSearch: { color: "xhslqc4", $$css: !0 },
      };
    function h(e) {
      var t = e.children,
        n = e.colorScheme,
        a = e.containerXStyle,
        i = e.detailLeft,
        l = e.detailRight,
        c = e.filter,
        h = e.focusOnMount,
        y = h === void 0 ? !0 : h,
        C = e.loading,
        b = e.onArrowDown,
        v = e.onCancel,
        S = e.onClearFilter,
        R = e.onClick,
        L = e.onSearch,
        E = e.padding,
        k = e.placeholder,
        I = e.searchInputA11yLabel,
        T = e.showBackButton,
        D = T === void 0 ? !1 : T,
        x = e.showCloseButton,
        $ = x === void 0 ? !1 : x,
        P = e.tabOrder,
        N = p(""),
        M = N[0],
        w = N[1],
        A = m(),
        F = m(),
        O = M || c != null,
        B = p(!1),
        W = B[0],
        q = B[1],
        U = function (t) {
          var e = t.text;
          (w(e), L == null || L(e));
        },
        V = function () {
          A.current &&
            (o("WAWebLexicalUtils").setTextContent(A.current, ""),
            U({ text: "", parsableText: "", data: {} }));
        },
        H = function () {
          S == null || S();
        },
        G = function () {
          var e;
          ((e = F.current) == null || e.blur(),
            r("WANullthrows")(A.current).focus(),
            q(!0));
        },
        z = function () {
          var e;
          ((e = F.current) == null || e.blur(),
            r("WANullthrows")(A.current).blur(),
            q(!1));
        },
        j = function () {
          (V(), H());
        },
        K = function (n) {
          (G(), e.onFocus != null && e.onFocus(n));
        },
        Q = function () {
          (j(), G(), v == null || v());
        },
        X = function () {
          (z(), j());
        },
        Y = function (n) {
          (z(), e.onBlur != null && e.onBlur(n));
        },
        J;
      switch (n) {
        case "darker":
          J = g;
          break;
        case "default":
        default:
          J = f;
          break;
      }
      var Z = null,
        ee = u.jsx(
          o("WAWebSearchRefreshedThinIcon.react").SearchRefreshedThinIcon,
          { xstyle: _.iconColorRefreshed },
        ),
        te = D
          ? u.jsxs("button", {
              "aria-label": s._(/*BTDS*/ "Cancel search"),
              onClick: X,
              children: [
                u.jsx(
                  "div",
                  babelHelpers.extends(
                    {},
                    {
                      0: { className: "x47corl xg01cxk x1hzlkrz x1eppysm" },
                      1: { className: "x1hc1fzr x7a90jq x1nb0u29" },
                    }[!!(W || O) << 0],
                    {
                      children: u.jsx(o("WAWebBackIcon.react").BackIcon, {
                        iconXstyle: _.tealLighterColor,
                        height: 24,
                        overrideDirection: r("WAWebL10N").isRTL()
                          ? "rtl"
                          : "ltr",
                        width: 24,
                        xstyle: _.backIconRefreshed,
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
                    }[!!(W || O) << 0],
                    { children: ee },
                  ),
                ),
              ],
            })
          : ee;
      C === !0
        ? (Z = u.jsx(o("WAWebFlex.react").FlexRow, {
            marginEnd: 16,
            children: u.jsx(o("WAWebSpinner.react").Spinner, {
              color: "highlight",
              size: 20,
              stroke: 6,
            }),
          }))
        : (O || $) &&
          (Z = u.jsx(o("WAWebFlex.react").FlexRow, {
            paddingEnd: 20,
            children: u.jsx(
              o("WAWebClickable.react").Clickable,
              {
                ariaLabel: s._(/*BTDS*/ "Cancel search"),
                dataTestId: "clear-search-input",
                onClick: Q,
                xstyle: [_.iconCloseSearch, J.iconCloseSearch],
                children: u.jsx(r("WDSIconIcClose.react"), {}),
              },
              "icon-clear-search",
            ),
          }));
      var ne = d(function () {
          return { namespace: "CommandPaletteInput", onError: r("WAWebNoop") };
        }, []),
        re = function () {
          (H(), G());
        },
        oe = function (t) {
          e: {
            if (
              t.key ===
              o("WAWebKeyboardConstants").KEYBOARD_EVENT_KEY_VALUE.BACKSPACE
            ) {
              ae();
              break e;
            }
            if (
              t.key ===
              o("WAWebKeyboardConstants").KEYBOARD_EVENT_KEY_VALUE.ARROW_DOWN
            ) {
              (t.preventDefault(), b == null || b());
              break e;
            }
            break e;
          }
        },
        ae = function () {
          if (M.length === 0) {
            var e;
            (e = F.current) == null || e.focus();
          }
        },
        ie =
          c != null &&
          u.jsx(r("WAWebSearchFilterChip.react"), {
            onClearFilter: re,
            ref: F,
            text: c,
            xstyle: o("WAWebUISpacing").uiPadding.horiz4,
          });
      return u.jsxs(o("LexicalComposer").LexicalComposer, {
        initialConfig: ne,
        children: [
          u.jsxs(o("WAWebFlex.react").FlexRow, {
            align: "center",
            basis: "auto",
            grow: 0,
            padding: E != null ? E : [0, 20, 12, 20],
            shrink: 0,
            xstyle: [_.container, _.containerRefreshed, a],
            children: [
              i,
              u.jsxs(o("WAWebFlex.react").FlexRow, {
                align: "center",
                grow: 1,
                padding: 0,
                xstyle: [
                  _.inputWrapper,
                  _.inputWrapperMaterial,
                  [_.inputWrapperRefreshed],
                  !(M.length > 0) && o("WAWebUISpacing").uiPadding.end0,
                  J.inputWrapperRefreshed,
                  W && _.inputWrapperFocusRefreshed,
                ],
                children: [
                  u.jsx(o("WAWebFlex.react").FlexRow, {
                    marginStart: 0,
                    xstyle: _.startIconRefreshed,
                    children: te,
                  }),
                  ie,
                  u.jsx(o("WAWebFlex.react").FlexRow, {
                    paddingEnd: 8,
                    xstyle: _.fullWidth,
                    children: u.jsx(r("WAWebRichTextInput.react"), {
                      children: u.jsxs(u.Fragment, {
                        children: [
                          u.jsx(r("WAWebOnKeyDownPlugin"), { onKeyDown: oe }),
                          u.jsx(r("WAWebEditorStatePlugin.react"), {
                            onBlur: Y,
                            onChange: U,
                            onFocus: K,
                          }),
                          u.jsx(r("WAWebEditorRefPlugin"), { editorRef: A }),
                        ],
                      }),
                      focusOnMount: y,
                      lineWrap: !1,
                      multiline: !1,
                      onClick: R,
                      placeholder: k,
                      tabOrder: P,
                      testid: void 0,
                      title: I,
                      xstyle: !1,
                    }),
                  }),
                  Z,
                ],
              }),
              l,
            ],
          }),
          t,
        ],
      });
    }
    h.displayName = h.name + " [from " + i.id + "]";
    function y(e) {
      return u.jsx(o("WAWebFlex.react").FlexColumn, {
        align: "stretch",
        children: u.jsx(h, babelHelpers.extends({}, e, { padding: [0, 20] })),
      });
    }
    ((y.displayName = y.name + " [from " + i.id + "]"),
      (l.SearchInput = h),
      (l.DrawerSearchInput = y));
  },
  226,
);
