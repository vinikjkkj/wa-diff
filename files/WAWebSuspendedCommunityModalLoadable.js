__d(
  "WAWebSuspendedCommunityModalLoadable",
  [
    "fbt",
    "JSResourceForInteraction",
    "WAWebLazyLoadedRetriable",
    "WAWebLoadingConfirmPopup.react",
    "asyncToGeneratorRuntime",
    "react",
    "react-loadable",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = r("WAWebLazyLoadedRetriable")(
        n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield r("JSResourceForInteraction")(
            "WAWebSuspendedCommunityModal.react",
          )
            .__setRef("WAWebSuspendedCommunityModalLoadable")
            .load();
          return e.SuspendedCommunityModal;
        }),
        "SuspendedCommunityModal",
      ),
      d = r("react-loadable")({
        loader: c,
        loading: function (t) {
          return u.jsx(r("WAWebLoadingConfirmPopup.react"), {
            title: s._(/*BTDS*/ "This community is no longer available"),
            error: !!t.error,
          });
        },
      });
    l.SuspendedCommunityModalLoadable = d;
  },
  226,
);
