__d(
  "WAWebAccountLinkingScheduledJobs",
  [
    "WALogger",
    "WAWebAccountLinkingDBOperationsAPI",
    "WAWebGraphQLServerError",
    "requireDeferred",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = r("requireDeferred")("WAWebAccountLinkingAPI").__setRef(
        "WAWebAccountLinkingScheduledJobs",
      ),
      c = o("WAWebAccountLinkingDBOperationsAPI").getAccountLinkingDBOps(
        "account_linking",
      );
    async function d() {
      var t = await c.getPingExpirationTime(),
        n = Date.now() / 1e3;
      if (n > t) {
        try {
          var r = await u.load(),
            a = r.ping;
          await a();
        } catch (t) {
          var i =
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
              i,
            )
            .tags("waffle", "account-linking", "ping")
            .sendLogs("waffle-ping-failed", { sampling: 0.01 });
          return;
        }
        try {
          var l = await u.load(),
            d = l.fetchServiceData;
          await d();
        } catch (e) {
          var m =
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
              m,
            )
            .tags("waffle", "account-linking", "fetch-service-data")
            .sendLogs("waffle-fetch-service-data-failed", { sampling: 0.01 });
        }
      }
    }
    l.scheduledWaffleJobs = d;
  },
  98,
);
