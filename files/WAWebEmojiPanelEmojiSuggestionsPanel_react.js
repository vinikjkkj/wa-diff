__d(
  "WAWebEmojiPanelEmojiSuggestionsPanel.react",
  [
    "cx",
    "WANullthrows",
    "WAWebCmd",
    "WAWebDropdown.react",
    "WAWebEmoji",
    "WAWebEmoji.react",
    "WAWebEmojiSkinTonePicker.react",
    "WAWebEmojiVariantCollection",
    "WAWebKeyboardHotKeys.react",
    "WAWebStopEvent",
    "WAWebUim",
    "WAWebUimUie.react",
    "WAWebUimUieTooltip.react",
    "react",
    "useWAWebForceUpdate",
    "useWAWebListener",
    "useWAWebStableCallback",
    "useWAWebTimeout",
    "useWAWebUIM",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e = ["ref"],
      u,
      c = u || (u = o("react")),
      d = u,
      m = d.useEffect,
      p = d.useImperativeHandle,
      _ = d.useRef,
      f = d.useState,
      g = 44;
    function h(t) {
      "use no forget";
      var n = t.ref,
        a = babelHelpers.objectWithoutPropertiesLoose(t, e),
        i = a.emojiList,
        l = a.emojiSuggestionSelect,
        s = a.maxWidth,
        u = a.onEmoji,
        d = a.onFocusRelease,
        h = a.onSkinTonePicker,
        y = o("useWAWebForceUpdate").useForceUpdateDONOTUSE(),
        C = o("useWAWebListener").useAddListenerOnce(),
        b = C[0],
        v = r("useWAWebUIM")(),
        S = f(null),
        R = S[0],
        L = S[1],
        E = f(0),
        k = E[0],
        I = E[1],
        T = _(null),
        D = _(null),
        x = _(null),
        $ = function (t) {
          return o("WAWebEmoji").EmojiUtil.getSkinToneBase(t)
            ? o(
                "WAWebEmojiVariantCollection",
              ).EmojiVariantCollection.getVariant(t)
            : null;
        },
        P = Math.floor(s / g),
        N = Math.min(i.length, P),
        M = function () {
          d == null || d();
        },
        w = function (t) {
          (u(t), M());
        },
        A = function (t, n, r) {
          return (
            o("WAWebStopEvent").stopEvent(t),
            w(r),
            o("WAWebEmojiVariantCollection").EmojiVariantCollection.setVariant(
              n,
              r,
            ),
            v &&
              (v.pop(o("WAWebUim").DismissReason.UIM_INTERACTION, !1),
              v.requestDismiss()),
            !1
          );
        },
        F = function (t, n, a) {
          q();
          var e = r("WANullthrows")(
            o("WAWebEmoji").EmojiUtil.getSkinToneBase(t),
          );
          (L({
            menu: c.jsx(r("WAWebEmojiSkinTonePicker.react"), {
              base: e,
              action: A,
              unicode: t,
              preVariant: n.dataset.emoji,
            }),
            anchor: n,
            type: o("WAWebDropdown.react").MenuType.Picker,
            dirX: o("WAWebDropdown.react").DirX.RIGHT,
            dirY: o("WAWebDropdown.react").DirY.TOP,
            horizontal: !0,
            autoFocus: a,
            findFirstItem: !0,
          }),
            h == null || h(!0));
        },
        O = o("useWAWebTimeout").useTimeout(function () {
          (b(o("WAWebCmd").Cmd, "window_click", o("WAWebStopEvent").stopEvent),
            D.current && T.current && F(D.current, T.current));
        }, 250),
        B = O[0],
        W = O[1];
      function q() {
        W();
      }
      var U = function (t) {
          (o("WAWebStopEvent").stopEvent(t), q());
          var e = t.target;
          if (e instanceof HTMLElement) {
            var n = e.dataset.unicode;
            ((T.current = e),
              (D.current = n),
              B(),
              b(window, "mouseup", q, { capture: !0 }));
          }
        },
        V = function (t) {
          if (
            (o("WAWebStopEvent").stopEvent(t), t.target instanceof HTMLElement)
          ) {
            var e = t.target.dataset.unicode;
            e && o("WAWebEmoji").EmojiUtil.getSkinToneBase(e) && U(t);
          }
        },
        H = function (t) {
          o("WAWebStopEvent").stopEvent(t);
          var e = t.target;
          if (e instanceof HTMLElement) {
            var n = e.dataset.unicode;
            n && o("WAWebEmoji").EmojiUtil.getSkinToneBase(n) && F(n, e);
          }
        },
        G = function (t) {
          if (
            (o("WAWebStopEvent").stopEvent(t), t.target instanceof HTMLElement)
          ) {
            var e = t.target.dataset.unicode;
            if (e)
              if (o("WAWebEmoji").EmojiUtil.getSkinToneBase(e)) {
                var n = $(e);
                n ? w(n) : H(t);
              } else w(e);
          }
        },
        z = r("useWAWebStableCallback")(function () {
          R && (L(null), h == null || h(!1));
        }),
        j = function (t) {
          if (!(t < 0) && x.current) {
            var e = x.current.children;
            if (!(t >= e.length)) return e[t];
          }
        },
        K = function (t) {
          var e;
          return (e = i[t]) != null ? e : null;
        },
        Q = function () {
          var e = K(k);
          if (e)
            if (o("WAWebEmoji").EmojiUtil.getSkinToneBase(e)) {
              var t = $(e);
              if (t) w(t);
              else {
                var n = j(k);
                n && F(e, n, !0);
              }
            } else w(e);
        },
        X = function () {
          var e = Math.min(k + 1, N - 1);
          (I(e), l == null || l(e.toString()));
        },
        Y = function () {
          var e = Math.max(k - 1, 0);
          (I(e), l == null || l(e.toString()));
        };
      (m(
        function () {
          z();
        },
        [z, i],
      ),
        m(
          function () {
            I(Math.min(k, i.length - 1));
          },
          [k, i],
        ),
        o("useWAWebListener").useListener(
          o("WAWebEmojiVariantCollection").EmojiVariantCollection,
          ["add", "remove", "change:variant"],
          y,
        ),
        p(n, function () {
          return {
            moveSelectionLeft: Y,
            moveSelectionRight: X,
            pickSelectedEmoji: Q,
          };
        }));
      var J;
      R &&
        (J = c.jsx(o("WAWebUimUie.react").UIE, {
          displayName: "SkinTonePicker",
          popable: !0,
          escapable: !0,
          dismissOnWindowResize: !0,
          requestDismiss: z,
          children: c.jsx(r("WAWebUimUieTooltip.react"), { tooltip: R }),
        }));
      var Z = i.slice(0, N).map(function (e, t) {
          var n = $(e),
            o = k === t && !R;
          return c.jsx(
            r("WAWebEmoji.react"),
            {
              element: "span",
              emoji: n != null ? n : e,
              size: "large",
              "data-unicode": e,
              "data-variant": n,
              tabIndex: -1,
              "data-emoji-index": t,
              selected: o,
            },
            e,
          );
        }),
        ee = N * g;
      return c.jsxs("div", {
        style: { width: ee },
        children: [
          c.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
            onMouseDown: V,
            onClick: G,
            onContextMenu: H,
            children: c.jsx("div", { className: "_ahcd", ref: x, children: Z }),
          }),
          J,
        ],
      });
    }
    ((h.displayName = h.name + " [from " + i.id + "]"), (l.default = h));
  },
  98,
);
