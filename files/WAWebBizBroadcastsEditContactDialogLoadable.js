__d(
  "WAWebBizBroadcastsEditContactDialogLoadable",
  [
    "JSResourceForInteraction",
    "WAWebLazyLoadLoading.react",
    "WAWebLazyLoadedRetriable",
    "WAWebLoadable",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = r("WAWebLazyLoadedRetriable")(async function () {
        var e = await r("JSResourceForInteraction")(
          "WAWebBizBroadcastsEditContactDialog.react",
        )
          .__setRef("WAWebBizBroadcastsEditContactDialogLoadable")
          .load();
        return e;
      }, "BizBroadcastsEditContactDialog"),
      c = r("WAWebLoadable")({
        loader: u,
        loading: function (t) {
          return s.jsx(r("WAWebLazyLoadLoading.react"), { error: !!t.error });
        },
      });
    l.WAWebBizBroadcastsEditContactDialogLoadable = c;
  },
  98,
);
