__d(
  "WAWebFeedbackIntroNuxModalLoadable",
  [
    "JSResourceForInteraction",
    "WAWebLazyLoadedRetriable",
    "WAWebLoadable",
    "WAWebLoadingConfirmPopup.react",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = r("WAWebLazyLoadedRetriable")(async function () {
        var e = await r("JSResourceForInteraction")(
          "WAWebFeedbackIntroNuxModal.react",
        )
          .__setRef("WAWebFeedbackIntroNuxModalLoadable")
          .load();
        return e;
      }, "FeedbackIntroNuxModal"),
      c = r("WAWebLoadable")({
        loader: u,
        loading: function (t) {
          return t.error
            ? s.jsx(r("WAWebLoadingConfirmPopup.react"), { error: !0 })
            : s.jsx(s.Fragment, {});
        },
      });
    l.FeedbackIntroNuxModalLoadable = c;
  },
  98,
);
