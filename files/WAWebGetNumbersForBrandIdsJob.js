__d(
  "WAWebGetNumbersForBrandIdsJob",
  [
    "WALogger",
    "WAWebGetNumbersForBrandIdsJobQuery.graphql",
    "WAWebGraphQLConstants",
    "WAWebGraphQLServerError",
    "WAWebMarketingMessagesUserFeedbackGatingUtils",
    "WAWebNetworkStatus",
    "WAWebRelayClient",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c =
        e !== void 0
          ? e
          : (e = n("WAWebGetNumbersForBrandIdsJobQuery.graphql")),
      d = { type: "error" };
    function m(e) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          yield r("WAWebNetworkStatus").waitIfOffline();
          var t = {
            input: {
              brand_ids: e,
              lid_based_response: o(
                "WAWebMarketingMessagesUserFeedbackGatingUtils",
              ).isMMOptOutAlwaysUseLidInGraphQLEnabled(),
            },
          };
          try {
            var n,
              a = yield o("WAWebRelayClient").fetchQuery(c, t, {
                accessToken: o("WAWebGraphQLConstants")
                  .WHATSAPP_GRAPHQL_WWW_ACCESS_TOKEN,
                environmentType: "whatsapp_www",
              }),
              i = [];
            return (
              a == null ||
                (n = a.xwa_get_numbers_for_brand_ids) == null ||
                n.brand_ids_data.forEach(function (e) {
                  var t = e.brand_id,
                    n = e.error,
                    r = e.phone_numbers,
                    a = e.lids;
                  t != null &&
                    n == null &&
                    i.push({
                      brandId: t,
                      lids: a.map(function (e) {
                        return o("WAWebWidFactory").createUserLidOrThrow(
                          e,
                          "lid",
                        );
                      }),
                      phoneNumbers: r,
                    });
                }),
              o("WALogger").LOG(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "getNumbersForBrandIdsJob: success",
                  ])),
              ),
              { type: "success", value: i }
            );
          } catch (e) {
            return (
              o("WALogger").LOG(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "getNumbersForBrandIdsJob: failed with error",
                  ])),
              ),
              e instanceof o("WAWebGraphQLServerError").GraphQLServerError
                ? { type: "graphql-error", error: e }
                : d
            );
          }
        })),
        p.apply(this, arguments)
      );
    }
    l.getNumbersForBrandIdsJob = m;
  },
  98,
);
