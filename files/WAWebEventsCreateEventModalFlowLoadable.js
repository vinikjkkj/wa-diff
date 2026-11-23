__d(
  "WAWebEventsCreateEventModalFlowLoadable",
  [
    "JSResourceForInteraction",
    "WAWebLazyLoadedRetriable",
    "WAWebLoadable",
    "WAWebLoadingModal.react",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = r("WAWebLazyLoadedRetriable")(async function () {
        var e = await r("JSResourceForInteraction")(
          "WAWebEventsCreateEventModalFlow.react",
        )
          .__setRef("WAWebEventsCreateEventModalFlowLoadable")
          .load();
        return e;
      }, "EventsCreateEventModalFlow"),
      c = r("WAWebLoadable")({
        loader: u,
        loading: function (t) {
          return s.jsx(r("WAWebLoadingModal.react"), { error: !!t.error });
        },
      });
    l.EventsCreateEventModalFlowLoadable = c;
  },
  98,
);
