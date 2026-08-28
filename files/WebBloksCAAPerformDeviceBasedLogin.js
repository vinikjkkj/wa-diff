__d(
  "WebBloksCAAPerformDeviceBasedLogin",
  [
    "CAAWebBloksQPLUtils",
    "CAAWebBloksUrlUtils",
    "WebBloksErrors",
    "WebBloksScriptDebuggingUtils",
    "WebBloksURLUtils",
    "XAsyncRequest",
    "XMobileWebDeviceBasedLoginValidatePinAsyncControllerRouteBuilder",
    "cr:8959",
    "getErrorSafe",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, a, i, l, s, u, c) {
      var d = r(
        "XMobileWebDeviceBasedLoginValidatePinAsyncControllerRouteBuilder",
      ).buildURL({});
      new (r("XAsyncRequest"))(d)
        .setMethod("POST")
        .setAutoProcess(!1)
        .setData({
          flow: a,
          next: i,
          uid: t,
          waterfall_id: u,
          event_request_id: c,
        })
        .setHandler(function (t) {
          var i,
            u = t.payload.dtsg_config,
            c = (i = t.payload.payload) != null ? i : t.payload;
          a !== "saved_account_login_no_pin_fblox" &&
            n("cr:8959").setTokenConfig(u);
          try {
            c.failure_flow
              ? (r("justknobx")._("3049") ||
                  o("CAAWebBloksQPLUtils").getQPLMarkerEndLoginTTIFail(
                    "Nonce",
                    "AccountsYouMayHave",
                    "generic_error_dialog",
                  ),
                e.execute(l, [c.failure_flow]))
              : (o("CAAWebBloksQPLUtils").getQPLMarkerEndLoginTTISuccess(
                  "Nonce",
                  "AccountsYouMayHave",
                ),
                e.execute(s, []),
                a === "auto_login_mweb"
                  ? o("WebBloksURLUtils").openURL(
                      o("CAAWebBloksUrlUtils").addAutoLoginQueryParam(c.next),
                    )
                  : o("WebBloksURLUtils").openURL(
                      o("CAAWebBloksUrlUtils").addAppDeeplinkBlockingQueryParam(
                        c.next,
                      ),
                    ));
          } catch (t) {
            (o("WebBloksScriptDebuggingUtils").logScriptError(
              e.bloksContext.objectSet,
              new (o("WebBloksErrors").WebBloksScriptError)(
                r("getErrorSafe")(t).message,
                e,
              ),
              l,
              e,
            ),
              o("CAAWebBloksQPLUtils").getQPLMarkerEndLoginTTIFail(
                "Nonce",
                "AccountsYouMayHave",
                "generic_error_dialog",
              ),
              o("WebBloksURLUtils").openURL(
                o("CAAWebBloksUrlUtils").addAppDeeplinkBlockingQueryParam("/"),
              ));
          }
        })
        .send();
    }
    l.default = e;
  },
  98,
);
