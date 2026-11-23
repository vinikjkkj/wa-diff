__d(
  "WAWebSendUprPaymentRequestModalLoadable",
  [
    "JSResourceForInteraction",
    "WAWebLazyLoadedRetriable",
    "WAWebLoadable",
    "WAWebLoadingModal.react",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = r("WAWebLazyLoadedRetriable")(async function () {
        var e = await r("JSResourceForInteraction")(
          "WAWebSendUprPaymentRequestModal.react",
        )
          .__setRef("WAWebSendUprPaymentRequestModalLoadable")
          .load();
        return e;
      }, "WAWebSendUprPaymentRequestModal"),
      c = r("WAWebLoadable")({
        loader: u,
        loading: function (t) {
          return s.jsx(r("WAWebLoadingModal.react"), { error: !!t.error });
        },
      });
    l.WAWebSendUprPaymentRequestModalLoadable = c;
  },
  98,
);
