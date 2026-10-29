__d(
  "WAWebSharableEventGuestListFlowLoadable",
  [
    "JSResourceForInteraction",
    "WAWebLazyLoadedRetriable",
    "WAWebLoadable",
    "WAWebLoadingDrawer.react",
    "asyncToGeneratorRuntime",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = r("WAWebLazyLoadedRetriable")(
        n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          return r("JSResourceForInteraction")(
            "WAWebSharableEventGuestListFlow.react",
          )
            .__setRef("WAWebSharableEventGuestListFlowLoadable")
            .load();
        }),
        "WAWebSharableEventGuestListFlow",
      ),
      c = r("WAWebLoadable")({
        loader: u,
        loading: function (t) {
          return s.jsx(r("WAWebLoadingDrawer.react"), {
            error: !!t.error,
            cancellable: !1,
          });
        },
      }),
      d = c;
    l.default = d;
  },
  98,
);
