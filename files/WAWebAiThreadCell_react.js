__d(
  "WAWebAiThreadCell.react",
  [
    "fbt",
    "WAWebAccessibility.react",
    "WAWebAiThreadGetters",
    "WAWebBotGating",
    "WAWebCellV2.react",
    "WAWebChatEntryPoint",
    "WAWebChatLastMsg.react",
    "WAWebChatUnreadCount.react",
    "WAWebCheckBox.react",
    "WAWebClock",
    "WAWebCmd",
    "WAWebCreateAiThreadTitleForMessage",
    "WAWebEmojiText.react",
    "WAWebFlex.react",
    "WAWebFormatConfiguration",
    "WAWebIcChevronDownMenuIcon.react",
    "WAWebKeyboardIsKeyActivation",
    "WAWebResolveThreadForEntryPoint",
    "WAWebStopEvent",
    "WAWebThreadJourneyLogger",
    "WAWebVelocityTransitionGroup",
    "WAWebWamEnumMetaAiActionEntryPoint",
    "WDSFocusStateStyles",
    "WDSIconIcPushPin.react",
    "WDSText.react",
    "WDSTooltip.react",
    "react",
    "stylex",
    "useHoverState",
    "useWAWebAiThreadLastMessagePreview",
    "useWAWebEventTargetValue",
    "useWAWebIsKeyboardUser",
    "useWAWebListener",
    "useWAWebPreloadThreadPreviewMessages",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react")),
      d = u,
      m = d.useCallback,
      p = d.useMemo,
      _ = d.useRef,
      f = d.useState,
      g = {
        btnContext: {
          display: "x1rg5ohu",
          width: "xn6xy2s",
          height: "x1qx5ct2",
          marginInlineStart: "x1wbi8v6",
          color: "xhslqc4",
          verticalAlign: "x16dsc37",
          $$css: !0,
        },
        btnContextAdjust: {
          width: "xw4jnvo",
          height: "x1qx5ct2",
          marginInlineEnd: "x18faa90",
          $$css: !0,
        },
        loadingIndicator: {
          fontStyle: "x1k4tb9n",
          color: "xhslqc4",
          $$css: !0,
        },
      };
    function h(t) {
      var n = t.chat,
        a = t.multiSelection,
        i = t.onThreadClick,
        l = t.selectableState,
        u = t.thread;
      r("useWAWebPreloadThreadPreviewMessages")(u, n);
      var d = r("useWAWebAiThreadLastMessagePreview")(u),
        h = r("useHoverState")(),
        y = h.isHovered,
        C = h.onMouseEnter,
        b = h.onMouseLeave,
        v = h.setIsHovered,
        S = f(!1),
        R = S[0],
        L = S[1],
        E = r("useWAWebIsKeyboardUser")(),
        k = E.isKeyboardUser,
        I = _(null),
        T = t.searchText != null && t.searchText !== "",
        D = r("useWAWebEventTargetValue")(u, "change:title", function () {
          if (
            o("WAWebResolveThreadForEntryPoint").isDefaultThread(u.id) &&
            o("WAWebBotGating").isDefaultThreadRoutingEnabled()
          )
            return o("WAWebAiThreadGetters").getDisplayTitle(u);
          if (u.title != null) return u.title;
          var e = u.msgs.head();
          if (e != null) {
            var t = o(
              "WAWebCreateAiThreadTitleForMessage",
            ).createAiThreadTitleForMessage(e);
            if (t != null) return t;
          }
          return o("WAWebAiThreadGetters").getDisplayTitle(u);
        }),
        x =
          u.lastMessageTimestamp != null
            ? o("WAWebClock").Clock.relativeStr(u.lastMessageTimestamp)
            : null,
        $ = m(
          function () {
            var e = u.id;
            (o("WAWebThreadJourneyLogger").ThreadJourneyLogger.logThreadEnter(
              e,
              o("WAWebWamEnumMetaAiActionEntryPoint").META_AI_ACTION_ENTRY_POINT
                .THREAD_LIST_VIEW,
              u.creationTimestamp,
            ),
              o("WAWebCmd").Cmd.openChatBottom({
                chat: n,
                chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint
                  .MetaAIThreadList,
                threadId: e,
              }),
              i == null || i(e));
          },
          [u.id, u.creationTimestamp, n, i],
        ),
        P = function (n) {
          (n.stopPropagation(),
            n.preventDefault(),
            t.onContext == null || t.onContext(u, { anchor: n.target }));
        },
        N = function (n) {
          t.onContext == null || t.onContext(u, n);
        },
        M = function (n) {
          r("WAWebKeyboardIsKeyActivation")(n) &&
            (n.stopPropagation(),
            n.preventDefault(),
            t.onContext == null || t.onContext(u, { anchor: I.current }));
        },
        w = function () {
          var e;
          ((e = I.current) == null || e.removeAttribute("aria-hidden"),
            L(!0),
            v(!0));
        },
        A = function () {
          var e;
          ((e = I.current) == null || e.setAttribute("aria-hidden", "true"),
            L(!1),
            v(!1));
        },
        F = s._(/*BTDS*/ "Open the thread context menu"),
        O = null;
      if (!T && (y || t.isContextMenuOpen === !0)) {
        var B = c.jsx(
            o("WAWebIcChevronDownMenuIcon.react").IcChevronDownMenuIcon,
            {},
          ),
          W = (e || (e = r("stylex")))(
            g.btnContext,
            k && o("WDSFocusStateStyles").WDSFocusStateStyles.genericFocus,
            g.btnContextAdjust,
          );
        O = c.jsxs(
          "button",
          {
            "data-testid": void 0,
            className: W,
            ref: I,
            onMouseDown: o("WAWebStopEvent").stopPropagation,
            onClick: P,
            onKeyDown: M,
            onFocus: w,
            onBlur: A,
            tabIndex: 0,
            children: [
              B,
              R &&
                c.jsx(o("WAWebAccessibility.react").InvisibleAnnouncement, {
                  assertive: !0,
                  text: F,
                  startWithText: !0,
                }),
            ],
          },
          "icon-context",
        );
      }
      var q = r("useWAWebEventTargetValue")(l, "all", function () {
          return l.isSelectable;
        }),
        U = c.jsx(r("WAWebVelocityTransitionGroup"), {
          transitionName: "pop-fast-chat",
          children: (y && !q) || t.isContextMenuOpen === !0 ? O : null,
        }),
        V = r("useWAWebEventTargetValue")(u, "change:unreadCount", function () {
          var e;
          return (e = u.unreadCount) != null ? e : 0;
        }),
        H =
          !T && V > 0
            ? c.jsx(o("WAWebChatUnreadCount.react").UnreadCount, { count: V })
            : null,
        G = p(
          function () {
            var e, n;
            return T
              ? o("WAWebFormatConfiguration").SearchName({
                  terms: [
                    (e = (n = t.searchText) == null ? void 0 : n.trim()) != null
                      ? e
                      : "",
                  ],
                })
              : [];
          },
          [T, t.searchText],
        ),
        z =
          x != null
            ? c.jsx(r("WDSText.react"), {
                type: "Body3",
                colorName: "contentDeemphasized",
                children: x,
              })
            : null,
        j = z,
        K = r("useWAWebEventTargetValue")(
          u,
          "change:pinThreadTimestamp",
          function () {
            var e = u.pinThreadTimestamp;
            return (
              e != null && e > 0 && o("WAWebBotGating").isAiThreadPinEnabled()
            );
          },
        ),
        Q = K
          ? c.jsx("div", {
              className: "x1rg5ohu xhslqc4 x16dsc37",
              children: c.jsx(r("WDSIconIcPushPin.react"), {
                width: 20,
                height: 20,
              }),
            })
          : null,
        X = T
          ? null
          : c.jsxs(o("WAWebFlex.react").FlexRow, {
              align: "center",
              columnGap: 4,
              children: [H, Q, U],
            }),
        Y = "Body1",
        J = c.jsx(r("WDSTooltip.react"), {
          label: D,
          position: "below",
          children: c.jsx(r("WDSText.react"), {
            type: Y,
            colorName: "contentDefault",
            maxLines: 1,
            children: c.jsx(o("WAWebEmojiText.react").EmojiText, {
              text: D,
              formatters: G,
              direction: "auto",
            }),
          }),
        }),
        Z = c.jsx(r("WDSText.react"), {
          type: "Body2",
          colorName: "contentDeemphasized",
          maxLines: 1,
          children:
            d != null
              ? c.jsx(r("WAWebChatLastMsg.react"), {
                  msg: d.safe(),
                  msgType: "LastMessage",
                })
              : c.jsx(o("WAWebEmojiText.react").EmojiText, {
                  xstyle: g.loadingIndicator,
                  direction: "inherit",
                  titlify: !0,
                  ellipsify: !0,
                  text: s._(/*BTDS*/ "Loading\u2026"),
                }),
        }),
        ee = function () {
          !T && q && !le ? ae() : $();
        },
        te = f(function () {
          return a.isSelected(u);
        }),
        ne = te[0],
        re = te[1],
        oe = function (t) {
          re(t);
        },
        ae = function () {
          a.setVal(u, !ne, !1);
          var e = u.id;
          (i == null || i(e),
            o("WAWebCmd").Cmd.openChatBottom({
              chat: n,
              chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint
                .MetaAIThreadList,
              threadId: e,
            }));
        },
        ie = u.id.toString();
      o("useWAWebListener").useListener(a, ie, oe);
      var le =
          o("WAWebResolveThreadForEntryPoint").isDefaultThread(u.id) &&
          o("WAWebBotGating").isDefaultThreadRoutingEnabled(),
        se =
          !T && q && !le
            ? c.jsx(o("WAWebCheckBox.react").CheckBox, {
                checked: ne,
                onChange: ae,
              })
            : null;
      return c.jsx(r("WAWebCellV2.react"), {
        onClick: ee,
        colorScheme: "default",
        size: "large",
        border: "bottom-partial",
        primary: J,
        primaryRight: j,
        secondary: Z,
        secondaryRight: X,
        detailLeft: se,
        onMouseEnter: T ? void 0 : C,
        onMouseLeave: T ? void 0 : b,
        onContextMenu: T ? void 0 : N,
        active: t.isActive,
      });
    }
    ((h.displayName = h.name + " [from " + i.id + "]"),
      (l.WAWebAiThreadCell = h));
  },
  226,
);
