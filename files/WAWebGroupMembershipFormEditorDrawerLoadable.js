__d(
  "WAWebGroupMembershipFormEditorDrawerLoadable",
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
          "WAWebGroupMembershipFormEditorDrawer.react",
        )
          .__setRef("WAWebGroupMembershipFormEditorDrawerLoadable")
          .load();
        return e;
      }, "GroupMembershipFormEditorDrawer"),
      c = r("WAWebLoadable")({
        loader: u,
        loading: function (t) {
          return s.jsx(r("WAWebLoadingDrawer.react"), {
            error: !!t.error,
            cancellable: !1,
          });
        },
      });
    l.GroupMembershipFormEditorDrawerLoadable = c;
  },
  98,
);
