__d(
  "WAWebNewsletterDirectoryCategoriesShimmer.react",
  [
    "WAWebBaseShimmerComponents.react",
    "WAWebFlex.react",
    "WAWebNewsletterDirectoryShimmer.react",
    "WAWebUISpacing",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = 73,
      c = 250,
      d = 20;
    function m(e) {
      var t = e.height,
        n = Math.floor((t - d) / u);
      return n === 0
        ? null
        : s.jsxs(o("WAWebFlex.react").FlexColumn, {
            xstyle: o("WAWebUISpacing").uiPadding.horiz13,
            children: [
              s.jsx(o("WAWebBaseShimmerComponents.react").RectangleShimmer, {
                height: 18,
                width: 250,
              }),
              s.jsx(r("WAWebNewsletterDirectoryShimmer.react"), { count: n }),
            ],
          });
    }
    m.displayName = m.name + " [from " + i.id + "]";
    function p(e) {
      var t = e.height,
        n = Math.floor(t / c),
        r = t % c;
      return s.jsxs(s.Fragment, {
        children: [
          Array.from({ length: n }, function (e, t) {
            return s.jsx(m, { height: c }, t);
          }),
          s.jsx(m, { height: r }),
        ],
      });
    }
    ((p.displayName = p.name + " [from " + i.id + "]"), (l.default = p));
  },
  98,
);
