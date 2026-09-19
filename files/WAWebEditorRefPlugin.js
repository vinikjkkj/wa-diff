__d(
  "WAWebEditorRefPlugin",
  ["LexicalComposerContext", "react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e || (e = o("react"))).useImperativeHandle;
    function u(e) {
      var t = o("react-compiler-runtime").c(3),
        n = e.editorRef,
        r = o("LexicalComposerContext").useLexicalComposerContext(),
        a = r[0],
        i,
        l;
      return (
        t[0] !== a
          ? ((i = function () {
              return a;
            }),
            (l = [a]),
            (t[0] = a),
            (t[1] = i),
            (t[2] = l))
          : ((i = t[1]), (l = t[2])),
        s(n, i, l),
        null
      );
    }
    l.default = u;
  },
  98,
);
