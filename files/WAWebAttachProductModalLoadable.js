__d(
  "WAWebAttachProductModalLoadable",
  [
    "fbt",
    "JSResourceForInteraction",
    "WAWebLazyLoadedRetriable",
    "WAWebLoadingModal.react",
    "react",
    "react-loadable",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = r("WAWebLazyLoadedRetriable")(async function () {
        var e = await r("JSResourceForInteraction")(
          "WAWebBizAttachProductModal.react",
        )
          .__setRef("WAWebAttachProductModalLoadable")
          .load();
        return e;
      }, "AttachProductModal"),
      d = r("react-loadable")({
        loader: c,
        loading: function (t) {
          return u.jsx(r("WAWebLoadingModal.react"), {
            title: s._(/*BTDS*/ "Send products"),
            error: !!t.error,
          });
        },
      });
    ((l.requireBundle = c), (l.AttachProductModalLoadable = d));
  },
  226,
);
