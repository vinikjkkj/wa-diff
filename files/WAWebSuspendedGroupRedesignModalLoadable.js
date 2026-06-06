__d(
  "WAWebSuspendedGroupRedesignModalLoadable",
  [
    "JSResourceForInteraction",
    "WAWebLazyLoadedRetriable",
    "WAWebLoadable",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = r("WAWebLazyLoadedRetriable")(async function () {
        var e = await r("JSResourceForInteraction")(
          "WAWebSuspendedGroupRedesignModal.react",
        )
          .__setRef("WAWebSuspendedGroupRedesignModalLoadable")
          .load();
        return e;
      }, "SuspendedGroupRedesignModal"),
      c = r("WAWebLoadable")({
        loader: u,
        loading: function () {
          return s.jsx(s.Fragment, {});
        },
      });
    l.SuspendedGroupRedesignModalLoadable = c;
  },
  98,
);
