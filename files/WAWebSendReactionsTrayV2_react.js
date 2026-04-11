__d(
  "WAWebSendReactionsTrayV2.react",
  [
    "fbt",
    "WAWebCreateEmojiIcon",
    "WAWebKeyboardHotKeys.react",
    "WAWebKeyboardRotateFocusArrows.react",
    "WAWebL10N",
    "WAWebReactionGatingUtils",
    "WAWebReactionUserJourneyLogger",
    "WDSButton.react",
    "WDSGlobalContext",
    "WDSIconIcAdd.react",
    "react",
    "react-compiler-runtime",
    "stylex",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react")),
      d = u,
      m = d.useCallback,
      p = d.useContext,
      _ = d.useEffect,
      f = d.useRef,
      g = d.useState,
      h = "__more_reactions__",
      y = "x1p1bido-B",
      C = "xekv6nw-B",
      b = "xpldhdr-B",
      v = "xhi3f1f-B",
      S = "x1idb06i-B",
      R = "x4318q0-B",
      L = {
        trayContainer: {
          display: "x78zum5",
          flexDirection: "x1q0g3np",
          alignItems: "x6s0dn4",
          borderStartStartRadius: "xuqqiot",
          borderStartEndRadius: "x1lkg3h2",
          borderEndEndRadius: "x17mbzc4",
          borderEndStartRadius: "xcouhex",
          paddingTop: "x1tiyuxx",
          paddingInlineStart: "x181vq82",
          paddingBottom: "xa0aww2",
          paddingInlineEnd: "x1j8ymqv",
          position: "x1n2onr6",
          backgroundColor: "xjbqb8w",
          $$css: !0,
        },
        trayContainerBackground: {
          "::before_content": "x1cpjm7i",
          "::before_position": "x1hmns74",
          "::before_insetInlineStart": "x1682cnc",
          "::before_top": "x1y3wzot",
          "::before_width": "x1rmj1tg",
          "::before_height": "xszcg87",
          "::before_backgroundColor": "x1xkdbmx",
          "::before_boxShadow": "x1gli9xx",
          "::before_borderStartStartRadius": "x13u126r",
          "::before_borderStartEndRadius": "xfd7154",
          "::before_borderEndEndRadius": "x1izptsd",
          "::before_borderEndStartRadius": "xbfqeeh",
          "::before_borderTopColor": "x1wr5goe",
          "::before_borderInlineEndColor": "x71iooo",
          "::before_borderBottomColor": "xkhwigo",
          "::before_borderInlineStartColor": "x4vc7s6",
          "::before_borderTopStyle": "xnvurfn",
          "::before_borderInlineEndStyle": "x1v3rft4",
          "::before_borderBottomStyle": "x1opv7go",
          "::before_borderInlineStartStyle": "x1rovbrg",
          "::before_borderTopWidth": "xm4vf9w",
          "::before_borderInlineEndWidth": "x1ggjbpq",
          "::before_borderBottomWidth": "xu20p9z",
          "::before_borderInlineStartWidth": "x1t6kmxa",
          "::before_zIndex": "xy5mcqj",
          "::before_transform": "x1ox0wv9",
          "::before_animationFillMode": "x4vjblf",
          "::before_willChange": "xmksmyx",
          "::before_animationName": "x9bpk4s",
          "::before_animationDuration": "x11jsb0w",
          "::before_animationTimingFunction": "xihg8qz",
          $$css: !0,
        },
        trayContainerAnimateLeft: {
          "::before_transformOrigin": "xfqct0e",
          $$css: !0,
        },
        trayContainerAnimateRight: {
          "::before_transformOrigin": "x7awuxw",
          $$css: !0,
        },
        trayContainerStatic: {
          backgroundColor: "x16w0wmm",
          boxShadow: "xvktan5",
          borderTopColor: "x1ekq09l",
          borderInlineEndColor: "xlmuga0",
          borderBottomColor: "x54tcbp",
          borderInlineStartColor: "xlzwp1d",
          borderTopStyle: "x13fuv20",
          borderInlineEndStyle: "x18b5jzi",
          borderBottomStyle: "x1q0q8m5",
          borderInlineStartStyle: "x1t7ytsu",
          borderTopWidth: "x178xt8z",
          borderInlineEndWidth: "x1lun4ml",
          borderBottomWidth: "xso031l",
          borderInlineStartWidth: "xpilrb4",
          $$css: !0,
        },
        trayClosing: {
          animationName: "x15r5tu9",
          animationDuration: "xbn3cbp",
          animationTimingFunction: "xmgxswx",
          animationFillMode: "x10e4vud",
          $$css: !0,
        },
        selectedButton: {
          backgroundColor: "x4wrhlh",
          borderStartStartRadius: "x1c9tyrk",
          borderStartEndRadius: "xeusxvb",
          borderEndEndRadius: "x1pahc9y",
          borderEndStartRadius: "x1ertn4p",
          $$css: !0,
        },
      },
      E = {
        emojiItem: {
          backfaceVisibility: "xlp1x4z",
          transform: "x1cmvv92",
          animationFillMode: "x10e4vud",
          animationName: "xqzvon3",
          animationDuration: "x1khvrug",
          animationTimingFunction: "xygk8lx",
          $$css: !0,
        },
        staggerLeft0: { animationDelay: "x1k7gots", $$css: !0 },
        staggerLeft1: { animationDelay: "x1daqvy5", $$css: !0 },
        staggerLeft2: { animationDelay: "xgfvxhe", $$css: !0 },
        staggerLeft3: { animationDelay: "x1yvtal6", $$css: !0 },
        staggerLeft4: { animationDelay: "x5spour", $$css: !0 },
        staggerLeft5: { animationDelay: "x1dr692l", $$css: !0 },
        staggerLeft6: { animationDelay: "x12cbgk8", $$css: !0 },
        staggerRight0: { animationDelay: "x12cbgk8", $$css: !0 },
        staggerRight1: { animationDelay: "x1dr692l", $$css: !0 },
        staggerRight2: { animationDelay: "x5spour", $$css: !0 },
        staggerRight3: { animationDelay: "x1yvtal6", $$css: !0 },
        staggerRight4: { animationDelay: "xgfvxhe", $$css: !0 },
        staggerRight5: { animationDelay: "x1daqvy5", $$css: !0 },
      },
      k = [
        E.staggerLeft0,
        E.staggerLeft1,
        E.staggerLeft2,
        E.staggerLeft3,
        E.staggerLeft4,
        E.staggerLeft5,
        E.staggerLeft6,
      ],
      I = [
        E.staggerRight0,
        E.staggerRight1,
        E.staggerRight2,
        E.staggerRight3,
        E.staggerRight4,
        E.staggerRight5,
      ];
    function T(t) {
      var n = o("react-compiler-runtime").c(28),
        a = t.disableAutoFocus,
        i = t.isParentMsgSentByMe,
        l = t.reactions,
        u = t.selectedCallback,
        d = t.selectedIndex,
        m = t.showMoreOption,
        y = a === void 0 ? !1 : a,
        C = i === void 0 ? !1 : i,
        b = m === void 0 ? !1 : m,
        S = f(null),
        R = p(o("WDSGlobalContext").WDSContext),
        T = R.closeAllMenus,
        $;
      n[0] === Symbol.for("react.memo_cache_sentinel")
        ? (($ = o("WAWebReactionGatingUtils").isReactionsMotionV2Enabled()),
          (n[0] = $))
        : ($ = n[0]);
      var P = $,
        N = r("WAWebL10N").isRTL() ? C : !C,
        M = g(!1),
        w = M[0],
        A = M[1],
        F = f(null),
        O,
        B;
      (n[1] !== y
        ? ((O = function () {
            if (y !== !0) {
              var e;
              (e = S.current) == null || e.focusFirst();
            }
          }),
          (B = [y]),
          (n[1] = y),
          (n[2] = O),
          (n[3] = B))
        : ((O = n[2]), (B = n[3])),
        _(O, B));
      var W;
      n[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((W = { "shift+tab": x, tab: D }), (n[4] = W))
        : (W = n[4]);
      var q = W,
        U;
      n[5] !== T || n[6] !== u
        ? ((U = function () {
            (o(
              "WAWebReactionUserJourneyLogger",
            ).ReactionUserJourneyLogger.searchOpen(),
              T(),
              u(h));
          }),
          (n[5] = T),
          (n[6] = u),
          (n[7] = U))
        : (U = n[7]);
      var V = U,
        H;
      n[8] !== u
        ? ((H = function (t) {
            var e = F.current;
            e != null &&
              t.animationName === v.toString() &&
              ((F.current = null), u(e));
          }),
          (n[8] = u),
          (n[9] = H))
        : (H = n[9]);
      var G = H,
        z;
      n[10] !== N || n[11] !== w
        ? ((z = (e || (e = r("stylex"))).props(
            L.trayContainer,
            P
              ? [
                  L.trayContainerBackground,
                  N ? L.trayContainerAnimateLeft : L.trayContainerAnimateRight,
                  w && L.trayClosing,
                ]
              : L.trayContainerStatic,
          )),
          (n[10] = N),
          (n[11] = w),
          (n[12] = z))
        : (z = n[12]);
      var j = w ? G : void 0,
        K;
      n[13] !== N || n[14] !== T || n[15] !== l || n[16] !== u || n[17] !== d
        ? ((K = l.map(function (t, n) {
            var o,
              a = function () {
                if ((T(), P)) {
                  ((F.current = t), A(!0));
                  return;
                }
                u(t);
              },
              i = d != null && n === d,
              l = N ? k : I;
            return c.jsx(
              "div",
              babelHelpers.extends(
                {},
                P
                  ? (e || (e = r("stylex"))).props(
                      E.emojiItem,
                      (o = l[n]) != null ? o : l[l.length - 1],
                    )
                  : void 0,
                {
                  "data-testid": void 0,
                  children: c.jsx(
                    r("WDSButton.react"),
                    {
                      Icon: r("WAWebCreateEmojiIcon")(t),
                      variant: "borderless",
                      onPress: a,
                      testid: void 0,
                      "aria-pressed": i,
                      xstyle: i && L.selectedButton,
                    },
                    n,
                  ),
                },
              ),
              n,
            );
          })),
          (n[13] = N),
          (n[14] = T),
          (n[15] = l),
          (n[16] = u),
          (n[17] = d),
          (n[18] = K))
        : (K = n[18]);
      var Q;
      n[19] !== N || n[20] !== V || n[21] !== b
        ? ((Q =
            b &&
            (P
              ? c.jsx(
                  "div",
                  babelHelpers.extends(
                    {},
                    {
                      0: {
                        className:
                          "xg01cxk x10e4vud x1x7npyb x1e3411s x1ci4q39 x1ooo47y",
                      },
                      1: {
                        className:
                          "xg01cxk x10e4vud x1fbm1x7 x1e3411s x1ci4q39 x1ooo47y",
                      },
                    }[!!N << 0],
                    {
                      children: c.jsx(r("WDSButton.react"), {
                        Icon: r("WDSIconIcAdd.react"),
                        variant: "borderless",
                        onPress: V,
                        "aria-label": s._(/*BTDS*/ "More reactions"),
                        testid: void 0,
                      }),
                    },
                  ),
                )
              : c.jsx(r("WDSButton.react"), {
                  Icon: r("WDSIconIcAdd.react"),
                  variant: "borderless",
                  onPress: V,
                  "aria-label": s._(/*BTDS*/ "More reactions"),
                  testid: void 0,
                }))),
          (n[19] = N),
          (n[20] = V),
          (n[21] = b),
          (n[22] = Q))
        : (Q = n[22]);
      var X;
      return (
        n[23] !== z || n[24] !== j || n[25] !== K || n[26] !== Q
          ? ((X = c.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
              handlers: q,
              tabIndex: null,
              children: c.jsx(r("WAWebKeyboardRotateFocusArrows.react"), {
                ref: S,
                children: c.jsxs(
                  "div",
                  babelHelpers.extends({ "data-menu-content": !0 }, z, {
                    onAnimationEnd: j,
                    children: [K, Q],
                  }),
                ),
              }),
            })),
            (n[23] = z),
            (n[24] = j),
            (n[25] = K),
            (n[26] = Q),
            (n[27] = X))
          : (X = n[27]),
        X
      );
    }
    function D(e) {
      (e.preventDefault(), e.stopPropagation());
    }
    function x(e) {
      (e.preventDefault(), e.stopPropagation());
    }
    l.default = T;
  },
  226,
);
