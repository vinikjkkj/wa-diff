__d(
  "WAWebDeleteNewsletterQuestionResponsePopupLoadable",
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
          "WAWebDeleteNewsletterQuestionResponsePopup.react",
        )
          .__setRef("WAWebDeleteNewsletterQuestionResponsePopupLoadable")
          .load();
        return e;
      }, "WAWebDeleteNewsletterQuestionResponsePopupLoadable"),
      c = r("WAWebLoadable")({
        loader: u,
        loading: function (t) {
          return s.jsx(r("WAWebLoadingModal.react"), { error: !!t.error });
        },
      });
    l.WAWebDeleteNewsletterQuestionResponsePopupLoadable = c;
  },
  98,
);
