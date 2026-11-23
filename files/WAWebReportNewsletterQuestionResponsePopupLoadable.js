__d(
  "WAWebReportNewsletterQuestionResponsePopupLoadable",
  [
    "JSResourceForInteraction",
    "WAWebLazyLoadedRetriable",
    "WAWebLoadable",
    "WAWebLoadingModal.react",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = r("WAWebLazyLoadedRetriable")(async function () {
        var e = await r("JSResourceForInteraction")(
          "WAWebReportNewsletterQuestionResponsePopup.react",
        )
          .__setRef("WAWebReportNewsletterQuestionResponsePopupLoadable")
          .load();
        return e;
      }, "WAWebReportNewsletterQuestionResponsePopupLoadable"),
      c = r("WAWebLoadable")({
        loader: u,
        loading: function (t) {
          return s.jsx(r("WAWebLoadingModal.react"), { error: !!t.error });
        },
      });
    l.WAWebReportNewsletterQuestionResponsePopupLoadable = c;
  },
  98,
);
