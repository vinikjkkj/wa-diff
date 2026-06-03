__d(
  "WAWebContactUsModalLoadable",
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
            "WAWebContactUsModal.react",
          )
            .__setRef("WAWebContactUsModalLoadable")
            .load();
          return e;
        }),
        "ContactUsModal",
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
    l.ContactUsModalLoadable = d;
  },
  226,
);
