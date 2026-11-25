__d(
  "WAWebCTWAAdAccountNonceBusinessNotificationHandler",
  [
    "WASmaxBizCtwaAdAccountNonceNotificationRPC",
    "WAWebCTWABizAccessTokenNonceManager",
  ],
  function (t, n, r, o, a, i, l) {
    var e = {
      matches: function (t) {
        return t.hasChild("wa_ad_account_nonce");
      },
      parse: function (t) {
        var e = o(
            "WASmaxBizCtwaAdAccountNonceNotificationRPC",
          ).receiveNonceNotificationRPC(t.node()),
          n = o("WAWebCTWABizAccessTokenNonceManager").castToNonce(
            e.parsedRequest.waAdAccountNonceElementValue,
          );
        return function () {
          return o(
            "WAWebCTWABizAccessTokenNonceManager",
          ).setNonceFromPushNotification(n);
        };
      },
    };
    l.default = e;
  },
  98,
);
