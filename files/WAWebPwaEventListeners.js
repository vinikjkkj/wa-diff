__d(
  "WAWebPwaEventListeners",
  [
    "WAWebApiParse",
    "WAWebPwaDocumentMetadataUtils",
    "WAWebWamEnumWebcPwaActionType",
    "WAWebWamEnumWebcWebPlatformType",
    "WAWebWamGlobals",
    "WAWebWamPlatform",
    "WAWebWebcPwaEventWamEvent",
  ],
  function (t, n, r, o, a, i, l) {
    function e() {
      window.addEventListener("appinstalled", function () {
        new (o("WAWebWebcPwaEventWamEvent").WebcPwaEventWamEvent)({
          webcPwaAction: o("WAWebWamEnumWebcPwaActionType").WEBC_PWA_ACTION_TYPE
            .INSTALL,
        }).commit();
      });
    }
    function s() {
      window.matchMedia("(display-mode: standalone)").addListener(function () {
        (o("WAWebPwaDocumentMetadataUtils").setDocumentTitle(null),
          o("WAWebPwaDocumentMetadataUtils").setAppBadge(null),
          o("WAWebWamGlobals").Global.set({
            webcWebPlatform: o("WAWebWamEnumWebcWebPlatformType")
              .WEBC_WEB_PLATFORM_TYPE[o("WAWebWamPlatform").getWamPlatform()],
          }));
      });
    }
    function u(e) {
      window.launchQueue != null &&
        window.launchQueue.setConsumer(function (t) {
          var n = t.targetURL;
          n != null && n !== "" && e(n);
        });
    }
    function c(e, t) {
      var n = o("WAWebApiParse").parseCallLink(e);
      if (n == null) return { type: "ignore" };
      var r = t != null ? o("WAWebApiParse").parseCallLink(t) : null;
      return r != null && d(r, n)
        ? { type: "suppress-cold-launch-duplicate" }
        : { type: "exec", cmd: n };
    }
    function d(e, t) {
      return (
        e.data.token === t.data.token &&
        e.data.callType.toLowerCase() === t.data.callType.toLowerCase()
      );
    }
    ((l.registerPwaInstallListener = e),
      (l.registerPwaDisplayModeListener = s),
      (l.registerPwaLaunchQueueConsumer = u),
      (l.resolvePwaLaunchCallLink = c));
  },
  98,
);
