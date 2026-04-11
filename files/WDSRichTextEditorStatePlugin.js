__d(
  "WDSRichTextEditorStatePlugin",
  ["Lexical", "LexicalComposerContext", "react"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = s.useEffect,
      c = s.useRef;
    function d(e) {
      var t = e.onBlur,
        n = e.onFocus,
        r = e.onValueChange,
        a = o("LexicalComposerContext").useLexicalComposerContext(),
        i = a[0],
        l = c();
      return (
        u(
          function () {
            var e = i.getEditorState().read(function () {
              return o("Lexical").$getRoot().getTextContent();
            });
            l.current = e;
          },
          [i],
        ),
        u(
          function () {
            return i.registerUpdateListener(function (e) {
              var t = e.editorState;
              if (!i.isComposing()) {
                var n = t.read(function () {
                  return o("Lexical").$getRoot().getTextContent();
                });
                l.current !== n && ((l.current = n), r == null || r(n));
              }
            });
          },
          [i, r],
        ),
        u(
          function () {
            return i.registerCommand(
              o("Lexical").BLUR_COMMAND,
              function () {
                return (t == null || t(), !1);
              },
              o("Lexical").COMMAND_PRIORITY_LOW,
            );
          },
          [i, t],
        ),
        u(
          function () {
            return i.registerCommand(
              o("Lexical").FOCUS_COMMAND,
              function () {
                return (n == null || n(), !1);
              },
              o("Lexical").COMMAND_PRIORITY_LOW,
            );
          },
          [i, n],
        ),
        null
      );
    }
    l.default = d;
  },
  98,
);
