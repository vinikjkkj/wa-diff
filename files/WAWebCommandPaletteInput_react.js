__d(
  "WAWebCommandPaletteInput.react",
  [
    "LexicalErrorBoundary",
    "LexicalPlainTextPlugin",
    "WAWebCommandPaletteController",
    "WAWebFlex.react",
    "WAWebMultilinePlugin",
    "WAWebRichTextInputContentEditable.react",
    "WDSIconIcSearch.react",
    "WDSSpinner.react",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = {
        container: { height: "xsdox4t", boxSizing: "x9f619", $$css: !0 },
        relative: { position: "x1n2onr6", $$css: !0 },
        contentEditable: { width: "xh8yej3", $$css: !0 },
        marginStart4: { marginInlineStart: "x1wbi8v6", $$css: !0 },
      };
    function c() {
      var e,
        t = o("WAWebCommandPaletteController").useCommandPalette(),
        n = t.activePlugin,
        a =
          (e = n == null ? void 0 : n.placeholder) != null
            ? e
            : "Search chats, messages, settings, and more",
        i = t.pluginStack.length
          ? s.jsx("div", {
              className: "x78zum5 x1q0g3np x6s0dn4",
              children: t.pluginStack
                .filter(function (e) {
                  return e.plugin.shortName;
                })
                .map(function (e) {
                  return s.jsxs(
                    "div",
                    {
                      className: "x78zum5 x6s0dn4 x1pse0pq x150mmf0",
                      children: [
                        s.jsx("div", {
                          className: "x2aouup xlyipyv x6ikm8r x10wlt62 xuxw1ft",
                          children: e.plugin.shortName,
                        }),
                        s.jsx("div", {
                          className: "x78zum5 x1xlr1w8 x12w63v0",
                          children: "/",
                        }),
                      ],
                    },
                    e.plugin.id,
                  );
                }),
            })
          : null;
      return s.jsxs(o("WAWebFlex.react").FlexRow, {
        align: "center",
        padding: [8, 16],
        xstyle: u.container,
        children: [
          i == null ? s.jsx(r("WDSIconIcSearch.react"), {}) : i,
          s.jsx(o("WAWebFlex.react").FlexRow, {
            grow: 1,
            xstyle: u.relative,
            marginStart: 8,
            children: s.jsx(o("LexicalPlainTextPlugin").PlainTextPlugin, {
              contentEditable: s.jsx(
                o("WAWebRichTextInputContentEditable.react")
                  .InputContentEditable,
                {
                  xstyle: [u.contentEditable, u.marginStart4],
                  focusOnMount: !0,
                  placeholder: a,
                },
              ),
              ErrorBoundary: o("LexicalErrorBoundary").LexicalErrorBoundary,
            }),
          }),
          t.isSearching && s.jsx(r("WDSSpinner.react"), { size: 24 }),
          s.jsx(o("WAWebMultilinePlugin").MultilinePlugin, { multiline: !1 }),
        ],
      });
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  98,
);
