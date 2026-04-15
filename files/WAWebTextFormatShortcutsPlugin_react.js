__d(
  "WAWebTextFormatShortcutsPlugin.react",
  [
    "Lexical",
    "LexicalComposerContext",
    "WAWebActions",
    "WAWebKeyboardShortcuts",
    "WAWebTextFormatUtils",
    "react-compiler-runtime",
    "useWAWebLexicalEvent",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      var n = o("WAWebKeyboardShortcuts").getAction(e);
      if (!n) return null;
      switch (n) {
        case o("WAWebActions").Action.TOGGLE_BOLD:
          return o("WAWebTextFormatUtils").TextFormatType.Bold;
        case o("WAWebActions").Action.TOGGLE_ITALIC:
          return o("WAWebTextFormatUtils").TextFormatType.Italic;
        case o("WAWebActions").Action.TOGGLE_STRIKETHROUGH:
          return o("WAWebTextFormatUtils").TextFormatType.Strikethrough;
        case o("WAWebActions").Action.TOGGLE_INLINE_CODE:
          return t.inlineCodeEnabled
            ? o("WAWebTextFormatUtils").TextFormatType.InlineCode
            : null;
        case o("WAWebActions").Action.TOGGLE_CODE:
          return o("WAWebTextFormatUtils").TextFormatType.Code;
        case o("WAWebActions").Action.TOGGLE_NUMBERED_LIST:
          return t.numberedListEnabled
            ? o("WAWebTextFormatUtils").TextFormatType.NumberedList
            : null;
        case o("WAWebActions").Action.TOGGLE_BULLETED_LIST:
          return t.bulletPointsEnabled
            ? o("WAWebTextFormatUtils").TextFormatType.BulletedList
            : null;
        case o("WAWebActions").Action.TOGGLE_QUOTE:
          return t.blockQuoteEnabled
            ? o("WAWebTextFormatUtils").TextFormatType.Quote
            : null;
        default:
          return null;
      }
    }
    function s(t) {
      var n = o("react-compiler-runtime").c(3),
        r = o("LexicalComposerContext").useLexicalComposerContext(),
        a = r[0],
        i;
      (n[0] !== a || n[1] !== t
        ? ((i = function (r) {
            var n = e(r, t);
            return !n || a.isComposing()
              ? !1
              : (a.update(function () {
                  o("WAWebTextFormatUtils").$toggleTextFormat(n);
                }),
                !0);
          }),
          (n[0] = a),
          (n[1] = t),
          (n[2] = i))
        : (i = n[2]),
        o("useWAWebLexicalEvent").useLexicalCommandListener(
          a,
          o("Lexical").KEY_MODIFIER_COMMAND,
          i,
          o("Lexical").COMMAND_PRIORITY_HIGH,
        ));
    }
    l.default = s;
  },
  98,
);
