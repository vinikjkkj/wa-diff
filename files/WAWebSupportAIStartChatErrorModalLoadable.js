__d(
  "WAWebSupportAIStartChatErrorModalLoadable",
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
            "WAWebSupportAIStartChatErrorModal.react",
          )
            .__setRef("WAWebSupportAIStartChatErrorModalLoadable")
            .load();
          return e;
        }),
        "StartAISupportChatErrorModal",
      ),
      d = r("react-loadable")({
        loader: c,
        loading: function (t) {
          return u.jsx(r("WAWebLoadingConfirmPopup.react"), {
            okText: s._(/*BTDS*/ "Contact via email"),
            error: !!t.error,
          });
        },
      });
    l.SupportAIStartChatErrorModalLoadable = d;
  },
  226,
);
