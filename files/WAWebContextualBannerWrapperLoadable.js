__d(
  "WAWebContextualBannerWrapperLoadable",
  [
    "JSResourceForInteraction",
    "WAWebLazyLoadedRetriable",
    "react",
    "react-loadable",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = r("WAWebLazyLoadedRetriable")(async function () {
        var e = await r("JSResourceForInteraction")(
          "WAWebContextualBannerWrapper.react",
        )
          .__setRef("WAWebContextualBannerWrapperLoadable")
          .load();
        return e;
      }, "ContextualBannerWrapper"),
      c = r("react-loadable")({
        loader: u,
        loading: function () {
          return s.jsx(s.Fragment, {});
        },
      });
    ((l.requireBundle = u), (l.ContextualBannerWrapperLoadable = c));
  },
  98,
);
