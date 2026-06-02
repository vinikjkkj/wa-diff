__d(
  "WAWebAccountLinkingNonceFetchAPI",
  [
    "WALogger",
    "WAWebBoolFunc",
    "WAWebProtobufsE2E.pb",
    "WAWebSendNonMessageDataRequest",
    "WAWebWaffleLifecycleWamLogger",
    "WAWebWamEnumWaffleLifecycleTraceActionType",
    "WAWebWamEnumWaffleLifecycleTraceSourceType",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = 3e3,
      u = null,
      c = 0;
    async function d() {
      var t = u;
      if (t != null)
        return (
          o("WAWebWaffleLifecycleWamLogger").logNonceFetch({
            traceAction: o("WAWebWamEnumWaffleLifecycleTraceActionType")
              .WAFFLE_LIFECYCLE_TRACE_ACTION_TYPE.NONCE_FETCH_DEDUPLICATED,
            traceSource: o("WAWebWamEnumWaffleLifecycleTraceSourceType")
              .WAFFLE_LIFECYCLE_TRACE_SOURCE_TYPE.PRIMARY_NONCE_REQUEST,
          }),
          t
        );
      var n = Date.now();
      return c > 0 && n - c < s
        ? !1
        : ((c = n),
          o("WAWebWaffleLifecycleWamLogger").logNonceFetch({
            traceAction: o("WAWebWamEnumWaffleLifecycleTraceActionType")
              .WAFFLE_LIFECYCLE_TRACE_ACTION_TYPE.NONCE_FETCH_INITIATED,
            traceSource: o("WAWebWamEnumWaffleLifecycleTraceSourceType")
              .WAFFLE_LIFECYCLE_TRACE_SOURCE_TYPE.PRIMARY_NONCE_REQUEST,
          }),
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
    }
    l.requestNonceFromPrimary = d;
  },
  98,
);
