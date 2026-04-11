__d(
  "WAWebBizBroadcastInsightsStorageUtils",
  [
    "WALogger",
    "WAWebSchemaBusinessBroadcastInsights",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m;
    function p(e, t, n) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n, a) {
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
            (yield o("WAWebSchemaBusinessBroadcastInsights")
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
            (yield o("WAWebSchemaBusinessBroadcastInsights")
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
        })),
        g.apply(this, arguments)
      );
    }
    function h(e) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          try {
            return yield o("WAWebSchemaBusinessBroadcastInsights")
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
        })),
        y.apply(this, arguments)
      );
    }
    function C() {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          try {
            var e = yield o("WAWebSchemaBusinessBroadcastInsights")
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
        })),
        b.apply(this, arguments)
      );
    }
    ((l.upsertInsightsStorage = p),
      (l.removeInsightsStorage = f),
      (l.getInsightsForCampaign = h),
      (l.getAllInsightsMap = C));
  },
  98,
);
