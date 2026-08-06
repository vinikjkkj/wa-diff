__d(
  "WAWebConsumerSharePixPaymentRequestModalLoadable",
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
            "WAWebSendPixPaymentRequestHybridModal.react",
          )
            .__setRef("WAWebConsumerSharePixPaymentRequestModalLoadable")
            .load();
          return e.WAWebSendPixPaymentRequestHybridModal;
        }),
        "WAWebSendPixPaymentRequestHybridModal",
      ),
      c = r("WAWebLoadable")({
        loader: u,
        loading: function (t) {
          return s.jsx(r("WAWebLoadingModal.react"), { error: !!t.error });
        },
      });
    l.WAWebConsumerSharePixPaymentRequestModalLoadable = c;
  },
  98,
);
