__d(
  "WAWebMediaViewerReportSpamPopupLoadable",
  [
    "JSResourceForInteraction",
    "WAWebLazyLoadedRetriable",
    "WAWebLoadable",
    "WAWebLoadingDrawer.react",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = r("WAWebLazyLoadedRetriable")(async function () {
        var e = await r("JSResourceForInteraction")(
          "WAWebMediaViewerReportSpamPopup.react",
        )
          .__setRef("WAWebMediaViewerReportSpamPopupLoadable")
          .load();
        return e;
      }, "WAWebMediaViewerReportSpamPopup"),
      c = r("WAWebLoadable")({
        loader: u,
        loading: function (t) {
          return s.jsx(r("WAWebLoadingDrawer.react"), { error: !!t.error });
        },
      });
    l.WAWebMediaViewerReportSpamPopupLoadable = c;
  },
  98,
);
