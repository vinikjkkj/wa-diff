__d(
  "WDSRichTextEditorStatePlugin",
  ["Lexical", "LexicalComposerContext", "react"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = s.useEffect,
      c = s.useRef;
    function d() {
      return o("Lexical")
        .$getRoot()
        .getChildren()
        .map(function (e) {
          return e.getTextContent();
        })
        .join("\n");
    }
    function m(e) {
      return e.read(d);
    }
    function p(e) {
      var t = e.onBlur,
        n = e.onFocus,
        r = e.onValueChange,
        a = o("LexicalComposerContext").useLexicalComposerContext(),
        i = a[0],
        l = c();
      return (
        u(
          function () {
            l.current = m(i.getEditorState());
          },
          [i],
        ),
        u(
          function () {
            return i.registerUpdateListener(function (e) {
              var t = e.editorState,
                n = e.tags;
              if (!i.isComposing() && !n.has("history-merge")) {
                var o = m(t);
                l.current !== o && ((l.current = o), r == null || r(o));
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
    l.default = p;
  },
  98,
);
