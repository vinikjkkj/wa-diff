__d(
  "WAWebExportChatModalLoadable",
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
            "WAWebExportChatModal.react",
          )
            .__setRef("WAWebExportChatModalLoadable")
            .load();
          return e;
        }),
        "ExportChatModal",
      ),
      d = r("react-loadable")({
        loader: c,
        loading: function (t) {
          return u.jsx(r("WAWebLoadingModal.react"), {
            title: s._(/*BTDS*/ "Export chat"),
            error: !!t.error,
            theme: o("WAWebModal.react").ModalTheme.ExportChat,
          });
        },
      });
    ((l.requireBundle = c), (l.ExportChatModalLoadable = d));
  },
  226,
);
