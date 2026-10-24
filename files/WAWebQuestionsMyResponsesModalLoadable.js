__d(
  "WAWebQuestionsMyResponsesModalLoadable",
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
          return r("JSResourceForInteraction")(
            "WAWebQuestionsMyResponsesModal.react",
          )
            .__setRef("WAWebQuestionsMyResponsesModalLoadable")
            .load();
        }),
        "MyQuestionResponsesModal",
      ),
      d = r("react-loadable")({
        loader: c,
        loading: function (t) {
          return u.jsx(r("WAWebLoadingModal.react"), {
            theme: o("WAWebModal.react").ModalTheme.MyQuestionResponses,
            title: s._(/*BTDS*/ "Your responses"),
            error: !!t.error,
          });
        },
      });
    l.MyQuestionResponsesModalLoadable = d;
  },
  226,
);
