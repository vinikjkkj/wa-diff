__d(
  "useWAWebSearchQuery",
  [
    "WALogger",
    "WAWebChatSearchQuery",
    "react-compiler-runtime",
    "useWAWebEventTargetValue",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(t, n) {
      var a = o("react-compiler-runtime").c(3),
        i;
      a[0] !== n || a[1] !== t
        ? ((i = function () {
            return (
              t ||
                o("WALogger").WARN(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "useSearchQuery: searchQuery is undefined",
                    ])),
                ),
              n(t)
            );
          }),
          (a[0] = n),
          (a[1] = t),
          (a[2] = i))
        : (i = a[2]);
      var l = r("useWAWebEventTargetValue")(
        t,
        o("WAWebChatSearchQuery").SEARCH_EVENT,
        i,
      );
      return l;
    }
    function u(e) {
      var t = s(e, c);
      return t;
    }
    function c(e) {
      var t;
      return (t = e == null ? void 0 : e.trimmed()) != null ? t : "";
    }
    function d(e) {
      var t = s(e, m);
      return t;
    }
    function m(e) {
      var t;
      return (t = e == null ? void 0 : e.highlighted()) != null ? t : [];
    }
    ((l.useSearchText = u), (l.useHighlightedText = d));
  },
  98,
);
