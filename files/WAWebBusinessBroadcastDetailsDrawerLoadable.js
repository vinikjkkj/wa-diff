__d(
  "WAWebBusinessBroadcastDetailsDrawerLoadable",
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
          "WAWebBusinessBroadcastDetailsDrawer.react",
        )
          .__setRef("WAWebBusinessBroadcastDetailsDrawerLoadable")
          .load();
        return e;
      }, "BusinessBroadcastDetailsDrawer"),
      c = r("WAWebLoadable")({
        loader: u,
        loading: function (t) {
          return s.jsx(r("WAWebLoadingDrawer.react"), { error: !!t.error });
        },
      });
    l.WAWebBusinessBroadcastDetailsDrawerLoadable = c;
  },
  98,
);
