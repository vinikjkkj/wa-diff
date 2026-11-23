__d(
  "WAWebInlineGroupPermissionsHostLoadable",
  [
    "fbt",
    "JSResourceForInteraction",
    "WAWebLazyLoadedRetriable",
    "WAWebLoadable",
    "WAWebLoadingModal.react",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = r("WAWebLazyLoadedRetriable")(async function () {
        return r("JSResourceForInteraction")(
          "WAWebInlineGroupPermissionsHost.react",
        )
          .__setRef("WAWebInlineGroupPermissionsHostLoadable")
          .load();
      }, "InlineGroupPermissions"),
      d = r("WAWebLoadable")({
        loader: c,
        loading: function (t) {
          return u.jsx(r("WAWebLoadingModal.react"), {
            title: s._(/*BTDS*/ ""),
            error: !!t.error,
            retry: t.retry,
          });
        },
      });
    l.WAWebInlineGroupPermissionsHostLoadable = d;
  },
  226,
);
