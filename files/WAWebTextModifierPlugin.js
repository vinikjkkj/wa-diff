__d(
  "WAWebTextModifierPlugin",
  [
    "Lexical",
    "LexicalComposerContext",
    "WAWebLexicalUtils",
    "WAWebMultilinePlugin",
    "useWAWebLexicalEvent",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.autoToggleListBulletSymbol,
        n = e.autoToggleListNumberSymbol,
        r = o("LexicalComposerContext").useLexicalComposerContext(),
        a = r[0];
      return (
        o("useWAWebLexicalEvent").useLexicalCommandListener(
          a,
          o("WAWebMultilinePlugin").NEW_PARAGRAPH_COMMAND,
          function () {
            return (t && s(), n && u(), !1);
          },
          o("Lexical").COMMAND_PRIORITY_NORMAL,
        ),
        o("useWAWebLexicalEvent").useLexicalCommandListener(
          a,
          o("Lexical").DELETE_LINE_COMMAND,
          function (e) {
            var t = o("Lexical").$getSelection();
            return o("Lexical").$isRangeSelection(t)
              ? (t.isCollapsed() &&
                  t.anchor.type === "text" &&
                  t.modify("extend", e, "lineboundary"),
                t.removeText(),
                !0)
              : !1;
          },
          o("Lexical").COMMAND_PRIORITY_HIGH,
        ),
        null
      );
    }
    function s() {
      var e = o("WAWebLexicalUtils").$getSelectionParagraph();
      if (e) {
        var t = e.getPreviousSibling(),
          n = t == null ? void 0 : t.getBulletNode();
        if (!(!t || !n))
          if (c(t)) t.remove();
          else {
            var r = n.getTextContent();
            o("WAWebLexicalUtils").$insertText(r + " ");
          }
      }
    }
    function u() {
      var e = o("WAWebLexicalUtils").$getSelectionParagraph();
      if (e) {
        var t = e.getPreviousSibling(),
          n = t == null ? void 0 : t.getNumberNode();
        if (!(!t || !n))
          if (c(t)) t.remove();
          else {
            var r = parseInt(n.getTextContent(), 10) + 1;
            r <= 99 && o("WAWebLexicalUtils").$insertText(r + ". ");
          }
      }
    }
    function c(e) {
      var t = o("WAWebLexicalUtils").assertTextNode(
        e.getBulletNode() || e.getNumberNode(),
      );
      return e.getTextContentSize() - t.getTextContentSize() === 1;
    }
    l.default = e;
  },
  98,
);
