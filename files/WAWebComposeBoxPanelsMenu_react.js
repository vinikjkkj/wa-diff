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
    "react-compiler-runtime",
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
        i = o("react-compiler-runtime").c(60),
        l = d(),
        u = d(),
        m = d(),
        p = d(),
        y = d(),
        C = t.theme === f.StatusReplyComposeBox,
        b =
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
        v = b[0],
        S;
      i[0] !== t
        ? ((S = function (n) {
            t.onChange(n);
          }),
          (i[0] = t),
          (i[1] = S))
        : (S = i[1]);
      var R = S,
        L;
      i[2] !== t
        ? ((L = function () {
            t.onChange(null);
          }),
          (i[2] = t),
          (i[3] = L))
        : (L = i[3]);
      var E = L,
        k;
      i[4] !== R || i[5] !== v || i[6] !== C || i[7] !== t
        ? ((k = function () {
            var e = !!t.selectedExpressionPanel;
            if (!e && !C) {
              t.onChange(
                (!v &&
                  o(
                    "WAWebUserPrefsGeneral",
                  ).getLastComposeBoxExpressionPanel()) ||
                  o("WAWebComposeBoxPanelTypes").ComposeBoxExpressionPanel
                    .EMOJI,
              );
              return;
            }
            R(o("WAWebComposeBoxPanelTypes").ComposeBoxExpressionPanel.EMOJI);
          }),
          (i[4] = R),
          (i[5] = v),
          (i[6] = C),
          (i[7] = t),
          (i[8] = k))
        : (k = i[8]);
      var I = k;
      o("useWAWebListener").useListener(
        o("WAWebCmd").Cmd,
        "open_compose_box_panel",
        R,
      );
      var T;
      i[9] === Symbol.for("react.memo_cache_sentinel")
        ? ((T = function (t) {
            y.current = t;
          }),
          (i[9] = T))
        : (T = i[9]);
      var D = T,
        x = t.readOnly,
        $ = !!t.selectedExpressionPanel,
        P = !C && t.isMessageToBot !== !0,
        N = !v && t.isMessageToBot !== !0,
        M;
      i[10] !== t.buttonStyle
        ? ((M = [_.button, t.buttonStyle]),
          (i[10] = t.buttonStyle),
          (i[11] = M))
        : (M = i[11]);
      var w = M,
        A = t.buttonProps,
        F = $ ? "open" : "closed",
        O;
      i[12] !== $ || i[13] !== t.theme || i[14] !== N
        ? ((O = (e || (e = r("stylex"))).props(
            _.menu,
            _.marginHoriz8,
            g(t.theme, $, N),
          )),
          (i[12] = $),
          (i[13] = t.theme),
          (i[14] = N),
          (i[15] = O))
        : (O = i[15]);
      var B;
      i[16] === Symbol.for("react.memo_cache_sentinel")
        ? ((B = s._(/*BTDS*/ "Close panel")), (i[16] = B))
        : (B = i[16]);
      var W = $ ? _.visible : _.invisible,
        q;
      i[17] !== w || i[18] !== W
        ? ((q = [w, W]), (i[17] = w), (i[18] = W), (i[19] = q))
        : (q = i[19]);
      var U = $ ? 0 : -1,
        V =
          $ && !x ? o("WAWebTabOrder").TAB_ORDER.COMPOSE_BOX_MENU_BUTTON : null,
        H = A == null ? void 0 : A.closePanel,
        G;
      i[20] !== E || i[21] !== U || i[22] !== V || i[23] !== H || i[24] !== q
        ? ((G = c.jsx(
            o("WAWebComposeBoxPanelsMenuButton.react").PanelsMenuButton,
            babelHelpers.extends(
              {
                "aria-label": B,
                xstyle: q,
                tabIndex: U,
                "data-tab": V,
                Icon: o("WAWebXIcon.react").XIcon,
                isActive: !1,
                testid: void 0,
                onClick: E,
                ref: l,
                size: o("WAWebComposeBoxPanelsMenuButton.react").SIZES.SQUARE24,
              },
              H,
            ),
          )),
          (i[20] = E),
          (i[21] = U),
          (i[22] = V),
          (i[23] = H),
          (i[24] = q),
          (i[25] = G))
        : (G = i[25]);
      var z;
      i[26] === Symbol.for("react.memo_cache_sentinel")
        ? ((z = s._(/*BTDS*/ "Open emojis panel")), (i[26] = z))
        : (z = i[26]);
      var j =
          $ || x ? null : o("WAWebTabOrder").TAB_ORDER.COMPOSE_BOX_MENU_BUTTON,
        K =
          t.selectedExpressionPanel ===
          o("WAWebComposeBoxPanelTypes").ComposeBoxExpressionPanel.EMOJI,
        Q;
      i[27] !== $ || i[28] !== t.theme
        ? ((Q = h(
            o("WAWebComposeBoxPanelTypes").ComposeBoxExpressionPanel.EMOJI,
            $,
            t.theme,
          )),
          (i[27] = $),
          (i[28] = t.theme),
          (i[29] = Q))
        : (Q = i[29]);
      var X = A == null ? void 0 : A.openEmoji,
        Y;
      i[30] !== w ||
      i[31] !== I ||
      i[32] !== j ||
      i[33] !== K ||
      i[34] !== Q ||
      i[35] !== X
        ? ((Y = c.jsx(
            o("WAWebComposeBoxPanelsMenuButton.react").PanelsMenuButton,
            babelHelpers.extends(
              {
                "aria-label": z,
                xstyle: w,
                testid: void 0,
                "data-tab": j,
                Icon: r("WDSIconIcMood.react"),
                isActive: K,
                isMain: !0,
                onClick: I,
                ref: u,
                size: o("WAWebComposeBoxPanelsMenuButton.react").SIZES.SQUARE26,
                style: Q,
              },
              X,
            ),
          )),
          (i[30] = w),
          (i[31] = I),
          (i[32] = j),
          (i[33] = K),
          (i[34] = Q),
          (i[35] = X),
          (i[36] = Y))
        : (Y = i[36]);
      var J;
      i[37] !== (A == null ? void 0 : A.openGif) ||
      i[38] !== R ||
      i[39] !== $ ||
      i[40] !== t.selectedExpressionPanel ||
      i[41] !== t.theme ||
      i[42] !== P
        ? ((J =
            P &&
            c.jsx(
              o("WAWebComposeBoxPanelsMenuButton.react").PanelsMenuButton,
              babelHelpers.extends(
                {
                  "aria-label": s._(/*BTDS*/ "Open gif panel"),
                  xstyle: [_.button, $ ? _.visible : _.invisible],
                  Icon: o("WAWebGifIcon.react").GifIcon,
                  isActive:
                    t.selectedExpressionPanel ===
                    o("WAWebComposeBoxPanelTypes").ComposeBoxExpressionPanel
                      .GIF,
                  onClick: function () {
                    return R(
                      o("WAWebComposeBoxPanelTypes").ComposeBoxExpressionPanel
                        .GIF,
                    );
                  },
                  ref: m,
                  size: o("WAWebComposeBoxPanelsMenuButton.react").SIZES
                    .SQUARE26,
                  style: h(
                    o("WAWebComposeBoxPanelTypes").ComposeBoxExpressionPanel
                      .GIF,
                    $,
                    t.theme,
                  ),
                },
                A == null ? void 0 : A.openGif,
              ),
            )),
          (i[37] = A == null ? void 0 : A.openGif),
          (i[38] = R),
          (i[39] = $),
          (i[40] = t.selectedExpressionPanel),
          (i[41] = t.theme),
          (i[42] = P),
          (i[43] = J))
        : (J = i[43]);
      var Z;
      i[44] !== w ||
      i[45] !== (A == null ? void 0 : A.openSticker) ||
      i[46] !== R ||
      i[47] !== $ ||
      i[48] !== C ||
      i[49] !== t.selectedExpressionPanel ||
      i[50] !== t.theme ||
      i[51] !== N
        ? ((Z =
            N &&
            c.jsx(
              o("WAWebComposeBoxPanelsMenuButton.react").PanelsMenuButton,
              babelHelpers.extends(
                {
                  "aria-label": s._(/*BTDS*/ "Open sticker panel"),
                  xstyle: [w, $ || C ? _.visible : _.invisible],
                  testid: void 0,
                  Icon: r("WDSIconWdsIcSticker.react"),
                  isActive:
                    t.selectedExpressionPanel ===
                    o("WAWebComposeBoxPanelTypes").ComposeBoxExpressionPanel
                      .STICKER,
                  onClick: function () {
                    return R(
                      o("WAWebComposeBoxPanelTypes").ComposeBoxExpressionPanel
                        .STICKER,
                    );
                  },
                  ref: p,
                  size: o("WAWebComposeBoxPanelsMenuButton.react").SIZES
                    .SQUARE26,
                  style: h(
                    o("WAWebComposeBoxPanelTypes").ComposeBoxExpressionPanel
                      .STICKER,
                    $,
                    t.theme,
                  ),
                },
                A == null ? void 0 : A.openSticker,
              ),
            )),
          (i[44] = w),
          (i[45] = A == null ? void 0 : A.openSticker),
          (i[46] = R),
          (i[47] = $),
          (i[48] = C),
          (i[49] = t.selectedExpressionPanel),
          (i[50] = t.theme),
          (i[51] = N),
          (i[52] = Z))
        : (Z = i[52]);
      var ee;
      return (
        i[53] !== G ||
        i[54] !== Y ||
        i[55] !== J ||
        i[56] !== Z ||
        i[57] !== F ||
        i[58] !== O
          ? ((ee = c.jsxs(
              "div",
              babelHelpers.extends({ "data-state": F, ref: D }, O, {
                children: [G, Y, J, Z],
              }),
            )),
            (i[53] = G),
            (i[54] = Y),
            (i[55] = J),
            (i[56] = Z),
            (i[57] = F),
            (i[58] = O),
            (i[59] = ee))
          : (ee = i[59]),
        ee
      );
    }
    ((l.PanelsTheme = f), (l.ComposeBoxExpressionPanelsMenu = y));
  },
  226,
);
