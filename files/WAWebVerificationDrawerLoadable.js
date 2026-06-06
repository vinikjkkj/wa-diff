__d(
  "WAWebVerificationDrawerLoadable",
  [
    "fbt",
    "JSResourceForInteraction",
    "WAWebLazyLoadedRetriable",
    "WAWebLoadingDrawer.react",
    "react",
    "react-loadable",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = r("WAWebLazyLoadedRetriable")(async function () {
        var e = await r("JSResourceForInteraction")(
          "WAWebVerificationDrawer.react",
        )
          .__setRef("WAWebVerificationDrawerLoadable")
          .load();
        return e;
      }, "VerificationDrawer"),
      d = r("react-loadable")({
        loader: c,
        loading: function (t) {
          return u.jsx(r("WAWebLoadingDrawer.react"), {
            title: s._(/*BTDS*/ "Verify security code"),
            error: !!t.error,
          });
        },
      }),
      m = { requireBundle: c, VerificationDrawerLoadable: d };
    l.default = m;
  },
  226,
);
