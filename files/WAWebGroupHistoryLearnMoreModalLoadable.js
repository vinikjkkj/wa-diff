__d(
  "WAWebGroupHistoryLearnMoreModalLoadable",
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
            "WAWebGroupHistoryLearnMoreModal.react",
          )
            .__setRef("WAWebGroupHistoryLearnMoreModalLoadable")
            .load();
          return e;
        }),
        "GroupHistoryLearnMoreModal",
      ),
      d = r("react-loadable")({
        loader: c,
        loading: function (t) {
          return u.jsx(r("WAWebLoadingConfirmPopup.react"), {
            title: s._(/*BTDS*/ "Group message history"),
            error: !!t.error,
          });
        },
      });
    l.GroupHistoryLearnMoreModalLoadable = d;
  },
  226,
);
