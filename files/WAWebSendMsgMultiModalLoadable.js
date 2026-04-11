__d(
  "WAWebSendMsgMultiModalLoadable",
  [
    "fbt",
    "JSResourceForInteraction",
    "WAWebLazyLoadedRetriable",
    "WAWebLoadingModal.react",
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
            "WAWebSendMsgMultiModal.react",
          )
            .__setRef("WAWebSendMsgMultiModalLoadable")
            .load();
          return e;
        }),
        "SendMsgMultiModal",
      ),
      d = r("react-loadable")({
        loader: c,
        loading: function (t) {
          return u.jsx(r("WAWebLoadingModal.react"), {
            title: s._(/*BTDS*/ "Send message to"),
            error: !!t.error,
          });
        },
      });
    ((l.requireBundle = c), (l.SendMsgMultiModalLoadable = d));
  },
  226,
);
