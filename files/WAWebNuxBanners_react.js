__d(
  "WAWebNuxBanners.react",
  ["WAWebNuxCtwaSuggestionHelpers", "WAWebVelocityTransitionGroup", "react"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e.Children,
      c = "xr8eula-B";
    function d(e) {
      var t = e.children,
        n = u.toArray(t),
        a = n.find(function (e) {
          var t = e.props,
            n = t.promotion,
            r = t.suggestion;
          return r != null
            ? o("WAWebNuxCtwaSuggestionHelpers").shouldShowSuggestion(r.id)
            : n != null
              ? !0
              : e.type.shouldShow();
        });
      return a
        ? s.jsx("div", { className: "xof6966 xqnxcvj", children: a })
        : s.jsx(r("WAWebVelocityTransitionGroup"), {
            transitionName: "butterbar",
            children: a,
          });
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.default = d));
  },
  98,
);
