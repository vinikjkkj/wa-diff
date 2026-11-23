__d(
  "WAWebReachoutTimelockUnrestrictedModalLoadable",
  [
    "JSResourceForInteraction",
    "WAWebLazyLoadedRetriable",
    "WAWebLoadable",
    "WAWebLoadingConfirmPopup.react",
    "WDSDialogBridge",
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
          return t.error
            ? s.jsx(r("WAWebLoadingConfirmPopup.react"), {
                error: !0,
                onCancel: o("WDSDialogBridge").closeWDSDialog,
              })
            : s.jsx(s.Fragment, {});
        },
      });
    l.ReachoutTimelockUnrestrictedModalLoadable = c;
  },
  98,
);
