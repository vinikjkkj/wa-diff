__d(
  "WDSRichTextCharLimitPlugin",
  ["Lexical", "LexicalComposerContext", "LexicalUtils", "react"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (e || (e = o("react"))).useEffect;
    function u(e) {
      var t = e.maxLength,
        n = o("LexicalComposerContext").useLexicalComposerContext(),
        r = n[0];
      return (
        s(
          function () {
            return r.registerNodeTransform(o("Lexical").RootNode, function (e) {
              var n = o("Lexical").$getSelection();
              if (!(!o("Lexical").$isRangeSelection(n) || !n.isCollapsed())) {
                var a = r.getEditorState(),
                  i = e.getTextContent();
                i.length > t && o("LexicalUtils").$restoreEditorState(r, a);
              }
            });
          },
          [r, t],
        ),
        null
      );
    }
    l.default = u;
  },
  98,
);
