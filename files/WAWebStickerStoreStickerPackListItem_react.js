__d(
  "WAWebStickerStoreStickerPackListItem.react",
  [
    "WAWebBaseContainerQueryElement.react",
    "WAWebBoolFunc",
    "WAWebChatCell.react",
    "WAWebEmojiText.react",
    "WAWebFlex.react",
    "WAWebRoundPlayIcon.react",
    "WAWebStickerStoreStickerIconContainer.react",
    "WDSFlex.stylex",
    "WDSIconWdsIcAuraFill.react",
    "react",
    "react-compiler-runtime",
    "stylex",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = s || (s = o("react")),
      c = s.Fragment,
      d = {
        auraIcon: { marginInlineEnd: "x7g7pl8", $$css: !0 },
        animatedIcon: {
          marginInlineStart: "xdzw4kq",
          color: "xct68jv",
          $$css: !0,
        },
        stickerIcon: { marginInlineEnd: "xnqxrjt", $$css: !0 },
      },
      m = 6,
      p = 72,
      _ = 22;
    function f(t) {
      var n = o("react-compiler-runtime").c(30),
        a = t.data,
        i = t.onClick,
        l = a.stickerPack,
        s;
      n[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((s = (e || (e = r("stylex"))).props(
            o("WDSFlex.stylex").wdsFlex.flexAlignCenter,
          )),
          (n[0] = s))
        : (s = n[0]);
      var f;
      n[1] !== l.premium
        ? ((f =
            l.premium > 0 &&
            u.jsx(
              "div",
              babelHelpers.extends(
                {},
                (e || (e = r("stylex"))).props(
                  o("WDSFlex.stylex").wdsFlex.flexAlignCenter,
                  d.auraIcon,
                ),
                {
                  children: u.jsx(r("WDSIconWdsIcAuraFill.react"), {
                    height: 16,
                    width: 16,
                  }),
                },
              ),
            )),
          (n[1] = l.premium),
          (n[2] = f))
        : (f = n[2]);
      var g;
      n[3] !== l.name
        ? ((g = u.jsx(o("WAWebEmojiText.react").EmojiText, {
            text: l.name,
            ellipsify: !0,
            titlify: !0,
          })),
          (n[3] = l.name),
          (n[4] = g))
        : (g = n[4]);
      var h;
      n[5] !== l.animated
        ? ((h = l.animated
            ? u.jsx(o("WAWebRoundPlayIcon.react").RoundPlayIcon, {
                xstyle: d.animatedIcon,
                width: 16,
                height: 16,
              })
            : null),
          (n[5] = l.animated),
          (n[6] = h))
        : (h = n[6]);
      var y;
      n[7] !== f || n[8] !== g || n[9] !== h
        ? ((y = u.jsxs(
            "div",
            babelHelpers.extends({}, s, { children: [f, g, h] }),
          )),
          (n[7] = f),
          (n[8] = g),
          (n[9] = h),
          (n[10] = y))
        : (y = n[10]);
      var C = y,
        b;
      if (n[11] !== l.previewImageIds) {
        b = [];
        for (var v = Math.min(m, l.previewImageIds.length), S = 0; S < v; S++) {
          var R = l.previewImageIds[S];
          b.push(
            u.jsxs(
              c,
              {
                children: [
                  u.jsx(r("WAWebBaseContainerQueryElement.react"), {
                    breakpoint: (S + 1) * (p + _) - _,
                    inverseToContainer: !0,
                    maxWidth: "100%",
                    minWidth: 0,
                  }),
                  u.jsx(r("WAWebStickerStoreStickerIconContainer.react"), {
                    url:
                      "https://static.whatsapp.net/sticker?cat=sticker_preview_png&id=" +
                      R,
                    xstyle: d.stickerIcon,
                  }),
                ],
              },
              R,
            ),
          );
        }
        ((n[11] = l.previewImageIds), (n[12] = b));
      } else b = n[12];
      var L;
      n[13] !== l.publisher
        ? ((L = u.jsx(o("WAWebEmojiText.react").EmojiText, {
            text: l.publisher,
            ellipsify: !0,
          })),
          (n[13] = l.publisher),
          (n[14] = L))
        : (L = n[14]);
      var E;
      n[15] === Symbol.for("react.memo_cache_sentinel")
        ? ((E = "x78zum5 x1q0g3np xozqiw3 x1xmf6yo"), (n[15] = E))
        : (E = n[15]);
      var k;
      n[16] !== b
        ? ((k = u.jsx(o("WAWebFlex.react").FlexRow, {
            children: u.jsx(o("WAWebFlex.react").FlexItem, {
              className: E,
              grow: 1,
              children: b,
            }),
          })),
          (n[16] = b),
          (n[17] = k))
        : (k = n[17]);
      var I;
      n[18] !== L || n[19] !== k
        ? ((I = u.jsxs(u.Fragment, { children: [L, k] })),
          (n[18] = L),
          (n[19] = k),
          (n[20] = I))
        : (I = n[20]);
      var T = I,
        D = l.id,
        x;
      n[21] !== i || n[22] !== l
        ? ((x = function () {
            i(l);
          }),
          (n[21] = i),
          (n[22] = l),
          (n[23] = x))
        : (x = n[23]);
      var $;
      n[24] === Symbol.for("react.memo_cache_sentinel")
        ? (($ = "xf7dkkf x1vmm6hg"), (n[24] = $))
        : ($ = n[24]);
      var P;
      return (
        n[25] !== l.id || n[26] !== T || n[27] !== C || n[28] !== x
          ? ((P = u.jsx(
              r("WAWebChatCell.react"),
              {
                tabIndex: 0,
                testid: void 0,
                theme: "sticker-pack",
                primary: C,
                secondary: T,
                handleKeyboardClick: !0,
                onClick: x,
                className: $,
                contextEnabled: o("WAWebBoolFunc").returnFalse,
              },
              D,
            )),
            (n[25] = l.id),
            (n[26] = T),
            (n[27] = C),
            (n[28] = x),
            (n[29] = P))
          : (P = n[29]),
        P
      );
    }
    l.default = f;
  },
  98,
);
