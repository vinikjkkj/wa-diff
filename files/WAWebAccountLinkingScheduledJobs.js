__d(
  "WAWebAccountLinkingScheduledJobs",
  [
    "WALogger",
    "WAWebAccountLinkingAPI",
    "WAWebAccountLinkingDBOperationsAPI",
    "WAWebGraphQLServerError",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = o("WAWebAccountLinkingDBOperationsAPI").getAccountLinkingDBOps(
        "account_linking",
      );
    function c() {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var t = yield u.getPingExpirationTime(),
            n = Date.now() / 1e3;
          if (n > t) {
            try {
              yield o("WAWebAccountLinkingAPI").ping();
            } catch (t) {
              var r =
                t instanceof o("WAWebGraphQLServerError").GraphQLServerError
                  ? o("WAWebGraphQLServerError").formatGraphQLServerError(t)
                  : t;
              o("WALogger")
                .ERROR(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[WAFFLE] ping failed: ",
                      "",
                    ])),
                  r,
                )
                .tags("waffle", "account-linking", "ping")
                .sendLogs("waffle-ping-failed", { sampling: 0.01 });
              return;
            }
            try {
              yield o("WAWebAccountLinkingAPI").fetchServiceData();
            } catch (e) {
              var a =
                e instanceof o("WAWebGraphQLServerError").GraphQLServerError
                  ? o("WAWebGraphQLServerError").formatGraphQLServerError(e)
                  : e;
              o("WALogger")
                .ERROR(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "[WAFFLE] fetchServiceData failed: ",
                      "",
                    ])),
                  a,
                )
                .tags("waffle", "account-linking", "fetch-service-data")
                .sendLogs("waffle-fetch-service-data-failed", {
                  sampling: 0.01,
                });
            }
          }
        })),
        d.apply(this, arguments)
      );
    }
    l.scheduledWaffleJobs = c;
  },
  98,
);
