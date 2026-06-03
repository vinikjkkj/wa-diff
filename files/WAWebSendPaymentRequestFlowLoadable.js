__d(
  "WAWebSendPaymentRequestFlowLoadable",
  [
    "JSResourceForInteraction",
    "WAWebLazyLoadedRetriable",
    "WAWebLoadingModal.react",
    "asyncToGeneratorRuntime",
    "react",
    "react-loadable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = r("WAWebLazyLoadedRetriable")(
        n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield r("JSResourceForInteraction")(
            "WAWebSendPaymentRequestFlow.react",
          )
            .__setRef("WAWebSendPaymentRequestFlowLoadable")
            .load();
          return e;
        }),
        "SendPaymentRequestFlow",
      ),
      c = r("react-loadable")({
        loader: u,
        loading: function (t) {
          return s.jsx(r("WAWebLoadingModal.react"), { error: !!t.error });
        },
      });
    ((l.requireBundle = u), (l.SendPaymentRequestFlowLoadable = c));
  },
  98,
);
