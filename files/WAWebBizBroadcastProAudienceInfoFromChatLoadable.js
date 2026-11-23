__d(
  "WAWebBizBroadcastProAudienceInfoFromChatLoadable",
  [
    "JSResourceForInteraction",
    "WAWebLazyLoadedRetriable",
    "WAWebLoadable",
    "WAWebLoadingDrawer.react",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = r("WAWebLazyLoadedRetriable")(async function () {
        var e = await r("JSResourceForInteraction")(
          "WAWebBizBroadcastProAudienceInfoFromChatTwoPhaseContainer.react",
        )
          .__setRef("WAWebBizBroadcastProAudienceInfoFromChatLoadable")
          .load();
        return e;
      }, "BizBroadcastProAudienceInfoFromChat"),
      c = r("WAWebLoadable")({
        loader: u,
        loading: function (t) {
          return s.jsx(r("WAWebLoadingDrawer.react"), {
            error: !!t.error,
            retry: t.retry,
          });
        },
      });
    l.WAWebBizBroadcastProAudienceInfoFromChatLoadable = c;
  },
  98,
);
