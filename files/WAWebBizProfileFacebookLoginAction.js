__d(
  "WAWebBizProfileFacebookLoginAction",
  [
    "WAWebOIDCBroadcastChannelAdapter",
    "WAWebOIDCCallbackEventBus",
    "WAWebOIDCExchangeToken",
    "WAWebOIDCFlow.react",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = !1;
      function n(n) {
        var a = n.code,
          i = n.state;
        (r(),
          o("WAWebOIDCExchangeToken").exchangeOIDCToken(a, i, function (n) {
            t || e(n);
          }));
      }
      function r() {
        o("WAWebOIDCCallbackEventBus").WAWebOIDCCallbackEventBus.off(
          o("WAWebOIDCCallbackEventBus").OIDCCallbackEvent.OIDC_CALLBACK,
          n,
        );
      }
      return (
        o("WAWebOIDCBroadcastChannelAdapter").ensureInstalled(),
        o("WAWebOIDCCallbackEventBus").WAWebOIDCCallbackEventBus.on(
          o("WAWebOIDCCallbackEventBus").OIDCCallbackEvent.OIDC_CALLBACK,
          n,
        ),
        {
          cancel: function () {
            ((t = !0), r());
          },
          launch: o("WAWebOIDCFlow.react").launchOIDCFlow(),
        }
      );
    }
    l.startFacebookLogin = e;
  },
  98,
);
