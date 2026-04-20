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
    "react-compiler-runtime",
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
      var t = o("react-compiler-runtime").c(86),
        n = e.children,
        a = e.colorScheme,
        i = e.containerXStyle,
        l = e.detailLeft,
        c = e.detailRight,
        d = e.filter,
        h = e.focusOnMount,
        y = e.loading,
        C = e.onArrowDown,
        b = e.onCancel,
        v = e.onClearFilter,
        S = e.onClick,
        R = e.onSearch,
        L = e.padding,
        E = e.placeholder,
        k = e.searchInputA11yLabel,
        I = e.showBackButton,
        T = e.showCloseButton,
        D = e.tabOrder,
        x = h === void 0 ? !0 : h,
        $ = I === void 0 ? !1 : I,
        P = T === void 0 ? !1 : T,
        N = p(""),
        M = N[0],
        w = N[1],
        A = m(),
        F = m(),
        O = M || d != null,
        B = p(!1),
        W = B[0],
        q = B[1],
        U;
      t[0] !== R
        ? ((U = function (t) {
            var e = t.text;
            (w(e), R == null || R(e));
          }),
          (t[0] = R),
          (t[1] = U))
        : (U = t[1]);
      var V = U,
        H;
      t[2] !== V
        ? ((H = function () {
            A.current &&
              (o("WAWebLexicalUtils").setTextContent(A.current, ""),
              V({ text: "", parsableText: "", data: {} }));
          }),
          (t[2] = V),
          (t[3] = H))
        : (H = t[3]);
      var G = H,
        z;
      t[4] !== v
        ? ((z = function () {
            v == null || v();
          }),
          (t[4] = v),
          (t[5] = z))
        : (z = t[5]);
      var j = z,
        K;
      t[6] === Symbol.for("react.memo_cache_sentinel")
        ? ((K = function () {
            var e;
            ((e = F.current) == null || e.blur(),
              r("WANullthrows")(A.current).focus(),
              q(!0));
          }),
          (t[6] = K))
        : (K = t[6]);
      var Q = K,
        X;
      t[7] === Symbol.for("react.memo_cache_sentinel")
        ? ((X = function () {
            var e;
            ((e = F.current) == null || e.blur(),
              r("WANullthrows")(A.current).blur(),
              q(!1));
          }),
          (t[7] = X))
        : (X = t[7]);
      var Y = X,
        J;
      t[8] !== j || t[9] !== G
        ? ((J = function () {
            (G(), j());
          }),
          (t[8] = j),
          (t[9] = G),
          (t[10] = J))
        : (J = t[10]);
      var Z = J,
        ee;
      t[11] !== e
        ? ((ee = function (n) {
            (Q(), e.onFocus != null && e.onFocus(n));
          }),
          (t[11] = e),
          (t[12] = ee))
        : (ee = t[12]);
      var te = ee,
        ne;
      t[13] !== Z || t[14] !== b
        ? ((ne = function () {
            (Z(), Q(), b == null || b());
          }),
          (t[13] = Z),
          (t[14] = b),
          (t[15] = ne))
        : (ne = t[15]);
      var re = ne,
        oe;
      t[16] !== Z
        ? ((oe = function () {
            (Y(), Z());
          }),
          (t[16] = Z),
          (t[17] = oe))
        : (oe = t[17]);
      var ae = oe,
        ie;
      t[18] !== e
        ? ((ie = function (n) {
            (Y(), e.onBlur != null && e.onBlur(n));
          }),
          (t[18] = e),
          (t[19] = ie))
        : (ie = t[19]);
      var le = ie,
        se;
      e: switch (a) {
        case "darker": {
          se = g;
          break e;
        }
        case "default":
        default:
          se = f;
      }
      var ue = null,
        ce;
      t[20] === Symbol.for("react.memo_cache_sentinel")
        ? ((ce = u.jsx(
            o("WAWebSearchRefreshedThinIcon.react").SearchRefreshedThinIcon,
            { xstyle: _.iconColorRefreshed },
          )),
          (t[20] = ce))
        : (ce = t[20]);
      var de = ce,
        me;
      t[21] !== ae || t[22] !== W || t[23] !== O || t[24] !== $
        ? ((me = $
            ? u.jsxs("button", {
                "aria-label": s._(/*BTDS*/ "Cancel search"),
                onClick: ae,
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
                      { children: de },
                    ),
                  ),
                ],
              })
            : de),
          (t[21] = ae),
          (t[22] = W),
          (t[23] = O),
          (t[24] = $),
          (t[25] = me))
        : (me = t[25]);
      var pe = me;
      if (y === !0) {
        var _e;
        (t[26] === Symbol.for("react.memo_cache_sentinel")
          ? ((_e = u.jsx(o("WAWebFlex.react").FlexRow, {
              marginEnd: 16,
              children: u.jsx(o("WAWebSpinner.react").Spinner, {
                color: "highlight",
                size: 20,
                stroke: 6,
              }),
            })),
            (t[26] = _e))
          : (_e = t[26]),
          (ue = _e));
      } else if (O || P) {
        var fe;
        t[27] === Symbol.for("react.memo_cache_sentinel")
          ? ((fe = s._(/*BTDS*/ "Cancel search")), (t[27] = fe))
          : (fe = t[27]);
        var ge;
        t[28] !== se.iconCloseSearch
          ? ((ge = [_.iconCloseSearch, se.iconCloseSearch]),
            (t[28] = se.iconCloseSearch),
            (t[29] = ge))
          : (ge = t[29]);
        var he;
        t[30] === Symbol.for("react.memo_cache_sentinel")
          ? ((he = u.jsx(r("WDSIconIcClose.react"), {})), (t[30] = he))
          : (he = t[30]);
        var ye;
        (t[31] !== re || t[32] !== ge
          ? ((ye = u.jsx(o("WAWebFlex.react").FlexRow, {
              paddingEnd: 20,
              children: u.jsx(
                o("WAWebClickable.react").Clickable,
                {
                  ariaLabel: fe,
                  dataTestId: "clear-search-input",
                  onClick: re,
                  xstyle: ge,
                  children: he,
                },
                "icon-clear-search",
              ),
            })),
            (t[31] = re),
            (t[32] = ge),
            (t[33] = ye))
          : (ye = t[33]),
          (ue = ye));
      }
      var Ce;
      t[34] === Symbol.for("react.memo_cache_sentinel")
        ? ((Ce = { namespace: "CommandPaletteInput", onError: r("WAWebNoop") }),
          (t[34] = Ce))
        : (Ce = t[34]);
      var be = Ce,
        ve;
      t[35] !== j
        ? ((ve = function () {
            (j(), Q());
          }),
          (t[35] = j),
          (t[36] = ve))
        : (ve = t[36]);
      var Se = ve,
        Re;
      if (t[37] !== C || t[38] !== M.length) {
        Re = function (t) {
          e: {
            if (
              t.key ===
              o("WAWebKeyboardConstants").KEYBOARD_EVENT_KEY_VALUE.BACKSPACE
            ) {
              Le();
              break e;
            }
            if (
              t.key ===
              o("WAWebKeyboardConstants").KEYBOARD_EVENT_KEY_VALUE.ARROW_DOWN
            ) {
              (t.preventDefault(), C == null || C());
              break e;
            }
          }
        };
        var Le = function () {
          if (M.length === 0) {
            var e;
            (e = F.current) == null || e.focus();
          }
        };
        ((t[37] = C), (t[38] = M.length), (t[39] = Re));
      } else Re = t[39];
      var Ee;
      t[40] !== d || t[41] !== Se
        ? ((Ee =
            d != null &&
            u.jsx(r("WAWebSearchFilterChip.react"), {
              onClearFilter: Se,
              ref: F,
              text: d,
              xstyle: o("WAWebUISpacing").uiPadding.horiz4,
            })),
          (t[40] = d),
          (t[41] = Se),
          (t[42] = Ee))
        : (Ee = t[42]);
      var ke = Ee,
        Ie;
      t[43] !== L
        ? ((Ie = L != null ? L : [0, 20, 12, 20]), (t[43] = L), (t[44] = Ie))
        : (Ie = t[44]);
      var Te;
      t[45] !== i
        ? ((Te = [_.container, _.containerRefreshed, i]),
          (t[45] = i),
          (t[46] = Te))
        : (Te = t[46]);
      var De;
      t[47] === Symbol.for("react.memo_cache_sentinel")
        ? ((De = [_.inputWrapperRefreshed]), (t[47] = De))
        : (De = t[47]);
      var xe = !(M.length > 0) && o("WAWebUISpacing").uiPadding.end0,
        $e = W && _.inputWrapperFocusRefreshed,
        Pe;
      t[48] !== se.inputWrapperRefreshed || t[49] !== xe || t[50] !== $e
        ? ((Pe = [
            _.inputWrapper,
            _.inputWrapperMaterial,
            De,
            xe,
            se.inputWrapperRefreshed,
            $e,
          ]),
          (t[48] = se.inputWrapperRefreshed),
          (t[49] = xe),
          (t[50] = $e),
          (t[51] = Pe))
        : (Pe = t[51]);
      var Ne;
      t[52] !== pe
        ? ((Ne = u.jsx(o("WAWebFlex.react").FlexRow, {
            marginStart: 0,
            xstyle: _.startIconRefreshed,
            children: pe,
          })),
          (t[52] = pe),
          (t[53] = Ne))
        : (Ne = t[53]);
      var Me;
      t[54] !== Re
        ? ((Me = u.jsx(r("WAWebOnKeyDownPlugin"), { onKeyDown: Re })),
          (t[54] = Re),
          (t[55] = Me))
        : (Me = t[55]);
      var we;
      t[56] !== le || t[57] !== V || t[58] !== te
        ? ((we = u.jsx(r("WAWebEditorStatePlugin.react"), {
            onBlur: le,
            onChange: V,
            onFocus: te,
          })),
          (t[56] = le),
          (t[57] = V),
          (t[58] = te),
          (t[59] = we))
        : (we = t[59]);
      var Ae;
      t[60] === Symbol.for("react.memo_cache_sentinel")
        ? ((Ae = u.jsx(r("WAWebEditorRefPlugin"), { editorRef: A })),
          (t[60] = Ae))
        : (Ae = t[60]);
      var Fe;
      t[61] !== Me || t[62] !== we
        ? ((Fe = u.jsxs(u.Fragment, { children: [Me, we, Ae] })),
          (t[61] = Me),
          (t[62] = we),
          (t[63] = Fe))
        : (Fe = t[63]);
      var Oe;
      t[64] !== x ||
      t[65] !== S ||
      t[66] !== E ||
      t[67] !== k ||
      t[68] !== Fe ||
      t[69] !== D
        ? ((Oe = u.jsx(o("WAWebFlex.react").FlexRow, {
            paddingEnd: 8,
            xstyle: _.fullWidth,
            children: u.jsx(r("WAWebRichTextInput.react"), {
              children: Fe,
              focusOnMount: x,
              lineWrap: !1,
              multiline: !1,
              onClick: S,
              placeholder: E,
              tabOrder: D,
              testid: "search-input",
              title: k,
              xstyle: !1,
            }),
          })),
          (t[64] = x),
          (t[65] = S),
          (t[66] = E),
          (t[67] = k),
          (t[68] = Fe),
          (t[69] = D),
          (t[70] = Oe))
        : (Oe = t[70]);
      var Be;
      t[71] !== ue ||
      t[72] !== ke ||
      t[73] !== Pe ||
      t[74] !== Ne ||
      t[75] !== Oe
        ? ((Be = u.jsxs(o("WAWebFlex.react").FlexRow, {
            align: "center",
            grow: 1,
            padding: 0,
            xstyle: Pe,
            children: [Ne, ke, Oe, ue],
          })),
          (t[71] = ue),
          (t[72] = ke),
          (t[73] = Pe),
          (t[74] = Ne),
          (t[75] = Oe),
          (t[76] = Be))
        : (Be = t[76]);
      var We;
      t[77] !== l || t[78] !== c || t[79] !== Ie || t[80] !== Te || t[81] !== Be
        ? ((We = u.jsxs(o("WAWebFlex.react").FlexRow, {
            align: "center",
            basis: "auto",
            grow: 0,
            padding: Ie,
            shrink: 0,
            xstyle: Te,
            children: [l, Be, c],
          })),
          (t[77] = l),
          (t[78] = c),
          (t[79] = Ie),
          (t[80] = Te),
          (t[81] = Be),
          (t[82] = We))
        : (We = t[82]);
      var qe;
      return (
        t[83] !== n || t[84] !== We
          ? ((qe = u.jsxs(o("LexicalComposer").LexicalComposer, {
              initialConfig: be,
              children: [We, n],
            })),
            (t[83] = n),
            (t[84] = We),
            (t[85] = qe))
          : (qe = t[85]),
        qe
      );
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
              children: u.jsx(h, babelHelpers.extends({}, e, { padding: n })),
            })),
            (t[1] = e),
            (t[2] = r))
          : (r = t[2]),
        r
      );
    }
    ((l.SearchInput = h), (l.DrawerSearchInput = y));
  },
  226,
);
