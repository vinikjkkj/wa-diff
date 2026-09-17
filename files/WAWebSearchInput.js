__d(
  "WAWebSearchInput",
  [
    "fbt",
    "LexicalExtension",
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
    "WAWebSearchRefreshedThinIcon.react",
    "WAWebSpinner.react",
    "WDSIconIcArrowBack.react",
    "WDSIconIcClose.react",
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
      var t = o("react-compiler-runtime").c(86),
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
        I = e.searchInputA11yLabel,
        T = e.showBackButton,
        D = e.showCloseButton,
        x = e.tabOrder,
        $ = y === void 0 ? !0 : y,
        P = T === void 0 ? !1 : T,
        N = D === void 0 ? !1 : D,
        M = m(""),
        w = M[0],
        A = M[1],
        F = d(),
        O = d(),
        B = w || g != null,
        W = m(!1),
        q = W[0],
        U = W[1],
        V;
      t[0] !== L
        ? ((V = function (t) {
            var e = t.text;
            (A(e), L == null || L(e));
          }),
          (t[0] = L),
          (t[1] = V))
        : (V = t[1]);
      var H = V,
        G;
      t[2] !== H
        ? ((G = function () {
            F.current &&
              (o("WAWebLexicalUtils").setTextContent(F.current, ""),
              H({ text: "", parsableText: "", data: {} }));
          }),
          (t[2] = H),
          (t[3] = G))
        : (G = t[3]);
      var z = G,
        j;
      t[4] !== S
        ? ((j = function () {
            S == null || S();
          }),
          (t[4] = S),
          (t[5] = j))
        : (j = t[5]);
      var K = j,
        Q;
      t[6] === Symbol.for("react.memo_cache_sentinel")
        ? ((Q = function () {
            var e;
            ((e = O.current) == null || e.blur(),
              r("nullthrows")(F.current).focus(),
              U(!0));
          }),
          (t[6] = Q))
        : (Q = t[6]);
      var X = Q,
        Y;
      t[7] === Symbol.for("react.memo_cache_sentinel")
        ? ((Y = function () {
            var e;
            ((e = O.current) == null || e.blur(),
              r("nullthrows")(F.current).blur(),
              U(!1));
          }),
          (t[7] = Y))
        : (Y = t[7]);
      var J = Y,
        Z;
      t[8] !== K || t[9] !== z
        ? ((Z = function () {
            (z(), K());
          }),
          (t[8] = K),
          (t[9] = z),
          (t[10] = Z))
        : (Z = t[10]);
      var ee = Z,
        te;
      t[11] !== e
        ? ((te = function (n) {
            (X(), e.onFocus != null && e.onFocus(n));
          }),
          (t[11] = e),
          (t[12] = te))
        : (te = t[12]);
      var ne = te,
        re;
      t[13] !== ee || t[14] !== v
        ? ((re = function () {
            (ee(), X(), v == null || v());
          }),
          (t[13] = ee),
          (t[14] = v),
          (t[15] = re))
        : (re = t[15]);
      var oe = re,
        ae;
      t[16] !== ee
        ? ((ae = function () {
            (J(), ee());
          }),
          (t[16] = ee),
          (t[17] = ae))
        : (ae = t[17]);
      var ie = ae,
        le;
      t[18] !== e
        ? ((le = function (n) {
            (J(), e.onBlur != null && e.onBlur(n));
          }),
          (t[18] = e),
          (t[19] = le))
        : (le = t[19]);
      var se = le,
        ue;
      e: switch (a) {
        case "darker": {
          ue = f;
          break e;
        }
        case "default":
        default:
          ue = _;
      }
      var ce = null,
        de;
      t[20] === Symbol.for("react.memo_cache_sentinel")
        ? ((de = u.jsx(
            o("WAWebSearchRefreshedThinIcon.react").SearchRefreshedThinIcon,
            { xstyle: p.iconColorRefreshed },
          )),
          (t[20] = de))
        : (de = t[20]);
      var me = de,
        pe;
      t[21] !== ie || t[22] !== q || t[23] !== B || t[24] !== P
        ? ((pe = P
            ? u.jsxs("button", {
                "aria-label": s._(/*BTDS*/ "Cancel search"),
                onClick: ie,
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
                      { children: me },
                    ),
                  ),
                ],
              })
            : me),
          (t[21] = ie),
          (t[22] = q),
          (t[23] = B),
          (t[24] = P),
          (t[25] = pe))
        : (pe = t[25]);
      var _e = pe;
      if (C === !0) {
        var fe;
        (t[26] === Symbol.for("react.memo_cache_sentinel")
          ? ((fe = u.jsx(o("WAWebFlex.react").FlexRow, {
              marginEnd: 16,
              children: u.jsx(o("WAWebSpinner.react").Spinner, {
                color: "highlight",
                size: 20,
                stroke: 6,
              }),
            })),
            (t[26] = fe))
          : (fe = t[26]),
          (ce = fe));
      } else if (B || N) {
        var ge;
        t[27] === Symbol.for("react.memo_cache_sentinel")
          ? ((ge = s._(/*BTDS*/ "Cancel search")), (t[27] = ge))
          : (ge = t[27]);
        var he;
        t[28] !== ue.iconCloseSearch
          ? ((he = [p.iconCloseSearch, ue.iconCloseSearch]),
            (t[28] = ue.iconCloseSearch),
            (t[29] = he))
          : (he = t[29]);
        var ye;
        t[30] === Symbol.for("react.memo_cache_sentinel")
          ? ((ye = u.jsx(r("WDSIconIcClose.react"), {})), (t[30] = ye))
          : (ye = t[30]);
        var Ce;
        (t[31] !== oe || t[32] !== he
          ? ((Ce = u.jsx(o("WAWebFlex.react").FlexRow, {
              paddingEnd: 20,
              children: u.jsx(
                o("WAWebClickable.react").Clickable,
                {
                  ariaLabel: ge,
                  dataTestId: "clear-search-input",
                  onClick: oe,
                  xstyle: he,
                  children: ye,
                },
                "icon-clear-search",
              ),
            })),
            (t[31] = oe),
            (t[32] = he),
            (t[33] = Ce))
          : (Ce = t[33]),
          (ce = Ce));
      }
      var be = m(h),
        ve = be[0],
        Se;
      t[34] !== K
        ? ((Se = function () {
            (K(), X());
          }),
          (t[34] = K),
          (t[35] = Se))
        : (Se = t[35]);
      var Re = Se,
        Le;
      if (t[36] !== b || t[37] !== w.length) {
        Le = function (t) {
          e: {
            if (
              t.key ===
              o("WAWebKeyboardConstants").KEYBOARD_EVENT_KEY_VALUE.BACKSPACE
            ) {
              Ee();
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
        var Ee = function () {
          if (w.length === 0) {
            var e;
            (e = O.current) == null || e.focus();
          }
        };
        ((t[36] = b), (t[37] = w.length), (t[38] = Le));
      } else Le = t[38];
      var ke;
      t[39] !== g || t[40] !== Re
        ? ((ke =
            g != null &&
            u.jsx(r("WAWebSearchFilterChip.react"), {
              onClearFilter: Re,
              ref: O,
              text: g,
              xstyle: o("WDSPaddings.stylex").wdsPaddings.paddingHor4,
            })),
          (t[39] = g),
          (t[40] = Re),
          (t[41] = ke))
        : (ke = t[41]);
      var Ie = ke,
        Te;
      t[42] !== E
        ? ((Te = E != null ? E : [0, 20, 12, 20]), (t[42] = E), (t[43] = Te))
        : (Te = t[43]);
      var De;
      t[44] !== i
        ? ((De = [p.container, p.containerRefreshed, i]),
          (t[44] = i),
          (t[45] = De))
        : (De = t[45]);
      var xe;
      t[46] === Symbol.for("react.memo_cache_sentinel")
        ? ((xe = [p.inputWrapperRefreshed]), (t[46] = xe))
        : (xe = t[46]);
      var $e =
          !(w.length > 0) && o("WDSPaddings.stylex").wdsPaddings.paddingEnd0,
        Pe = q && p.inputWrapperFocusRefreshed,
        Ne;
      t[47] !== ue.inputWrapperRefreshed || t[48] !== $e || t[49] !== Pe
        ? ((Ne = [
            p.inputWrapper,
            p.inputWrapperMaterial,
            xe,
            $e,
            ue.inputWrapperRefreshed,
            Pe,
          ]),
          (t[47] = ue.inputWrapperRefreshed),
          (t[48] = $e),
          (t[49] = Pe),
          (t[50] = Ne))
        : (Ne = t[50]);
      var Me;
      t[51] !== _e
        ? ((Me = u.jsx(o("WAWebFlex.react").FlexRow, {
            marginStart: 0,
            xstyle: p.startIconRefreshed,
            children: _e,
          })),
          (t[51] = _e),
          (t[52] = Me))
        : (Me = t[52]);
      var we;
      t[53] !== Le
        ? ((we = u.jsx(r("WAWebOnKeyDownPlugin"), { onKeyDown: Le })),
          (t[53] = Le),
          (t[54] = we))
        : (we = t[54]);
      var Ae;
      t[55] !== se || t[56] !== H || t[57] !== ne
        ? ((Ae = u.jsx(r("WAWebEditorStatePlugin.react"), {
            onBlur: se,
            onChange: H,
            onFocus: ne,
          })),
          (t[55] = se),
          (t[56] = H),
          (t[57] = ne),
          (t[58] = Ae))
        : (Ae = t[58]);
      var Fe;
      t[59] === Symbol.for("react.memo_cache_sentinel")
        ? ((Fe = u.jsx(r("WAWebEditorRefPlugin"), { editorRef: F })),
          (t[59] = Fe))
        : (Fe = t[59]);
      var Oe;
      t[60] !== we || t[61] !== Ae
        ? ((Oe = u.jsxs(u.Fragment, { children: [we, Ae, Fe] })),
          (t[60] = we),
          (t[61] = Ae),
          (t[62] = Oe))
        : (Oe = t[62]);
      var Be;
      t[63] !== $ ||
      t[64] !== R ||
      t[65] !== k ||
      t[66] !== I ||
      t[67] !== Oe ||
      t[68] !== x
        ? ((Be = u.jsx(o("WAWebFlex.react").FlexRow, {
            paddingEnd: 8,
            xstyle: p.fullWidth,
            children: u.jsx(r("WAWebRichTextInput.react"), {
              children: Oe,
              focusOnMount: $,
              lineWrap: !1,
              multiline: !1,
              onClick: R,
              placeholder: k,
              placeholderTextXStyle: p.placeholderTruncate,
              tabOrder: x,
              testid: "search-input",
              title: I,
              xstyle: !1,
            }),
          })),
          (t[63] = $),
          (t[64] = R),
          (t[65] = k),
          (t[66] = I),
          (t[67] = Oe),
          (t[68] = x),
          (t[69] = Be))
        : (Be = t[69]);
      var We;
      t[70] !== ce ||
      t[71] !== Ie ||
      t[72] !== Ne ||
      t[73] !== Me ||
      t[74] !== Be
        ? ((We = u.jsxs(o("WAWebFlex.react").FlexRow, {
            align: "center",
            grow: 1,
            padding: 0,
            xstyle: Ne,
            children: [Me, Ie, Be, ce],
          })),
          (t[70] = ce),
          (t[71] = Ie),
          (t[72] = Ne),
          (t[73] = Me),
          (t[74] = Be),
          (t[75] = We))
        : (We = t[75]);
      var qe;
      t[76] !== l || t[77] !== c || t[78] !== Te || t[79] !== De || t[80] !== We
        ? ((qe = u.jsxs(o("WAWebFlex.react").FlexRow, {
            align: "center",
            basis: "auto",
            grow: 0,
            padding: Te,
            shrink: 0,
            xstyle: De,
            children: [l, We, c],
          })),
          (t[76] = l),
          (t[77] = c),
          (t[78] = Te),
          (t[79] = De),
          (t[80] = We),
          (t[81] = qe))
        : (qe = t[81]);
      var Ue;
      return (
        t[82] !== n || t[83] !== ve || t[84] !== qe
          ? ((Ue = u.jsxs(
              o("LexicalExtensionComposer").LexicalExtensionComposer,
              { contentEditable: null, extension: ve, children: [qe, n] },
            )),
            (t[82] = n),
            (t[83] = ve),
            (t[84] = qe),
            (t[85] = Ue))
          : (Ue = t[85]),
        Ue
      );
    }
    function h() {
      return o("LexicalExtension").defineExtension({
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
