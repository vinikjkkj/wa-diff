__d(
  "WAWebComposeBoxExpressionPanels.react",
  [
    "WAWebComposeBoxPanelTypes",
    "WAWebComposeBoxPanelsMenu.react",
    "WAWebEmojiPanel.react",
    "WAWebErrorBoundary.react",
    "WAWebGifPanel.react",
    "WAWebPanelsDisplayLocation",
    "WAWebStickerPanel.react",
    "WAWebUimUie.react",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e = ["ref"],
      s,
      u = s || (s = o("react")),
      c = s,
      d = c.useImperativeHandle,
      m = c.useRef,
      p = c.useState;
    function _(t) {
      var n = t.ref,
        a = babelHelpers.objectWithoutPropertiesLoose(t, e),
        i = a.displayCache,
        l = a.onDisplayCache,
        s = a.onExpressionPanelChange,
        c = a.onFocusRelease,
        _ = a.selectedExpressionPanel,
        f = a.theme,
        g = m(i == null ? void 0 : i.emojiPanel),
        h = m(i == null ? void 0 : i.gifPanel),
        y = m(i == null ? void 0 : i.stickerPanel),
        C = m(
          f ===
            o("WAWebComposeBoxPanelsMenu.react").PanelsTheme
              .StatusReplyComposeBox,
        ),
        b = m(null),
        v = m(null),
        S = m(null),
        R = p(""),
        L = R[0],
        E = R[1],
        k = function (t) {
          switch (_) {
            case o("WAWebComposeBoxPanelTypes").ComposeBoxExpressionPanel
              .STICKER:
              S.current && S.current.restoreFocus();
              break;
            case o("WAWebComposeBoxPanelTypes").ComposeBoxExpressionPanel.GIF:
              v.current && v.current.restoreFocus(t);
              break;
            case o("WAWebComposeBoxPanelTypes").ComposeBoxExpressionPanel.EMOJI:
              b.current && b.current.restoreFocus(t);
              break;
          }
        },
        I = function () {
          l({
            emojiPanel: g.current,
            gifPanel: h.current,
            stickerPanel: y.current,
          });
        },
        T = function (t) {
          ((g.current = t), I());
        },
        D = function () {
          var e = C.current
            ? o("WAWebComposeBoxPanelTypes").ComposeBoxExpressionPanel.STICKER
            : o("WAWebComposeBoxPanelTypes").ComposeBoxExpressionPanel.GIF;
          s(e);
        },
        x = function () {
          c();
        },
        $ = function (t) {
          ((h.current = t), I());
        },
        P = function (t, n) {
          E(t);
        },
        N = function () {
          s(o("WAWebComposeBoxPanelTypes").ComposeBoxExpressionPanel.STICKER);
        },
        M = function () {
          s(o("WAWebComposeBoxPanelTypes").ComposeBoxExpressionPanel.EMOJI);
        },
        w = function () {
          k(!1);
        },
        A = function (t) {
          ((y.current = t), I());
        },
        F = function () {
          c();
        },
        O = function () {
          var e = C.current
            ? o("WAWebComposeBoxPanelTypes").ComposeBoxExpressionPanel.EMOJI
            : o("WAWebComposeBoxPanelTypes").ComposeBoxExpressionPanel.GIF;
          s(e);
        };
      d(n, function () {
        return { restoreFocus: k };
      });
      var B = null,
        W = C.current
          ? o("WAWebPanelsDisplayLocation").DisplayLocation.StatusComposeBox
          : o("WAWebPanelsDisplayLocation").DisplayLocation.ComposeBox;
      switch (a.selectedExpressionPanel) {
        case o("WAWebComposeBoxPanelTypes").ComposeBoxExpressionPanel.STICKER:
          B = u.jsx(r("WAWebStickerPanel.react"), {
            ref: S,
            displayCache: y.current,
            displayLocation: W,
            onChange: P,
            defaultSearchText: L,
            onDisplayCache: A,
            onFocusPrev: O,
            onFocusNext: F,
            onSticker: a.onSticker,
          });
          break;
        case o("WAWebComposeBoxPanelTypes").ComposeBoxExpressionPanel.EMOJI:
          B = u.jsx(r("WAWebEmojiPanel.react"), {
            ref: b,
            displayCache: g.current,
            width: a.width,
            displayLocation: W,
            onChange: P,
            defaultSearchText: L,
            onDisplayCache: T,
            onEmoji: a.onEmoji,
            onFocusPrev: x,
            onFocusNext: D,
          });
          break;
        case o("WAWebComposeBoxPanelTypes").ComposeBoxExpressionPanel.GIF:
          B = u.jsx(r("WAWebGifPanel.react"), {
            ref: v,
            displayCache: h.current,
            onChange: P,
            defaultSearchText: L,
            onDisplayCache: $,
            onFocusNext: N,
            onFocusPrev: M,
            onGif: a.onGif,
          });
          break;
      }
      return (
        B &&
        u.jsx(o("WAWebErrorBoundary.react").ErrorBoundary, {
          name: "compose-box-panels",
          children: u.jsx(o("WAWebUimUie.react").UIE, {
            displayName: "ComposeBoxExpressionPanels",
            escapable: !0,
            requestDismiss: a.requestDismiss,
            requestFocus: w,
            children: B,
          }),
        })
      );
    }
    ((_.displayName = _.name + " [from " + i.id + "]"), (l.default = _));
  },
  98,
);
