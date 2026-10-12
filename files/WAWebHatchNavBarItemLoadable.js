__d(
  "WAWebHatchNavBarItemLoadable",
  [
    "JSResourceForInteraction",
    "WAWebLazyLoadedRetriable",
    "WAWebLoadable",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = r("WAWebLazyLoadedRetriable")(function () {
        return r("JSResourceForInteraction")("WAWebHatchNavBarItem.react")
          .__setRef("WAWebHatchNavBarItemLoadable")
          .load();
      }, "WAWebHatchNavBarItemLoadable"),
      c = r("WAWebLoadable")({
        loader: u,
        loading: function (t) {
          return s.jsx(s.Fragment, {});
        },
      }),
      d = c;
    l.default = d;
  },
  98,
);
