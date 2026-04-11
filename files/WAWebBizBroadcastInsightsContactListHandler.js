__d(
  "WAWebBizBroadcastInsightsContactListHandler",
  ["WALogger", "WAWebProtobufsE2E.pb", "getErrorSafe"],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d = "biz_broadcast_insights_contact_list_received";
    function m(e) {
      return e === o("WAWebProtobufsE2E.pb").Message$InsightDeliveryState.SENT
        ? "SENT"
        : e === o("WAWebProtobufsE2E.pb").Message$InsightDeliveryState.DELIVERED
          ? "DELIVERED"
          : e === o("WAWebProtobufsE2E.pb").Message$InsightDeliveryState.READ
            ? "READ"
            : e ===
                o("WAWebProtobufsE2E.pb").Message$InsightDeliveryState.REPLIED
              ? "REPLIED"
              : e ===
                  o("WAWebProtobufsE2E.pb").Message$InsightDeliveryState
                    .QUICK_REPLIED
                ? "QUICK_REPLIED"
                : "SENT";
    }
    function p(t) {
      try {
        var n, a, i;
        if (t.length === 0)
          return (
            o("WALogger").WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[handleInsightsContactListResponse] Empty results",
                ])),
            ),
            null
          );
        var l = t[0],
          d = l == null ? void 0 : l.bizBroadcastInsightsContactListResponse;
        if (d == null)
          return (
            o("WALogger").WARN(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[handleInsightsContactListResponse] no response data",
                ])),
            ),
            null
          );
        var p = (n = d.campaignId) != null ? n : "",
          _ = Number((a = d.timestampMs) != null ? a : 0),
          f = ((i = d.contacts) != null ? i : []).map(function (e) {
            var t;
            return {
              contactJid: (t = e.contactJid) != null ? t : "",
              state: m(e.state),
            };
          }),
          g = { campaignId: p, contacts: f, timestampMs: _ };
        return (
          o("WALogger").LOG(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "[handleInsightsContactListResponse] ",
                " contacts, campaign=",
                "",
              ])),
            f.length,
            p,
          ),
          g
        );
      } catch (e) {
        return (
          o("WALogger").ERROR(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "[handleInsightsContactListResponse] failed: ",
                "",
              ])),
            r("getErrorSafe")(e),
          ),
          null
        );
      }
    }
    ((l.BIZ_BROADCAST_INSIGHTS_CONTACT_LIST_RECEIVED = d),
      (l.handleInsightsContactListResponse = p));
  },
  98,
);
