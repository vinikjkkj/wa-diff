__d(
  "useWAWebSearchQuery",
  ["WALogger", "WAWebChatSearchQuery", "useWAWebEventTargetValue"],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(t, n) {
      var a = r("useWAWebEventTargetValue")(
        t,
        o("WAWebChatSearchQuery").SEARCH_EVENT,
        function () {
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
        },
      );
      return a;
    }
    function u(e) {
      var t = s(e, function (e) {
        var t;
        return (t = e == null ? void 0 : e.trimmed()) != null ? t : "";
      });
      return t;
    }
    function c(e) {
      var t = s(e, function (e) {
        var t;
        return (t = e == null ? void 0 : e.highlighted()) != null ? t : [];
      });
      return t;
    }
    ((l.useSearchText = u), (l.useHighlightedText = c));
  },
  98,
);
