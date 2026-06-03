__d(
  "WAWebBizBroadcastInsightsPeerOps",
  [
    "WALogger",
    "WAWebProtobufsE2E.pb",
    "WAWebSendNonMessageDataRequest",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m;
    function p(e) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          try {
            return (
              o("WALogger").LOG(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[sendInsightsRefreshPoke] Sending refresh poke for campaign ",
                    "",
                  ])),
                t,
              ),
              yield o(
                "WAWebSendNonMessageDataRequest",
              ).sendPeerDataOperationRequest(
                o("WAWebProtobufsE2E.pb").Message$PeerDataOperationRequestType
                  .BUSINESS_BROADCAST_INSIGHTS_REFRESH,
                { bizBroadcastInsightsRefreshRequest: { campaignId: t } },
                { skipStoringMessage: !0 },
              ),
              o("WALogger").LOG(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[sendInsightsRefreshPoke] Refresh poke sent for campaign ",
                    "",
                  ])),
                t,
              ),
              !0
            );
          } catch (e) {
            return (
              o("WALogger")
                .ERROR(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "[sendInsightsRefreshPoke] Failed to send refresh poke for ",
                      "",
                    ])),
                  t,
                )
                .catching(r("getErrorSafe")(e))
                .sendLogs("business-broadcast-insights-refresh-failed"),
              !1
            );
          }
        })),
        _.apply(this, arguments)
      );
    }
    function f(e) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          try {
            return (
              o("WALogger").LOG(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "[requestInsightsContactList] req contacts ",
                    "",
                  ])),
                e,
              ),
              yield o(
                "WAWebSendNonMessageDataRequest",
              ).sendPeerDataOperationRequest(
                o("WAWebProtobufsE2E.pb").Message$PeerDataOperationRequestType
                  .BUSINESS_BROADCAST_INSIGHTS_DELIVERED_TO,
                { bizBroadcastInsightsContactListRequest: { campaignId: e } },
              ),
              o("WALogger").LOG(
                d ||
                  (d = babelHelpers.taggedTemplateLiteralLoose([
                    "[requestInsightsContactList] contacts req sent ",
                    "",
                  ])),
                e,
              ),
              !0
            );
          } catch (t) {
            return (
              o("WALogger")
                .ERROR(
                  m ||
                    (m = babelHelpers.taggedTemplateLiteralLoose([
                      "[requestInsightsContactList] contacts req failed ",
                      "",
                    ])),
                  e,
                )
                .catching(r("getErrorSafe")(t))
                .sendLogs("business-broadcast-insights-contacts-failed"),
              !1
            );
          }
        })),
        g.apply(this, arguments)
      );
    }
    ((l.sendInsightsRefreshPoke = p), (l.requestInsightsContactList = f));
  },
  98,
);
