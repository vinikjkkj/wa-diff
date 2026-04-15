__d(
  "WAWebAccountLinkingNonceFetchAPI",
  [
    "WALogger",
    "WAWebProtobufsE2E.pb",
    "WAWebSendNonMessageDataRequest",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = null;
    function c() {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          if (u != null) {
            (o("WALogger")
              .LOG(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[WAFFLE-TRACE] requestNonceFromPrimary: skipped (dedup, request already in-flight)",
                  ])),
              )
              .sendLogs("waffle-nonce-trace-request", { sampling: 1 }),
              yield u);
            return;
          }
          return (
            o("WALogger")
              .LOG(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[WAFFLE-TRACE] requestNonceFromPrimary: sending nonce fetch RPC",
                  ])),
              )
              .sendLogs("waffle-nonce-trace-request", { sampling: 1 }),
            (u = o("WAWebSendNonMessageDataRequest")
              .sendPeerDataOperationRequest(
                o("WAWebProtobufsE2E.pb").Message$PeerDataOperationRequestType
                  .WAFFLE_LINKING_NONCE_FETCH,
                {},
              )
              .finally(function () {
                u = null;
              })),
            u
          );
        })),
        d.apply(this, arguments)
      );
    }
    l.requestNonceFromPrimary = c;
  },
  98,
);
