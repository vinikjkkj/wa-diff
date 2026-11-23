__d(
  "WAWebBizBroadcastInsightsStorageUtils",
  ["WALogger", "WAWebSchemaBusinessBroadcastInsights", "getErrorSafe"],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d;
    async function m(t, n, a) {
      try {
        var i,
          l,
          u,
          c,
          d,
          m = {
            campaignId: t,
            deliveredCount: (i = n.deliveredCount) != null ? i : 0,
            lastUpdatedTimestampMs: a,
            quickReplyCount: (l = n.quickReplyCount) != null ? l : 0,
            readCount: (u = n.readCount) != null ? u : 0,
            recipientCount: (c = n.recipientCount) != null ? c : 0,
            repliedCount: (d = n.repliedCount) != null ? d : 0,
          };
        (await o("WAWebSchemaBusinessBroadcastInsights")
          .getBusinessBroadcastInsightsTable()
          .createOrReplace(m),
          o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[broadcast:insights-storage] Stored insights for campaign ",
                "",
              ])),
            t,
          ));
      } catch (e) {
        throw (
          o("WALogger").ERROR(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "[broadcast:insights-storage] upsert failed ",
                ": ",
                "",
              ])),
            t,
            r("getErrorSafe")(e),
          ),
          e
        );
      }
    }
    async function p(e) {
      try {
        (await o("WAWebSchemaBusinessBroadcastInsights")
          .getBusinessBroadcastInsightsTable()
          .remove(e),
          o("WALogger").LOG(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "[broadcast:insights-storage] Removed insights for campaign ",
                "",
              ])),
            e,
          ));
      } catch (t) {
        throw (
          o("WALogger").ERROR(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "[broadcast:insights-storage] remove failed ",
                ": ",
                "",
              ])),
            e,
            r("getErrorSafe")(t),
          ),
          t
        );
      }
    }
    async function _(e) {
      try {
        return await o("WAWebSchemaBusinessBroadcastInsights")
          .getBusinessBroadcastInsightsTable()
          .get(e);
      } catch (t) {
        throw (
          o("WALogger").ERROR(
            d ||
              (d = babelHelpers.taggedTemplateLiteralLoose([
                "[broadcast:insights-storage] Failed to get insights for ",
                ": ",
                "",
              ])),
            e,
            r("getErrorSafe")(t),
          ),
          t
        );
      }
    }
    ((l.upsertInsightsStorage = m),
      (l.removeInsightsStorage = p),
      (l.getInsightsForCampaign = _));
  },
  98,
);
