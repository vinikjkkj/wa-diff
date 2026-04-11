__d(
  "WDSRichTextInitialStatePlugin",
  ["Lexical", "LexicalComposerContext", "react"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (e || (e = o("react"))).useEffect;
    function u(e) {
      var t = e.initialText,
        n = o("LexicalComposerContext").useLexicalComposerContext(),
        r = n[0];
      return (
        s(
          function () {
            var e = t == null ? "" : t;
            r.update(
              function () {
                var t = o("Lexical").$getRoot();
                t.clear();
                for (var n = e.split(/\r?\n/), r = 0; r < n.length; r++) {
                  var a = o("Lexical").$createParagraphNode(),
                    i = new (o("Lexical").TextNode)(n[r]);
                  (a.append(i), t.append(a));
                }
                o("Lexical").$setSelection(null);
              },
              { tag: "history-merge" },
            );
          },
          [r],
        ),
        null
      );
    }
    l.default = u;
  },
  98,
);
