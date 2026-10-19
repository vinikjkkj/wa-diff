__d(
  "WAWebBizBroadcastInsightsStorageUtils",
  [
    "WALogger",
    "WAWebSchemaBusinessBroadcastInsights",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d;
    function m(e, t, n) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n, a) {
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
        p.apply(this, arguments)
      );
    }
    function _(e) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
        f.apply(this, arguments)
      );
    }
    function g(e) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
        h.apply(this, arguments)
      );
    }
    ((l.upsertInsightsStorage = m),
      (l.removeInsightsStorage = _),
      (l.getInsightsForCampaign = g));
  },
  98,
);
