__d(
  "WAWebAccountLinkingNonceFetchAPI",
  [
    "WAWebProtobufsE2E.pb",
    "WAWebSendNonMessageDataRequest",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e = null;
    function s() {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          return (
            e != null ||
              (e = o("WAWebSendNonMessageDataRequest")
                .sendPeerDataOperationRequest(
                  o("WAWebProtobufsE2E.pb").Message$PeerDataOperationRequestType
                    .WAFFLE_LINKING_NONCE_FETCH,
                  {},
                )
                .finally(function () {
                  e = null;
                })),
            e
          );
        })),
        u.apply(this, arguments)
      );
    }
    l.requestNonceFromPrimary = s;
  },
  98,
);
