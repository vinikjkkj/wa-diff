__d(
  "WAWebExistingGroupPermissionsDrawerLoadable",
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
          "WAWebExistingGroupPermissionsDrawer.react",
        )
          .__setRef("WAWebExistingGroupPermissionsDrawerLoadable")
          .load();
        return e;
      }, "ExistingGroupPermissionsDrawer"),
      c = r("WAWebLoadable")({
        loader: u,
        loading: function (t) {
          return s.jsx(r("WAWebLoadingDrawer.react"), {
            error: !!t.error,
            cancellable: !1,
          });
        },
      });
    l.ExistingGroupPermissionsDrawerLoadable = c;
  },
  98,
);
