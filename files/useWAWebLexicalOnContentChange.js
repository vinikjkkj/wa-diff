__d(
  "useWAWebLexicalOnContentChange",
  ["LexicalComposerContext", "react", "useWAWebStableCallback"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e || (e = o("react"))).useEffect;
    function u(e) {
      var t = o("LexicalComposerContext").useLexicalComposerContext(),
        n = t[0],
        a = r("useWAWebStableCallback")(e);
      s(
        function () {
          var e = n.registerTextContentListener(function (e) {
            a(e);
          });
          return e;
        },
        [n, a],
      );
    }
    l.useLexicalOnContentChange = u;
  },
  98,
);
