__d(
  "WAWebRootConfig",
  [
    "CometRootInitClient",
    "ErrorPubSub",
    "WAWebAppBootstrap",
    "WAWebCometBuildRoot",
    "justknobx",
    "requireDeferred",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = r("requireDeferred")("CometErrorDialog").__setRef("WAWebRootConfig"),
      u = r("requireDeferred")("CometRootDeferredShared").__setRef(
        "WAWebRootConfig",
      ),
      c = o("CometRootInitClient").makeInitClient({
        postInit: [
          function () {
            return void o("WAWebAppBootstrap").bootstrapApp();
          },
          function () {
            s.onReady(function (t) {
              return (e || (e = r("ErrorPubSub"))).removeListener(
                t.errorListener,
              );
            });
          },
        ],
      }),
      d = {
        DeferredRoot: u,
        buildRootComponent: function (t, n) {
          return o("WAWebCometBuildRoot").buildRootComponent(t, n, p());
        },
        disableVisualCompletion: o("WAWebCometBuildRoot").isLeanRouterRoot(),
        initClient: function (t) {
          return p() ? void o("WAWebAppBootstrap").bootstrapApp() : c(t);
        },
        initDarkMode: null,
        strictModeEnabled: !1,
      },
      m = d;
    function p() {
      return r("justknobx")._("6879");
    }
    l.default = m;
  },
  98,
);
