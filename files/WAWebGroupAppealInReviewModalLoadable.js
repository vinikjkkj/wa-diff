__d(
  "WAWebGroupAppealInReviewModalLoadable",
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
          "WAWebGroupAppealInReviewModal.react",
        )
          .__setRef("WAWebGroupAppealInReviewModalLoadable")
          .load();
        return e;
      }, "GroupAppealInReviewModal"),
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
