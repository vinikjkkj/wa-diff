__d(
  "WAWebHatchScheduledTasksDrawerLoadable",
  [
    "JSResourceForInteraction",
    "WAWebHatchLoadingDrawer.react",
    "WAWebLazyLoadedRetriable",
    "WAWebLoadable",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = r("WAWebLazyLoadedRetriable")(async function () {
        var e = await r("JSResourceForInteraction")(
          "WAWebHatchScheduledTasksFlow.react",
        )
          .__setRef("WAWebHatchScheduledTasksDrawerLoadable")
          .load();
        return e;
      }, "WAWebHatchScheduledTasksFlow"),
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
