__d(
  "WAWebTextModifierPlugin",
  [
    "Lexical",
    "LexicalComposerContext",
    "WAWebClipboardPlugin",
    "WAWebLexicalUtils",
    "WAWebMultilinePlugin",
    "WAWebQuoteLineUtils",
    "react",
    "useWAWebLexicalEvent",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e || (e = o("react"))).useRef;
    function u(e) {
      var t = e.autoToggleListBulletSymbol,
        n = e.autoToggleListNumberSymbol,
        r = e.autoToggleQuoteLine,
        a = r === void 0 ? !1 : r,
        i = o("LexicalComposerContext").useLexicalComposerContext(),
        l = i[0];
      o("useWAWebLexicalEvent").useLexicalCommandListener(
        l,
        o("WAWebMultilinePlugin").NEW_PARAGRAPH_COMMAND,
        function () {
          return ((a && m()) || (t && c(), n && d()), !1);
        },
        o("Lexical").COMMAND_PRIORITY_NORMAL,
      );
      var u = s(!1);
      return (
        o("useWAWebLexicalEvent").useLexicalCommandListener(
          l,
          o("WAWebClipboardPlugin").PASTE_TEXT_COMMAND,
          function (e) {
            if (!a || u.current) return !1;
            var t = g(e);
            if (t === e) return !1;
            u.current = !0;
            try {
              l.dispatchCommand(
                o("WAWebClipboardPlugin").PASTE_TEXT_COMMAND,
                t,
              );
            } finally {
              u.current = !1;
            }
            return !0;
          },
          o("Lexical").COMMAND_PRIORITY_CRITICAL,
        ),
        o("useWAWebLexicalEvent").useLexicalCommandListener(
          l,
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
    function c() {
      var e = o("WAWebLexicalUtils").$getSelectionParagraph();
      if (e) {
        var t = e.getPreviousSibling(),
          n = t == null ? void 0 : t.getBulletNode();
        if (!(!t || !n))
          if (v(t)) t.remove();
          else {
            var r = n.getTextContent();
            o("WAWebLexicalUtils").$insertText(r + " ");
          }
      }
    }
    function d() {
      var e = o("WAWebLexicalUtils").$getSelectionParagraph();
      if (e) {
        var t = e.getPreviousSibling(),
          n = t == null ? void 0 : t.getNumberNode();
        if (!(!t || !n))
          if (v(t)) t.remove();
          else {
            var r = parseInt(n.getTextContent(), 10) + 1;
            r <= 99 && o("WAWebLexicalUtils").$insertText(r + ". ");
          }
      }
    }
    function m() {
      var e = o("WAWebLexicalUtils").$getSelectionParagraph(),
        t = e == null ? void 0 : e.getPreviousSibling();
      if (!e || !t) return !1;
      var n = t.getTextContent();
      return t.getQuoteLineNode() == null ||
        o("WAWebQuoteLineUtils").isInsideCodeBlock(_(t) + "\n" + n)
        ? !1
        : (n === o("WAWebQuoteLineUtils").QUOTE_LINE_PREFIX &&
          e.getTextContentSize() === 0 &&
          !p(e)
            ? t.remove()
            : (o("WAWebLexicalUtils").$insertText(
                o("WAWebQuoteLineUtils").QUOTE_LINE_PREFIX,
              ),
              f()),
          !0);
    }
    function p(e) {
      var t;
      return (
        ((t = e.getNextSibling()) == null ? void 0 : t.getQuoteLineNode()) !=
        null
      );
    }
    function _(e) {
      for (var t = [], n = e.getPreviousSibling(); n != null; )
        (t.push(n.getTextContent()), (n = n.getPreviousSibling()));
      return t.reverse().join("\n");
    }
    function f() {
      var e = o("Lexical").$getSelection();
      if (!(!o("Lexical").$isRangeSelection(e) || !e.isCollapsed()))
        for (
          var t = e.anchor.getNode(), n = e.anchor.offset;
          o("Lexical").$isTextNode(t);
        ) {
          var r = t.getTextContent().slice(n),
            a = r.replace(/^\s+/, ""),
            i = r.length - a.length;
          if ((i > 0 && t.spliceText(n, i, "", !1), a.length > 0)) return;
          ((t = t.getNextSibling()), (n = 0));
        }
    }
    function g(e) {
      var t = h();
      if (t == null) return e;
      var n = t.lineBeforeCursor,
        r = t.selection,
        a = t.textAfter,
        i = e.slice(o("WAWebQuoteLineUtils").firstLineWhitespaceLength(e, n));
      return o("WAWebQuoteLineUtils").quotesTextAfter(i, a)
        ? (C(r),
          "" +
            o("WAWebQuoteLineUtils").prefixPastedLines(i) +
            o("WAWebQuoteLineUtils").QUOTE_LINE_PREFIX)
        : o("WAWebQuoteLineUtils").prefixPastedLines(i);
    }
    function h() {
      var e = o("WAWebLexicalUtils").$getRangeSelection(),
        t = o("WAWebLexicalUtils").$getSelectionParagraph();
      if (e == null || t == null) return null;
      var n = e.isBackward() ? [e.focus, e.anchor] : [e.anchor, e.focus],
        r = n[0],
        a = n[1];
      if (
        r.type !== "text" ||
        !o("WAWebQuoteLineUtils").isQuoteLine(t.getTextContent())
      )
        return null;
      var i = b(r),
        l = t.getTextContent().slice(0, i);
      return i < o("WAWebQuoteLineUtils").QUOTE_LINE_PREFIX.length ||
        o("WAWebQuoteLineUtils").isInsideCodeBlock(_(t) + "\n" + l)
        ? null
        : { lineBeforeCursor: l, selection: e, textAfter: y(a) };
    }
    function y(e) {
      var t;
      if (e.type !== "text") return "";
      var n = e.getNode().getTopLevelElement();
      return (t = n == null ? void 0 : n.getTextContent().slice(b(e))) != null
        ? t
        : "";
    }
    function C(e) {
      var t = e.isBackward() ? e.anchor : e.focus;
      if (t.type === "text") {
        for (
          var n = t.getNode(), r = t.offset, a = n, i = r;
          o("Lexical").$isTextNode(a);
        ) {
          var l = a.getTextContent().slice(i),
            s = l.length - l.replace(/^\s+/, "").length;
          if (((n = a), (r = i + s), s < l.length)) break;
          ((a = a.getNextSibling()), (i = 0));
        }
        t.set(n.getKey(), r, "text");
      }
    }
    function b(e) {
      for (
        var t = e.offset, n = e.getNode().getPreviousSibling();
        n != null;
        n = n.getPreviousSibling()
      )
        t += n.getTextContentSize();
      return t;
    }
    function v(e) {
      var t = o("WAWebLexicalUtils").assertTextNode(
        e.getBulletNode() || e.getNumberNode(),
      );
      return e.getTextContentSize() - t.getTextContentSize() === 1;
    }
    l.default = u;
  },
  98,
);
