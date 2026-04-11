__d(
  "WAWebExpressionsPanelPicker.react",
  [
    "fbt",
    "$InternalEnum",
    "ReactDOM",
    "WANullthrows",
    "WAWebCmd",
    "WAWebComposeBoxPanelTypes",
    "WAWebDrawerManagerContext",
    "WAWebDropdown.react",
    "WAWebEmojiPanel.react",
    "WAWebFlex.react",
    "WAWebGetExpressionsPanelOffset",
    "WAWebGifPanel.react",
    "WAWebGifRefreshedNewIcon.react",
    "WAWebIcMoodIcon.react",
    "WAWebIconTabs.react",
    "WAWebL10N",
    "WAWebModalManager",
    "WAWebPanelsDisplayLocation",
    "WAWebStickerPanel.react",
    "WAWebTabOrder",
    "WAWebUISpacing",
    "WAWebUimUie.react",
    "WAWebUserPrefsGeneral",
    "WAWebVelocityTransitionGroup",
    "WAWebWdsIcStickerIcon.react",
    "WDSGlobalContext",
    "WDSIconWdsIcStickerSmiley.react",
    "WDSMenu.react",
    "WDSMenuBarItem.react",
    "asyncToGeneratorRuntime",
    "compactMap",
    "react",
    "stylex",
    "useWAWebABPropConfigValue",
    "useWAWebListener",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react")),
      d = u,
      m = d.useContext,
      p = d.useImperativeHandle,
      _ = d.useRef,
      f = d.useState,
      g = 168,
      h = 560,
      y = {
        tabsContainer: {
          borderTopWidth: "x178xt8z",
          borderTopStyle: "x13fuv20",
          borderTopColor: "xao2bj1",
          height: "xsdox4t",
          $$css: !0,
        },
        tab: { width: "x1ig0tib", height: "x1pwvq5b", $$css: !0 },
        expressionsPanelPickerWrapper: {
          display: "x78zum5",
          flex: "x98rzlu",
          alignItems: "xuk3077",
          alignSelf: "xpvyfi4",
          $$css: !0,
        },
        expressionsPanelPickerWrapperRefresh: {
          minWidth: "x1fns5xo",
          alignItems: "x6s0dn4",
          justifyContent: "xl56j7k",
          borderStartStartRadius: "x1c9tyrk",
          borderStartEndRadius: "xeusxvb",
          borderEndEndRadius: "x1pahc9y",
          borderEndStartRadius: "x1ertn4p",
          $$css: !0,
        },
      },
      C = n("$InternalEnum").Mirrored(["SMALL", "LARGE"]);
    function b(t) {
      var a = t.getComposeBoxEditorRef,
        i = t.iconWidth,
        l = t.onClose,
        u = t.onEmoji,
        d = t.onGif,
        h = t.onSticker,
        C = t.onStickerFromStore,
        b = t.onToggleActive,
        v = t.ref,
        S = t.size,
        R = t.wrapperRef,
        L = f(!1),
        E = L[0],
        k = L[1],
        I = f(o("WAWebComposeBoxPanelTypes").ComposeBoxExpressionPanel.EMOJI),
        T = I[0],
        D = I[1],
        x = m(o("WDSGlobalContext").WDSContext),
        $ = x.closeAllMenus,
        P = [
          o("WAWebComposeBoxPanelTypes").ComposeBoxExpressionPanel.EMOJI,
          d
            ? o("WAWebComposeBoxPanelTypes").ComposeBoxExpressionPanel.GIF
            : null,
          h
            ? o("WAWebComposeBoxPanelTypes").ComposeBoxExpressionPanel.STICKER
            : null,
        ].filter(Boolean),
        N = function (t) {
          return P.includes(t);
        },
        M = _(null),
        w = _(null),
        A = _(null),
        F = f(""),
        O = F[0],
        B = F[1],
        W = f(null),
        q = W[0],
        U = W[1],
        V = o("WAWebDrawerManagerContext").useMiddleDrawerManagerContext(),
        H = (V == null ? void 0 : V.drawer) != null,
        G = r("WAWebL10N").isRTL(),
        z = function (t) {
          (k(t), b == null || b(t));
        },
        j = function (t) {
          B(t);
        },
        K = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            E ||
              (yield o("WAWebModalManager").ModalManager.existsAsync()) ||
              (D(e), z(!0));
          });
          return function (n) {
            return e.apply(this, arguments);
          };
        })(),
        Q = function () {
          (B(""), z(!1), l == null || l());
        },
        X = function () {
          if (E) z(!1);
          else {
            var e = o(
              "WAWebUserPrefsGeneral",
            ).getLastComposeBoxExpressionPanel();
            (D(
              e != null && N(e)
                ? e
                : o("WAWebComposeBoxPanelTypes").ComposeBoxExpressionPanel
                    .EMOJI,
            ),
              z(!0));
          }
        },
        Y = r("compactMap")(P, function (e) {
          if (
            e === o("WAWebComposeBoxPanelTypes").ComposeBoxExpressionPanel.EMOJI
          )
            return {
              Icon: o("WAWebIcMoodIcon.react").IcMoodIcon,
              iconStyle: y.tab,
              testid: "expressions-btn-emoji",
              ariaLabel: s._(/*BTDS*/ "Emojis selector"),
            };
          if (
            e === o("WAWebComposeBoxPanelTypes").ComposeBoxExpressionPanel.GIF
          )
            return {
              Icon: o("WAWebGifRefreshedNewIcon.react").GifRefreshedNewIcon,
              iconStyle: y.tab,
              testid: "expressions-btn-gif",
              ariaLabel: s._(/*BTDS*/ "Gifs selector"),
            };
          if (
            e ===
            o("WAWebComposeBoxPanelTypes").ComposeBoxExpressionPanel.STICKER
          )
            return N(
              o("WAWebComposeBoxPanelTypes").ComposeBoxExpressionPanel.STICKER,
            )
              ? {
                  Icon: o("WAWebWdsIcStickerIcon.react").WdsIcStickerIcon,
                  iconStyle: y.tab,
                  testid: "expressions-btn-sticker",
                  ariaLabel: s._(/*BTDS*/ "Stickers selector"),
                }
              : null;
        }),
        J = function () {
          return D(P[(P.indexOf(T) - 1 + P.length) % P.length]);
        },
        Z = function () {
          return D(P[(P.indexOf(T) + 1) % P.length]);
        },
        ee;
      switch (T) {
        case o("WAWebComposeBoxPanelTypes").ComposeBoxExpressionPanel.EMOJI:
          ee = c.jsx(r("WAWebEmojiPanel.react"), {
            defaultSearchText: O,
            displayCache: M.current,
            displayLocation: o("WAWebPanelsDisplayLocation").DisplayLocation
              .ExpressionsPanel,
            onChange: j,
            onDisplayCache: function (t) {
              M.current = t;
            },
            onEmoji: u,
            onFocusPrev: J,
            onFocusNext: Z,
            size: S,
          });
          break;
        case o("WAWebComposeBoxPanelTypes").ComposeBoxExpressionPanel.GIF:
          ee = c.jsx(r("WAWebGifPanel.react"), {
            defaultSearchText: O,
            displayCache: w.current,
            displayLocation: o("WAWebPanelsDisplayLocation").DisplayLocation
              .ExpressionsPanel,
            onChange: j,
            onDisplayCache: function (t) {
              w.current = t;
            },
            onFocusPrev: J,
            onFocusNext: Z,
            onGif: function (t, n, r) {
              (d == null || d(t, n, r), $());
            },
            size: S,
          });
          break;
        case o("WAWebComposeBoxPanelTypes").ComposeBoxExpressionPanel.STICKER:
          ee = c.jsx(r("WAWebStickerPanel.react"), {
            defaultSearchText: O,
            displayCache: A.current,
            displayLocation: o("WAWebPanelsDisplayLocation").DisplayLocation
              .ExpressionsPanel,
            onChange: j,
            onDisplayCache: function (t) {
              A.current = t;
            },
            onFocusPrev: J,
            onFocusNext: Z,
            onSticker: function (t, n, r) {
              (h == null || h(t, n, r), $());
            },
            onStickerFromStore: C,
          });
          break;
      }
      (p(v, function () {
        return {
          close: function () {
            Q();
          },
        };
      }),
        o("useWAWebListener").useListener(
          o("WAWebCmd").Cmd,
          "open_compose_box_panel",
          K,
        ),
        o("useWAWebListener").useListener(
          o("WAWebCmd").Cmd,
          "close_expression_panels",
          Q,
        ));
      var te = function (t, n) {
          var e,
            r =
              (e = a()) == null || (e = e.editor) == null
                ? void 0
                : e.getRootElement();
          (r != null && r.contains(n == null ? void 0 : n.srcElement)) || Q();
        },
        ne = function () {
          if (q) {
            var e = q.getBoundingClientRect(),
              t = o("WAWebGetExpressionsPanelOffset").getExpressionsPanelOffset(
                e,
                {
                  height: document.body.clientHeight,
                  width: document.body.clientWidth,
                },
              ),
              n = t.horizontal,
              r = t.vertical,
              a = G ? { right: n + "px" } : { left: n + "px" };
            return babelHelpers.extends({}, a, { bottom: r + "px" });
          }
          return {};
        },
        re = c.jsx(r("WAWebVelocityTransitionGroup"), {
          transitionName: "dropdown",
        }),
        oe = c.jsxs(c.Fragment, {
          children: [
            ee,
            c.jsx(o("WAWebFlex.react").FlexRow, {
              justify: "center",
              align: "center",
              xstyle: y.tabsContainer,
              children: c.jsx(r("WAWebIconTabs.react"), {
                selectedIndex: P.indexOf(T),
                onSelect: function (t) {
                  var e = P[t];
                  e !== T &&
                    (D(e),
                    o("WAWebUserPrefsGeneral").setLastComposeBoxExpressionPanel(
                      e,
                    ));
                },
                tabConfigs: Y,
                theme: "expression-panels",
              }),
            }),
          ],
        });
      if (E && !H) {
        var ae;
        re = c.jsx(r("WAWebVelocityTransitionGroup"), {
          transitionName: "dropdown",
          children: c.jsx(o("WAWebUimUie.react").UIE, {
            displayName: "MenuBarMenuItem",
            escapable: !0,
            popable: !0,
            dismissOnWindowResize: !0,
            requestDismiss: te,
            children: c.jsx((ae = o("WAWebDropdown.react")).Dropdown, {
              type: ae.MenuType.ExpressionsPanel,
              style: ne(),
              flipOnRTL: !0,
              dirX: ae.DirX.CENTER,
              dirY: ae.DirY.TOP,
              testid: void 0,
              children: oe,
            }),
          }),
        });
      }
      var ie = r("WANullthrows")(
        document.querySelector("#expressions-panel-container"),
      );
      re = o("ReactDOM").createPortal(re, ie);
      var le = c.jsx(r("WDSMenu.react"), {
          useMaxWidth: !1,
          minWidth: o("WAWebDropdown.react").EMOJI_PICKER_WIDTH,
          minHeight: g,
          children: c.jsx("div", {
            className:
              "xewp6mh x27kpxv x6ikm8r x10wlt62 x6nvzda x4i4b9w xhl9efl xj65ea0",
            children: oe,
          }),
        }),
        se = o("useWAWebABPropConfigValue").useABPropConfigValue(
          "wds_web_expressions_panel",
        ),
        ue;
      se
        ? (ue = c.jsx(r("WDSMenuBarItem.react"), {
            icon: r("WDSIconWdsIcStickerSmiley.react"),
            testid: void 0,
            tabOrder:
              o("WAWebTabOrder").TAB_ORDER.COMPOSE_BOX_EXPRESSION_PICKER,
            title: s._(/*BTDS*/ "Emojis, GIFs, Stickers"),
            ref: U,
            wdsMenuToRender: le,
            menuAlign: "middle",
            menuEnableUim: !0,
            menuIsContainer: !0,
          }))
        : (ue = c.jsx(r("WDSMenuBarItem.react"), {
            icon: r("WDSIconWdsIcStickerSmiley.react"),
            testid: void 0,
            tabOrder:
              o("WAWebTabOrder").TAB_ORDER.COMPOSE_BOX_EXPRESSION_PICKER,
            ref: U,
            onClick: X,
            title: s._(/*BTDS*/ "Emojis, GIFs, Stickers"),
          }));
      var ce = [y.expressionsPanelPickerWrapper];
      return (
        ce.push(
          y.expressionsPanelPickerWrapperRefresh,
          o("WAWebUISpacing").uiMargin.end6,
        ),
        c.jsxs(c.Fragment, {
          children: [
            c.jsx(
              "div",
              babelHelpers.extends(
                { ref: R },
                (e || (e = r("stylex"))).props(ce),
                { children: ue },
              ),
            ),
            re,
          ],
        })
      );
    }
    ((b.displayName = b.name + " [from " + i.id + "]"),
      (l.ExpressionsPanelSize = C),
      (l.ExpressionsPanelPicker = b));
  },
  226,
);
