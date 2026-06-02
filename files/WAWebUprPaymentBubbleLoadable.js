__d(
  "WAWebUprPaymentBubbleLoadable",
  [
    "JSResourceForInteraction",
    "WAWebLazyLoadedRetriable",
    "WAWebLoadable",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = r("WAWebLazyLoadedRetriable")(async function () {
        var e = await r("JSResourceForInteraction")(
          "WAWebUprPaymentBubble.react",
        )
          .__setRef("WAWebUprPaymentBubbleLoadable")
          .load();
        return e;
      }, "WAWebUprPaymentBubble"),
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
