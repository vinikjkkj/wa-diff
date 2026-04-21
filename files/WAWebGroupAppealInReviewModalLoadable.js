__d(
  "WAWebGroupAppealInReviewModalLoadable",
  [
    "JSResourceForInteraction",
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
            "WAWebGroupAppealInReviewModal.react",
          )
            .__setRef("WAWebGroupAppealInReviewModalLoadable")
            .load();
          return e;
        }),
        "GroupAppealInReviewModal",
      ),
      c = r("WAWebLoadable")({
        loader: u,
        loading: function () {
          return s.jsx(s.Fragment, {});
        },
      });
    l.GroupAppealInReviewModalLoadable = c;
  },
  98,
);
