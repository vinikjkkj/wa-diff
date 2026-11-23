__d(
  "WAWebSharableEventCreateStepperDialogLoadable",
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
        return r("JSResourceForInteraction")(
          "WAWebSharableEventCreateStepperDialog.react",
        )
          .__setRef("WAWebSharableEventCreateStepperDialogLoadable")
          .load();
      }, "WAWebSharableEventCreateStepperDialog"),
      c = r("WAWebLoadable")({
        loader: u,
        loading: function () {
          return s.jsx("span", {});
        },
      }),
      d = c;
    l.default = d;
  },
  98,
);
