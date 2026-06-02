__d(
  "WAWebBizBroadcastInsightsStorageUtils",
  ["WALogger", "WAWebSchemaBusinessBroadcastInsights", "getErrorSafe"],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m;
    async function p(t, n, a) {
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
    async function _(e) {
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
    async function f(e) {
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
    async function g() {
      try {
        var e = await o("WAWebSchemaBusinessBroadcastInsights")
          .getBusinessBroadcastInsightsTable()
          .all();
        return new Map(
          e.map(function (e) {
            return [e.campaignId, e];
          }),
        );
      } catch (e) {
        throw (
          o("WALogger").ERROR(
            m ||
              (m = babelHelpers.taggedTemplateLiteralLoose([
                "[broadcast:insights-storage] Failed to get all insights: ",
                "",
              ])),
            r("getErrorSafe")(e),
          ),
          e
        );
      }
    }
    ((l.upsertInsightsStorage = p),
      (l.removeInsightsStorage = _),
      (l.getInsightsForCampaign = f),
      (l.getAllInsightsMap = g));
  },
  98,
);
