__d(
  "WAWebTextModifierPlugin",
  [
    "Lexical",
    "LexicalComposerContext",
    "WAWebLexicalUtils",
    "WAWebMultilinePlugin",
    "react-compiler-runtime",
    "useWAWebLexicalEvent",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("react-compiler-runtime").c(3),
        n = e.autoToggleListBulletSymbol,
        r = e.autoToggleListNumberSymbol,
        a = o("LexicalComposerContext").useLexicalComposerContext(),
        i = a[0],
        l;
      return (
        t[0] !== n || t[1] !== r
          ? ((l = function () {
              return (n && u(), r && c(), !1);
            }),
            (t[0] = n),
            (t[1] = r),
            (t[2] = l))
          : (l = t[2]),
        o("useWAWebLexicalEvent").useLexicalCommandListener(
          i,
          o("WAWebMultilinePlugin").NEW_PARAGRAPH_COMMAND,
          l,
          o("Lexical").COMMAND_PRIORITY_NORMAL,
        ),
        o("useWAWebLexicalEvent").useLexicalCommandListener(
          i,
          o("Lexical").DELETE_LINE_COMMAND,
          s,
          o("Lexical").COMMAND_PRIORITY_HIGH,
        ),
        null
      );
    }
    function s(e) {
      var t = o("Lexical").$getSelection();
      return o("Lexical").$isRangeSelection(t)
        ? (t.isCollapsed() &&
            t.anchor.type === "text" &&
            t.modify("extend", e, "lineboundary"),
          t.removeText(),
          !0)
        : !1;
    }
    function u() {
      var e = o("WAWebLexicalUtils").$getSelectionParagraph();
      if (e) {
        var t = e.getPreviousSibling(),
          n = t == null ? void 0 : t.getBulletNode();
        if (!(!t || !n))
          if (d(t)) t.remove();
          else {
            var r = n.getTextContent();
            o("WAWebLexicalUtils").$insertText(r + " ");
          }
      }
    }
    function c() {
      var e = o("WAWebLexicalUtils").$getSelectionParagraph();
      if (e) {
        var t = e.getPreviousSibling(),
          n = t == null ? void 0 : t.getNumberNode();
        if (!(!t || !n))
          if (d(t)) t.remove();
          else {
            var r = parseInt(n.getTextContent(), 10) + 1;
            r <= 99 && o("WAWebLexicalUtils").$insertText(r + ". ");
          }
      }
    }
    function d(e) {
      var t = o("WAWebLexicalUtils").assertTextNode(
        e.getBulletNode() || e.getNumberNode(),
      );
      return e.getTextContentSize() - t.getTextContentSize() === 1;
    }
    l.default = e;
  },
  98,
);
