__d(
  "WAWebAccountLinkingNonceFetchAPI",
  [
    "WALogger",
    "WAWebAccountLinkingGatingUtils",
    "WAWebProtobufsE2E.pb",
    "WAWebSendNonMessageDataRequest",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d = 3e3,
      m = null,
      p = 0;
    function _() {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          if (!o("WAWebAccountLinkingGatingUtils").accountLinkingEnabled())
            return !1;
          var t = m;
          if (t != null)
            return (
              o("WALogger")
                .LOG(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[WAFFLE-TRACE] requestNonceFromPrimary: skipped (dedup, request already in-flight)",
                    ])),
                )
                .sendLogs("waffle-nonce-trace-request", { sampling: 1 }),
              t
            );
          var n = Date.now();
          return p > 0 && n - p < d
            ? (o("WALogger")
                .LOG(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "[WAFFLE-TRACE] requestNonceFromPrimary: skipped (cooldown, ",
                      "ms remaining)",
                    ])),
                  d - (n - p),
                )
                .sendLogs("waffle-nonce-trace-request", { sampling: 1 }),
              !1)
            : ((p = n),
              o("WALogger")
                .LOG(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "[WAFFLE-TRACE] requestNonceFromPrimary: sending nonce fetch RPC",
                    ])),
                )
                .sendLogs("waffle-nonce-trace-request", { sampling: 1 }),
              (m = o("WAWebSendNonMessageDataRequest")
                .sendPeerDataOperationRequest(
                  o("WAWebProtobufsE2E.pb").Message$PeerDataOperationRequestType
                    .WAFFLE_LINKING_NONCE_FETCH,
                  {},
                )
                .then(
                  function () {
                    return !0;
                  },
                  function (e) {
                    return (
                      o("WALogger")
                        .ERROR(
                          c ||
                            (c = babelHelpers.taggedTemplateLiteralLoose([
                              "[WAFFLE] requestNonceFromPrimary RPC failed",
                            ])),
                        )
                        .catching(r("getErrorSafe")(e)),
                      !0
                    );
                  },
                )
                .finally(function () {
                  m = null;
                })),
              m);
        })),
        f.apply(this, arguments)
      );
    }
    l.requestNonceFromPrimary = _;
  },
  98,
);
