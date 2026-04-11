__d(
  "WAWebStatusPlayerQuickRepliesBar.react",
  [
    "fbt",
    "WAWebEmoji",
    "WAWebEmoji.react",
    "WAWebFlex.react",
    "WAWebKeyboardRotateFocusArrows.react",
    "WAWebNux",
    "WAWebRound.react",
    "WAWebStatusGatingUtils",
    "WAWebTabOrder",
    "react",
    "useWAWebListener",
    "useWAWebNux",
    "useWAWebTimeout",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e,
      d = c.useRef,
      m = c.useState,
      p = 1.2,
      _ = "x1e7nn9m-B",
      f = "x13v8ua5-B",
      g = {
        emoji: {
          display: "x1lliihq",
          textAlign: "x2b8uid",
          fontSize: "x13wtedm",
          marginInlineStart: "xyqm7xq",
          transition: "x1trvaba",
          ":first-child_marginInlineStart": "x1pwwqoy",
          ":hover_transform": "xg0443",
          ":hover_cursor": "x1277o0a",
          $$css: !0,
        },
        emojiClicked: {
          animationName: "x1mn8m9y",
          animationDuration: "xof6966",
          animationTimingFunction: null,
          animationFillMode: "x10e4vud",
          transformOrigin: "x1g0ag68",
          pointerEvents: "x47corl",
          $$css: !0,
        },
        emojiClickedNeighbours: {
          animationName: "x14avz4r",
          animationDuration: "xs4xyr0",
          animationFillMode: "x10e4vud",
          animationTimingFunction: null,
          pointerEvents: "x47corl",
          $$css: !0,
        },
      };
    function h(e) {
      var t = e.onClick,
        n = e.onClickAnimateEnd,
        a = d(null),
        i = d(0),
        l = m(null),
        c = l[0],
        p = l[1],
        _ = o("WAWebStatusGatingUtils").statusQuickReplyEmojis(),
        f = o("useWAWebTimeout").useTimeout(function () {
          ((i.current = 0), p(null));
        }, 200),
        h = f[0];
      o("useWAWebListener").useListener(
        n && a.current,
        "animationend",
        function (e) {
          ++i.current === _.length && (n == null || n(), h());
        },
      );
      var y = r("useWAWebNux")(o("WAWebNux").NUX.STATUS_QUICK_REPLIES),
        C = y[0],
        b = y[1],
        v = function (n, r, o) {
          (t(n, r), b(), p(o));
        },
        S = function (t, n, r) {
          (t.key === "Enter" || t.key === " ") &&
            (t.preventDefault(), v(t, n, r));
        };
      return u.jsxs("div", {
        ref: a,
        children: [
          C
            ? u.jsx("div", {
                className: "x2b8uid x1awj2ng x1jchvi3 xyorhqc",
                children: s._(/*BTDS*/ "Click to send"),
              })
            : null,
          u.jsx(r("WAWebKeyboardRotateFocusArrows.react"), {
            customSelector: "[data-tab]",
            children: u.jsx(o("WAWebFlex.react").FlexRow, {
              testid: void 0,
              justify: "center",
              className: "xh8yej3 xdqhqc9",
              children: _.map(function (e, t) {
                var n = o("WAWebEmoji").EmojiUtil.normalizeEmojiFromString(e);
                return n == null
                  ? null
                  : u.jsx(
                      o("WAWebRound.react").Round,
                      {
                        tabIndex: t === 0 ? 0 : -1,
                        dataTab:
                          o("WAWebTabOrder").TAB_ORDER
                            .STATUS_QUICK_REPLIES_SECTION,
                        label: e,
                        onKeyDown: function (r) {
                          return S(r, e, t);
                        },
                        onClick: function (r) {
                          return v(r, e, t);
                        },
                        hideBackground: !0,
                        theme: o("WAWebRound.react").RoundTheme.NoShadow,
                        children: u.jsx(r("WAWebEmoji.react"), {
                          testid: void 0,
                          emoji: n,
                          xstyle: [
                            g.emoji,
                            c != null &&
                              (c === t
                                ? g.emojiClicked
                                : g.emojiClickedNeighbours),
                          ],
                          tabIndex: -1,
                          "data-unicode": e,
                          "data-variant": n,
                          "data-emoji-index": t,
                          size: "large",
                        }),
                      },
                      e,
                    );
              }),
            }),
          }),
        ],
      });
    }
    ((h.displayName = h.name + " [from " + i.id + "]"), (l.default = h));
  },
  226,
);
