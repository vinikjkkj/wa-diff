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
    "react-compiler-runtime",
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
        t = o("react-compiler-runtime").c(15),
        n = o("WAWebCommandPaletteController").useCommandPalette(),
        a = n.activePlugin,
        i =
          (e = a == null ? void 0 : a.placeholder) != null
            ? e
            : "Search chats, messages, settings, and more",
        l;
      t[0] !== n.pluginStack
        ? ((l = n.pluginStack.length
            ? s.jsx("div", {
                className: "x78zum5 x1q0g3np x6s0dn4",
                children: n.pluginStack.filter(m).map(d),
              })
            : null),
          (t[0] = n.pluginStack),
          (t[1] = l))
        : (l = t[1]);
      var c = l,
        p;
      t[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((p = [8, 16]), (t[2] = p))
        : (p = t[2]);
      var _;
      t[3] !== c
        ? ((_ = c == null ? s.jsx(r("WDSIconIcSearch.react"), {}) : c),
          (t[3] = c),
          (t[4] = _))
        : (_ = t[4]);
      var f;
      t[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((f = [u.contentEditable, u.marginStart4]), (t[5] = f))
        : (f = t[5]);
      var g;
      t[6] !== i
        ? ((g = s.jsx(o("WAWebFlex.react").FlexRow, {
            grow: 1,
            xstyle: u.relative,
            marginStart: 8,
            children: s.jsx(o("LexicalPlainTextPlugin").PlainTextPlugin, {
              contentEditable: s.jsx(
                o("WAWebRichTextInputContentEditable.react")
                  .InputContentEditable,
                { xstyle: f, focusOnMount: !0, placeholder: i },
              ),
              ErrorBoundary: o("LexicalErrorBoundary").LexicalErrorBoundary,
            }),
          })),
          (t[6] = i),
          (t[7] = g))
        : (g = t[7]);
      var h;
      t[8] !== n.isSearching
        ? ((h = n.isSearching && s.jsx(r("WDSSpinner.react"), { size: 24 })),
          (t[8] = n.isSearching),
          (t[9] = h))
        : (h = t[9]);
      var y;
      t[10] === Symbol.for("react.memo_cache_sentinel")
        ? ((y = s.jsx(o("WAWebMultilinePlugin").MultilinePlugin, {
            multiline: !1,
          })),
          (t[10] = y))
        : (y = t[10]);
      var C;
      return (
        t[11] !== _ || t[12] !== g || t[13] !== h
          ? ((C = s.jsxs(o("WAWebFlex.react").FlexRow, {
              align: "center",
              padding: p,
              xstyle: u.container,
              children: [_, g, h, y],
            })),
            (t[11] = _),
            (t[12] = g),
            (t[13] = h),
            (t[14] = C))
          : (C = t[14]),
        C
      );
    }
    function d(e) {
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
    }
    d.displayName = d.name + " [from " + i.id + "]";
    function m(e) {
      return e.plugin.shortName;
    }
    l.default = c;
  },
  98,
);
