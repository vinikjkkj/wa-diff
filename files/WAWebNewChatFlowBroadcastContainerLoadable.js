__d(
  "WAWebNewChatFlowBroadcastContainerLoadable",
  [
    "JSResourceForInteraction",
    "WALogger",
    "WAWebLazyLoadedRetriable",
    "WAWebLoadable",
    "WAWebLoadingDrawer.react",
    "asyncToGeneratorRuntime",
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
    function d() {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield c.load();
          return e.loadNewChatFlowBroadcastContainer();
        })),
        m.apply(this, arguments)
      );
    }
    var p = r("WAWebLazyLoadedRetriable")(
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
      _ = r("WAWebLoadable")({
        loader: p,
        loading: function (t) {
          return u.jsx(r("WAWebLoadingDrawer.react"), {
            error: !!t.error,
            retry: t.retry,
          });
        },
      });
    l.WAWebNewChatFlowBroadcastContainerLoadable = _;
  },
  98,
);
