__d(
  "ZenonDGWSharedWorkerUtils",
  [
    "CurrentUser",
    "DGWEnvUtil",
    "DGWWebConfig",
    "FBLogger",
    "JSResourceForInteraction",
    "ZenonDGWLogger",
    "ZenonDeviceId",
    "ZenonSharedWorkerPortManager",
    "ZenonSignalingSharedWorkerPortSingleton",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
    "promiseDone",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("JSResourceForInteraction")(
      "ZenonSharedWorkerProxyMessageSender",
    ).__setRef("ZenonDGWSharedWorkerUtils");
    function s(t, a, i) {
      r("promiseDone")(
        o("ZenonSignalingSharedWorkerPortSingleton")
          .createOrGetSharedWorkerPort(t, "signaling")
          .then(
            (function () {
              var t = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* (t) {
                  var r = t.port,
                    o = n("ZenonSharedWorkerPortManager"),
                    l = o.setSharedWorkerPort;
                  (l(r), u(r));
                  var s = yield e.load();
                  (a.addMessageSender(new s(r)), i == null || i(r));
                },
              );
              return function (e) {
                return t.apply(this, arguments);
              };
            })(),
          )
          .catch(function (e) {
            (o("ZenonDGWLogger").logDGWCheckpoint(
              "[SW] SW_SETUP_FAILED: context=" + t + " error=" + String(e),
            ),
              r("FBLogger")("rpweb")
                .catching(r("getErrorSafe")(e))
                .mustfix("Failed to setup shared worker connection"));
          }),
      );
    }
    function u(e) {
      try {
        var t = n("DGWWebConfig"),
          a = n("DGWEnvUtil"),
          i = n("CurrentUser"),
          l = {
            appId: t.appId,
            appVersion: t.appVersion,
            authToken: a.getDGWAuthToken(),
            authType: a.getDGWAuthType(),
            deviceId: o("ZenonDeviceId").getSignalingDeviceId(),
            dgwVersion: a.getDGWVersion(),
            endpoint: a.getDGWEndpoint(),
            fbId: i.getID(),
            isUserLoggedIn: i.isLoggedInNow(),
          };
        e.postMessage({ config: l, type: "INIT_DGW_CONFIG" });
      } catch (e) {
        (o("ZenonDGWLogger").logDGWCheckpoint(
          "[SW] SW_DGW_CONFIG_SEND_FAILED: " + String(e),
        ),
          r("FBLogger")("rpweb")
            .catching(r("getErrorSafe")(e))
            .mustfix(
              "Error processing sending DGWClientConfig to Shared Worker: ",
              String(e),
            ));
      }
    }
    l.setupDGWSharedWorker = s;
  },
  98,
);
