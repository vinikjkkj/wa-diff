__d(
  "WAWebGroupsV4InviteModalLoadable",
  [
    "fbt",
    "JSResourceForInteraction",
    "WAWebLazyLoadedRetriable",
    "WAWebLoadable",
    "WAWebLoadingModal.react",
    "asyncToGeneratorRuntime",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = r("WAWebLazyLoadedRetriable")(
        n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield r("JSResourceForInteraction")(
            "WAWebGroupsV4InviteModal.react",
          )
            .__setRef("WAWebGroupsV4InviteModalLoadable")
            .load();
          return e;
        }),
        "GroupsV4InviteModal",
      ),
      d = r("WAWebLoadable")({
        loader: c,
        loading: function (t) {
          return u.jsx(r("WAWebLoadingModal.react"), {
            title: s._(/*BTDS*/ "Group invite"),
            error: !!t.error,
          });
        },
      });
    l.GroupsV4InviteModalLoadable = d;
  },
  226,
);
