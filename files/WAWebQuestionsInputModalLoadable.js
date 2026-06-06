__d(
  "WAWebQuestionsInputModalLoadable",
  [
    "fbt",
    "JSResourceForInteraction",
    "WAWebLazyLoadedRetriable",
    "WAWebLoadingModal.react",
    "WAWebModal.react",
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
            "WAWebQuestionsInputModal.react",
          )
            .__setRef("WAWebQuestionsInputModalLoadable")
            .load();
          return e.QuestionsInputModal;
        }),
        "QuestionsInputModal",
      ),
      d = r("react-loadable")({
        loader: c,
        loading: function (t) {
          return u.jsx(r("WAWebLoadingModal.react"), {
            theme: o("WAWebModal.react").ModalTheme.Questions,
            title: s._(/*BTDS*/ "Question input modal"),
            error: !!t.error,
          });
        },
      });
    l.QuestionsInputModalLoadable = d;
  },
  226,
);
