__d(
  "WAWebViewRepliesThreadsModal.react",
  [
    "fbt",
    "WAWebChatPreferenceCollection",
    "WAWebComposeBox.react",
    "WAWebConversationBackground.react",
    "WAWebConversationMsgs.react",
    "WAWebDomScroll",
    "WAWebDrawer.react",
    "WAWebDrawerBody.react",
    "WAWebDrawerHeader.react",
    "WAWebFlexBox.react",
    "WAWebIsInThreadsViewContext",
    "WAWebModal.react",
    "WAWebModalManager",
    "WAWebMultiSelection",
    "WAWebNoop",
    "WAWebThreadsGating",
    "WAWebThreadsViewAutoQuoteContext",
    "WAWebThreadsViewComposeQuotedMsgContext",
    "WAWebThreadsViewFocusMsgContext",
    "WDSText.react",
    "react",
    "useWAWebConversationPanelFiller.react",
    "useWAWebModelValues",
    "useWAWebThreadQuotedMsgIsolation",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e,
      d = c.useCallback,
      m = c.useEffect,
      p = c.useMemo,
      _ = c.useRef,
      f = c.useState,
      g = {
        body: {
          position: "x1n2onr6",
          flex: "x1cqoux5",
          zIndex: "x1vjfegm",
          overflowX: "x6ikm8r",
          overflowY: "x10wlt62",
          $$css: !0,
        },
      };
    function h(e) {
      var t = e.chat,
        n = e.threadId,
        a = o("useWAWebModelValues").useModelValues(t, ["name"]),
        i = r("WAWebChatPreferenceCollection").getDefault(),
        l = o("useWAWebModelValues").useModelValues(i, [
          "wallpaper",
          "showDoodle",
        ]),
        c = f(function () {
          return new (r("WAWebMultiSelection"))([], function (e) {
            return e.id.toString();
          });
        }),
        h = c[0],
        y = p(
          function () {
            var e;
            return (e = t.msgs.get(n.key)) != null ? e : null;
          },
          [t.msgs, n.key],
        ),
        C = o("WAWebThreadsGating").isViewRepliesComposerEnabled(),
        b = _(null),
        v = r("useWAWebConversationPanelFiller.react")({
          canCompose: C,
          selectable: !1,
          setScrollBottom: function (t) {
            var e;
            return (e = b.current) == null ? void 0 : e.setScrollBottom(t);
          },
          getScrollBottom: function () {
            var e;
            return (e = b.current) == null ? void 0 : e.getScrollBottom();
          },
          onComposeHeightChange: function (t) {
            var e;
            return (e = b.current) == null
              ? void 0
              : e.onComposeHeightChange(t);
          },
        }),
        S = v.filler,
        R = v.handleComposeHeightChange,
        L = v.msgPanelRef,
        E = r("useWAWebThreadQuotedMsgIsolation")(t);
      m(function () {
        var e = window.requestAnimationFrame(function () {
          var e;
          (e = b.current) == null || e.setScrollBottom(0);
        });
        return function () {
          return window.cancelAnimationFrame(e);
        };
      }, []);
      var k = f(null),
        I = k[0],
        T = k[1],
        D = d(
          function (e) {
            var n = t.msgs.findFirst(function (t) {
              return t.id.id === e;
            });
            return n == null ? !1 : (T({ msg: n, highlightMsg: !0 }), !0);
          },
          [t.msgs],
        );
      return (
        m(
          function () {
            if (!(I == null || I.msg == null)) {
              var e = I.msg.id.toString(),
                t = window.requestAnimationFrame(function () {
                  var t = document.querySelector(
                      '[data-testid="threads-view-messages"]',
                    ),
                    n =
                      t == null
                        ? void 0
                        : t.querySelector('[data-id="' + CSS.escape(e) + '"]');
                  if (n instanceof HTMLElement) {
                    o("WAWebDomScroll").scrollAt(n);
                    var r = getComputedStyle(n)
                      .getPropertyValue("--WDS-accent-RGB")
                      .trim();
                    r !== "" &&
                      n.animate(
                        [
                          { backgroundColor: "transparent", offset: 0 },
                          {
                            backgroundColor: "rgba(" + r + ", 0.35)",
                            offset: 0.5,
                          },
                          { backgroundColor: "transparent", offset: 1 },
                        ],
                        { duration: 580 },
                      );
                  }
                });
              return function () {
                return window.cancelAnimationFrame(t);
              };
            }
          },
          [I],
        ),
        u.jsx(o("WAWebModal.react").Modal, {
          type: o("WAWebModal.react").ModalTheme.Box,
          children: u.jsxs(r("WAWebDrawer.react"), {
            children: [
              u.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
                type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.POPUP,
                title: s._(/*BTDS*/ "Replies"),
                onCancel: o("WAWebModalManager").closeModalManager,
              }),
              u.jsx("div", {
                className: "x1phvje8 x1nbhmlj",
                children: u.jsx(r("WDSText.react"), {
                  type: "Body2",
                  colorName: "contentDeemphasized",
                  children: a.name,
                }),
              }),
              u.jsx(r("WAWebDrawerBody.react"), {
                overflow: "hidden",
                children: u.jsx(r("WAWebIsInThreadsViewContext").Provider, {
                  value: !0,
                  children: u.jsx(
                    r("WAWebThreadsViewAutoQuoteContext").Provider,
                    {
                      value: y,
                      children: u.jsx(
                        r("WAWebThreadsViewComposeQuotedMsgContext").Provider,
                        {
                          value: E,
                          children: u.jsxs(
                            r("WAWebThreadsViewFocusMsgContext").Provider,
                            {
                              value: D,
                              children: [
                                u.jsxs(o("WAWebFlexBox.react").FlexColumn, {
                                  ref: L,
                                  testid: void 0,
                                  xstyle: g.body,
                                  children: [
                                    u.jsx(
                                      r("WAWebConversationBackground.react"),
                                      {
                                        wallpaper: l.wallpaper,
                                        showDoodle: l.showDoodle,
                                      },
                                    ),
                                    u.jsx(r("WAWebConversationMsgs.react"), {
                                      ref: b,
                                      chat: t,
                                      msgCollection: t.msgs,
                                      threadId: n,
                                      selectable: !1,
                                      focusCtx: I,
                                      selectedMessages: h,
                                      onMessageSelect: r("WAWebNoop"),
                                      onSelectMessages: r("WAWebNoop"),
                                      onCancelSelectMessages: r("WAWebNoop"),
                                      notifyChatRendered: r("WAWebNoop"),
                                      updateOpenedChatInfo: r("WAWebNoop"),
                                      updateCanShowSpamPanel: r("WAWebNoop"),
                                      bottomBanners: null,
                                    }),
                                  ],
                                }),
                                S,
                                C &&
                                  u.jsx(o("WAWebComposeBox.react").ComposeBox, {
                                    chat: t,
                                    threadId: n,
                                    onComposeHeightChange: R,
                                    onPageUpDown: r("WAWebNoop"),
                                  }),
                              ],
                            },
                          ),
                        },
                      ),
                    },
                  ),
                }),
              }),
            ],
          }),
        })
      );
    }
    ((h.displayName = h.name + " [from " + i.id + "]"), (l.default = h));
  },
  226,
);
