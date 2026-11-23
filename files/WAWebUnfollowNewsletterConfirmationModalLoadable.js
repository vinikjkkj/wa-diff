__d(
  "WAWebUnfollowNewsletterConfirmationModalLoadable",
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
          "WAWebUnfollowNewsletterConfirmationModal.react",
        )
          .__setRef("WAWebUnfollowNewsletterConfirmationModalLoadable")
          .load();
        return e.UnfollowNewsletterConfirmationModal;
      }, "UnfollowNewsletterConfirmationModal"),
      c = r("WAWebLoadable")({
        loader: u,
        loading: function (t) {
          return s.jsx(r("WAWebLoadingModal.react"), { error: !!t.error });
        },
      });
    l.UnfollowNewsletterConfirmationModalLoadable = c;
  },
  98,
);
