__d(
  "WAWebBizBroadcastNewChatAudienceFlowResources",
  [
    "JSResourceForInteraction",
    "WAWebLoadable",
    "WAWebLoadingDrawer.react",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = r("JSResourceForInteraction")(
        "WAWebNewChatFlowBroadcastContainer.react",
      ).__setRef("WAWebBizBroadcastNewChatAudienceFlowResources"),
      c = r("JSResourceForInteraction")(
        "WAWebPrepareBizBroadcastProNewChatAudienceFlow",
      ).__setRef("WAWebBizBroadcastNewChatAudienceFlowResources"),
      d = r("WAWebLoadable")({
        loader: function () {
          return u.load();
        },
        loading: function (t) {
          return s.jsx(r("WAWebLoadingDrawer.react"), { error: !!t.error });
        },
      }),
      m = r("WAWebLoadable")({
        loader: async function () {
          var e = await c.load();
          return e.WAWebPrepareBizBroadcastProNewChatAudienceFlow;
        },
        loading: function (t) {
          return s.jsx(r("WAWebLoadingDrawer.react"), { error: !!t.error });
        },
      });
    ((l.coreContainerResource = u),
      (l.proContainerResource = c),
      (l.CoreAudienceFlow = d),
      (l.ProAudienceFlow = m));
  },
  98,
);
