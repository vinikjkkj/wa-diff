__d(
  "WAWebJumpToButtons.react",
  [
    "fbt",
    "WAWebABProps",
    "WAWebCartCollection",
    "WAWebCartFlowLoadable",
    "WAWebCartGetters",
    "WAWebChatGetters",
    "WAWebChatUnreadCount.react",
    "WAWebDrawerManager",
    "WAWebGroupCatchUpButton.react",
    "WAWebIcChevronDownWideIcon.react",
    "WAWebJumpToButtons.stylex",
    "WAWebTabOrder",
    "WAWebUISpacing",
    "WAWebUnstyledButton.react",
    "WAWebVelocityTransitionGroup",
    "WDSIconIcShoppingCart.react",
    "react",
    "react-compiler-runtime",
    "stylex",
    "useWAWebCartValues",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react")),
      d = u.useMemo,
      m = {
        buttonGap: { transition: "x6q2ic0", $$css: !0 },
        chevronRefreshed: { color: "xhslqc4", $$css: !0 },
        borderRadius: {
          borderStartStartRadius: "x17m9png",
          borderStartEndRadius: "x91sizk",
          borderEndEndRadius: "x1vva9xg",
          borderEndStartRadius: "x1jfkl46",
          $$css: !0,
        },
        incomingContainerRefreshed: {
          position: "x10l6tqk",
          insetInlineEnd: "x1mhpo7k",
          bottom: "x1qs2g4o",
          zIndex: "x12xzxwr",
          display: "x3nfvp2",
          flexDirection: "xdt5ytf",
          $$css: !0,
        },
      };
    function p(t) {
      var n = o("react-compiler-runtime").c(35),
        a = t.chat,
        i = t.handleJumpToBottom,
        l = t.handleJumpToMention,
        u = t.isMostRecentAndNotLoading,
        d = t.isNearBottom,
        p = t.newUnread,
        f = t.unreadMentionCount,
        g = !d || u,
        h;
      n[0] !== a || n[1] !== f
        ? ((h = o("WAWebChatGetters").getIsGroup(a) && f > 0),
          (n[0] = a),
          (n[1] = f),
          (n[2] = h))
        : (h = n[2]);
      var y = h,
        C = null;
      if (y) {
        var b;
        n[3] !== g
          ? ((b = [o("WAWebJumpToButtons.stylex").styles.boxShadow]),
            g
              ? b.push(m.buttonGap, o("WAWebUISpacing").uiMargin.bottom16)
              : b.push(m.borderRadius),
            (n[3] = g),
            (n[4] = b))
          : (b = n[4]);
        var v;
        (n[5] !== b || n[6] !== l || n[7] !== f
          ? ((v = c.jsx(r("WAWebGroupCatchUpButton.react"), {
              handleJumpToMention: l,
              unreadMentionCount: f,
              xstyle: b,
            })),
            (n[5] = b),
            (n[6] = l),
            (n[7] = f),
            (n[8] = v))
          : (v = n[8]),
          (C = v));
      }
      var S = null;
      if (g) {
        var R = null;
        if (p && a.unreadCount) {
          var L;
          (n[9] !== p
            ? ((L = c.jsx(
                o("WAWebChatUnreadCount.react").UnreadCount,
                { count: p },
                "icon-unread",
              )),
              (n[9] = p),
              (n[10] = L))
            : (L = n[10]),
            (R = L));
        }
        var E;
        n[11] === Symbol.for("react.memo_cache_sentinel")
          ? ((E = [
              o("WAWebJumpToButtons.stylex").styles.boxShadow,
              o("WAWebJumpToButtons.stylex").styles.incomingRefreshed,
              o("WAWebUISpacing").uiPadding.all10,
            ]),
            (n[11] = E))
          : (E = n[11]);
        var k, I;
        n[12] === Symbol.for("react.memo_cache_sentinel")
          ? ((k = s._(/*BTDS*/ "Scroll to bottom")),
            (I = c.jsx(
              o("WAWebIcChevronDownWideIcon.react").IcChevronDownWideIcon,
              { xstyle: m.chevronRefreshed },
            )),
            (n[12] = k),
            (n[13] = I))
          : ((k = n[12]), (I = n[13]));
        var T;
        n[14] !== R
          ? ((T =
              R &&
              c.jsx(
                "span",
                babelHelpers.extends(
                  {},
                  (e || (e = r("stylex"))).props(
                    o("WAWebJumpToButtons.stylex").styles.unreadRefreshed,
                  ),
                  { children: R },
                ),
              )),
            (n[14] = R),
            (n[15] = T))
          : (T = n[15]);
        var D;
        (n[16] !== i || n[17] !== T
          ? ((D = c.jsxs(r("WAWebUnstyledButton.react"), {
              xstyle: E,
              dataTab: o("WAWebTabOrder").TAB_ORDER.MESSAGE_LIST_SCROLL_BUTTON,
              onClick: i,
              "aria-label": k,
              children: [I, T],
            })),
            (n[16] = i),
            (n[17] = T),
            (n[18] = D))
          : (D = n[18]),
          (S = D));
      }
      var x;
      if (n[19] !== a || n[20] !== y || n[21] !== g) {
        var $, P;
        ((x =
          (($ = a.contact) == null ? void 0 : $.isBusiness) === !0 &&
          ((P = a.contact) == null || (P = P.id) == null
            ? void 0
            : P.isRegularUser()) === !0 &&
          c.jsx(_, { chat: a, showGroupMention: y, showIncomingMsgs: g })),
          (n[19] = a),
          (n[20] = y),
          (n[21] = g),
          (n[22] = x));
      } else x = n[22];
      var N = x;
      if (g && y) {
        var M;
        n[23] === Symbol.for("react.memo_cache_sentinel")
          ? ((M = (e || (e = r("stylex"))).props(
              m.incomingContainerRefreshed,
              m.borderRadius,
              o("WAWebUISpacing").uiMargin.end4,
            )),
            (n[23] = M))
          : (M = n[23]);
        var w;
        return (
          n[24] !== C || n[25] !== S || n[26] !== N
            ? ((w = c.jsxs(
                "div",
                babelHelpers.extends({}, M, { children: [N, C, S] }),
              )),
              (n[24] = C),
              (n[25] = S),
              (n[26] = N),
              (n[27] = w))
            : (w = n[27]),
          w
        );
      }
      var A;
      n[28] === Symbol.for("react.memo_cache_sentinel")
        ? ((A = {
            className: "x10l6tqk x1mhpo7k x1qs2g4o x12xzxwr x3nfvp2 xdt5ytf",
          }),
          (n[28] = A))
        : (A = n[28]);
      var F;
      n[29] !== S
        ? ((F = c.jsx(r("WAWebVelocityTransitionGroup"), {
            transitionName: "pop",
            children: S,
          })),
          (n[29] = S),
          (n[30] = F))
        : (F = n[30]);
      var O;
      return (
        n[31] !== C || n[32] !== N || n[33] !== F
          ? ((O = c.jsxs(
              "div",
              babelHelpers.extends({}, A, { children: [N, C, F] }),
            )),
            (n[31] = C),
            (n[32] = N),
            (n[33] = F),
            (n[34] = O))
          : (O = n[34]),
        O
      );
    }
    function _(t) {
      var n,
        a = o("react-compiler-runtime").c(20),
        i = t.chat,
        l = t.showGroupMention,
        u = t.showIncomingMsgs,
        d;
      a[0] !== i
        ? ((d = o("WAWebChatGetters").getIsGroup(i)), (a[0] = i), (a[1] = d))
        : (d = a[1]);
      var p = d,
        _;
      a[2] !== i.id || a[3] !== p
        ? ((_ = p
            ? null
            : o("WAWebCartCollection").CartCollection.findCart(i.id.toString())
                .id),
          (a[2] = i.id),
          (a[3] = p),
          (a[4] = _))
        : (_ = a[4]);
      var f = _,
        g;
      a[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((g = [o("WAWebCartGetters").getCartItemCount]), (a[5] = g))
        : (g = a[5]);
      var h = o("useWAWebCartValues").useOptionalCartValues(f, g),
        y = (n = h == null ? void 0 : h[0]) != null ? n : 0,
        C = null;
      if (
        y > 0 &&
        o("WAWebABProps").getABPropConfigValue("wa_web_jump_to_cart")
      ) {
        var b;
        a[6] !== i
          ? ((b = function () {
              o("WAWebDrawerManager").DrawerManager.openDrawerRight(
                c.jsx(o("WAWebCartFlowLoadable").CartFlowLoadable, {
                  sellerJid: i.id.toString(),
                  chat: i,
                }),
              );
            }),
            (a[6] = i),
            (a[7] = b))
          : (b = a[7]);
        var v = b,
          S = (l || u) && m.buttonGap,
          R = (l || u) && o("WAWebUISpacing").uiMargin.bottom16,
          L;
        a[8] !== S || a[9] !== R
          ? ((L = [
              o("WAWebJumpToButtons.stylex").styles.boxShadow,
              o("WAWebJumpToButtons.stylex").styles.incomingRefreshed,
              o("WAWebUISpacing").uiPadding.all10,
              S,
              R,
            ]),
            (a[8] = S),
            (a[9] = R),
            (a[10] = L))
          : (L = a[10]);
        var E, k, I;
        a[11] === Symbol.for("react.memo_cache_sentinel")
          ? ((k = s._(/*BTDS*/ "View cart")),
            (I = c.jsx(r("WDSIconIcShoppingCart.react"), {
              xstyle: m.chevronRefreshed,
            })),
            (E = (e || (e = r("stylex"))).props(
              o("WAWebJumpToButtons.stylex").styles.unreadRefreshed,
            )),
            (a[11] = E),
            (a[12] = k),
            (a[13] = I))
          : ((E = a[11]), (k = a[12]), (I = a[13]));
        var T;
        a[14] !== y
          ? ((T = c.jsx(
              "span",
              babelHelpers.extends({}, E, {
                children: c.jsx(o("WAWebChatUnreadCount.react").UnreadCount, {
                  count: y,
                }),
              }),
            )),
            (a[14] = y),
            (a[15] = T))
          : (T = a[15]);
        var D;
        (a[16] !== v || a[17] !== T || a[18] !== L
          ? ((D = c.jsxs(r("WAWebUnstyledButton.react"), {
              xstyle: L,
              dataTab: o("WAWebTabOrder").TAB_ORDER.MESSAGE_LIST_SCROLL_BUTTON,
              onClick: v,
              "aria-label": k,
              children: [I, T],
            })),
            (a[16] = v),
            (a[17] = T),
            (a[18] = L),
            (a[19] = D))
          : (D = a[19]),
          (C = D));
      }
      return C;
    }
    l.default = p;
  },
  226,
);
