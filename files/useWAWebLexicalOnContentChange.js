__d(
  "useWAWebLexicalOnContentChange",
  [
    "LexicalComposerContext",
    "react",
    "react-compiler-runtime",
    "useWAWebStableCallback",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e || (e = o("react"))).useEffect;
    function u(e) {
      var t = o("react-compiler-runtime").c(4),
        n = o("LexicalComposerContext").useLexicalComposerContext(),
        a = n[0],
        i = r("useWAWebStableCallback")(e),
        l,
        u;
      (t[0] !== a || t[1] !== i
        ? ((l = function () {
            var e = a.registerTextContentListener(function (e) {
              i(e);
            });
            return e;
          }),
          (u = [a, i]),
          (t[0] = a),
          (t[1] = i),
          (t[2] = l),
          (t[3] = u))
        : ((l = t[2]), (u = t[3])),
        s(l, u));
    }
    l.useLexicalOnContentChange = u;
  },
  98,
);
