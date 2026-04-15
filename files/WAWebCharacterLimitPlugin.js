__d(
  "WAWebCharacterLimitPlugin",
  [
    "Lexical",
    "LexicalComposerContext",
    "LexicalUtils",
    "WAUnicodeUtils",
    "WAWebClipboardPlugin",
    "WAWebLexicalUtils",
    "react",
    "react-compiler-runtime",
    "useWAWebLexicalEvent",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e || (e = o("react"))).useEffect;
    function u(e) {
      var t = o("react-compiler-runtime").c(12),
        n = e.maxCodeUnits,
        r = e.maxLength,
        a = e.maxLineCount,
        i = e.onMaxInputExceeded,
        l = e.onMaxPasteExceeded,
        u = o("LexicalComposerContext").useLexicalComposerContext(),
        p = u[0],
        _,
        f;
      (t[0] !== p || t[1] !== n || t[2] !== r || t[3] !== a || t[4] !== i
        ? ((_ = function () {
            if (!(r == null && n == null))
              return p.registerNodeTransform(
                o("Lexical").RootNode,
                function (e) {
                  var t = o("Lexical").$getSelection();
                  if (
                    !(!o("Lexical").$isRangeSelection(t) || !t.isCollapsed())
                  ) {
                    var l = p.getEditorState(),
                      s = l.read(function () {
                        return e.getTextContent();
                      }),
                      u = e.getTextContent();
                    u !== s &&
                      ((n != null && d(u) > n) ||
                        (r != null &&
                          o("WAUnicodeUtils").numCodepoints(u) > r) ||
                        (a != null && m(u) > a)) &&
                      (i == null || i(),
                      o("LexicalUtils").$restoreEditorState(p, l));
                  }
                },
              );
          }),
          (f = [p, r, n, a, i]),
          (t[0] = p),
          (t[1] = n),
          (t[2] = r),
          (t[3] = a),
          (t[4] = i),
          (t[5] = _),
          (t[6] = f))
        : ((_ = t[5]), (f = t[6])),
        s(_, f));
      var g;
      return (
        t[7] !== p || t[8] !== n || t[9] !== r || t[10] !== l
          ? ((g = function (t) {
              var e = p
                  .getEditorState()
                  .read(o("WAWebLexicalUtils").$rootTextContent),
                a = p.getEditorState().read(c),
                i = o("WAUnicodeUtils").numCodepoints(e),
                s = o("WAUnicodeUtils").numCodepoints(a),
                u = o("WAUnicodeUtils").numCodepoints(t),
                d = n != null && e.length - a.length + t.length > n,
                m = r != null && i - s + u > r,
                _ = d || m;
              if (_) {
                l == null || l();
                var f = 1 / 0,
                  g = 1 / 0;
                if (
                  (r != null && (f = r - (i - s)),
                  n != null && (g = n - (e.length - a.length)),
                  f > 0 || g > 0)
                ) {
                  var h = t;
                  (f < 1 / 0 &&
                    f > 0 &&
                    (h = o("WAUnicodeUtils").firstNCodepoints(h, f)),
                    g < 1 / 0 && h.length > g && (h = h.slice(0, g)),
                    h.length > 0 &&
                      p.update(function () {
                        var e = o("WAWebLexicalUtils").$getRangeSelection();
                        e != null &&
                          (e.isCollapsed() || e.removeText(), e.insertText(h));
                      }));
                }
                return !0;
              }
              return !1;
            }),
            (t[7] = p),
            (t[8] = n),
            (t[9] = r),
            (t[10] = l),
            (t[11] = g))
          : (g = t[11]),
        o("useWAWebLexicalEvent").useLexicalCommandListener(
          p,
          o("WAWebClipboardPlugin").PASTE_TEXT_COMMAND,
          g,
          o("Lexical").COMMAND_PRIORITY_CRITICAL,
        ),
        null
      );
    }
    function c() {
      var e, t;
      return (e =
        (t = o("WAWebLexicalUtils").$getRangeSelection()) == null
          ? void 0
          : t.getTextContent()) != null
        ? e
        : "";
    }
    function d(e) {
      return new Blob([e], { type: "text/plain" }).size;
    }
    function m(e) {
      return e.split("\n\n").length;
    }
    ((l.CharacterLimitPlugin = u), (l.numCodeUnits = d), (l.getLineCount = m));
  },
  98,
);
