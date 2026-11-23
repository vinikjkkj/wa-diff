__d(
  "WAWebBizBroadcastProAudienceTooSmallModalLoadable",
  [
    "JSResourceForInteraction",
    "WAWebLazyLoadLoading.react",
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
          "WAWebBizBroadcastProAudienceTooSmallModal.react",
        )
          .__setRef("WAWebBizBroadcastProAudienceTooSmallModalLoadable")
          .load();
        return e;
      }, "BizBroadcastProAudienceTooSmallModal"),
      c = r("WAWebLoadable")({
        loader: u,
        loading: function (t) {
          return s.jsx(r("WAWebLazyLoadLoading.react"), { error: !!t.error });
        },
      });
    l.WAWebBizBroadcastProAudienceTooSmallModalLoadable = c;
  },
  98,
);
