__d(
  "WAWebNuxBanners.react",
  [
    "WAWebNuxCtwaSuggestionHelpers",
    "WAWebVelocityTransitionGroup",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e.Children,
      c = "xr8eula-B";
    function d(e) {
      var t = o("react-compiler-runtime").c(4),
        n = e.children,
        a;
      if (t[0] !== n) {
        var i = u.toArray(n);
        ((a = i.find(m)), (t[0] = n), (t[1] = a));
      } else a = t[1];
      var l = a,
        c;
      return (
        t[2] !== l
          ? ((c = l
              ? s.jsx("div", { className: "xof6966 xqnxcvj", children: l })
              : s.jsx(r("WAWebVelocityTransitionGroup"), {
                  transitionName: "butterbar",
                  children: l,
                })),
            (t[2] = l),
            (t[3] = c))
          : (c = t[3]),
        c
      );
    }
    function m(e) {
      var t = e.props,
        n = t.promotion,
        r = t.suggestion;
      return r != null
        ? o("WAWebNuxCtwaSuggestionHelpers").shouldShowSuggestion(r.id)
        : n != null
          ? !0
          : e.type.shouldShow();
    }
    l.default = d;
  },
  98,
);
