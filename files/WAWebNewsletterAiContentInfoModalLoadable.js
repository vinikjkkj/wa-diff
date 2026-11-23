__d(
  "WAWebNewsletterAiContentInfoModalLoadable",
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
          "WAWebNewsletterAiContentInfoModal.react",
        )
          .__setRef("WAWebNewsletterAiContentInfoModalLoadable")
          .load();
        return e;
      }, "WAWebNewsletterAiContentInfoModal"),
      c = r("WAWebLoadable")({
        loader: u,
        loading: function (t) {
          return s.jsx(r("WAWebLoadingModal.react"), { error: !!t.error });
        },
      });
    l.NewsletterAiContentInfoModalLoadable = c;
  },
  98,
);
