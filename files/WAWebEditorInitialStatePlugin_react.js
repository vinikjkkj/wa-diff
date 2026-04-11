__d(
  "WAWebEditorInitialStatePlugin.react",
  ["LexicalComposerContext", "WAWebLexicalUtils", "react"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e || (e = o("react"))).useEffect;
    function u(e) {
      var t = e.initialText,
        n = e.willReceiveFocus,
        r = o("LexicalComposerContext").useLexicalComposerContext(),
        a = r[0],
        i = t == null ? "" : t;
      return (
        s(
          function () {
            a.update(
              function () {
                o("WAWebLexicalUtils").$setTextContent(
                  i,
                  o("WAWebLexicalUtils").isFocused(a),
                );
              },
              { tag: "history-merge" },
            );
          },
          [a],
        ),
        null
      );
    }
    l.default = u;
  },
  98,
);
