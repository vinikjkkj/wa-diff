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
    "useWAWebLexicalEvent",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e || (e = o("react"))).useEffect;
    function u(e) {
      var t = e.charRemainingLimit,
        n = e.maxCodeUnits,
        r = e.maxLength,
        a = e.maxLineCount,
        i = e.onMaxInputExceeded,
        l = e.onMaxPasteExceeded,
        u = o("LexicalComposerContext").useLexicalComposerContext(),
        m = u[0];
      return (
        s(
          function () {
            if (!(r == null && n == null))
              return m.registerNodeTransform(
                o("Lexical").RootNode,
                function (e) {
                  var t = o("Lexical").$getSelection();
                  if (
                    !(!o("Lexical").$isRangeSelection(t) || !t.isCollapsed())
                  ) {
                    var l = m.getEditorState(),
                      s = l.read(function () {
                        return e.getTextContent();
                      }),
                      u = e.getTextContent();
                    u !== s &&
                      ((n != null && c(u) > n) ||
                        (r != null &&
                          o("WAUnicodeUtils").numCodepoints(u) > r) ||
                        (a != null && d(u) > a)) &&
                      (i == null || i(),
                      o("LexicalUtils").$restoreEditorState(m, l));
                  }
                },
              );
          },
          [m, r, n, a, i],
        ),
        o("useWAWebLexicalEvent").useLexicalCommandListener(
          m,
          o("WAWebClipboardPlugin").PASTE_TEXT_COMMAND,
          function (e) {
            var t = m
                .getEditorState()
                .read(o("WAWebLexicalUtils").$rootTextContent),
              a = m.getEditorState().read(function () {
                var e, t;
                return (e =
                  (t = o("WAWebLexicalUtils").$getRangeSelection()) == null
                    ? void 0
                    : t.getTextContent()) != null
                  ? e
                  : "";
              }),
              i = o("WAUnicodeUtils").numCodepoints(t),
              s = o("WAUnicodeUtils").numCodepoints(a),
              u = o("WAUnicodeUtils").numCodepoints(e),
              c = n != null && t.length - a.length + e.length > n,
              d = r != null && i - s + u > r,
              p = c || d;
            if (p) {
              l == null || l();
              var _ = 1 / 0,
                f = 1 / 0;
              if (
                (r != null && (_ = r - (i - s)),
                n != null && (f = n - (t.length - a.length)),
                _ > 0 || f > 0)
              ) {
                var g = e;
                (_ < 1 / 0 &&
                  _ > 0 &&
                  (g = o("WAUnicodeUtils").firstNCodepoints(g, _)),
                  f < 1 / 0 && g.length > f && (g = g.slice(0, f)),
                  g.length > 0 &&
                    m.update(function () {
                      var e = o("WAWebLexicalUtils").$getRangeSelection();
                      e != null &&
                        (e.isCollapsed() || e.removeText(), e.insertText(g));
                    }));
              }
              return !0;
            }
            return !1;
          },
          o("Lexical").COMMAND_PRIORITY_CRITICAL,
        ),
        null
      );
    }
    function c(e) {
      return new Blob([e], { type: "text/plain" }).size;
    }
    function d(e) {
      return e.split("\n\n").length;
    }
    ((l.CharacterLimitPlugin = u), (l.numCodeUnits = c), (l.getLineCount = d));
  },
  98,
);
