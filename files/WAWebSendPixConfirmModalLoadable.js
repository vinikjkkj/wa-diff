__d(
  "WAWebSendPixConfirmModalLoadable",
  [
    "JSResourceForInteraction",
    "WAWebLazyLoadedRetriable",
    "WAWebLoadable",
    "WAWebLoadingModal.react",
    "asyncToGeneratorRuntime",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = r("WAWebLazyLoadedRetriable")(
        n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield r("JSResourceForInteraction")(
            "WAWebSendPixConfirmModal.react",
          )
            .__setRef("WAWebSendPixConfirmModalLoadable")
            .load();
          return e.WAWebSendPixConfirmModal;
        }),
        "WAWebSendPixConfirmModal",
      ),
      c = r("WAWebLoadable")({
        loader: u,
        loading: function (t) {
          return s.jsx(r("WAWebLoadingModal.react"), { error: !!t.error });
        },
      });
    l.WAWebSendPixConfirmModalLoadable = c;
  },
  98,
);
