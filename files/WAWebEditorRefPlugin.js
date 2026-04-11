__d(
  "WAWebEditorRefPlugin",
  ["LexicalComposerContext", "react"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e || (e = o("react"))).useEffect;
    function u(e) {
      var t = e.editorRef,
        n = o("LexicalComposerContext").useLexicalComposerContext(),
        r = n[0];
      return (
        s(
          function () {
            typeof t == "function" ? t(r) : t && (t.current = r);
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
