__d(
  "WAWebRichTextInputPlugins.react",
  [
    "WAWebEmojisPlugin.react",
    "WAWebFloatingToolbarPlugin.react",
    "WAWebMentionsPlugin.react",
    "WAWebTextFormatPreviewPlugin.react",
    "WAWebTextFormatShortcutsPlugin.react",
    "WAWebTextModifierPlugin",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = o("react-compiler-runtime").c(26),
        n = e.blockQuoteEnabled,
        a = e.botInvokeEnabled,
        i = e.bulletPointsEnabled,
        l = e.emojiSize,
        u = e.floatingToolbarEnabled,
        c = e.groupMetadata,
        d = e.highlightedBotCommands,
        m = e.inlineCodeEnabled,
        p = e.internLinksEnabled,
        _ = e.linksEnabled,
        f = e.numberedListEnabled,
        g = e.phoneNumbersEnabled,
        h = e.textFormatEnabled,
        y = e.textFormatShortcutsEnabled,
        C = e.transformTextEmoji,
        b = n === void 0 ? !1 : n,
        v = a === void 0 ? !1 : a,
        S = i === void 0 ? !1 : i,
        R = u === void 0 ? !1 : u,
        L = m === void 0 ? !1 : m,
        E = p === void 0 ? !1 : p,
        k = _ === void 0 ? !1 : _,
        I = f === void 0 ? !1 : f,
        T = g === void 0 ? !1 : g,
        D = h === void 0 ? !1 : h,
        x = y === void 0 ? !1 : y,
        $ = C === void 0 ? !0 : C,
        P;
      t[0] !== l || t[1] !== $
        ? ((P = s.jsx(r("WAWebEmojisPlugin.react"), {
            emojiSize: l,
            transformTextEmoji: $,
          })),
          (t[0] = l),
          (t[1] = $),
          (t[2] = P))
        : (P = t[2]);
      var N;
      t[3] !== v || t[4] !== c
        ? ((N = s.jsx(r("WAWebMentionsPlugin.react"), {
            groupMetadata: c,
            botInvokeEnabled: v,
          })),
          (t[3] = v),
          (t[4] = c),
          (t[5] = N))
        : (N = t[5]);
      var M;
      t[6] !== S || t[7] !== I
        ? ((M = s.jsx(r("WAWebTextModifierPlugin"), {
            autoToggleListBulletSymbol: S,
            autoToggleListNumberSymbol: I,
          })),
          (t[6] = S),
          (t[7] = I),
          (t[8] = M))
        : (M = t[8]);
      var w;
      t[9] !== b ||
      t[10] !== S ||
      t[11] !== R ||
      t[12] !== d ||
      t[13] !== L ||
      t[14] !== E ||
      t[15] !== k ||
      t[16] !== I ||
      t[17] !== T ||
      t[18] !== D ||
      t[19] !== x
        ? ((w =
            D &&
            s.jsxs(s.Fragment, {
              children: [
                s.jsx(r("WAWebTextFormatPreviewPlugin.react"), {
                  bulletPointsEnabled: S,
                  numberedListEnabled: I,
                  inlineCodeEnabled: L,
                  blockQuoteEnabled: b,
                  internLinksEnabled: E,
                  phoneNumbersEnabled: T,
                  linksEnabled: k,
                  highlightedBotCommands: d,
                }),
                R &&
                  s.jsx(
                    o("WAWebFloatingToolbarPlugin.react").FloatingToolbarPlugin,
                    {
                      bulletPointsEnabled: S,
                      numberedListEnabled: I,
                      inlineCodeEnabled: L,
                      blockQuoteEnabled: b,
                    },
                  ),
                x &&
                  s.jsx(r("WAWebTextFormatShortcutsPlugin.react"), {
                    bulletPointsEnabled: S,
                    numberedListEnabled: I,
                    inlineCodeEnabled: L,
                    blockQuoteEnabled: b,
                  }),
              ],
            })),
          (t[9] = b),
          (t[10] = S),
          (t[11] = R),
          (t[12] = d),
          (t[13] = L),
          (t[14] = E),
          (t[15] = k),
          (t[16] = I),
          (t[17] = T),
          (t[18] = D),
          (t[19] = x),
          (t[20] = w))
        : (w = t[20]);
      var A;
      return (
        t[21] !== P || t[22] !== N || t[23] !== M || t[24] !== w
          ? ((A = s.jsxs(s.Fragment, { children: [P, N, M, w] })),
            (t[21] = P),
            (t[22] = N),
            (t[23] = M),
            (t[24] = w),
            (t[25] = A))
          : (A = t[25]),
        A
      );
    }
    l.default = u;
  },
  98,
);
