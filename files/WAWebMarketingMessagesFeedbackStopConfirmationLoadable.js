__d(
  "WAWebMarketingMessagesFeedbackStopConfirmationLoadable",
  [
    "JSResourceForInteraction",
    "WAWebLazyLoadLoading.react",
    "WAWebLazyLoadedRetriable",
    "react",
    "react-loadable",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = r("WAWebLazyLoadedRetriable")(async function () {
        var e = await r("JSResourceForInteraction")(
          "WAWebMarketingMessagesFeedbackStopConfirmation.react",
        )
          .__setRef("WAWebMarketingMessagesFeedbackStopConfirmationLoadable")
          .load();
        return e;
      }, "WAWebMarketingMessagesFeedbackStopConfirmation"),
      c = r("react-loadable")({
        loader: u,
        loading: function (t) {
          return s.jsx(r("WAWebLazyLoadLoading.react"), { error: !!t.error });
        },
      });
    l.WAWebMarketingMessagesFeedbackStopConfirmationLoadable = c;
  },
  98,
);
