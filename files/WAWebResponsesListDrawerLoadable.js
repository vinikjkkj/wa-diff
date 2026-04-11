__d(
  "WAWebResponsesListDrawerLoadable",
  [
    "fbt",
    "JSResourceForInteraction",
    "WAWebLazyLoadedRetriable",
    "WAWebLoadingDrawer.react",
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
            "WAWebResponsesListDrawer.react",
          )
            .__setRef("WAWebResponsesListDrawerLoadable")
            .load();
          return e.ResponsesListDrawer;
        }),
        "ResponsesListDrawer",
      ),
      d = r("react-loadable")({
        loader: c,
        loading: function (t) {
          return u.jsx(r("WAWebLoadingDrawer.react"), {
            title: s._(/*BTDS*/ "Responses list"),
            error: !!t.error,
          });
        },
      });
    l.ResponsesListDrawerLoadable = d;
  },
  226,
);
