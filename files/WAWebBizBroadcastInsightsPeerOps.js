__d(
  "WAWebBizBroadcastInsightsPeerOps",
  [
    "WALogger",
    "WAWebProtobufsE2E.pb",
    "WAWebSendNonMessageDataRequest",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m;
    async function p(t) {
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
          await o(
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
    }
    async function _(e) {
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
          await o(
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
    }
    ((l.sendInsightsRefreshPoke = p), (l.requestInsightsContactList = _));
  },
  98,
);
