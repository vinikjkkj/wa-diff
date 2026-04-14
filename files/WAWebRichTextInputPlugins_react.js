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
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = e.blockQuoteEnabled,
        n = t === void 0 ? !1 : t,
        a = e.botInvokeEnabled,
        i = a === void 0 ? !1 : a,
        l = e.bulletPointsEnabled,
        u = l === void 0 ? !1 : l,
        c = e.emojiSize,
        d = e.floatingToolbarEnabled,
        m = d === void 0 ? !1 : d,
        p = e.groupMetadata,
        _ = e.highlightedBotCommands,
        f = e.inlineCodeEnabled,
        g = f === void 0 ? !1 : f,
        h = e.internLinksEnabled,
        y = h === void 0 ? !1 : h,
        C = e.linksEnabled,
        b = C === void 0 ? !1 : C,
        v = e.numberedListEnabled,
        S = v === void 0 ? !1 : v,
        R = e.phoneNumbersEnabled,
        L = R === void 0 ? !1 : R,
        E = e.textFormatEnabled,
        k = E === void 0 ? !1 : E,
        I = e.textFormatShortcutsEnabled,
        T = I === void 0 ? !1 : I,
        D = e.transformTextEmoji,
        x = D === void 0 ? !0 : D;
      return s.jsxs(s.Fragment, {
        children: [
          s.jsx(r("WAWebEmojisPlugin.react"), {
            emojiSize: c,
            transformTextEmoji: x,
          }),
          s.jsx(r("WAWebMentionsPlugin.react"), {
            groupMetadata: p,
            botInvokeEnabled: i,
          }),
          s.jsx(r("WAWebTextModifierPlugin"), {
            autoToggleListBulletSymbol: u,
            autoToggleListNumberSymbol: S,
          }),
          k &&
            s.jsxs(s.Fragment, {
              children: [
                s.jsx(r("WAWebTextFormatPreviewPlugin.react"), {
                  bulletPointsEnabled: u,
                  numberedListEnabled: S,
                  inlineCodeEnabled: g,
                  blockQuoteEnabled: n,
                  internLinksEnabled: y,
                  phoneNumbersEnabled: L,
                  linksEnabled: b,
                  highlightedBotCommands: _,
                }),
                m &&
                  s.jsx(
                    o("WAWebFloatingToolbarPlugin.react").FloatingToolbarPlugin,
                    {
                      bulletPointsEnabled: u,
                      numberedListEnabled: S,
                      inlineCodeEnabled: g,
                      blockQuoteEnabled: n,
                    },
                  ),
                T &&
                  s.jsx(r("WAWebTextFormatShortcutsPlugin.react"), {
                    bulletPointsEnabled: u,
                    numberedListEnabled: S,
                    inlineCodeEnabled: g,
                    blockQuoteEnabled: n,
                  }),
              ],
            }),
        ],
      });
    }
    ((u.displayName = u.name + " [from " + i.id + "]"), (l.default = u));
  },
  98,
);
