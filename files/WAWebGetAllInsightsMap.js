__d(
  "WAWebGetAllInsightsMap",
  [
    "WALogger",
    "WAWebSchemaBusinessBroadcastInsights",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s() {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          try {
            var t = yield o("WAWebSchemaBusinessBroadcastInsights")
              .getBusinessBroadcastInsightsTable()
              .all();
            return new Map(
              t.map(function (e) {
                return [e.campaignId, e];
              }),
            );
          } catch (t) {
            throw (
              o("WALogger").ERROR(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[broadcast:insights-storage] Failed to get all insights: ",
                    "",
                  ])),
                r("getErrorSafe")(t),
              ),
              t
            );
          }
        })),
        u.apply(this, arguments)
      );
    }
    l.getAllInsightsMap = s;
  },
  98,
);
