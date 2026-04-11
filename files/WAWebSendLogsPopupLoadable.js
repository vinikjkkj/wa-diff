__d(
  "WAWebSendLogsPopupLoadable",
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
            "WAWebSendLogsPopup.react",
          )
            .__setRef("WAWebSendLogsPopupLoadable")
            .load();
          return e;
        }),
        "SendLogsPopup",
      ),
      d = r("react-loadable")({
        loader: c,
        loading: function (t) {
          return u.jsx(r("WAWebLoadingConfirmPopup.react"), {
            title: s._(/*BTDS*/ "Contact us"),
            okText: s._(/*BTDS*/ "Send"),
            error: !!t.error,
          });
        },
      });
    ((l.requireBundle = c), (l.SendLogsPopupLoadable = d));
  },
  226,
);
