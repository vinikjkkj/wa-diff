__d(
  "WAWebGroupsV4InviteFlowLoadable",
  [
    "fbt",
    "JSResourceForInteraction",
    "WAWebLazyLoadedRetriable",
    "WAWebLoadingConfirmPopup.react",
    "asyncToGeneratorRuntime",
    "react",
    "react-loadable",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = r("WAWebLazyLoadedRetriable")(
        n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield r("JSResourceForInteraction")(
            "WAWebGroupsV4InviteFlow.react",
          )
            .__setRef("WAWebGroupsV4InviteFlowLoadable")
            .load();
          return e;
        }),
        "GroupsV4InviteFlow",
      ),
      d = r("react-loadable")({
        loader: c,
        loading: function (t) {
          return u.jsx(r("WAWebLoadingConfirmPopup.react"), {
            okText: s._(/*BTDS*/ "Invite to group"),
            error: !!t.error,
          });
        },
      });
    ((l.requireBundle = c), (l.GroupsV4InviteFlowLoadable = d));
  },
  226,
);
