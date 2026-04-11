__d(
  "WAWebChatAction.react",
  [
    "WAWebEmojiText.react",
    "WAWebFlex.react",
    "WAWebFlexItem.react",
    "WAWebFormatConfiguration",
    "WAWebKeyboardHotKeys.react",
    "WAWebKeyboardShortcut.react",
    "WAWebStateUtils",
    "WAWebUISpacing",
    "WAWebUnstyledButton.react",
    "react",
    "useWAWebActiveSelection",
    "useWAWebModelValues",
    "useWAWebSearchQuery",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = {
        button: { width: "xh8yej3", backgroundColor: "x1280gxy", $$css: !0 },
        hover: { ":hover_backgroundColor": "x17gydlx", $$css: !0 },
        active: { backgroundColor: "x4wrhlh", $$css: !0 },
        container: {
          height: "xdiz9cm",
          marginTop: "xdj266r",
          marginInlineEnd: "x14z9mp",
          marginBottom: "xat24cr",
          marginInlineStart: "x1lziwak",
          borderTopWidth: "x178xt8z",
          borderTopStyle: "x13fuv20",
          borderTopColor: "xx42vgk",
          $$css: !0,
        },
        text: { fontSize: "x1f6kntn", $$css: !0 },
        label: { textAlign: "x1yc453h", $$css: !0 },
      };
    function c(e) {
      var t = o("useWAWebModelValues").useModelValues(e.action, [
          "id",
          "name",
          "label",
        ]),
        n = e.onClick,
        a = e.searchQuery,
        i = r("useWAWebActiveSelection")(e.active, t.id),
        l = i[0],
        c = i[1],
        d = function (r) {
          n(r, o("WAWebStateUtils").unproxy(t));
        },
        m = function (t) {
          (t.stopPropagation(), t.preventDefault());
        },
        p = o("useWAWebSearchQuery").useSearchText(a),
        _ = o("WAWebFormatConfiguration").Search({ terms: [p] }),
        f = { enter: d, space: d };
      return s.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
        ref: l,
        onFocus: m,
        handlers: f,
        children: s.jsx(r("WAWebUnstyledButton.react"), {
          xstyle: [
            u.button,
            c && u.active,
            !c && u.hover,
            o("WAWebUISpacing").uiPadding.start30,
          ],
          onClick: d,
          children: s.jsxs(o("WAWebFlex.react").FlexRow, {
            ref: l,
            xstyle: [u.container, o("WAWebUISpacing").uiPadding.end30],
            align: "center",
            justify: "all",
            children: [
              s.jsx(r("WAWebFlexItem.react"), {
                xstyle: [u.label, o("WAWebUISpacing").uiPadding.end10],
                children: s.jsx(o("WAWebEmojiText.react").EmojiText, {
                  multiline: !0,
                  text: t.label,
                  formatters: _,
                  xstyle: u.text,
                }),
              }),
              s.jsx("div", {
                children: s.jsx(
                  o("WAWebKeyboardShortcut.react").KeyboardShortcut,
                  { action: t.name, addModifiers: !0 },
                ),
              }),
            ],
          }),
        }),
      });
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  98,
);
