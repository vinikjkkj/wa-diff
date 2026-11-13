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
    "react-compiler-runtime",
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
      var t = o("react-compiler-runtime").c(88),
        n = e.children,
        a = e.colorScheme,
        i = e.containerXStyle,
        l = e.detailLeft,
        c = e.detailRight,
        g = e.filter,
        y = e.focusOnMount,
        C = e.loading,
        b = e.onArrowDown,
        v = e.onCancel,
        S = e.onClearFilter,
        R = e.onClick,
        L = e.onSearch,
        E = e.padding,
        k = e.placeholder,
        I = e.searchIconColor,
        T = e.searchInputA11yLabel,
        D = e.showBackButton,
        x = e.showCloseButton,
        $ = e.tabOrder,
        P = y === void 0 ? !0 : y,
        N = I === void 0 ? "default" : I,
        M = D === void 0 ? !1 : D,
        w = x === void 0 ? !1 : x,
        A = m(""),
        F = A[0],
        O = A[1],
        B = d(),
        W = d(),
        q = F || g != null,
        U = m(!1),
        V = U[0],
        H = U[1],
        G;
      t[0] !== L
        ? ((G = function (t) {
            var e = t.text;
            (O(e), L == null || L(e));
          }),
          (t[0] = L),
          (t[1] = G))
        : (G = t[1]);
      var z = G,
        j;
      t[2] !== z
        ? ((j = function () {
            B.current &&
              (o("WAWebLexicalUtils").setTextContent(B.current, ""),
              z({ text: "", parsableText: "", data: {} }));
          }),
          (t[2] = z),
          (t[3] = j))
        : (j = t[3]);
      var K = j,
        Q;
      t[4] !== S
        ? ((Q = function () {
            S == null || S();
          }),
          (t[4] = S),
          (t[5] = Q))
        : (Q = t[5]);
      var X = Q,
        Y;
      t[6] === Symbol.for("react.memo_cache_sentinel")
        ? ((Y = function () {
            var e;
            ((e = W.current) == null || e.blur(),
              r("nullthrows")(B.current).focus(),
              H(!0));
          }),
          (t[6] = Y))
        : (Y = t[6]);
      var J = Y,
        Z;
      t[7] === Symbol.for("react.memo_cache_sentinel")
        ? ((Z = function () {
            var e;
            ((e = W.current) == null || e.blur(),
              r("nullthrows")(B.current).blur(),
              H(!1));
          }),
          (t[7] = Z))
        : (Z = t[7]);
      var ee = Z,
        te;
      t[8] !== X || t[9] !== K
        ? ((te = function () {
            (K(), X());
          }),
          (t[8] = X),
          (t[9] = K),
          (t[10] = te))
        : (te = t[10]);
      var ne = te,
        re;
      t[11] !== e
        ? ((re = function (n) {
            (J(), e.onFocus != null && e.onFocus(n));
          }),
          (t[11] = e),
          (t[12] = re))
        : (re = t[12]);
      var oe = re,
        ae;
      t[13] !== ne || t[14] !== v
        ? ((ae = function () {
            (ne(), J(), v == null || v());
          }),
          (t[13] = ne),
          (t[14] = v),
          (t[15] = ae))
        : (ae = t[15]);
      var ie = ae,
        le;
      t[16] !== ne
        ? ((le = function () {
            (ee(), ne());
          }),
          (t[16] = ne),
          (t[17] = le))
        : (le = t[17]);
      var se = le,
        ue;
      t[18] !== e
        ? ((ue = function (n) {
            (ee(), e.onBlur != null && e.onBlur(n));
          }),
          (t[18] = e),
          (t[19] = ue))
        : (ue = t[19]);
      var ce = ue,
        de;
      e: switch (a) {
        case "darker": {
          de = f;
          break e;
        }
        case "default":
        default:
          de = _;
      }
      var me = null,
        pe =
          N === "deemphasized"
            ? p.searchIconDeemphasized
            : p.iconColorRefreshed,
        _e;
      t[20] !== pe
        ? ((_e = u.jsx(r("WDSIconIcSearch.react"), {
            testid: "search-refreshed-thin",
            height: 20,
            width: 20,
            iconXstyle: pe,
          })),
          (t[20] = pe),
          (t[21] = _e))
        : (_e = t[21]);
      var fe = _e,
        ge;
      t[22] !== se || t[23] !== V || t[24] !== q || t[25] !== fe || t[26] !== M
        ? ((ge = M
            ? u.jsxs("button", {
                "aria-label": s._(/*BTDS*/ "Cancel search"),
                onClick: se,
                children: [
                  u.jsx(
                    "div",
                    babelHelpers.extends(
                      {},
                      {
                        0: { className: "x47corl xg01cxk x1hzlkrz x1eppysm" },
                        1: { className: "x1hc1fzr x7a90jq x1nb0u29" },
                      }[!!(V || q) << 0],
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
                      }[!!(V || q) << 0],
                      { children: fe },
                    ),
                  ),
                ],
              })
            : fe),
          (t[22] = se),
          (t[23] = V),
          (t[24] = q),
          (t[25] = fe),
          (t[26] = M),
          (t[27] = ge))
        : (ge = t[27]);
      var he = ge;
      if (C === !0) {
        var ye;
        (t[28] === Symbol.for("react.memo_cache_sentinel")
          ? ((ye = u.jsx(o("WAWebFlex.react").FlexRow, {
              marginEnd: 16,
              children: u.jsx(o("WAWebSpinner.react").Spinner, {
                color: "highlight",
                size: 20,
                stroke: 6,
              }),
            })),
            (t[28] = ye))
          : (ye = t[28]),
          (me = ye));
      } else if (q || w) {
        var Ce;
        t[29] === Symbol.for("react.memo_cache_sentinel")
          ? ((Ce = s._(/*BTDS*/ "Cancel search")), (t[29] = Ce))
          : (Ce = t[29]);
        var be;
        t[30] !== de.iconCloseSearch
          ? ((be = [p.iconCloseSearch, de.iconCloseSearch]),
            (t[30] = de.iconCloseSearch),
            (t[31] = be))
          : (be = t[31]);
        var ve;
        t[32] === Symbol.for("react.memo_cache_sentinel")
          ? ((ve = u.jsx(r("WDSIconIcClose.react"), {})), (t[32] = ve))
          : (ve = t[32]);
        var Se;
        (t[33] !== ie || t[34] !== be
          ? ((Se = u.jsx(o("WAWebFlex.react").FlexRow, {
              paddingEnd: 20,
              children: u.jsx(
                o("WAWebClickable.react").Clickable,
                {
                  ariaLabel: Ce,
                  dataTestId: "clear-search-input",
                  onClick: ie,
                  xstyle: be,
                  children: ve,
                },
                "icon-clear-search",
              ),
            })),
            (t[33] = ie),
            (t[34] = be),
            (t[35] = Se))
          : (Se = t[35]),
          (me = Se));
      }
      var Re = m(h),
        Le = Re[0],
        Ee;
      t[36] !== X
        ? ((Ee = function () {
            (X(), J());
          }),
          (t[36] = X),
          (t[37] = Ee))
        : (Ee = t[37]);
      var ke = Ee,
        Ie;
      if (t[38] !== b || t[39] !== F.length) {
        Ie = function (t) {
          e: {
            if (
              t.key ===
              o("WAWebKeyboardConstants").KEYBOARD_EVENT_KEY_VALUE.BACKSPACE
            ) {
              Te();
              break e;
            }
            if (
              t.key ===
              o("WAWebKeyboardConstants").KEYBOARD_EVENT_KEY_VALUE.ARROW_DOWN
            ) {
              (t.preventDefault(), b == null || b());
              break e;
            }
          }
        };
        var Te = function () {
          if (F.length === 0) {
            var e;
            (e = W.current) == null || e.focus();
          }
        };
        ((t[38] = b), (t[39] = F.length), (t[40] = Ie));
      } else Ie = t[40];
      var De;
      t[41] !== g || t[42] !== ke
        ? ((De =
            g != null &&
            u.jsx(r("WAWebSearchFilterChip.react"), {
              onClearFilter: ke,
              ref: W,
              text: g,
              xstyle: o("WDSPaddings.stylex").wdsPaddings.paddingHor4,
            })),
          (t[41] = g),
          (t[42] = ke),
          (t[43] = De))
        : (De = t[43]);
      var xe = De,
        $e;
      t[44] !== E
        ? (($e = E != null ? E : [0, 20, 12, 20]), (t[44] = E), (t[45] = $e))
        : ($e = t[45]);
      var Pe;
      t[46] !== i
        ? ((Pe = [p.container, p.containerRefreshed, i]),
          (t[46] = i),
          (t[47] = Pe))
        : (Pe = t[47]);
      var Ne;
      t[48] === Symbol.for("react.memo_cache_sentinel")
        ? ((Ne = [p.inputWrapperRefreshed]), (t[48] = Ne))
        : (Ne = t[48]);
      var Me =
          !(F.length > 0) && o("WDSPaddings.stylex").wdsPaddings.paddingEnd0,
        we = V && p.inputWrapperFocusRefreshed,
        Ae;
      t[49] !== de.inputWrapperRefreshed || t[50] !== Me || t[51] !== we
        ? ((Ae = [
            p.inputWrapper,
            p.inputWrapperMaterial,
            Ne,
            Me,
            de.inputWrapperRefreshed,
            we,
          ]),
          (t[49] = de.inputWrapperRefreshed),
          (t[50] = Me),
          (t[51] = we),
          (t[52] = Ae))
        : (Ae = t[52]);
      var Fe;
      t[53] !== he
        ? ((Fe = u.jsx(o("WAWebFlex.react").FlexRow, {
            marginStart: 0,
            xstyle: p.startIconRefreshed,
            children: he,
          })),
          (t[53] = he),
          (t[54] = Fe))
        : (Fe = t[54]);
      var Oe;
      t[55] !== Ie
        ? ((Oe = u.jsx(r("WAWebOnKeyDownPlugin"), { onKeyDown: Ie })),
          (t[55] = Ie),
          (t[56] = Oe))
        : (Oe = t[56]);
      var Be;
      t[57] !== ce || t[58] !== z || t[59] !== oe
        ? ((Be = u.jsx(r("WAWebEditorStatePlugin.react"), {
            onBlur: ce,
            onChange: z,
            onFocus: oe,
          })),
          (t[57] = ce),
          (t[58] = z),
          (t[59] = oe),
          (t[60] = Be))
        : (Be = t[60]);
      var We;
      t[61] === Symbol.for("react.memo_cache_sentinel")
        ? ((We = u.jsx(r("WAWebEditorRefPlugin"), { editorRef: B })),
          (t[61] = We))
        : (We = t[61]);
      var qe;
      t[62] !== Oe || t[63] !== Be
        ? ((qe = u.jsxs(u.Fragment, { children: [Oe, Be, We] })),
          (t[62] = Oe),
          (t[63] = Be),
          (t[64] = qe))
        : (qe = t[64]);
      var Ue;
      t[65] !== P ||
      t[66] !== R ||
      t[67] !== k ||
      t[68] !== T ||
      t[69] !== qe ||
      t[70] !== $
        ? ((Ue = u.jsx(o("WAWebFlex.react").FlexRow, {
            paddingEnd: 8,
            xstyle: p.fullWidth,
            children: u.jsx(r("WAWebRichTextInput.react"), {
              children: qe,
              focusOnMount: P,
              lineWrap: !1,
              multiline: !1,
              onClick: R,
              placeholder: k,
              placeholderTextXStyle: p.placeholderTruncate,
              tabOrder: $,
              testid: "search-input",
              title: T,
              xstyle: !1,
            }),
          })),
          (t[65] = P),
          (t[66] = R),
          (t[67] = k),
          (t[68] = T),
          (t[69] = qe),
          (t[70] = $),
          (t[71] = Ue))
        : (Ue = t[71]);
      var Ve;
      t[72] !== me ||
      t[73] !== xe ||
      t[74] !== Ae ||
      t[75] !== Fe ||
      t[76] !== Ue
        ? ((Ve = u.jsxs(o("WAWebFlex.react").FlexRow, {
            align: "center",
            grow: 1,
            padding: 0,
            xstyle: Ae,
            children: [Fe, xe, Ue, me],
          })),
          (t[72] = me),
          (t[73] = xe),
          (t[74] = Ae),
          (t[75] = Fe),
          (t[76] = Ue),
          (t[77] = Ve))
        : (Ve = t[77]);
      var He;
      t[78] !== l || t[79] !== c || t[80] !== $e || t[81] !== Pe || t[82] !== Ve
        ? ((He = u.jsxs(o("WAWebFlex.react").FlexRow, {
            align: "center",
            basis: "auto",
            grow: 0,
            padding: $e,
            shrink: 0,
            xstyle: Pe,
            children: [l, Ve, c],
          })),
          (t[78] = l),
          (t[79] = c),
          (t[80] = $e),
          (t[81] = Pe),
          (t[82] = Ve),
          (t[83] = He))
        : (He = t[83]);
      var Ge;
      return (
        t[84] !== n || t[85] !== Le || t[86] !== He
          ? ((Ge = u.jsxs(
              o("LexicalExtensionComposer").LexicalExtensionComposer,
              { contentEditable: null, extension: Le, children: [He, n] },
            )),
            (t[84] = n),
            (t[85] = Le),
            (t[86] = He),
            (t[87] = Ge))
          : (Ge = t[87]),
        Ge
      );
    }
    function h() {
      return o("Lexical").defineExtension({
        name: "[root]",
        namespace: "CommandPaletteInput",
        onError: r("WAWebNoop"),
      });
    }
    function y(e) {
      var t = o("react-compiler-runtime").c(3),
        n;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((n = [0, 20]), (t[0] = n))
        : (n = t[0]);
      var r;
      return (
        t[1] !== e
          ? ((r = u.jsx(o("WAWebFlex.react").FlexColumn, {
              align: "stretch",
              children: u.jsx(g, babelHelpers.extends({}, e, { padding: n })),
            })),
            (t[1] = e),
            (t[2] = r))
          : (r = t[2]),
        r
      );
    }
    ((l.SearchInput = g), (l.DrawerSearchInput = y));
  },
  226,
);
