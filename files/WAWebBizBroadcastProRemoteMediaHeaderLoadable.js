__d(
  "WAWebBizBroadcastProRemoteMediaHeaderLoadable",
  [
    "JSResourceForInteraction",
    "WAWebLazyLoadedRetriable",
    "WAWebLoadable",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = r("WAWebLazyLoadedRetriable")(async function () {
        return r("JSResourceForInteraction")(
          "WAWebBizBroadcastProRemoteMediaHeader.react",
        )
          .__setRef("WAWebBizBroadcastProRemoteMediaHeaderLoadable")
          .load();
      }, "BizBroadcastProRemoteMediaHeader"),
      c = r("WAWebLoadable")({
        loader: u,
        loading: function () {
          return s.jsx(s.Fragment, {});
        },
      });
    l.WAWebBizBroadcastProRemoteMediaHeaderLoadable = c;
  },
  98,
);
