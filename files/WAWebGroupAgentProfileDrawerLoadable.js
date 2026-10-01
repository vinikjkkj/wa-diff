__d(
  "WAWebGroupAgentProfileDrawerLoadable",
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
            "WAWebGroupAgentProfileDrawer.react",
          )
            .__setRef("WAWebGroupAgentProfileDrawerLoadable")
            .load();
          return e;
        }),
        "GroupAgentProfileDrawer",
      ),
      d = r("WAWebLoadable")({
        loader: c,
        loading: function (t) {
          return u.jsx(r("WAWebLoadingDrawer.react"), {
            title: s._(/*BTDS*/ "Contact info"),
            error: !!t.error,
          });
        },
      });
    l.GroupAgentProfileDrawerLoadable = d;
  },
  226,
);
