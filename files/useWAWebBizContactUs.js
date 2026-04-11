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
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = e,
      d = c.useCallback,
      m = c.useState;
    function p(e, t, a) {
      var i = o("react-compiler-runtime").c(7),
        l = m(!1),
        s = l[0],
        u = l[1],
        c = _,
        d;
      i[0] !== e || i[1] !== t || i[2] !== a
        ? ((d = function () {
            var i;
            ((i = o("WAWebBizAdManagementLogger")).logManageAdsScreenAction(
              i.LWI_SCREEN_REFERENCE.LWI_SCREEN_PERFORMANCE,
              i.LWI_SCREEN_ACTION.LWI_ACTION_CONTACT_US_TAPPED,
              i.LWI_ADS_IDENTITY_TYPE.PAGE,
              e,
              null,
              JSON.stringify({ pageId: t }),
            ),
              u(!0),
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
                        : c(),
                        u(!1));
                    })
                    .catch(function (e) {
                      (r("FBLogger")("wa_ctwa_web")
                        .catching(r("getErrorSafe")(e))
                        .mustfix("Contact us support request failed"),
                        c(),
                        u(!1));
                    });
                } catch (e) {
                  var t = e;
                  (r("FBLogger")("wa_ctwa_web")
                    .catching(r("getErrorSafe")(t))
                    .mustfix("Contact us flow threw unexpectedly"),
                    c(),
                    u(!1));
                }
              })());
          }),
          (i[0] = e),
          (i[1] = t),
          (i[2] = a),
          (i[3] = d))
        : (d = i[3]);
      var p = d,
        f;
      return (
        i[4] !== p || i[5] !== s
          ? ((f = [p, s]), (i[4] = p), (i[5] = s), (i[6] = f))
          : (f = i[6]),
        f
      );
    }
    function _() {
      o("WAWebToastManager").ToastManager.open(
        u.jsx(o("WAWebToast.react").Toast, {
          msg: s._(/*BTDS*/ "Failed to send notification. Please try again."),
          id: o("WAWebToast.react").genId(),
        }),
      );
    }
    l.default = p;
  },
  226,
);
