__d(
  "WAWebLexicalMenuPaginationFooter",
  [
    "Lexical",
    "LexicalComposerContext",
    "WAWebCellV2.react",
    "WAWebKeyboardShortcut.react",
    "WAWebStaticMenuItem.react",
    "react",
    "react-compiler-runtime",
    "useWAWebLexicalEvent",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = o("react-compiler-runtime").c(18),
        n = e.onDown,
        a = e.onUp,
        i = e.page,
        l = e.totalPages,
        u = o("LexicalComposerContext").useLexicalComposerContext(),
        c = u[0],
        d;
      (t[0] !== n || t[1] !== a
        ? ((d = function (t) {
            return (
              t.metaKey === !0 &&
                (t.key === "ArrowDown" && n != null
                  ? n()
                  : t.key === "ArrowUp" &&
                    a != null &&
                    (t.preventDefault(), a())),
              !1
            );
          }),
          (t[0] = n),
          (t[1] = a),
          (t[2] = d))
        : (d = t[2]),
        o("useWAWebLexicalEvent").useLexicalCommandListener(
          c,
          o("Lexical").KEY_DOWN_COMMAND,
          d,
        ));
      var m;
      t[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((m = s.jsx(o("WAWebStaticMenuItem.react").MenuSeparator, {})),
          (t[3] = m))
        : (m = t[3]);
      var p = i + 1,
        _ = l != null && " of " + l,
        f;
      t[4] !== p || t[5] !== _
        ? ((f = s.jsxs(s.Fragment, { children: ["Page ", p, _] })),
          (t[4] = p),
          (t[5] = _),
          (t[6] = f))
        : (f = t[6]);
      var g;
      t[7] !== n || t[8] !== a
        ? ((g =
            a != null &&
            s.jsxs(s.Fragment, {
              children: [
                s.jsx(o("WAWebKeyboardShortcut.react").KeyboardKey, {
                  value: "cmd",
                }),
                s.jsx(o("WAWebKeyboardShortcut.react").KeyboardKey, {
                  value: "\u2191",
                }),
                n != null && s.jsx("span", { children: "/" }),
              ],
            })),
          (t[7] = n),
          (t[8] = a),
          (t[9] = g))
        : (g = t[9]);
      var h;
      t[10] !== n
        ? ((h =
            n != null &&
            s.jsxs(s.Fragment, {
              children: [
                s.jsx(o("WAWebKeyboardShortcut.react").KeyboardKey, {
                  value: "cmd",
                }),
                s.jsx(o("WAWebKeyboardShortcut.react").KeyboardKey, {
                  value: "\u2193",
                }),
              ],
            })),
          (t[10] = n),
          (t[11] = h))
        : (h = t[11]);
      var y;
      t[12] !== g || t[13] !== h
        ? ((y = s.jsxs(o("WAWebKeyboardShortcut.react").KeyboardKeyGroup, {
            children: [g, h],
          })),
          (t[12] = g),
          (t[13] = h),
          (t[14] = y))
        : (y = t[14]);
      var C;
      return (
        t[15] !== f || t[16] !== y
          ? ((C = s.jsxs(s.Fragment, {
              children: [
                m,
                s.jsx(r("WAWebCellV2.react"), {
                  interactive: !1,
                  size: "small",
                  colorScheme: "lighter",
                  primary: f,
                  primaryRight: y,
                }),
              ],
            })),
            (t[15] = f),
            (t[16] = y),
            (t[17] = C))
          : (C = t[17]),
        C
      );
    }
    l.default = u;
  },
  98,
);
