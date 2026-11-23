__d(
  "WAWebToastManagerImplLoadable",
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
        var e = await r("JSResourceForInteraction")("WAWebToastManagerImpl")
          .__setRef("WAWebToastManagerImplLoadable")
          .load();
        return e;
      }, "ToastManagerImpl"),
      c = r("WAWebLoadable")({
        loader: u,
        loading: function () {
          return s.jsx("div", {});
        },
      });
    l.ToastManagerImplLoadable = c;
  },
  98,
);
