__d(
  "WAWebMeTabFlowLoadable",
  [
    "JSResourceForInteraction",
    "WAWebFbtCommon",
    "WAWebLazyLoadedRetriable",
    "WAWebLoadingDrawer.react",
    "react",
    "react-loadable",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = r("WAWebLazyLoadedRetriable")(async function () {
        var e = await r("JSResourceForInteraction")("WAWebMeTabFlow.react")
          .__setRef("WAWebMeTabFlowLoadable")
          .load();
        return e.MeTabFlow;
      }, "MeTabFlow"),
      c = r("react-loadable")({
        loader: u,
        loading: function (t) {
          return s.jsx(r("WAWebLoadingDrawer.react"), {
            title: r("WAWebFbtCommon")("You"),
            error: !!t.error,
          });
        },
      });
    ((l.requireBundle = u), (l.MeTabFlowLoadable = c));
  },
  98,
);
