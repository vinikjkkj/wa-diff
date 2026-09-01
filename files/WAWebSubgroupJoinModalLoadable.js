__d(
  "WAWebSubgroupJoinModalLoadable",
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
            "WAWebSubgroupJoinModal.react",
          )
            .__setRef("WAWebSubgroupJoinModalLoadable")
            .load();
          return e;
        }),
        "SubgroupJoinModal",
      ),
      d = r("WAWebLoadable")({
        loader: c,
        loading: function (t) {
          return u.jsx(r("WAWebLoadingModal.react"), {
            title: s._(/*BTDS*/ "Join group"),
            error: !!t.error,
          });
        },
      });
    l.SubgroupJoinModalLoadable = d;
  },
  226,
);
