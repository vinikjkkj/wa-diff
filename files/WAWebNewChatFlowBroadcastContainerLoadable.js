__d(
  "WAWebNewChatFlowBroadcastContainerLoadable",
  [
    "JSResourceForInteraction",
    "WALogger",
    "WAWebLazyLoadedRetriable",
    "WAWebLoadable",
    "WAWebLoadingDrawer.react",
    "getErrorSafe",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = s || (s = o("react")),
      c = r("JSResourceForInteraction")(
        "WAWebPrepareNewChatFlowBroadcastContainer",
      ).__setRef("WAWebNewChatFlowBroadcastContainerLoadable");
    async function d() {
      var e = await c.load();
      return e.loadNewChatFlowBroadcastContainer();
    }
    var m = r("WAWebLazyLoadedRetriable")(
        d,
        "RoutedNewChatFlowBroadcastContainer",
        {
          onFinalFailure: function (n) {
            o("WALogger")
              .ERROR(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "Failed to load New Chat audience management",
                  ])),
              )
              .catching(r("getErrorSafe")(n))
              .sendLogs("new-chat-broadcast-container-load-failed");
          },
        },
      ),
      p = r("WAWebLoadable")({
        loader: m,
        loading: function (t) {
          return u.jsx(r("WAWebLoadingDrawer.react"), {
            error: !!t.error,
            retry: t.retry,
          });
        },
      });
    l.WAWebNewChatFlowBroadcastContainerLoadable = p;
  },
  98,
);
