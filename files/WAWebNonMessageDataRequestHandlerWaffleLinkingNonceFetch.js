__d(
  "WAWebNonMessageDataRequestHandlerWaffleLinkingNonceFetch",
  [
    "WALogger",
    "WAWebAccountLinkingAPI",
    "WAWebAccountLinkingDBOperationsAPI",
    "WAWebWaffleLifecycleWamLogger",
    "WAWebWamEnumWaffleLifecycleTraceActionType",
    "WAWebWamEnumWaffleLifecycleTraceSourceType",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = o("WAWebAccountLinkingDBOperationsAPI").getAccountLinkingDBOps(
        "account_linking",
      );
    async function c(t) {
      o("WAWebWaffleLifecycleWamLogger").logNonceFetch({
        traceAction: o("WAWebWamEnumWaffleLifecycleTraceActionType")
          .WAFFLE_LIFECYCLE_TRACE_ACTION_TYPE.SYNCD_RECEIVED,
        traceSource: o("WAWebWamEnumWaffleLifecycleTraceSourceType")
          .WAFFLE_LIFECYCLE_TRACE_SOURCE_TYPE.PRIMARY_NONCE_RESPONSE,
      });
      var n = 0,
        r = 0;
      for (var a of t) {
        var i = a.waffleNonceFetchRequestResponse;
        if (i == null) {
          n++;
          continue;
        }
        var l = i.nonce,
          c = i.waEntFbid;
        if (l == null || c == null) {
          r++;
          continue;
        }
        await u.updateAccountLinkingData(l, c);
        var d = await o("WAWebAccountLinkingAPI").refreshAccessToken();
        d && (await o("WAWebAccountLinkingAPI").fetchServiceData());
      }
      (n > 0 &&
        o("WALogger").LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "[rdu] waffle nonce fetch: ",
              " null responses",
            ])),
          n,
        ),
        r > 0 &&
          o("WALogger").LOG(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "[rdu] waffle nonce fetch: ",
                " null nonce/waEntFbid",
              ])),
            r,
          ));
    }
    l.handleWaffleLinkingNonceFetchOperationRequestResponse = c;
  },
  98,
);
