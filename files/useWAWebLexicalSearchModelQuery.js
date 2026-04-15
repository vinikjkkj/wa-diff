__d(
  "useWAWebLexicalSearchModelQuery",
  [
    "LexicalComposerContext",
    "WAWebLexicalUtils",
    "WAWebNoop",
    "asyncToGeneratorRuntime",
    "react",
    "useWAWebLexicalOnContentChange",
    "useWAWebSearchModel",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e || (e = o("react"))).useEffect;
    function u(e) {
      var t = o("LexicalComposerContext").useLexicalComposerContext(),
        a = t[0],
        i = o("useWAWebSearchModel").useSearchModel(e);
      return (
        o("useWAWebLexicalOnContentChange").useLexicalOnContentChange(
          (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                yield i.query(e);
              },
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })(),
        ),
        s(function () {
          i.query(o("WAWebLexicalUtils").getTextContent(a)).catch(
            r("WAWebNoop"),
          );
        }, []),
        i
      );
    }
    l.useLexicalSearchModelQuery = u;
  },
  98,
);
