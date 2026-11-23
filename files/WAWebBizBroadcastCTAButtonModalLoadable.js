__d(
  "WAWebBizBroadcastCTAButtonModalLoadable",
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
          "WAWebBizBroadcastCTAButtonModal.react",
        )
          .__setRef("WAWebBizBroadcastCTAButtonModalLoadable")
          .load();
        return e;
      }, "BizBroadcastCTAButtonModal"),
      c = r("WAWebLoadable")({
        loader: u,
        loading: function (t) {
          return s.jsx(r("WAWebLazyLoadLoading.react"), { error: !!t.error });
        },
      });
    l.WAWebBizBroadcastCTAButtonModalLoadable = c;
  },
  98,
);
