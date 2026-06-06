__d(
  "WAWebAccountLinkingScheduledJobs",
  [
    "WALogger",
    "WAWebAccountLinkingAPI",
    "WAWebAccountLinkingDBOperationsAPI",
    "WAWebGraphQLServerError",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = o("WAWebAccountLinkingDBOperationsAPI").getAccountLinkingDBOps(
        "account_linking",
      );
    async function c() {
      var t = await u.getPingExpirationTime(),
        n = Date.now() / 1e3;
      if (n > t) {
        try {
          await o("WAWebAccountLinkingAPI").ping();
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
          await o("WAWebAccountLinkingAPI").fetchServiceData();
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
            .sendLogs("waffle-fetch-service-data-failed", { sampling: 0.01 });
        }
      }
    }
    l.scheduledWaffleJobs = c;
  },
  98,
);
