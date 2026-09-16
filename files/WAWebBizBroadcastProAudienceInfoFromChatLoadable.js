__d(
  "WAWebBizBroadcastProAudienceInfoFromChatLoadable",
  [
    "JSResourceForInteraction",
    "WAWebLazyLoadedRetriable",
    "WAWebLoadable",
    "WAWebLoadingDrawer.react",
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
            "WAWebBizBroadcastProAudienceInfoFromChatTwoPhaseContainer.react",
          )
            .__setRef("WAWebBizBroadcastProAudienceInfoFromChatLoadable")
            .load();
          return e;
        }),
        "BizBroadcastProAudienceInfoFromChat",
      ),
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
