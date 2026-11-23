__d(
  "WAWebNewsletterStatusIntroPopupLoadable",
  [
    "JSResourceForInteraction",
    "WAWebLazyLoadLoading.react",
    "WAWebLazyLoadedRetriable",
    "WAWebLoadable",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = r("WAWebLazyLoadedRetriable")(async function () {
        var e = await r("JSResourceForInteraction")(
          "WAWebNewsletterStatusIntroPopup.react",
        )
          .__setRef("WAWebNewsletterStatusIntroPopupLoadable")
          .load();
        return e;
      }, "WAWebNewsletterStatusIntroPopup"),
      c = r("WAWebLoadable")({
        loader: u,
        loading: function (t) {
          return s.jsx(r("WAWebLazyLoadLoading.react"), { error: !!t.error });
        },
      });
    l.WAWebNewsletterStatusIntroPopupLoadable = c;
  },
  98,
);
