__d(
  "WAWebQuestionsCreateResponseModalLoadable",
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
            "WAWebQuestionsCreateResponseModal.react",
          )
            .__setRef("WAWebQuestionsCreateResponseModalLoadable")
            .load();
          return e.CreateQuestionResponseModal;
        }),
        "CreateQuestionResponseModal",
      ),
      d = r("react-loadable")({
        loader: c,
        loading: function (t) {
          return u.jsx(r("WAWebLoadingModal.react"), {
            theme: o("WAWebModal.react").ModalTheme.Questions,
            title: s._(/*BTDS*/ "Response modal"),
            error: !!t.error,
          });
        },
      });
    l.CreateQuestionResponseModalLoadable = d;
  },
  226,
);
