__d(
  "WAWebBizBroadcastDeleteConfirmationModalLoadable",
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
          "WAWebBizBroadcastDeleteConfirmationModal.react",
        )
          .__setRef("WAWebBizBroadcastDeleteConfirmationModalLoadable")
          .load();
        return e;
      }, "BizBroadcastDeleteConfirmationModal"),
      c = r("WAWebLoadable")({
        loader: u,
        loading: function (t) {
          return s.jsx(r("WAWebLazyLoadLoading.react"), { error: !!t.error });
        },
      });
    l.WAWebBizBroadcastDeleteConfirmationModalLoadable = c;
  },
  98,
);
