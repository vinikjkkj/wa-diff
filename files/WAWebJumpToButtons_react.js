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
      var n,
        a,
        i = t.chat,
        l = t.handleJumpToBottom,
        u = t.handleJumpToMention,
        d = t.isMostRecentAndNotLoading,
        p = t.isNearBottom,
        f = t.newUnread,
        g = t.unreadMentionCount,
        h = !p || d,
        y = o("WAWebChatGetters").getIsGroup(i) && g > 0,
        C = null;
      if (y) {
        var b = [o("WAWebJumpToButtons.stylex").styles.boxShadow];
        (h
          ? b.push(m.buttonGap, o("WAWebUISpacing").uiMargin.bottom16)
          : b.push(m.borderRadius),
          (C = c.jsx(r("WAWebGroupCatchUpButton.react"), {
            handleJumpToMention: u,
            unreadMentionCount: g,
            xstyle: b,
          })));
      }
      var v = null;
      if (h) {
        var S = null;
        (f &&
          i.unreadCount &&
          (S = c.jsx(
            o("WAWebChatUnreadCount.react").UnreadCount,
            { count: f },
            "icon-unread",
          )),
          (v = c.jsxs(r("WAWebUnstyledButton.react"), {
            xstyle: [
              o("WAWebJumpToButtons.stylex").styles.boxShadow,
              o("WAWebJumpToButtons.stylex").styles.incomingRefreshed,
              o("WAWebUISpacing").uiPadding.all10,
            ],
            dataTab: o("WAWebTabOrder").TAB_ORDER.MESSAGE_LIST_SCROLL_BUTTON,
            onClick: l,
            "aria-label": s._(/*BTDS*/ "Scroll to bottom"),
            children: [
              c.jsx(
                o("WAWebIcChevronDownWideIcon.react").IcChevronDownWideIcon,
                { xstyle: m.chevronRefreshed },
              ),
              S &&
                c.jsx(
                  "span",
                  babelHelpers.extends(
                    {},
                    (e || (e = r("stylex"))).props(
                      o("WAWebJumpToButtons.stylex").styles.unreadRefreshed,
                    ),
                    { children: S },
                  ),
                ),
            ],
          })));
      }
      var R =
        ((n = i.contact) == null ? void 0 : n.isBusiness) === !0 &&
        ((a = i.contact) == null || (a = a.id) == null
          ? void 0
          : a.isRegularUser()) === !0 &&
        c.jsx(_, { chat: i, showGroupMention: y, showIncomingMsgs: h });
      return h && y
        ? c.jsxs(
            "div",
            babelHelpers.extends(
              {},
              (e || (e = r("stylex"))).props(
                m.incomingContainerRefreshed,
                m.borderRadius,
                o("WAWebUISpacing").uiMargin.end4,
              ),
              { children: [R, C, v] },
            ),
          )
        : c.jsxs("div", {
            className: "x10l6tqk x1mhpo7k x1qs2g4o x12xzxwr x3nfvp2 xdt5ytf",
            children: [
              R,
              C,
              c.jsx(r("WAWebVelocityTransitionGroup"), {
                transitionName: "pop",
                children: v,
              }),
            ],
          });
    }
    p.displayName = p.name + " [from " + i.id + "]";
    function _(t) {
      var n,
        a = t.chat,
        i = t.showGroupMention,
        l = t.showIncomingMsgs,
        u = o("WAWebChatGetters").getIsGroup(a),
        p = d(
          function () {
            return u
              ? null
              : o("WAWebCartCollection").CartCollection.findCart(
                  a.id.toString(),
                ).id;
          },
          [a.id, u],
        ),
        _ = o("useWAWebCartValues").useOptionalCartValues(p, [
          o("WAWebCartGetters").getCartItemCount,
        ]),
        f = (n = _ == null ? void 0 : _[0]) != null ? n : 0,
        g = null;
      if (
        f > 0 &&
        o("WAWebABProps").getABPropConfigValue("wa_web_jump_to_cart")
      ) {
        var h = function () {
          o("WAWebDrawerManager").DrawerManager.openDrawerRight(
            c.jsx(o("WAWebCartFlowLoadable").CartFlowLoadable, {
              sellerJid: a.id.toString(),
              chat: a,
            }),
          );
        };
        g = c.jsxs(r("WAWebUnstyledButton.react"), {
          xstyle: [
            o("WAWebJumpToButtons.stylex").styles.boxShadow,
            o("WAWebJumpToButtons.stylex").styles.incomingRefreshed,
            o("WAWebUISpacing").uiPadding.all10,
            (i || l) && m.buttonGap,
            (i || l) && o("WAWebUISpacing").uiMargin.bottom16,
          ],
          dataTab: o("WAWebTabOrder").TAB_ORDER.MESSAGE_LIST_SCROLL_BUTTON,
          onClick: h,
          "aria-label": s._(/*BTDS*/ "View cart"),
          children: [
            c.jsx(r("WDSIconIcShoppingCart.react"), {
              xstyle: m.chevronRefreshed,
            }),
            c.jsx(
              "span",
              babelHelpers.extends(
                {},
                (e || (e = r("stylex"))).props(
                  o("WAWebJumpToButtons.stylex").styles.unreadRefreshed,
                ),
                {
                  children: c.jsx(o("WAWebChatUnreadCount.react").UnreadCount, {
                    count: f,
                  }),
                },
              ),
            ),
          ],
        });
      }
      return g;
    }
    ((_.displayName = _.name + " [from " + i.id + "]"), (l.default = p));
  },
  226,
);
