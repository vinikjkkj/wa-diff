__d(
  "WAWebPhoneNumberSharingListEditorModalLoadable",
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
      u = r("WAWebLoadable")({
        loader: r("WAWebLazyLoadedRetriable")(async function () {
          return await r("JSResourceForInteraction")(
            "WAWebPhoneNumberSharingListEditorModal.react",
          )
            .__setRef("WAWebPhoneNumberSharingListEditorModalLoadable")
            .load();
        }, "PhoneNumberSharingListEditorModal"),
        loading: function (t) {
          return s.jsx(r("WAWebLoadingModal.react"), { error: !!t.error });
        },
      });
    l.PhoneNumberSharingListEditorModalLoadable = u;
  },
  98,
);
