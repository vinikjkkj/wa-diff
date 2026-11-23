__d(
  "WAWebBusinessBroadcastHomeFlowLoadable",
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
        "WAWebPrepareBusinessBroadcastHomeFlow",
      ).__setRef("WAWebBusinessBroadcastHomeFlowLoadable"),
      d = r("WAWebLazyLoadedRetriable")(async function () {
        var e = await r("JSResourceForInteraction")(
          "WAWebBusinessBroadcastHomeFlow.react",
        )
          .__setRef("WAWebBusinessBroadcastHomeFlowLoadable")
          .load();
        return e;
      }, "BusinessBroadcastHomeFlow"),
      m = r("WAWebLoadable")({
        loader: d,
        loading: function (t) {
          return u.jsx(r("WAWebLoadingDrawer.react"), {
            error: !!t.error,
            retry: t.retry,
          });
        },
      });
    async function p() {
      var e = await c.load();
      return await e.loadBusinessBroadcastHomeFlow();
    }
    var _ = r("WAWebLazyLoadedRetriable")(
        p,
        "RoutedBusinessBroadcastHomeFlow",
        {
          onFinalFailure: function (n) {
            o("WALogger")
              .ERROR(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "Failed to load BB Home",
                  ])),
              )
              .catching(r("getErrorSafe")(n))
              .sendLogs("bb-home-load-failed");
          },
        },
      ),
      f = r("WAWebLoadable")({
        loader: _,
        loading: function (t) {
          return u.jsx(r("WAWebLoadingDrawer.react"), {
            error: !!t.error,
            retry: t.retry,
          });
        },
      });
    ((l.WAWebBusinessBroadcastCoreHomeFlowLoadable = m),
      (l.loadRoutedBusinessBroadcastHomeFlow = p),
      (l.WAWebBusinessBroadcastHomeFlowLoadable = f));
  },
  98,
);
