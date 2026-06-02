__d(
  "WAWebReachoutTimelockRestrictedComposeBarLoadable",
  [
    "JSResourceForInteraction",
    "WAWebLazyLoadLoading.react",
    "WAWebLazyLoadedRetriable",
    "WAWebLoadable",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = r("WAWebLazyLoadedRetriable")(async function () {
        var e = await r("JSResourceForInteraction")(
          "WAWebReachoutTimelockRestrictedComposeBar.react",
        )
          .__setRef("WAWebReachoutTimelockRestrictedComposeBarLoadable")
          .load();
        return e.ReachoutTimelockComposeBar;
      }, "ReachoutTimelockComposeBar"),
      c = r("WAWebLoadable")({
        loader: u,
        loading: function (t) {
          return s.jsx(r("WAWebLazyLoadLoading.react"), { error: !!t.error });
        },
      });
    l.ReachoutTimelockComposeBarLoadable = c;
  },
  98,
);
