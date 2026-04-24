__d(
  "WAWebAccountLinkingNonceFetchAPI",
  [
    "WALogger",
    "WAWebAccountLinkingGatingUtils",
    "WAWebBoolFunc",
    "WAWebProtobufsE2E.pb",
    "WAWebSendNonMessageDataRequest",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = 3e3,
      u = null,
      c = 0;
    function d() {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          if (!o("WAWebAccountLinkingGatingUtils").accountLinkingEnabled())
            return !1;
          var t = u;
          if (t != null) return t;
          var n = Date.now();
          return c > 0 && n - c < s
            ? !1
            : ((c = n),
              (u = o("WAWebSendNonMessageDataRequest")
                .sendPeerDataOperationRequest(
                  o("WAWebProtobufsE2E.pb").Message$PeerDataOperationRequestType
                    .WAFFLE_LINKING_NONCE_FETCH,
                  {},
                )
                .then(o("WAWebBoolFunc").returnTrue, function (t) {
                  return (
                    o("WALogger")
                      .ERROR(
                        e ||
                          (e = babelHelpers.taggedTemplateLiteralLoose([
                            "[WAFFLE] requestNonceFromPrimary RPC failed",
                          ])),
                      )
                      .catching(r("getErrorSafe")(t)),
                    !0
                  );
                })
                .finally(function () {
                  u = null;
                })),
              u);
        })),
        m.apply(this, arguments)
      );
    }
    l.requestNonceFromPrimary = d;
  },
  98,
);
