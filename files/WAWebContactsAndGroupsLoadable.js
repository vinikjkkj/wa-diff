__d(
  "WAWebContactsAndGroupsLoadable",
  [
    "JSResourceForInteraction",
    "WAWebLazyLoadedRetriable",
    "WAWebLoadable",
    "WAWebLoadingDrawer.react",
    "WAWebNoop",
    "asyncToGeneratorRuntime",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = r("WAWebLazyLoadedRetriable")(
        n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield r("JSResourceForInteraction")(
            "WAWebContactsAndGroups.react",
          )
            .__setRef("WAWebContactsAndGroupsLoadable")
            .load();
          return e;
        }),
        "ContactsAndGroups",
      ),
      c = r("WAWebLoadable")({
        loader: u,
        loading: function (t) {
          return s.jsx(r("WAWebLoadingDrawer.react"), { error: !!t.error });
        },
      });
    function d() {
      u().catch(r("WAWebNoop"));
    }
    ((l.WAWebContactsAndGroupsLoadable = c), (l.preloadContactsAndGroups = d));
  },
  98,
);
