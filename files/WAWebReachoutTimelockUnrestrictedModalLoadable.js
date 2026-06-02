__d(
  "WAWebReachoutTimelockUnrestrictedModalLoadable",
  [
    "JSResourceForInteraction",
    "WAWebLazyLoadedRetriable",
    "WAWebLoadable",
    "WAWebLoadingModal.react",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = r("WAWebLazyLoadedRetriable")(async function () {
        var e = await r("JSResourceForInteraction")(
          "WAWebReachoutTimelockUnrestrictedModal.react",
        )
          .__setRef("WAWebReachoutTimelockUnrestrictedModalLoadable")
          .load();
        return e.ReachoutTimelockUnrestrictedModal;
      }, "ReachoutTimelockUnrestrictedModal"),
      c = r("WAWebLoadable")({
        loader: u,
        loading: function (t) {
          return s.jsx(r("WAWebLoadingModal.react"), { error: !!t.error });
        },
      });
    l.ReachoutTimelockUnrestrictedModalLoadable = c;
  },
  98,
);
