__d(
  "WAWebBizBroadcastExistingAudiencesModalLoadable",
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
          "WAWebBizBroadcastExistingAudiencesModal.react",
        )
          .__setRef("WAWebBizBroadcastExistingAudiencesModalLoadable")
          .load();
        return e;
      }, "BizBroadcastExistingAudiencesModal"),
      c = r("WAWebLoadable")({
        loader: u,
        loading: function (t) {
          return s.jsx(r("WAWebLazyLoadLoading.react"), { error: !!t.error });
        },
      });
    l.WAWebBizBroadcastExistingAudiencesModalLoadable = c;
  },
  98,
);
