__d(
  "WAWebPwaEventListeners",
  [
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
    ((l.registerPwaInstallListener = e),
      (l.registerPwaDisplayModeListener = s));
  },
  98,
);
