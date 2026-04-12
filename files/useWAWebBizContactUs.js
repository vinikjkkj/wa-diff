__d(
  "useWAWebBizContactUs",
  [
    "fbt",
    "FBLogger",
    "WAPromiseRaceAbort",
    "WAWebBizAdManagementLogger",
    "WAWebDrawerManager",
    "WAWebLoggerDebugInfo",
    "WAWebSendSupportRequestJob",
    "WAWebSupportChatUtils",
    "WAWebToast.react",
    "WAWebToastManager",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = e,
      d = c.useCallback,
      m = c.useState;
    function p(e, t, a) {
      var i = m(!1),
        l = i[0],
        c = i[1],
        p = d(function () {
          o("WAWebToastManager").ToastManager.open(
            u.jsx(o("WAWebToast.react").Toast, {
              msg: s._(
                /*BTDS*/ "Failed to send notification. Please try again.",
              ),
              id: o("WAWebToast.react").genId(),
            }),
          );
        }, []),
        _ = d(
          function () {
            var i;
            ((i = o("WAWebBizAdManagementLogger")).logManageAdsScreenAction(
              i.LWI_SCREEN_REFERENCE.LWI_SCREEN_PERFORMANCE,
              i.LWI_SCREEN_ACTION.LWI_ACTION_CONTACT_US_TAPPED,
              i.LWI_ADS_IDENTITY_TYPE.PAGE,
              e,
              null,
              JSON.stringify({ pageId: t }),
            ),
              c(!0),
              n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                try {
                  var e = yield o("WAWebLoggerDebugInfo").getDebugInfo({
                    convertFields: !0,
                    addUserAgentDetails: !0,
                  });
                  r("WAPromiseRaceAbort")(
                    o("WAWebSendSupportRequestJob").sendSupportRequest(
                      "#ad-creation",
                      JSON.stringify(e),
                    ),
                    a,
                  )
                    .then(function (e) {
                      (e.message != null &&
                      e.groupId !== void 0 &&
                      e.groupId.includes("@s.whatsapp.net")
                        ? (o(
                            "WAWebDrawerManager",
                          ).DrawerManager.closeDrawerFullscreen(),
                          o("WAWebSupportChatUtils").openSupportChat(e.groupId))
                        : p(),
                        c(!1));
                    })
                    .catch(function (e) {
                      (r("FBLogger")("wa_ctwa_web")
                        .catching(r("getErrorSafe")(e))
                        .mustfix("Contact us support request failed"),
                        p(),
                        c(!1));
                    });
                } catch (e) {
                  (r("FBLogger")("wa_ctwa_web")
                    .catching(r("getErrorSafe")(e))
                    .mustfix("Contact us flow threw unexpectedly"),
                    p(),
                    c(!1));
                }
              })());
          },
          [e, t, p, a],
        );
      return [_, l];
    }
    l.default = p;
  },
  226,
);
