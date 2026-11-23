__d(
  "WAWebEditorRefPlugin",
  ["LexicalComposerContext", "react"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e || (e = o("react"))).useImperativeHandle;
    function u(e) {
      var t = e.editorRef,
        n = o("LexicalComposerContext").useLexicalComposerContext(),
        r = n[0];
      return (
        s(
          t,
          function () {
            return r;
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
