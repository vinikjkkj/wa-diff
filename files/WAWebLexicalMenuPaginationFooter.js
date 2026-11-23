__d(
  "WAWebLexicalMenuPaginationFooter",
  [
    "Lexical",
    "LexicalComposerContext",
    "WAWebCellV2.react",
    "WAWebKeyboardShortcut.react",
    "WAWebStaticMenuItem.react",
    "react",
    "useWAWebLexicalEvent",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = e.onDown,
        n = e.onUp,
        a = e.page,
        i = e.totalPages,
        l = o("LexicalComposerContext").useLexicalComposerContext(),
        u = l[0];
      return (
        o("useWAWebLexicalEvent").useLexicalCommandListener(
          u,
          o("Lexical").KEY_DOWN_COMMAND,
          function (e) {
            return (
              e.metaKey === !0 &&
                (e.key === "ArrowDown" && t != null
                  ? t()
                  : e.key === "ArrowUp" &&
                    n != null &&
                    (e.preventDefault(), n())),
              !1
            );
          },
        ),
        s.jsxs(s.Fragment, {
          children: [
            s.jsx(o("WAWebStaticMenuItem.react").MenuSeparator, {}),
            s.jsx(r("WAWebCellV2.react"), {
              interactive: !1,
              size: "small",
              colorScheme: "lighter",
              primary: s.jsxs(s.Fragment, {
                children: ["Page ", a + 1, i != null && " of " + i],
              }),
              primaryRight: s.jsxs(
                o("WAWebKeyboardShortcut.react").KeyboardKeyGroup,
                {
                  children: [
                    n != null &&
                      s.jsxs(s.Fragment, {
                        children: [
                          s.jsx(o("WAWebKeyboardShortcut.react").KeyboardKey, {
                            value: "cmd",
                          }),
                          s.jsx(o("WAWebKeyboardShortcut.react").KeyboardKey, {
                            value: "\u2191",
                          }),
                          t != null && s.jsx("span", { children: "/" }),
                        ],
                      }),
                    t != null &&
                      s.jsxs(s.Fragment, {
                        children: [
                          s.jsx(o("WAWebKeyboardShortcut.react").KeyboardKey, {
                            value: "cmd",
                          }),
                          s.jsx(o("WAWebKeyboardShortcut.react").KeyboardKey, {
                            value: "\u2193",
                          }),
                        ],
                      }),
                  ],
                },
              ),
            }),
          ],
        })
      );
    }
    ((u.displayName = u.name + " [from " + i.id + "]"), (l.default = u));
  },
  98,
);
