__d(
  "WAWebNewsletterAdminProfileEditModalLoadable",
  [
    "JSResourceForInteraction",
    "WAWebLazyLoadedRetriable",
    "WAWebLoadable",
    "WAWebLoadingModal.react",
    "WAWebModal.react",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = r("WAWebLazyLoadedRetriable")(async function () {
        var e = await r("JSResourceForInteraction")(
          "WAWebNewsletterAdminProfileEditModal.react",
        )
          .__setRef("WAWebNewsletterAdminProfileEditModalLoadable")
          .load();
        return e;
      }, "WAWebNewsletterAdminProfileEditModal"),
      c = r("WAWebLoadable")({
        loader: u,
        loading: function (t) {
          return s.jsx(r("WAWebLoadingModal.react"), {
            theme: o("WAWebModal.react").ModalTheme.Tower,
            error: !!t.error,
          });
        },
      }),
      d = c;
    l.default = d;
  },
  98,
);
