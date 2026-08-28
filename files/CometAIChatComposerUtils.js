__d(
  "CometAIChatComposerUtils",
  [
    "Lexical",
    "LexicalComposerContext",
    "LexicalText",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (e || (e = o("react"))).useCallback;
    function u(e, t) {
      t === void 0 && (t = o("LexicalText").$rootTextContent);
      var n = e.read(
        "pending",
        o("LexicalText").$isRootTextContentEmptyCurry(e.isComposing()),
      );
      if (n) return !1;
      var r = e.read("pending", t);
      return (e.dispatchCommand(o("Lexical").CLEAR_EDITOR_COMMAND), r);
    }
    function c(e) {
      var t = o("react-compiler-runtime").c(3),
        n = e === void 0 ? o("LexicalText").$rootTextContent : e,
        r = o("LexicalComposerContext").useLexicalComposerContext(),
        a = r[0],
        i;
      return (
        t[0] !== n || t[1] !== a
          ? ((i = function () {
              return u(a, n);
            }),
            (t[0] = n),
            (t[1] = a),
            (t[2] = i))
          : (i = t[2]),
        i
      );
    }
    ((l.submit = u), (l.useSubmit = c));
  },
  98,
);
