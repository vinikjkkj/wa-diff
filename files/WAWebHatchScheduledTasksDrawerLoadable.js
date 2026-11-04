__d(
  "WAWebHatchScheduledTasksDrawerLoadable",
  [
    "JSResourceForInteraction",
    "WAWebHatchLoadingDrawer.react",
    "WAWebLazyLoadedRetriable",
    "WAWebLoadable",
    "asyncToGeneratorRuntime",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = r("WAWebLazyLoadedRetriable")(
        n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield r("JSResourceForInteraction")(
            "WAWebHatchScheduledTasksFlow.react",
          )
            .__setRef("WAWebHatchScheduledTasksDrawerLoadable")
            .load();
          return e;
        }),
        "WAWebHatchScheduledTasksFlow",
      ),
      c = r("WAWebLoadable")({
        loader: u,
        loading: function (t) {
          return s.jsx(r("WAWebHatchLoadingDrawer.react"), {
            error: !!t.error,
          });
        },
        renderLoadingImmediately: !0,
      });
    l.WAWebHatchScheduledTasksDrawerLoadable = c;
  },
  98,
);
