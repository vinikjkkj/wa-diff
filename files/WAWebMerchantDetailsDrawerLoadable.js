__d(
  "WAWebMerchantDetailsDrawerLoadable",
  [
    "JSResourceForInteraction",
    "WAWebLazyLoadedRetriable",
    "WAWebLoadingDrawer.react",
    "react",
    "react-loadable",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = r("WAWebLazyLoadedRetriable")(async function () {
        var e = await r("JSResourceForInteraction")(
          "WAWebBizMerchantDetailsDrawer.react",
        )
          .__setRef("WAWebMerchantDetailsDrawerLoadable")
          .load();
        return e;
      }, "MerchantDetails"),
      c = r("react-loadable")({
        loader: u,
        loading: function (t) {
          return s.jsx(r("WAWebLoadingDrawer.react"), { error: !!t.error });
        },
      });
    l.MerchantDetailsDrawerLoadable = c;
  },
  98,
);
