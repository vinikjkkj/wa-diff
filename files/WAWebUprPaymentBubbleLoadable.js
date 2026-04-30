__d(
  "WAWebUprPaymentBubbleLoadable",
  [
    "JSResourceForInteraction",
    "WAWebLazyLoadedRetriable",
    "WAWebLoadable",
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
            "WAWebUprPaymentBubble.react",
          )
            .__setRef("WAWebUprPaymentBubbleLoadable")
            .load();
          return e;
        }),
        "WAWebUprPaymentBubble",
      ),
      c = r("WAWebLoadable")({
        loader: u,
        loading: function () {
          return s.jsx(s.Fragment, {});
        },
      });
    l.WAWebUprPaymentBubbleLoadable = c;
  },
  98,
);
