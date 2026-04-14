__d(
  "WAWebComposeBoxPanelsMenu.react",
  [
    "fbt",
    "$InternalEnum",
    "WAWebChatGetters",
    "WAWebCmd",
    "WAWebComposeBoxPanelTypes",
    "WAWebComposeBoxPanelsMenuButton.react",
    "WAWebGifIcon.react",
    "WAWebL10N",
    "WAWebTabOrder",
    "WAWebUserPrefsGeneral",
    "WAWebXIcon.react",
    "WDSIconIcMood.react",
    "WDSIconWdsIcSticker.react",
    "react",
    "stylex",
    "useWAWebChatValues",
    "useWAWebListener",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react")),
      d = u.useRef,
      m = 26,
      p = 16,
      _ = {
        menu: {
          position: "x1n2onr6",
          display: "x78zum5",
          height: "xy5a6gi",
          transition: "x15cnf4b",
          ":hover_willChange": "x1v3ui1v",
          $$css: !0,
        },
        menuOpenStatusReply: { width: "xyjzafs", $$css: !0 },
        menuOpen: { width: "x12q52h9", $$css: !0 },
        menuFull: { width: "x1i9ql2o", $$css: !0 },
        menuClosedStatusReply: { width: "x1fxues6", $$css: !0 },
        menuClosed: { width: "x1pge628", $$css: !0 },
        button: { transition: "xl0co6n", transform: null, $$css: !0 },
        visible: { opacity: "x1hc1fzr", $$css: !0 },
        invisible: { opacity: "xg01cxk", $$css: !0 },
        marginHoriz8: {
          marginInlineStart: "x150mmf0",
          marginInlineEnd: "xqf2s3x",
          $$css: !0,
        },
      },
      f = n("$InternalEnum").Mirrored([
        "ChatComposeBox",
        "StatusReplyComposeBox",
      ]),
      g = function (t, n, r) {
        switch (t) {
          case f.ChatComposeBox:
            return n ? (r ? _.menuFull : _.menuOpen) : _.menuClosed;
          case f.StatusReplyComposeBox:
            return n ? _.menuOpenStatusReply : _.menuClosedStatusReply;
        }
      },
      h = function (t, n, a) {
        var e = m + p,
          i = 0;
        switch (t) {
          case o("WAWebComposeBoxPanelTypes").ComposeBoxExpressionPanel.EMOJI:
            i = n ? e : 0;
            break;
          case o("WAWebComposeBoxPanelTypes").ComposeBoxExpressionPanel.GIF:
            i = n ? 2 * e : 0;
            break;
          case o("WAWebComposeBoxPanelTypes").ComposeBoxExpressionPanel.STICKER:
            switch (a) {
              case f.ChatComposeBox:
                i = n ? 3 * e : 0;
                break;
              case f.StatusReplyComposeBox:
                i = n ? 2 * e : e;
                break;
            }
        }
        var l = (r("WAWebL10N").isRTL() ? -1 : 1) * i;
        return { transform: "translateX(" + l + "px)" };
      };
    function y(t) {
      var n,
        a,
        i = d(),
        l = d(),
        u = d(),
        m = d(),
        p = d(),
        y = t.theme === f.StatusReplyComposeBox,
        C =
          (n = o("useWAWebChatValues").useOptionalChatValues(
            (a = t.chat) == null ? void 0 : a.id,
            [
              o("WAWebChatGetters").getIsNewsletter,
              o("WAWebChatGetters").getId,
              o("WAWebChatGetters").getId,
            ],
          )) != null
            ? n
            : [],
        b = C[0],
        v = C[1],
        S = function (n) {
          t.onChange(n);
        },
        R = function () {
          t.onChange(null);
        },
        L = function () {
          var e = !!t.selectedExpressionPanel;
          if (!e && !y) {
            t.onChange(
              (!b &&
                o(
                  "WAWebUserPrefsGeneral",
                ).getLastComposeBoxExpressionPanel()) ||
                o("WAWebComposeBoxPanelTypes").ComposeBoxExpressionPanel.EMOJI,
            );
            return;
          }
          S(o("WAWebComposeBoxPanelTypes").ComposeBoxExpressionPanel.EMOJI);
        };
      o("useWAWebListener").useListener(
        o("WAWebCmd").Cmd,
        "open_compose_box_panel",
        S,
      );
      var E = function (t) {
          p.current = t;
        },
        k = t.readOnly,
        I = !!t.selectedExpressionPanel,
        T = !y && t.isMessageToBot !== !0,
        D = !b && t.isMessageToBot !== !0,
        x = [_.button, t.buttonStyle],
        $ = t.buttonProps;
      return c.jsxs(
        "div",
        babelHelpers.extends(
          { "data-state": I ? "open" : "closed", ref: E },
          (e || (e = r("stylex"))).props(
            _.menu,
            _.marginHoriz8,
            g(t.theme, I, D),
          ),
          {
            children: [
              c.jsx(
                o("WAWebComposeBoxPanelsMenuButton.react").PanelsMenuButton,
                babelHelpers.extends(
                  {
                    "aria-label": s._(/*BTDS*/ "Close panel"),
                    xstyle: [x, I ? _.visible : _.invisible],
                    tabIndex: I ? 0 : -1,
                    "data-tab":
                      I && !k
                        ? o("WAWebTabOrder").TAB_ORDER.COMPOSE_BOX_MENU_BUTTON
                        : null,
                    Icon: o("WAWebXIcon.react").XIcon,
                    isActive: !1,
                    testid: void 0,
                    onClick: R,
                    ref: i,
                    size: o("WAWebComposeBoxPanelsMenuButton.react").SIZES
                      .SQUARE24,
                  },
                  $ == null ? void 0 : $.closePanel,
                ),
              ),
              c.jsx(
                o("WAWebComposeBoxPanelsMenuButton.react").PanelsMenuButton,
                babelHelpers.extends(
                  {
                    "aria-label": s._(/*BTDS*/ "Open emojis panel"),
                    xstyle: x,
                    testid: void 0,
                    "data-tab":
                      I || k
                        ? null
                        : o("WAWebTabOrder").TAB_ORDER.COMPOSE_BOX_MENU_BUTTON,
                    Icon: r("WDSIconIcMood.react"),
                    isActive:
                      t.selectedExpressionPanel ===
                      o("WAWebComposeBoxPanelTypes").ComposeBoxExpressionPanel
                        .EMOJI,
                    isMain: !0,
                    onClick: L,
                    ref: l,
                    size: o("WAWebComposeBoxPanelsMenuButton.react").SIZES
                      .SQUARE26,
                    style: h(
                      o("WAWebComposeBoxPanelTypes").ComposeBoxExpressionPanel
                        .EMOJI,
                      I,
                      t.theme,
                    ),
                  },
                  $ == null ? void 0 : $.openEmoji,
                ),
              ),
              T &&
                c.jsx(
                  o("WAWebComposeBoxPanelsMenuButton.react").PanelsMenuButton,
                  babelHelpers.extends(
                    {
                      "aria-label": s._(/*BTDS*/ "Open gif panel"),
                      xstyle: [_.button, I ? _.visible : _.invisible],
                      Icon: o("WAWebGifIcon.react").GifIcon,
                      isActive:
                        t.selectedExpressionPanel ===
                        o("WAWebComposeBoxPanelTypes").ComposeBoxExpressionPanel
                          .GIF,
                      onClick: function () {
                        return S(
                          o("WAWebComposeBoxPanelTypes")
                            .ComposeBoxExpressionPanel.GIF,
                        );
                      },
                      ref: u,
                      size: o("WAWebComposeBoxPanelsMenuButton.react").SIZES
                        .SQUARE26,
                      style: h(
                        o("WAWebComposeBoxPanelTypes").ComposeBoxExpressionPanel
                          .GIF,
                        I,
                        t.theme,
                      ),
                    },
                    $ == null ? void 0 : $.openGif,
                  ),
                ),
              D &&
                c.jsx(
                  o("WAWebComposeBoxPanelsMenuButton.react").PanelsMenuButton,
                  babelHelpers.extends(
                    {
                      "aria-label": s._(/*BTDS*/ "Open sticker panel"),
                      xstyle: [x, I || y ? _.visible : _.invisible],
                      testid: void 0,
                      Icon: r("WDSIconWdsIcSticker.react"),
                      isActive:
                        t.selectedExpressionPanel ===
                        o("WAWebComposeBoxPanelTypes").ComposeBoxExpressionPanel
                          .STICKER,
                      onClick: function () {
                        return S(
                          o("WAWebComposeBoxPanelTypes")
                            .ComposeBoxExpressionPanel.STICKER,
                        );
                      },
                      ref: m,
                      size: o("WAWebComposeBoxPanelsMenuButton.react").SIZES
                        .SQUARE26,
                      style: h(
                        o("WAWebComposeBoxPanelTypes").ComposeBoxExpressionPanel
                          .STICKER,
                        I,
                        t.theme,
                      ),
                    },
                    $ == null ? void 0 : $.openSticker,
                  ),
                ),
            ],
          },
        ),
      );
    }
    ((y.displayName = y.name + " [from " + i.id + "]"),
      (l.PanelsTheme = f),
      (l.ComposeBoxExpressionPanelsMenu = y));
  },
  226,
);
