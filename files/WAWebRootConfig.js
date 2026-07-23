__d(
  "WAWebRootConfig",
  [
    "CometRootInitClient",
    "ErrorPubSub",
    "WAWebAppBootstrap",
    "WAWebCometBuildRoot",
    "requireDeferred",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = r("requireDeferred")("CometErrorDialog").__setRef("WAWebRootConfig"),
      u = r("requireDeferred")("CometRootDeferredShared").__setRef(
        "WAWebRootConfig",
      ),
      c = {
        DeferredRoot: u,
        buildRootComponent: o("WAWebCometBuildRoot").buildRootComponent,
        initClient: o("CometRootInitClient").makeInitClient({
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
        initDarkMode: null,
        strictModeEnabled: !1,
      },
      d = c;
    l.default = d;
  },
  98,
);
