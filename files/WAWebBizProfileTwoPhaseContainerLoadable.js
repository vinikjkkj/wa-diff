__d(
  "WAWebBizProfileTwoPhaseContainerLoadable",
  [
    "JSResourceForInteraction",
    "WAWebLazyLoadedRetriable",
    "WAWebLoadable",
    "WAWebLoadingDrawer.react",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = r("WAWebLazyLoadedRetriable")(async function () {
        var e = await r("JSResourceForInteraction")(
          "WAWebBizProfileTwoPhaseContainer.react",
        )
          .__setRef("WAWebBizProfileTwoPhaseContainerLoadable")
          .load();
        return e;
      }, "BizProfileTwoPhaseContainer"),
      c = r("WAWebLoadable")({
        loader: u,
        loading: function (t) {
          return s.jsx(r("WAWebLoadingDrawer.react"), { error: !!t.error });
        },
      });
    l.WAWebBizProfileTwoPhaseContainerLoadable = c;
  },
  98,
);
