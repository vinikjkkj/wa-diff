__d(
  "WAWebGetAllInsightsMap",
  ["WALogger", "WAWebSchemaBusinessBroadcastInsights", "getErrorSafe"],
  function (t, n, r, o, a, i, l) {
    var e;
    async function s() {
      try {
        var t = await o("WAWebSchemaBusinessBroadcastInsights")
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
    }
    l.getAllInsightsMap = s;
  },
  98,
);
