__d(
  "WAWebGroupInviteLinkDrawerLoadable",
  [
    "fbt",
    "JSResourceForInteraction",
    "WAWebLazyLoadedRetriable",
    "WAWebLoadable",
    "WAWebLoadingDrawer.react",
    "asyncToGeneratorRuntime",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = r("WAWebLazyLoadedRetriable")(
        n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield r("JSResourceForInteraction")(
            "WAWebGroupInviteLinkDrawer.react",
          )
            .__setRef("WAWebGroupInviteLinkDrawerLoadable")
            .load();
          return e;
        }),
        "GroupInviteLinkDrawer",
      ),
      d = r("WAWebLoadable")({
        loader: c,
        loading: function (t) {
          return u.jsx(r("WAWebLoadingDrawer.react"), {
            title: s._(/*BTDS*/ "Invite to group via link"),
            error: !!t.error,
          });
        },
      });
    ((l.requireBundle = c), (l.GroupInviteLinkDrawerLoadable = d));
  },
  226,
);
